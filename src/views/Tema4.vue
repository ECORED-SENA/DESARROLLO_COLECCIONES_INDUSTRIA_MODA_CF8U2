<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Pijama de bebé y mamelucos

    .bloque-texto-g.bg_1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_4/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Pijamas y mamelucos se caracterizan por ser prendas cómodas y suaves que proporcionan al bebé confort y resultan ser muy prácticas en su uso; de allí su popularidad. A continuación, se puede observar cómo se elaboran los patrones de las prendas que conforman el pijama de bebé.

    separador 

    #t_4_1.titulo-segundo
      .h2 4.1 Pijama de bebé

    .row.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema_4/img_2.png', alt='Texto que describa la imagen')
    .row
      .col-lg-6
        .jum_3.p-4
          p En confección, cuando se habla de pijama de bebé, se hace referencia a la que está compuesta por dos piezas: camisa o camiseta y pantalón o pantaloneta. El siguiente ejemplo se hará con camiseta y pantalón largo con puño.

          a.anexo(:href="obtenerLink('/downloads/CF8_U2_5-1_Pijama_de_bebe.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Pijama de bebé.] Elaboración de patrón

    separador 

    #t_4_2.titulo-segundo
      .h2 4.2 Mamelucos

    .row.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema_4/img_3.png', alt='Texto que describa la imagen')
    .row
      .col-lg-6
        .jum_3.p-4
          p.mb-0 El mameluco es quizás la prenda de vestir más representativa de la indumentaria del bebé. Es una prenda enteriza que cubre tanto la parte superior como la parte inferior. Los hay de muchos tipos: manga larga, manga corta, manga sisa, de perneras largas, con zapato o pie, cortos, o incluso de pierna descubierta.
          p A continuación, se presenta el desarrollo de las bases de diferentes estilos de mameluco:


          a.anexo(:href="obtenerLink('/downloads/CF8_U2_5-2_Mamelucos.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Mamelucos.] Elaboración de patrón
    
    

</template>

<script>
export default {
  name: 'Tema4',
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
