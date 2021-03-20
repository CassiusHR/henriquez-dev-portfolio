import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  outline: '#363537',
}

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  outline: '#FAFAFA'
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --outline: ${({ theme }) => theme.outline};
    --background: ${({ theme }) => theme.body};
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: color 0.5s ease,background 0.5s ease;
  }
`