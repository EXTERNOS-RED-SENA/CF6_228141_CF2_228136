export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelamiento avanzado de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Reglas de negocio y metodologías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Normalización y diseño de bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Principios ACID (acrónimo en inglés de atomicidad, consistencia, aislamiento y durabilidad)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Inteligencia de negocios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Bodegas de datos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Arquitecturas estrella y copo de nieve',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Metodologías Kimball e Inmon',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis exploratorio de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estadística descriptiva e inferencial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Métodos de análisis univariable y multivariable',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Técnicas de visualización',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Preparación avanzada de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Detección y tratamiento de errores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Identificación de variables relevantes',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Transformación y validación de datos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Integración y gestión avanzada de datos para inteligencia artificial',
    Description:
      'Este componente profundiza en las técnicas avanzadas de integración y gestión de datos para sistemas de inteligencia artificial. Abarca desde el modelamiento avanzado de bases de datos hasta el análisis exploratorio y la preparación sofisticada de datos, incluyendo metodologías de inteligencia de negocios. Proporciona las herramientas necesarias para implementar soluciones de gestión de datos en contextos empresariales modernos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
