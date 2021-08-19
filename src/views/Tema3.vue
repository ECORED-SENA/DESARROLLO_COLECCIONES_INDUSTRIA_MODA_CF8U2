<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Desarrollo de modelos de camisas

    .bloque-texto-g.bg_3.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Existen varios modelos de camisa para bebé; sin embargo, a nivel industrial, se manejan dos patrones básicos que se caracterizan y reciben su nombre debido al tipo de cuello. A continuación, se explicará la construcción de patrones para la camiseta cuello redondo y la camisa con cuello bebe o Peter Pan (incluyendo perilla).

        a.anexo.mt-4(:href="obtenerLink('/downloads/CF8_U2_3-1-1_cuerpo_camisa_beb.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Camisetas  bebé.]  Elaboración de patrónes
    
    

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

<style lang="sass" scoped></style>
