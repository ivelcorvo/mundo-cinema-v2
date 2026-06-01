# Documentação Técnica — Mundo Cinema V2

## Stack

| Categoria      | Tecnologia   | Versão  |
|----------------|--------------|---------|
| Bundler        | Vite         | 8       |
| Framework      | React        | 19      |
| Linguagem      | TypeScript   | 6       |
| Estilo         | Tailwind CSS | 4.3     |
| Roteamento     | React Router | 7.16    |
| HTTP           | Axios        | 1.16    |
| Auth + Hosting | Firebase     | 12.14   |
| Estado global  | Context API  | -       |

## Estrutura de Pastas

## Estrutura de Pastas

```
src/
├── assets/           # Imagens, ícones e fontes
├── components/
│   ├── ui/           # Componentes genéricos reutilizáveis (Button, Input, Modal...)
│   └── layout/       # Componentes estruturais (Navbar, Footer, PageWrapper...)
├── contexts/         # Contexts da Context API (AuthContext, FavoritesContext...)
├── features/
│   ├── auth/         # Componentes de autenticação (LoginForm, RegisterForm...)
│   ├── movies/       # Componentes de filmes (MovieCard, MovieGrid, MovieDetail...)
│   └── favorites/    # Componentes de favoritos (FavoriteButton, FavoritesList...)
├── hooks/            # Hooks customizados (useAuth, useMovies, useFavorites...)
├── pages/            # Páginas da aplicação (Home, MovieDetail, Login, Register...)
├── services/         # Chamadas de API (tmdb.service.ts, firebase.service.ts)
├── types/            # Interfaces e types TypeScript
└── utils/            # Funções utilitárias puras
```

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
- [x] Etapa 3 — Dependências instaladas (React Router, Axios, Firebase)
- [x] Etapa 4 — Estrutura de pastas criada
- [x] Etapa 5 — Firebase configurado (Authentication ativado + variáveis de ambiente)
- [x] Etapa 6 — AuthContext criado (login, register, logout, observador de estado)
- [x] Etapa 7 — Rotas configuradas e ProtectedRoute criado