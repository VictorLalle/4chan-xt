import { rollup } from "rollup";
import inlineFile from "./rollup-plugin-inline-file.js";

rollup({
  input: '../src/main/Main.js',
  output: {
    dir: '../builds/test/'
  },
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
  ]
});
