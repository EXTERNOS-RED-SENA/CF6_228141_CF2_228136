<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Preparación avanzada de datos</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema4/1.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La preparación avanzada de datos representa la culminación del
            proceso de transformación de datos crudos en información lista para
            alimentar modelos de inteligencia artificial. Este proceso va más
            allá de la limpieza de datos; implica utilizar técnicas sofisticadas
            de detección de errores, selección de variables y validación que
            aseguran la calidad y relevancia de los datos para su uso en
            análisis avanzados. La complejidad de esta etapa frecuentemente
            determina el éxito o fracaso de los proyectos de IA.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_1">4.1 Detección y tratamiento de errores</h2>
      </div>
      <p data-aos="fade-up">
        La detección y tratamiento de errores en datos constituye una fase
        crítica que requiere una combinación de automatización inteligente y
        criterio experto. Los errores en datos pueden manifestarse de múltiples
        formas, desde inconsistencias obvias hasta anomalías sutiles que solo se
        revelan a través de análisis detallados. El proceso de detección debe
        ser sistemático y exhaustivo, considerando tanto la calidad individual
        de cada variable como la coherencia global del conjunto de datos.
      </p>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/2.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-4" style="background-color:#E7FFE7;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema4/3.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  Los errores más comunes incluyen valores fuera de rango,
                  inconsistencias lógicas entre variables relacionadas, y
                  patrones temporales imposibles. Sin embargo, la verdadera
                  complejidad radica en identificar errores que son técnicamente
                  válidos pero contextualmente incorrectos. Por ejemplo, un
                  valor de temperatura podría estar dentro del rango permitido,
                  pero ser improbable dado el contexto geográfico y temporal.
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 mb-0">
            El tratamiento de errores una vez detectados requiere un enfoque
            matizado. La simple eliminación de registros problemáticos puede
            introducir sesgos en los datos, mientras que la corrección
            automática puede crear artificios que afecten análisis posteriores.
            Es fundamental documentar todas las decisiones de tratamiento de
            errores y mantener la trazabilidad de las modificaciones realizadas.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_2">4.2 Identificación de variables relevantes</h2>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <div class="p-4" style="background-color:#F7EEFE;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema4/4.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  La identificación y selección de variables relevantes
                  constituye uno de los desafíos más significativos en la
                  preparación avanzada de datos. Como se ilustra en la
                  infografía anterior, este proceso sigue una secuencia
                  metodológica que combina análisis estadístico, técnicas de
                  selección automatizada y validación experta. Cada fase del
                  proceso contribuye a la identificación de las variables que
                  realmente aportan valor al modelo final.
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 mb-0">
            La identificación de variables relevantes sigue un proceso
            estructurado que combina análisis estadístico con conocimiento del
            dominio. La siguiente figura ilustra las cuatro fases principales de
            este proceso y sus componentes clave.
          </p>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/5.png" /></figure>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Figura 2.</h5>
        <span>Proceso de selección de variables</span>
      </div>
      <div
        class="p-4"
        style="background-color:#ECF2FF;"
        data-aos="fade-up"
        data-aos-duration="850"
      >
        <div class="col-xl-11 m-auto">
          <div class="row">
            <div class="col-lg mb-4 mb-lg-0">
              <figure>
                <img
                  src="@/assets/curso/tema4/6.svg"
                  alt="La Figura 1 se denomina «Comparación de arquitecturas de bodegas de datos» y presenta dos ejemplos para el sector de ventas, donde el esquema estrella tiene solo dimensiones principales y el esquema copo de nieve tiene dimensiones primarias y secundarias."
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <figcaption class="fw-normal mt-1">
        <strong>Fuente.</strong> OIT, 2024.
      </figcaption>
      <div class="row mt-5">
        <div class="col-lg" data-aos="fade-right">
          <div class="p-4" style="background-color:#D9F2FE;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema4/7.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  El proceso comienza con un análisis inicial exhaustivo que
                  examina las características estadísticas de cada variable, sus
                  relaciones con otras variables y su completitud. Esta fase
                  establece la base para decisiones informadas sobre qué
                  variables merecen consideración adicional. La fase de
                  selección aplica técnicas avanzadas como análisis de
                  importancia de características y métodos de regularización
                  para identificar las variables más prometedoras.
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 mb-0">
            La evaluación de impacto y la validación final son estratégicas para
            asegurar que las variables seleccionadas no solo son
            estadísticamente significativas, sino también relevantes desde una
            perspectiva del negocio. Este enfoque holístico ayuda a evitar la
            trampa común de seleccionar variables basándose únicamente en
            criterios estadísticos.
          </p>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/8.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_3">4.3 Transformación y validación de datos</h2>
      </div>
      <p data-aos="fade-up">
        La transformación y validación de datos representa la última línea de
        defensa antes de que los datos sean utilizados en modelos de IA. Esta
        fase combina técnicas de transformación sofisticadas con procesos
        rigurosos de validación para asegurar que los datos cumplan con todos
        los requisitos necesarios para su uso en modelado.
      </p>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema4/9.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-4" style="background-color:#E7FFE7;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema4/10.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  Las transformaciones pueden incluir codificación de variables
                  categóricas, normalización de variables numéricas, y creación
                  de características derivadas. Cada transformación debe ser
                  cuidadosamente documentada y validada para asegurar que
                  preserve la integridad de la información mientras la hace más
                  adecuada para el análisis automatizado.
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 mb-0">
            La validación debe ser un proceso continuo que ocurre en múltiples
            niveles. A nivel técnico, se verifica que las transformaciones
            mantengan las relaciones importantes entre variables y no
            introduzcan sesgos indeseados. A nivel de negocio, se confirma que
            los datos transformados sigan representando fielmente la realidad
            del dominio.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-lg" data-aos="fade-right">
          <p>
            El proceso de validación también debe incluir pruebas de robustez
            para asegurar que las transformaciones sean estables y reproducibles
            en diferentes condiciones. Esto es particularmente importante en
            sistemas de producción donde los datos se procesan de manera
            continua.
          </p>
          <div class="p-4 mt-4" style="background-color:#ECF2FF;">
            <p class="mb-0">
              El éxito en la preparación avanzada de datos requiere un balance
              delicado entre automatización y supervisión humana. Mientras que
              las herramientas automatizadas pueden manejar eficientemente
              grandes volúmenes de datos, el juicio experto sigue siendo
              indispensable para tomar decisiones estratégicas y validar
              resultados críticos.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema4/11.png" /></figure>
        </div>
      </div>
    </div>
  </div>
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
