<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Análisis exploratorio de datos</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema3/1.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            El análisis exploratorio de datos (EDA, por sus siglas en inglés)
            constituye una etapa fundamental en el proceso de comprensión y
            preparación de datos para modelos de inteligencia artificial. Esta
            fase inicial de investigación ayuda a los analistas a comprender las
            características fundamentales de los conjuntos de datos, identificar
            patrones significativos y detectar anomalías que podrían afectar
            análisis posteriores. A diferencia de los métodos estadísticos
            confirmatorios, el EDA adopta un enfoque más flexible y orientado al
            descubrimiento, permitiendo que los datos revelen sus secretos de
            manera orgánica.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_3_1">3.1 Estadística descriptiva e inferencial</h2>
      </div>
      <p data-aos="fade-up">
        La estadística descriptiva proporciona el conjunto de herramientas
        fundamental para comenzar cualquier análisis exploratorio. A través de
        medidas de tendencia central, dispersión y forma, los analistas pueden
        obtener una primera aproximación a la naturaleza de sus datos. Sin
        embargo, el verdadero poder de la estadística descriptiva radica en su
        capacidad para revelar aspectos sutiles de los datos que podrían pasar
        desapercibidos en un examen superficial.
      </p>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema3/2.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-4" style="background-color:#ECF2FF;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema3/3.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  Las medidas de tendencia central, como la media, mediana y
                  moda, ofrecen diferentes perspectivas sobre el centro de los
                  datos. Por ejemplo, en distribuciones altamente sesgadas, la
                  diferencia significativa entre la media y la mediana puede
                  revelar la presencia de valores extremos que requieren
                  atención especial. La dispersión de los datos, medida a través
                  de la varianza, desviación estándar y rango intercuartílico,
                  proporciona información clave sobre la variabilidad y la
                  confiabilidad de las mediciones.
                </p>
              </div>
            </div>
          </div>
          <p class="mt-4 mb-0">
            Por su parte, la estadística inferencial permite extender las
            conclusiones obtenidas de una muestra a la población general. Este
            proceso requiere una comprensión profunda de conceptos como
            intervalos de confianza, pruebas de hipótesis y significancia
            estadística. En el contexto del análisis exploratorio, las técnicas
            inferenciales ayudan a validar patrones observados y a determinar si
            las relaciones descubiertas son estadísticamente significativas.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_3_2">3.2 Métodos de análisis univariable y multivariable</h2>
      </div>
      <div class="row mt-4">
        <div class="col-lg" data-aos="fade-right">
          <p class="mb-4">
            El análisis univariable representa el primer paso en la exploración
            detallada de cada variable individual dentro de un conjunto de
            datos. Este análisis fundamental examina la distribución,
            centralidad, dispersión y forma de cada variable por separado,
            proporcionando una base sólida para análisis más complejos. Los
            principales aspectos que se deben considerar en el análisis
            univariable incluyen:
          </p>
          <div class="p-4 mt-4 mb-4" style="background-color:#ECF2FF;">
            <ol class="lista-ol--cuadro mb-0">
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">1</span>
                </div>
                <span
                  >Distribución de frecuencias y visualizaciones básicas.</span
                >
              </li>
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">2</span>
                </div>
                <span>Detección de valores atípicos y anomalías.</span>
              </li>
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">3</span>
                </div>
                <span>Análisis de valores faltantes.</span>
              </li>
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">4</span>
                </div>
                <span>Evaluación de la normalidad.</span>
              </li>
              <li class="d-flex mb-0">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">5</span>
                </div>
                <span
                  >Identificación de patrones temporales o secuenciales</span
                >
              </li>
            </ol>
          </div>
          <p class="mb-0">
            El análisis multivariable, por su parte, examina las relaciones
            entre múltiples variables simultáneamente. Este enfoque es
            particularmente relevante en el contexto de la inteligencia
            artificial, donde los modelos frecuentemente deben procesar
            numerosas variables interrelacionadas.
            <strong
              >La complejidad de estas relaciones puede apreciarse mejor a
              través de la siguiente tabla comparativa:</strong
            >
          </p>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema3/4.png" /></figure>
        </div>
      </div>
      <div
        class="titulo-sexto color-acento-contenido mt-4"
        data-aos="fade-down"
      >
        <h5>Tabla 2.</h5>
        <span
          >Tipos de análisis: técnicas, aplicaciones y consideraciones
          clave</span
        >
      </div>
      <div class="tabla-a color-acento-contenido" data-aos="fade-up">
        <table>
          <caption class="fw-normal">
            <strong>Fuente.</strong>
            OIT, 2024.
          </caption>
          <thead>
            <tr
              class="text-white text-center"
              style="background-color:#03A9F4;"
            >
              <th>Tipo de Análisis.</th>
              <th>Técnicas Principales.</th>
              <th>Aplicaciones.</th>
              <th>Consideraciones clave.</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="bg-white">
              <td>Bivariado.</td>
              <td>Correlación de Pearson, Chi-cuadrado.</td>
              <td>Relaciones entre pares de variables.</td>
              <td>Asunciones de linealidad.</td>
            </tr>
            <tr class="bg-white">
              <td>Regresión múltiple.</td>
              <td>Mínimos cuadrados, Ridge, Lasso.</td>
              <td>Predicción de variables continuas.</td>
              <td>Multicolinealidad.</td>
            </tr>
            <tr class="bg-white">
              <td>Análisis factorial.</td>
              <td>PCA, Factor Analysis.</td>
              <td>Reducción de dimensionalidad.</td>
              <td>Interpretabilidad de factores.</td>
            </tr>
            <tr class="bg-white">
              <td>Análisis de clústeres.</td>
              <td>K-means, jerárquico.</td>
              <td>Segmentación de datos.</td>
              <td>Selección de número de grupos.</td>
            </tr>
            <tr class="bg-white">
              <td>Análisis discriminante.</td>
              <td>LDA, QDA.</td>
              <td>Clasificación supervisada.</td>
              <td>Separabilidad de clases.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_3_3">3.3 Técnicas de visualización</h2>
      </div>
      <p data-aos="fade-up">
        La visualización de datos representa una herramienta indispensable en el
        análisis exploratorio, transformando números abstractos en
        representaciones visuales intuitivas que facilitan la identificación de
        patrones, tendencias y anomalías. Las técnicas de visualización modernas
        van más allá de los gráficos básicos, incorporando elementos
        interactivos y múltiples dimensiones de información en una sola
        representación.
      </p>
      <div class="row mt-4">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema3/5.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <div class="p-4" style="background-color:#F7EEFE;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema3/6.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  La selección de la técnica de visualización adecuada depende
                  tanto de la naturaleza de los datos como del objetivo del
                  análisis. Por ejemplo, los diagramas de dispersión resultan
                  invaluables para examinar relaciones entre variables
                  continuas, mientras que los gráficos de calor pueden revelar
                  patrones complejos en matrices de correlación. Los gráficos de
                  caja (<b>box plots</b>) combinan múltiples aspectos de la
                  distribución de datos, mostrando simultáneamente la mediana,
                  cuartiles y valores atípicos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-4 mb-0">
          En el contexto del <b>big data</b> y la inteligencia artificial, las
          técnicas de visualización han evolucionado para manejar volúmenes
          masivos de datos. Las visualizaciones interactivas permiten a los
          analistas explorar diferentes niveles de detalle, mientras que las
          técnicas de reducción de dimensionalidad como t-SNE y UMAP facilitan
          la visualización de datos altamente dimensionales en espacios
          bidimensionales o tridimensionales.
        </p>
      </div>
      <div class="row mt-4">
        <div class="col-lg" data-aos="fade-right">
          <p>
            La efectividad de una visualización no solo depende de su precisión
            técnica, sino también de su capacidad para comunicar información de
            manera clara y convincente. Los principios de diseño visual, como el
            uso apropiado del color, la gestión del espacio y la jerarquía
            visual, desempeñan un papel destacado en la creación de
            visualizaciones que sean tanto informativas como accesibles
          </p>
          <p class="mb-0 fw-bold">
            El análisis exploratorio de datos, con sus múltiples facetas y
            técnicas, es una fase crítica en cualquier proyecto de análisis de
            datos o inteligencia artificial. La combinación de estadística
            rigurosa, análisis multivariable y visualización efectiva
            proporciona los cimientos necesarios para construcción de modelos
            robustos y confiables.
          </p>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema3/7.png" /></figure>
        </div>
      </div>
    </div>
  </div>
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
