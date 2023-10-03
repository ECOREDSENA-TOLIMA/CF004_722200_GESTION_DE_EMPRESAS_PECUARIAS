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
    
    TabsA.color-acento-botones.mb-5
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Fiebre Aftosa")
        p.mb-5 Enfermedad viral, altamente contagiosa que puede afectar a los animales de pezuña hendida como los Bovinos, Ovinos, Caprinos, Porcinos, Bufalinos, Venados y Camélidos. El agente etiológico es un virus de la familia #[em Picornaviridae] genero #[em Aphtovirus] y actualmente existen siete serotipos el O, A, C, SAT1, SAT2, SAT3 y Asia1.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p Presencia de ampollas y aftas en la lengua, paladar, encías, espacios interdigitales y/o ubre. Además de los mencionados anteriormente, los animales también pueden presentar fiebre, salivación excesiva, inapetencia, disminución en la producción de carne o leche, mastitis, cojeras, deformación de los cascos.
            p Esta enfermedad es altamente contagiosa y se transmite de a través de la orina, heces, saliva y leche de los animales infectados. Su prevención se hace vacunando los animales de cualquier edad y repetir la dosis cada 6 meses.

      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Estomatitis vesicular")
        p.mb-5 Es una enfermedad que se presenta principalmente bajo los 2500 msnm. Su agente etiológico es un virus de la familia #[em Rhabdoviridae], género #[em Vesiculoris] y existen dos serotipos principales: #[em New Jersey] e Indiana. Sus principales huéspedes son, los equinos, mulares, asnales, bovinos y porcinos.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p Los signos clínicos suelen confundirse con los de la fiebre aftosa ya que los animales infectados presentan: presencia de ampollas y aftas en la lengua, paladar, encías, espacios interdigitales y/o ubre. Además de los mencionados anteriormente, los animales también pueden manifestar fiebre, salivación excesiva, inapetencia, disminución en la producción de carne o leche, mastitis, cojeras, deformación de los cascos.
            p El tratamiento de esta enfermedad es estrictamente sintomático y se realiza limpiando las heridas con una solución antiséptica y brindar alimento blando a los animales que presenten lesiones en la boca.
            
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Brucelosis")
        p.mb-5 Enfermedad infectocontagiosa, Zoonótica, crónica, producida por bacterias de morfología bacilar pertenecientes al género #[em Mycobacterium], incluyendo las especies #[em Bovis], Tuberculosis y #[em Avium]. Esta enfermedad afecta principalmente a los bovinos, ovinos, caprinos, cerdos, aves, humanos, entre otros. En los humanos se transmite por el consumo de leches crudas o quesos frescos. En los animales se transmite a través de secreciones o excreciones, también se pueden contaminar a través de objetos contaminados como suelo, agua, pasto, alimento o vía aerógena
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p Los principales síntomas son tos seca, debilidad progresiva, pérdida del apetito, fiebre fluctuante, dificultad para respirar (disnea), ganglios linfáticos grandes. Una de las lesiones más características es que en los pulmones se aprecian áreas de gran tamaño con apariencia caseificada y zonas de mineralización.
      
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Encefalopatía Espongiforme Bovina (EEB)")
        p.mb-5 Comúnmente conocida con la enfermedad de las vacas locas, esta es una enfermedad Zoonótica, exótica en Colombia, progresiva y fatal del sistema nervioso bovino. Es causada por la acumulación de una proteína anormal en el tejido nervioso y denominada Prion y se distinguen dos formas: la primera es la forma clásica que se da en los bovinos tras la ingestión del prion en piensos contaminados, específicamente ocurre cuando el alimento contiene productos derivados de bovinos como la harina de sangre o de hueso. La segunda forma es la atípica que hace referencia a la aparición de la enfermedad de forma espontánea.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p comportamiento agresivo o nervioso, falta de coordinación y dificultad para levantarse de la posición de reposo, hipersensibilidad al sonido y al tacto, movimientos espasmódicos, temblores, depresión, postura anormal, pérdida de peso, postura anormal de la cabeza, temblores y ataxia, desplazamientos en círculos, golpeo de miembros, lamido excesivo, bruxismo.
            
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Rabia silvestre")
        p.mb-5 Esta es una enfermedad viral, de tipo nervioso y que es prevenible de los mamíferos. El virus de la rabia infecta el sistema nervioso central y puede llegar a causar la muerte. Afecta a los animales domésticos como bovinos, equinos, ovinos, caprinos, porcinos, caninos y felinos. Se considera además una de las principales enfermedades Zoonóticas. La principal vía de contaminación es a través de la saliva de animales infectados, generalmente se da por mordeduras, aunque también se puede contaminar a través de las membranas mucosas (boca, nariz y ojos). En Colombia, los mayores transmisores de la enfermedad son los murciélagos hematófagos.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p cambios en su comportamiento, caída e incoordinación del tren posterior, salivación abundante, ceguera, temblores musculares y parálisis. Los animales presentan además pérdida de peso progresivo y deshidratación y posteriormente la muerte. La prevención se realiza a través de vacunación y control de murciélagos hematófagos

      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Enfermedad de <em>Newcastle</em>")
        p.mb-5 Conocida comúnmente como Peste, Moquillo o Ahogazón. La enfermedad de #[em Newcastle] es una infección altamente contagiosa y con frecuencia severa, causada por un virus de la familia de los #[em Paramyxovirus], de distribución cosmopolita. Tiene tres presentaciones: Lentogénica o leve, Mesogénica o moderada, y Velogénica o muy virulenta, el virus puede sobrevivir por largos periodos a temperatura ambiente, especialmente en las heces, pero puede ser destruido por varios agentes físicos y químicos, no resiste pH ácidos ni la exposición a temperaturas de 60 °C por más de 30 min, es sensible al éter, formalina, amonios cuaternarios, agentes fenólicos y oxidantes, clorhexidina e hipoclorito de sodio (6 %). El período de incubación es de 2 a 15 días, pero para efectos del código terrestre de la OIE es de 21.
        .tarjeta(style="background-color:#DBF9BD").p-4.mb-5
          .row.justify-content-center.align-items-center
            p En la mayor parte de países con producción avícola a escala comercial, se practica la vacunación profiláctica. Para demostrar que un país está libre de la enfermedad de #[em Newcastle], es necesaria la vigilancia conforme a las directrices del Código Sanitario para los Animales Terrestres de la OIE. En última instancia, los productores avícolas deben establecer procedimientos eficaces de bioseguridad para evitar la introducción de la enfermedad (Código Sanitario para los Animales Terrestres de la OIE).

        .row.justify-content-center.align-items-center.mb-5
          .col
            .tarjeta.BGIMG01.p-3
              .row.justify-content-around.align-items-center
                .col-auto
                  img(src="@/assets/curso/temas/tema6/5.svg").img65
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      p.mb-0 Para profundizar más sobre la enfermedad de #[em Newcastle] se recomienda leer la cartilla “Conceptos importantes para Tener en Cuenta para el Control y Diagnostico de la Enfermedad de Newcastle.” disponible en el material complementario.
                    .col-sm-auto
                      a.boton.color-acento-botones(href='https://fenavi.org/wp-content/uploads/2019/04/CONCEPTOS-IMPORTANTES-NEWCASTLE.pdf' target="_blank")
                        span Descargar 
                        i.fas.fa-file-download

      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Encefalitis Equina Venezolana (EEV)")
        p.mb-5 Es una enfermedad que afecta a los equinos y también a los humanos, es causada por un virus de la familia #[em Togaviridae]. Este virus se transmite por la picadura del mosquito. Se puede prevenir vacunando cada dos años los equinos que habitan en los municipios que se encuentran por debajo de los 1.200 msnm. Es requisito indispensable para la movilización de equinos, que se encuentren vacunados contra la EEV y deberá realizarse con un periodo de anticipación de 15 días antes de la movilización de los animales.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p En los humanos, los síntomas son fiebre mayor de 40 grados, dolor de cabeza, catarro nasal, vómito y dolores musculares. Sin embargo, algunas personas pueden presentar síntomas neurológicos como rigidez de la nuca, convulsiones, desviación ocular, nistagmos y en casos extremos, la muerte. En los equinos, los signos clínicos son fiebre, inapetencia, depresión, excitabilidad, apoyar la cabeza en paredes o superficies, caminar en círculos, movimientos masticatorios, flacidez en los labios, ojos semicerrados y orejas caídas.
      
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Peste Porcina Clásica (PPC)")
        p.mb-5 Enfermedad viral, altamente contagiosa, que afecta a cerdos domésticos y silvestres y producida por un virus de la familia #[em Flaviviridae] del género #[em Pestivirus]. Por sus características, y por no existir tratamiento, es la enfermedad más importante en los porcinos a nivel mundial. La transmisión puede hacerse por contacto directo entre los cerdos vía oral u oro nasal, aunque también se pueden contagiar por contacto indirecto.
        .tarjeta(style="background-color:#DBF9BD").p-4.mb-5 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='')
            .col-10.mb-5
              p Los signos clínicos varían dependiendo de la cepa, la edad del animal y el estado inmunitario del mismo, mostrando varias formas de la enfermedad:
        p #[b Forma hiperaguda:] Los animales muestran letargia y posteriormente la muerte en un periodo entre 24 a 48 posteriores a la infección. Aunque las lesiones suelen ser inespecíficas, se pueden encontrar congestión del tracto gastrointestinal, el hígado, y los pulmones. 
        p #[b Forma aguda:] En esta forma, los animales presentan síntomas como fiebre, letargia, hemorragias y cianosis en la piel, disnea, tos, convulsiones, ataxia, anorexia, estreñimiento seguido de diarrea con sangre, y una mortalidad de casi 100%. Las lesiones que suelen encontrarse son principalmente petequias en los riñones, vejiga, bazo, laringe y ganglios linfáticos. 
        p #[b Forma subaguda:] Los síntomas presentes en esta forma son muy parecidos a los de la forma anterior; pero con una intensidad menor. Aquí, el curso de la enfermedad es más lento y la tasa de mortalidad es menor a 30 %. Las lesiones que se encuentran son presencia de úlceras botonosas en el intestino y áreas de necrosis circulares y concéntricas muy bien delimitadas.
        p #[b Forma crónica:] Los síntomas son de curso muy lento y se presentan fiebres intermitentes, postración, apetito irregular, tos, diarrea, aborto, infecciones bacterianas secundarias y aparente recuperación con recaída y finalmente la muerte. 
        p Las lesiones que se encuentran en esta forma son ulceras botonosas en el ciego y el intestino grueso, enteritis difterioide difusa. 
        p #[b Forma transplacentaria:] Esta forma se identifica al observar lechones nacidos débiles o muertos, malformaciones fetales, momificaciones. Es importante aclarar que los lechones que sobreviven se convierten en portadores al presentar la infección congénita persistente.

      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Influenza aviar")
        p.mb-5 Es una infección viral tipo que afecta a todo tipo de aves, generalmente causa infecciones transitorias e inaparentes en aves silvestres (principalmente aves acuáticas) y no plantea serias amenazas a la salud de la vida silvestre, aves domésticas u otras especies. Sin embargo, ocasionalmente, una cepa del virus de la IA puede emerger como una significativa amenaza a las aves silvestres, la industria aviar y/o a la salud humana; estas cepas son llamadas cepas de “influenza aviar altamente patógena” (HPAI: del inglés #[em Highly Pathogenic Avian] Influenza).
        .tarjeta(style="background-color:#DBF9BD").p-4 
          p La transmisión se produce por el contacto directo con las secreciones de aves infectadas, especialmente a través de las heces o de los alimentos y el agua contaminados, se puede diseminar por el transporte de fómites contaminados tales como agua, alimentos, implementos, sacos, botas, ropa, bandejas, cajas de huevos, entre otros. El virus también está normalmente en los tractos respiratorios o intestinales de las aves silvestre que actúan como portadores, transportando largas distancias el virus al realizar sus migraciones. Los Síntomas son depresión leve a severa, disminución en consumo de alimento, tos, estornudo, lagrimeo, cresta y barbilla congestionada y edematosa, aumento en la mortalidad.
            
      .tarjeta(style="background-color:#F2FCE7").p-4(titulo="Salmonelosis")
        p.mb-5 La salmonelosis es una enfermedad causada por bacterias del género Salmonella de la cual existen más de 2.600 serotipos, siendo los más importantes en el ámbito de la avicultura y a los cuales el ICA realiza actividades de control son S. #[em Pullorum] y S. #[em Gallinarum], de una distribución cosmopolita, afecta a todo tipo de aves, con gran resistencia a la desecación, pueden sobrevivir en ambiente sobre todo en presencia de materia orgánica (heces, cascara .de huevo, cama entre otros) durante varios días, aunque es susceptible a sustancias químicas oxidantes. S. #[em Pullorum] y S. #[em Gallinarum], son inmóviles y altamente patógenas para las aves de corral, pudiendo causar altas perdidas en animales reproductores o en la progenie. Además, estas bacterias pueden infectar otras especies de aves y algunos mamíferos.
        .tarjeta(style="background-color:#DBF9BD").p-4 
          .row.justify-content-center.align-items-center
            h4.mb-5 Sus signos clínicos más representativos son
            .col-2.mb-5 
              figure  
                img(src='@/assets/curso/temas/tema6/4.svg', alt='').p-4
            .col-10.mb-5
              p En general comprenden anorexia, diarrea, deshidratación, amontonamiento, adherencia de heces a la cloaca, debilidad y muerte, pero específicamente depende del Serovar por ejemplo en Pulorosis los síntomas son diarrea blanquecina abundante, que causa “empastamiento o taponamiento” de los pollitos, dificultad para respirar, tarsos inflamados, somnolencia, depresión y con crecimiento retardado, nódulos grisáceos blanquecinos en corazón, pulmones, hígado, paredes de molleja e intestino.

    .row.justify-content-center.align-items-center.mb-5
      .col
        .tarjeta.BGIMG01.p-3
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/tema6/6.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 La alerta temprana es la forma de llamar a las acciones que deben ser tenidas en cuenta con prioridad para el beneficio de las diferentes fincas evitando la propagación de alguna enfermedad o virus; por ello, se recomienda contactar de inmediato al Instituto para reportar la urgencia en caso de evidenciar cualquiera de las enfermedades vistas hasta el momento, directamente en la página del ICA
                .col-sm-auto
                  a.boton.color-acento-botones(href='https://www.ica.gov.co/' target="_blank")
                    span Descargar 
                    i.fas.fa-file-download

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 7
          span #[em Sistema de alerta temprana]

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/7.jpg', alt='')
              figcaption Nota. Tomada de ICA (s.f.).

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            a.anexo.mb-4(:href="obtenerLink('/downloads/sistema_alertas_tempranas.jpg')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[b Descargar Figura 7.] Sistema de alerta temprana 

    separador
    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Área de cuarentena

    p(data-aos="fade-left").mb-5 La cuarentena pecuaria comprende todas aquellas medidas encaminadas a regular, restringir o prohibir la producción o la importación de animales y sus productos y, restringir el movimiento o existencia de estos, con la finalidad de prevenir la introducción, dispersión o diseminación de enfermedades u otros organismos que afectan o puedan afectar la sanidad animal del país.

    .row.mb-5.align-content-center
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/8.svg' alt='')
      .col-md-9(data-aos="fade-right")
        p El área de cuarentena es un área física y específica de la producción en donde se deben cumplir unas condiciones de aislamiento de los animales que ingresan nuevos al predio, o que se sospecha que tienen alguna enfermedad o condición contagiosa.
        p En cuanto a los requisitos estructurales, esta área debe estar separada de otras zonas donde haya animales, y por supuesto, a una distancia prudente, dependiendo de la especie animal y la capacidad de difusión en el aire de posibles agentes patógenos.
        p Esta zona debe estar delimitada por muros, vallas o alambrados, con puerta y un aviso en la entrada que alerte sobre la prohibición del ingreso de personal no autorizado. Estas medidas son muy importantes ya que se pueden diseminar los agentes patógenos por toda la producción. Debe tener una zona de cargue y descargue de animales y en lo posible contar con un vestier donde el operario pueda realizar el cambio de vestuario y botas y si se requiere, ducharse.
        
    
    separador
    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Almacenamiento y transporte de productos biológicos y medicamentos veterinarios

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .bloque-texto-h.color-secundario.p-4
          .bloque-texto-h__texto.mb-2
            p Los medicamentos son sustancias utilizadas para curar a los animales y su administración puede ser interna o externa. Por otra parte, los biológicos son sustancias utilizadas para la prevención de enfermedades, como por ejemplo las vacunas. Los medicamentos veterinarios que se utilizan y comercializan en Colombia, deben estar registrados ante el Instituto Colombiano Agropecuario (ICA) y deberán emplearse aplicando las buenas prácticas para el uso de medicamentos veterinarios.
            br
            br
            p Pueden clasificarse de acuerdo con: su naturaleza (farmacológico o inmunológico); su vía de administración (oral, inyectable, ocular, por nebulización), sus propiedades (analgésico, antiparasitario, anestésico), su forma farmacéutica (polvo oral, premezcla medicamentosa, aerosol, comprimido, entre otros).

    p(data-aos="fade-left").mb-5 Los medicamentos tienen varias formas de presentación, y se clasifican según su forma de elaboración así:

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/9.svg', alt='Polvos o sólidos: Suelen estar en forma de comprimidos, tabletas o polvos. En esta forma de presentación, podemos encontrar algunos antibióticos, vitaminas, antiparasitarios, promotores del crecimiento, entre otros. Liofilizados: Son tabletas sólidas en las cuales se envasan al vacío las vacunas vivas o modificadas. Líquidos: Pueden ser para administración oral e inyectable: En esta forma de presentación podemos encontrar antibióticos, vitaminas, protectores hepáticos, antiinflamatorios, entre otros.')

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/9-m.svg', alt='Polvos o sólidos: Suelen estar en forma de comprimidos, tabletas o polvos. En esta forma de presentación, podemos encontrar algunos antibióticos, vitaminas, antiparasitarios, promotores del crecimiento, entre otros. Liofilizados: Son tabletas sólidas en las cuales se envasan al vacío las vacunas vivas o modificadas. Líquidos: Pueden ser para administración oral e inyectable: En esta forma de presentación podemos encontrar antibióticos, vitaminas, protectores hepáticos, antiinflamatorios, entre otros.')

    p(data-aos="fade-left") Las condiciones de almacenamiento, transporte y conservación deben ajustarse a las especificaciones que figuran en la etiqueta, en particular las relativas a la temperatura, luz y humedad.
    p(data-aos="fade-left").mb-5 Todos los productos veterinarios deben almacenarse en instalaciones seguras y mantenerse bajo llave fuera del alcance de los niños y los animales. Los medicamentos se almacenan separados de los plaguicidas, fertilizantes y alimentos.

    separador
    #t_6_4.titulo-segundo.color-acento-contenido
      h2 6.4 Técnicas para aplicación de medicamentos veterinarios

    p(data-aos="fade-left").mb-5 Se debe tener muy en cuenta que, “con el uso de medicamentos en las especies pecuarias, se pueden generar algunos riesgos que están principalmente vinculados con su manipulación y administración” (Invima, 2020). Por lo anterior, las autoridades competentes deben establecer y aplicar la regulación sobre las buenas prácticas de uso de medicamentos veterinarios

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-2
        img(src='@/assets/curso/temas/tema6/10.svg')
      .col-10
        .cajon.color-primario.p-4
          p Para poder aplicar las técnicas de aplicación de medicamentos veterinarios se deben tener en cuenta factores como la seguridad, el costo, la efectividad, la especie que se vaya a tratar, el tipo de enfermedad (agudo o crónico), el manejo (dominancia sobre el animal), la vía de administración y la forma farmacéutica.

    p(data-aos="fade-left").mb-5 Las vías de aplicación de medicamentos varían dependiendo de la especie animal; sin embargo, las principales vías de aplicación de medicamentos son:

    AcordionA(tipo="a" clase-tarjeta="tarjeta")(style="background-color:#DBF9BD")(data-aos="fade-right").mb-5
      .row.justify-content-center(titulo="Intra alar")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/11.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Se realiza punzando la membrana del ala. Específicamente, en medio del triángulo formado por el pliegue que aparece al abrir el ala. Este método es el utilizado para realizar vacunaciones contra Viruela Aviar y se realiza con aplicador de doble estilete que previamente debe ser introducido en el frasco que contiene la vacuna.
      
        
      .row.justify-content-center(titulo="Intra mamaria")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/17.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Con la ayuda de un catéter de pezón, se aplica el medicamento en los pezones del animal. Esta técnica es muy utilizada para tratar casos de mastitis o secados de vacas productoras de leche.
      
      .row.justify-content-center(titulo="In ovo")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/18.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Se inyecta a los embriones en su último estado de incubación.
      
      .row.justify-content-center(titulo="Intra nasal")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/19.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p El medicamento se aplica por los orificios nasales. Las formas más utilizadas son en gotas, nebulizaciones o también se puede emplear el uso de una jeringa para medicamentos líquidos y se utilizan principalmente en especies pecuarias que presenten problemas respiratorios.

      .row.justify-content-center(titulo="Oftálmica")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/20.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Método de aplicación muy utilizado en aves y consiste en aplicar directamente el medicamento sobre el ojo del animal, la presentación del medicamento viene en gotas, se utiliza en vacunaciones e infecciones oculares. Es de manejo individual y en las aves se utiliza principalmente para vacunar contra enfermedades como #[em Newcastle, Gumboro], bronquitis, entre otras.
      
        
      .row.justify-content-center(titulo="Ótica")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/21.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p El medicamento es aplicado en el oído y suele utilizarse mayormente en infecciones de oído medio o externo.
      
      .row.justify-content-center(titulo="Oral")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/22.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p El medicamento se aplica por la boca o pico, según sea el caso, y se emplean presentaciones en forma de pastillas, polvos, jarabes, suspensiones. En las aves es la principal vía de administración.
      
      .row.justify-content-center(titulo="Rectal")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/23.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Se aplica el medicamento por el recto y, se utiliza en formas de supositorios o lavados.

      .row.justify-content-center(titulo="Tópica")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/24.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Se aplica sobre la piel del animal y su presentación puede ser en crema, líquido, aerosol, o polvo. Esta vía de aplicación se utiliza principalmente en heridas.
      
      .row.justify-content-center(titulo="Intra vaginal e Intrauterina")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/25.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Con la ayuda de un catéter, se aplica el medicamento directamente por la vagina del animal o en el caso de ser intrauterina, se continúa introduciendo el catéter pasando por el cuello uterino hasta llegar al útero y poder depositar allí el medicamento. Esta técnica se utiliza principalmente en casos de metritis o infecciones vaginales.

      .row.justify-content-center(titulo="Vía parenteral")
        .col-11
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema6/26.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p Esta vía implica la ruptura de las barreras del organismo, la piel y las mucosas para depositar las sustancias en tejidos o cavidades internas del organismo inyectando el medicamento a través de una punción utilizando aguja y jeringa desechables.

    p(data-aos="fade-left").mb-5 En relación a la vía #[b parenteral], hay varios elementos que se deben tener en cuenta, así como los diversos ángulos de aplicación de medicamentos, tal como se informa a continuación:

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10
        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema6/12.svg', alt='')

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            a.anexo.mb-4(:href="obtenerLink('/downloads/infografia_interpretacion.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Descargar infografía.] Vías de aplicación de medicamentos parenteral. 

    p(data-aos="fade-left").mb-5 Posterior a definir la técnica a trabajar se requiere definir la vía de administración, se pueden apreciar las más frecuentes como:

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-10
        .row.justify-content-center
          .col-3
            h3 Ganado avícola
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Oral
              li 
                i.fas.fa-check
                | Ocular 
              li 
                i.fas.fa-check
                | Intra nasal
              li 
                i.fas.fa-check
                | Subcutáneo 
              li 
                i.fas.fa-check
                | Intramuscular
              li 
                i.fas.fa-check
                | Intra alar
          .col-3
            img(src="@/assets/curso/temas/tema6/13.svg").p-5
          .col-3 
            h3 Ganado bovino
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Oral
              li 
                i.fas.fa-check
                | Intramuscular
              li 
                i.fas.fa-check
                | Intravenoso
          .col-3
            img(src="@/assets/curso/temas/tema6/14.svg")

          .col-3
            h3 Ganado porcino
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Oral
              li 
                i.fas.fa-check
                | Intramuscular
              li 
                i.fas.fa-check
                | Intravenoso
          .col-3
            img(src="@/assets/curso/temas/tema6/15.svg")
          .col-3 
            h3 Ganado equino
            ul.lista-ul--color
              li 
                i.fas.fa-check
                | Oral
              li 
                i.fas.fa-check
                | Subcutáneo 
          .col-3
            img(src="@/assets/curso/temas/tema6/16.svg")

    separador
    #t_6_5.titulo-segundo.color-acento-contenido
      h2 6.5 Tiempo de retiro

    p(data-aos="fade-left").mb-5 Es el tiempo de reposo de forma aislada que debe tener el animal, cuenta desde el momento de la aplicación del medicamento, hasta la eliminación de su organismo, es importante tener en cuenta la concentración del producto médico, para que no infrinja el Límite Máximo de Residuos (LMR) en los tejidos del animal, esto tiene el fin de evitar que esa carne o esos productos dependientes de los animales, no afecten la salud de los seres humanos o de los animales con los que haya tenido contacto. Este tiempo debe ser respetado tal como se enuncia a continuación:

    .tarjeta.tarjeta(style="background-color:#DBF9BD").p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h5 Tiempo de retiro
            p La producción animal a nivel cosmopolita ha crecido y desarrollado teniendo en cuenta las prácticas ambientales, el bienestar animal y humano, la responsabilidad social y regional, la competitividad, la rentabilidad, la calidad de los productos, la inocuidad y trazabilidad.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/27.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 #[em Codex alimentarius]
            p Cabe resaltar que la FAO en su #[em #[b CODEX ALIMENTARIUS CX/MRL 2-2018]], establece los límites máximos de residuos y las recomendaciones sobre la gestión de riesgos para residuos de medicamentos veterinarios en los alimentos. De igual manera, en Colombia existe la Resolución 1382 de 2013, por la cual se establecen los límites máximos para residuos de medicamentos veterinarios en los alimentos de origen animal, destinados al consumo humano.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/28.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Uso responsable
            p Los medicamentos se deben utilizar de forma responsable, pues existen algunos productores que tienen la creencia que siempre se debe aplicar mucho más de la dosis recomendada en la etiqueta y, por consiguiente, el tiempo de retiro será diferente, ya que este deberá ser ajustado a la cantidad de medicamento de que se administró al animal.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/29.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Carne
            p En el caso de la carne, el tiempo de retiro debe ser el transcurrido entre la última aplicación de un medicamento veterinario a un animal, y el momento de sacrificio de este para consumo humano.
        
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/30.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h5 Alimentos
            p En cuanto a la leche, los huevos y la miel, el tiempo de retiro hace referencia al periodo durante el cual debe descartarse la leche, los huevos o la miel, esto con el fin de que los residuos de medicamento y/o sus metabolitos, alcancen niveles de inocuidad aceptados internacionalmente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema6/31.png', alt='Texto que describa la imagen')

    separador
    #t_6_6.titulo-segundo.color-acento-contenido
      h2 6.6 Notificación de efectos adversos

    p(data-aos="fade-left").mb-5 Las notificaciones o denuncias de casos que se presentan en los animales con sintomatología compatible o atribuible a enfermedades de notificación oficial según Resolución ICA 3714 del 2015, debe realizarse en las oficinas del Instituto Colombiano Agropecuario – ICA, las personas que se encuentran en la obligación de realizar esta acción son:
    .row.justify-content-center
      .col-10
        .row.justify-content-center.align-items-center
          .col-3
            img(src="@/assets/curso/temas/tema6/32.svg")
          .col-9
            ul.lista-ul--color
              li 
                i.fas.fa-atom(style="color:#8D007B")
                | Personas responsables, encargados o propietarios de los animales afectados, ya sea en grandes, medianas o pequeñas producciones.
                <hr style="border:15px;">
              li 
                i.fas.fa-atom(style="color:#8D007B")
                | Los médicos veterinarios, médicos veterinarios zootecnistas o profesionales en el área que atiendan producciones o presten asistencia técnica ya sea pública o privada. 
                <hr style="border:15px;">
              li 
                i.fas.fa-atom(style="color:#8D007B")
                | Cualquier autoridad local, regional o nacional.
                <hr style="border:15px;">
              li 
                i.fas.fa-atom(style="color:#8D007B")
                | Responsables o encargados de los laboratorios diagnósticos veterinarios públicos o privados. 
                <hr style="border:15px;">
              li 
                i.fas.fa-atom(style="color:#8D007B")
                | Cualquier persona con conocimiento de aves enfermas o aparentemente afectadas por enfermedades de notificación.
                <hr style="border:15px;">

    separador
    #t_6_7.titulo-segundo.color-acento-contenido
      h2 6.7 Guía sanitaria de movilización interna
    
    p(data-aos="fade-left") Para garantizar las condiciones de salubridad y seguridad de los animales, el ICA diseñó un formato denominado Guía Sanitaria de Movilización Interna (GSMI). Este documento contiene información sobre el lugar de origen de los animales y las condiciones sanitarias en las que se entregan estos; para evitar propagación de enfermedades. En este formato se consignan datos como número de animales, género, predio de procedencia, destino final (transporte a otro predio o sacrificio), registro de vacunación, ruta de transporte, y destino final.

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-2
        img(src='@/assets/curso/temas/tema6/33.svg').p-5
      .col-10
        p Para que el ICA pueda emitir el aval para la guía de movilización, es necesario cumplir con los siguientes requisitos: que no haya presencia de focos de enfermedades en el predio, que este se encuentre registrado oficialmente ante el ICA, registro de vacunación vigente, inspecciones clínicas a los animales, registro de cuarentenas.

    p(data-aos="fade-left").mb-5 Es de aclarar que esta guía solamente es válida para un solo vehículo y para un solo trayecto y aplica para la fecha autorizada. Sin embargo, un solo vehículo podrá transportar animales con diferentes GSMI, de diferentes orígenes y con diferentes destinos y se debe cumplir con los siguientes requisitos:

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/34.svg', alt='1. Que el origen y el destino cuenten con igual condición sanitaria en cuanto a las enfermedades de control oficial y se encuentre dentro de las mismas zonificaciones declaradas por el ICA. 2. Que se identifiquen los lugares de origen y de destino en la ruta para la movilización de animales. 3. Que los lugares de origen y destino no tengan requisitos sanitarios especiales para autorizar la movilización o para obtener la GSMI. 4. Que las GSMI expedidas se encuentren vigentes dentro del tiempo autorizado para la movilización de los animales.')

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        figure
        img(src='@/assets/curso/temas/tema6/34-m.svg', alt='1. Que el origen y el destino cuenten con igual condición sanitaria en cuanto a las enfermedades de control oficial y se encuentre dentro de las mismas zonificaciones declaradas por el ICA. 2. Que se identifiquen los lugares de origen y de destino en la ruta para la movilización de animales. 3. Que los lugares de origen y destino no tengan requisitos sanitarios especiales para autorizar la movilización o para obtener la GSMI. 4. Que las GSMI expedidas se encuentren vigentes dentro del tiempo autorizado para la movilización de los animales.')
        
    p(data-aos="fade-left").mb-5 La expedición de la GSMI se puede expedir de dos formas:

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-8
        .tarjeta(style="background-color: #E7EAE4").p-5.mb-5
          h4 1. Presencial en la oficina local del ICA o convenio:
          p #[b Paso 1:] Tener registrado el predio ante el ICA. 
          p #[b Paso 2:] Presentar la cédula de ciudadanía del titular de los animales o del apoderado. 
          p #[b Paso 3:] Presentar soporte de pago de la GMSI. 
          p #[b Paso 4:] Informar el destino de la movilización, número de animales, edad y especie a movilizar.
          p #[b Paso 5:] Informar el nombre del conductor y datos del vehículo.
          p #[b Paso 6:] Firmar recibo de satisfacción de la GSMI.
        .tarjeta(style="background-color: #E7EAE4").p-5
          h4 2.	En línea, a través de su plataforma Sigma:
          p #[b Paso 1:] Ingresar al enlace https://www.ica.gov.co/servicios_linea/sigma/manuales.aspx para descargar el acta de confidencialidad de usuarios y obtener información adicional. 
          p #[b Paso 2:] Diligenciar el acta de confidencialidad. 
          p #[b Paso 3:] Enviar el acta escaneada y el documento de identificación al correo electrónico mesadeayuda.sigma@ica.gov.co. 
          p En un tiempo estimado de 24 horas, recibirá a vuelta de correo el usuario y contraseña para poder ingresar a Sigma en línea y continuar con el trámite para expedir la guía de movilización.
      .col-4
        img(src='@/assets/curso/temas/tema6/35.svg')
       
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
