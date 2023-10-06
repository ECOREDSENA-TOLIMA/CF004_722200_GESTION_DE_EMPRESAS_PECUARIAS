<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistema de producción pecuaria

    .row.mb-5.align-content-center
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema2/1.svg' alt='')
      .col-md-9(data-aos="fade-right")
        p De acuerdo con la FAO (Organización de las Naciones Unidas para la Alimentación y la Agricultura) los animales destinados a la producción pecuaria brindan diversos servicios y bienes al ser humano, como los son la leche, la carne, los huevos, las pieles, las plumas, las fibras, tracción y estiércol, entre otras, empero cumplen, además, otras funciones de carácter económico y social en las diferentes comunidades. 
        p.mb-3 Por ejemplo, un animal como la vaca es muy comercial y aprovechable por los seres humanos, tanto así que muchas personas dicen que de la vaca no se desperdicia nada  
        .tarjeta.p-4(style="border-radius: 0; background-color:#DBF9BD").mb-3
          p Estas producciones tienen diferentes fines entre los que se destacan principalmente las ventas regionales o el autoconsumo o producción a mayor escala para proveer los mercados a nivel nacional e internacional. Así, el objeto, el tamaño y el fin de la producción es lo que se denomina sistema productivo, es así como los animales rumiantes como el ganado bovino, caprino y ovino, tiende a depender directamente de la tierra. Por tanto, sus sistemas de producción están determinados en gran medida por la agroecología y el uso de la tierra. Los sistemas de producción de especies monogástricas como los cerdos y los pollos dependen más de la demanda de los consumidores y del nivel de inversión de capital.
        

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Clases y características

    p(data-aos="fade-left").mb-5 Existen diferentes tipos de sistemas productivos de acuerdo con la especie pecuaria que se tenga en producción, debido a que está relacionado con los aspectos etológicos, sanitarios, técnicos y de bienestar para cada una de ellas. En Latinoamérica los principales sistemas de producción que se manejan son los extensivos, intensivos y trashumantes:

    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span #[em Sistemas pecuarios]

    .row.justify-content-center.align-items-center.mb-5
      .col(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema2/2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sistemas_pecuarios.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar infografía.] Sistemas pecuarios.

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Componentes

    p(data-aos="fade-left").mb-5 Los sistemas productivos cuentan con diferentes componentes de acuerdo con la producción específica y el tipo de producción, estos componentes deben ser como piezas de un engranaje de una maquinaria que necesitan trabajar todos juntos secuencialmente para que todo funcione.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          span #[em Componentes de un sistema productivo]

        figure
          img(src='@/assets/curso/temas/tema2/3.svg', alt='Figura 3 Componentes de un sistema productivo En la figura se observa Granja galpones ensamble: Transporte Equipos Alimento Agua Animales Medicinas Personas Finca Aplican técnicas  Granja, galpones y ensamblaje Distintas edades fisiológicas  Manejo: alimenticio, reproductivo, sanitario, personal e higiénico Productos Excretas Carne en pie Sala de cosecha Procesamiento Consumo humano Tratamiento Bioseguridad Alto potencial contaminante')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/componentes_de_un_sistema_productivo.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar infografía.] Componentes de un sistema productivo.

    .tarjeta.p-4(style="border-radius: 0 ; background-color:#FFFAD0").mb-5
      .row.justify-content-center.align-items-center
        .col-2
          img(src='@/assets/curso/temas/tema2/4.svg')
        .col-10
          p.text-bold Podría decirse que los sistemas productivos están compuestos por elementos como los tipos de animales (razas, edades, líneas), alimento, insumos pecuarios, equipos, infraestructura, predio, personal, entre otros, en donde procesos como el manejo sanitario, alimenticio, reproductivo, ambiental, de residuos y del producto final, deben ser incorporados, así como el manejo hasta llegar al consumidor final, garantizando la calidad e inocuidad de los productos de origen animal.  

    .row.justify-content-center.align-items-center
      .col-10
        .tarjeta(style="border-radius: 0; background-color:#DBF9BD").p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema2/5.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para reforzar el tema se recomienda ver el material audiovisual Sistemas de producción animal que se encuentra disponible en el material complementario o a través del siguiente enlace:  
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=5VDR_vtHRLQ  " target="_blank")
                    span Ver video
                    i.fas.fa-file-video
</template>

<script>
export default {
  name: 'Tema2',
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
