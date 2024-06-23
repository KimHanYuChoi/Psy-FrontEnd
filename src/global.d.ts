import { FC, SVGProps, SVGSVGElement } from "react";

declare global {
  module "*.svg" {
    export const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }
}
