<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Arquitectura estrella',
          significado:
            'Modelo de diseño de bases de datos dimensionales donde una tabla de hechos central se conecta con múltiples tablas de dimensiones desnormalizadas.',
        },
        {
          termino: 'Bodega de datos',
          significado:
            'Sistema de almacenamiento diseñado específicamente para el análisis y reporteo, que integra datos de múltiples fuentes en un modelo unificado.',
        },
        {
          termino: 'Copo de nieve',
          significado:
            'Variante de la arquitectura estrella donde las dimensiones están normalizadas, creando una estructura más compleja pero con mejor eficiencia de almacenamiento.',
        },
        {
          termino: '<em>Data mart</em>',
          significado:
            'Subconjunto de una bodega de datos enfocado en un área específica del negocio o departamento.',
        },
        {
          termino: 'Dimensiones conformadas',
          significado:
            'Tablas de dimensiones estandarizadas que se comparten entre diferentes <em>data marts</em>, asegurando consistencia en el análisis.',
        },
        {
          termino: 'ETL avanzado',
          significado:
            'Procesos sofisticados de Extracción, Transformación y Carga que incluyen validaciones complejas y transformaciones avanzadas de datos.',
        },
        {
          termino: '<em>Feature importance</em>',
          significado:
            'Medida que indica la relevancia o contribución de cada variable en un modelo predictivo o análisis estadístico.',
        },
        {
          termino: 'Metodología Inmon',
          significado:
            'Enfoque "<em>top-down</em>" para el diseño de bodegas de datos, que comienza con una visión empresarial completa y luego deriva en <em>data marts</em> específicos.',
        },
        {
          termino: 'Metodología Kimball',
          significado:
            'Enfoque "<em>bottom-up</em>" para el diseño de bodegas de datos, que construye data marts incrementalmente que luego se integran en una solución empresarial.',
        },
        {
          termino: 'Metadatos empresariales',
          significado:
            'Información que describe el contenido, formato, estructura y uso de los datos en un contexto empresarial.',
        },
        {
          termino: 'Normalización avanzada',
          significado:
            'Proceso de diseño de bases de datos que va más allá de la tercera forma normal, incluyendo BCNF y formas normales superiores.',
        },
        {
          termino: 'Prueba de hipótesis',
          significado:
            'Método estadístico para tomar decisiones sobre poblaciones basándose en muestras de datos.',
        },
        {
          termino: 'Reglas de negocio',
          significado:
            'Políticas, condiciones y restricciones que definen cómo se deben gestionar y validar los datos en un contexto empresarial.',
        },
        {
          termino: 'Tabla de hechos',
          significado:
            'Tabla central en un modelo dimensional que contiene las métricas o medidas del negocio y las claves foráneas a las dimensiones.',
        },
        {
          termino: 'Tablas de dimensiones',
          significado:
            'Tablas que contienen los atributos descriptivos utilizados para analizar los datos en las tablas de hechos.',
        },
        {
          termino: 'Transformación de datos',
          significado:
            'Proceso de convertir datos de un formato o estructura a otro, incluyendo limpieza, normalización y agregación.',
        },
        {
          termino: 'Validación cruzada',
          significado:
            'Técnica estadística para evaluar modelos analíticos dividiendo los datos en conjuntos de entrenamiento y prueba.',
        },
        {
          termino: 'Variables categóricas',
          significado:
            'Tipos de datos que representan categorías o grupos discretos, que pueden ser nominales u ordinales.',
        },
        {
          termino: 'Visualización avanzada',
          significado:
            'Técnicas sofisticadas para representar datos complejos de manera visual, incluyendo gráficos interactivos y multidimensionales.',
        },
        {
          termino: '<em>Workflow ETL</em>',
          significado:
            'Flujo de trabajo que define la secuencia y dependencias de los procesos de extracción, transformación y carga de datos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
