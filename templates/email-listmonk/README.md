# Modelo de Email · Listmonk (NFCD)

Plantilla reutilizable para campañas de difusión por correo (Listmonk),
con el estilo de marca NFCD: papel cálido, acento vino, serif + mono.

## Archivos
- `Email_NFCD_modelo.html` — el modelo. Copialo, renombralo y editá las
  zonas marcadas en el comentario del inicio del archivo.

## Cómo reusar (resumen)
1. Copiá `Email_NFCD_modelo.html` → renombralo (ej: `Email_<tema>.html`).
2. Editá: título, preheader, eyebrow, título grande, lead, cartel destacado,
   datos clave, calendario, bloque de charla/video y los `href` de los botones.
3. Asegurate de que logos y fotos sean **URLs absolutas** (https://...).
4. En Listmonk: **Content → Format = "Raw HTML"** ANTES de pegar; pegá en el
   editor de código (con números de línea), no en la vista visual.
5. Dejá el enlace de baja con la etiqueta `{{ UnsubscribeURL }}`.

## Notas de marca para email
- Las fuentes propias (Book Antiqua / Letter Gothic) no cargan en clientes de
  correo: se usan sustitutos seguros (Palatino/Georgia + Courier).
- El título grande va en **serif** (no Amatic) para máxima compatibilidad.
- Estructura 100% en tablas, 600px, estilos inline, botón VML para Outlook,
  preheader oculto y responsive.

## Páginas públicas de Listmonk (baja / suscripción)
En la raíz del design system hay dos archivos para personalizar esas páginas:
- `listmonk_public_pages_NFCD.css` — estilo de marca (pegar en Appearance → Public → Custom CSS).
- `listmonk_public_es.js` — traduce las páginas al español (Appearance → Public → Custom JS).
