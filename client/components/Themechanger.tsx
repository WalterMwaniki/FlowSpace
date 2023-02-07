"use client";

import { useState, useEffect } from "react";
import { useTheme, ThemeProvider } from "next-themes";

import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "@material/material-color-utilities";

const themeBuilder = (color: string, dark: boolean) => {
  const mytheme = themeFromSourceColor(argbFromHex(color));
  const tones = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100];
  if (typeof window !== "undefined") {
    applyTheme(mytheme, {
      target: document.documentElement,
      dark: dark,
      paletteTones: tones,
    });
  }
};

export const ThemeChanger = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const defaultColor = "#F78C6C";

  let primaryColor: string;
  if (localStorage.getItem("primaryColor")) {
    primaryColor = localStorage.getItem("primaryColor") as string;
  } else {
    primaryColor = defaultColor;
    localStorage.setItem("primaryColor", defaultColor);
  }

  const [color, setColor] = useState(primaryColor);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  useEffect(() => setColor(primaryColor), [primaryColor]);

  if (!mounted) return <></>;

  const updateTheme = (e: any) => {
    localStorage.setItem("primaryColor", e.target.value);
    setColor(e.target.value);
    console.log("color: ", color);
  };

  console.log(theme);
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
          value={primaryColor}
          onChange={(e) => updateTheme(e)}
        />
      </div>
    </ThemeProvider>
  );
};

export default ThemeChanger;

// if (typeof window !== "undefined") {
//   // @ts-ignore;
//   const lightTokens = mytheme.schemes.light.props;
//   for (const [key, value] of Object.entries(lightTokens)) {
//     const hexValue: string = hexFromArgb(value as number);
//     const variable = "--" + key;
//     document.documentElement.style.setProperty(variable, hexValue);
//   }
//   // @ts-ignore;
//   const darkTokens = mytheme.schemes.dark.props;
//   for (const [key, value] of Object.entries(darkTokens)) {
//     const hexValue: string = hexFromArgb(value as number);
//     const variable = "--" + key;
//   }
// }
