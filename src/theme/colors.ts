import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#dc3545",
  primaryBright: "#ff6875",
  primaryDark: "#c72332",
  secondary: "#e64e5c",
  success: "#dc3545",
  warning: "#ffc107",
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
  background: "#222222",
  backgroundDisabled: "#4a4a4a",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#333333",
  primaryDark: "#c72332",
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
