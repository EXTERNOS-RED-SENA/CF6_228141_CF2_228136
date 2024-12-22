<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El diagrama representa la estructura integral del componente sobre programación orientada a objetos, centrado en los conceptos y el modelado de #[em software] bajo este paradigma. Partiendo del concepto central de la POO, se ramifica en cuatro áreas esenciales: fundamentos de programación orientada a objetos, principios de diseño, modelado UML y patrones con arquitectura. Cada una de estas áreas incorpora subtemas específicos que conforman los elementos fundamentales para comprender y aplicar eficazmente el paradigma orientado a objetos en el desarrollo de #[em software.]
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/36.png', alt='')
      .col-lg-5.mb-lg-0.mb-3
        .p-4(style="background-color: #E6F0FC")
          p.mb-0 Esta organización ilustra el flujo lógico del aprendizaje y aplicación de la POO. Comienza con la comprensión de los conceptos fundamentales como clases, objetos y encapsulamiento, proporcionando una base sólida. Luego, profundiza en los principios de diseño, abordando la herencia, el polimorfismo y los principios SOLID, que son esenciales para crear #[em software] robusto y mantenible. A continuación, se enfoca en el modelado UML como herramienta para visualizar y documentar el diseño orientado a objetos. Finalmente, culmina con la aplicación práctica a través de patrones de diseño y arquitectura limpia.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/37.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
      .col-lg-7
        .p-4.tarjeta.color-primario--borde.border-2.bg-white
          p.mb-0 El diagrama funciona como una hoja de ruta visual para comprender la estructura y el alcance del componente, permitiendo al estudiante visualizar rápidamente la progresión del aprendizaje y las conexiones entre los diferentes temas. Los elementos transversales (diseño modular, reutilización y mantenibilidad) se entrelazan con todas las áreas, enfatizando su importancia continua en el desarrollo orientado a objetos. Se sugiere utilizarlo como referencia para organizar el estudio y entender cómo se integran los diversos aspectos en el desarrollo de #[em software] orientado a objetos, garantizando la creación de aplicaciones bien estructuradas y mantenibles. 

    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La Figura 3 se denomina «Síntesis temática del componente», es un mapa mental con el tema central “Programación orientada a objetos: conceptos y modelado, del cual se desprenden cuatro ramas principales —Fundamentos POO, principios diseño, modelado UML, patrones y arquitectura— cada una detallada con sus subtemas específicos.")
    .row.justify-content-center.mb-5
      .col-3
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
