# Tecnologías y Sistemas de la Información

Sitio educativo estático creado con Quarto para estudiar TSI desde celular. La organización es conceptual y no por capítulos.

## Estructura

- `index.qmd`: portada y accesos principales.
- `temas/`: páginas conceptuales iniciales.
- `repaso/`: glosario, preguntas, casos y mapa conceptual.
- `assets/css/styles.css`: diseño mobile-first.
- `assets/js/interacciones.js`: navegación inferior móvil y mejoras ligeras.
- `docs/`: salida renderizada para GitHub Pages.

## Uso de componentes

Bloques visuales para páginas de estudio:

```qmd
::: {.idea-central}
La idea central de este tema es...
:::

::: {.ojo-prueba}
Esto suele preguntarse comparando conceptos o aplicándolo a un caso.
:::

::: {.ejemplo}
Una situación concreta ayuda a explicar el concepto.
:::

::: {.caso-breve}
Caso: describe el contexto, el problema y qué se debe analizar.
:::
```

Preguntas con respuesta oculta:

```html
<details class="pregunta" id="pregunta-ejemplo">
<summary>¿Qué es un sistema de información?</summary>
<p>Respuesta breve para contrastar después de intentar responder.</p>
</details>
```

Usa enlaces internos con ancla para conceptos relacionados, por ejemplo:

```qmd
[privacidad](../temas/etica-datos-sociedad.html#conceptos-clave)
```

Las referencias de páginas temáticas deben ir al final bajo `## Referencias y fuente base` y dentro de `::: {.referencias-fuente}`. El botón “volver arriba”, la barra de progreso y el recuerdo de preguntas abiertas se cargan desde `assets/js/interacciones.js`; si JavaScript falla, el contenido sigue siendo legible.

## Desarrollo local

```bash
quarto render
```

Para publicar en GitHub Pages, configurar Pages para desplegar desde la carpeta `docs/` de la rama principal.
