const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        p: '#00587A',
        primary: '#044C7F',
        gray87: '#4C4E64DE',
        gray68: '#4C4E64AD',
        gray38: '#4C4E6461',
        gray22: '#4C4E6438',
        icongray: '#ABAEB0',
        urlcyan: '#5397C5',
        gold: '#FFA800',
      },
      fontFamily: {
        body: 'Nunito',
        poppins: 'Poppins'
      },
    },
  },
  plugins: [],
};
