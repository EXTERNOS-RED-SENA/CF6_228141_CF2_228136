<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Principios de diseño orientado a objetos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/10.png', alt='')
      .col-lg-8
        .p-5(style="background-color: #E6F0FC ")
          p.mb-0 El diseño orientado a objetos representa una forma de pensar sobre el software que refleja nuestra comprensión natural del mundo. En este capítulo, exploraremos los principios fundamentales que nos permiten crear sistemas que no solo funcionan, sino que son flexibles, mantenibles y escalables a lo largo del tiempo.
    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Herencia y polimorfismo
    div(style="background-color: #EDE9EC")
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.mb-lg-0.mb-3
          .p-5 
            p.mb-0 La herencia es un concepto fundamental que refleja las relaciones naturales entre entidades. Pensemos en una biblioteca moderna: tiene diferentes tipos de recursos como libros, revistas, materiales audiovisuales y recursos digitales. Aunque cada uno es único, todos comparten características comunes: un identificador, un título, un sistema de préstamo y un estado de disponibilidad.
        .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/11.png', alt='')
    p.mb-4 En este contexto, podríamos tener un recurso genérico de biblioteca del cual heredan tipos más específicos. Por ejemplo:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.hover.shadow.p-5.h-100
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/14.svg', alt='')
          p.mb-0.text-center Un libro hereda todas las características básicas de un recurso, pero añade propiedades como ISBN, número de páginas y ubicación física.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.hover.shadow.p-5.h-100
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/15.svg', alt='')
          p.mb-0.text-center Un recurso digital hereda las características básicas, pero incluye URL, formato de archivo y requisitos de #[em software].
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.hover.shadow.p-5.h-100
          .row.justify-content-center.mb-3
            .col-5: img(src='@/assets/curso/temas/16.svg', alt='')
          p.mb-0.text-center Una revista hereda lo básico y agrega volumen, número y periodicidad.
    p.mb-5(data-aos='fade-right') El polimorfismo nos permite tratar todos estos recursos de manera uniforme cuando es necesario (por ejemplo, para prestarlos o devolverlos), pero también de forma específica cuando requerimos funcionalidades particulares. Un ejemplo práctico sería el sistema de notificaciones de vencimiento:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-7.mb-lg-0.mb-3: img.p-5(src='@/assets/curso/temas/17.svg', alt='')
      .col-lg-6
        .tarjeta-codigo.overflow-hidden(style="background-color: #110628 ;border-radius: 10px")
          .tarjeta-codigo.p-3.mb-3(style="background-color: #3A1D71"): img.ms-4(src='@/assets/curso/temas/botones.svg', alt='' style="width: 94px ")
          .p-4
            code(style="color: white ").fst-italic class RecursoBiblioteca:
              br
              |def notificar_vencimiento(self):
              br
              |# Comportamiento básico
              br
              |pass
              br
              br
              |class LibroFisico(RecursoBiblioteca):
              br
              |def notificar_vencimiento(self):
              br
              |# Incluye ubicación física para devolución
              br
              |pass
              br
              br
              |class RecursoDigital(RecursoBiblioteca):
              br
              |def notificar_vencimiento(self):
              br
              |# Incluye enlace para renovación en línea
              br
              |pass
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Composición y agregación
    p.mb-4 La composición y la agregación representan diferentes tipos de relaciones entre objetos. Para entender mejor estos conceptos, analicemos algunos ejemplos del mundo real:
    .mn.bg-slyder.p-5.mb-5
      .tarjeta.p-5.bg-white
        SlyderA(tipo='b')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Composición (relación fuerte "es parte de")
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Un automóvil y su motor:] el motor es una parte integral del automóvil y no tiene sentido por sí solo.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Una casa y sus habitaciones:] las habitaciones no existen independientemente de la casa.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Un #[em smartphone] y su batería integrada:] la batería es un componente esencial que forma parte del diseño del dispositivo.
            .col-lg-6.col-7
              figure
                img(src='@/assets/curso/temas/18.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-lg-0
              h4 Agregación (relación débil "tiene un")
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Una universidad y sus estudiantes:] Los estudiantes pueden existir independientemente de la universidad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Una biblioteca y sus libros:] Los libros pueden transferirse a otras bibliotecas sin perder su identidad.
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 #[b Un equipo deportivo y sus jugadores:] Los jugadores pueden cambiar de equipo manteniendo su identidad individual.
            .col-lg-6.col-7
              figure
                img(src='@/assets/curso/temas/18.png', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      span Relaciones comunes entre clases u objetos en la POO
    img(src='@/assets/curso/temas/20.png', alt='La Figura 1 se denomina «Relaciones comunes entre clases u objetos en la POO». Ilustra tres tipos principales de relaciones entre objetos o clases en POO: herencia, composición y agregación, cada relación se presenta con un ejemplo y una explicación.').mb-3
    figcaption Fuente: OIT, 2024.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Principios SOLID en POO
    p.mb-4 Los principios SOLID son fundamentales para crear sistemas robustos y mantenibles. Veamos cada uno con ejemplos prácticos del mundo real:
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/21.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Principio de Responsabilidad Única (S)")
            p.mb-4  Imagine un sistema de gestión de restaurante. En lugar de tener una clase gigante "Restaurante" que maneje todo, podríamos tener:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 GestorPedidos: maneja la toma y seguimiento de pedidos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 GestorInventario: controla el stock de ingredientes.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 GestorPersonal: administra horarios y turnos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 GestorFacturación: maneja pagos y cuentas.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 GestorMesas: administra reservas y disposición.
            p.mb-0 Cada clase tiene una única responsabilidad y una sola razón para cambiar. Por ejemplo, si cambia el sistema de reservas, solo necesitamos modificar GestorMesas.
          div(titulo="Principio Abierto/Cerrado (O)")
            p.mb-4 Considere un sistema de cálculo de seguros de vehículos. En lugar de modificar el código existente cada vez que se añade un nuevo tipo de vehículo, podemos tener:
            ul.lista-ul--color
                li.d-flex
                  i.fas.fa-check-circle(style="color: #1169E3")
                  p.mb-0 class CalculadoraSeguro:
                    br
                    |def calcular_prima(self, vehiculo):
                    br
                    |return vehiculo.calcular_factor_riesgo() * self.prima_base
            p.mb-0 Así, podemos añadir nuevos tipos de vehículos (motos, camiones, vehículos eléctricos) sin modificar la lógica existente.
          div(titulo="Principio de Sustitución de Liskov (L)")
            p.mb-4 En una aplicación de banca en línea, cualquier tipo de cuenta bancaria (ahorro, corriente, plazo fijo) debe poder usarse donde se espera una cuenta genérica. Por ejemplo, todas deben poder:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Mostrar saldo.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Recibir depósitos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Procesar retiros (con sus reglas específicas).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Generar estados de cuenta.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Principio de Segregación de Interfaces (I)")
            p.mb-4 En un sistema de dispositivos IoT (Internet de las Cosas), diferentes dispositivos tienen diferentes capacidades. En lugar de una interfaz única grande, podríamos tener interfaces específicas:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 DispositivoConectado (conexión básica).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 DispositivoControlable (puede ser encendido/apagado).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 DispositivoMonitoreable (envía datos de estado).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 DispositivoProgramable (puede recibir configuraciones).
            p.mb-0 Un termostato inteligente podría implementar todas estas interfaces, mientras que un sensor de temperatura simple solo implementaría DispositivoConectado y DispositivoMonitoreable.
          div(titulo="Principio de Inversión de Dependencias (D)")
            p.mb-4 En un sistema de comercio electrónico, el procesamiento de pagos debe ser flexible para admitir diferentes proveedores. En lugar de que el sistema dependa directamente de PayPal o Stripe, podría depender de una interfaz de procesamiento de pagos:
            .tarjeta-codigo.overflow-hidden.mb-4(style="background-color: #110628 ;border-radius: 10px")
              .tarjeta-codigo.p-3.mb-3(style="background-color: #3A1D71"): img.ms-4(src='@/assets/curso/temas/botones.svg', alt='' style="width: 94px ")
              .p-4
                code(style="color: white ").fst-italic class ProcesadorPagos:
                  br
                  |def __init__(self, proveedor_pago):
                  br
                  |self.proveedor = proveedor_pago
                  br
                  br
                  |def procesar(self, monto, datos):
                  br
                  |return self.proveedor.realizar_pago(monto, datos)
            p.mb-4 La aplicación práctica de estos principios lleva a sistemas que son:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Más fáciles de entender y mantener.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Más adaptables a cambios en los requisitos.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Más fáciles de probar y depurar.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Más reutilizables y modulares.
            p.mb-4 Por ejemplo, una aplicación de #[em delivery] de comida que sigue estos principios podría fácilmente:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Añadir nuevos métodos de pago sin afectar el sistema existente.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Incorporar nuevos tipos de entregas (#[em drone], bicicleta, moto).
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Modificar el sistema de calificaciones sin afectar otras funcionalidades.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Agregar nuevos proveedores de mapas y rutas
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Implementar diferentes estrategias de precios y promociones
      .col-lg-4.col-7: img(src='@/assets/curso/temas/23.png', alt='')
    p.mb-4 La clave está en identificar las abstracciones correctas y las relaciones naturales entre los objetos del sistema. En el próximo capítulo, veremos cómo estos conceptos se traducen en diagramas UML y cómo podemos utilizar herramientas CASE para diseñar sistemas orientados a objetos efectivos.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Del diseño a la implementación: consideraciones prácticas
    p.mb-4 La aplicación de estos principios en el mundo real requiere un balance entre la teoría y la practicidad. Veamos algunos escenarios comunes y cómo abordarlos:
    .row.justify-content-center.mb-5
      .col-lg-4.d-none.d-lg-block: img(src='@/assets/curso/temas/22.png', alt='')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Escenario 1: Sistema de gestión hospitalaria")
            p.mb-4 Imagine un sistema de gestión de restaurante. En lugar de tener una clase gigante "Restaurante" que maneje todo, podríamos tener:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Personal Médico (clase base)
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Médicos especialistas
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Enfermeros
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Técnicos de laboratorio
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Farmacéuticos
            p.mb-4 Cada tipo de personal comparte características básicas (nombre, ID, horarios) pero tiene responsabilidades específicas. Por ejemplo, todos pueden "atender pacientes", pero la implementación específica varía según el rol:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un médico realiza diagnósticos y prescribe tratamientos
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un enfermero administra medicamentos y monitorea signos vitales
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un técnico de laboratorio realiza pruebas y análisis
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un farmacéutico dispensa medicamentos y verifica interacciones
          div(titulo="Escenario 2: plataforma de <em>Streaming</em>")
            p.mb-4 Una plataforma de streaming multimedia demuestra perfectamente la composición y agregación:
            .ms-4: p.fw-bold.mb-3 Composición:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un perfil de usuario y sus preferencias
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Una lista de reproducción y sus elementos
              li.d-flex 
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un sistema de recomendaciones y sus algoritmos
            .ms-4: p.fw-bold.mb-3 Agregación:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Una biblioteca y su contenido multimedia
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un usuario y sus dispositivos registrados
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Un grupo familiar y sus miembros


          div(titulo="Aplicando SOLID en situaciones reales")
            p.mb-4 Ejemplo: Sistema de Notificaciones
              br
              br
              | Un sistema de notificaciones bien diseñado podría manejar múltiples canales de comunicación:
              br
              br
              | Situación inicial:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Los usuarios reciben notificaciones solo por email
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Evolución del sistema:
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Se añade notificación por SMS.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Se integra notificación #[em push] para móviles.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Se incorpora mensajería instantánea.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0  Se añade soporte para notificaciones en redes sociales.
            p.mb-0 Un diseño que sigue los principios SOLID permite esta evolución sin modificar el código existente, simplemente añadiendo nuevas implementaciones de la interfaz de notificación.
          div(titulo="Desafíos comunes y soluciones")
            h5 Herencia profunda:
            p.mb-4 Un sistema de notificaciones bien diseñado podría manejar múltiples canales de comunicación:

            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Problema: Jerarquías de clases demasiado profundas que son difíciles de mantener.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Solución: Favorecer la composición sobre la herencia cuando sea posible.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: En lugar de crear una jerarquía profunda de tipos de vehículos, usar composición con características como tipo de motor, sistema de transmisión, etc.
            h5 Acoplamiento excesivo:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Problema: clases que dependen demasiado de los detalles de implementación de otras.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Solución: usar interfaces y abstracciones.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: un sistema de pagos que puede cambiar fácilmente entre diferentes proveedores de servicios.
            h5 Clases God:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Problema: Clases que intentan hacer demasiado. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Solución: Aplicar el principio de responsabilidad única. 
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: Separar una clase "Pedido" monolítica en componentes más específicos como "GestorPedido", "CalculadorPrecio", "ValidadorInventario".
            h5 Patrones de implementación efectivos
            p.mb-3 Patrón #[em Observer] para notificaciones:
              br
              |Sistema de Biblioteca:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Cuando un libro se devuelve:
                  br
                  |- Notifica a usuarios en lista de espera.
                  br
                  |- Actualiza el inventario.
                  br
                  |- Registra la transacción.
            p.mb-3 Patrón #[em Strategy] para reglas de negocio variables:
            p.mb-0 Sistema de Descuentos:
              br
              | - Descuentos por temporada.
              br
              |- Descuentos por volumen.
              br
              |- Descuentos por fidelidad.
              br
              |- Promociones especiales.
          div(titulo="Mejores prácticas en el diseño orientado a objetos")
            h5 Mantener la cohesión alta:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Cada clase debe tener un propósito claro y bien definido.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Los métodos dentro de una clase deben estar relacionados.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: Una clase "Factura" que maneja solo aspectos relacionados con la facturación.
            h5 Mantener el acoplamiento bajo:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Minimizar las dependencias entre clases.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Usar interfaces para comunicación entre componentes.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: Un sistema de reportes que puede funcionar con diferentes fuentes de datos.
            h5 Diseñar para el cambio:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Identificar las partes del sistema que son más propensas a cambiar.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Encapsular esas partes detrás de interfaces estables.
              li.d-flex
                i.fas.fa-check-circle(style="color: #1169E3")
                p.mb-0 Ejemplo: Un sistema de autenticación que puede adaptarse a diferentes proveedores de identidad.
            p.mb-0 La aplicación efectiva de estos principios y patrones requiere práctica y experiencia. Es importante recordar que el objetivo final es crear software que no solo funcione correctamente, sino que también sea fácil de mantener, modificar y extender a lo largo del tiempo. En el próximo capítulo, exploraremos cómo estos conceptos se traducen en diagramas UML y cómo podemos utilizar herramientas CASE para visualizar y documentar nuestros diseños orientados a objetos.
</template>

<script>
export default {
  name: 'Tema2',
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
