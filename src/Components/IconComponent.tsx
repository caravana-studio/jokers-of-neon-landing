import { FC, ReactSVGElement, SVGProps } from "react";
import { Img } from "@chakra-ui/react";

interface IconComponentProps {
  icon: string | FC<SVGProps<ReactSVGElement>>;
  width: string;
  height: string;
  color?: string;
}

export const IconComponent: FC<IconComponentProps> = ({
  icon,
  width,
  height,
  color
}) => {
  const Icon = icon;

  return typeof icon === "string" ? (
    <Img src={icon} width={width} height={height} />
  ) : (
    <Icon width={width} height={height} fill={color ??"white"} />
  );
};
