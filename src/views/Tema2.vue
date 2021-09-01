<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Camisa de bebé, pañal pantalón y baberos
    
    figure
      img.img-a(src='@/assets/curso/tema_2/img_1.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-6
        .jum_img.p-4
          p En este apartado se explica el paso a paso para la elaboración de los patrones de las prendas enunciadas en el título.

    separador 


    #t_2_1.titulo-segundo
      .h2 2.1 Camisa de bebé

    .row.mb-5
      .col-lg-6
        figure
          img.img-a(src='@/assets/curso/tema_2/img_2.png', alt='Texto que describa la imagen')
      .col-lg-6
        p La camisa de bebé es el patrón básico con el que se desarrollan las prendas superiores. Para su construcción se requieren las siguientes medidas:

        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Talle delantero
          li 
            i.fas.fa-angle-right
            | Contorno de pecho
          li 
            i.fas.fa-angle-right
            | Ancho de espalda
          li 
            i.fas.fa-angle-right
            | Largo de hombro
          li 
            i.fas.fa-angle-right
            | Largo de brazo

    p.mb-5 Es importante recordar que si se compara el cuerpo humano con un cilindro, cuando se desarrollen patrones, se trabaja el cuerpo por cuartos, teniendo como líneas delimitantes o de referencia el centro frente, costado y el centro espalda, así:

    .row
      .col-lg-6
        p.BorTit #[strong Figura 8] #[br]Analog'ia del cilindro y el cuerpo humano
        figure
          img(src='@/assets/curso/tema_2/img_3.png', alt='Texto que describa la imagen')
      .col-lg-6
        .bg_2.p-4.mb-3
          h5 Cuerpo de la camisa de bebé
          p A continuación, se explica la forma en que se elabora este patrón:
          a.anexo(:href="obtenerLink('/downloads/CF8_U2_3-1-1_cuerpo_camisa_bebe.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Cuerpo de la camisa de bebé.]  Elaboración de patrón
        .bg_1.p-4.mb-3
          h5 Manga de la camisa de bebé
          p A continuación, se describe el paso a paso para la elaboración del patrón de la manga para la camisa de bebé.
          a.anexo(:href="obtenerLink('/downloads/CF8_U2_3-1-2_Manga_camisa_bebe.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Manga para camisa de bebé.] Elaboración de patrón

    separador 

    #t_2_2.titulo-segundo
      .h2 2.2 Pañal pantalón

    .row.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema_2/img_4.png', alt='Texto que describa la imagen')
    .row
      .col-lg-6
        .jum_1.p-4
          p La base de pantalón o pañal es el patrón base para la elaboración de prendas inferiores con las piernas del bebé al descubierto. A continuación, se revisa el paso a paso para la elaboración de este patrón:

          a.anexo(:href="obtenerLink('/downloads/CF8_U2_3-2_Panal_pantalon.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Pañal - Pantalón.] Elaboración de patrón

    separador 

    #t_2_3.titulo-segundo
      .h2 2.3 Baberos

    .row.align-items-center
      .col-lg-6
        figure
          img(src='@/assets/curso/tema_2/img_5.png', alt='Texto que describa la imagen')
    .row
      .col-lg-6
        .jum_2.p-4
          p El babero es un accesorio de vestir fundamental en los bebés, ya que se usa para proteger la ropa al momento de comer. Para desarrollar los diferentes tipos de babero se utiliza la base de camisa. Ahora, se explicará el paso a paso para la construcción de los patrones del babero básico y el babero con espalda incluida:

          a.anexo(:href="obtenerLink('/downloads/CF8_U2_3-3_Baberos.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[strong Baberos.] Elaboración de patrónes

    
   

</template>

<script>
export default {
  name: 'Tema2',
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
