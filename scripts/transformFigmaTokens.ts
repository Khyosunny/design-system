import url from 'url';
import path from 'path';
import fs from 'fs';
import prettier from 'prettier';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const jsonDir = path.resolve(__dirname, '../src/figma/tokens.json');
const json = JSON.parse(fs.readFileSync(jsonDir, 'utf8'));
const outputDir = path.resolve(__dirname, '../src/figma');
const tsDir = path.resolve(outputDir, 'tokens.ts');
const prettierrc = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../.prettierrc'), 'utf8'),
);
let tokenObject = 'export const tokens = {\n';

for (let key in json.core) {
  if (key === 'colors') {
    const entries = Object.entries(json.core[key]);
    const value = entries.reduce((acc, [name, value]) => {
      const palette = Object.entries(
        value as { [key: string]: { value: string } },
      ).flatMap(([name, value]) => `${name}: '${value.value}'\n`);
      acc += `${name}: {${palette}}\n,`;
      return acc;
    }, '');

    tokenObject += `${key}: {\n${value}\n},\n`;
  } else {
    const entries = Object.entries<{ value: string }>(json.core[key]);
    const value = entries.map(([name, value]) => {
      const tokenValue =
        typeof value.value === 'string' && isNaN(Number(value.value))
          ? `'${value.value}'`
          : value.value;
      return `${name}: ${tokenValue},`;
    });

    tokenObject += `${key}: {\n${value.join('\n')}\n},\n`;
  }
}
tokenObject += '};\n';

const formatAndWrite = async () => {
  const formattedTS = await prettier.format(tokenObject, {
    parser: 'typescript',
    ...prettierrc,
  });

  fs.writeFileSync(tsDir, formattedTS);
};

formatAndWrite().catch((error) => {
  console.error('Error formatting or writing tokens:', error);
});
