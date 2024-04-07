import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  root: "./",
  envDir: "./",
  publicDir: "./public",
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        main: resolve("/", "index.html"),
        src: resolve("/", "src/movie-detail.html"),
      },
    },
  },
})
