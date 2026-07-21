# Piloto de Publicaciones en Squarespace

Esta prueba usa el Blog nativo de Squarespace. El repositorio ya contiene los
estilos para el índice, el artículo y tres componentes editoriales especiales.

## 1. Crear la colección

1. En **Pages**, pulsa `+` y elige **Blog**.
2. Nómbrala `Publicaciones`.
3. En sus ajustes, define el URL slug como `publicaciones`.
4. Déjala en **Not Linked** durante la prueba. Esto no cambia su URL.
5. En la imagen/thumbnail de la colección, carga:
   `badvisers-restore/html/wp-content/themes/b-advisers/assets/images/hero/hero-city-skyline.jpg`
6. Usa como descripción:

   `Análisis y perspectivas sobre mercados de capitales, estructuración financiera e inversión.`

## 2. Crear el post piloto

- Título: `Tendencias en levantamiento de capital para 2026`
- Slug: `tendencias-en-levantamiento-de-capital-para-2026`
- Categoría: `Levantamiento de Capital`
- Extracto:

  `El levantamiento de capital en 2026 exige más que un buen pitch: los inversionistas institucionales están evaluando con lupa la gobernanza, la trazabilidad financiera y la capacidad de ejecución de cada empresa antes de comprometer un solo dólar.`

- Imagen destacada:
  `badvisers-restore/html/wp-content/uploads/2026/07/reunion.webp`

El cuerpo se arma con bloques nativos siguiendo este orden.

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

1. Publica el artículo.
2. Abre `/publicaciones` en una ventana privada.
3. Abre el artículo desde su tarjeta.
4. Comprueba escritorio y móvil.
5. Verifica que el menú y ambos enlaces del footer lleven a `/publicaciones`.
6. Verifica que `/#contacto` desplace correctamente al footer.

Durante la edición, Squarespace puede no mostrar exactamente el CSS del sitio.
La comprobación visual válida debe hacerse fuera del modo edición.

## 4. Prueba de actualización automática

Después de aprobar el primer artículo:

1. Duplica el artículo o crea uno nuevo con contenido mínimo.
2. Publícalo temporalmente.
3. Confirma que aparece automáticamente en `/publicaciones`.
4. Elimina el artículo temporal.

No se necesita modificar Git para publicar, editar ni eliminar posts.
