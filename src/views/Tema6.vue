<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Plan sanitario complementario 

    .row.mb-5.align-content-center
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/1.svg' alt='')
      .col-md-9(data-aos="fade-right")
        p El plan sanitario en las producciones pecuarias es de gran importancia, puesto que este garantiza que se disminuyan los problemas que puedan afectar el sistema de producción y afecten la capacidad productiva y reproductiva en las explotaciones.
        p Este plan debe estar enfocado en establecer actividades que contribuyan de manera sistemática, ordenada, integrada y práctica con la prevención, el control y la erradicación de enfermedades de control oficial y de gran incidencia en las producciones pecuarias. En síntesis, el plan sanitario debe establecer actividades que estén diseñadas en la mitigación de factores de riesgo que puedan afectar la sanidad de los animales. 
        p Es de aclarar que, aunque se tienen actividades en común (manejo, vacunación, desparasitación), cada plan sanitario debe ser diseñado para las condiciones específicas de cada predio en singular y a su sistema de manejo, ya que las condiciones de varían entre una región y otra, inclusive entre predios.
        
    p(data-aos="fade-left").mb-5 En la figura que se muestra a continuación, se puede observar la estructura general que se recomienda para establecer un plan sanitario y los pasos para su elaboración: 

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10

        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          span #[em Estructura general para establecer plan sanitario y pasos para su elaboración]

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/2.svg', alt='Figura 5 Estructura general para establecer plan sanitario y pasos para su elaboración En la figura se observa el alcance, objetivo, consideraciones, desarrollo y registro.')

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/2-m.svg', alt='Figura 5 Estructura general para establecer plan sanitario y pasos para su elaboración En la figura se observa el alcance, objetivo, consideraciones, desarrollo y registro.')

    p(data-aos="fade-left").mb-5 En relación con la elaboración del plan sanitario se recomienda tener en cuenta la siguiente estructura:

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10

        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span #[em Estructura de un plan sanitario ]

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/3.svg', alt='')

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/3-m.svg', alt='')
    separador
    #t_6_1.titulo-segundo.color-acento-contenido
      h2 6.1  Prevención de enfermedades de control oficial

    p(data-aos="fade-left").mb-5 Las enfermedades de control oficial son aquellas que, de acuerdo con lo establecido en las normas internacionales adoptadas por Colombia, se establecen como de interés en el ámbito nacional y se disponen programas de prevención, control y erradicación. De igual manera, se establece su notificación obligatoria y registro. A continuación, encuentra el listado de enfermedades y sus características principales:

    
    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Área de cuarentena

    
    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Almacenamiento y transporte de productos biológicos y medicamentos veterinarios

    
    separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Técnicas para aplicación de medicamentos veterinarios

    separador
    #t_6_5.titulo-segundo.color-acento-contenido
      h2 6.5 Tiempo de retiro

    separador
    #t_6_6.titulo-segundo.color-acento-contenido
      h2 6.6 Notificación de efectos adversos

    separador
    #t_6_7.titulo-segundo.color-acento-contenido
      h2 6.7 Guía sanitaria de movilización interna

</template>

<script>
export default {
  name: 'Tema6',
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
