export default {
  global: {
    componenteFormativo: 'Patronaje bebé',
    descripcionCurso:
      'El patronaje hace parte fundamental de las labores del desarrollador de vestuario, pues con él se logra materializar los productos de moda. Las personas requieren ropa desde su nacimiento, es por ello que adquirir las competencias de patronaje de bebé es muy importante. En esta unidad se abordarán los conceptos básicos del patronaje de bebé, las medidas antropométricas de los bebés, asimismo el desarrollo de prendas claves de esta línea.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Medidas y cuadros de tallas bebés',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Camisa de bebé, pañal pantalón y baberos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Camisa de bebé',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pañal pantalón',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Baberos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desarrollo de modelos de camisas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pijama de bebé y mamelucos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Pijama de bebé',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Mamelucos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Escalado de pijama y mamelucos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Escalado del pijama',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Escalado mameluco',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Desarrollo de modelos de pijamas y mamelucos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrera de Diseño y Gestión en Moda. (2015). Técnicas de patronaje. Tomo I: Mujer. Editorial UPC.',
      link: 'https://repositorioacademico.upc.edu.pe/handle/10757/344592',
    },

    {
      referencia: 'Curvígrafo. (s. f.). En Definiciona.',
      link: 'https://definiciona.com/curvigrafo/',
    },

    {
      referencia:
        'Feyerabend, V. F., Herrero, B., Biderman, I. y Gosh, F. (2009). Ilustración de moda. Ilustraçao de moda: Plantillas. Moldes (1ª ed.). Editorial Gustavo Gili, S.L.',
    },

    { referencia: 'Gaviria, A. (2018). Escalado.' },

    {
      referencia:
        'Hincapié, L., García, M. y Vélez, M. (1995). Patronaje y escalado línea infantil. SENA.',
      link: 'https://hdl.handle.net/11404/4874',
    },

    {
      referencia:
        'Real Academia Española. (s. f.). Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario.',
      link: 'https://dle.rae.es/',
    },

    {
      referencia:
        'SENA y JICA. (2011). Manual de patronaje básico e interpretación de diseños. SENA.',
      link: 'https://hdl.handle.net/11404/4725',
    },

    {
      referencia: 'Tevisto.com. (2017). Diccionario de la moda.',
      link:
        'https://www.tevisto.com/blog/wp-content/uploads/2017/10/diccionario-de-la-moda.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Acromion',
      significado:
        'Anat. Apófisis del omóplato, con la que se articula la extremidad externa de la clavícula (Real Academia Española, s.f.).',
    },
    {
      termino: 'Curvígrafo',
      significado:
        'Sustantivo masculino. Este vocablo de uso obsoleto hace alusión a una herramienta utilizada en el campo de las matemáticas, geometría y en física. Se emplea para trazar, dibujar, diseñar y bosquejar curvas y en distintas dimensiones o espacios (Definiciona, s.f.)',
    },
    {
      termino: 'Mameluco',
      significado:
        '3. m. Arg., Cuba y Ur. mono (‖ prenda de vestir) (Real Academia Española, s.f.).',
    },
    {
      termino: 'Mono',
      significado:
        'Prenda de vestir de una sola pieza, de tela fuerte, que consta de cuerpo y pantalón, especialmente la utilizada en diversos oficios como traje de faena (Real Academia Española, s.f.).',
    },
    {
      termino: 'Raglán',
      significado:
        'Tipo de manga larga o corta, particular en la costura. El corte sale de la axila hacia el hombro, con una línea diagonal hasta el cuello (Tevisto.com, 2017).',
    },
  ],
  complementario: [
    {
      texto:
        'Hincapié, L., García, M. y Vélez, M. (1995). Patronaje y escalado línea infantil. SENA.',
      tipo: 'PDF',
      descarga: '/downloads/patronaje_escalado_linea_infantil.pdf',
    },
    {
      texto:
        'SENA y JICA. (2011). Manual de patronaje básico e interpretación de diseños. SENA. ',
      tipo: 'PDF',
      descarga: '/downloads/Manual_patronaje_basico_interpretacion_disenos.pdf',
    },
    {
      texto: 'Gaviria, A. (2018). Escalado.',
      tipo: 'Instructivo',
      descarga: '/downloads/Escalado.pdf',
    },
    {
      texto: 'Guzmán, M. (2017). Ropa de bebés. Patronaje. ',
      tipo: 'Cartilla',
      link: 'https://issuu.com/mariaeuniceguzmanidarraga/docs/patronaje_bebes',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Salomé Solano Sarria ',
        cargo: 'Instructora',
        centro: 'Centro de Desarrollo Agroempresarial Regional Cundinamarca',
      },
      {
        nombre: 'Maritza Rodríguez',
        cargo: 'Instructora',
        centro:
          'Centro de manufactura en textil y cuero Regional Distrito Capital',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Fabio Andrés Gaviria',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro para la comunicación de la Industria Gráfica Regional Distrito Capital ',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja Regional Tolima ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Oscar Julian Marquez Sanabria'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
