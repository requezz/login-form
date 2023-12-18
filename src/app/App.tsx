import React from "react";
import { ThemeSwitcher } from "./pages/LoginPage/components/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from "../hooks/themeContext/themeContext";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <ThemeSwitcher onToggle={toggleTheme} />
      <LoginPage />
    </div>
  );
}

export default App;
