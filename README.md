# 🎬 GAG Portfolio — Creative Frontend Developer & Filmmaker

> **Donde el código se encuentra con la narrativa visual.**

Portfolio profesional que fusiona **desarrollo web**, **diseño gráfico** y **producción audiovisual** en una experiencia digital premium.

🔗 [Ver en vivo](https://gag-portfolio.vercel.app) _(próximamente)_

---

## ✨ Características

- 🌗 **Modo claro/oscuro** — Dark mode premium por defecto, light mode suave para los ojos
- 🎨 **Diseño glassmorphism** — Tarjetas con efecto cristal, gradientes animados y micro-interacciones
- 📂 **Proyectos filtrados** — Categorías: Full Stack, Frontend, Backend, Diseño Gráfico, Realización
- 🔗 **Servicios enlazados** — Cada servicio redirige a los proyectos de esa categoría
- ⌨️ **Typewriter animado** — Efecto máquina de escribir en el hero con roles profesionales
- 📱 **Fully responsive** — Adaptado a móvil, tablet y escritorio
- 📬 **Formulario de contacto** — Integración con Formspree para recibir mensajes directos

---

## 🛠 Tech Stack

| Tecnología                                                           | Uso                                |
| -------------------------------------------------------------------- | ---------------------------------- |
| [Astro](https://astro.build)                                         | Framework principal, SSG           |
| [React](https://react.dev)                                           | Componentes interactivos           |
| [Tailwind CSS v4](https://tailwindcss.com)                           | Sistema de diseño y estilos        |
| [TypeScript](https://typescriptlang.org)                             | Tipado en componentes              |
| [React Icons](https://react-icons.github.io)                         | Iconografía                        |
| [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) | Animación de texto                 |
| [Formspree](https://formspree.io)                                    | Backend del formulario de contacto |

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── home/          # Hero, slider, typewriter
│   ├── about/         # AboutMe, Services, Experience, Skills
│   ├── project/       # ProjectCard
│   ├── commons/       # Navbar, Footer, Layout compartido
│   └── ThemeToggle    # Cambio de tema claro/oscuro
├── data/
│   ├── projectData.js # Datos de los proyectos
│   └── jobsData.js    # Experiencia laboral
├── pages/
│   ├── index.astro    # Landing / Home
│   ├── about.astro    # Sobre mí
│   ├── proyectos.astro# Galería de proyectos con filtros
│   ├── contact.astro  # Formulario de contacto
│   └── 404.astro      # Página de error
├── styles/
│   └── global.css     # Design tokens, animaciones, utilidades
└── scripts/           # Lógica JS (tabs, filtros)
```

---

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/gabri98gim/gag-portfolio.git
cd gag-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## 🎯 Páginas

| Ruta         | Descripción                                     |
| ------------ | ----------------------------------------------- |
| `/`          | Landing con hero animado y typewriter           |
| `/about`     | Sobre mí, servicios, experiencia y tecnologías  |
| `/proyectos` | Galería con filtros por categoría               |
| `/contact`   | Formulario de contacto con diseño glassmorphism |

---

## 📝 Licencia

Proyecto personal de **Gabriel Andreu Gimeno**.

---

Last update: 2026
