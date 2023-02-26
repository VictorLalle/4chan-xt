import { rollup } from "rollup";
import typescript from '@rollup/plugin-typescript';
import setupFileInliner from "./rollup-plugin-inline-file.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const inlineFile = await setupFileInliner();

  const bundle = await rollup({
    input: resolve(__dirname, '../src/main/Main.js'),
    plugins: [
      typescript(),
      inlineFile({
        include: ["**/*.html", "**/*.css"],
      }),
      inlineFile({
        include: ["**/*.png", "**/*.gif", "**/*.wav", "**/*.woff"],
        // base64 encode
        transformer(input) {
          return Buffer.from(input).toString('base64');
        }
      }),
      inlineFile({
        include: "**/package.json",
        wrap: false,
        transformer(input) {
          const data = JSON.parse(input);
          return `export default ${JSON.stringify(data.meta)};`;
        }
      })
    ],
    output: {
      format: "es",
      name: "bundle.js",
    }
  });

  const bundledResult = await bundle.write({
    // file: '../builds/test/rollupOutput.js',
    dir: resolve(__dirname, '../builds/test/')
  });
})();
