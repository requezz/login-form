import CustomInput from "./components/CustomInput/CustomInput";
import React, { useState } from "react";
import { useTheme } from "../../../hooks/themeContext/themeContext";
import { classNames } from "../../../helpers/classNames";
import styles from "./LoginPage.module.scss";
import { countriesData } from "../constants/countriesData";
import CustomButton from "./components/CustomButton/CustomButton";
import { CustomIcon } from "./components/CustomIcon/CustomIcon";
import { ReactComponent as EyeInvisible } from "../../../assets/icons/eye-invisible.svg";
import { ReactComponent as ArrowBottom } from "../../../assets/icons/arrow-bottom.svg";

interface FormState {
  name: string;
  email: string;
  password: string;
  passwordAgain: string;
  country: string;
  promoCode: string;
}

const LoginPage = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    passwordAgain: "",
    country: "",
    promoCode: "",
  });

  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleInputChange = (property: keyof FormState, value: string) => {
    if (value === "" && property !== "promoCode") {
      setFormData((prev) => ({
        ...prev,
        [property]: prev[property].slice(0, -1),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [property]: value }));
    }
  };

  const handleCountrySelection = (selectedCountry: string) => {
    handleInputChange("country", selectedCountry);
    setIsDropdownVisible(false);
  };

  const { theme } = useTheme();

  const componentStyles = {
    backgroundColor: theme === "light" ? "#e6ecfc" : "#0d1230",
    color: theme === "light" ? "#000000" : "#ffffff",
    border: theme === "light" ? "#e4eaf8" : "none",
  };

  return (
    <div
      className={classNames(styles.LoginPage, {}, [])}
      style={componentStyles}
    >
      <div className={styles.logoTitle}>
        <h2>Finapp</h2>
      </div>
      <div className={styles.formTitle}>
        <h3>Register</h3>
      </div>
      <div className={styles.personalData}>
        <CustomInput
          className={styles.input}
          label="Name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          name="name"
        />
        <CustomInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={styles.inputEmail}
          name="email"
        />
      </div>
      <div className={styles.passwordSection}>
        <CustomInput
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleInputChange("password", e.target.value)}
          className={styles.inputPassword}
          name="password"
        />
        <CustomIcon Svg={EyeInvisible} className={styles.passwordIcon} />

        <CustomInput
          label="Password again"
          type="password"
          value={formData.passwordAgain}
          onChange={(e) => handleInputChange("passwordAgain", e.target.value)}
          className={styles.inputPasswordAgain}
          name="passwordAgain"
        />
      </div>
      <div className={styles.generatePasswordText}>Generate</div>
      <div className={styles.dropdown}>
        <div className={styles.inputWrapper}>
          <CustomInput
            type="text"
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className={styles.countryInput}
            label="Country"
            name="country"
          />
          <CustomIcon
            onClick={toggleDropdown}
            Svg={ArrowBottom}
            className={styles.arrowIcon}
          />
        </div>
        {isDropdownVisible && (
          <ul className={styles.dropdownList}>
            {countriesData.map((country: { country: string }, index) => (
              <li
                key={index}
                onClick={() => handleCountrySelection(country.country)}
              >
                {country.country}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.promoCodeBlock}>
        <CustomInput
          label="Promo code"
          type="text"
          value={formData.promoCode}
          onChange={(e) => handleInputChange("promoCode", e.target.value)}
          className={styles.promoCodeInput}
          name="promoCode"
        />
      </div>
      <div className={styles.commonButtons}>
        <CustomButton
          onClick={() => alert("Registration successful!")}
          className={styles.registerButton}
          type="submit"
        >
          REGISTER
        </CustomButton>
        <CustomButton
          onClick={() => alert("Login successful!")}
          className={styles.loginButton}
          type="submit"
        >
          LOG IN
        </CustomButton>
      </div>
      <div className={styles.blockText}>
        By clicking on the button, you confirm that you have read the client
        agreement
      </div>
    </div>
  );
};

export default LoginPage;
