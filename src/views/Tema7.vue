<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Plan de alimentación

 

    separador
    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Buenas prácticas de alimentación animal 

    
    separador
    #t_7_2.titulo-segundo.color-acento-contenido
      h2 7.2 Almacenamiento de alimentos, materia prima e insumos pecuarios

    
</template>

<script>
export default {
  name: 'Tema7',
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
