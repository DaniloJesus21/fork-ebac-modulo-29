# 🚀 EBAC Módulo 29 – Projeto Vagas de Emprego

Este é um projeto desenvolvido durante o módulo 29 do curso da EBAC, onde foi criada uma aplicação React para exibir vagas de emprego e o objetivo do projeto é utilizar o `styled-components` para estilização e seguir melhores práticas de organização e design.

---

## 🎯 Funcionalidades

- Lista de vagas com título, localização, senioridade, modalidade, faixa salarial e requisitos.
- Estilização responsiva e temas claros/escuros com `ThemeProvider`.
- Aplicação de estilos globais.
- Estrutura com componentes React reutilizáveis.
- Componentização das partes do layout (container, cartões de vaga, botões etc.).

---

## 🛠️ Tecnologias utilizadas

- React + TypeScript  
- styled-components  
- ESLint + Prettier (configurações recomendadas da EBAC)  
- Vite ou Create React App (dependendo da configuração do repositório original)

---

## ⚙️ Instalação e execução

1. Clone o repositório:
    ```bash
    git clone https://github.com/DaniloJesus21/fork-ebac-modulo-29.git
    cd fork-ebac-modulo-29
    ```

2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

3. Rode o servidor de desenvolvimento:
    ```bash
    npm run dev
    # ou
    npm start
    ```

4. Abra no navegador:
    ```
    http://localhost:3000/
    ```

---

## 🖌️ Customização do tema

O tema está definido em `src/styles/Theme.ts`, assim:

```ts
export const Theme = {
  colors: {
    primary: '#a7727d',
    secondary: '#f9f5e7'
  }
};
