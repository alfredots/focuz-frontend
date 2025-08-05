# vtr-starter ⚡

Um template moderno e minimalista para iniciar projetos com **React + Vite + Tailwind CSS**, usando as melhores práticas atuais do ecossistema frontend.

> Vite + Tailwind + React = produtividade 🚥

---

## 🧹 Tecnologias incluídas

- ⚛️ [React 18](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- ✨ [TypeScript](https://www.typescriptlang.org/) (pré-configurado)
- 🧹 [ESLint 9](https://eslint.org/) com `eslint.config.js` moderno
- 🎯 [Prettier](https://prettier.io/) integrado (opcional)
- 🧪 Pronto para testes e escalabilidade

---

## ## \u🚀 Começando

### 1. Clone o repositório

```bash
git clone https://github.com/alfredots/vtr-starter.git
cd vtr-starter
```

### 2. Instale as dependências

```bash
yarn
# ou
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
yarn dev
```

---

## 📦 Scripts disponíveis

```bash
yarn dev        # inicia o servidor de desenvolvimento
yarn build      # gera a build de produção
yarn preview    # roda a build em preview local
yarn lint       # analisa o código com ESLint 9
yarn lint:fix   # corrige automaticamente problemas simples de lint
yarn format     # formata o código com Prettier
```

---

## 🗂️ Estrutura básica

```
vtr-starter/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── eslint.config.js
├── tsconfig.json
└── prettier.config.js (opcional)
```

---

## 🚰 ESLint 9 + Prettier

Este projeto utiliza o novo formato de configuração do ESLint 9 via `eslint.config.js`. O Prettier é integrado para formatação de código e conflitos são resolvidos com `eslint-config-prettier`.

---

## 🌙 Tailwind CSS

Tailwind está totalmente configurado com `@tailwind base`, `components` e `utilities`, além de suporte a classes como:

```tsx
<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
  <h1>Hello, World!</h1>
</div>
```

---

## ✅ Requisitos

- Node.js `>=18`
- Yarn ou npm

---

## 🤪 Testes

[Em desenvolvimento...]

---

## 📄 Licença

MIT © [@alfredots](https://github.com/alfredots)

---

## 🧠 Dica

Clique em **"Use this template"** no GitHub para iniciar um novo projeto baseado neste.
