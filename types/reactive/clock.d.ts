import { ReactiveController, ReactiveControllerHost } from "lit";
export declare class ClockController implements ReactiveController {
    host: ReactiveControllerHost;
    date: string | undefined;
    timerId: number | undefined;
    timeoutSeconds: number;
    constructor(host: ReactiveControllerHost, timeoutSeconds?: number);
    hostConnected(): void;
    handleTimerCallback: () => void;
    hostDisconnected(): void;
}
