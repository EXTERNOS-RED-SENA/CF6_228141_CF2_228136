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
          termino: 'Abstracción',
          significado:
            'Proceso de identificar características esenciales de un objeto, ignorando los detalles no relevantes',
        },
        {
          termino: 'Clase',
          significado:
            'Plantilla o modelo que define las propiedades y comportamientos de un tipo de objeto',
        },
        {
          termino: 'Composición',
          significado:
            'Relación fuerte entre clases donde una clase contiene a otra y es responsable de su ciclo de vida',
        },
        {
          termino: 'Encapsulamiento',
          significado:
            'Principio que oculta los detalles internos de una clase y expone solo lo necesario',
        },
        {
          termino: 'Herencia',
          significado:
            'Mecanismo que permite a una clase heredar propiedades y métodos de otra clase',
        },
        {
          termino: 'Interfaz',
          significado:
            'Contrato que especifica qué métodos debe implementar una clase',
        },
        {
          termino: 'Método',
          significado:
            'Función que define el comportamiento de los objetos de una clase',
        },
        {
          termino: 'Objeto',
          significado:
            'Instancia específica de una clase que contiene datos y comportamiento',
        },
        {
          termino: 'Patrón de Diseño',
          significado:
            'Solución reutilizable a un problema común en el diseño de <em>software</em>',
        },
        {
          termino: 'Polimorfismo',
          significado:
            'Capacidad de un objeto para tomar diferentes formas y responder de manera distinta al mismo mensaje',
        },
        {
          termino: 'Principios SOLID',
          significado:
            'Conjunto de cinco principios fundamentales para el diseño orientado a objetos',
        },
        {
          termino: 'Refactorización',
          significado:
            'Proceso de reestructurar código existente sin cambiar su comportamiento externo',
        },
        {
          termino: 'UML',
          significado:
            'Lenguaje Unificado de Modelado, utilizado para visualizar y documentar sistemas de <em>software</em>',
        },
        {
          termino: 'Visibilidad',
          significado:
            'Nivel de acceso que tienen otros objetos a los miembros de una clase',
        },
        {
          termino: 'CASE',
          significado:
            'Herramientas de Ingeniería de <em>Software</em> Asistida por Computadora para el diseño y modelado',
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
