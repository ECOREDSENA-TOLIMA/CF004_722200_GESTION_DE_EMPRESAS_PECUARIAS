<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Buenas prácticas pecuarias (tipos) 

    p(data-aos="fade-left").mb-5 La producción animal y el buen cuidado desde la gestión de la legalidad son fundamentales y por eso se requieren las buenas prácticas, tal como se observa a continuación:

    .tarjeta.tarjeta(style="background-color:#DBF9BD").p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Producción animal
            p La producción animal a nivel cosmopolita ha crecido y desarrollado teniendo en cuenta las prácticas ambientales, el bienestar animal y humano, la responsabilidad social y regional, la competitividad, la rentabilidad, la calidad de los productos, la inocuidad y trazabilidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/1.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Producción de ganado
            p El surgimiento de las BPG en el mundo se encuentran ligadas a la adopción del acuerdo internacional sobre la aplicación de las Medidas Sanitarias y Fitosanitarias – MSF, establecido por la Organización Mundial de Comercio – OMC, la cuales buscan que se establezca normativas tendientes a la inocuidad y calidad de los alimentos de origen animal y vegetal. 
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/2.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            
            p Desde la cadena primaria hasta llegar al consumidor, protegiendo la salud pública humana y animal; cada país afiliado, tiene la libertad de establecer sus leyes basados en las evidencias cientíﬁcas y en los parámetros generados por la comisión del #[em Codex Alimentarius], la Organización Mundial de  Sanidad Animal (OIE), y la Convención Internacional de protección Fitosanitaria (CIPF).
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Políticas nacionales
            p En Colombia la adopción de estas políticas se da a través de los documentos CONPES 3375 que es la Política Nacional de Sanidad Agropecuaria e Inocuidad de Alimentos para el Sistema de Medidas Sanitarias y Fitosanitarias, CONPES 3376 de 2010 Política Sanitaria y de Inocuidad para las Cadenas de la Carne y de la Leche.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/4.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Cadena porcícola
            p CONPES 3458 de 2007 Política Nacional de Sanidad e Inocuidad para la cadena porcícola, CONPES 3468 de 2007 Política Nacional de Sanidad e Inocuidad Para la Cadena Avícola, asignando además funciones a las principales instituciones que hacen parte del sistema en cada eslabón de la cadena productiva siendo garantes de que estas se apliquen de forma correcta. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/5.png', alt='Texto que describa la imagen')

    p(data-aos="fade-left").mb-5 Complementando el contexto se entiende que hay una matriz general de sistemas con jerarquías bien definidas desde la estructura general gubernamental y se evidencia en la siguiente gráfica:

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          span #[em Instituciones que hacen parte de Sistema de Medidas Sanitarias y Fitosanitarias – MSF de acuerdo con las funciones  ICA (2017)]

        figure
          img(src='@/assets/curso/temas/tema3/6.svg', alt='Figura 4 Instituciones que hacen parte de Sistema de Medidas Sanitarias y Fitosanitarias – MSF de acuerdo con las funciones ICA (2017) En la figura se observa las instituciones por niveles: Política general MPS MADR MAVDT MCIT Coordinación técnica central INVIMA INS ICA SIC Entes operativos locales ETS  Regionales ICA CAR Actividades soporte CI, Universidades Corpoica')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/instituciones_MSF__ICA_2017.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar infografía.] Instituciones que hacen parte de Sistema de Medidas Sanitarias y Fitosanitarias.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Interpretación (componentes, principios, objetivos) 

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-1
        img(src='@/assets/curso/temas/tema3/7.svg')
      .col-11
        p Las buenas prácticas ganaderas son actividades recomendadas con el propósito de disminuir riesgos físicos, químicos y biológicos en la producción primaria de alimentos de origen animal, promoviendo la sanidad, el bienestar animal y la protección del medio ambiente, pudiendo aplicarse en toda la extensión de la cadena productiva, desde el eslabón primario hasta el consumidor. 

    p(data-aos="fade-left").mb-5 Implementarlas requiere especial atención, pero se refleja en los beneficios que se evidenciarán tanto para el productor primario, como para el consumidor final del producto animal, dichos beneficios son:

    .titulo-sexto.color-acento-contenido
      h5 Figura 5
      span #[em Implementación actividades buenas prácticas]
    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure
          img(src='@/assets/curso/temas/tema3/8.svg', alt='Figura 5 Implementación de actividades buenas prácticas En la figura se observan las actividades de las buenas prácticas ganaderas, materia prima sin contaminación, mejor costo, trazabilidad, mercado global, calidad de vida animal, mejora constante, calidad de vida humana, buena imagen de productos.')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.movil(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/beneficios_buenas_practicas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[b Descargar infografía.] Beneficios de las buenas prácticas.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Implementación

    p(data-aos="fade-left").mb-5 Para hacer la implementación de las buenas prácticas ganaderas se debe realizar una planeación previa por escrito relacionando las actividades específicas de la unidad productiva, con el fin de ser utilizada como guía de cada proceso y este protocolo pueda ser verificado a través de una plantilla, la cual corrobore que la esta ha sido realizada de forma correcta. En general, los ítems que se deben tener en cuenta son: 

    .row.justify-content-center.align-items-center.mb-5p(data-aos="fade-right")
      .col-10
        .row.justify-content-center.align-items-center
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/9.png', alt='')
          .col-9
            .tarjeta(style="background-color:#DBF9BD").p-4
              h3 Sanidad animal y bioseguridad
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Inscripción del predio ante el ICA.
                li 
                  i.lista-ul__vineta
                  | Plan sanitario.
                li 
                  i.lista-ul__vineta
                  | Mantener áreas de cuarentena, manejo de animales enfermos, control 
                li 
                  i.lista-ul__vineta
                  | Animales nuevos y enfermos.
                li 
                  i.lista-ul__vineta
                  | Control y vacunación de enfermedades de control.
                li 
                  i.lista-ul__vineta
                  | Plan de bioseguridad.
                li 
                  i.lista-ul__vineta
                  | Mantenimiento de áreas vulnerables, manejo de instalaciones, materias 
                li 
                  i.lista-ul__vineta
                  | Primas, elementos y maquinaria en la producción.
                li 
                  i.lista-ul__vineta
                  | Control de plagas, insectos y roedores, animales extraños a la producción.
                li 
                  i.lista-ul__vineta
                  | Limpieza y desinfección en instalación.
                li 
                  i.lista-ul__vineta
                  | Trazabilidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .row.justify-content-center.align-items-center
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/10.png', alt='')
          .col-9
            .tarjeta(style="background-color:#DBF9BD").p-4
              h3 Plan de saneamiento
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Plan de manejo ambiental manejo integral de residuos.
                li 
                  i.lista-ul__vineta
                  | Prevención, mitigación y reparación de riesgos.
                li 
                  i.lista-ul__vineta
                  | Uso eﬁciente y responsable del agua, suelo, aire.
                li 
                  i.lista-ul__vineta
                  | Minimizar acciones que interﬁeran con la inocuidad.

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .row.justify-content-center.align-items-center
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='')
          .col-9
            .tarjeta(style="background-color:#DBF9BD").p-4
              h3 Buenas prácticas de uso de medicamentos veterinarios y alimentación animal 
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Medicamentos, biológicos, plaguicidas y alimentos deben contar con registro del ICA.
                li 
                  i.lista-ul__vineta
                  | Los medicamentos veterinarios, alimentos, biológicos y plaguicidas deben contar con etiqueta, lote, fecha de elaboración y vencimiento.
                li 
                  i.lista-ul__vineta
                  | Insumos agropecuarios almacenados correctamente y direccionados y registro de los mismos.
                li 
                  i.lista-ul__vineta
                  | Desechar correctamente los envases de medicamentos, biológicos, insecticidas, y otros productos de uso pecuario.
                li 
                  i.lista-ul__vineta
                  | Cuidar los tiempos de retiro de medicamentos, prevenir residuos en productos.
                li 
                  i.lista-ul__vineta
                  | Alimentos y agua de calidad, libre de contaminantes, biológicos, quimicos o ﬁsicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .row.justify-content-center.align-items-center
          .col-3
            figure
              img(src='@/assets/curso/temas/tema3/12.png', alt='')
          .col-9
            .tarjeta(style="background-color:#DBF9BD").p-4
              h3 Bienestar animal y personal
              ul.lista-ul
                li 
                  i.lista-ul__vineta
                  | Proporcionar condiciones de bienestar en la producción. 
                li 
                  i.lista-ul__vineta
                  | La productiva mejora de la mano de las practicas de bienestar y de la mano de obra.
                li 
                  i.lista-ul__vineta
                  | Tener en cuenta la etología y naturaleza de los animales utilizados en la produccion para brindarles condiciones de bienestar que aumenten la producción.
                li 
                  i.lista-ul__vineta
                  | Capacitar al personal para que tenga acciones apropiadas en los procesos productivos.
                li 
                  i.lista-ul__vineta
                  | Designar al personal necesario de acuerdo a los procesos productivos y el tipo de producción.

    p(data-aos="fade-left").mb-5 Para la implementación se deben tener en cuenta los requerimientos de la normativa establecida por el ICA (2021) en cada una de las resoluciones por especie en cuanto a procedimientos y documentación, así como se explica en la siguiente tabla.

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span #[em Requerimiento de procedimientos y documentos según la Resolución ICA de acuerdo a la especie.]

    .row.justify-content-center
      .col
        .tabla-b.mb-5 
          table
            thead.text-white(style="background-color:#1B3F5E")(data-aos="flip-up") 
              tr.text-center
                th Plan de implementación
                th Caprinos y Ovinos Res. 202777 / 2018
                th Porcinos Res. 76509 / 2020
                th Equinos Res. 7953 / 2017
            tbody
              tr
                td  #[b PROTOCOLOS O PROCEDIMIENTOS]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Manejo integral de plagas.
                    li 
                      i.lista-ul__vineta
                      | Cuarentena y adquisición de animales.
                    li 
                      i.lista-ul__vineta
                      | Procedimiento de identiﬁcación y atención a cambios de comportamiento - bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Plan sanitario (manejo y aislamiento anímales enfermos).
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Manejo integral de plagas.
                    li 
                      i.lista-ul__vineta
                      | Cuarentena y adquisición de animales, ingreso y aislamiento de reemplazo.
                    li 
                      i.lista-ul__vineta
                      | Procedimiento de identiﬁcación y atención a cambios de comportamiento y adaptación o aclimatación - bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Aclimatación - bienestar animal.<br>Bioseguridad.
                    li 
                      i.lista-ul__vineta
                      | Ingreso y manejo de material genético.
                    li 
                      i.lista-ul__vineta
                      | Limpieza de áreas y utensilios.
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Manejo integral de plagas.
                    li 
                      i.lista-ul__vineta
                      | Cuarentena y adquisición de animales.
                    li 
                      i.lista-ul__vineta
                      | Procedimiento de identiﬁcación y atención a cambios de comportamiento - bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Plan sanitario.
              tr
                td #[b DOCUMENTOS]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Registro Único de Vacunación RUV.
                    li 
                      i.lista-ul__vineta
                      | Prescripciones medicamentos veterinarios - fórmula médica.
                    li 
                      i.lista-ul__vineta
                      | Formulario o recetario uso de medicamentos de control especial.
                    li 
                      i.lista-ul__vineta
                      | Instructivo manejo sanitario enfermedades de control oﬁcial.
                    li 
                      i.lista-ul__vineta
                      | Resultado del análisis del agua.
                    li 
                      i.lista-ul__vineta
                      | Exámen médico personal.
                    li 
                      i.lista-ul__vineta
                      | Certiﬁcados de capacitación.
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Registro Único de Vacunación RUV.
                    li 
                      i.lista-ul__vineta
                      | Prescripciones medicamentos veterinarios - fórmula médica.
                    li 
                      i.lista-ul__vineta
                      | Formulario o recetario uso de medicamentos de control especial.
                    li 
                      i.lista-ul__vineta
                      | Instructivo manejo sanitario enfermedades de control oﬁcial.
                    li 
                      i.lista-ul__vineta
                      | Autorización aplicación de medicamentos y pequeñas intervenciones quirúrgicas.
                    li 
                      i.lista-ul__vineta
                      | Resultado del análisis del agua.
                    li 
                      i.lista-ul__vineta
                      | Certiﬁcados de capacitación.

                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Manejo integral de plagas.
                    li 
                      i.lista-ul__vineta
                      | Cuarentena y adquisición de animales.
                    li 
                      i.lista-ul__vineta
                      | Procedimiento de identiﬁcación y atención a cambios de comportamiento - bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Plan sanitario.
              tr
                td #[b REGISTROS]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Ingresos de personas y vehículos.
                    li 
                      i.lista-ul__vineta
                      | Diagnóstico de enfermedades veterinarias y mortalidad.
                    li 
                      i.lista-ul__vineta
                      | Aplicación de tratamiento o medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Manejo de potreros.
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Ingresos de personas y vehículos.
                    li 
                      i.lista-ul__vineta
                      | Diagnóstico de enfermedades veterinarias y mortalidad.
                    li 
                      i.lista-ul__vineta
                      | Aplicación de tratamiento o medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Individual o ﬁcha por animal o lote.
                    li 
                      i.lista-ul__vineta
                      | Inventario de productos y biológicos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Inventario de alimentos y materias primas.
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Ingresos de personas y vehículos.
                    li 
                      i.lista-ul__vineta
                      | Diagnóstico de enfermedades veterinarias y mortalidad.
                    li 
                      i.lista-ul__vineta
                      | Aplicación de tratamiento o medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Inventario de insumos pecuario y agrícolas.
              tr
                td #[b ACTIVIDADES DE MANEJO]
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Delimitación del predio y disposición áreas.
                    li 
                      i.lista-ul__vineta
                      | Disposición residuos.
                    li 
                      i.lista-ul__vineta
                      | Protección y conservación de fuentes de agua.
                    li 
                      i.lista-ul__vineta
                      | Plagas y roedores.
                    li 
                      i.lista-ul__vineta
                      | Manejo sanitario.
                    li 
                      i.lista-ul__vineta
                      | Manejo animal: bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Alimentación animal.
                    li 
                      i.lista-ul__vineta
                      | Elementos de bioseguridad, elementos de protección personal, seguridad y salud en el trabajo.
                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Delimitación del predio y disposición áreas.
                    li 
                      i.lista-ul__vineta
                      | Disposición residuos.
                    li 
                      i.lista-ul__vineta
                      | Protección y conservación de fuentes de agua.
                    li 
                      i.lista-ul__vineta
                      | Plagas y roedores.
                    li 
                      i.lista-ul__vineta
                      | Manejo sanitario.
                    li 
                      i.lista-ul__vineta
                      | Manejo animal: bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Alimentación animal e insumos agropecuarios. 
                    li 
                      i.lista-ul__vineta
                      | Bioseguridad.
                    li 
                      i.lista-ul__vineta
                      | Sacriﬁcio humanitario.
                    li 
                      i.lista-ul__vineta
                      | Elementos e implementos de bioseguridad, elementos de protección personal, seguridad y salud en las labores del trabajo.

                td
                  ul.lista-ul
                    li 
                      i.lista-ul__vineta
                      | Delimitación del predio y disposición áreas.
                    li 
                      i.lista-ul__vineta
                      | Disposición residuos.
                    li 
                      i.lista-ul__vineta
                      | Protección y conservación de fuentes de agua.
                    li 
                      i.lista-ul__vineta
                      | Plagas y roedores.
                    li 
                      i.lista-ul__vineta
                      | Manejo sanitario.
                    li 
                      i.lista-ul__vineta
                      | Manejo animal: bienestar animal.
                    li 
                      i.lista-ul__vineta
                      | Medicamentos veterinarios.
                    li 
                      i.lista-ul__vineta
                      | Alimentación animal e insumos agropecuarios. 
                    li 
                      i.lista-ul__vineta
                      | Elementos de bioseguridad, elementos de protección personal, seguridad y salud en el trabajo.

</template>

<script>
export default {
  name: 'Tema3',
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
