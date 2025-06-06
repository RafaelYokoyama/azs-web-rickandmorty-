# Rick and Morty Verse Explorer

Este é um projeto React + TypeScript utilizando Vite para explorar o universo de Rick and Morty.

## 🚀 Tecnologias

- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn/ui
- GSAP (Animações)

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Git

### Passos para Instalação

1. Clone o repositório:

```bash
git clone git remote add origin https://github.com/RafaelYokoyama/azs-web-rickandmorty-.git
cd azs-web-rickandmorty
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── domain/         # Regras de negócio e entidades
│   ├── entities/   # Entidades do domínio
│   ├── repositories/ # Interfaces dos repositórios
│   └── types.ts    # Tipos do domínio
│
├── infra/          # Implementações de infraestrutura
│   ├── graphql/    # Configurações e queries GraphQL
│   ├── repositories/ # Implementações dos repositórios
│   └── client-config.ts # Configuração do cliente GraphQL
│
├── presentation/   # Camada de apresentação
│   ├── components/ # Componentes React reutilizáveis
│   ├── context/    # Contextos React
│   ├── hooks/      # Custom hooks React
│   ├── lib/        # Utilitários e configurações
│   ├── pages/      # Páginas da aplicação
│   ├── style/      # Estilos e temas
│   ├── types/      # Tipos específicos da UI
│   └── AppRouter/  # Configuração de rotas
│
├── main/           # Ponto de entrada da aplicação

```

## 📱 Screenshots

[]
