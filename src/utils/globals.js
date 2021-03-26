import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      /* 1rem = 10px */
      font-size: 62.5%; 
      box-sizing: border-box;
      --color-white: ${props => props.theme.colors.white};
      --color-blue: ${props => props.theme.colors.blue};
      --color-blue-lg: ${props => props.theme.colors.blueLight};
      --color-green: ${props => props.theme.colors.green};
      --color-red: ${props => props.theme.colors.red};
      --color-light: ${props => props.theme.colors.light};
      --color-dark: ${props => props.theme.colors.dark};
      --color-cyan: ${props => props.theme.colors.cyan};
      --color-darker: ${props => props.theme.colors.darker};
      --light: 300;
      --regular: 400;
      --medium: 500;
      --bold: 700;
    }
    body {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      background: var(--color-dark);
      color: var(--color-white);
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
    }
    
    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;