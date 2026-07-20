# Contenido real de B Advisers (extraído de `badvisers-restore`)

Extraído directo de la base de datos WordPress corriendo en `badvisers-restore-web-1` (docker, puerto 8082) el 2026-07-20. Sirve como material listo para pegar al construir las Collections/Content Blocks en Squarespace.

## Hallazgo sobre la navegación

El menú principal/footer de WordPress (`navegacion-principal`) resuelve así:

| Item de menú | Destino real |
|---|---|
| Inicio | Home (ya migrado) |
| Capacidades | página `/capacidades/` |
| Sectores | página `/sectores/` |
| **Transacciones** | **ancla `#casos-de-exito` dentro de Home** (no es página aparte) |
| **Expertise** | **página `/equipo/`** (Expertise y Equipo son la misma página) |
| Publicaciones | página `/publicaciones/` (índice de blog) |
| **Contacto** | **ancla `#contacto`** (footer, ya replicado en `site.region`) |

Esto reduce el trabajo real: solo hacen falta **3 páginas nuevas** (Capacidades, Sectores, Equipo/Expertise) + el índice/detalle de Publicaciones. "Transacciones" ya debería vivir dentro del contenido de Home (la sección "Transacciones Representativas" — confirma si ya la pegaste en el Code Block de prueba) y "Contacto" ya está cubierto por el footer.

---

## Equipo (`/equipo/`) → Collection "Equipo"

Sin bio individual excepto una frase corta por persona (viene del `post_content`, no hay campo ACF de bio). Sugerencia de mapeo a una Collection tipo Blog: Título=nombre, Extracto=cargo, Cuerpo=descripción corta, Imagen destacada=foto.

| Nombre | Cargo | Descripción | Foto |
|---|---|---|---|
| Santiago Herdoiza | Director Ejecutivo | Director Ejecutivo con más de 30 años de trayectoria liderando inversiones inmobiliarias, asset management y desarrollo de proyectos internacionales. | `team-santiago-herdoiza.png` |
| José Luis Ycaza | Director Asociado | Ex-Presidente del Banco Central del Ecuador y ex-Ministro de Estado con amplia experiencia en banca multilateral. | `team-jose-luis-ycaza.png` |
| Eduardo Misan | Director Asociado | Con 20 años de experiencia en Wall Street y ejecución de más de 150 emisiones de bonos globales. | `team-eduardo-misan.png` |
| Jorge Hernández | Director Asociado | Con más de 10 años de experiencia en la industria inmobiliaria, farmacéutica y hospitalaria internacional. | `team-jorge-hernandez.png` |
| Diego Mora | Director Asociado | *(sin descripción cargada)* | ⚠️ `grupo-1-copia.png` — es una foto grupal, no individual. Falta la foto real de Diego antes de publicar. |

Copy de cabecera de la página: "Equipo Ejecutivo — Liderazgo y Visión Global. Nuestro equipo directivo combina más de tres décadas de trayectoria probada en banca internacional, política económica y mercados de capitales. Nuestra experiencia nos permite estructurar soluciones financieras complejas con un profundo entendimiento de los desafíos y oportunidades en entornos de alta volatilidad."

Imágenes en: `badvisers-restore/html/wp-content/uploads/2026/07/`

---

## Capacidades (`/capacidades/`) → Collection "Capacidades" o Content Blocks fijos

Copy de cabecera: "Nuestras Capacidades — Capital global para ambiciones sin fronteras…."

| Servicio | Descripción | Icono | Imagen |
|---|---|---|---|
| Levantamiento de Capital | Conectamos empresas y proyectos con inversionistas estratégicos, fondos de inversión, family offices e instituciones financieras para obtener el capital necesario para su crecimiento y expansión. | `icon-finanzas-corporativas.svg` | `levantamiento-de-capital.webp` |
| Estructuración de Vehículos de Inversión | Diseñamos estructuras de inversión eficientes, incluyendo SPV, SPE, Limited Partnerships, Joint Ventures y fondos privados, para canalizar capital hacia proyectos. | `icon-financiamiento-de-proyectos.svg` | `estructuracion-vehiculos.webp` |
| Banca de Inversión | Asesoramos en levantamiento de capital, fusiones y adquisiciones (M&A), valoraciones y otras transacciones corporativas orientadas a maximizar el valor. | `icon-banca-de-inversion.svg` | `banca-de-inversion.webp` |
| Finanzas Corporativas | Estructuramos soluciones de financiamiento corporativo, refinanciamiento y optimización de capital para fortalecer el crecimiento y la competitividad. | `icon-desarrollo-de-negocios.svg` | `finanzas-corporativas.webp` |
| Project Finance | Desarrollamos estructuras financieras para proyectos de energía, infraestructura, minería, industria y bienes raíces. | `icon-asesoria-a-inversionistas.svg` | `project-finance.webp` |

Nota: recuerda que Squarespace bloquea subir `.svg` directo (visto en el trabajo previo del header) — estos íconos de servicios/sectores van a necesitar convertirse a PNG con `sips` igual que se hizo antes.

SVGs en: `badvisers-restore/html/wp-content/themes/b-advisers/assets/images/services-icons/`
Fotos en: `badvisers-restore/html/wp-content/uploads/2026/07/`

---

## Sectores (`/sectores/`) → Collection "Sectores" o Content Blocks fijos

Copy de cabecera: "Sectores Estratégicos — Soluciones de capital adaptadas a las dinámicas y oportunidades de cada industria."

| Sector | Descripción | Icono | Imagen |
|---|---|---|---|
| Energía | Financiamiento y estructuración de proyectos de generación, transmisión y energías renovables. | `icon-energia.svg` | `energia.webp` |
| Infraestructura | Estructuración y financiamiento de proyectos de infraestructura pública y privada de gran impacto. | `icon-infraestructura.svg` | `infraestructura.webp` |
| Bienes Raíces | Capital y financiamiento para desarrollos inmobiliarios, activos de inversión y proyectos de alto rendimiento. | `icon-bienes-raices.svg` | `bienes-raices.webp` |
| Industria y Manufactura | Soluciones financieras para crecimiento, modernización, eficiencia y expansión empresarial. | `icon-industria-manufactura.svg` | `industria-manufactura.webp` |
| Comercio Internacional y Logística | Soluciones para comercio exterior, cadenas de suministro y expansión en mercados globales. | `icon-comercio-logistica.svg` | `comercio-internacional-logistica.webp` |
| Turismo y Hospitalidad | Estructuración financiera para hoteles, resorts, restaurantes y proyectos de entretenimiento y turismo. | `icon-turismo-hospitalidad.svg` | `turismo-hospitalidad.webp` |

SVGs en: `badvisers-restore/html/wp-content/themes/b-advisers/assets/images/industries-icons/`

---

## Transacciones (sección "Transacciones Representativas" dentro de Home) → Collection "Casos" o tarjetas fijas

| Monto | Categoría | Región | Color de marca | Descripción | Imagen |
|---|---|---|---|---|---|
| USD 20 Millones | *(sin categoría)* | América Latina | navy | Para refinanciamiento e inversión. | `reunion.webp` |
| USD 18 Millones | Expansión Industrial | América Latina | gold | Para financiamiento estratégico. | `case-expansion-industrial-port.jpg` |
| USD 65 Millones | Infraestructura | América Latina | teal | Para Project Finance bajo ley de NY. | `case-infraestructura-construction.jpg` |
| USD 30 Millones | Sector Minería | América Latina | gold | En préstamo a largo plazo. | `mineria.webp` |
| USD 30 Millones | Inversión Inmobiliaria | Estados Unidos | navy | En estructuración y levantamiento de capital. | `case-negociacion-meeting.jpg` |

Los colores (`navy`/`gold`/`teal`) ya coinciden con los tokens de marca definidos en `styles/custom.less` — úsalos para las tarjetas.

---

## Publicaciones (`/publicaciones/`) → Blog Collection nativa (encaje casi perfecto)

6 posts, cada uno con imagen destacada y cuerpo completo (aquí solo el primer tramo de cada uno; el texto completo está en la base de datos si lo necesitas — pídemelo y extraigo el resto).

1. **Tendencias en levantamiento de capital para 2026** — imagen `reunion.webp` — "El levantamiento de capital en 2026 exige más que un buen pitch: los inversionistas institucionales están evaluando con lupa la gobernanza, la trazabilidad financiera y la capacidad de ejecución..."
2. **Estructuración de vehículos de inversión: claves para inversionistas institucionales** — imagen `case-negociacion-meeting.jpg` — "La elección de un vehículo de inversión adecuado puede determinar el éxito de una operación tanto como la calidad de los activos subyacentes..."
3. **Project Finance en infraestructura: lecciones de transacciones recientes** — imagen `case-infraestructura-construction.jpg` — "El financiamiento de infraestructura bajo esquemas de project finance ha ganado protagonismo en América Latina..."
4. **Banca de inversión: qué esperar del mercado en el segundo semestre** — imagen `case-expansion-industrial-port.jpg` — "El segundo semestre suele traer una reactivación de la actividad de banca de inversión..."
5. **Sectores estratégicos: energía e infraestructura en el radar de los inversionistas** — imagen `bienes-raices.webp` — "Energía e infraestructura continúan atrayendo la mayor parte del capital destinado a proyectos de largo plazo en la región..."
6. **Cinco preguntas antes de estructurar una ronda de capital** — imagen `section-mapa-alcance-scaled.png` — "Antes de salir a buscar inversionistas, conviene que la empresa responda internamente algunas preguntas clave..."

Esta es la sección con mejor encaje 1:1: el Blog nativo de Squarespace ya tiene título, cuerpo, extracto, imagen destacada y tags — sin necesidad de mapear campos raros.

---

## Pendiente si se necesita

- Texto completo de los 6 posts de blog (aquí solo va el arranque de cada uno).
- Confirmar con el cliente si aceptan que el newsletter pase a Squarespace Email Campaigns (envío manual por publicación) o si necesitan que siga siendo automático.
- Conseguir la foto individual real de Diego Mora antes de publicar Equipo.
