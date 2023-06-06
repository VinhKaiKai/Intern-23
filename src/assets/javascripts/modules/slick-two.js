export default class Slick {
    constructor () {
      this.$this = $('.slick-version-two')
    }
    init () {// khởi tạo
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick () {
      this.$this.find('.slider').slick({
        slidesToShow: 2,//khi dành cho decktop thì hiển thị ra 3 màng hình
        // slidesToScroll: 1,// khi mà nhấn cái nút <> thì nó sẽ chuyển qua bao nhiêu nội dung 
        dots: true, // nó sẽ hiển thị ra 2 cái <> và các - - - - - 
        arrows: true, // hiển thị cái nút bấm <>
        // centerMode: false,// nó sẽ hiện 2 bên ra thêm 1 xí
        focusOnSelect: true, // chọn vào cái màn hình bên phải hay bên trái slide sẽ đi theo
        // adaptiveHeight: true,// không biêt cái này là gì.
        infinite: true, //khi nó chạy đến cái CUỐI THÌ NÓ KO CHO CHẠY NGƯỢC LẠI
        autoplay: true,
        autoplaySpeed: 1000,
        rows: 0,// số hàng mà nó thể hiện ra màn hình. mặc định là 1 hang
        variableWidth: true,//
                            
        prevArrow: '<button class="slick-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
  
        responsive: [
          {
            breakpoint: 1200,// khi màn hình 1200 trở xuống
            settings: { // setting cho nó
              // arrows: false,
              // infinite: true,
              // centerMode: true,// cái nó sẽ focus cho cái chuyển 
              // centerPadding: '40px',// độ mờ của 2 viền 2 bên slider
              slidesToShow: 2,// khi màn hình dưới 1200 thì nó sẽ hiện ra 2 ảnh 
              slidesToScroll: 1,
              variableWidth: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              // arrows: false,
              // centerPadding: '40px',
              slidesToShow: 1,
              variableWidth: false,
              slidesToScroll: 1,
            }
          }
        ]
      })
    }
  }
  new Slick().init()