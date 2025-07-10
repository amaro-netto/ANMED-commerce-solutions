# ANMED - Soluções de Comércio

Este é um projeto de e-commerce focado em produtos médicos e de limpeza hospitalar, desenvolvido com React, TypeScript, Tailwind CSS e Vite. O objetivo é fornecer uma plataforma robusta e amigável para a gestão e venda de produtos na área da saúde.

## Badges

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
![Status: Em desenvolvimento](https://img.shields.io/badge/Status-Em%20desenvolvimento-yellow?style=for-the-badge)
[![GitHub last commit](https://img.shields.io/github/last-commit/amaro-netto/ANMED-commerce-solutions?style=for-the-badge)](https://github.com/amaro-netto/ANMED-commerce-solutions)

## Funcionalidades

- **Página Inicial:** Exibição de produtos em destaque e categorias.
- **Página de Produtos:** Listagem completa de produtos com filtros por categoria e opções de ordenação (preço, nome, avaliação).
- **Página do Carrinho:** Gerenciamento de itens no carrinho, atualização de quantidades, remoção de produtos e cálculo de frete simulado.
- **Painel Administrativo:**
  - **Gerenciamento de Preços:** Ferramenta para ajustar preços de custo, margens de lucro e preços de venda. Possibilidade de aplicar margem global.
  - **Gerenciamento de Mídia:** Seção dedicada para upload e organização de imagens (logo da empresa, imagens de produtos).
  - **Relatórios e Analytics:** Visão geral de vendas, receita, clientes e produtos. (Funcionalidade em desenvolvimento).
- **Componentes Reutilizáveis:** Utilização da biblioteca Shadcn UI para componentes de interface, garantindo uma experiência de usuário consistente e moderna.
- **Context API:** Gerenciamento de estado global (ex: carrinho de compras) usando React Context.
- **Rotas Dinâmicas:** Navegação entre as páginas utilizando `react-router-dom`.
- **Notificações:** Sistema de toasts para feedback ao usuário (ex: produto adicionado ao carrinho).

## Tecnologias Utilizadas

- **Frontend:**
  - [React](https://react.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Shadcn UI](https://ui.shadcn.com/) (Componentes UI)
  - [Lucide React](https://lucide.dev/) (Ícones)
  - [React Router DOM](https://reactrouter.com/en/main) (Roteamento)
  - [Zod](https://zod.dev/) (Validação de Schema)
  - [React Hook Form](https://react-hook-form.com/) (Gerenciamento de formulários)
  - [Tanstack Query](https://tanstack.com/query/latest) (Gerenciamento de estado do servidor)
  - [Sonner](https://sonner.emilkowalski.dk/) (Toasts)
  - [Date-fns](https://date-fns.org/) (Manipulação de datas)
  - [Embla Carousel React](https://www.embla-carousel.com/getting-started/react/) (Carrossel)
  - [Recharts](https://recharts.org/en-US/) (Gráficos - para Analytics)
  - [Next Themes](https://next-themes.mdx-deck.com/) (Temas - claro/escuro)
  - [Vaul](https://vaul.emilkowalski.dk/) (Drawer components)
  - [Class Variance Authority](https://cva.vercel.app/) (Utilitário para variantes de classe CSS)
  - [Clsx](https://www.npmjs.com/package/clsx) (Utilitário para classes CSS condicionais)
  - [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge) (Combina classes Tailwind sem conflitos)
  - [Tailwindcss Animate](https://www.npmjs.com/package/tailwindcss-animate) (Animações para Tailwind)
- **Ferramentas de Desenvolvimento:**
  - [ESLint](https://eslint.org/) (Análise de código estática)
  - [Prettier](https://prettier.io/) (Formatador de código)
  - [Bun](https://bun.sh/) (Lockfile: `bun.lockb`)


## Estrutura do Projeto

A estrutura do diretório segue uma convenção comum para projetos React com Vite:

```bash
├── .github/                           # GitHub Actions workflows
├── .gitignore                         # Arquivos e diretórios a serem ignorados pelo Git
├── README.md                          # Este arquivo
├── bun.lockb                          # Lockfile de dependências (Bun)
├── components.json                    # Configuração para Shadcn UI
├── eslint.config.js                   # Configuração do ESLint
├── index.html                         # Arquivo HTML principal
├── package-lock.json                  # Lockfile de dependências (npm)
├── package.json                       # Metadados do projeto e scripts
├── postcss.config.js                  # Configuração do PostCSS
├── public/                            # Arquivos estáticos (imagens, favicon, robots.txt)
│   ├── favicon.ico
│   ├── image/
│   │   ├── 0f4bfa84-3607-4685-abd1-294709e5d076.png
│   │   ├── logovertical.jpg
│   │   └── logowhite.png
│   ├── placeholder.svg
│   └── robots.txt
├── src/                               # Código fonte da aplicação
│   ├── App.css
│   ├── App.tsx                        # Componente principal da aplicação
│   ├── components/                    # Componentes reutilizáveis
│   │   ├── AdBanner.tsx
│   │   ├── Categories.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PricingManager.tsx
│   │   ├── ProductCard.tsx
│   │   └── ShippingCalculator.tsx
│   │   └── ui/                      # Componentes Shadcn UI
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       └── use-toast.ts
│   ├── contexts/                    # Contextos React (ex: CartContext)
│   │   └── CartContext.tsx
│   ├── hooks/                       # Hooks customizados
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css                    # Estilos globais
│   ├── lib/
│   │   └── utils.ts                 # Funções utilitárias (ex: cn para Tailwind)
│   ├── main.tsx                     # Ponto de entrada da aplicação
│   ├── pages/                       # Páginas da aplicação
│   │   ├── Admin.tsx
│   │   ├── Cart.tsx
│   │   ├── Index.tsx
│   │   ├── NotFound.tsx
│   │   └── Products.tsx
│   └── vite-env.d.ts                  # Definições de tipo para Vite
├── tailwind.config.ts                 # Configuração do Tailwind CSS
├── tsconfig.app.json                  # Configuração TypeScript para a aplicação
├── tsconfig.json                      # Configuração TypeScript geral
├── tsconfig.node.json                 # Configuração TypeScript para Node.js
└── vite.config.ts                     # Configuração do Vite
```

## Prints da Aplicação

### Página Inicial (Hero, Categorias e Produtos em Destaque)

![Página Inicial](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-hero.png?raw=true)
*Captura de tela da seção Hero e Categorias na página inicial.*

### Seção de Produtos em Destaque

![Produtos em Destaque](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-products.png?raw=true)
*Visão dos produtos em destaque na página inicial.*

### Página do Carrinho (com calculadora de frete)

![Página do Carrinho](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-cart.png?raw=true)
*Captura de tela da página do carrinho com os itens e a calculadora de frete.*

### Painel Administrativo - Gerenciamento de Preços

![Painel Administrativo - Preços](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-admin-pricing.png?raw=true)
*Interface do painel administrativo para gerenciamento de preços.*

### Painel Administrativo - Gerenciamento de Mídia

![Painel Administrativo - Mídia](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-admin-media.png?raw=true)
*Interface do painel administrativo para gerenciamento de mídia, incluindo a logo da empresa.*

### Painel Administrativo - Relatórios e Analytics

![Painel Administrativo - Analytics](https://github.com/amaro-netto/ANMED-commerce-solutions/blob/main/public/image/print-admin-analytics.png?raw=true)
*Interface do painel administrativo para relatórios e analytics.*


## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido por: Amaro Netto.
