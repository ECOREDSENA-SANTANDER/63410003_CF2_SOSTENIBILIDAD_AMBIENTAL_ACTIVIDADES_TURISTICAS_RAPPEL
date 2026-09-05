<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente integra los principales criterios para la planificación y el manejo ambiental de actividades turísticas de #[i rappel], mediante la aplicación de buenas prácticas, principios de mínimo impacto, capacidad de carga y organización responsable de los grupos. Asimismo, aborda la sensibilización y orientación ambiental de los usuarios, la actuación frente a contingencias y el uso de registros, reportes y mecanismos de seguimiento para verificar las prácticas implementadas. Estos elementos permiten relacionar las condiciones del escenario con decisiones operativas orientadas a prevenir afectaciones, promover comportamientos responsables y fortalecer progresivamente el desempeño ambiental durante el desarrollo de la actividad turística. 
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual sobre manejo ambiental en rappel, organizado en planificación, sensibilización, contingencias y mejora.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
