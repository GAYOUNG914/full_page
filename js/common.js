$(function() {
  let currentIndex = 0,
      oldIndex;
  $(window).on("mousewheel",function(e){
    
    let d = e.originalEvent.wheelDelta;
    // let divTopN = $('div').next().offset().top;
    // let divTopP = $('div').prev().offset().top;
    // $('html, body').animate({scrollTop: divTop}, 1000);

    if( d > 0) {
      $('.wrap div').eq(currentIndex).animate({top: '100%'}, 1000);
      oldIndex = --currentIndex;
      // oldIndex = currentIndex
      console.log(oldIndex)
      $('.wrap div').eq(oldIndex).animate({top: '0'}, 1000);
    } else {
      // console.log('down')

      $('.wrap div').eq(currentIndex).animate({top: '-100%'}, 1000);
      oldIndex = ++currentIndex;
      // oldIndex = currentIndex
      console.log(oldIndex)
      $('.wrap div').eq(oldIndex).animate({top: '0'}, 1000);
    };
  });


  // 스크롤 up => -100% -> 0 되어야함/ 0 -> 100% 되어야함
  // 스크롤 down =>100% -> 0 / 0 -> -100%

  // 마우스휠 동작할 때 애니메이션 걸려야함


});