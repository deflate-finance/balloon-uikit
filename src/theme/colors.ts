import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ff5766",
  primaryBright: "#ff6875",
  primaryDark: "#ff7985",
  secondary: "#e64e5c",
  success: "#31D0AA",
  warning: "#cc4652",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: '#e64e5c',
  textDisabled: '#19090a',
  textSubtle: '#ff6875',
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#e64e5c",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#333333",
  // primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
