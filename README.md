# LaserVita — Site Institucional

Site institucional da **LaserVita Home Care**, clínica especializada em tratamento de feridas com laserterapia em Goiânia/GO. Desenvolvido em React com design profissional e responsivo.

---

## 📋 Sobre o projeto

Landing page completa para clínica de enfermagem especializada em cicatrização de feridas com laserterapia. O site apresenta os serviços, missão, valores e canais de contato da empresa, com foco em conversão e experiência do usuário.

### Seções do site

- **Hero** — apresentação principal com animações e call-to-action para agendamento
- **Serviços** — 6 serviços detalhados em grid responsivo com efeitos hover
- **Missão** — missão, visão e diferenciais da clínica
- **Valores** — valores institucionais
- **Objetivos** — metas e propósito da empresa
- **Contato** — formulário e canais de atendimento
- **Footer** — rodapé com informações da empresa

---

## 🛠️ Tecnologias utilizadas

- **React 18** — biblioteca para construção da interface
- **TypeScript** — tipagem estática
- **Vite** — bundler e servidor de desenvolvimento
- **Tailwind CSS** — estilização utilitária com tema customizado
- **PostCSS** — processamento de CSS

---

## ✨ Destaques do projeto

- Design totalmente responsivo (mobile, tablet e desktop)
- Navbar com efeito de scroll — transparente no topo, sólida ao rolar
- Animações de entrada suaves (slide, fade, float)
- Tema de cores customizado no Tailwind (verde clínico, dourado, verde escuro)
- Menu mobile com hamburger animado
- Cards com efeitos hover elaborados

---

## 📁 Estrutura do projeto

LaserVita/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navegação responsiva com efeito scroll
│   │   ├── Hero.jsx         # Seção principal com animações
│   │   ├── About.jsx        # Missão, visão e diferenciais
│   │   ├── Services.jsx     # Grid de 6 serviços
│   │   ├── Values.jsx       # Valores institucionais
│   │   ├── Objectives.jsx   # Objetivos da clínica
│   │   ├── Contact.jsx      # Seção de contato
│   │   └── Footer.jsx       # Rodapé
│   ├── App.jsx              # Componente raiz
│   ├── main.jsx             # Ponto de entrada React
│   ├── index.css            # Estilos globais
│   └── style.css            # Estilos adicionais
├── tailwind.config.js
├── vite.config.js
└── tsconfig.json
---

## 🚀 Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado

### Passo a passo

**1. Clone o repositório**
```bash
git clone https://github.com/koreano06/LaserVita.git
cd LaserVita
```

**2. Instale as dependências**
```bash
npm install
```

**3. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse em `http://localhost:5173`

**4. Build para produção**
```bash
npm run build
```

---

## 👨‍💻 Autor

**Gustavo Ramos** — [@koreano06](https://github.com/koreano06)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/gustavo-ramos-843543397)
