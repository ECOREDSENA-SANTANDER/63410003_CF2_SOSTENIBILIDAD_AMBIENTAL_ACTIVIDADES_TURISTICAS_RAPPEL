<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion: '<b>Objetivo:</b> verificar la apropiación de los conceptos y procedimientos relacionados con la planificación del manejo ambiental y la aplicación de prácticas sostenibles en actividades turísticas de rappel, considerando el mínimo impacto, la capacidad de carga, la gestión ambiental del recorrido, la orientación de usuarios, la actuación frente a contingencias, el registro, el seguimiento y la mejora del desempeño ambiental.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [{"id": 1, "texto": "¿Cuál es el propósito principal del manejo ambiental aplicado a una actividad turística de rappel?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Incrementar la frecuencia de uso de los escenarios naturales disponibles.", "esCorrecta": false}, {"id": "b", "texto": "Concentrar las decisiones ambientales exclusivamente al finalizar el recorrido.", "esCorrecta": false}, {"id": "c", "texto": "Prevenir, mitigar, corregir o controlar las posibles afectaciones sobre el entorno.", "esCorrecta": true}, {"id": "d", "texto": "Sustituir los procedimientos operativos mediante acciones de conservación.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 2, "texto": "¿Qué característica debe cumplir una medida de manejo ambiental para facilitar su aplicación?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Ser pertinente, específica, viable, comunicable y verificable.", "esCorrecta": true}, {"id": "b", "texto": "Aplicarse de igual manera en todos los escenarios naturales.", "esCorrecta": false}, {"id": "c", "texto": "Concentrarse exclusivamente en los impactos generados por residuos.", "esCorrecta": false}, {"id": "d", "texto": "Formularse después de finalizar cada actividad turística.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 3, "texto": "¿Cuál de las siguientes prácticas corresponde al principio de mínimo impacto?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Habilitar nuevos accesos para distribuir libremente a los participantes.", "esCorrecta": false}, {"id": "b", "texto": "Permanecer sobre superficies resistentes o sectores previamente definidos.", "esCorrecta": true}, {"id": "c", "texto": "Modificar elementos naturales para facilitar la experiencia del grupo.", "esCorrecta": false}, {"id": "d", "texto": "Ampliar las zonas de espera cuando aumenta la cantidad de visitantes.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 4, "texto": "¿Por qué debe evaluarse la capacidad de carga al organizar grupos de rappel?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Porque permite establecer únicamente la duración total del descenso.", "esCorrecta": false}, {"id": "b", "texto": "Porque determina exclusivamente la cantidad de equipos requeridos.", "esCorrecta": false}, {"id": "c", "texto": "Porque reemplaza la valoración ambiental previa del escenario.", "esCorrecta": false}, {"id": "d", "texto": "Porque relaciona el nivel de uso con las condiciones ambientales, físicas, sociales u operativas.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 5, "texto": "¿Qué relación existe entre capacidad de carga y tamaño del grupo?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Son conceptos equivalentes utilizados para establecer el número de visitantes.", "esCorrecta": false}, {"id": "b", "texto": "La capacidad analiza el nivel de uso, mientras el tamaño determina cuántas personas integran cada grupo.", "esCorrecta": true}, {"id": "c", "texto": "El tamaño del grupo determina automáticamente la capacidad ambiental del escenario.", "esCorrecta": false}, {"id": "d", "texto": "La capacidad se aplica únicamente cuando varios grupos coinciden simultáneamente.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 6, "texto": "¿Cuál de las siguientes acciones contribuye a la gestión de residuos desde la planificación de la actividad?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Disponer todos los residuos en un mismo recipiente al finalizar.", "esCorrecta": false}, {"id": "b", "texto": "Almacenar los residuos dentro del escenario hasta completar la jornada.", "esCorrecta": false}, {"id": "c", "texto": "Prevenir o reducir su generación desde la planificación de la actividad.", "esCorrecta": true}, {"id": "d", "texto": "Clasificar únicamente aquellos residuos susceptibles de aprovechamiento.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 7, "texto": "¿Qué actuación representa un relacionamiento responsable con las comunidades locales?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Utilizar caminos comunitarios cuando faciliten el desplazamiento del grupo.", "esCorrecta": false}, {"id": "b", "texto": "Priorizar las necesidades de los visitantes frente a los usos locales.", "esCorrecta": false}, {"id": "c", "texto": "Modificar los horarios establecidos cuando aumenta la demanda turística.", "esCorrecta": false}, {"id": "d", "texto": "Respetar los acuerdos, accesos autorizados y dinámicas territoriales existentes.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 8, "texto": "¿Qué elementos permiten formular una medida de manejo ambiental?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Situación ambiental, acción requerida, lugar de aplicación y propósito.", "esCorrecta": true}, {"id": "b", "texto": "Precio, duración comercial, promoción y cantidad de reservas.", "esCorrecta": false}, {"id": "c", "texto": "Preferencias del grupo, publicidad, temporada y disponibilidad comercial.", "esCorrecta": false}, {"id": "d", "texto": "Número de fotografías, atractivos, servicios y medios promocionales.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 9, "texto": "¿Qué debe caracterizar un mensaje de sensibilización ambiental dirigido a los usuarios?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Utilizar información extensa para abarcar todas las características ambientales.", "esCorrecta": false}, {"id": "b", "texto": "Concentrarse exclusivamente en las prohibiciones establecidas para el recorrido.", "esCorrecta": false}, {"id": "c", "texto": "Ser claro, pertinente, oportuno y orientado hacia una acción concreta.", "esCorrecta": true}, {"id": "d", "texto": "Mantener el mismo contenido independientemente de las condiciones del escenario.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 10, "texto": "Ante vegetación sensible próxima a una zona de preparación, ¿qué orientación resulta más adecuada?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Permitir desplazamientos breves siempre que no se extraiga vegetación.", "esCorrecta": false}, {"id": "b", "texto": "Indicar la permanencia dentro del espacio establecido para evitar el pisoteo.", "esCorrecta": true}, {"id": "c", "texto": "Recomendar el tránsito individual por diferentes sectores del escenario.", "esCorrecta": false}, {"id": "d", "texto": "Ampliar temporalmente el área utilizada para disminuir la concentración.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 11, "texto": "¿Qué diferencia una contingencia ambiental de un riesgo ambiental?", "imagen": "@/assets/actividad/imagen1.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "La contingencia corresponde a una situación presentada que requiere actuación, mientras el riesgo expresa una posibilidad.", "esCorrecta": true}, {"id": "b", "texto": "La contingencia corresponde únicamente a fenómenos naturales y el riesgo a acciones humanas.", "esCorrecta": false}, {"id": "c", "texto": "El riesgo requiere registro obligatorio, mientras la contingencia únicamente requiere observación.", "esCorrecta": false}, {"id": "d", "texto": "La contingencia representa una condición permanente y el riesgo una afectación comprobada.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 12, "texto": "¿Cuál es una secuencia apropiada para actuar frente a una contingencia ambiental?", "imagen": "@/assets/actividad/imagen2.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Comunicar, registrar, identificar, intervenir y valorar.", "esCorrecta": false}, {"id": "b", "texto": "Registrar, suspender, comunicar, verificar y finalizar.", "esCorrecta": false}, {"id": "c", "texto": "Actuar, identificar, registrar, valorar y comunicar.", "esCorrecta": false}, {"id": "d", "texto": "Identificar, valorar, actuar, comunicar y registrar.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 13, "texto": "Ante fauna silvestre lesionada encontrada durante el recorrido, ¿qué actuación resulta ambientalmente responsable?", "imagen": "@/assets/actividad/imagen3.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Trasladarla inmediatamente hasta un lugar considerado seguro.", "esCorrecta": false}, {"id": "b", "texto": "Evitar la aproximación y comunicar la situación a la instancia competente.", "esCorrecta": true}, {"id": "c", "texto": "Permitir que el grupo se acerque para documentar la situación.", "esCorrecta": false}, {"id": "d", "texto": "Intervenir directamente para determinar el estado del animal.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 14, "texto": "¿Qué información básica debe incluir la comunicación de una contingencia ambiental?", "imagen": "@/assets/actividad/imagen4.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Únicamente el nombre del recorrido y la cantidad de participantes.", "esCorrecta": false}, {"id": "b", "texto": "Principalmente las opiniones del responsable sobre las causas identificadas.", "esCorrecta": false}, {"id": "c", "texto": "Situación, localización, momento, posible afectación, actuación realizada y destinatario.", "esCorrecta": true}, {"id": "d", "texto": "Exclusivamente fotografías y descripción general del escenario utilizado.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 15, "texto": "¿Cuál es la finalidad principal del registro ambiental?", "imagen": "@/assets/actividad/imagen5.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Conservar información organizada sobre condiciones, medidas, situaciones o verificaciones realizadas.", "esCorrecta": true}, {"id": "b", "texto": "Sustituir la observación directa de las condiciones ambientales del recorrido.", "esCorrecta": false}, {"id": "c", "texto": "Comunicar exclusivamente las contingencias que requieren intervención externa.", "esCorrecta": false}, {"id": "d", "texto": "Determinar automáticamente las acciones correctivas de futuras actividades.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 16, "texto": "¿Qué diferencia existe entre un registro y un reporte ambiental?", "imagen": "@/assets/actividad/imagen6.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "El registro se utiliza únicamente antes del recorrido y el reporte al finalizar.", "esCorrecta": false}, {"id": "b", "texto": "El reporte contiene datos cuantitativos y el registro únicamente información cualitativa.", "esCorrecta": false}, {"id": "c", "texto": "Ambos cumplen exactamente la misma finalidad dentro del seguimiento ambiental.", "esCorrecta": false}, {"id": "d", "texto": "El registro conserva información, mientras el reporte comunica una situación que requiere conocimiento o actuación.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 17, "texto": "¿Cuál de los siguientes corresponde a un indicador de seguimiento ambiental?", "imagen": "@/assets/actividad/imagen7.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Número de recorridos con presencia de residuos al finalizar la actividad.", "esCorrecta": true}, {"id": "b", "texto": "Preferencia de los participantes por determinados horarios de descenso.", "esCorrecta": false}, {"id": "c", "texto": "Cantidad de publicaciones promocionales realizadas durante la temporada.", "esCorrecta": false}, {"id": "d", "texto": "Número de fotografías tomadas por los visitantes durante el recorrido.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 18, "texto": "¿Qué permite la verificación de las prácticas ambientales?", "imagen": "@/assets/actividad/imagen8.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Reemplazar las medidas previstas cuando no existen contingencias ambientales.", "esCorrecta": false}, {"id": "b", "texto": "Contrastar las acciones planificadas con aquellas efectivamente implementadas.", "esCorrecta": true}, {"id": "c", "texto": "Determinar exclusivamente la satisfacción de los participantes con el recorrido.", "esCorrecta": false}, {"id": "d", "texto": "Establecer el valor comercial de las medidas implementadas en el escenario.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 19, "texto": "¿Cuál es la finalidad de una acción correctiva dentro de la mejora continua?", "imagen": "@/assets/actividad/imagen9.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Registrar una desviación sin modificar las condiciones de operación.", "esCorrecta": false}, {"id": "b", "texto": "Resolver únicamente las consecuencias inmediatas de una contingencia.", "esCorrecta": false}, {"id": "c", "texto": "Intervenir sobre la causa de una desviación para reducir su recurrencia.", "esCorrecta": true}, {"id": "d", "texto": "Sustituir las medidas preventivas por controles posteriores al recorrido.", "esCorrecta": false}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}, {"id": 20, "texto": "Si varios recorridos registran tránsito recurrente fuera del sector definido, ¿qué acción corresponde al enfoque de mejora continua?", "imagen": "@/assets/actividad/imagen10.png", "barajarRespuestas": true, "opciones": [{"id": "a", "texto": "Mantener el procedimiento mientras no exista una afectación ambiental evidente.", "esCorrecta": false}, {"id": "b", "texto": "Eliminar el registro para evitar que la situación altere los indicadores.", "esCorrecta": false}, {"id": "c", "texto": "Ampliar automáticamente el recorrido hacia los sectores utilizados por los visitantes.", "esCorrecta": false}, {"id": "d", "texto": "Revisar la orientación proporcionada y la organización del desplazamiento.", "esCorrecta": true}], "mensaje_correcto": "¡Muy bien! Ha acertado la respuesta.", "mensaje_incorrecto": "Lo sentimos, su respuesta no es la correcta."}], 
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
    parrafo: {
      tema: 'Comprendiendo el diseño de presupuestos y estrategias de ahorro',
      titulo: 'Completar frases',
      introduccion: '<b>Objetivo:</b> verificar la apropiación de los conceptos y procedimientos relacionados con la planificación del manejo ambiental y la aplicación de prácticas sostenibles en actividades turísticas de rappel, considerando el mínimo impacto, la capacidad de carga, la gestión ambiental del recorrido, la orientación de usuarios, la actuación frente a contingencias, el registro, el seguimiento y la mejora del desempeño ambiental.',
      instruccion:
        'Complete correctamente los enunciados con la palabra que falta según los contenidos estudiados en el componente formativo.',
      imagen: '@/assets/actividad/imagen1.png',
      barajarPreguntas: true,
      textos: [
        {
          id: 1,
          texto:
            'El [respuesta] personal es una herramienta que permite proyectar ingresos y egresos para mantener la estabilidad económica.',
          respuesta: 'presupuesto',
        },
        {
          id: 2,
          texto:
            'La constancia en el cumplimiento del presupuesto refleja un alto nivel de [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 3,
          texto:
            'Ahorrar no es lo que sobra, sino lo que se [respuesta] guardar antes de gastar.',
          respuesta: 'planifica',
        },
        {
          id: 4,
          texto:
            'Un gasto innecesario que puede eliminarse sin afectar la calidad de vida básica se denomina gasto [respuesta].',
          respuesta: 'discrecional',
        },
        {
          id: 5,
          texto:
            'La cultura del ahorro promueve el uso responsable de los [respuesta] disponibles.',
          respuesta: 'recursos',
        },
        {
          id: 6,
          texto:
            'El estado de [respuesta] personales permite analizar la relación entre ingresos y egresos en un periodo determinado.',
          respuesta: 'resultados',
        },
        {
          id: 7,
          texto:
            'Cuando los ingresos son mayores que los egresos se generan una [respuesta] que puede destinarse al ahorro.',
          respuesta: 'utilidad',
        },
        {
          id: 8,
          texto:
            'Uno de los beneficios de ejecutar un presupuesto es la reducción del [respuesta] financiero.',
          respuesta: 'estrés',
        },
        {
          id: 9,
          texto:
            'Evitar gastos impulsivos y mantener límites presupuestales refleja [respuesta] financiera.',
          respuesta: 'disciplina',
        },
        {
          id: 10,
          texto:
            'Contar con un fondo de [respuesta] permite enfrentar gastos inesperados sin afectar el presupuesto.',
          respuesta: 'emergencia',
        },
      ],
    },
  }),
}
</script>
