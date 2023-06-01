// export default class SliderDemo {
//   constructor () {
//     this.$this = $('.mod-slider')
//   }
//   init () {
//     if (this.$this.length) {
//       this.addSlick()
//     }
//   }
//   addSlick () {
//     this.$this.find('.slider').slick({
//       rows: 0,
//       adaptiveHeight: true,
//       prevArrow: '<button class="slick-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
//       nextArrow: '<button class="slick-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>'
//     })
//   }
// }
// new SliderDemo().init()
export default class SliderDemo {
  constructor () {
    this.$this = $('.mod-slider')
  }
  init () {
    if (this.$this.length) {
      this.addSlick()
    }
  }
  addSlick () {
    this.$this.find('.slider').slick({
      slidesToShow: 3,//khi dành cho decktop thì hiển thị ra 3 màng hình
      slidesToScroll: 1,// khi mà nhấn cái nút <> thì nó sẽ chuyển qua bao nhiêu nội dung 
      dots: true, // nó sẽ hiển thị ra 2 cái <> và các - - - - - 
      arrows: true, // hiển thị cái nút bấm <>
      centerMode: true,// nó sẽ hiện 2 bên ra thêm 1 xí
      focusOnSelect: true, // chọn vào cái màn hình bên phải hay bên trái slide sẽ đi theo
      adaptiveHeight: true,// không biêt cái này là gì.
      // autoplay: true,
      // autoplaySpeed: 1000,
      rows: 1,// số hàng mà nó thể hiện ra màn hình. mặc định là 1 hang

      prevArrow: '<button class="slick-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
      nextArrow: '<button class="slick-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',

      responsive: [
        {
          breakpoint: 1200,// khi màn hình 1200 trở xuống
          settings: { // setting cho nó
            arrows: false,
            centerMode: true,
            centerPadding: '40px',// độ mờ của 2 viền 2 bên slider
            slidesToShow: 2 // khi màn hình dưới 1200 thì nó sẽ hiện ra 2 ảnh 
          }
        },
        {
          breakpoint: 700,
          settings: {
            // arrows: false,
            centerMode: false,
            // centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    })
  }
}
new SliderDemo().init()
