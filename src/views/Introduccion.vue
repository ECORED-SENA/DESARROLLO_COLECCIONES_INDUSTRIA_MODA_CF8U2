<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure
      img(src='@/assets/curso/introduccion/img_1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-5
      .col-lg-6
        .jum_img.p-4
          p Desde que una persona llega al mundo requiere ropa para su protección y cuidado; es por ello, que para el desarrollador de colecciones para la industria de la moda se hace fundamental aprender a realizar los patrones de prendas de vestir para todas las edades. Cada una de las líneas (bebé, infantil, femenino, masculino, interior, etc.) tiene condiciones específicas para su desarrollo. En esta unidad se exponen los requerimientos de patronaje para bebés, las medidas a tener en cuenta, los diferentes patrones básicos, algunos desarrollos y consideraciones para desarrollos futuros.
      .col-lg-4

    .row
      .col-lg-6
        p.BorTit #[strong Figura 1] #[br]Ropa de bebé  
        figure
          img(src='@/assets/curso/introduccion/img_2.png', alt='Texto que describa la imagen')

      .col-lg-6
        figure
          img(src='@/assets/curso/introduccion/img_3.png', alt='Texto que describa la imagen')



    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
