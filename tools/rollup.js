import { rollup } from "rollup";
import inlineFile from "./rollup-plugin-inline-file.js";

rollup({
  input: '../src/main/Main.js',
  plugins: [
    inlineFile({
      include: ["**/*.html", "**/*.css"],
    }),
    inlineFile({
      include: ["**/*.png", "**/*.gif", "**/*.wav"],
      // base64 encode
      transformer(input) {
        return Buffer.from(input).toString('base64');
      }
    })
  ],
  output: {
    format: "es",
    name: "bundle.js",
  }
}).then(async bundle => {
  const bundledResult = await bundle.write({
    // file: '../builds/test/rollupOutput.js',
    dir: '../builds/test/'
  });
});
