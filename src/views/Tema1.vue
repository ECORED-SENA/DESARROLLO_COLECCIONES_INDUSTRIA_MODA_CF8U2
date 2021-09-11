<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Medidas y cuadros de tallas bebés

    .bloque-texto-g.bg_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Al igual que con las demás líneas de vestir, cuando el patronista aborda la línea de bebés, deberá comenzar por la toma de medidas antropométricas de los usuarios, para así construir los cuadros de tallas y medidas para las diferentes tallas.

    p.BorTit #[strong Figura 2] #[br]Tallas de bebé  
    figure.mb-5
      img(src='@/assets/curso/tema_1/img_2.png', alt='Texto que describa la imagen')

    p.mb-0 En el caso de la línea de bebés, las tallas, generalmente, se nombran por la edad en meses y van desde recién nacido (RN) o cero meses (0) y aumentan de tres en tres o de seis en seis. También es común encontrar que las tallas vayan en rangos de meses, por ejemplo: 0-6, 6-12, 12-18, 18-24, 24-36; en adelante, continúan las tallas de la línea infantil.
    p.mb-5 Para la construcción de los cuadros de tallas de la línea bebé, se tienen en cuenta las medidas de los niños distribuidas en medidas de contornos, anchos (longitudinales horizontales) y largos (longitudinales verticales), presentadas a continuación:

    .row.justify-content-center.mb-5
      .col-lg-7
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF8_U2_2_Toma_de_medidas.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Medidas de bebé]. Paso a paso. Instrucciones para toma de medidas de bebé

    p.mb-5 Para el patronaje industrial, se trabaja con medidas estandarizadas producto de estudios antropométricos en los que se miden diferentes bebés en cada una de las edades para luego construir un cuadro de tallas y medidas con las medidas promedio y poder atender al público objetivo. Siempre se recomienda a los patronistas y a las marcas desarrollar sus propios estudios antropométricos y cuadros de medidas. A continuación, se presentan algunos ejemplos de cuadros de medidas:

    .row.justify-content-center.mb-5
      .col-lg-6
        p.BorTit #[strong Figura 3] #[br]Cuadro de tallas para bebé normalizado
        figure
          img(src='@/assets/curso/tema_1/img_3.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Hincapié et al. (1995).

    .row.justify-content-center.mb-5
      .col-lg-10
        p.BorTit #[strong Figura 4] #[br]Tabla de medidas para bebés
        figure
          img(src='@/assets/curso/tema_1/img_4.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Mundo Crochet. (s.f.). 

    .row.justify-content-center.mb-5
      .col-lg-8
        p.BorTit #[strong Figura 5] #[br]Tabla de medidas para bebés
        figure.mb-5
          img(src='@/assets/curso/tema_1/img_5.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de sewingset.blogspot.com

        p Para el trazo de los patrones de este componente formativo, se trabajará con el “Cuadro de tallas para bebé normalizado”, tomado de Patronaje y escalado línea infantil de Hincapié et al. (1995) (primer ejemplo relacionado). 
 
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
