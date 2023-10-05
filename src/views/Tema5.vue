<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Programa de producción (concepto y características) 
    
    .row.mb-5.align-content-center
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/1.svg' alt='')
      .col-md-9(data-aos="fade-right")
        p.mb-3 El programa de producción es la actividad principal en la que se reúnen todos los recursos y procesos de la empresa pecuaria que incluyen producción, entre ellos la mano de obra, materias primas, logística, capital o cualquier otra actividad; todas estas actividades se establecen en un lapso de tiempo y en un orden que la da forma al programa en tiempo y jerarquía de procesos, por lo general de ahí se saca un cronograma que será la piedra angular, este es el programa de producción. 
        .tarjeta.p-4(style="border-radius: 0; background-color:#DBF9BD").mb-3
          p En él se define la necesidad de recursos para cada etapa productiva, en pro de garantizar una operación continua sin interrupciones producto de situaciones previsibles. De esta forma, el programa de producción mitiga los riesgos asociados a la escasez de insumos y personal, así como el incumplimiento de los compromisos adquiridos con terceros por falta de planeación 
        p.mb-3 Su diseño está sometido a los requerimientos efectuados por el área comercial; la satisfacción de la demanda determina los niveles de producción apropiados y la cantidad de recursos y capital necesarios para dar cumplimiento con las expectativas de naturaleza comercial. Así, el programa contempla las exigencias de cada línea productiva, proponiendo la secuencia para la ejecución de labores que resulte más eficiente para optimizar la consecución de los resultados. 
        
    separador
    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Plan de producción 

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-1
        img(src='@/assets/curso/temas/tema5/2.svg')
      .col-11
        p En él se plasman las directrices del programa de producción, definiendo las actividades a llevar a cabo por cada uno de los perfiles involucrados. Su elaboración demanda un conocimiento profundo del área, por cuanto será necesario establecer objetivos individuales para cada fase y determinar el sistema que resulte en la mayor optimización de recursos y tiempo necesarios para llevar a cabo la producción. Esto implica asignar a los funcionarios adecuados y comprender todas las interacciones que se desprendan de la ejecución del trabajo, de tal forma que los tiempos establecidos puedan ser cumplidos a cabalidad. 

    p(data-aos="fade-left").mb-5 Un plan de producción puede ser elaborado en función de diferentes horizontes de tiempo, y alcanzar diferentes resultados a partir de ello; sustancialmente podemos distinguir tres (3) categorías: 

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta")(style="background-color: #DBF9BD")
          .row(titulo="El plan agregado de producción o Production Plan (PP)")
            .col.mb-4.mb-md-0
              p Se extiende a un año y tiene como objeto de planiﬁcación parámetros cuantitativos muy agregados (número de unidades producibles, toneladas de producto acabado, etc., a nivel total o por familias de producto). El objetivo del plan agregado es conciliar la demanda de capacidad productiva (que depende de la demanda de mercado) con la disponibilidad efectiva (expresada en horas-hombre o máquina).

          .row(titulo="El plan principal de producción o Master Production Schedule (MPS)")
            .col
              p Concierne a un horizonte temporal limitado (3-4 meses) y tiene como objeto cada uno de los productos acabados. En particular, el MPS tiene el objetivo de dimensionar todos los lotes productivos.
              
          .row(titulo="El plan ﬁnal de monitorización o Final Assembly Schedule (FAS)")
            .col
              p Concierne a un horizonte temporal muy breve (1 mes) y tiene como objeto el ensamblaje-conﬁguración del producto acabado. La tarea típica del plan es la selección de los modos de elaboración de los pedidos.

    p(data-aos="fade-left").mb-5 La característica principal del proceso de planificación de la producción es su carácter cíclico; es decir, que un mismo período puede ser objeto de varias planificaciones sucesivas con crecientes grados de definición. Podemos hablar de fases de planificación y control de la producción: cada fase se abre con la planificación de un período y se concluye con el control que abre la planificación del período siguiente.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Programación de actividades pecuarias

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-2
        img(src='@/assets/curso/temas/tema5/3.svg')
      .col-10
        .tarjeta.color-secundario.p-4(style="border-radius:0")
          p Para elaborar la programación de las actividades pecuarias es necesario seguir algunos pasos con el fin de estructurar estratégicamente un plan que incluya factores como las necesidades de recursos y el cronograma de actividades de acuerdo con los procesos productivos desarrollados, las fases del mismo y el perfil del personal que está disponible, etc. La siguiente infografía muestra en detalle los pasos a seguir en la construcción de la programación:

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/4.svg', alt='?')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/4-m.svg', alt='?')

    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Métodos y especificaciones

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-2
        img(src='@/assets/curso/temas/tema5/6.svg')
      .col-10
       .bloque-texto-d.color-gris.p-4
          .bloque-texto-d__texto.mb-2
            p.text-regular Para iniciar se debe definir principalmente la cantidad de aspectos de la producción, especificando a cuál se quiere incursionar, si en la equina, porcina, ovina, avícola, bovina o caprina y qué actividad productiva se va a ejecutar: leche, crías y levante, producción de carne, huevo, lana, etc. Pero además qué tipo de sistema se va a utilizar: intensivo, extensivo, semiintensivo, en piso, pastoreo por franjas, sistemas silvopastoriles, en corral, etc., si la empresa es propia, en compañía o por arrendamiento, etc. Una vez aclarado estos puntos se podrán precisar la ubicación más apropiada para las instalaciones de la unidad productiva, así como las instalaciones y sus adecuaciones, elementos, materiales, insumos, razas más apropiadas de animales, cantidad de los mismos, entre otras cosas.

    p(data-aos="fade-left").mb-5 Ya a partir de aquí, se pueden tener en cuenta las siguientes especificaciones para programar la producción:
    
    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | #[b Plan de acción.] En esta herramienta se plasman y agendan las actividades diarias, semanales, mensuales y anuales trazándolas en una línea de tiempo determinada, en donde preguntas como qué se va a producir, qué productos se va a ofrecer y cómo, cuál será la línea de comercialización. Además, hay otros procesos que deben ser realizados como el registro de costos, gastos, presupuesto y en cuanto a personal conocer el número de trabajadores, perfiles, cargos, remuneraciones, horarios y demás.
          li 
            i.fas.fa-check
            | #[b Ejecución.] Luego de que se hayan realizado con éxito las actividades anteriores se debe dar marcha a la ejecución del plan procurando que todo sea exitoso. También es posible realizar cambios y modificaciones en caso de que ciertos aspectos o actividades no estén funcionando, hasta llegar a desarrollar un plan o estrategia efectiva para su modelo de negocio.
              
    .text-decor.text-white.text-center(data-aos="flip-up").mb-5
      p.mt-3.p-2 Labores pecuarias

    p(data-aos="fade-left") Las labores pecuarias se refieren a esas actividades relacionadas con la fase económica de la ganadería. Son una derivación principal de las labores agropecuarias y forman parte integral del sector primario de la economía. Estas labores cumplen un papel de vital importancia en las comunidades rurales ayudándoles a mejorar la alimentación, ingresos, productividad, transporte, trabajo, entre otras, lo cual se traduce en bienestar.
    p(data-aos="fade-left").mb-5 Desde el punto de vista objetivo las labores pecuarias ocupan un lugar importante en los siguientes aspectos:

    .titulo-sexto.color-acento-contenido
      h5 Figura 4
      span #[em Importancia de las labores pecuarias]

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/7.png', alt='Figura 4 Suministro de alimentos Ofrece un gran aporte en el abastecimiento de producto alimenticio contribuyendo a la nutrición a través del suministro de proteínas como leche, huevos y carne además de otros productos de consumo como pieles, abonos y fertilizantes. Producción agrícola La utilización del ganado y sus subproductos como las heces, es importante en la producción agrícola, mejorando la estructura y fertilidad del suelo, el ganado también se usa como transporte, llevando insumos, productos agrícolas y/o personas. Destacándose, además, que estas labores contribuyen al medio ambiente. Seguridad financiera El ganado en sí, representa un activo y, por ende, se puede convertir en efectivo o ser garante para un préstamo, lo cual es de importancia en la encomia familiar rural.')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/7-m.png', alt='Figura 4 Suministro de alimentos Ofrece un gran aporte en el abastecimiento de producto alimenticio contribuyendo a la nutrición a través del suministro de proteínas como leche, huevos y carne además de otros productos de consumo como pieles, abonos y fertilizantes. Producción agrícola La utilización del ganado y sus subproductos como las heces, es importante en la producción agrícola, mejorando la estructura y fertilidad del suelo, el ganado también se usa como transporte, llevando insumos, productos agrícolas y/o personas. Destacándose, además, que estas labores contribuyen al medio ambiente. Seguridad financiera El ganado en sí, representa un activo y, por ende, se puede convertir en efectivo o ser garante para un préstamo, lo cual es de importancia en la encomia familiar rural.')
</template>

<script>
export default {
  name: 'Tema5',
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
