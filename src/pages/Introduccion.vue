<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La programación orientada a objetos (POO) es uno de los paradigmas más influyentes en el desarrollo de #[em software] moderno. Su capacidad para modelar problemas complejos de manera intuitiva, junto con su enfoque en la reutilización y mantenibilidad del código, la han convertido en una herramienta fundamental para desarrolladores y arquitectos de #[em software].
        .p-4(style="background-color: #CFF8DE")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.svg', alt='')
            .col-lg-10
              p.mb-0 Este componente aborda de manera sistemática los conceptos y prácticas de la programación orientada a objetos, desde sus fundamentos hasta la implementación de arquitecturas robustas. Se explora el paradigma desde múltiples perspectivas: comenzando con los conceptos básicos de clases y objetos, avanzando hacia principios de diseño sofisticados como SOLID, y culminando con patrones arquitectónicos y mejores prácticas de la industria.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/2.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.png', alt='')
      .col-lg-9
        p.mb-4 A lo largo del material, se combinan conceptos teóricos con ejemplos prácticos del mundo real, proporcionando una base sólida para que los estudiantes desarrollen #[em software] orientado a objetos de calidad. Se enfatiza la importancia del modelado y diseño previo a la implementación, utilizando herramientas como UML para visualizar y comunicar efectivamente las estructuras y relaciones entre objetos.
        .p-4(style="background-color: #EDE9EC ") 
          p.mb-0  La integración de conceptos arquitectónicos con prácticas de modelado asegura que los estudiantes no solo aprendan a escribir código orientado a objetos, sino que también comprendan cómo diseñar sistemas escalables y mantenibles. Como sugiere un principio fundamental en el desarrollo de software: "El buen diseño es tan importante como el buen código".
    p.mb-5(data-aos='fade-right') ¡Lo invitamos a explorar el mundo de la programación orientada a objetos, donde descubrirás cómo crear #[em software] robusto y flexible, aplicando principios y patrones que han resistido la prueba del tiempo!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BktcL3QiGKA?si=ewQ8hEH1cHsvES6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Programación orientada a objetos conceptos y modelado.



    
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
