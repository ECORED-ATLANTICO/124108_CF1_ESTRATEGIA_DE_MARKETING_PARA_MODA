export default {
  global: {
    Name: 'Fundamentos del mercadeo',
    Description:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar su comprensión de los conceptos básicos del mercadeo y a entender la importancia de llevar a cabo un plan de mercadeo como estrategia clave a la hora de iniciar cualquier tipo de negocio, asegurando el crecimiento en el mercado de consumidores de su producto o servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
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
        titulo: 'Introducción al mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Importancia del mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Variables del mercado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Plan estratégico de mercadeo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Análisis de competencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Marco legal vigente, e-commerce y redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Generalidades del comercio electrónico',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características del comercio electrónico',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Regulación del comercio electrónico',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Normatividad del comercio electrónico',
            hash: 't_7_4',
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
        download: 'downloads/dist.pdf',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'AMA (American Marketing Association )',
      significado:
        'organización de origen estadounidense que agrupa a los profesionales y educadores del marketing (Olamendi, G, s.f.).',
    },
    {
      termino: 'Negocio',
      significado:
        'un negocio debe definirse de acuerdo con tres dimensiones: los grupos de clientes a los que se sirve, las necesidades de los clientes que se satisfacen y la tecnología que permite producir los bienes o servicios ofrecidos (Olamendi, G, s.f.).',
    },
    {
      termino: 'Planificación',
      significado:
        'es el proceso de reflexión, análisis y decisión, cuyo fin básico es la aproximación de la empresa hacia el futuro deseado, en un entorno incierto y habitualmente hostil (Olamendi, G, s.f.).',
    },
    {
      termino: 'Plan de acción',
      significado:
        'es un conjunto de tareas organizadas que deben ser ejecutadas con los recursos disponibles y potenciales, para la consecución de los objetivos fijados (Olamendi, G, s.f.).',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Valor que el fabricante agrega a los materiales que prepara como productos para el consumo del mercado (Olamendi, G, s.f.).',
    },
  ],
  referencias: [
    {
      referencia:
        'American Marketing Association. (2020, Diciembre 3). Definitions of Marketing.',
      link:
        'https://www.ama.org/the-definition-of-marketing-what-is-marketing/',
    },
    {
      referencia:
        'Baena, V., y Moreno, F. (2010). Instrumentos de Marketing: Decisiones sobre producto, precio, distribución, comunicación y marketing directo (Manuales) (Spanish Edition) (1st ed.). Editorial UOC, S.L.',
    },
    {
      referencia:
        'CONPES 3620 de 2009 [Departamento de Planeación de Colombia] Por el cual se establecen las políticas para el desarrollo e impulso del comercio electrónico en Colombia. Noviembre 9 de 2009.',
    },
    {
      referencia:
        'Decreto 1747 de 2000 [Presidencia de la República de Colombia]. Por la cual por el cual se reglamenta parcialmente la Ley 527 de 1999, en lo relacionado con las entidades de certificación, los certificados y las firmas digitales. Septiembre 11 de 2000.',
    },
    {
      referencia:
        'Iniestra, L. (2015). Implementación de mercadotecnia digital a una empresa de chocolate gourmet [Tesis de maestría. Instituto Politécnico Nacional]. Repositorio Nacional.',
      link: 'https://www.repositorionacionalcti.mx/',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2013). Fundamentos de Marketing (11ª ed.). Pearson Educación.',
    },
    {
      referencia:
        'Kotler, P. y Keller, K. (2013). Dirección de Marketing. Pearson Educación.',
    },
    {
      referencia:
        'Lamb, C. W., Hair, J. F., & McDaniel, C. (2011). Marketing. Cengage Learning.',
    },
    {
      referencia:
        'Ley 527 de 1999 [Congreso de la República de Colombia] Por medio de la cual se define y reglamenta el acceso y uso de los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones. Agosto 21 de 1999.',
    },
    {
      referencia:
        'Olamendi, G (2021). Diccionario de marketing. EIG Business School. ',
      link: 'https://esgerencia.com/pdf/blogmkt/diccionario.pdf',
    },
    {
      referencia:
        'Rincón, E. (2017) Derecho del comercio electrónico y de internet. Legis.',
    },
    {
      referencia:
        'Rosenstiehl, J. L. (2016). Tópicos generales de marketing estratégico. Notas de Clase N°39.',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/14575/1/2016_NC_T%C3%B3picos%20generales%20de%20marketing%20estrat%C3%A9gico_Rosenstiehl.pdf',
    },
    {
      referencia:
        'Sainz, J. M. (2015). El plan de marketing en la práctica. ESIC.',
    },
    {
      referencia:
        'Silva, R. (2009). Beneficios del comercio electrónico. Perspectivas, 24, p.151-164.',
      link: 'https://www.redalyc.org/articulo.oa?id=425942160008',
    },
    {
      referencia:
        'Stanton, W. J., Etzel, M., & Walker, B. (2007). Fundamentos de Marketing (13th ed.). McGraw-Hill Interamericana.',
    },
    {
      referencia:
        'Xie, Y. M. S. (2021). Marketing digital: Navegando en aguas digitales, sumérgete conmigo. Ediciones de la U.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=http://www.ebooks7-24.com/?il=9100',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
