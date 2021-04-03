import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  bodyBackground:'#9a9a9a',
  pageBackground:'#fffffff2',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  glassbg: 'rgba(255,255,255,0.4)',
  themeButtonOutline: 'rgba(53,53,53,0.1)',
  navSelected:'#ececec',
  
}

export const darkTheme = {
  body: '#363537',
  bodyBackground:'#363537',
  pageBackground: '#212121fa',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  themeButtonOutline: 'rgba(250,250,250,0.1)',
  navSelected:'#302f30',
  glassbg: 'rgba(54,53,55,0.4)',
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --ThemeButtonOutline: ${({ theme }) => theme.themeButtonOutline};
    --background: ${({ theme }) => theme.body};
    --bodyBackground: ${({ theme }) => theme.bodyBackground};
    --pageBackground: ${({ theme }) => theme.pageBackground};
    --navSelected: ${({ theme }) => theme.navSelected};
    --glassbg: ${({ theme }) => theme.glassbg};
    --bg-planet-bright: #F2C94C;
    --bg-planet-shadow: #828894;
    --bg-planet-lightshadow: #D7D7D820;
    --dot-size: 0.25rem;
    --text-color: ${({ theme }) => theme.text};
  }
  body {
    background-color: ${({ theme }) => theme.bodyBackground};
    background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgICAgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiICBpZD0ic25hcHNob3QtNDQxMDUiIHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCI+PGRlc2M+VGhpcyBpbWFnZSB3YXMgbWFkZSBvbiBQYXR0ZXJuaW5qYS5jb208L2Rlc2M+PGRlZnM+CjwhLS0gaW1hZ2UgMDQyOTAgLS0+CjxnIGlkPSJ0cmFuc2Zvcm1lZC0wNDI5MCIgZGF0YS1pbWFnZT0iMDQyOTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjUsIC0xMjUpIHJvdGF0ZSgwLCAxMjUsIDEyNSkiPjxnPjxzdmcgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMjUwcHgiIGhlaWdodD0iMjUwcHgiIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj48ZyBpZD0ib3JpZ2luYWwtMDQyOTAiPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMTcyIDE3MiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+CiAgPHBhdGggZD0iTTY0LjI3IDE1LjE2Yy04LjA3MyA4LjA3Mi04LjEzNCAyMS4yNzMtLjAwOCAyOS4zOTlsMjcuMzc1IDI3LjM3NC0uNjg4LTE3LjQwOEw3Mi42OCAzNi4xNGMtMy40NTctMy40NTgtMy40NTYtOS4xMDguMDAzLTEyLjU2NyAzLjQ2LTMuNDYgOS4xMDktMy40NiAxMi41NjctLjAwM2w2Mi41ODcgNjIuNTg3YzMuNDU4IDMuNDU4IDMuNDU3IDkuMTA3LS4wMDMgMTIuNTY3LTMuNDU5IDMuNDU5LTkuMTA5IDMuNDYtMTIuNTY2LjAwM2wtMTYuMTk1LTE2LjE5NS01Ljg4MiAxMC44MzkgMTMuNzc0IDEzLjc3NGM4LjA2OCA4LjA2OCAyMS4yNjkgOC4xMjMgMjkuMzk5LS4wMDcgOC4xMjktOC4xMyA4LjEzMi0yMS4yNzMuMDA3LTI5LjM5OUw5My42NjggMTUuMDM4Yy04LjEyNi04LjAxLTIxLjMyNy03Ljk1LTI5LjM5OS4xMjJ6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiBzdHJva2U9Im5vbmUiLz4KICA8cGF0aCBkPSJNMTMzLjcxMiA5Ny4xNzFsLTkuMTA2LTkuMTA1Yy0uOTgxIDMuMjg2LTIuODI2IDYuNzQ1LTUuOTk3IDEwLjcyM2w4LjI0MSA4LjI0MS4xNzMuMTczYzIuNzY3LTMuMjI4IDQuOTAxLTYuMzk5IDYuNDU4LTkuNDU1LjA1OC0uMTczLjExNS0uMzQ2LjIzMS0uNTc3eiIgZmlsbD0icmdiYSgxMzEsIDEzMSwgMTMxLCAxKSIgc3Ryb2tlPSJub25lIi8+CiAgPHBhdGggZD0iTTExNS42ODMgMzcuMTY4bC42MzIgNi43NDRjMy42ODkgNC4zOCA0Ljk1NiA4Ljc2IDguMTgyIDE4Ljc5bDEzLjEzOSAxMy4xNC4wMDEtLjQ2LjAwMS00LjYxMmMuMDU5LTQuNjctMS4wMzYtOS42ODUtMi44MjEtMTQuNDY5bC0xOS4xMzQtMTkuMTMzeiIgZmlsbD0icmdiYSgxMzEsIDEzMSwgMTMxLCAxKSIgc3Ryb2tlPSJub25lIi8+CiAgPHBhdGggZD0iTTExNy4yOTcgMzguNzgyYzkuMDQ3IDEyLjUwNiAxOS44NzggMzguNzkgNC42NTUgNTkuNjYtMTUuMzk2IDIxLjE1OS0yNC41NjIgMjQuMTAyLTMyLjg2MyAyNi40MDlsLTMuOTc1LTEwLjA4N2MuMTcyLS4wNTcgMTQuMzU0LTQuNTU3IDI2LjY5NC0yMy4xMjEgMTEuNjQ5LTE3LjY0Mi40MTQtNDIuMzY5LTguODA3LTUwLjc4M2wxMi40NTItMy44MDciIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMSkiIHN0cm9rZT0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xMDAuNTA3IDEwNC45MDRjLTQuNTU1IDQuMDkzLTguNTkgNi42MzEtMTEuNDE2IDguMDcyLS41MTguNDA0LTEuMDk1Ljg2NS0xLjY3MiAxLjMyNmw3LjYwNyA5LjEwN2M0LjA5My0xLjc4OCA4LjcwNi00LjY3MiAxNC4xMjUtOS44NjFsLTguNjQ0LTguNjQ0eiIgZmlsbD0icmdiYSgxMzcsIDEzNywgMTM3LCAxKSIgc3Ryb2tlPSJub25lIi8+CiAgPHBhdGggZD0iTTgzLjExIDQ2LjY4NmMtNy43MjQgMi4zMDgtMTcuMzUyIDcuMzI1LTMxLjQyIDI0Ljk2N2wtNy4yMDUtNy4yMDRjLTguMDY4LTguMDY4LTIxLjI2OS04LjEyMi0yOS4zOTguMDA3LTguMTMgOC4xMy04LjA3NiAyMS4yMTUuMDUgMjkuMzQxbDYyLjU4NyA2Mi41ODhjOC4wNjkgOC4wNjggMjEuMjcgOC4xMjMgMjkuMzk5LS4wMDcgOC4xMy04LjEzIDguMTMzLTIxLjI3My4wMDctMjkuMzk5bC0xNC4xMi0xNC4xMi0xLjAzNy0xLjI2N2EyMy43NyAyMy43NyAwIDAgMS0zLjIyNy00LjQ5NmMtMy4xNjktNS43MDYtMi43NjQtMTEuNDEzIDEuMzMtMTcuMzUxIDguMDE1LTExLjgyIDcuNzMtMjAuOTg1IDYuMDAxLTI2LjUxOC0xLjktNi4zOTgtNi4wNS05Ljc0LTYuNTExLTEwLjA4NmwtLjkyMyAxLjE1My0uNjktMi44ODItNC44NDItNC43MjZ6TTIzLjUgNzIuODcxYzMuNDYtMy40NiA5LjExLTMuNDYxIDEyLjU2Ny0uMDAzbDkuNTY3IDkuNTY2Yy0yLjgyNyA3LjY2OC0zLjA2IDE1LjczOC0xLjg1IDIzLjI4OUwyMy40OTggODUuNDM3Yy0zLjQ1OC0zLjQ1OC0zLjQ1Ny05LjEwNy4wMDMtMTIuNTY2em01Ni42MDUgMTAuMjQ3Yy02LjYzMSA5Ljc0NC03LjE1MyAyMC40MDgtMS42MjEgMzAuMjA2IDEuNzI5IDIuOTk3IDMuNjMgNS40NzUgNS4zNiA3LjMybC40MDMuNDAzIDEuNTU2IDEuNTU2IDEyLjg1MSAxMi44NTJjMy40NTggMy40NTggMy40NTcgOS4xMDctLjAwMyAxMi41NjYtMy40NiAzLjQ2LTkuMTA4IDMuNDYxLTEyLjU2Ni4wMDNsLTE3LjgwOC0xNy44MDhjLTguODE4LTguODE3LTE5LjEzLTM0LjAwNi02LjczMy01MS4xMjkgOC45OTYtMTIuNDUzIDE4LjYyNC0xOC4xNjIgMjMuODEzLTIwLjU4NWwtMy4xNzIgNC4wOTQtLjA1OC0uMDU3Yy44MDcuNTc2IDcuMzc3IDYuOC0yLjAyMiAyMC41Nzl6IiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiBzdHJva2U9Im5vbmUiLz4KPC9zdmc+CjwvZz48L3N2Zz48L2c+PC9nPgo8IS0tIC9pbWFnZSAwNDI5MCAtLT4KPC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyNTAiIGhlaWdodD0iMjUwIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApIj48L3JlY3Q+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDQyOTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNTAsIC0yNTApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wNDI5MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgLTI1MCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA0MjkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNTAsIC0yNTApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wNDI5MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1MCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA0MjkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAwKSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDQyOTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCwgMCkiPjwvdXNlPjx1c2UgeGxpbms6aHJlZj0iI3RyYW5zZm9ybWVkLTA0MjkwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjUwLCAyNTApIj48L3VzZT48dXNlIHhsaW5rOmhyZWY9IiN0cmFuc2Zvcm1lZC0wNDI5MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMjUwKSI+PC91c2U+PHVzZSB4bGluazpocmVmPSIjdHJhbnNmb3JtZWQtMDQyOTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1MCwgMjUwKSI+PC91c2U+PC9zdmc+);
    color: ${({ theme }) => theme.text};
    transition: color 0.5s ease,background 0.5s ease;
  }
  p {
    font-size:1rem;
    font-weight:100;
    line-height:2rem;
  }
  a {
    background-color: red;
    background-image: linear-gradient(45deg, #f3ec78, #af4261);
    background-size: 100%;
    background-repeat: repeat;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight:700;
  }
`