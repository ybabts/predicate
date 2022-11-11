import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        'tBlue': 'rgba(19, 111, 149, 0.37)',
        'tBlack': 'rgba(0, 0, 0, 0.37)'
      },
      backgroundImage: {
        'home': "url('/img/mike-azevedo-aoaoa.jpg')",
      },
    }
  }
} as Options;
