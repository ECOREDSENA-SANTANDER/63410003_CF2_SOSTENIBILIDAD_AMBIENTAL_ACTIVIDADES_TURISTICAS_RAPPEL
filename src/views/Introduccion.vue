<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/1.png')
        .col-sm-12.col-lg-9
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-1.p-5
                img(src='@/assets/curso/temas/intro/2.svg')
              .col-sm-12.col-lg-7.bg-color-5.p-4
                  p.mb-0.mt-3 Las actividades turísticas de rappel se desarrollan en escenarios naturales donde la operación, las personas participantes y las condiciones del entorno mantienen una interacción constante. Por esta razón, la planificación y el manejo ambiental resultan fundamentales para orientar el uso responsable del espacio, prevenir afectaciones y favorecer prácticas compatibles con la conservación. Integrar criterios de sostenibilidad en cada etapa del recorrido permite tomar decisiones acordes con las características ambientales, sociales y operativas del escenario.
            p.mb-0 Este componente aborda el manejo ambiental aplicado al rappel turístico mediante buenas prácticas, principios de mínimo impacto, capacidad de carga, gestión de residuos y relacionamiento responsable con las comunidades locales. Asimismo, comprende la sensibilización de los usuarios, la actuación frente a contingencias ambientales y el registro y seguimiento de las prácticas implementadas, como elementos que permiten fortalecer progresivamente el desempeño ambiental durante el desarrollo de la actividad turística.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
