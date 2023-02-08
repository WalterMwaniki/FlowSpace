"use client";

import { useState, useEffect, use } from "react";
import { useTheme, ThemeProvider } from "next-themes";

import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities";

const themeBuilder = (color: string, dark: boolean) => {
  const mytheme = themeFromSourceColor(argbFromHex(color));
  const tones = [60];
  if (typeof window !== "undefined") {
    applyTheme(mytheme, {
      target: document.documentElement,
      dark: dark,
      paletteTones: tones,
    });
  }
};

export const ThemeChanger = (): JSX.Element => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState("");

  const defaultColor = "#C3E88D";
  let primaryColor: string;

  useEffect(() => {
    // if (typeof window !== "undefined") {
    const localColor = localStorage.getItem("primaryColor");
    if (localColor) {
      primaryColor = localColor;
    } else {
      localStorage.setItem("primaryColor", defaultColor);
      primaryColor = defaultColor;
    }
    // }
    setColor(primaryColor);
  }, []);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  const updateTheme = (e: any) => {
    localStorage.setItem("primaryColor", e.target.value);
    setColor(e.target.value);
  };

  if (theme === "light") {
    themeBuilder(color, false);
  } else if (theme === "dark") {
    themeBuilder(color, true);
  }

  return (
    <ThemeProvider enableSystem={true} attribute="data-theme">
      <div className="theme_picker">
        <button onClick={() => setTheme("light")}>Light</button>
        <button onClick={() => setTheme("dark")}>Dark</button>
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={(e) => updateTheme(e)}
        />
      </div>
    </ThemeProvider>
  );
};

export default ThemeChanger;
