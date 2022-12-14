const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'retrowave': "url('./src/images/bg.svg')",
      },
      fontFamily: {
        cyberspace: ['Cyberspace', ...defaultTheme.fontFamily.sans],
        cyberspaceFront: ['CyberspaceFront', ...defaultTheme.fontFamily.sans],
        horsemen: ['Horsemen', ...defaultTheme.fontFamily.sans],
        streamster: ['Streamster', ...defaultTheme.fontFamily.mono],
        indelible: ['Indelible', ...defaultTheme.fontFamily.sans],
        blaster: ['Blaster', ...defaultTheme.fontFamily.sans],
        overglow: ['Overglow', ...defaultTheme.fontFamily.sans],
        outrun: ['Outrun', ...defaultTheme.fontFamily.sans],
        rocket: ['Rocket', ...defaultTheme.fontFamily.sans],
        roadrage: ['RoadRage', ...defaultTheme.fontFamily.sans],
        digit: ['Digit', ...defaultTheme.fontFamily.sans],
        rider: ['Rider', ...defaultTheme.fontFamily.sans],
        glitch: ['Glitch', ...defaultTheme.fontFamily.sans],
        xirod: ['Xirod', ...defaultTheme.fontFamily.sans],
        backTTF: ['BackTTF', ...defaultTheme.fontFamily.sans],
        


      },
      screens: {
        'sm': { 'min': '640px', 'max': '767px' },
        'md': { 'min': '768px', 'max': '1023px' },
        'lg': { 'min': '1024px'}
      },
      colors: {
        white: "#ffffff",
        black: {
          "50": "#535353",
          "100": "#494949",
          "200": "#3f3f3f",
          "300": "#353535",
          "400": "#2b2b2b",
          "500": "#212121",
          "600": "#171717",
          "700": "#0d0d0d",
          "800": "#030303",
          "900": "#000000"
        },
        pink: {
          "50": "#ff58c8",
          "100": "#ff4ebe",
          "200": "#ff44b4",
          "300": "#fb3aaa",
          "400": "#f130a0",
          "500": "#e72696",
          "600": "#dd1c8c",
          "700": "#d31282",
          "800": "#c90878",
          "900": "#bf006e"
        },
        red: {
          '50': '#ffebee',
          '100': '#ffcdd2',
          '200': '#ef9a9a',
          '300': '#e57373',
          '400': '#ef5350',
          '500': '#f44336',
          '600': '#e53935',
          '700': '#d32f2f',
          '800': '#c62828',
          '900': '#b71c1c',
          'accent-100': '#ff8a80',
          'accent-200': '#ff5252',
          'accent-400': '#ff1744',
          'accent-700': '#d50000',
        },
        green: {
          "50": "#90ffd7",
          "100": "#86ffcd",
          "200": "#7cf9c3",
          "300": "#72efb9",
          "400": "#68e5af",
          "500": "#5edba5",
          "600": "#54d19b",
          "700": "#4ac791",
          "800": "#40bd87",
          "900": "#36b37d"
        },
        yellow: {
          "50": "#ffff63",
          "100": "#fff759",
          "200": "#ffed4f",
          "300": "#ffe345",
          "400": "#ffd93b",
          "500": "#facf31",
          "600": "#f0c527",
          "700": "#e6bb1d",
          "800": "#dcb113",
          "900": "#d2a709"
        },
        'purple': {
          '50': '#eff0fe',
          '100': '#e1e3fe',
          '200': '#caccfb',
          '300': '#a9abf8',
          '400': '#8d86f3',
          '500': '#7c6aea',
          '600': '#6c4dde',
          '700': '#5e3fc3',
          '800': '#463191',
          '900': '#41327d',
        },
      },
      boxShadow: {
        'left': '0px 0px 40px 0px',
      }


    },
    plugins: [],
  }
}