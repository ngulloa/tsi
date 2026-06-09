# Tecnologías y Sistemas de la Información

Sitio educativo estático creado con Quarto para estudiar TSI desde celular. La organización es conceptual y no por capítulos.

## Estructura

- `index.qmd`: portada y accesos principales.
- `temas/`: páginas conceptuales iniciales.
- `repaso/`: glosario, preguntas, casos y mapa conceptual.
- `assets/css/styles.css`: diseño mobile-first.
- `assets/js/interacciones.js`: navegación inferior móvil y mejoras ligeras.
- `docs/`: salida renderizada para GitHub Pages.

## Desarrollo local

```bash
quarto render
```

Para publicar en GitHub Pages, configurar Pages para desplegar desde la carpeta `docs/` de la rama principal.
