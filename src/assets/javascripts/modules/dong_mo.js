export default class ThreeRow {
    constructor () {
      this.$this = $('mod-three-row')
    }
    init() {
      this.showHidden();
    }
    showHidden() {
      $(document).ready(function() {
        $('.blue').click(function() {
          if ($('.white').is(':hidden')) {
            $('.white').slideDown();
         
          }
          else {
            $('.white').slideUp();
          
          }
        });
      });
    }
  }
  new ThreeRow().init()
  
  console.log('Run file ThreeRow.js');