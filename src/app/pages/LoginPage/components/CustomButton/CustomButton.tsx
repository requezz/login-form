import { classNames } from "../../../../../helpers/classNames";
import styles from "./CustomButton.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
  children?: ReactNode;
}

const CustomButton = (props: ButtonProps) => {
  const { className, children, type, onClick } = props;

  return (
    <button
      className={classNames(styles.CustomButton, {}, [className])}
      onClick={onClick}
      style={{ marginRight: "10px" }}
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
