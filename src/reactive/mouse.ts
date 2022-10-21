import { ReactiveController, ReactiveControllerHost } from "lit";

export class MouseController implements ReactiveController {
  host: ReactiveControllerHost;
  ticking: boolean;
  offsetY: number | undefined;
  offsetX: number | undefined;

  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this);
    this.ticking = false;
  }
  hostConnected(): void {
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = (e: MouseEvent) => {
    this.offsetX = e.offsetX;
    this.offsetY = e.offsetY;
    if (!this.ticking) {
      this.ticking = true;
      window.requestAnimationFrame(() => {
        this.ticking = false;
        this.host?.requestUpdate();
      })
    }
  };

  hostDisconnected(): void {
    document.removeEventListener('mousemove', this.handleMouseMove);
  }
}
