<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Desarrollo de modelos de pijamas y mamelucos

    .bloque-texto-g.bg_5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_5/img_18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Al igual que en las demás líneas, los desarrollos son las transformaciones que se realizan a los patrones básicos para conseguir el modelo o diseño propuesto en la documentación técnica (ficha técnica de diseño y producción).

        a.anexo.mt-4(:href="obtenerLink('/downloads/CF8_U2_7_Desarrollo_de_modelos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Desarrollo de modelos.] Pijamas y mamelucos

    .cajon.color-primario.p-4
      h5 Nota general
      p Todas las teorías de los patrones han sido adaptadas y actualizadas del libro: Patronaje y escalado línea infantil (Hincapié et al., 1995). Para más desarrollos, consultar este libro en: 

      .row.align-items-center
        .col-lg-4
          a.anexo.mt-4(:href="obtenerLink('/downloads/patronaje_escalado_linea_infantil.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Repositorio SENA]
        .col-lg-8
          p Interpretándolos a la metodología del Manual de patronaje básico e interpretación de diseños (SENA y JICA, 2011).

    
    


    
    

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

<style lang="sass" scoped></style>
