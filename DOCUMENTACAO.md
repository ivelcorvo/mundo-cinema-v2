# Documentação Técnica — Mundo Cinema V2

## Stack

| Categoria        | Tecnologia              | Versão  |
|------------------|-------------------------|---------|
| Bundler          | Vite                    | 8       |
| Framework        | React                   | 19      |
| Linguagem        | TypeScript              | 6       |
| Estilo           | Tailwind CSS            | 4       |
| Roteamento       | React Router            | 7       |
| HTTP             | Axios                   | -       |
| Auth + Hosting   | Firebase                | -       |
| Estado global    | Context API             | -       |

## Estrutura de Pastas

> Será atualizada conforme o projeto evoluir.

## Decisões Técnicas

### Vite no lugar de Create React App
O CRA está obsoleto e sem manutenção ativa. O Vite oferece builds significativamente mais rápidos e é o padrão atual do mercado.

### Tailwind CSS v4
Versão mais recente do framework. Utiliza plugin nativo do Vite — sem `tailwind.config.js` e sem `postcss.config.js`. A configuração é feita diretamente no CSS via `@import "tailwindcss"`.

### React 19
Versão estável mais recente. Traz melhorias de performance e novos recursos como o hook `use()` nativo.

### TypeScript 6
Versão atual. Tipagem mais precisa e melhor integração com o ecossistema.

### Context API
Escolhido para gerenciamento de estado global por ser nativo do React, sem dependências externas, e suficiente para a escala deste projeto.

## Etapas Concluídas

- [x] Etapa 1 — Scaffold Vite + React + TypeScript
- [x] Etapa 2 — Tailwind CSS v4 configurado