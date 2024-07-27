/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: { min: '0px', max: '640px' }, // mobile view
      smmd: { min: '641px', max: '767px' }, // small tablets
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' }, // ipad view
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' }, // laptop
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1440px' }, //  desktop
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1441px', max: '1536px' }, // large desktop
      // => @media (min-width: 1536px) { ... }
      '3xl': { min: '1537px', max: '1599px' }, // 4k screen

      '4xl': { min: '1600px', max: '1700px' },

      tall: { raw: '(min-height: 645px)' },

      extratall: { raw: '(min-height: 739px)' }
    },

    boxShadow: {
      ctr: '12px 12px 12px 1px rgb(0 0 0 / 0.1)'
    },
    fontSize: {
      sm: '12px',
      tiny: '13px',
      base: '14px',
      title: '13.5px',
      h6: '16px',
      h5: '18px',
      h4: '20px',
      h3: '22px',
      h2: '24px',
      h1: '36px'
    },
    colors: {
      primary: '#1589ee',
      secondary: '#1589ee',
      'bg-color': '#f2f2f2',
      'hover-color': '#69b8ff',
      loginbg: '#1589eed1',

      blue: '#1589ee',
      white: '#ffffff',
      black: '#000',
      'gray-bg': '#f2f2f2',
      'border-color': '#54698d',
      'placeholder-color': '#54698d',
      'desgin-color': '#54698d',
      'text-color': '#54698d',
      'label-color': '#fafbfc',
      'hover-color': '#f4f6f9',
      'present-color': '#3cb371',
      'absent-color': '#f55d5d',
      'align-color': '#f4f6f9',
      'background-color': '#f2f2f2e3',
      'h1-text-color': '#6082B6',
      'lightblue-color': '#0971b2',
      'label-hover-color': '#ebecf0',
      'side-navbar-color': '#fafbfc',
      'table-hover-color': '#54698d',
      'grid-color-blue': '#eff6ff',
      'grid-p-color-blue': '#4a7ae4',
      'alert-color': '#fef2f2',
      'alert-color-text': '#e72c1d',
      'alert-button': '#dc2626',
      'alert-button-hover': '#bd1b19',
      red: '#FF0000',
      'success-color': '#dcfce7',
      'success-color-text': '#39b366',
      'success-color-plan-text': '#44948e',
      'success-bgcolor': '#42c974',
      'warning-color': '#fefce8',
      'warning-icon-color': '#facc15',
      'warning-text': '#b9680e',
      'drop-down-background': '#ecedf0',
      'background-blur': '#959595b5',
      'Information-bg-color': '#eff6ff',
      'Information-text-color': '#60a5fa',
      lacolor: '#5a1e06',
      mlcolor: '#1589ee',
      odcolor: '#ffb302'
    },

    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px'
    },
    extend: {}
  },
  plugins: []
};