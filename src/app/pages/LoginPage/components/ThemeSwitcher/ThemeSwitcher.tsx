import React from "react";
import { useTheme } from "../../../../../hooks/themeContext/themeContext";
import CustomButton from "../CustomButton/CustomButton";
import { classNames } from "../../../../../helpers/classNames";
import { ReactComponent as LightIcon } from "../../../../../assets/icons/theme-light.svg";
import { ReactComponent as DarkIcon } from "../../../../../assets/icons/theme-dark.svg";
import { CustomIcon } from "../CustomIcon/CustomIcon";
import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  onToggle: () => void;
  className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (
  props: ThemeSwitcherProps
) => {
  const { className, onToggle } = props;

  const { theme } = useTheme();

  return (
    <div>
      <CustomButton
        className={classNames(styles.switcherButton, {}, [className])}
        onClick={onToggle}
      >
        {theme === "light" ? (
          <CustomIcon Svg={LightIcon} />
        ) : (
          <CustomIcon Svg={DarkIcon} />
        )}
      </CustomButton>
    </div>
  );
};
