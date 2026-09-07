<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Sensibilización y comportamiento ambiental durante la actividad
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-5.br-1.br-2
        .bloque-texto-g__img.br-1.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-0 La aplicación de las medidas de manejo ambiental requiere la participación activa de quienes realizan la actividad turística. En este sentido, la orientación proporcionada antes o durante el recorrido permite comunicar pautas de comportamiento, explicar restricciones o promover prácticas que reduzcan las afectaciones sobre el entorno. La sensibilización ambiental adquiere así un carácter práctico, vinculado con situaciones concretas que pueden presentarse durante una experiencia de #[i rappel].  

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sensibilización y comunicación ambiental
      
      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/3.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La sensibilización ambiental comprende acciones orientadas a favorecer el reconocimiento de las características, valores o condiciones del entorno, con el propósito de promover comportamientos responsables. En el turismo de aventura, su finalidad no consiste únicamente en transmitir información sobre el ambiente, sino en facilitar que los usuarios comprendan cómo sus decisiones pueden contribuir a conservar el escenario durante la actividad.
            p.mb-0 La comunicación ambiental, por su parte, permite transmitir recomendaciones, restricciones, indicaciones o mensajes relacionados con el comportamiento esperado. Para resultar efectiva debe ser comprensible, pertinente, breve o coherente con las condiciones reales del recorrido.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/2.png')


      .cajon.color-secundario.p-4.mb-5
        p.mb-0 La educación e información de visitantes forman parte de las estrategias que favorecen prácticas responsables en espacios naturales. Asimismo, la Política de Turismo Sostenible destaca la importancia de fortalecer una cultura turística que contribuya a la protección del capital natural mediante procesos de información, sensibilización o corresponsabilidad entre los actores del sector (Ministerio de Comercio, Industria y Turismo [MINCIT], 2020).

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de la comunicación ambiental
      
      p.mb-5 Un mensaje ambiental puede organizarse considerando cuatro elementos principales:
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.]  Elementos para la formulación de mensajes de orientación ambiental.
          figure.mb-0
            img.mb-4(src='@/assets/curso/temas/t2/4.svg').mb-0

      .row.justify-content-center.mb-5.bg-fondo-4.br-5.p-4.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img.p-4(src='@/assets/curso/temas/t2/5.svg')
        .col-sm-12.col-lg-7
          h3.br-6.pb-2.pcus-1.mb-4 Ejemplo
          p.mb-4 Por ejemplo, ante la presencia de vegetación sensible junto a una zona de preparación, la orientación puede indicar que las personas deben permanecer dentro del espacio establecido para evitar el pisoteo de la cobertura vegetal.
          p.mb-0 Esta estructura permite superar mensajes demasiado generales como “cuidar la naturaleza” o “ser responsable con el ambiente”. Una recomendación resulta más útil cuando especifica qué comportamiento debe adoptarse o cuál es su relación con las condiciones del lugar.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características de un mensaje ambiental efectivo

      SlyderF(columnas="col-lg-6 col-xl-4" data-aos='fade-right').mb-5
        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/6.svg')
          h4.text-center Claridad
          p.mb-0 Utilizar expresiones comprensibles o instrucciones precisas.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/7.svg')
          h4.text-center Brevedad
          p.mb-0 Priorizar la información necesaria para el momento del recorrido.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/8.svg')
          h4.text-center Pertinencia
          p.mb-0 Relacionar el mensaje con una condición real del escenario.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/9.svg')
          h4.text-center Oportunidad
          p.mb-0 Comunicar la recomendación antes de producirse la interacción.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/10.svg')
          h4.text-center Coherencia
          p.mb-0 Mantener correspondencia entre el mensaje, las medidas de manejo o las disposiciones aplicables.

        .tarjeta.bg-fondo-3.px-4.pb-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t2/11.svg')
          h4.text-center Orientación a la acción
          p.mb-0 Indicar el comportamiento esperado por parte del usuario.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Estrategias de sensibilización
      
      .row.justify-content-center.mb-5.bg-fondo-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t2/13.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t2/12.svg')
          p.mb-3 La sensibilización puede desarrollarse mediante orientaciones verbales, instrucciones previas, recursos interpretativos, señalización autorizada, demostraciones o mensajes incorporados a los diferentes momentos de la experiencia. La selección de la estrategia depende de las características del grupo, la complejidad de la información o las condiciones del recorrido.
          p.mb-0 En una actividad de #[i rappel], una charla previa puede concentrar las recomendaciones generales, mientras que determinados mensajes deben comunicarse directamente en el lugar donde adquieren relevancia. Por ejemplo, una restricción asociada con un sector sensible puede reforzarse antes de ingresar a dicho espacio.

      p.mb-5 La cantidad de información no determina la efectividad de la sensibilización. Los mensajes deben priorizar aquellos comportamientos que el participante necesita comprender o aplicar en cada momento de la actividad.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comportamiento ambiental del usuario
      
      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/15.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El comportamiento ambiental corresponde al conjunto de acciones, actitudes o decisiones mediante las cuales una persona interactúa con el entorno durante el recorrido. En actividades turísticas de #[i rappel], estas conductas pueden favorecer la conservación del escenario o incrementar las presiones generadas por su utilización.
            p.mb-0 La responsabilidad del usuario también implica reconocer que una conducta aparentemente pequeña puede adquirir mayor relevancia cuando es repetida por numerosos visitantes. Abrir un acceso alternativo, abandonar residuos de pequeño tamaño o desplazarse reiteradamente sobre vegetación sensible son acciones que pueden generar efectos acumulativos.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/14.png')

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Comportamientos responsables durante el recorrido

      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/16.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-4.p-4(titulo="Tránsito por un sector definido")
              p.mb-0 Mantener el desplazamiento dentro del recorrido establecido.

            .tarjeta.bg-color-4.p-4(titulo="Permanencia cerca de vegetación sensible")
              p.mb-0 Utilizar exclusivamente el área indicada para el grupo.

            .tarjeta.bg-color-4.p-4(titulo="Generación de residuos")
              p.mb-0 Conservarlos de manera segura hasta su retiro del escenario.

            .tarjeta.bg-color-4.p-4(titulo="Encuentro con fauna silvestre")
              p.mb-0 Mantener distancia o evitar acciones que generen perturbación.

            .tarjeta.bg-color-4.p-4(titulo="Presencia de elementos naturales")
              p.mb-0 Evitar extracción, desplazamiento o modificación innecesaria.

            .tarjeta.bg-color-4.p-4(titulo="Restricción ambiental comunicada")
              p.mb-0 Atender la indicación durante el tiempo o sector establecido.

      p.mb-5 La orientación del comportamiento debe realizarse de manera respetuosa, evitando mensajes ambiguos o exclusivamente prohibitivos. Explicar brevemente la razón de una indicación puede favorecer su comprensión, especialmente cuando la condición ambiental no resulta evidente para quienes participan.

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Orientación ambiental de usuarios en actividades de #[i rappel]

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-5.mb-0
            img.mb-4.d-none.d-lg-block.wcus-4(src='@/assets/curso/temas/t2/18.svg')
            p.mb-3 La orientación ambiental consiste en comunicar las indicaciones necesarias para que los usuarios adopten comportamientos compatibles con las medidas de manejo establecidas. Puede desarrollarse antes, durante o al finalizar la actividad, según el tipo de información que deba transmitirse.
            p.mb-0 La comunicación debe adaptarse a las características del grupo sin modificar el propósito ambiental de las medidas. Cuando existen participantes con diferentes niveles de experiencia, pueden utilizarse explicaciones más sencillas, demostraciones o recordatorios puntuales.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/17.png')

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            p.mb-0  #[b Tabla 4.] Orientación ambiental según el momento de la actividad.
          .tabla-a.color-primario.mb-0
            table
              thead
                tr
                  th Momento
                  th Información prioritaria
              tbody
                tr
                  td Antes del recorrido
                  td Características ambientales, restricciones, residuos, desplazamiento o comportamiento esperado.
                tr
                  td Durante la aproximación
                  td Uso de rutas establecidas, protección de sectores sensibles o respeto por dinámicas territoriales.
                tr
                  td Preparación y descenso
                  td Permanencia en zonas definidas, reducción de perturbaciones o cumplimiento de medidas específicas.
                tr
                  td Llegada y retorno
                  td Retiro de residuos, comportamiento en áreas de salida o verificación de las condiciones del lugar utilizado.

        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/19.png')

      p.mb-0 La orientación ambiental permite trasladar las medidas previstas en la planificación hacia comportamientos observables durante el recorrido. De esta forma, la sensibilización deja de limitarse a la transmisión de conceptos para convertirse en una herramienta práctica de sostenibilidad aplicada a la operación turística de #[i rappel].


  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
