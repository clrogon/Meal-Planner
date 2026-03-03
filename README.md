# 🍴 Ementa Familiar Gonçalves

Planeador mensal de refeições para a família Gonçalves — Luanda, Angola.

## 👨‍👩‍👧 Família

| Membro | Tipo | Calorias/dia |
|--------|------|-------------|
| 👩🏾 Mavita | Adulto (Mãe) | 1500–1800 kcal |
| 👨🏾 Cláudio | Adulto (Pai) | 1800–2100 kcal |
| 🧒🏾 Nayane | Criança (8 anos) | 1400–1600 kcal |

## 🚀 Como usar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
git clone https://github.com/SEU_USERNAME/meal-planner-goncalves.git
cd meal-planner-goncalves
npm install
npm run dev
```

Abre em: `http://localhost:5173`

### Build para produção

```bash
npm run build
npm run preview
```

## 📁 Estrutura do Projeto

```
meal-planner/
├── src/
│   ├── data.js                  # Todos os dados das refeições (5 semanas)
│   ├── App.jsx                  # Componente principal
│   ├── index.css                # Estilos globais
│   ├── main.jsx                 # Entry point React
│   └── components/
│       ├── Header.jsx           # Cabeçalho com filtros por pessoa
│       ├── WeeklyView.jsx       # Vista geral da semana
│       └── DailyView.jsx        # Vista diária detalhada
├── index.html
├── vite.config.js
└── package.json
```

## ✨ Funcionalidades

- 📅 **5 semanas de Janeiro 2026** com refeições completas
- 👥 **Filtros por pessoa** — ligar/desligar Mavita, Cláudio e Nayane individualmente
- 🍽️ **Vista semanal e diária** — overview rápido ou detalhe completo
- ⚡ **Estimativas calóricas** por refeição e totais diários
- 🥦 **Nutrientes-chave** destacados em cada refeição
- 🧒 **Refeições adaptadas** para a Nayane (menos sal, menos picante, porções ajustadas)

## 📝 Como adicionar/editar refeições

Edite o ficheiro `src/data.js`. Cada semana segue esta estrutura:

```js
{
  day: "Segunda-Feira", short: "Seg",
  snack:  { adults: "...", child: "..." },
  soup:   { adults: "...", child: "..." },
  lunch:  { adults: "...", child: "...", cal_adults: "~XXX kcal", cal_child: "~XXX kcal", note: "Nutriente ✦ Nutriente" },
  dinner: { adults: "...", child: "...", cal_adults: "~XXX kcal", cal_child: "~XXX kcal", note: "..." }
}
```

## 🌍 Deploy (Vercel / Netlify)

```bash
# Vercel
npx vercel

# Netlify
npm run build
# Upload da pasta dist/ no Netlify
```

---

Desenvolvido com ❤️ para a família Gonçalves · Luanda, Angola 🇦🇴
