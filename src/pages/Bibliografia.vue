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
          'Aguilar, L. J. (2020). Inteligencia de negocios y analítica de datos. Marcombo.',
        link: '',
      },
      {
        referencia:
          'De Pablos Heredero, C., Agius, J. J. L. H., Romero, S. M., & Salgado, S. M. (2019). Organización y transformación de los sistemas de información en la empresa. ESIC.',
        link: '',
      },
      {
        referencia:
          'Díaz, C. O., Soler, P., Pérez, M. & Mier, A. (2024). OMASHU: La ciencia detrás del éxito; Big Data e IA en los eSports. Revista SISTEMAS, 170, 61-79.',
        link: '',
      },
      {
        referencia:
          'Guardelli, E. (2024). Minería de Procesos: Convertir Datos en Valor. MedTechBiz.',
        link: '',
      },
      {
        referencia:
          'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de <em>Big Data</em> para negocios y conceptos de inteligencia empresarial. Independently Published.',
        link: '',
      },
      {
        referencia:
          'Maldonado, L. (2012). Data Analysis Using Regression and Multilevel/Hierarchical Models. Persona y Sociedad, 26(1), 191.',
        link: 'https://doi.org/10.53689/pys.v26i1.12',
      },
      {
        referencia:
          'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
        link: '',
      },
      {
        referencia:
          'Orlandi, M. A. M. (2024). Tecnologías Big Data, Minería de Datos y Analítica aplicada a la gestión de Recursos Humanos: contiene: un caso de estudio. Editora Dialética.',
        link: '',
      },
      {
        referencia:
          'Peraza, E. A. C. (2012). Estructuras y Fundamentos de Datos. Guía de ejercicios prácticos. Lulu.com.',
        link: '',
      },
      {
        referencia:
          'Shovic, J. C. & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
        link: '',
      },
      {
        referencia:
          'Subirats Maté, L., Pérez Trenard, D. O., Calvo González, M. & Isabel Guitart Hormigo. (2019). Introducción a la limpieza y análisis de los datos. ',
        link:
          'https://openaccess.uoc.edu/bitstream/10609/148647/1/IntroduccionALaLimpiezaYAnalisisDeLosDatos.pdf',
      },
      {
        referencia:
          'Wilke, C. O. (2019). Fundamentals of Data Visualization: A Primer on Making Informative and Compelling Figures. O’Reilly Media.',
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
