import { version } from "./package.json"
import { version as vueVersion } from "@vue/compiler-sfc/package.json"

await Bun.build({
    entrypoints: ["./src/index.ts"],
    outdir: "./dist",
    minify: true,
    packages: "external",
    define: {
        "process.env.GEN_SOURCEMAP": JSON.stringify(false),
        "process.env.VERSION": JSON.stringify(version),
        "process.env.VUE_VERSION": JSON.stringify(vueVersion),
    },
});
