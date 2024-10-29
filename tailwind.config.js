/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'false', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        em: '1em',
      },
      fontFamily: {
        estedad: ['Estedad'],
      },
      fontSize: {
        'Display-1': [
          '64px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        'Display-2': [
          '56px',
          {
            fontWeight: '700',
            lineHeight: '120%',
          },
        ],
        H1: [
          '44px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H2: [
          '40px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H3: [
          '32px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H4: [
          '24px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H5: [
          '20px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H6: [
          '16px',
          {
            fontWeight: '700',
            lineHeight: '140%',
          },
        ],
        H7: [
          '20px',
          {
            fontWeight: '600',
            lineHeight: '180%',
          },
        ],

        'Body-Xl': [
          '20px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],
        'Body-Lg': [
          '18px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],
        'Body-Md': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],
        'Body-Sm': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],

        'Caption-Lg': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],
        'Caption-Md': [
          '12px',
          {
            fontWeight: '400',
            lineHeight: '180%',
          },
        ],
        'Caption-Sm': [
          '10px',
          {
            fontWeight: '400',
            lineHeight: '180%',
          },
        ],

        'Button-Lg': [
          '16px',
          {
            fontWeight: '500',
            lineHeight: '180%',
          },
        ],
        'Button-Sm': [
          '14px',
          {
            fontWeight: '500',
            lineHeight: '170%',
          },
        ],

        'Overline-Lg': [
          '16px',
          {
            fontWeight: '400',
            lineHeight: '180%',
          },
        ],
        'Overline-Sm': [
          '12px',
          {
            fontWeight: '700',
            lineHeight: 'auto',
          },
        ],
      },
      colors: {
        current: 'currentColor',
        Main: {
          Primary: '#417F56',
          'Tint-1': '#E5F2E9',
          'Tint-2': '#CAE4D3',
          'Tint-3': '#B0D7BD',
          'Tint-4': '#96C9A7',
          'Tint-5': '#7CBC91',
          'Tint-6': '#61AE7B',
          'Tint-7': '#4E9968',
          'Shade-1': '#396F4B',
          'Shade-2': '#315F41',
          'Shade-3': '#294F36',
          'Shade-4': '#21402B',
          'Shade-5': '#183020',
          'Shade-6': '#102016',
          'Shade-7': '#08100B',
        },
        Neutral: {
          White: '#FFF',
          Black: '#0C0C0C',
          'Gray-1': '#F9F9F9',
          'Gray-2': '#E1E1E1',
          'Gray-3': '#EDEDED',
          'Gray-4': '#CBCBCB',
          'Gray-5': '#ADADAD',
          'Gray-6': '#757575',
          'Gray-7': '#717171',
          'Gray-8': '#353535',
        },
        Status: {
          Error: '#C30000',
          'Error-Light': '#C30000',
          'Error-Extra-Light': '#C30000',
          Success: '#00966D',
          'Success-Light': '#00BA88',
          'Success-Extra-Light': '#F3FDFA',
          Warning: '#A9791C',
          'Warning-Light': '#F4B740',
          'Warning-Extra-Light': '#FFF8E1',
        },
      },
      boxShadow: {
        2: '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
        4: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        6: '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',
        8: '0px 8px 8px 0px rgba(0, 0, 0, 0.25)',
        12: '0px 12px 12px 0px rgba(0, 0, 0, 0.25)',
        16: '0px 16px 16px 0px rgba(0, 0, 0, 0.25)',
        'card-shadow': [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
          '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
          '0px 4px 4px 0px rgba(0, 0, 0, 0.09)',
          '0px 9px 5px 0px rgba(0, 0, 0, 0.05)',
          '0px 16px 6px 0px rgba(0, 0, 0, 0.01)',
          '0px 25px 7px 0px rgba(0, 0, 0, 0.00)',
        ],
        'contact-cards-info': [
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10)',
          '0px 3px 6px 0px rgba(0, 0, 0, 0.10)',
          '0px 11px 11px 0px rgba(0, 0, 0, 0.09)',
          '0px 24px 14px 0px rgba(0, 0, 0, 0.05)',
          '0px 42px 17px 0px rgba(0, 0, 0, 0.01)',
          '0px 66px 18px 0px rgba(0, 0, 0, 0.00)',
        ],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
