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
        titulo: 'Fundamentos de la Programación Orientada a Objetos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción al paradigma orientado a objetos	',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clases y objetos: conceptos básicos	',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Atributos, métodos y encapsulamiento',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Principios de diseño orientado a objetos	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herencia y polimorfismo	',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Composición y agregación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Principios SOLID en POO	',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Del diseño a la implementación: consideraciones prácticas	',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelado y diseño UML	',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diagramas de clases UML',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Relaciones entre clases',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Herramientas CASE para modelado',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Patrones y arquitectura orientada a objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Patrones de diseño fundamentales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Arquitectura limpia con POO',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Implementación práctica de modelos',
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
        download: 'downloads/prueba.pdf',
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
    Name: 'Programación orientada a objetos: conceptos y modelado',
    Description:
      'Este componente formativo aborda los fundamentos y prácticas de la programación orientada a objetos, explorando desde conceptos básicos hasta patrones de diseño avanzados. Cubre principios SOLID, modelado UML y arquitectura de software, proporcionando las herramientas necesarias para diseñar y desarrollar sistemas robustos y mantenibles bajo el paradigma orientado a objetos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
    ],
  },
}
