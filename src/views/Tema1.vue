<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producción pecuaria
      
    p(data-aos="fade-left") Este es el término que se la da a la vinculación de diversos factores relevantes para el proceso productivo pecuario, estos procesos son los sistemas de producción, las buenas prácticas ganaderas, el bienestar, el reconocimiento de los factores de riesgo sanitario, las enfermedades de notificación especial, la bioseguridad, el manejo de la alimentación, nutrición y el aprovechamiento de los datos que se generan en cada uno de los pasos del proceso productivo, entre otros; lo anterior hace necesario un punto de encuentro de todos estos procesos en un solo cronograma de trabajo y en una sola consecución de recursos que permitan realizar la misión de la empresa pecuaria en general buscando llevar organizadamente la producción, logrando ser más eficiente y productivo.
    p(data-aos="fade-left").mb-5 Dentro de las características más reconocidas del sector pecuario se pueden citar las siguientes: 

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      span #[em Principales características del sector pecuario]

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/1.svg', alt='Figura 1 Principales características del sector pecuario En la figura se observa como características: Está dentro del sector primario de la economía. Este sector es protagonista y principal motor de la actividad económica. Es un subsector que se integra con el sector agropecuario. Es de los sectores más antiguos que existen, y de mayor relevancia. Integra las actividades con la ganadería.')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/1-m.svg', alt='Figura 1 Principales características del sector pecuario En la figura se observa como características: Está dentro del sector primario de la economía. Este sector es protagonista y principal motor de la actividad económica. Es un subsector que se integra con el sector agropecuario. Es de los sectores más antiguos que existen, y de mayor relevancia. Integra las actividades con la ganadería.')

    .row.justify-content-center.align-items-center.mb-5
      .col-10 
        .cajon.color-primario.p-4
          p(data-aos="fade-left") Entonces, se puede decir que las actividades más destacables y populares dentro de este sector son las producciones, bovinas, porcinas, ovinas y avícolas.  

    p(data-aos="fade-left").mb-5 Actividades destacadas de la producción pecuaria: 

    SlyderC.mb-5(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        imagen: require('@/assets/curso/temas/tema1/2.png'),
        leyendaImagen: 'Bovina',
      },
      {
        imagen: require('@/assets/curso/temas/tema1/3.png'),
        leyendaImagen: 'Porcina',
      },
      {
        imagen: require('@/assets/curso/temas/tema1/4.png'),
        leyendaImagen: 'Ovina',
      },
      {
        imagen: require('@/assets/curso/temas/tema1/5.png'),
        leyendaImagen: 'Avícola',
      },
    ],
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
