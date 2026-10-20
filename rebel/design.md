# Biblioteca Tirant · Landing "Rebel · Full width"

Documentación del sistema de diseño de la variante **Rebel**. Secciones a sangre completa (sin márgenes exteriores ni esquinas redondeadas de sección), fondo negro puro en los bloques oscuros, acento rosa/granate y tipografía Inter / Inter Tight.

- Archivos: `index.html`, `assets/css/style.css`, `assets/js/main.js`
- Basado en el frame de Pencil **"Rebel · Full width"** (desktop), **"Rebel · Full width · Tablet"** (768px) y **"Rebel · Full width · Mobile"** (390px).

---

## 1. Fundamentos

### 1.1 Color

| Token | Valor | Uso |
|---|---|---|
| `--brand` | `#A6093D` | Acento principal (botones primarios, tag, enlaces activos) |
| `--brand-hover` | `#7D082F` | Hover de `--brand` |
| `--brand-active` | `#360214` | Active/pressed de `--brand` |
| `--focus` | `#FF8FAE` | Foco de teclado, acentos sobre fondo oscuro (card-tag, hover de flechas) |
| `--sofia` | `#13192E` | Fondo de la sección SOFIA 4.0 (azul marino oscuro) |
| `--bg-page` | `#ECECEC` | Fondo general del `<body>` |
| `--bg` | `#FFFFFF` | Fondo de secciones claras (`.sec-bg`) |
| `--bg-card` | `#F7F7F7` | Fondo de tarjetas (`.fact`) |
| `--bg-block` | `#F2F2F2` | Fondo de bloques de cierre (`.closing`, `.before-pill`) |
| `--ink` | `#171717` | Color de títulos |
| `--text` | `#404040` | Color de texto de cuerpo |
| `--muted` | `#737373` | Texto secundario (citas "Antes") |
| `--border` / `--border-soft` | `#E5E7EB` / `#D9D9D9` | Bordes sutiles (acordeón FAQ) |
| `--black` | `#000000` | Fondo de la banda "Lo que está en juego" y tarjetas `on-dark` |
| `--near-black` | `#111111` | Fondo de iconos oscuros, botón blanco con texto oscuro |
| `--footer-bg` | `#141414` | Fondo del pie de página |

Fondos degradados reutilizados (`.sec-tint`): `linear-gradient(180deg,#FFFFFF 0%,#F5F5F5 45%,#E4E4E4 100%)`.

### 1.2 Tipografía

- **Display** (titulares): `"Inter Tight"`, peso 500, `letter-spacing` negativo (entre `-.015em` y `-.031em`).
- **Body** (texto de cuerpo, botones, nav): `"Inter"`, peso 400/500.
- Fuentes cargadas desde Google Fonts: `Inter:wght@400;500;600` y `Inter+Tight:wght@500;600`.

| Token | Valor (desktop) |
|---|---|
| `--fs-display` | `5rem` (80px) |
| `--fs-h1` | `4.5rem` (72px) |
| `--fs-h2` | `3.25rem` (52px) |
| `--fs-h3` | `1.875rem` (30px) |
| `--fs-h4` | `1.25rem` (20px) |
| `--fs-lead` | `1.25rem` (20px) |
| `--fs-fact` | `4.5rem` (72px) |

Los tamaños de titulares de sección (hero headline, stakes-statement, intro-label, etc.) no usan variables, van hardcodeados por elemento y se reajustan en cada breakpoint (ver §3).

### 1.3 Espaciado

Escala de 8 en 8 (con algunos saltos a 56/64/80/96/120):

```
--s-8:8px  --s-12:12px  --s-16:16px  --s-20:20px  --s-24:24px  --s-32:32px
--s-40:40px --s-48:48px --s-56:56px --s-64:64px --s-80:80px --s-96:96px --s-120:120px
```

### 1.4 Forma y bordes

| Token | Valor | Uso |
|---|---|---|
| `--r-card` | `24px` | Tarjetas estándar (fact, scene, feature, step, concept-card) |
| `--r-card-lg` | `28px` | Tarjetas grandes (result-card) |
| `--r-pill` | `999px` | Botones, tabs, badges de icono |
| `--r-chip` | `20px` | Tag/pill pequeño, sofia-pill |
| `--bw-1` / `--bw-1-5` / `--bw-3` | `1px` / `1.5px` / `3px` | Bordes finos / tabs / foco de teclado |

### 1.5 Movimiento

```
--t-fast: 220ms
--t-med:  450ms
--ease:   cubic-bezier(.2,.7,.2,1)
```

Todas las transiciones y animaciones respetan `prefers-reduced-motion: reduce` (desactivadas por completo).

---

## 2. Estructura de página

- `.sec` — sección genérica a sangre completa, `padding: var(--s-80) var(--s-120)` en desktop.
- `.container` — ancho máximo de contenido `1200px`, centrado.
- Variantes de fondo de sección: `.sec-bg` (blanco), `.sec-tint` (degradado gris), `.sec-black` (negro), `.sec-sofia` (azul marino), `.sec-footer` (casi negro).
- `.sec-head` — cabecera de sección (título + lead), `.sec-head.centered` la centra y limita a `max-width:900px`.

No hay radios de esquina en las secciones (a diferencia de la variante "Rebel" con márgenes); las tarjetas internas sí usan `--r-card` / `--r-card-lg`.

---

## 3. Breakpoints responsive

| Breakpoint | Rango | Comportamiento |
|---|---|---|
| Desktop | `≥1280px` | Layout completo: nav con enlaces + 2 botones, hero a 2 columnas (headline fijo 640px + aside), grids a 3 columnas |
| Tablet | `768–1279px` | Nav con hamburguesa (solo botón "Solicitar información" visible, "Acceder" y enlaces ocultos); hero y la mayoría de bloques de 2 columnas pasan a apilarse en vertical; grids de 3 pasan a 1 columna |
| Mobile | `≤767px` | Nav con hamburguesa (ambos botones ocultos); paddings de sección reducidos a 20px laterales; tipografía reducida; `.results-row` pasa de 2 a 1 columna; footer y facts se apilan |

> ⚠️ **Importante**: el layout de escritorio (nav horizontal, hero a 640px fijo + aside) solo tiene espacio para funcionar a partir de **1280px**. Por eso el breakpoint "tablet" se extiende hasta `1279px` y no hasta `1023px` — si se usara `1023px`, el rango 1024–1279px rompería (textos solapados, botones desbordados).

> ⚠️ **Cuidado con `flex:0 0 Npx` al apilar**: varios elementos (`.intro-label`, `.stakes-visual`, `.sofia-shot`) usan un ancho fijo vía `flex-basis` en el layout de fila de escritorio. Al cambiar a `flex-direction:column` en tablet/mobile, ese mismo valor se interpreta como **altura** mínima y genera huecos enormes. Cada uno de estos elementos debe resetearse explícitamente a `flex:none` (o un valor de altura correcto) dentro de su media query de apilado.

Paddings de sección por breakpoint (valores exactos tomados del diseño, no uniformes):

| Sección | Desktop | Tablet (≤1279px) | Mobile (≤767px) |
|---|---|---|---|
| General (`.sec`) | `80px 120px` | `72px 40px` | `56px 20px` |
| `#guia` (Intro) | — | `68px 40px` | `56px 20px` |
| `#problema` | — | `68px 40px` | `56px 20px` |
| `.sec-black` (Stakes) | — | `82px 40px` | `67px 20px` |
| `#funciones` | — | `68px 40px` | `56px 20px` |
| `.plan` (Cómo empezar) | `120px 120px 80px` | `102px 40px 68px` | `84px 20px 56px` |
| `#resultados` | — | `82px 40px 68px` | `67px 20px 56px` |
| `#sofia` | — | `68px 40px` | `56px 20px` |
| `#faq` | — | `82px 40px 68px` | `67px 20px 56px` |
| `.cta-final` | `96px 120px` | `82px 40px` | `67px 20px` |
| `.sec-footer` | — | `48px 40px 41px` | `39px 20px 34px` |

---

## 4. Componentes

### 4.1 Botones (`.btn`)

Siempre píldora (`border-radius:999px`), `min-height:44px` (40px en `.btn-sm`).

- `.btn-primary` — fondo `--brand`, texto blanco. Hover `--brand-hover`, active `--brand-active`.
- `.btn-white` — fondo blanco, texto `--near-black`. Uso sobre fondos oscuros (hero, plan, cta-final).
- `.btn-ghost` — cristal (`#FFFFFF14` + blur 16px + borde blanco). Uso sobre fotografías/fondos oscuros como acción secundaria.
- `.btn-wide` — `width:100%`, usado en el menú móvil.
- Micro-interacción: hover eleva el botón `translateY(-2px)` + sombra (`.btn-primary`, `.btn-white`); `.btn-ghost` solo eleva.

### 4.2 Nav fija (`.site-nav`)

- `position:fixed`, transparente por defecto; al hacer scroll (`window.scrollY > 24`, gestionado por `main.js`) añade `.is-scrolled`: fondo `#000000D9` + blur 16px + padding reducido + sombra inferior de 1px.
- Desktop: logo + enlaces + spacer + 2 botones (`Acceder` ghost, `Solicitar información` primario).
- Tablet: oculta enlaces y `Acceder`; muestra solo `Solicitar información` + hamburguesa.
- Mobile: oculta también `Solicitar información`; solo logo + hamburguesa.

### 4.3 Menú móvil (`.mobile-menu`)

Overlay a pantalla completa (`position:fixed; inset:0`), imagen de fondo del hero + overlay oscuro + blur 30px. Se activa añadiendo `.is-open` (gestionado por JS vía `menu-toggle`/`menu-close`, cierra con click en enlace o tecla Escape). Contiene: logo + botón cerrar, lista de enlaces grandes (30px, con icono de flecha), spacer, y acciones (botón primario ancho + botón ghost ancho + nota de copyright).

### 4.4 Tarjetas

- `.fact` — fondo `--bg-card`, valor grande (`--fs-fact`) + descripción, altura fija `240px` (auto en mobile).
- `.scene` — imagen de fondo + degradado inferior, título + texto en la base. Altura `560px` → `440px` (tablet) → `420px` (mobile).
- `.feature` — fondo blanco, icono + título + descripción. Altura `300px` → `241px` (tablet) → auto (mobile).
- `.step` — fondo semitransparente con blur sobre imagen, usado en "Cómo empezar".
- `.result-card` (`.on-light` / `.on-dark`) — tarjeta "antes/ahora", altura `440px` → `460px` (tablet) → auto (mobile).
- `.concept-card` — tarjeta de cristal (blur 24px) superpuesta a `.stakes-photo`; su contenido (icono, título, descripción, tag) se actualiza dinámicamente por JS al cambiar de pestaña en `.tabs`.

### 4.5 Badges e iconos

- `.icon-badge` — círculo `52×52px`, fondo blanco (o `.dark` con fondo `--near-black`), contiene un icono de 22px.
- `.tag` / `.card-tag` / `.sofia-pill` — pills de texto pequeño, color `--focus` sobre fondo oscuro o `--brand` sobre fondo claro (`.card-tag.on-light`).
- Iconos como sprite SVG inline (`<symbol>` + `<use>`) en la cabecera del `<body>`: `i-arrow-down`, `i-arrow-up-right`, `i-search`, `i-highlighter`, `i-quote`, `i-headphones`, `i-sparkles`, `i-plus`, `i-menu`, `i-close`.

### 4.6 Tabs (`.tabs` / `.tab`)

Pills con borde blanco y cristal; el seleccionado (`aria-selected="true"`) usa fondo `--brand`. Al hacer clic, `main.js` actualiza el icono, título, descripción y tag de `.concept-card` según los `data-*` del botón (3 estados: Búsqueda / Notas / Citas).

### 4.7 Acordeón FAQ (`.faq-item`)

Expansión via `grid-template-rows: 0fr → 1fr` (controlado por `data-open` en el `<div>` y `aria-expanded` en el `<button>`). El icono `+` rota 45° al abrir.

---

## 5. Animación y micro-interacciones (`main.js` + CSS)

- **Entrada del hero**: `.hero-headline`, `.hero-lead`, `.hero-cta` animan con `fadeUp` (opacidad + `translateY(32px)→0`) en cascada (delays 0.1s / 0.4s / 0.65s).
- **Aparición al hacer scroll** (`.reveal` + `IntersectionObserver`): se aplica automáticamente a los hijos de `.facts`, `.scenes`, `.features`, `.steps`, `.results-row` y `.footer-cols`, con un delay escalonado de 160ms por elemento (variable `--reveal-delay`). Si JS no corre, el contenido permanece visible por defecto (no se pierde nada).
- **Nav fija**: cambia de transparente a sólida con scroll (`throttle` vía `requestAnimationFrame`).
- Todo el movimiento respeta `prefers-reduced-motion: reduce` (transiciones/animaciones a 0.01ms).

---

## 6. Imágenes y assets

Ubicados en `assets/img/`. Formatos WebP para fotografía, PNG para favicon.

| Archivo | Uso |
|---|---|
| `logo.webp` | Logotipo (nav, footer, menú móvil) |
| `hero-abogada.webp` | Fondo del hero y del menú móvil |
| `photo.webp` | Fondo de `.stakes-photo` |
| `scene-1/2/3.webp` | Fondos de `.scene` (Problema) |
| `devices.webp` | Imagen de dispositivos (Funciones), `mix-blend-mode:multiply` |
| `plan-bg.webp` | Fondo de "Cómo empezar" |
| `sofia-screen.webp` | Captura de SOFIA 4.0 |
| `cta-bg.webp` | Fondo del CTA final |

---

## 7. Accesibilidad

- `.skip` — enlace "Saltar al contenido", visible solo al enfocar.
- `.sr-only` — texto para lectores de pantalla (aviso de apertura en pestaña nueva en enlaces externos).
- Foco de teclado siempre visible: `outline: 3px solid var(--focus)` con `outline-offset:3px`.
- Tabs y FAQ usan atributos ARIA (`role="tablist"`, `aria-selected`, `aria-expanded`).
- Menú móvil gestiona `aria-hidden`, `aria-expanded` y devuelve el foco al botón al cerrar con Escape.
