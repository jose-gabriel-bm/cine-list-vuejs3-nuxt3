# Cine List - Portal de Filmes com Nuxt 3

 
*Um portal simples e responsivo para listagem e detalhamento de filmes usando Nuxt 3 e Vue 3.*

---

## 📋 Sobre o Projeto

Cine List é uma aplicação frontend desenvolvida com Nuxt 3 que consome dados da API pública The Movie Database (TMDB). A aplicação apresenta uma lista de filmes, detalhes individuais, funcionalidade de favoritos com proteção via middleware simulada e é totalmente responsiva, focada em mobile-first.

---

## 🚀 Funcionalidades

- Listagem dinâmica de filmes populares, estreias e mais bem avaliados  
- Página detalhada para cada filme, com informações completas e recomendações  
- Sistema de favoritos gerenciado globalmente via Pinia  
- Middleware para proteger a rota de favoritos (simulação de autenticação)  
- Responsividade completa usando Tailwind CSS  
- SEO dinâmico com títulos e meta tags baseados nos dados carregados  
- Navegação intuitiva e acessível, com foco em usabilidade e performance  
- Lazy loading de imagens para melhor desempenho

---

## 🛠 Tecnologias Utilizadas

- [Nuxt 3](https://nuxt.com) (SSR e SSG)  
- [Vue 3](https://vuejs.org) (Composition API)  
- [Pinia](https://pinia.vuejs.org) (Gerenciamento de estado global)  
- [Tailwind CSS](https://tailwindcss.com) (Estilização responsiva)  
- [The Movie Database API](https://www.themoviedb.org/documentation/api) (Fonte dos dados)  

---

## 📁 Estrutura do Projeto
```bash
├── components/ # Componentes reutilizáveis (CardCarousel, FavoriteToggle)
├── middleware/ # Middleware de autenticação fake
├── pages/ # Páginas da aplicação
│ ├── index.vue # Página inicial - listagem de filmes
│ ├── item/[id].vue # Detalhe de filme com rota dinâmica
│ └── favoritos/ # Rota protegida de favoritos
├── stores/ # Stores Pinia para estado global
└── nuxt.config.ts # Configurações do Nuxt
```


---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos

- Node.js v18+  
- npm ou yarn  

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/jose-gabriel-bm/cine-list-vuejs3-nuxt3.git
cd cine-list-vuejs3-nuxt3
cd cine-list
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3.Execute a aplicação em modo desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4.Acesse no navegador:
```bash
http://localhost:3000
```