<template>
  <div class="curso-main-container complementario">
    <BannerInterno
      icono="far fa-folder-open"
      titulo="Material complementario"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th colspan="3" scope="col">Tema</th>
              <th colspan="5" scope="col">Referencia APA del material</th>
              <th colspan="2" scope="col">Tipo</th>
              <th colspan="2" scope="col">Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in computedData"
              :key="'complementario-' + index"
            >
              <td
                class="text-start"
                colspan="3"
                scope="row"
                v-html="item.tema"
              ></td>
              <td
                class="text-start"
                colspan="5"
                scope="row"
                v-html="item.referencia"
              ></td>
              <td colspan="2" v-html="item.tipo"></td>
              <td colspan="2">
                <div class="complementario__enlaces">
                  <a
                    v-for="(link, linkIndex) of item.link"
                    :key="linkIndex"
                    class="complementario__btn"
                    :href="link"
                    target="_blank"
                    ><i class="fas fa-external-link-alt"></i
                  ></a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MaterialComplementario',
  computed: {
    complementarioData() {
      return [
        {
          tema: '1. Modelamiento avanzado de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023e, marzo 27). <em>Modelos y metodologías de analítica</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=96pohadjEWE ',
        },
        {
          tema: '2. Inteligencia de negocios',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023d, marzo 27). <em>Bodegas de datos</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=SsP1tA6hAdg',
        },
        {
          tema: '2. Inteligencia de negocios',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). <em>Modelos y esquemas de bodega de datos</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=Uq6WxfzaroM ',
        },
        {
          tema: '3. Análisis exploratorio de datos',
          referencia:
            '<em>Limpiar datos de Excel, CSV, PDF y Hojas de cálculo de Google con el intérprete de datos</em>. (s. f.). Tableau.',
          tipo: 'Portal <em>web</em>',
          link:
            'https://help.tableau.com/current/pro/desktop/es-es/data_interpreter.htm ',
        },
        {
          tema: '3. Análisis exploratorio de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 24). <em>Introducción a la aplicación de herramientas estadísticas en la presentación de datos</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=M9q9zxX8Evc< ',
        },
        {
          tema: '4. Preparación avanzada de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023c, julio 25). <em>Procesamiento y análisis de datos</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=8OSIN2kdU5o',
        },
        {
          tema: '4. Preparación avanzada de datos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023e, diciembre 30). <em>Modelamiento, análisis y preparación de datos</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=HjJpqHD6sV0',
        },
      ]
    },
    computedData() {
      const data = this.complementarioData
      return data.map(item => {
        let nuevoLink = []
        if (item.link) {
          if (typeof item.link === 'string') {
            nuevoLink.push(item.link)
          } else {
            nuevoLink = item.link
          }
        } else if (item.descarga) {
          if (typeof item.descarga === 'string') {
            nuevoLink.push(this.obtenerLink(item.descarga))
          } else {
            item.descarga.forEach(link => {
              nuevoLink.push(this.obtenerLink(link))
            })
          }
        }
        return {
          ...item,
          link: nuevoLink,
        }
      })
    },
  },
}
</script>

<style lang="sass">
.complementario
  &__enlaces
    display: flex
    justify-content: center
    flex-wrap: wrap
    a
      margin: 0 5px
  &__btn
    font-size: 1.5em
    line-height: 1em
table
  width: calc(100% - 1px)
  min-width: 800px
  thead
    background-color: $color-sistema-e
    th
      border-color: $color-sistema-e
  th, td
    padding: 25px 20px
    text-align: center
</style>
