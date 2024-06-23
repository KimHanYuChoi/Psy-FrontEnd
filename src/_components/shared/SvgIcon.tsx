import { SVGProps } from "react";

import * as icons from "@/_assets/svgs";

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

interface Props extends SVGProps<SVGAElement> {
  fill?: string;
  icon: IconType;
}

const SvgIcon = ({ fill = "transparent", icon, className, ...props }: Props) => {
  const Icon = icons[icon];

  return <Icon fill={fill} className={className} {...props} />;
};

export default SvgIcon;
