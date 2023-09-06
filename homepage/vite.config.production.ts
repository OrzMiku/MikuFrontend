import { defineConfig, loadEnv } from "vite";

const envs = loadEnv("production", process.cwd());

if (envs.VITE_IS_VERCEL) {
  console.log(envs);
}

export default defineConfig({
  define: {
    envs,
  },
});
