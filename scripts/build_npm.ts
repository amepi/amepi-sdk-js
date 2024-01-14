// Deno to npm package build tool
import { build, emptyDir } from "../dev_deps.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./main.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "amepi-sdk-js",
    version: Deno.args[0],
    description: "",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/username/repo.git",
    },
    bugs: {
      url: "https://github.com/username/repo/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    // Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
    // Deno.copyFileSync("CONTRIBUTING.md", "npm/CONTRIBUTING.md");
    // @todo automatically publish to npm registry ?
  },
});
