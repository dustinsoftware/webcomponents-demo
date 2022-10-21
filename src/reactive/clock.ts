import { ReactiveController, ReactiveControllerHost } from "lit";

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;
  date: string | undefined;
  timerId: number | undefined;
  timeoutSeconds: number;

  constructor(host: ReactiveControllerHost, timeoutSeconds = 1000) {
    (this.host = host).addController(this);
    this.timeoutSeconds = timeoutSeconds;
  }
  hostConnected(): void {
    this.timerId = setInterval(this.handleTimerCallback, this.timeoutSeconds);
  }

  handleTimerCallback = () => {
    this.date = new Date().toString();
    this.host.requestUpdate();
  };

  hostDisconnected(): void {
    clearInterval(this.timerId);
  }
}
