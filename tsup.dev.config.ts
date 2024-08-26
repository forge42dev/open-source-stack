import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.ts"],
	sourcemap: true,
	dts: true,
	minify: false,
	format: ["esm", "cjs"],
	outDir: "dist",
})
