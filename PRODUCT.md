# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Estático: HTML + CSS (tokens propios del design system) + Tailwind CSS vía CDN + JS vanilla. Sin build, sin backend. Decisión tomada antes de este init (ya implementada en `index.html`, `assets/css/style.css`, `assets/js/main.js`).

## Users

Dos perfiles con igual prioridad, sin jerarquía entre ellos:
- **Profesional jurídico o académico** (abogado, docente, investigador) que necesita buscar, leer, anotar y citar sobre el fondo editorial de Tirant lo Blanch.
- **Gestor institucional** (universidad, despacho, colegio profesional) que decide o gestiona el acceso de su organización a la biblioteca.

## Product Purpose

Landing de marketing para la Biblioteca Virtual de Tirant lo Blanch: presenta la propuesta de valor (todo el fondo editorial en un solo sitio, con búsqueda, anotación, citas y el asistente SOFIA 4.0) y dirige al visitante hacia el producto real para solicitar acceso.

## Positioning

El fondo editorial completo de Tirant lo Blanch —editorial jurídica y académica mejor valorada según el índice SPI del CSIC— disponible en un único sitio, con herramientas de trabajo (búsqueda avanzada, notas, citas exportables, audiolibros) que ningún competidor puede replicar sin ese mismo fondo.

Tagline actual (título, Open Graph y banda CTA final): **"Biblioteca Tirant · Siempre al alcance de tu mano"**.

## Information Architecture

Estructura narrativa de `index.html` (viaje del héroe: problema → guía → plan → transformación → prueba de autoridad → objeciones → acción), con el menú funcionando como índice parcial (no enlaza a todas las secciones, solo a los hitos de evaluación de compra):

| Sección (id) | Rol narrativo | En el menú |
|---|---|---|
| Hero (`#top`) | Promesa | — |
| Problema (`#problema`) | Villano / fricción del día a día | No (está justo al hacer scroll) |
| Banda "Lo que está en juego" | Coste de no cambiar | No |
| Guía (`#guia`) | Autoridad + presentación de Biblioteca Virtual | **Biblioteca Virtual** |
| Características (sin id) | Qué incluye (búsqueda, notas, citas) | No |
| Plan (`#plan`) | Cómo empezar, 3 pasos | **Cómo empezar** |
| Transformación (`#transformacion`) | Antes/después medible | **Resultados** |
| SOFIA 4.0 (`#sofia`) | Diferenciador con nombre propio | **SOFIA 4.0** |
| FAQ (`#faq`) | Objeciones | **Preguntas** |
| CTA final | Cierre + repetición de la promesa | — |

## Operating Context

- Acceso por usuario y contraseña, Single Sign-On institucional o reconocimiento de IP.
- El producto real (biblioteca, login, catálogo, SOFIA) vive en `https://biblioteca.tirant.com/`; esta landing es la puerta de entrada de marketing, no la aplicación.
- Todos los CTA de la landing ("Solicitar información", "Acceder", etc.) enlazan a `https://biblioteca.tirant.com/`. La landing no tiene formulario propio ni backend de captación de leads.

## Capabilities and Constraints

- Sitio 100% estático, sin servidor ni formulario propio (decisión explícita: se elimina el formulario de contacto y se sustituye por enlaces directos al producto).
- Sin integración de analítica, CMS o backend en esta entrega.
- Sin testimonios, logos de instituciones ni cifras cuantitativas inventadas: lo que no esté confirmado por negocio no se muestra (decisión explícita: se retira la sección de prueba social con testimonios de marcador).

## Brand Commitments

- Nombre del producto: Biblioteca Tirant (Tirant lo Blanch).
- Identidad visual documentada en `docs/design.md`: sobria, editorial, un único acento granate `#A6093D`, radio 2px, sin sombras ni degradados. Deriva de los tokens del ecommerce de la editorial. Excepción puntual: la sección SOFIA 4.0 usa el fondo oscuro propio de esa submarca (`#13192E`), no reutilizable en el resto de la landing.
- Tono: directo, sin hype ("la más completa", "más inteligente" están explícitamente prohibidos en `docs/storytelling-landing.md`).

## Evidence on Hand

- `docs/storytelling-landing.md`: estructura narrativa completa de la landing, con datos confirmados (acceso SSO/IP, aval CSIC, funciones reales) y una lista explícita de datos `[PENDIENTE]` que no deben inventarse.
- `docs/design.md` y `docs/guía-de-estilos.html`: guía de estilos de referencia visual.
- `assets/img/logo-tirant-white.webp`: logotipo oficial en blanco, con el lockup "Tirant · Biblioteca Virtual", aportado directamente por el cliente. Se usa en cabecera y pie; la cabecera es fija y transparente sobre el hero (pasa a fondo oscuro con blur al hacer scroll), por lo que el logo es blanco en todo momento.
- `assets/img/hero-bg.webp`: fotografía aportada por el cliente (despacho/biblioteca jurídica: mazo, balanza, libros antiguos, lupa sobre un contrato), sin marca de agua. Fondo a sangre completa del hero, con velo de tinta y cabecera transparente integrada encima. Posicionada con `background-position:right` para mantener siempre visible el lado derecho de la imagen al redimensionar. Existen variantes sin usar en el repositorio (`hero-bg_1.webp`, `hero-bg_old.webp`) conservadas como backup de versiones anteriores.
- `assets/img/photo.webp`: fotografía de persona trabajando con portátil y libro. Se usa como fondo de la banda "Lo que está en juego" (`.band.on-brand`), pegada al borde derecho y ajustada al 100% del alto de la banda, bajo el granate de marca. En móvil lleva un `blur` suave para mejorar la legibilidad del texto centrado.
- No hay testimonios reales, logos de instituciones clientes, capturas del producto real (`biblioteca.tirant.com`, que requiere login), portadas reales de libros ni cifras de uso disponibles todavía; no se fabrican para esta entrega. No existen actualmente `assets/img/cover-*.jpg` ni una versión a color del logotipo en el repositorio.

## Product Principles

- El impacto visual viene de la escala tipográfica y el ritmo editorial, nunca de hype verbal ni de datos inventados.
- Un único CTA por viewport, siempre apuntando al producto real (`biblioteca.tirant.com`).
- Mensaje con igual peso para el perfil individual y el institucional; ninguno subordinado al otro.
- Lo no confirmado por negocio se omite, no se rellena con marcadores que parezcan reales.

## Accessibility & Inclusion

Cumplimiento WCAG 2.2 AA: foco visible, formularios (los que queden) con error en texto, objetivos táctiles ≥44px, `prefers-reduced-motion` respetado. Ya implementado en la base de código.
