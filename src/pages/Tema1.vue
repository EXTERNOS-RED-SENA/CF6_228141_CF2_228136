<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la Programación Orientada a Objetos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #DED5DB ")
          p.mb-0 La programación orientada a objetos (POO) representa un cambio paradigmático en la forma de diseñar y desarrollar software, ofreciendo una manera natural de representar y manipular conceptos del mundo real en código. Este capítulo explora los fundamentos esenciales de este paradigma, estableciendo las bases para el desarrollo de software robusto y mantenible.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Introducción al paradigma orientado a objetos
    p.mb-5 La programación orientada a objetos surge como respuesta a las limitaciones de la programación procedural, especialmente cuando los sistemas se vuelven más complejos. Este paradigma se basa en la idea de organizar el código en unidades cohesivas llamadas objetos, que combinan datos y comportamiento en una sola entidad.
      br
      br
      |#[b El paradigma POO ofrece varios beneficios fundamentales sobre otros enfoques de programación:]
    .p-5.mb-4(style="background-color:#EEF4F4 ").mb-4
      .row.justify-content-center.mb-5
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/5.svg', alt='')
        .col-lg-5
          ol.lista-ol.lista-ol--separador
            li.d-flex
              span.text-bold(style="background-color: #13DE61 ").p-1.px-2.text-white 1
              p.mb-0 Mayor modularidad y reutilización de código.
            li.d-flex
              span.text-bold(style="background-color: #13DE61 ").p-1.px-2.text-white 2
              p.mb-0 Mejor mantenibilidad y escalabilidad.
            li.d-flex
              span.text-bold(style="background-color: #13DE61 ").p-1.px-2.text-white 3
              p.mb-0 Representación más natural de conceptos del mundo real.
            li.d-flex
              span.text-bold(style="background-color: #13DE61 ").p-1.px-2.text-white 4
              p.mb-0 Mayor facilidad para el trabajo en equipo.
            li.d-flex
              span.text-bold(style="background-color: #13DE61 ").p-1.px-2.text-white 5
              p.mb-0 Mejor encapsulamiento y protección de datos.
    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Clases y objetos: conceptos básicos
    p.mb-4 Una clase es un plano o plantilla para crear objetos, definiendo sus propiedades y comportamientos. Un objeto, por otro lado, es una instancia específica de una clase. Esta relación entre clases y objetos es fundamental en POO, y se puede visualizar mediante la siguiente tabla comparativa:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Características principales entre clases y objetos en programación orientada a objetos
        .tabla-a.color-acento-botones.mb-5
          table
            caption Fuente: OIT, 2024.
            thead(style="background-color: #13DE61").border-0
              tr
                th Aspecto
                th Clase
                th Objeto
                
            tbody
              tr
                td Definición
                td Plantilla o plano
                td Instancia concreta
              tr
                td Naturaleza
                td Abstracta
                td Concreta
              tr
                td Memoria
                td No ocupa memoria para atributos
                td Ocupa memoria para sus valores
              tr
                td Creación
                td Se define una vez
                td Se pueden crear múltiples instancias
              tr
                td Ejemplo
                td Clase Auto (plano)
                td miAuto (instancia específica)
              tr
                td Tiempo de vida
                td Durante toda la ejecución
                td Desde su creación hasta su destrucción
              tr
                td Características
                td Define estructura y comportamiento
                td Contiene valores específicos
      .col-lg-4.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/6.svg', alt='')         
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Atributos, métodos y encapsulamiento
    p.mb-4 Los atributos son las características o propiedades que definen un objeto, mientras que los métodos son las acciones que puede realizar. El encapsulamiento es el principio que permite ocultar los detalles internos de implementación y exponer solo lo necesario al mundo exterior.Los atributos en POO pueden tener diferentes niveles de visibilidad:
    .row.justify-content-center.mb-5
      .col-lg-4.col-3.mb-lg-0.mb-3
        .tarjeta.hover.p-4.h-100.shadow
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='')
            .col-lg-9
              h4.fst-italic Private.
              p.mb-0 Solo accesible dentro de la clase.
      .col-lg-4.col-3.mb-lg-0.mb-3
        .tarjeta.hover.p-4.h-100.shadow
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
            .col-lg-9
              h4.fst-italic Protected.
              p.mb-0 Accesible en la clase y sus descendientes.
      .col-lg-4.col-3.mb-lg-0.mb-3
        .tarjeta.hover.p-4.h-100.shadow
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/13.svg', alt='')
            .col-lg-9
              h4.fst-italic Public. 
              p.mb-0 Accesible desde cualquier parte del programa.
    p.bm-3 Un ejemplo práctico de estos conceptos sería:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-codigo.overflow-hidden(style="background-color: #110628 ;border-radius: 10px")
          .tarjeta-codigo.p-3.mb-3(style="background-color: #3A1D71"): img.ms-4(src='@/assets/curso/temas/botones.svg', alt='' style="width: 94px ")
          .p-4
            code(style="color: white ").fst-italic class CuentaBancaria:
              br
              |def __init__(self, titular, saldo_inicial):
              br
              |self.__titular = titular          # Atributo privado
              br
              |self.__saldo = saldo_inicial      # Atributo privado
              br
              br
              |def depositar(self, monto):           # Método público
              br
              |if monto > 0:
              br
              |self.__saldo += monto
              br
              |return True
              br
              |return False
              br
              br
              |def obtener_saldo(self):              # Método público (getter)
              br
              |return self.__saldo
      .col-lg-6
        p.mb-4 El encapsulamiento protege la integridad de los datos al:
        .p-5(style="background-color: #E6F0FC")
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 Prevenir acceso directo a los atributos.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 Permitir validaciones en las modificaciones.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 Ocultar la implementación interna.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 Facilitar cambios futuros sin afectar el código cliente.
            .col-lg-6: img(src='@/assets/curso/temas/8.svg', alt='')
    p.mb-4 La combinación adecuada de atributos, métodos y encapsulamiento permite crear objetos que son:
    .row.justify-content-center.mb-5
      .col-lg-8
        .p-5(style="background-color: #E6FBEE").mb-4
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Cohesivos:] todas sus partes trabajan juntas para un propósito común.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Seguros:] los datos están protegidos de modificaciones no autorizadas.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Mantenibles:] los cambios internos no afectan al código que usa la clase.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Reutilizables:] pueden ser utilizados en diferentes contextos.
            .col-lg-4: img(src='@/assets/curso/temas/9.svg', alt='')
        .row.justify-content-center.mb-5
          .col-lg-6.mb-lg-0.mb-3
            .p-4(style="background-color: #E6F0FC ").h-100
              p.mb-0 La programación orientada a objetos establece una base sólida para el desarrollo de software moderno, permitiendo crear sistemas más organizados, mantenibles y escalables. En los siguientes capítulos, exploraremos principios más avanzados y técnicas de diseño que nos permitirán aprovechar todo el potencial de este paradigma.
          .col-lg-6.mb-lg-0.mb-3
            .p-4(style="background-color: #E6F0FC ").h-100
              p.mb-0 La comprensión profunda de estos conceptos fundamentales es esencial para cualquier desarrollador que trabaje con POO, ya que constituyen la base sobre la cual se construyen aplicaciones más complejas y robustas. El dominio de estos conceptos permite tomar mejores decisiones de diseño y crear código más limpio y mantenible.
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/9.png', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
