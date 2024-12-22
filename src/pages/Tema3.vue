<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelado y diseño UML
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/24.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #DED5DB ")
          p.mb-0 El Lenguaje Unificado de Modelado (UML) es una herramienta fundamental para visualizar y comunicar el diseño de sistemas orientados a objetos. En este capítulo, exploraremos cómo representar nuestras ideas y diseños de manera clara y estandarizada, facilitando la comunicación entre todos los miembros del equipo de desarrollo.
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Diagramas de clases UML
    p.mb-4 Los diagramas de clases son quizás la herramienta más importante en el modelado orientado a objetos. Imaginemos que estamos diseñando un sistema para una biblioteca digital moderna. En lugar de comenzar a programar inmediatamente, podemos visualizar la estructura del sistema utilizando UML.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2.
      span Diagrama de clases de una biblioteca digital
    img(src='@/assets/curso/temas/25.svg', alt='La Figura 2 se denomina «Diagrama de clases de una biblioteca digital». Ilustra un Diagrama de clases UML que muestra la relación entre las clases Usuario, RecursoDigital y Préstamo en una biblioteca digital. Las clases están conectadas por líneas que indican relaciones de muchos a uno (representadas con asteriscos y unos), mostrando cómo un préstamo conecta a un usuario con un recurso digital.').mb-3
    figcaption.mb-4 Fuente: OIT, 2024.
    p.mb-4 Aunque el diagrama de clases es el más utilizado en POO, UML ofrece una variedad de diagramas para modelar diferentes aspectos de un sistema. Cada tipo de diagrama tiene un propósito específico y nos ayuda a visualizar el sistema desde distintas perspectivas.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2.
      span Diagramas UML y sus aplicaciones en el modelado de #[em software]
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: OIT, 2024.
        thead(style="background-color: #13DE61").border-0
          tr
            th Tipo de diagrama
            th Descripción
            th Uso principal
            th Ejemplo de aplicación
            
        tbody
          tr
            td Clases
            td Muestra la estructura estática del sistema, incluyendo clases, atributos, métodos y relaciones
            td Modelado estructural y arquitectónico
            td Diseñar la estructura de una aplicación de comercio electrónico
          tr
            td Secuencia
            td Representa interacciones entre objetos en orden temporal
            td Modelado de flujos y comunicación entre objetos
            td Visualizar el proceso de #[em checkout] en una tienda en línea
          tr
            td Casos de Uso
            td Describe las interacciones entre el sistema y sus actores externos
            td Captura de requisitos y funcionalidades
            td Definir las operaciones que puede realizar un cajero automático
          tr
            td Estado
            td Muestra los diferentes estados de un objeto y sus transiciones
            td Modelado de comportamiento y flujos de estado
            td Representar los estados de un pedido (creado, pagado, enviado, entregado)
          tr
            td Actividad
            td Ilustra el flujo de trabajo o proceso paso a paso
            td Modelado de procesos de negocio
            td Describir el proceso de matriculación en una universidad
          tr
            td Componentes
            td Muestra la organización y dependencias entre componentes del sistema
            td Arquitectura de alto nivel
            td Visualizar los módulos principales de un sistema ERP
          tr
            td Despliegue
            td Representa la arquitectura física del sistema
            td Planificación de infraestructura
            td Mostrar la distribución de servidores y servicios en la nube
          tr
            td Objetos
            td Muestra una instantánea de las instancias del sistema en un momento dado
            td Modelado de ejemplos concretos
            td Ilustrar un escenario específico de usuarios y productos
          tr
            td Paquetes
            td Organiza elementos del modelo en grupos relacionados
            td Gestión de componentes y módulos
            td Estructurar los diferentes módulos de una aplicación empresarial
          tr
            td Temporización
            td Muestra cambios en el estado o valor de uno o más elementos a lo largo del tiempo
            td Modelado de sistemas en tiempo real
            td Representar el comportamiento de un sistema de control industrial
    p.mb-3 Esta diversidad de diagramas nos permite abordar el modelado desde múltiples perspectivas, asegurando una comprensión completa del sistema en desarrollo. La clave está en seleccionar el tipo de diagrama más adecuado para comunicar cada aspecto específico del sistema que estamos diseñando.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Relaciones entre clases
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.col-7.mb-lg-0.mb-3
        .p-5(style="background-color: #DED5DB ")
          p.mb-0 Las relaciones entre clases son fundamentales en el diseño orientado a objetos. En nuestro ejemplo de la biblioteca digital, podemos ver cómo un usuario puede tener múltiples préstamos activos, y cada recurso digital puede estar prestado a varios usuarios a lo largo del tiempo. Estas relaciones se representan mediante líneas y símbolos específicos en UML, donde la cardinalidad (1, , 1., etc.) indica cuántas instancias de cada clase pueden participar en la relación.
      .col-lg-4: img(src='@/assets/curso/temas/26.png', alt='')
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Relaciones entre clases
    p.mb-4 Las herramientas CASE (#[em Computer-Aided Software Engineering]) han evolucionado significativamente, permitiéndonos crear y mantener diagramas UML de manera eficiente. Herramientas modernas como Enterprise Architect, StarUML o Draw.io no solo nos permiten crear diagramas visualmente atractivos, sino que también pueden generar código base a partir de nuestros diseños y mantener la documentación sincronizada con el código.Cuando trabajamos en equipo, estas herramientas son particularmente valiosas porque:
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3.col-7: img(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-6
        .p-4(style="background-color: #E6F0FC").mb-4
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Mantienen una representación consistente del sistema
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Facilitan la comunicación entre desarrolladores
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Ayudan a identificar problemas de diseño tempranamente
            li.d-flex
              i.fas.fa-check-circle(style="color: #1169E3")
              p.mb-0 Sirven como documentación viva del proyecto
        p.mb-0 El modelado UML no debe verse como un ejercicio académico, sino como una herramienta práctica que nos ayuda a visualizar y comunicar nuestras ideas antes de comenzar a escribir código. Un buen modelo UML puede prevenir malentendidos costosos y guiar el desarrollo de manera efectiva.
    p.mb-5 En el próximo capítulo, exploraremos cómo estos modelos se traducen en implementaciones concretas, y cómo los patrones de diseño nos ayudan a resolver problemas comunes de manera elegante y probada.






</template>

<script>
export default {
  name: 'Tema3',
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
