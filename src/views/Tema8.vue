<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 #[em Softwares] pecuarios

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-3
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema8/1.png', alt='Texto que describa la imagen')
      .col-sm-8
        p(data-aos="fade-left") La propagación y adopción de las Tecnologías de la Información y la Comunicación (TIC) en diversas áreas fundamentales de la vida humana y el impacto positivo que han generado, son hechos que han sido conocidos en todo el mundo. Esto se ha observado sin caer en análisis simplistas ni en perspectivas puramente elogiosas. Desde un punto de vista económico, este conjunto de innovaciones tecnológicas que fusiona la informática con las telecomunicaciones forma parte de un nuevo paradigma de producción tecnológica basada en actividades enriquecidas con conocimiento. Este paradigma está a la vanguardia junto con otros sectores de avanzada, como la biotecnología, la nanotecnología y los nuevos materiales, entre otros.
      
    p(data-aos="fade-left").mb-5 El sector agropecuario es uno de esos campos en los cuales las TIC como tecnologías de impacto horizontal están abriéndose paso, aunque no a la velocidad y la intensidad con que han avanzado en otros espacios. El desafío de insertar tecnología en el agro y la ganadería, parece ser un problema más complejo, y a la vez prometedor.

    .row.mb-5.align-content-center
      .col-md-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/2.svg' alt='')
      .col-md-8(data-aos="fade-right")
        .tarjeta.p-3(style="border-radius: 0; background-color:#DBF9BD")
          p Desde el punto de vista de la demanda, la relevancia estratégica que supone la incorporación de las TIC al sector agropecuario y agroindustrial ya ha sido advertida por muchos países. En los últimos diez años, se han creado entidades internacionales abocadas específicamente a la temática. En 2002 fue creada la #[em Asian Federation of Information Technology for Agriculture (Afita)], conformada por más de diez países asiáticos –en particular los del sudeste-, y su par europeo, la #[em European Federation of Information Technology for Agriculture (Efita)]. Un año después, a partir de la iniciativa de Estados Unidos y Brasil surgida en la conferencia mundial organizada por ambos países sobre el tema (la #[em World Conference of Computers in Agriculture and Natural Resources –WCCA-]), se fundó la #[em Panamerican Federation of Technology for Agriculture (Panfita)], a la que se asociaron, además de Estados Unidos y Brasil, también México, Chile y Costa Rica. 
          P Estas tres organizaciones se nuclean a su vez en la #[em Internacional Federation of Information Technology for Agriculture (Infita)], de carácter mundial, que posee un #[em journal] de publicaciones científico-técnicas en el tema y realiza desde su inicio congresos mundiales, el próximo de los cuales se celebra en noviembre de 2006 en Bangalore, India. La Afita, pionera en este campo, posee diversos centros de investigación desde los cuales estudia la situación del mercado de las TIC para el agro en los diversos países europeos y en Estados Unidos. De igual modo, este último estudia la situación de Brasil y la de su propio mercado.
      
    p(data-aos="fade-left") Gracias a todo este crecimiento, varias de estas entidades han tomado la iniciativa de impulsar la creación de estándares internacionales de compatibilidad y coherencia entre los sistemas de información desarrollados para el trabajo con el sector agroalimentario (los #[em Agriculture Information Management Standards –AIMS]) con el objetivo de crear lenguajes y metodologías convencionales para compartir y sistematizar este tipo de información a nivel mundial.
    p(data-aos="fade-left").mb-5 Estas evidencias parecen más que elocuentes respecto al camino ya emprendido en este sentido por diversos países. En este sentido, Colombia no posee una institución específica dedicada a este tema, y tampoco se registran otros indicios de una política pública. Las acciones emprendidas en este aspecto han sido llevadas adelante, o bien por el sector privado (entidades como #[em Aacrea] y #[em Aapresid]) o bien por unidades específicas de distintos organismos (INTA, INTI, #[em Senasa]) en forma fragmentaria, pero no parece existir una visión global de intervención, ni estudios específicos sobre esta temática en particular.

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-5
        figure(data-aos="flip-up")
          img(src='@/assets/curso/temas/tema8/3.png', alt='Texto que describa la imagen')
      .col-sm-7
        .tarjeta.color-secundario.p-3(style="border-radius: 0")
          p(data-aos="fade-left") Cada vez son más las herramientas #[em software] que se están trabajando en el área pecuaria y es común encontrar maquinaria y equipo tecnológico en granjas y centros de pastoreo que revisan con inteligencia artificial los avances de los diferentes procesos, desde la alimentación hasta la gestión de los diferentes derivados pecuarios.
          p(data-aos="fade-left") Para este proceso formativo no se referencian marcas de #[em software] o programas especiales, puesto que eso depende de cada una de las empresas de la que los aprendices del SENA harán parte; sin embargo, se recomienda integrar como mínimo en el sistema de cada proceso los procesadores de texto y las hojas de cálculo que facilitan la gestión de los datos.
      

</template>

<script>
export default {
  name: 'Tema8',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
