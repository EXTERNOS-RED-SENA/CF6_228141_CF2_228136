<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Inteligencia de negocios</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema2/1.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La inteligencia de negocios (BI) representa la convergencia entre la
            gestión de datos empresariales y la toma de decisiones estratégicas.
            En el contexto de la inteligencia artificial, la BI se ha convertido
            en un componente elemental que proporciona la infraestructura y los
            métodos necesarios para transformar datos crudos en información
            accionable. Este capítulo explora las arquitecturas, metodologías y
            mejores prácticas que permiten a las organizaciones aprovechar al
            máximo sus datos para obtener ventajas competitivas.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_1">2.1 Bodegas de datos</h2>
      </div>
      <div class="cont_1_2">
        <p data-aos="fade-up">
          Las bodegas de datos (<em>Data Warehouses</em>) son el fundamento de
          cualquier estrategia moderna de inteligencia de negocios. A diferencia
          de las bases de datos operacionales tradicionales, las bodegas de
          datos están diseñadas específicamente para el análisis y el soporte a
          la toma de decisiones.
        </p>
        <p class="fw-bold" data-aos="fade-right">
          <b>Sus características principales incluyen:</b>
        </p>
        <div class="row mt-4 justify-content-center">
          <div
            class="col-lg col-md-9 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/2.svg" />
              </figure>
              <p class="fw-bold mb-3">Orientación a temas</p>
              <p>
                Los datos se organizan por áreas temáticas principales del
                negocio.
              </p>
            </div>
          </div>
          <div
            class="col-lg col-md-9 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/3.svg" />
              </figure>
              <p class="fw-bold mb-3">Integración</p>
              <p>
                Datos provenientes de múltiples fuentes se unifican bajo un
                esquema coherente.
              </p>
            </div>
          </div>
          <div
            class="col-lg col-md-9 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/4.svg" />
              </figure>
              <p class="fw-bold mb-3">No volatilidad</p>
              <p>Los datos históricos se preservan para análisis temporales.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-9 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/5.svg" />
              </figure>
              <p class="fw-bold mb-3">Variación temporal</p>
              <p>Se mantiene la dimensión temporal de todos los datos</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="p-4 p-md-3 mt-4"
        style="background-color:#E7FFE7;"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <div class="row">
          <div class="col-md-auto d-none d-md-block" style="place-self:center;">
            <figure><img src="@/assets/curso/tema2/6.svg" /></figure>
          </div>
          <div class="col-md" style="place-self:center;">
            <p class="mb-0">
              El diseño de una bodega de datos requiere una comprensión profunda
              tanto de las necesidades analíticas del negocio como de las
              características de los datos disponibles. Un aspecto crítico es la
              estrategia de actualización y mantenimiento, que debe balancear la
              frescura de los datos con la estabilidad del sistema.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_2">2.2 Arquitecturas estrella y copo de nieve</h2>
      </div>
      <div class="row">
        <div class="col-lg" data-aos="fade-right">
          <div class="p-4" style="background-color:#F7EEFE;">
            <div class="row">
              <div class="col-md-auto d-none d-md-block">
                <figure><img src="@/assets/curso/tema2/7.svg" /></figure>
              </div>
              <div class="col-md">
                <p class="mb-0">
                  Las arquitecturas estrella y copo de nieve son los dos
                  paradigmas principales para organizar datos en un entorno de
                  bodega de datos. Cada arquitectura tiene sus propias
                  características y casos de uso óptimos. Para comprender mejor
                  las diferencias fundamentales entre estas arquitecturas,
                  consideremos una representación visual de ambos esquemas. La
                  figura que se muestra más adelante ilustra cómo se organizan
                  las tablas y sus relaciones en cada tipo de arquitectura,
                  tomando como ejemplo un caso típico de análisis de ventas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/8.png" /></figure>
        </div>
      </div>
      <p class="mt-4" data-aos="fade-up">
        Como se puede observar, mientras que el esquema estrella mantiene una
        estructura más simple y directa con todas las dimensiones conectadas
        directamente a la tabla de hechos central, el esquema copo de nieve
        introduce niveles adicionales de normalización en las dimensiones. Esta
        diferencia estructural tiene implicaciones significativas tanto en el
        rendimiento de las consultas como en la mantenibilidad del sistema. Por
        ejemplo, en el esquema copo de nieve, la información sobre productos
        está normalizada con una tabla separada para categorías, lo que reduce
        la redundancia de datos, pero aumenta la complejidad de las consultas.
      </p>
      <div
        class="titulo-sexto color-acento-contenido mt-5"
        data-aos="fade-down"
      >
        <h5>Figura 1.</h5>
        <span>Comparación de arquitecturas de bodegas de datos</span>
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
                  src="@/assets/curso/tema2/9.svg"
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
          <p>
            El esquema estrella se caracteriza por su simplicidad y eficiencia
            en las consultas. En el centro se encuentra la tabla de hechos, que
            contiene las métricas del negocio, rodeada por tablas de dimensiones
            desnormalizadas. Esta estructura facilita la navegación intuitiva de
            los datos y generalmente proporciona mejor rendimiento en consultas
            analíticas. Por otro lado, el esquema copo de nieve introduce
            normalización adicional en las tablas de dimensiones, creando una
            estructura más compleja, pero más eficiente en términos de
            almacenamiento. Esta arquitectura es particularmente útil cuando:
          </p>
          <div class="p-4 mt-4" style="background-color:#ECF2FF;">
            <ol class="lista-ol--cuadro mb-0">
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">1</span>
                </div>
                <span
                  >Las dimensiones tienen múltiples niveles de jerarquía.</span
                >
              </li>
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">2</span>
                </div>
                <span>El almacenamiento es una preocupación primordial.</span>
              </li>
              <li class="d-flex">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">3</span>
                </div>
                <span>La integridad referencial es crítica.</span>
              </li>
              <li class="d-flex mb-0">
                <div class="lista-ol--cuadro__vineta">
                  <span class="fw-bold">4</span>
                </div>
                <span
                  >Las dimensiones son compartidas entre múltiples
                  esquemas.</span
                >
              </li>
            </ol>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/11.png" /></figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_2_3">2.3 Metodologías Kimball e Inmon</h2>
      </div>
      <div class="row">
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-right">
          <figure><img src="@/assets/curso/tema2/19.png" /></figure>
        </div>
        <div class="col-lg" data-aos="fade-left">
          <p>
            Las metodologías de Kimball e Inmon representan dos filosofías
            fundamentales pero diferentes para el diseño y la implementación de
            bodegas de datos. Aunque ambas buscan crear un repositorio de datos
            empresariales eficiente, sus enfoques difieren significativamente.
          </p>
          <p class="mb-0">
            La metodología Kimball, también conocida como el enfoque
            "<em>bottom-up</em>", comienza con la identificación de procesos de
            negocio específicos y construye <em>data marts</em> interconectados
            que eventualmente forman una bodega de datos empresarial. Las
            características principales de este enfoque incluyen:
          </p>
        </div>
      </div>
      <div class="cont_2_1 mt-4">
        <div class="row mt-4 justify-content-center">
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/20.svg" />
              </figure>
              <p class="fw-bold mb-3">01</p>
              <p>Desarrollo incremental por áreas de negocio.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/20.svg" />
              </figure>
              <p class="fw-bold mb-3">02</p>
              <p>Uso consistente de dimensiones conformadas.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/20.svg" />
              </figure>
              <p class="fw-bold mb-3">03</p>
              <p>Enfoque en la usabilidad y el rendimiento analítico.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/20.svg" />
              </figure>
              <p class="fw-bold mb-3">04</p>
              <p>
                Mayor flexibilidad y tiempo más rápido hasta el primer
                resultado.
              </p>
            </div>
          </div>
        </div>
        <p class="mt-lg-4" data-aos="fade-right">
          Por su parte, la metodología Inmon, conocida como el enfoque
          "<em>top-down</em>", aboga por la construcción de una bodega de datos
          empresarial normalizada desde el principio, a partir de la cual se
          pueden derivar data marts específicos. Este enfoque se distingue por:
        </p>
        <div class="row mt-4 justify-content-center">
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/21.svg" />
              </figure>
              <p class="fw-bold mb-3">01</p>
              <p>Visión empresarial integral desde el inicio.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/21.svg" />
              </figure>
              <p class="fw-bold mb-3">02</p>
              <p>Datos altamente normalizados en el nivel empresarial.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/21.svg" />
              </figure>
              <p class="fw-bold mb-3">03</p>
              <p>Énfasis en la consistencia y la integración de datos.</p>
            </div>
          </div>
          <div
            class="col-lg col-md-6 mb-4 mb-lg-0"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <div class="cont_1_3 h-100 p-4">
              <figure class="mb-3">
                <img src="@/assets/curso/tema2/21.svg" />
              </figure>
              <p class="fw-bold mb-3">04</p>
              <p>
                Mayor inversión inicial pero mejor escalabilidad a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4 mt-lg-5">
        <div class="col-lg" data-aos="fade-right">
          <p>
            La selección de la metodología más apropiada requiere una evaluación
            cuidadosa del contexto organizacional. Las empresas deben considerar
            su nivel de madurez en la gestión de datos, pues organizaciones más
            experimentadas pueden estar mejor preparadas para implementar el
            enfoque más estructurado de Inmon. Los recursos disponibles también
            juegan un papel medular; el tiempo, presupuesto y personal técnico
            necesarios varían significativamente entre metodologías. Además, la
            urgencia por obtener resultados analíticos puede inclinar la balanza
            hacia el enfoque más ágil de Kimball, mientras que la complejidad
            del ambiente de datos y los requisitos de gobierno podrían favorecer
            la estructura más rigurosa de Inmon.
          </p>
          <div class="p-4 mt-4" style="background-color:#F7EEFE;">
            <p class="mb-0">
              En el panorama actual, la dicotomía entre estas metodologías se ha
              difuminado considerablemente. Las organizaciones modernas tienden
              a adoptar enfoques híbridos, al seleccionar y adaptar elementos de
              ambas metodologías según sus circunstancias particulares. Lo
              verdaderamente determinante no es la adherencia estricta a una
              metodología específica, sino mantener la consistencia en el
              enfoque elegido y asegurar que la implementación se alinee
              efectivamente con los objetivos analíticos de la organización.
              Este equilibrio pragmático permite a las empresas aprovechar las
              fortalezas de ambas metodologías mientras mitigan sus respectivas
              limitaciones.
            </p>
          </div>
        </div>
        <div class="col-lg-auto d-none d-lg-block" data-aos="fade-left">
          <figure><img src="@/assets/curso/tema2/22.png" /></figure>
        </div>
      </div>
    </div>
  </div>
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
