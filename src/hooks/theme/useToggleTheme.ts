import { useTheme } from "recoil/atom/theme";
import storage from "util/storage";

const useToggleTheme = () => {
  const { checkTheme, enableLightMode, enableDarkMode } = useTheme();

  const save = (value: "light" | "dark") => {
    storage.setItem("theme", value); // For CSR
    document.cookie = `theme=${value}; path=/;`; // For SSR
  };

  const toggle = (): void => {
    if (!checkTheme) return;
    if (checkTheme === "dark") {
      enableLightMode();
      save("light");
    } else {
      enableDarkMode();
      save("dark");
    }
  };

  return toggle;
};

export default useToggleTheme;
