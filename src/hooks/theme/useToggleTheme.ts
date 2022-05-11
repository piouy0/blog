import storage from "util/storage";
import useTheme from "./useTheme";

const useToggleTheme = () => {
  const { checkTheme, enableLightMode, enableDarkMode } = useTheme();

  const save = (value: "light" | "dark") => {
    storage.setItem("theme", value); // For CSR
    document.cookie = `theme=${value}; path=/;`; // For SSR
  };

  const toggle = () => {
    if (!checkTheme) return;
    if (checkTheme === "dark") {
      enableLightMode();
      save("light");
    } else {
      enableDarkMode();
      save("dark");
    }
  };

  return [checkTheme, toggle] as const;
};

export default useToggleTheme;
