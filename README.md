# A Fábrica — Site Institucional

Site institucional completo para a academia **A Fábrica — Musculação e Artes Marciais**, desenvolvido com React, TypeScript e Vite.

## 📋 Descrição

Site profissional, moderno e responsivo com duas finalidades principais:
1. **Institucional**: Apresentar a academia, modalidades, identidade, estrutura, horários e localização
2. **Comercial**: Apresentar planos, divulgar serviços e converter visitantes via WhatsApp

## 🛠 Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **React Router DOM** (roteamento)
- **Lucide React** (ícones)
- **CSS Moderno** (variáveis CSS, Grid, Flexbox)
- **Vitest** + **React Testing Library** (testes)

## 🚀 Requisitos

- Node.js 18+
- npm 9+

## 📦 Instalação

```bash
# Clonar o repositório
cd a-fabrica

# Instalar dependências
npm install
```

## ▶️ Execução Local

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Executar testes
npm run test

# Testes em modo watch
npm run test:watch

# Lint
npm run lint
```

## 📁 Estrutura do Projeto

```
a-fabrica/
├── public/
│   ├── images/
│   │   ├── logo/
│   │   ├── gallery/
│   │   └── banners/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── sections/         # Seções da página
│   ├── calculators/      # Calculadoras fitness
│   ├── lib/
│   │   ├── calculations/ # Lógica de cálculos (separada dos componentes)
│   │   ├── whatsapp.ts   # Utilitários WhatsApp
│   │   └── formatting.ts # Formatação de valores
│   ├── config/           # Configurações centralizadas
│   ├── pages/            # Páginas
│   ├── styles/           # Estilos globais
│   ├── App.tsx
│   └── main.tsx
├── tests/                # Testes automatizados
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Configurações Centralizadas

Todas as informações comerciais ficam em `src/config/`:

### `academy.ts`
- Nome, descrição, endereço, WhatsApp, Instagram
- Modalidades, horários, slogans
- Configurações de SEO

### `plans.ts`
- Planos de musculação (tradicionais e especiais)
- Planos de Jiu-Jitsu (Carlson Gracie)
- Status de confirmação (`isConfirmed`, `isPublic`)
- Mensagens personalizadas por plano

### `openingHours.ts`
- Horários de funcionamento
- Tipos: dias úteis, sábado, domingos/feriados

### `gallery.ts`
- Imagens da galeria (preparado para futuras fotos)

## 🔧 Como Alterar Informações

### Preços e Planos
Edite `src/config/plans.ts`:
```typescript
// Exemplo: alterar preço do plano mensal
{
  id: "gym-monthly",
  name: "Plano Mensal",
  totalPrice: 159.90,  // Novo valor
  // ...
}
```

### Endereço
Edite `src/config/academy.ts`:
```typescript
address: {
  street: "Nova Rua, 123",
  neighborhood: "Novo Bairro",
  city: "Nova Cidade",
  state: "PR",
  cep: "00000-000",
  // ...
}
```

### WhatsApp
Edite `src/config/academy.ts`:
```typescript
whatsapp: {
  number: "5511999999999",
  formatted: "(11) 99999-9999",
  // ...
}
```

### Instagram
Edite `src/config/academy.ts`:
```typescript
instagram: {
  handle: "@novo.perfil",
  url: "https://www.instagram.com/novo.perfil/",
}
```

### Horários
Edite `src/config/openingHours.ts`:
```typescript
weekdays: { open: "07:00", close: "21:00", label: "Segunda a sexta-feira" },
// ...
```

### Adicionar Modalidades
Edite `src/config/academy.ts`:
```typescript
modalities: [
  { id: "musculacao", name: "Musculação", ... },
  { id: "jiu-jitsu", name: "Jiu-Jitsu", ... },
  { id: "nova-modalidade", name: "Nova Modalidade", ... },
]
```

### Adicionar Fotografias
1. Coloque as imagens em `public/images/gallery/` ou `public/images/banners/`
2. Atualize `src/config/gallery.ts` com os novos caminhos
3. As imagens serão usadas automaticamente na galeria e hero

### Atualizar Planos de Jiu-Jitsu
Edite `src/config/plans.ts` no array `bjjPlans`:
```typescript
{
  id: "bjj-monthly",
  name: "Mensal",
  totalPrice: 199.00,  // Novo valor
  // ...
}
```

## 🧪 Testes

```bash
# Executar todos os testes
npm run test

# Cobertura de testes
npm run test -- --coverage
```

Testes incluídos:
- Calculadora de proteínas (validação, cálculo, fontes)
- Calculadora de IMC (classificações, validação)
- Calculadora de calorias (TMB, GET, metas)
- Formatação de valores monetários
- Geração de links WhatsApp
- Exibição e filtros de planos
- Ocultação de planos não confirmados

## 📱 Responsividade

- **Mobile-first**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

Breakpoints principais:
- `< 480px`: Mobile
- `480px - 768px`: Mobile large
- `768px - 1024px`: Tablet
- `1024px - 1440px`: Desktop
- `> 1440px`: Large Desktop

## ♿ Acessibilidade

- HTML semântico
- Navegação por teclado completa
- Focus states visíveis
- Contraste WCAG 2.2 AA
- Labels em formulários
- ARIA labels e roles
- Respeita `prefers-reduced-motion`
- Acordeões acessíveis (native `<details>`)

## 🔍 SEO

- Meta tags otimizadas
- Open Graph / Twitter Cards
- Schema.org LocalBusiness / SportsActivityLocation
- Sitemap.xml
- Robots.txt
- URLs amigáveis
- Canonical URLs
- Alt text descritivo nas imagens
- Palavras-chave locais: "academia em Uvaranas", "Jiu-Jitsu Ponta Grossa", etc.

## ⚡ Performance

- Lazy loading de imagens
- Code splitting automático (Vite)
- CSS otimizado (variáveis nativas)
- Fontes do sistema (fallback)
- Imagens responsivas preparadas
- Metas: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1

## 🚀 Publicação

### Build de Produção
```bash
npm run build
```
Gera pasta `dist/` otimizada para deploy estático.

### Deploy Recomendados
- **Vercel**: `vercel --prod`
- **Netlify**: Conectar repo, build command: `npm run build`, publish: `dist`
- **GitHub Pages**: Configurar Actions
- **Firebase Hosting**: `firebase deploy`
- **AWS S3 + CloudFront**: Upload pasta `dist/`

### Variáveis de Ambiente (se necessário)
Crie `.env` na raiz:
```env
VITE_GA_ID=G-XXXXXXXXXX
VITE_API_URL=https://api.exemplo.com
```

## 📊 Informações Comerciais Pendentes

⚠️ **Não publicar até confirmação:**

1. **Plano Universitário Trimestral**: Valor informado R$ 229,70, mas parcelamento 2x R$ 179,85 = R$ 359,70 (divergência)
2. **Plano Universitário (R$ 119,90)**: Periodicidade não confirmada (mensal? trimestral?)
3. **Plano Master 60+ (R$ 94,90)**: Periodicidade não confirmada
4. **Plano Kids (R$ 89,90)**: Periodicidade e faixa etária não confirmadas
5. **Horários de aulas de Jiu-Jitsu**: Não fornecidos
6. **Condições atuais dos planos de Jiu-Jitsu**: Valores do material promocional
7. **Benefícios, taxas de matrícula, regras de graduação**: Não informados

Esses planos estão marcados com `isConfirmed: false` e `isPublic: false` no código, não sendo exibidos ao público até confirmação.

## 📝 Licença

Projeto privado - A Fábrica Musculação e Artes Marciais. Todos os direitos reservados.

## 🤝 Contato

- **WhatsApp**: (42) 99124-6560
- **Instagram**: @fabrica.academia
- **Endereço**: Rua Leopoldo Fores, 38 — Uvaranas, Ponta Grossa — PR, CEP 84030-120
