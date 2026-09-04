export default {
  global: {
    Name: 'Manejo y aplicación de prácticas ambientales en actividades turísticas de rappel.',
    Description: 'El componente formativo aborda la planificación del manejo ambiental en actividades turísticas de rappel mediante buenas prácticas, principios de mínimo impacto, capacidad de carga, gestión de residuos, relacionamiento con comunidades locales y organización de grupos. Asimismo, desarrolla estrategias de sensibilización, actuación frente a contingencias, registro, seguimiento y mejora continua, orientadas a la aplicación de prácticas sostenibles durante el recorrido.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
    menuPrincipal: {
  "menu": [
    {
      "nombreRuta": "inicio",
      "icono": "fas fa-home",
      "titulo": "Volver al inicio"
    },
    {
      "nombreRuta": "introduccion",
      "icono": "fas fa-info-circle",
      "titulo": "Introducción",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "tema1",
      "numero": "1",
      "titulo": "Planificación y manejo ambiental en actividades turísticas de #[i rappel]",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "1.1",
          "titulo": "Manejo ambiental y mínimo impacto",
          "hash": "t_1_1"
        },
        {
          "numero": "1.2",
          "titulo": "Capacidad de carga y organización de grupos",
          "hash": "t_1_2"
        }
      ]
    },
    {
      "nombreRuta": "tema2",
      "numero": "2",
      "titulo": "Sensibilización y comportamiento ambiental durante la actividad",
      "desarrolloContenidos": true,
      "subMenu": []
    },
    {
      "nombreRuta": "tema3",
      "numero": "3",
      "titulo": "Actuación frente a contingencias ambientales",
      "desarrolloContenidos": true,
      "subMenu": []
    },
    {
      "nombreRuta": "tema4",
      "numero": "4",
      "titulo": "Registro, seguimiento y mejora del desempeño ambiental",
      "desarrolloContenidos": true,
      "subMenu": [
        {
          "numero": "4.1",
          "titulo": "Registro y seguimiento ambiental",
          "hash": "t_4_1"
        },
        {
          "numero": "4.2",
          "titulo": "Mejora continua del desempeño ambiental",
          "hash": "t_4_2"
        }
      ]
    }
  ],
  "subMenu": [
    {
      "icono": "fas fa-sitemap",
      "titulo": "Síntesis",
      "nombreRuta": "sintesis",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "actividad",
      "icono": "far fa-question-circle",
      "titulo": "Actividad didáctica",
      "desarrolloContenidos": true
    },
    {
      "nombreRuta": "glosario",
      "icono": "fas fa-sort-alpha-down",
      "titulo": "Glosario"
    },
    {
      "icono": "fas fa-book",
      "titulo": "Referencias bibliográficas",
      "nombreRuta": "referencias"
    },
    {
      "icono": "fas fa-file-pdf",
      "titulo": "Descargar PDF",
      "download": "downloads/dist.pdf"
    },
    {
      "icono": "fas fa-download",
      "titulo": "Descargar material",
      "download": "downloads/material.zip"
    },
    {
      "icono": "far fa-registered",
      "titulo": "Créditos",
      "nombreRuta": "creditos"
    }
  ]
},
  glosario: [
    {
      termino: 'Acción correctiva',
      significado: 'medida implementada para intervenir sobre la causa de una desviación identificada, con el propósito de evitar su recurrencia o fortalecer el desempeño ambiental de la actividad.',
    },
    {
      termino: 'Buenas prácticas ambientales',
      significado: 'conjunto de actuaciones orientadas a prevenir o reducir los efectos negativos derivados de una actividad, promoviendo el uso responsable de los recursos naturales y la conservación del entorno.',
    },
    {
      termino: 'Capacidad de carga',
      significado: 'criterio de gestión que permite establecer el nivel de uso que puede desarrollarse en un espacio turístico bajo determinadas condiciones ambientales, físicas, sociales u operativas.',
    },
    {
      termino: 'Comportamiento ambiental',
      significado: 'conjunto de actitudes, decisiones o acciones mediante las cuales una persona interactúa con el entorno durante el desarrollo de una actividad turística.',
    },
    {
      termino: 'Contingencia ambiental',
      significado: 'situación imprevista que altera las condiciones ambientales previstas del escenario o puede generar afectaciones sobre los recursos naturales, por lo cual requiere una actuación organizada.',
    },
    {
      termino: 'Gestión de residuos',
      significado: 'conjunto de acciones relacionadas con la prevención, clasificación, separación, almacenamiento temporal, aprovechamiento o disposición adecuada de los residuos generados durante una actividad.',
    },
    {
      termino: 'Indicador ambiental',
      significado: 'dato o criterio utilizado para verificar, comparar o realizar seguimiento a una condición ambiental o al cumplimiento de una medida establecida.',
    },
    {
      termino: 'Manejo ambiental',
      significado: 'conjunto organizado de medidas destinadas a prevenir, mitigar, corregir o controlar las posibles afectaciones derivadas de una actividad sobre el entorno.',
    },
    {
      termino: 'Mejora continua',
      significado: 'proceso sistemático de revisión de resultados que permite identificar ajustes, acciones correctivas u oportunidades para fortalecer progresivamente el desempeño ambiental.',
    },
    {
      termino: 'Mínimo impacto',
      significado: 'enfoque preventivo orientado a reducir las alteraciones evitables generadas por la presencia o las actividades humanas en espacios naturales.',
    },
    {
      termino: 'Planificación ambiental',
      significado: 'proceso mediante el cual se organizan anticipadamente medidas de manejo, recursos, responsables, momentos de aplicación o mecanismos de verificación para el desarrollo sostenible de una actividad.',
    },
    {
      termino: 'Relacionamiento responsable',
      significado: 'interacción respetuosa con comunidades locales, propietarios u otros actores del territorio, considerando sus dinámicas, acuerdos, prácticas, espacios o condiciones de uso.',
    },
    {
      termino: 'Reporte ambiental',
      significado: 'mecanismo mediante el cual se organiza y comunica información sobre una situación, hallazgo, contingencia o resultado ambiental que requiere conocimiento, seguimiento o actuación.',
    },
    {
      termino: 'Seguimiento ambiental',
      significado: 'proceso de verificación periódica utilizado para valorar las condiciones del escenario, el cumplimiento de las prácticas ambientales o los resultados de las medidas implementadas.',
    },
    {
      termino: 'Sensibilización ambiental',
      significado: 'proceso orientado a fortalecer la comprensión de las características o condiciones del entorno, promoviendo comportamientos responsables durante el desarrollo de una actividad turística.',
    },
  ],
  referencias: [
    {
      referencia: 'Cifuentes, M. (1992). Determinación de capacidad de carga turística en áreas protegidas. Centro Agronómico Tropical de Investigación y Enseñanza (CATIE).',
    },
    {
      referencia: 'Congreso de Colombia. (1993). Ley 99 de 1993, por la cual se crea el Ministerio del Medio Ambiente, se reordena el sector público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental (SINA) y se dictan otras disposiciones. Diario Oficial No. 41.146.',
    },
    {
      referencia: 'Congreso de Colombia. (1996). Ley 300 de 1996, por la cual se expide la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 42.845.',
    },
    {
      referencia: 'Congreso de Colombia. (2020). Ley 2068 de 2020, por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones. Diario Oficial No. 51.544.',
    },
    {
      referencia: 'Instituto Colombiano de Normas Técnicas y Certificación. (2014a). NTC-ISO 21101. Turismo de aventura. Sistemas de gestión de la seguridad. Requisitos.',
    },
    {
      referencia: 'Instituto Colombiano de Normas Técnicas y Certificación. (2014b). NTC-ISO 21102. Turismo de aventura. Líderes. Competencia del personal.',
    },
    {
      referencia: 'Instituto Colombiano de Normas Técnicas y Certificación. (2014c). NTC-ISO 21103. Turismo de aventura. Información para los participantes.',
    },
    {
      referencia: 'Leave No Trace Center for Outdoor Ethics. (s. f.). The 7 principles. Leave No Trace.',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Guía técnica de criterios para el acotamiento de las rondas hídricas en Colombia.',
    },
    {
      referencia: 'Ministerio de Ambiente y Desarrollo Sostenible. (2019). Resolución 2184 de 2019, por la cual se modifica la Resolución 668 de 2016 sobre el uso racional de bolsas plásticas y se adoptan otras disposiciones.',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2020). Política de turismo sostenible: Unidos por la naturaleza.',
    },
    {
      referencia: 'Ministerio de Comercio, Industria y Turismo. (2021). Norma Técnica Sectorial NTS-AV 011. Requisitos para la operación de actividades de descenso en cuerda (rappel).',
    },
    {
      referencia: 'Organización Internacional de Normalización. (2015). ISO 14001:2015. Environmental management systems—Requirements with guidance for use.',
    },
    {
      referencia: 'Organización Internacional de Normalización. (2018). ISO 21401:2018. Tourism and related services—Sustainability management system for accommodation establishments—Requirements.',
    },
    {
      referencia: 'Organización Mundial del Turismo, & Programa de las Naciones Unidas para el Medio Ambiente. (2006). Por un turismo más sostenible: Guía para responsables políticos. Organización Mundial del Turismo.',
    },
    {
      referencia: 'Programa de las Naciones Unidas para el Medio Ambiente, & Organización Mundial del Turismo. (2005). Making tourism more sustainable: A guide for policy makers. World Tourism Organization.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
