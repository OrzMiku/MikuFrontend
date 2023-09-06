import { defineConfig } from "vite";
import config from "./vite.config.base";
import prodConfig from "./vite.config.production";
import devConfig from "./vite.config.development";

export default defineConfig(({ mode }) => {
  const extraConfig = mode === "development" ? devConfig : prodConfig;
  return { ...config, ...extraConfig };
});
