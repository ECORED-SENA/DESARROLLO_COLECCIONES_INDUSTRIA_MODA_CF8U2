<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Escalado de pijama y mamelucos

    p.mb-5 Para la obtención de las diferentes tallas, se utiliza una técnica conocida como escalado, la cual permite incrementar o disminuir la talla de un patrón o molde a partir de la modificación de ciertas medidas en puntos específicos, partiendo de la diferencia entre tallas que se obtiene de la tabla de medidas con la que se trabaje. Las teorías de escalado funcionan de igual manera para las diferentes líneas de vestir, lo que cambia son las fórmulas de escalado, ya que, para cada tipología de prenda, según la línea y el cuadro de tallas a trabajar, se emplean valores diferentes.

    .row.d-flex.justify-content-center.mb-5
      .col-lg-6.d-flex
        figure
          img.img-a(src='@/assets/curso/tema_5/img_1.png', alt='Texto que describa la imagen')

      .col-lg-5
        p Como se observó en unidades anteriores, entender el cuerpo como un cilindro para el desarrollo de patrones, partiendo de los cuartos de medidas, será un elemento indispensable para el proceso de escalado, pues al trasladar la volumetría al dibujo plano, se establecen ciertos ejes que harán las veces de centros de escalado y serán puntos fijos que no se modificarán.

        p Como se menciona anteriormente, el escalado parte de unos ejes que, para las prendas superiores, serán las líneas de centro del frente y el centro espalda, como ejes verticales, y como eje horizontal se emplea la línea o altura de sisa. El eje se comporta como centro del escalado, manteniéndose inmóvil (Gaviria, 2018).

    .row.mb-5
      .col-lg-6
        p.BorTit #[strong Figura 7] Ejes de escalado 
        figure
          img(src='@/assets/curso/tema_5/img_2.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).

    p.mb-5 En las partes inferiores masculinas (pantalones), el eje vertical se ubica en la línea de aplome y el eje horizontal, a la altura de cadera o tiro. Creciendo y decreciendo horizontalmente hacia los costados, tiro y entrepierna, y verticalmente hacia la cintura y la bota (Gaviria, 2018).

    .row.mb-5
      .col-lg-6
        p.BorTit #[strong Figura 8] Ejes de escalado 
        figure
          img(src='@/assets/curso/tema_5/img_3.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).

    p.mb-5 Para escalar es muy importante tener en cuenta estos ejes y, sobre estos, trazar un plano cartesiano en cada punto a escalar, para luego aplicar la medida (según incrementos en tabla de medidas) hacia afuera (en tallas mayores) y hacia adentro (en tallas menores), manteniendo las proporciones y curvas del patrón base o inicial (Gaviria, 2018).

    .row.mb-5
      .col-lg-6
        p.BorTit #[strong Figura 9] Ejes de escalado
        figure
          img(src='@/assets/curso/tema_5/img_4.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).
      .col-lg-6
        p.BorTit #[strong Figura 10] Posición de las escuadras para trazar los planos cartesianos en puntos de prendas inferiores
        figure
          img(src='@/assets/curso/tema_5/img_5.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).

    p.mb-5 A continuación se presenta un ejemplo en el que se explica gráficamente el escalado del punto de hombro por sisa (hombro x sisa), con unos valores de 0.84 cm en X y 0.76 cm en Y (los cuales dependen de cada punto y de la tabla de medidas con la que se trabaje), como se ve en la figura (Gaviria, 2018).

    .row.mb-5
      .col-lg-6
        p.BorTit #[strong Figura 11] Ejemplo de escalado del punto hombro por sisa
        figure
          img(src='@/assets/curso/tema_5/img_6.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).
      .col-lg-6
        p Como se observa en la figura anterior, se marcó el plano cartesiano sobre el punto y en cada uno de los ejes la medida correspondiente (0.84 cm en X y 0.76 cm en Y), para luego prolongar paralelamente estas líneas formando una retícula o cuadrícula, en la que se identifican cada uno de los puntos de cruces de las tallas. Teniendo como referencias cada uno de estos puntos, se traza cada talla utilizando el molde base (Gaviria, 2018).

    p.mb-5 De acuerdo con lo anterior, se hace imperante partir de la tabla de medidas y entender los incrementos de cada una de las medidas en las diferentes tallas, como se presenta en la tabla a continuación:

    .row.mb-5
      .col-lg-8
        p.BorTit #[strong Figura 12] Cuadro de tallas y medidas
        figure
          img(src='@/assets/curso/tema_5/img_7.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Hincapié et al. (1995).

    separador 

    #t_5_1.titulo-segundo
      .h2 5.1 Escalado del pijama

    p.mb-5 De acuerdo con lo antes mencionado y teniendo en cuenta la tabla de medidas y que el cuerpo es un cilindro que se divide en cuatro cuartos en cuanto a contornos se refiere, se toma cada una de las medidas de contorno (del tronco) y se divide el incremento entre 4 para aplicarlo. Por ejemplo: incremento de contorno de cadera 1.5 cm, dividido entre cuatro, es igual a 0.375 (se aproxima a 0.4). De la misma manera, se interpreta cada uno de los incrementos en la tabla de medidas y se realizan los siguientes esquemas.    

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.bg_4(titulo="Frente y espalda" :icono="require('@/assets/curso/tema_5/img_10.svg')")
        .row.justify-content-center.mb-5.mt-0
          .col-lg-6
            .jum_4.p-2
              h4.text-center.mb-0 Frente y espalda
        .row.justify-content-center
          .col-lg-5
            p.BorTit #[strong Figura 13] Escalado prendas superiores bebé 
            figure
              img.img-a(src='@/assets/curso/tema_5/img_11.png', alt='Texto que describa la imagen')
        
          .col-lg-5
            p Quedando así las diferentes tallas.
            p.BorTit #[strong Figura 14] Escalado frente y espalda prendas superiores 
            figure
              img.img-a(src='@/assets/curso/tema_5/img_12.png', alt='Texto que describa la imagen')
      .py-4.py-md-5.bg_4(titulo="Manga" :icono="require('@/assets/curso/tema_5/img_9.svg')")
        .row.justify-content-center.mb-5.mt-0
          .col-lg-6
            .jum_4.p-2
              h4.text-center.mb-0 Manga
        .row.justify-content-center.align-items-center
          .col-lg-5
            p.BorTit #[strong Figura 15] Escalado manga bebé
            figure
              img.img-a(src='@/assets/curso/tema_5/img_14.png', alt='Texto que describa la imagen')
        
          .col-lg-5
            figure
              img.img-a(src='@/assets/curso/tema_5/img_13.png', alt='Texto que describa la imagen')
        
      .py-4.py-md-5.bg_4(titulo="Pantalón" :icono="require('@/assets/curso/tema_5/img_8.svg')")
        .row.justify-content-center.mb-5.mt-0
          .col-lg-6
            .jum_4.p-2.mb-5
              h4.text-center.mb-0 Pantalón

        .row.justify-content-center.mb-5
          .col-lg-10
            p Es importante tener en cuenta que las prendas inferiores con perneras se escalan dividiendo entre 8 los contornos, puesto que también se escalan horizontalmente en los centros (delantero y posterior).
        .row.justify-content-center.align-items-center
          .col-lg-5
            p.BorTit #[strong Figura 16] Escalado pantalón bebé
            figure
              img.img-a(src='@/assets/curso/tema_5/img_15.png', alt='Texto que describa la imagen')
        
          .col-lg-5
            figure
              img.img-a(src='@/assets/curso/tema_5/img_16.png', alt='Texto que describa la imagen')

    separador 

    #t_5_2.titulo-segundo
      .h2 5.2 Escalado mameluco

    p.mb-5 Continuando con los escalados y aplicando las tablas de medidas, se presenta a continuación el escalado del mameluco.

    .row
      .col-lg-9
        p.BorTit #[strong Figura 17] Ejemplo de escalado del punto hombro por sisa 
        figure
          img.img-a(src='@/assets/curso/tema_5/img_17.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Gaviria (2018).


    
    

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
