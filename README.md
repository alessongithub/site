# Landing Page Evoque Assessoria

Landing page de alta conversão desenvolvida com Next.js 14+ (App Router) e Tailwind CSS, focada em gerar leads qualificados para serviços de criação de sites e landing pages.

## 🚀 Tecnologias

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Otimizado para Core Web Vitals**

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação

1. Instale as dependências:
```bash
npm install
```

2. Certifique-se de que o logo está na pasta `public/logo/logo.png`

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
site/
├── app/
│   ├── layout.tsx      # Layout principal com meta tags SEO
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/
│   ├── Header.tsx       # Cabeçalho com logo e CTA
│   ├── HeroSection.tsx  # Seção hero principal
│   ├── ProblemSection.tsx    # Seção "Para Quem É"
│   ├── SolutionSection.tsx   # Seção "A Solução Evoque"
│   ├── DifferentialsSection.tsx # Seção de Diferenciais
│   ├── FinalCTA.tsx     # CTA final
│   └── Footer.tsx       # Rodapé
├── public/
│   └── logo/
│       └── logo.png     # Logo da empresa
└── package.json
```

## 🎨 Paleta de Cores

- **Primary (Azul)**: Confiança e profissionalismo
- **Accent (Laranja)**: Ação e conversão
- **Gradientes**: Para criar impacto visual

## ⚙️ Configurações Importantes

### WhatsApp
Atualize o número do WhatsApp nos componentes:
- `components/HeroSection.tsx`
- `components/FinalCTA.tsx`
- `components/Footer.tsx`

Substitua `5511999999999` pelo número real.

### Email
Atualize o email de contato em `components/Footer.tsx`.

## 🚀 Build para Produção

```bash
npm run build
npm start
```

## 📱 Responsividade

O site é 100% responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## 🎯 SEO

- Meta tags otimizadas
- Títulos e descrições focados em conversão
- Estrutura semântica HTML5
- Performance otimizada para Core Web Vitals

## 📝 Notas

- Todos os CTAs redirecionam para WhatsApp com mensagem pré-formatada
- O logo deve estar em `public/logo/logo.png`
- As cores podem ser ajustadas em `tailwind.config.js`

