declare module "locomotive-scroll" {
    export default class LocomotiveScroll {
      constructor(options: {
        el: HTMLElement | null;
        smooth?: boolean;
        lerp?: number;
        multiplier?: number;
        class?: string;
        direction?: "horizontal" | "vertical";
      });
  
      update(): void;
      destroy(): void;
      scrollTo(target: HTMLElement | string | number, options?: any): void;
      on(event: string, callback: (args: any) => void): void;
    }
  }
  