<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Registro, seguimiento y mejora del desempeño ambiental
      
      .bloque-texto-g.bloque-texto-g--inverso.bg-color-2.p-3.p-sm-4.p-md-5.mb-0.br-1.br-2(data-aos='fade-right')
        .bloque-texto-g__img.br-1.d-none.d-lg-block(
          :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La aplicación de prácticas de sostenibilidad requiere disponer de información que permita conocer las condiciones encontradas durante el recorrido, documentar situaciones relevantes o verificar el cumplimiento de las medidas previstas. El registro, el reporte y el seguimiento cumplen funciones complementarias dentro de este proceso: el registro conserva datos de la operación; el reporte comunica situaciones que requieren conocimiento o actuación; mientras que el seguimiento permite valorar posteriormente el comportamiento ambiental de la actividad.
          p.mb-0 Estos mecanismos favorecen la trazabilidad de las acciones implementadas. Además, proporcionan información para reconocer situaciones recurrentes, identificar desviaciones o sustentar decisiones orientadas a mejorar el manejo ambiental de los escenarios turísticos (Ministerio de Comercio, Industria y Turismo [MINCIT], 2020).
      
      
      
      
      
      
      
      
      
      
      
      Separador
      #t_4_1.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 4.1 Registro y seguimiento ambiental
      
      p.mb-5(data-aos='fade-right') El registro, el reporte y el seguimiento permiten organizar la información generada durante la actividad y utilizarla posteriormente para verificar las prácticas implementadas, comunicar situaciones relevantes y reconocer cambios que requieran atención.

      .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/3.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 El registro ambiental consiste en documentar de manera organizada información relevante obtenida antes, durante o después de la actividad turística. Su finalidad es conservar evidencia sobre las condiciones del escenario, las medidas implementadas, las situaciones presentadas o los resultados de las verificaciones realizadas.
            p.mb-0 No toda observación necesita convertirse en un registro extenso. La información recopilada debe responder a una finalidad concreta y consignarse de manera que pueda resultar útil para posteriores procesos de verificación o seguimiento.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.png')
      p.mb-5(data-aos='fade-right') Un registro adecuado debe caracterizarse por ser claro, pertinente, objetivo, legible y verificable. Las apreciaciones generales deben evitarse cuando sea posible consignar información concreta. Por ejemplo, registrar “presencia de residuos en la zona de llegada” proporciona mayor utilidad que indicar únicamente “el lugar estaba en malas condiciones”.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de registros

      img(src='@/assets/curso/temas/t4/4.png').d-none.d-lg-block.mb-5(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') Los registros pueden adoptar diferentes formatos dependiendo de las necesidades de la operación. Entre ellos se encuentran listas de verificación, bitácoras, fichas de recorrido, formatos de novedades, registros fotográficos autorizados o herramientas digitales.
      p.mb-5(data-aos='fade-right') La información que se incorpora en estos registros puede organizarse de acuerdo con diferentes campos asociados con las características del recorrido y las situaciones presentadas durante la operación.
      
      
      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Datos para el registro ambiental

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/5.png')
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-4.p-4(titulo="Identificación")
              p.mb-0 Fecha, recorrido, escenario o sector.

            .tarjeta.bg-color-4.p-4(titulo="Condiciones ambientales")
              p.mb-0 Estado relevante del suelo, vegetación, agua, fauna u otros componentes.

            .tarjeta.bg-color-4.p-4(titulo="Operación")
              p.mb-0 Número de participantes, duración o sectores utilizados.

            .tarjeta.bg-color-4.p-4(titulo="Medidas aplicadas")
              p.mb-0 Acciones de prevención, mitigación, corrección o control implementadas.

            .tarjeta.bg-color-4.p-4(titulo="Medidas aplicadas")
              p.mb-0 Situaciones ambientales presentadas durante el recorrido.

            .tarjeta.bg-color-4.p-4(titulo="Novedades")
              p.mb-0 Cambios o condiciones que requieran atención posterior.

            .tarjeta.bg-color-4.p-4(titulo="Evidencias")
              p.mb-0 Fotografías, listas de verificación u otros soportes autorizados.
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/7.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La estandarización de los formatos facilita comparar información obtenida en diferentes recorridos. Cuando cada registro utiliza criterios distintos, resulta más difícil determinar si una condición se mantiene, aumenta o disminuye con el tiempo.
            p.mb-0 El reporte ambiental organiza y comunica información relacionada con una situación, hallazgo, contingencia o resultado que requiere ser conocido por otra persona o instancia. A diferencia del registro, cuya función principal consiste en conservar información, el reporte tiene una finalidad principalmente comunicativa o de gestión.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/6.png')
      
      p.mb-5(data-aos='fade-right') Un reporte puede originarse, por ejemplo, ante el deterioro recurrente de un sector, una contingencia, incumplimiento de una medida ambiental, presencia de residuos, modificación significativa de las condiciones del recorrido o identificación de una situación que exceda las competencias del responsable de la actividad.
      
      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-9
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-7.bg-color-5.p-4
                  p.mb-0Para facilitar su comprensión, debe contener información suficiente para identificar la situación, localizarla o establecer las actuaciones realizadas. Su extensión dependerá de la situación: una novedad operativa puede documentarse mediante un formato breve, mientras que una condición ambiental de mayor relevancia puede requerir información adicional o comunicación a la instancia competente.
              .col-sm-12.col-lg-5.d-none.d-lg-block.bg-color-1.p-3
                img(src='@/assets/curso/temas/t4/8.svg')
            p.mb-0 Registrar no equivale necesariamente a reportar. Una condición rutinaria puede quedar documentada para seguimiento; una situación que requiere decisión, intervención o conocimiento de otro responsable debe comunicarse mediante el mecanismo establecido.
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/9.png')

      .titulo-tercer-nivel.mb-5
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguimiento de las prácticas ambientales

      img(src='@/assets/curso/temas/t4/10.png').d-none.d-lg-block.mb-5(data-aos='fade-right')
      p.mb-3(data-aos='fade-right') El seguimiento ambiental consiste en verificar periódicamente las condiciones del escenario o el cumplimiento de las prácticas establecidas. Su propósito es determinar si las medidas implementadas funcionan de la manera prevista, si existen cambios que requieran atención o si deben introducirse ajustes en la planificación.
      p.mb-5(data-aos='fade-right') Para que la información obtenida resulte comparable, es conveniente establecer criterios o indicadores sencillos. Un indicador permite representar una condición mediante información susceptible de seguimiento.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores para el seguimiento ambiental
      
      .bg-full-width.bg-fondo-5.mb-5(data-aos='fade-right')
        .p-full-width
          .tarjeta.tarjeta--gris.p-4
            PasosB.color-acento-botones
              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Residuos
                  p.mb-3 #[b Indicador posible:] número de recorridos con presencia de residuos al finalizar la actividad.
                  p.mb-0 #[b Mecanismo de verificación:] lista de verificación.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/25.png')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Uso del recorrido
                  p.mb-3 #[b Indicador posible:] presencia de nuevos accesos o zonas de tránsito no autorizadas.
                  p.mb-0 #[b Mecanismo de verificación:] inspección del recorrido.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/26.png')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Sensibilización
                  p.mb-3 #[b Indicador posible:] porcentaje de grupos que reciben orientación ambiental previa.
                  p.mb-0 #[b Mecanismo de verificación:] registro de operación.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/27.png')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Contingencias
                  p.mb-3 #[b Indicador posible:] número o tipo de contingencias ambientales registradas.
                  p.mb-0 #[b Mecanismo de verificación:] formato de novedades.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/28.png')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Medidas de manejo
                  p.mb-3 #[b Indicador posible:] nivel de cumplimiento de las acciones previstas.
                  p.mb-0 #[b Mecanismo de verificación:] lista de chequeo o bitácora.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/29.png')

              .row.justify-content-center.mb-0
                .col-sm-12.col-lg-6
                  h4 Comportamiento
                  p.mb-3 #[b Indicador posible:] incumplimientos recurrentes de recomendaciones ambientales.
                  p.mb-0 #[b Mecanismo de verificación:] registro de observaciones.
                .col-sm-12.col-lg-5.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t4/30.png')


      p.mb-5(data-aos='fade-right') Los indicadores no necesitan ser numerosos. Resulta preferible seleccionar aquellos que proporcionen información útil para tomar decisiones. Un escenario con problemas recurrentes de tránsito fuera del recorrido, por ejemplo, requerirá prestar mayor atención a este aspecto que a variables que permanecen estables.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Verificación de las prácticas ambientales

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-5.mb-4
            p.mb-3 La verificación permite contrastar las medidas planificadas con las actuaciones realmente desarrolladas. Puede efectuarse durante el recorrido mediante observación directa o posteriormente mediante revisión de registros, listas de chequeo, reportes o evidencias disponibles.
            p.mb-0 Este proceso permite responder preguntas como: ¿se aplicaron las medidas previstas?, ¿los usuarios recibieron orientación?, ¿se gestionaron adecuadamente los residuos?, ¿se presentaron contingencias?, ¿persisten situaciones ambientales que requieren atención?
          p.mb-0 La información resultante del seguimiento permite reconocer tendencias. Cuando una situación se repite en varios recorridos, deja de representar una novedad aislada y puede evidenciar la necesidad de revisar la medida implementada. Por ejemplo, la aparición recurrente de tránsito fuera del área establecida puede indicar que la orientación utilizada no es suficiente o que la organización del grupo requiere ajustes.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/11.png')

      p.mb-0(data-aos='fade-right') De esta manera, el registro, el reporte y el seguimiento permiten convertir las experiencias desarrolladas durante cada recorrido en información útil para la gestión ambiental. Su adecuada articulación fortalece la toma de decisiones, facilita la verificación del cumplimiento o proporciona una base objetiva para mejorar progresivamente las prácticas de sostenibilidad aplicadas al rappel turístico.






      Separador
      #t_4_2.titulo-segundo.color-secundario(data-aos='fade-right')
        h2 4.2 Mejora continua del desempeño ambiental
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/12.png')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/13.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 La mejora continua corresponde a un proceso sistemático mediante el cual se revisan los resultados obtenidos durante una actividad para identificar ajustes que permitan fortalecer su desempeño ambiental. En las actividades turísticas de rappel, este enfoque permite utilizar la información procedente de registros, reportes, verificaciones o contingencias para modificar prácticas que no alcanzan los resultados esperados, corregir desviaciones o prevenir su recurrencia.
            p.mb-0  La mejora continua no implica que la actividad presente necesariamente un incumplimiento o una afectación ambiental. También puede aplicarse cuando se identifican alternativas para optimizar la organización de los grupos, reducir la generación de residuos, mejorar la orientación ambiental o fortalecer los mecanismos utilizados para verificar las condiciones del recorrido. En este sentido, representa una práctica permanente de revisión de la operación turística.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ciclo de mejora continua

      p.mb-5(data-aos='fade-right') Una forma práctica de organizar este proceso corresponde al ciclo Planificar-Hacer-Verificar-Actuar (PHVA). Este modelo permite relacionar las decisiones ambientales previstas con su aplicación, evaluación o ajuste posterior.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ciclo PHVA aplicado al manejo ambiental
      
      LineaTiempoE.color-primario.mb-5(data-aos='fade-right')
        .row.justify-content-center.mb-0(titulo="Paso A")
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/14.svg')
          .col-sm-12.col-lg-9
            h4 Planificar
            p.mb-0 Definir medidas de manejo, prácticas ambientales, responsables o mecanismos de seguimiento.

        .row.justify-content-center.mb-0(titulo="Paso B")
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/15.svg')
          .col-sm-12.col-lg-9
            h4 Hacer
            p.mb-0 Implementar las medidas durante la preparación, desarrollo o cierre del recorrido.

        .row.justify-content-center.mb-0(titulo="Paso C")
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/16.svg')
          .col-sm-12.col-lg-9
            h4 Verificar
            p.mb-0 Revisar registros, indicadores, contingencias o cumplimiento de las prácticas establecidas.

        .row.justify-content-center.mb-0(titulo="Paso D")
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t4/17.svg')
          .col-sm-12.col-lg-9
            h4 Actuar
            p.mb-0 Mantener las acciones efectivas o introducir ajustes frente a desviaciones u oportunidades identificadas.


      p.mb-5(data-aos='fade-right') La aplicación del ciclo permite comprender que la planificación ambiental no termina con la ejecución de una medida. Los resultados deben verificarse para establecer si la actuación realmente contribuyó al propósito previsto.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Desviaciones y oportunidades de mejora
      
      .row.justify-content-center.mb-5.bg-fondo-2(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block.mcus-1
          img(src='@/assets/curso/temas/t4/19.png')
        .col-sm-12.col-lg-7.p-4
          img.d-none.d-lg-block.mb-4.wcus-1(src='@/assets/curso/temas/t4/18.svg')
          p.mb-3 Una desviación corresponde a una diferencia entre lo planificado o establecido y aquello que ocurre durante la actividad. Puede presentarse, por ejemplo, cuando los participantes abandonan reiteradamente el recorrido definido, no se realiza un registro previsto o una medida para controlar residuos se aplica de manera incompleta.
          p.mb-0 Por su parte, una oportunidad de mejora corresponde a una posibilidad de fortalecer el desempeño ambiental, incluso cuando no existe una desviación. Por ejemplo, una orientación ambiental puede estar realizándose correctamente, pero los registros pueden evidenciar que determinados mensajes requieren mayor claridad para facilitar su comprensión.

      p.mb-5(data-aos='fade-right') La diferencia resulta relevante porque la mejora continua no debe limitarse a corregir errores. También permite perfeccionar procedimientos a partir de la experiencia acumulada.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Acciones correctivas

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-7
            .row.justify-content-center.mb-3
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/20.svg')
              .col-sm-12.col-lg-10
                  p.mb-0 Las acciones correctivas buscan intervenir sobre las causas de una desviación para reducir la posibilidad de que vuelva a presentarse. Por esta razón, no deben confundirse con una solución inmediata.
            p.mb-0 Si durante un recorrido se identifica un residuo abandonado, retirarlo constituye una respuesta inmediata. Si la situación se presenta repetidamente, la acción correctiva requiere analizar por qué ocurre: orientación insuficiente, ausencia de mecanismos para transportar residuos, falta de verificación al finalizar o incumplimiento recurrente de los participantes.
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/21.png')

      .cajon.color-primario.p-4.mb-5(data-aos='fade-right')
        p.mb-3 Una metodología práctica para resolver este tipo de casos consiste en avanzar paso a paso: primero se detecta la situación y se analiza su origen, luego se diseña e implementa una solución de mejora, y finalmente se verifica que el resultado sea el esperado.
        p.mb-0 Este proceso favorece decisiones sustentadas en información obtenida durante la operación, en lugar de aplicar modificaciones sin establecer previamente qué situación se pretende resolver.

      .titulo-tercer-nivel.mb-5(data-aos='fade-right')
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/1.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Uso de la información para la mejora

      p.mb-5(data-aos='fade-right') Los registros acumulados permiten reconocer patrones que pueden pasar inadvertidos durante un recorrido individual. La repetición de contingencias en un mismo sector, el incumplimiento frecuente de una recomendación o la aparición progresiva de señales de deterioro pueden indicar la necesidad de revisar las condiciones de operación.

      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            p.mb-0  #[b Tabla 6.] Ejemplos de oportunidades de mejora del desempeño ambiental.
          .tabla-a.color-primario.mb-0
            table
              thead
                tr
                  th #[b Hallazgo]
                  th #[b Posible acción de mejora]
              tbody
                tr
                  td Tránsito recurrente fuera del recorrido definido
                  td Revisar la orientación o la organización del desplazamiento.
                tr
                  td Residuos encontrados después de varios recorridos
                  td Fortalecer las medidas de prevención, control o verificación final.
                tr
                  td Permanencia prolongada en un sector sensible
                  td Ajustar tiempos, tamaño del grupo o zonas de espera.
                tr
                  td Recomendaciones ambientales poco comprendidas
                  td Simplificar los mensajes o modificar la estrategia de comunicación.
                tr
                  td Contingencia recurrente en un mismo sector
                  td Revisar las medidas de manejo o las condiciones de utilización del área.
                tr
                  td Registros incompletos
                  td Ajustar el formato o precisar responsabilidades para su diligenciamiento.


        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/22.png')

      .cajon.color-acento-contenido.p-4.mb-5(data-aos='fade-right')
        p.mb-0 La mejora continua debe apoyarse en información verificable. Un hallazgo registrado, su recurrencia, las condiciones en las que se presenta o los resultados de las medidas implementadas proporcionan elementos para decidir qué debe mantenerse, modificarse o fortalecerse.


      .row.justify-content-center.mb-5.align-items-end(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .bg-color-1.p-5.mb-4
            p.mb-0 La mejora del desempeño ambiental depende, por tanto, de la capacidad para aprender de cada operación. Los registros aportan información, el seguimiento permite interpretarla y las acciones de mejora convierten los hallazgos en ajustes concretos. Esta dinámica fortalece progresivamente la planificación ambiental, la orientación de los usuarios, la respuesta frente a contingencias o la conservación de las condiciones del escenario donde se desarrollan las actividades turísticas de rappel.
          p.mb-0 Como cierre de este apartado, se presenta el pódcast Corregir la causa, no solo el efecto, en el que, a partir de una situación práctica, se aborda cómo los hallazgos y registros de la operación pueden convertirse en acciones correctivas y oportunidades para fortalecer el desempeño ambiental.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/23.png')

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t4/24.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-primario.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: Corregir la causa, no solo el efecto"
              :audio="require_src('@/assets/curso/temas/t4/podcast.mp3')"
          )






  </template>

<script>
export default {
  name: 'Tema1',
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
