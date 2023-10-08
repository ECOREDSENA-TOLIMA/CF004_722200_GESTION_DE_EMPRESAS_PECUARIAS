export default {
  global: {
    componenteFormativo: 'Programación de la producción pecuaria',
    descripcionCurso:
      'La programación de la producción es un tema administrativo de gran importancia en donde se incluyen procesos y labores de toda la unidad productiva, tales como las buenas prácticas, el reconocimiento de las enfermedades de control oficial, los sistemas productivos, entre otras.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Producción pecuaria',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de producción pecuaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clases y características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Buenas prácticas pecuarias (tipos) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Interpretación (componentes, principios, objetivos) ',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Implementación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Legislación laboral',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recurso humano',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Normativa',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Programa de producción (concepto y características) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Plan de producción ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Programación de actividades pecuarias',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Plan sanitario complementario ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Prevención de enfermedades de control oficial',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Área de cuarentena',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Almacenamiento y transporte de productos biológicos y medicamentos veterinarios',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Técnicas para aplicación de medicamentos veterinarios',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Tiempo de retiro',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Notificación de efectos adversos',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Guía sanitaria de movilización interna',
            hash: 't_6_7',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Plan de alimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Buenas prácticas de alimentación animal ',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Almacenamiento de alimentos, materia prima e insumos pecuarios',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: '<em>Softwares</em> pecuarios',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04_722200.zip',
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
      tema: '1. Producción pecuaria',
      referencia:
        'Hernández, A. (2020). [Video]. YouTube. Sistemas de producción animal.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5VDR_vtHRLQ',
    },
    {
      tema: '3. Buenas prácticas pecuarias',
      referencia:
        'Coasgrop hijos del campo. (2021). Buenas Prácticas Pecuarias (BPP). [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cN6lFxETmr8',
    },
    {
      tema: '3.2. Implementación',
      referencia:
        'La Finca de Hoy. (2019). Requerimientos para certificar una granja pequeña en buenas prácticas pecuarias. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HUmDzvLu-ho',
    },
    {
      tema: '5. Programa de producción (concepto y características)',
      referencia:
        'López, R. (s.f.). Programación anual de actividades de la finca -volumen 9',
      tipo: 'Cartilla',
      link: 'https://repositorio.sena.edu.co/handle/11404/438',
    },
  ],
  glosario: [
    {
      termino: 'Afta',
      significado:
        'Úlcera o llaga abierta y dolorosa en la boca. Las aftas son de color blanco o amarillo y están rodeadas por un área roja y brillante. No son cancerosas (Medline Plus, 2021).',
    },
    {
      termino: 'Ataxia',
      significado:
        'Falta de control muscular o de coordinación de los movimientos voluntarios, como caminar o recoger objetos. Como signo de una condición subyacente, la ataxia puede afectar a varios movimientos y crear dificultades en el habla, el movimiento de los ojos y la deglución (Scott, 2009).',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Diversidad biológica es la variedad de la vida. Este reciente concepto incluye varios niveles de la organización biológica. Abarca a la diversidad de especies de plantas, animales, hongos y microorganismos que viven en un espacio determinado, a su variabilidad genética, a los ecosistemas de los cuales forman parte estas especies y a los paisajes o regiones en donde se ubican los ecosistemas. También incluye los procesos ecológicos y evolutivos que se dan a nivel de genes, especies, ecosistemas y paisajes.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas, destinadas a mantener el control de factores de riesgo laborales procedentes de agentes biológicos, físicos o químicos, logrando la prevención de impactos nocivos, asegurando que el desarrollo o producto final de dichos procedimientos no atenten contra la salud y seguridad de trabajadores de la salud, pacientes, visitantes y el medio ambiente (Ministerio de Salud Colombiano, 1997).',
    },
    {
      termino: 'BPG',
      significado:
        'Buenas Prácticas Ganaderas –BPG- son un sistema de aseguramiento de inocuidad enfocado a la producción primaria, su objetivo es la gestión de riesgos biológicos, físicos y químicos generados en el predio y que pudieran afectar la salud de los consumidores (Instituto colombiano Agropecuario, 2021).',
    },
    {
      termino: 'Cánula',
      significado:
        'Tubo corto que se emplea para aplicar medicamentos intramamarios.',
    },
    {
      termino: 'CIPF',
      significado:
        'Comisión de Medidas Fitosanitarias que gobierna la Convención Internacional de Protección Fitosanitaria (CIPF), y fue establecida a través del artículo XII del nuevo texto revisado de la CIPF, aprobado en 1997, y funciona como órgano mundial de gobierno de la Convención (Organización de las Naciones Unidas para la Alimentación y la Agricultura, 2019).',
    },
    {
      termino: '<em>Codex Alimentarius</em>',
      significado:
        'También conocido como “Código Alimentario”, es un conjunto de normas, directrices y códigos de prácticas aprobados por la Comisión del <em>Codex Alimentarius</em>. La Comisión, conocida también como CAC, constituye el elemento central del Programa Conjunto FAO/OMS sobre Normas Alimentarias y fue establecida por la FAO y la Organización Mundial de la Salud (OMS) con la finalidad de proteger la salud de los consumidores y promover prácticas leales en el comercio alimentario (Organización de las Naciones Unidas para la Alimentación y la Agricultura, 2021).',
    },
    {
      termino: 'Émbolo',
      significado:
        'Parte de la jeringa que se presiona para empujar el líquido cuando se inyecta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Clasificación de las empresas según Decreto 957. (2019). Decreto 957 del Ministerio de Comercio, Industria y Turismo (MinCIT). ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=94550',
    },
    {
      referencia:
        'Cárdenas Mora, Sandra Milena and Guarnizo Cuellar, Fabio, "Costos por órdenes de producción y por procesos" (2015). Administración y economía. 8. ',
      link:
        'https://ciencia.lasalle.edu.co/edunisalle_administracion-economia/8',
    },
    {
      referencia:
        'La empresa como sistema: análisis de los sistemas empresariales. Ade y Economía [Blogsudima] (s.f.). ',
      link:
        'https://blogs.udima.es/administracion-y-direccion-de-empresas/libros/introduccion-a-la-organizacion-de-empresas-2/unidad-didactica-1-la-empresa-como-organizacion-los-sistemas-funcionales/2-la-empresa-como-sistema-analisis-de-los-sistemas-empresariales/',
    },
    {
      referencia:
        'FAO. (2004). Código de prácticas sobre buena alimentación animal. ',
      link:
        'http://www.lactodata.info/docs/lib/fao_codigo_alimentacion_animal.pdf',
    },
    {
      referencia: 'FAO. (2020). Programa de alimentación animal. ',
      link: 'https://www.fao.org/3/a1564s/a1564s03.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2017). Inocuidad Agricola. ',
      link: 'https://www.ica.gov.co/areas/agricola/inocuidad',
    },
    {
      referencia:
        'Invima. (2020). Guía Técnica para la elaboración de programas sanitarios. Instituto Nacional de Vigilancia de Medicamentos y Alimentos – Invima. ',
      link:
        'https://www.invima.gov.co/documents/20143/426805/GU%C3%8DA+T%C3%89CNICA+PARA+LA+ELABORACI%C3%93N+DE+PROGRAMAS+SANITARIOS.pdf',
    },
    {
      referencia:
        'Ministerio del trabajo (2018). Implementación de los sistemas de gestión de seguridad y salud en el trabajo al año 2020 ',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo/implementacion-de-los-sistemas-de-gestion-de-seguridad-y-salud-en-el-trabajo-al-ano-2020',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (2021). Buenas prácticas ganaderas en la producción de ganado bovino y bufalino destinado al sacrificio para el consumo humano. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/35f0d70e-b2dd-4bfc-ac1f-ba169b5ccdca/Publicacion-5.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario – ICA. (s.f.). Guía para la elaboración del plan sanitario. ICA. ',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/LISTADO-DE-PREDIOS-CERTIFICADOS-EN-BPG/GUIA-PARA-LA-ELABORACION-DEL-PLAN-SANITARIO-1.pdf.aspx?lang=es-CO',
    },
    {
      referencia: 'Medline. (2021). Aftas. ',
      link: 'https://medlineplus.gov/spanish/ency/article/000998.htm',
    },
    {
      referencia:
        'Ministerio de Salud de Colombia. (1997). Conductas básicas en bioseguridad: manejo integral. Protocolo básico para el equipo de salud. Ministerio de Salud de Colombia. ',
      link:
        'https://www.minsalud.gov.co/salud/Documents/observatorio_vih/documentos/prevencion/promocion_prevencion/riesgo_biol%C3%B3gico-bioseguridad/b_bioseguridad/BIOSEGURIDAD.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura – FAO. (2018). <em>Codex Alimentarius</em>. FAO. Límites máximos de residuos (LMR) y recomendaciones sobre la gestión de riesgos (RGR) para residuos de medicamentos veterinarios en los alimentos ',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXM%2B2%252FMRL2s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación – FAO. (2021). Directrices para reforzar los servicios de sanidad animal en los países en desarrollo, capítulo 5. Recursos Humanos. FAO. ',
      link:
        'https://www.fao.org/3/u2200s/u2200s08.htm#cap%C3%ADtulo%205:%20recursos%20humanos',
    },
    {
      referencia:
        'Scott, C. L. (2009). Mayo Clinic Family Health Book, Libro de Salud Familiar de Mayo Clinic, 5.ª edición',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
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
