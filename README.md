# Tecnologías y Sistemas de la Información

Sitio educativo estático creado con Quarto para estudiar TSI desde celular. La organización es conceptual y no por capítulos: cada tema explica ideas centrales, definiciones, comparaciones, ejemplos, casos y preguntas con respuesta oculta.

## Estructura

- `index.qmd`: portada y accesos principales.
- `temas/`: páginas conceptuales de ética, redes, comercio digital y creación/cambio de sistemas.
- `repaso/`: glosario consolidado, preguntas, casos integradores y mapa conceptual.
- `assets/css/styles.css`: diseño mobile-first.
- `assets/js/interacciones.js`: navegación inferior móvil y mejoras ligeras.
- `docs/`: salida renderizada para GitHub Pages.

## Ruta de estudio

1. Leer la idea central de cada tema.
2. Revisar definiciones clave y comparaciones importantes.
3. Practicar preguntas con respuesta oculta.
4. Resolver casos integradores conectando los cuatro temas.
5. Usar el mapa conceptual para ordenar relaciones antes de una evaluación.

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
[privacidad](../temas/etica-datos-sociedad.html#privacidad-datos)
```

Las referencias de páginas temáticas deben ir al final bajo `## Referencias y fuente base` y dentro de `::: {.referencias-fuente}`. El botón “volver arriba”, la barra de progreso y el recuerdo de preguntas abiertas se cargan desde `assets/js/interacciones.js`; si JavaScript falla, el contenido sigue siendo legible.

## Fuentes y control de archivos

Los PDF locales y `MATERIAL_ETAPA.md` se usan como material de contraste o guía de etapa. No deben agregarse al commit ni publicarse dentro del sitio salvo que el curso lo indique explícitamente.

## Desarrollo local

```bash
quarto render
```

Para publicar en GitHub Pages, configurar Pages para desplegar desde la carpeta `docs/` de la rama principal. Después del push, revisar en GitHub:

1. Que Pages haya terminado el despliegue.
2. Que el inicio abra correctamente.
3. Que funcionen los enlaces de temas, glosario, preguntas, casos y mapa conceptual.
4. Que las respuestas ocultas se abran desde móvil y escritorio.
