import { memo } from "react";
import styles from "./CustomInput.module.scss";
import { classNames } from "../../../../../helpers/classNames";

interface CustomInputProps {
  className?: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  label: string;
  name: string;
}

const CustomInput = memo((props: CustomInputProps) => {
  const { className, label, type, value, name, onChange } = props;

  return (
    <div>
      <label className={styles.customLabel}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classNames(styles.CustomInput, {}, [className])}
        name={name}
        autoComplete="off"
      />
    </div>
  );
});

export default CustomInput;
