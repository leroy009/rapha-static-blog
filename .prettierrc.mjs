// // .prettierrc.mjs
// /** @type {import("prettier").Config} */
// export default {
// 	printWidth: 80,
// 	semi: true,
// 	singleQuote: true,
// 	tabWidth: 2,
// 	trailingComma: 'all',

// 	// See: https://github.com/prettier/prettier/issues/7475
// 	useTabs: true,

//   plugins: ['prettier-plugin-astro'],
//   overrides: [
//     {
//       files: '*.astro',
// 			semi: true,
//       options: {
//         parser: 'astro',
// 				printWidth: 80,
//       },
//     },
//   ],
// };
// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
