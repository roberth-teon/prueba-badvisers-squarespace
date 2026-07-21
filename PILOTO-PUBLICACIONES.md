# Piloto de Publicaciones en Squarespace

Esta prueba usa el Blog nativo de Squarespace. El repositorio ya contiene los
estilos para el índice, el artículo y tres componentes editoriales especiales.

## 1. Configurar la colección creada

La colección `Publicaciones` ya está creada. En esta versión del panel no
aparece la sección **Not Linked**; no hace falta buscarla. La navegación del
sitio está controlada por la plantilla y ya enlaza directamente a
`/publicaciones`.

1. En la barra izquierda, junto a `Publicaciones`, pulsa el **engranaje**.
2. En **General** configura:
   - **Slug de la URL:** `/publicaciones` (como aparece actualmente).
   - **Habilitar página:** activado.
   - **Publicaciones por página:** `9` para obtener hasta tres filas de tres.
   - **Descripción de la página:**

     `Análisis y perspectivas sobre mercados de capitales, estructuración financiera e inversión.`

3. En el menú izquierdo del mismo panel, abre **Multimedia**.
4. En **Imagen destacada / video**, pulsa **Añadir imagen** y carga:
   `badvisers-restore/html/wp-content/themes/b-advisers/assets/images/hero/hero-city-skyline.jpg`
   Esta es la imagen de banner de la colección en Squarespace 7.0. No se llama
   `thumbnail` en la interfaz en español.
5. No uses **Imagen de redes sociales** para el banner; esa imagen solo se usa
   al compartir el enlace.
6. Cierra la configuración. Squarespace guarda estos ajustes desde el propio
   panel; si aparece un botón **Guardar**, púlsalo antes de cerrar.

## 2. Crear el post piloto

### Abrir el editor correcto

1. Regresa a la pantalla donde aparece `Publicaciones` en la barra izquierda.
2. Pulsa el botón **`+` situado a la derecha del engranaje**, en la misma fila
   de `Publicaciones`. Ese botón crea un post; el `+` general de Pages crea una
   página diferente.
3. Se abrirá un post nuevo con el campo **Escribe el título de la
   publicación...** y un bloque de texto inicial.
4. Escribe como título:

   `Tendencias en levantamiento de capital para 2026`

5. No publiques todavía. Primero carga el cuerpo y luego abre la pestaña
   **Opciones** del editor del post.

### Opciones del post

Dentro del post, pulsa **Opciones** y completa:

- **URL de la publicación:**
  `tendencias-en-levantamiento-de-capital-para-2026`
- **Imagen destacada:** pulsa **Añadir imagen** y carga
  `badvisers-restore/html/wp-content/uploads/2026/07/reunion.webp`.
- **Extracto:**

  `El levantamiento de capital en 2026 exige más que un buen pitch: los inversionistas institucionales están evaluando con lupa la gobernanza, la trazabilidad financiera y la capacidad de ejecución de cada empresa antes de comprometer un solo dólar.`

- **Autor:** selecciona el propietario o autor que publicará normalmente.

Luego abre la sección o pestaña donde aparecen **Categorías y etiquetas**:

1. En **Categorías**, escribe `Levantamiento de Capital`.
2. Confirma la nueva categoría para que quede seleccionada.
3. No hacen falta etiquetas para este piloto.
4. Mantén los comentarios desactivados, salvo que el cliente los necesite.

En algunas variantes del editor 7.0, Categorías, Estado y Comentarios aparecen
en una pestaña **Contenido** en lugar de **Opciones**. Los nombres de los campos
son los mismos.

### Construir el cuerpo con bloques

El cuerpo se arma con bloques nativos siguiendo este orden.

- Usa el bloque de texto inicial para los párrafos.
- Para añadir otro elemento, mueve el cursor entre dos bloques y pulsa el
  punto de inserción o botón `+` que aparece.
- Selecciona **Imagen** para la imagen interior.
- Selecciona **Código** únicamente para las tres cajas especiales indicadas
  abajo.
- En cada bloque Código, desactiva **Mostrar código fuente** para que el HTML
  se renderice como parte del artículo.

### Párrafos iniciales

`El levantamiento de capital en 2026 exige más que un buen pitch: los inversionistas institucionales están evaluando con lupa la gobernanza, la trazabilidad financiera y la capacidad de ejecución de cada empresa antes de comprometer un solo dólar.`

`Esa mayor exigencia no es un obstáculo, es una señal de madurez del mercado. Las empresas que entienden las reglas del juego y se preparan en consecuencia son, casi siempre, las que cierran sus rondas en menos tiempo y en mejores condiciones.`

### Imagen nativa

Cargar `badvisers-restore/html/wp-content/uploads/2026/07/infraestructura.webp`
con texto alternativo `Infraestructura`.

### Encabezado H2: Un mercado más selectivo

`Los fondos e inversionistas institucionales están destinando más tiempo al análisis de gobernanza y a la solidez del flujo de caja proyectado antes de comprometer capital. Esto significa que la preparación previa a una ronda —estados financieros auditados, proyecciones realistas y una historia de negocio clara— pesa cada vez más en la decisión final.`

`También ha cambiado el tipo de pregunta que se hace en la mesa de negociación. Ya no basta con demostrar crecimiento; hay que demostrar que ese crecimiento es sostenible con la estructura de capital actual, o explicar con precisión cuánto capital adicional se necesita y para qué se usará cada dólar.`

### Code Block: Puntos clave

Configurar el bloque para renderizar HTML, no para mostrar código fuente.

```html
<div class="badv-post-key-points">
  <h3 class="badv-post-key-points__title">Puntos clave</h3>
  <ul class="badv-post-key-points__list">
    <li>La preparación financiera y legal previa reduce significativamente el tiempo de cierre de una ronda.</li>
    <li>Los inversionistas institucionales priorizan estructuras de gobernanza claras sobre el tamaño de la empresa.</li>
    <li>Diversificar las fuentes de capital reduce el riesgo de dependencia de un solo inversionista.</li>
  </ul>
</div>
```

### Encabezado H2: Una ventana que se está abriendo

`El apetito de los fondos regionales por desplegar capital ha venido en aumento, y eso se refleja en el ritmo de las rondas que estamos viendo cerrarse en los sectores donde acompañamos a nuestros clientes.`

### Code Block: cifra destacada

```html
<div class="badv-post-stat">
  <p class="badv-post-stat__label">Actividad reciente</p>
  <div class="badv-post-stat__divider" aria-hidden="true"></div>
  <p class="badv-post-stat__number">6 de 10</p>
  <p class="badv-post-stat__text">Empresas que llegan con su documentación financiera lista cierran su ronda en menos de seis meses.</p>
</div>
```

### Párrafo final

`En B. Advisers acompañamos a nuestros clientes en cada etapa de este proceso, desde la estructuración inicial hasta el cierre de la operación, con un enfoque adaptado a la realidad de cada sector y al perfil específico de inversionista que se busca atraer.`

### Code Block: CTA

```html
<div class="badv-post-cta">
  <h3 class="badv-post-cta__title">¿Quiere conversar sobre este tema?</h3>
  <p class="badv-post-cta__text">Escríbanos y un miembro de nuestro equipo se pondrá en contacto con usted.</p>
  <a class="badv-post-cta__button" href="mailto:info@b-advisers.com?subject=Consulta%20sobre%20publicaci%C3%B3n">Contáctenos</a>
</div>
```

## 3. Publicar y comprobar

1. En las opciones del post, cambia **Estado** de borrador a **Publicado** o
   pulsa **Guardar y publicar**, según el botón que muestre el editor.
2. Confirma la publicación cuando Squarespace lo solicite.
3. Cierra el editor del post. El mensaje `No blog posts yet` / `No hay
   publicaciones` debe desaparecer y debe aparecer la tarjeta del artículo.
4. Abre `/publicaciones` en una ventana privada.
5. Abre el artículo desde su tarjeta.
6. Comprueba escritorio y móvil.
7. Verifica que el menú y ambos enlaces del footer lleven a `/publicaciones`.
8. Verifica que `/#contacto` desplace correctamente al footer.

Durante la edición, Squarespace puede no mostrar exactamente el CSS del sitio.
La comprobación visual válida debe hacerse fuera del modo edición.

## 4. Prueba de actualización automática

Después de aprobar el primer artículo:

1. Duplica el artículo o crea uno nuevo con contenido mínimo.
2. Publícalo temporalmente.
3. Confirma que aparece automáticamente en `/publicaciones`.
4. Elimina el artículo temporal.

No se necesita modificar Git para publicar, editar ni eliminar posts.
