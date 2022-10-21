import { ReactiveController, ReactiveControllerHost } from "lit";
export declare class MouseController implements ReactiveController {
    host: ReactiveControllerHost;
    ticking: boolean;
    offsetY: number | undefined;
    offsetX: number | undefined;
    constructor(host: ReactiveControllerHost);
    hostConnected(): void;
    handleMouseMove: (e: MouseEvent) => void;
    hostDisconnected(): void;
}
