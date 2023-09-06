import { defineConfig, loadEnv } from "vite";

loadEnv("development", process.cwd());

export default defineConfig({
  define: {
    envs: process.env,
  },
});
