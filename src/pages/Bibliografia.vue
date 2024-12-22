<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Blanco, P., & Sánchez, J. (2023). Fundamentos de la programación orientada a objetos con Java. Ra-Ma Editorial.',
        link: '',
      },
      {
        referencia:
          'Ceballos, F. J. (2022). Programación orientada a objetos con C++. Ra-Ma Editorial.',
        link: '',
      },
      {
        referencia:
          'Deitel, P., & Deitel, H. (2024). Java How to Program (12th ed.). Pearson Education.',
        link: '',
      },
      {
        referencia:
          'Freeman, E., Robson, E., Sierra, K., & Bates, B. (2022). Head First Design Patterns (3rd ed.). O&#39;Reilly Media.',
        link: '',
      },
      {
        referencia:
          'Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (2023). Design Patterns: Elements of Reusable Object-Oriented <em>Software</em> (Anniversary ed.). Addison-Wesley Professional.',
        link: '',
      },
      {
        referencia:
          'García, A., & Martínez, C. (2023). UML: Modelado de software para profesionales. Alfaomega.',
        link: '',
      },
      {
        referencia:
          'Larman, C. (2022). Applying UML and Patterns: An Introduction to Object-Oriented Analysis and Design (4th ed.). Pearson Education.',
        link: '',
      },
      {
        referencia:
          'López, J. M., & Montero, F. (2024). Patrones de diseño en Java: Una guía práctica. Universidad de Castilla-La Mancha.',
        link: '',
      },
      {
        referencia:
          'Martin, R. C. (2023). Clean Architecture: A Craftsman&#39;s Guide to Software Structure and Design. Prentice Hall.',
        link: '',
      },
      {
        referencia:
          'Martin, R. C. (2021). Agile <em<Software Development</em>, Principles, Patterns, and Practices (2nd ed.). Pearson Education.',
        link: '',
      },
      {
        referencia:
          'Méndez, A. (2023). Principios SOLID explicados: Una guía práctica con ejemplos en Python. Marcombo.',
        link: '',
      },
      {
        referencia:
          'Phillips, D. (2024). Python 3 Object-Oriented Programming (4th ed.). Packt Publishing.',
        link: '',
      },
      {
        referencia:
          'Sánchez, G. (2022). Programación orientada a objetos: Un enfoque práctico. Universidad Nacional Autónoma de México.',
        link: '',
      },
      {
        referencia:
          'Torres, R., & Velázquez, P. (2023). Modelado UML con ejemplos prácticos. Alfaomega.',
        link: '',
      },
      {
        referencia:
          'Valdés-Miranda, C., & Rodríguez, P. (2024). Diseño y programación orientada a objetos: Una perspectiva práctica. Anaya Multimedia.',
        link: '',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
