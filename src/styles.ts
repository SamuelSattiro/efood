import { createGlobalStyle } from 'styled-components'

export const cores = {
  fonte: '#E66767',
  fundo: '#FFEBD9',
  fundo2: '#FFF8F2',
  fundo3: '#FFFFFF',
  pretoTrans: 'rgba(0, 0, 0, 0.80)'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    block-size: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${cores.fundo2};
    color: ${cores.fonte};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
