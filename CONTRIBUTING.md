# Flujo de contribución

## Ramas
- `main`: integración principal y estable; desde el TP03 sólo debe recibir cambios que compilen y superen las pruebas definidas.
- `stg`: versión candidata a prueba.
- `prod`: versión aprobada para entrega o defensa.
- `feature/configuracion-inicial`: rama especial utilizada exclusivamente en el TP02.
- `feature/1-capacidades`: convención para las capacidades posteriores al TP02.

## Flujo
1. Crear un único Issue para el trabajo y agregarlo al Project de la organización.
2. Actualizar `main` y crear desde allí la rama indicada por el TP.
3. Realizar commits pequeños y descriptivos, vinculándolos con el Issue cuando corresponda; por ejemplo, `docs: adaptar archivos iniciales (#1)`.
4. Abrir el PR contra `main`, completar la plantilla, incluir `Closes #N` y solicitar revisión a `@DS-2026-GrupoFLR/reviewers`.
5. No hacer push directo a `main`, `stg` ni `prod`.
6. Tras integrar capacidades aprobadas, abrir un PR de `main` a `stg`; para una entrega o defensa, abrir otro de `stg` a `prod`.

## URL para crear un PR de funcionalidad
`https://github.com/DS-2026-GrupoFLR/SmartPantry/compare/main...feature/1-PR-funcionalidad?expand=1`
