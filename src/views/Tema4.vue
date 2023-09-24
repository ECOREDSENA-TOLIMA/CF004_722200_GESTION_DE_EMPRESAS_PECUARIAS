<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Legislación laboral 
      
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-2
        img(src='@/assets/curso/temas/tema4/1.svg')
      .col-10
        p La legislación laboral en Colombia es supervisada por el Ministerio del Trabajo que imparte las normas y ejerce la supervisión de su cumplimiento; en la actualidad las organizaciones están en la obligación de capacitar a los trabajadores de forma periódica en aspectos relacionados con la seguridad y prevención de accidentes laborales. Del mismo modo, los empleados deben cumplir con los lineamientos de prevención de riesgos y su capacitación.



    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Recurso humano

    p(data-aos="fade-left").mb-5 La disposición del personal para trabajar es una de las bases de la buena producción pecuaria, tal como se evidencia en el siguiente video:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
        h2.text-center Personal
        p.text-center La disposición del personal necesario capacitado y con experiencia es de vital importancia para que se preste un servicio eﬁciente y de calidad en las unidades productivas.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop')
        p.text-center En algunas producciones no se cuenta con el personal caliﬁcado y cualiﬁcado, o se asignan personas que no cumplen con los perﬁles propuestos, lo cual diﬁculta el crecimiento y desarrollo de los procesos productivos entorpeciendo la labor productiva. 

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
        p.text-center Los requerimientos de personal en la producción animal abarcan un amplio espectro de oﬁcios, o perﬁles, desde el ámbito profesional al básico, por ejemplo, los médicos veterinarios, administradores, contadores, técnicos o tecnólogos pecuarios, personal auxiliar, operarios, aseadores, celadores, entre otros; que se encuentran desde el ámbito regional, nacional, provincial o internacional.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
        h2.text-center Capacitación constante
        p.text-center El personal de las unidades productivas debe cumplir con los criterios de los perﬁles, pero además debe estar en continua capacitación, lo cual facilitara la labor e intervención dentro de los procesos productivos.

      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop')
        h2.text-center Estabilidad, salud y seguridad
        p.text-center Pero además deben gozar de todos los beneﬁcios que la ley colombiana ha establecido para los trabajadores como lo son los programas de bienestar, salud y seguridad en el trabajo, prestaciones de salud, riesgos laborales, pensión, entre otras. Ya que estas garantizan que las personas que laboran dentro de las industrias pecuarias gozan de condiciones necesarias para ejercer su labor de forma idónea y que contribuirán en los procesos productivos por su justa remuneración.


    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Normativa 

    p(data-aos="fade-left").mb-5 El derecho al trabajo es considerado un derecho fundamental, consagrado en la Constitución Política de Colombia, que goza en todas sus modalidades, de la especial protección del Estado. De aquí se desprenden otras políticas como las enunciadas en la siguiente tabla:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2
      span #[em Normativa laboral más importante en Colombia]

    .row.justify-content-center
      .col
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr.text-center
                th Temática
                th Fuente
                th Obligaciones
                th Derechos
            tbody
              tr
                td  #[b Derecho al trabajo]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Constitución política de Colombia.
                    li 
                      i.lista-ul__vineta
                      | Convenios y tratados internacionales.
                    li 
                      i.lista-ul__vineta
                      | Legislación para el sector público y privado.
                td Obligación social.
                td Derecho fundamental.
              tr
                td  #[b Principios y derechos fundamentales en el trabajo]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Constitución política de Colombia.
                    li 
                      i.lista-ul__vineta
                      | Declaraciones de la OIT.
                    li 
                      i.lista-ul__vineta
                      | Código Sustantivo del Trabajo.
                td Obligación del Estado, empleados y trabajadores, sociedad civil en general.
                td Derecho de asociación.
              tr
                td  #[b Derecho a la seguridad social]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Constitución política de Colombia.
                    li 
                      i.lista-ul__vineta
                      | Ley 100 de 1993 y demás normas legales .
                td 
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Obligación del Estado.
                    li 
                      i.lista-ul__vineta
                      | Empleadores.
                td Salud, pensión y riesgos laborales.
              tr
                td  #[b Mínimo de derechos del trabajador]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Convenios de la Organización Internacional del Trabajo.
                    li 
                      i.lista-ul__vineta
                      | Código Sustantivo del Trabajo (1era parte).
                td Empleadores.
                td Salario, prestaciones sociales, seguridad social.
                
</template>

<script>
export default {
  name: 'Tema4',
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
