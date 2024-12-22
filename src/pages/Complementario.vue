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
          tema: '1. Fundamentos de la Programación Orientada a Objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, mayo 10). <em>Programación orientada a objetos</em>.',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=TE0TKx9dEtI',
        },
        {
          tema: '1. Fundamentos de la Programación Orientada a Objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). Abstracción: <em>Paradigma orientado a objetos.</em> ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=91N3L3mEGqo',
        },
        {
          tema: '2. Principios de diseño orientado a objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). <em>Clases y objetos.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=gVH6zEnCY1c',
        },
        {
          tema: '2. Principios de diseño orientado a objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2020, 23 junio). <em>Jerarquía.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=39VJptW7jQo',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2024, 3 abril). <em>Descarga e instalación de herramienta CASE MySQL Workbench.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=nQ0FWBJbbi0',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 27). <em>Diagramas de Secuencia UML.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=HKbL1bWenIY',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 26). <em>UML.</em> ',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=gVt_zU_E8wY',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2023, marzo 25). <em>Diagrama de casos de uso.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=yQSmLldIpNo',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, julio 1). <em>Diagramas de clase: StarUML.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=fPbUqr49DYU',
        },
        {
          tema: '3. Modelado y diseño UML',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, noviembre 24). <em>Diagrama de componentes.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=sp8APOAyTfk',
        },
        {
          tema: '4. Patrones y arquitectura orientada a objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, diciembre 10). <em>Patrones de diseño de software.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=ZufBcrlUqak',
        },
        {
          tema: '4. Patrones y arquitectura orientada a objetos',
          referencia:
            'Ecosistema de Recursos Educativos Digitales SENA. (2021, noviembre 26). <em>Diseño de patrones de software: introducción.</em>',
          tipo: 'Video',
          link: 'https://www.youtube.com/watch?v=sQHRHhsRUoA ',
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
