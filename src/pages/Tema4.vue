<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Patrones y arquitectura orientada a objetos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-5(style="background-color: #E6F0FC ")
          p.mb-0 La culminación de nuestro viaje por la programación orientada a objetos nos lleva a explorar cómo los patrones de diseño y la arquitectura se entrelazan para crear sistemas robustos y mantenibles. Este capítulo aborda la aplicación práctica de todo lo aprendido hasta ahora, centrándonos en soluciones probadas que han resistido la prueba del tiempo.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/28.png', alt='')
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Patrones de diseño fundamentales
    p.mb-4 Los patrones de diseño son como recetas probadas que resuelven problemas comunes en el desarrollo de #[em software]. Imagina que eres un arquitecto de edificios: así como existen patrones arquitectónicos probados para diseñar escaleras, ventanas o estructuras de soporte, en el #[em software] tenemos patrones que nos ayudan a resolver desafíos recurrentes.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-7
        .p-4.mb-4(style="background-color: #DED5DB")
          .row.justify-content-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.svg', alt='')
            .col-lg-10
              p.mb-0 Consideremos un sistema de notificaciones en una red social moderna. Cuando un usuario realiza una acción significativa (publicar una foto, comentar, dar "me gusta"), varios componentes del sistema necesitan reaccionar: las notificaciones push deben enviarse, los contadores deben actualizarse, las cachés deben invalidarse. Este escenario perfecto para el patrón #[em Observer] permite que múltiples componentes respondan a eventos sin acoplarse entre sí.
        p.mb-0 Los patrones creacionales, como #[em Factory Method] y #[em Builder], son particularmente valiosos en sistemas que deben ser flexibles en la creación de objetos. Por ejemplo, en un sistema de procesamiento de documentos, podríamos necesitar crear diferentes tipos de documentos (PDF, Word, HTML) sin que el código cliente necesite conocer los detalles específicos de cómo se construye cada formato.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Arquitectura limpia con POO
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #E6F0FC ")
          p.mb-0 La arquitectura limpia no es solo un concepto teórico, sino una guía práctica para organizar nuestro código de manera que sea fácil de entender, mantener y adaptar a los cambios. Pensemos en una aplicación de comercio electrónico moderna: la lógica de negocio (cómo se calculan los descuentos, cómo se procesan los pedidos) debe ser independiente de cómo se almacenan los datos o cómo se presenta la interfaz al usuario.
    p.mb-4 Esta separación de preocupaciones nos permite, por ejemplo, cambiar el sistema de base de datos sin afectar la lógica de negocio, o actualizar la interfaz de usuario sin tocar el núcleo de la aplicación. Es como construir un edificio con sistemas modulares: puedes renovar el interior sin afectar la estructura fundamental.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Implementación práctica de modelos
    .row.justify-content-center.mb-3
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 La transición del diseño a la implementación es donde la teoría se encuentra con la realidad. Aquí es donde los principios SOLID y los patrones de diseño se convierten en código real que resuelve problemas concretos. Por ejemplo, en una aplicación de gestión hospitalaria, podríamos tener una jerarquía clara de personal médico, pero la implementación debe manejar casos especiales como médicos que también son administrativos, o enfermeros que trabajan en múltiples departamentos.
        .p-4.mb-4(style="background-color: #DED5DB")
          .row.justify-content-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/32.svg', alt='')
            .col-lg-10
              p.mb-0 La clave está en mantener la flexibilidad sin sacrificar la claridad. Cada patrón implementado, cada decisión arquitectónica, debe justificarse por su valor práctico, no por su elegancia teórica. Es como cocinar: no usamos ingredientes solo porque están de moda, sino porque contribuyen al sabor final del plato.
      .col-lg-4.col-7: img(src='@/assets/curso/temas/33.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/34.png', alt='')
      .col-lg-8
        p.mb-4 A medida que los sistemas crecen, la importancia de una buena arquitectura se hace más evidente. Un sistema bien diseñado es como una ciudad bien planificada: puede crecer y evolucionar sin perder su funcionalidad esencial. Las interfaces claras actúan como contratos entre diferentes partes del sistema, permitiendo que los equipos trabajen de forma independiente sin pisarse los pies.
        .p-4(style="background-color: #E6FBEE")
          p.mb-0 La arquitectura orientada a objetos moderna reconoce que el cambio es inevitable. Los requisitos evolucionarán, las tecnologías cambiarán, y nuestro código debe estar preparado para adaptarse. Esta adaptabilidad no viene por accidente, sino por un diseño cuidadoso que sigue principios probados y patrones establecidos.
    p.mb-4 El verdadero arte de la arquitectura de #[em software] está en encontrar el equilibrio correcto: suficiente estructura para mantener el orden, suficiente flexibilidad para permitir el cambio, y suficiente simplicidad para mantener el sistema comprensible. Al final, el mejor diseño es aquel que permite que el sistema crezca y evolucione con el mínimo dolor posible.
    .p-4.mb-4(style="background-color: #DFE9EA")
      .row.justify-content-center.align-items-center
        .col-lg-1.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/35.svg', alt='')
        .col-lg-10
          p.mb-0 La programación orientada a objetos, cuando se aplica correctamente, nos proporciona las herramientas para crear estos sistemas adaptables y mantenibles. No se trata solo de escribir código que funcione hoy, sino de crear sistemas que puedan evolucionar con gracia a lo largo del tiempo.
    
</template>

<script>
export default {
  name: 'Tema4',
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
