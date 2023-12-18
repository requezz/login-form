import React, { memo } from "react";
import styles from "./CustomIcon.module.scss";
import { classNames } from "../../../../../helpers/classNames";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const CustomIcon = memo((props: CustomIconProps) => {
  const { className, Svg, ...otherProps } = props;

  return (
    <Svg
      className={classNames(styles.CustomIcon, {}, [className])}
      {...otherProps}
    />
  );
});
