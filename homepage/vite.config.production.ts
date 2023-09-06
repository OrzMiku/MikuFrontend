import { defineConfig, loadEnv } from "vite";

const envs = loadEnv("production", process.cwd());

export default defineConfig({
  define: {
    envs,
  },
});
