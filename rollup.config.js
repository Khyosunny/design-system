import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),

    // 기본적으로 Rollup은 모듈의 이름만을 해석하기 때문에
    // 노드의 내장 모듈이나 node_modules에 설치된 외부 모듈을 해석하지 못함
    // rollup 번들러가 모듈을 찾고 해석할 수 있도록 도와주는 역할
    resolve(),

    // 외부 노드 모듈이 es6 으로 변환되지 않았을 경우 es6 으로 변환
    //(CommonJS 로 작성된 모듈들을 ES6로 바꾸어서 rollup이 해석할 수 있게 도와줌)
    commonjs({
      include: 'node_modules/**',
    }),

    // true인 경우 tsconfig에 지정된 declationDir에 선언된 디렉토리로 내보내짐
    // false인 경우 rollup 구성에 지정된 destination 디렉토리 내에 선언 파일이 내보내짐
    // 다른 롤업 플러그인이 선언 파일에 액세스해야 하는 경우 false로 설정
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
