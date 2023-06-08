export default class Slick4 {
    constructor () {
      this.$this = $('.bear')
    }
    init () {// khởi tạow
      if (this.$this.length) {
        this.addSlick()
      }
    }
    addSlick () {
      this.$this.find('.Phan-slick').slick({
        slidesToShow: 2,//khi dành cho decktop thì hiển thị ra 3 màng hình
        dots: true, // nó sẽ hiển thị ra 2 cái <> và các - - - - - 
        arrows: true, // hiển thị cái nút bấm <>
        focusOnSelect: true, // chọn vào cái màn hình bên phải hay bên trái slide sẽ đi theo
        infinite: true, //khi nó chạy đến cái CUỐI THÌ NÓ KO CHO CHẠY NGƯỢC LẠI
        rows: 0,// số hàng mà nó thể hiện ra màn hình. mặc định là 1 hang
        variableWidth: true,//
                            
        prevArrow: '<button class="slick-prev arrows h1 text-primary-100"><span class="icomoon icon-chevron-left"></span><span class="sr-only">Prev slider</span></button>',
        nextArrow: '<button class="slick-next arrows h1 text-primary-100"><span class="icomoon icon-chevron-right"></span><span class="sr-only">Next slider</span></button>',
  
        responsive: [
          {
            breakpoint: 1200,// khi màn hình 1200 trở xuống
            settings: { // setting cho nó
              slidesToShow: 2,// khi màn hình dưới 1200 thì nó sẽ hiện ra 1 ảnh 
              variableWidth: false, 
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              variableWidth: false, 
            }
          }
        ]
      })
    }
  }
  new Slick4().init()

  console.log("Slick4");