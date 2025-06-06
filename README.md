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

### Links

| Ambiente     |  URL                            |
| ---          |  ---                            |
| Local        |  http://localhost:5173         |               
| Produção     |https://azs-web-rickandmorty-gamma.vercel.app/   | 


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

![image](https://github.com/user-attachments/assets/bfbe14ce-f306-4f16-8f7f-cfbe70ec0de9)
![image](https://github.com/user-attachments/assets/2444ca41-89c7-4604-8d1a-e58a3452d6e3)
![image](https://github.com/user-attachments/assets/ec49fb52-bd4b-4df9-9476-1bb694bd90e6)
![image](https://github.com/user-attachments/assets/19715308-b118-40ee-a23f-4394ffc5bd4b)
![image](https://github.com/user-attachments/assets/938c48e2-402b-45d8-aaeb-fd8ae50ee17d)
![image](https://github.com/user-attachments/assets/3b968e98-945a-4721-a9b3-cd04b90814cd)
![image](https://github.com/user-attachments/assets/ac2299f1-d008-4617-9cfa-43dc255651be)
![image](https://github.com/user-attachments/assets/2e34ca6e-3502-462e-8244-931edb50f81c)



