import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  themeButtonOutline: 'rgba(53,53,53,0.1)',
  
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  themeButtonOutline: 'rgba(250,250,250,0.1)'
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --ThemeButtonOutline: ${({ theme }) => theme.themeButtonOutline};
    --background: ${({ theme }) => theme.body};
    --bg-planet-bright: #F2C94C;
    --bg-planet-shadow: #828894;
    --bg-planet-lightshadow: #D7D7D820;
    --dot-size: 0.25rem;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: color 0.5s ease,background 0.5s ease;
  }
`