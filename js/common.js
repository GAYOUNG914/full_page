$(function () {
  let currentIndex = 0,
    oldIndex = 0;
  $(window).on("mousewheel", function (e) {
    let d = e.originalEvent.wheelDelta;

    if (d > 0) {
      // console.log($(".wrap div:first").index());
      if (oldIndex === 0) {
        return;
      }
      if ($(".wrap div").is(":animated")) {
        $(".wrap div").animate();
        return;
      }
      console.log(currentIndex);
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 1000);
      oldIndex = --currentIndex;
      $(".wrap div").eq(oldIndex).stop().animate({ top: "0" }, 1000);
      console.log(currentIndex);

      $("ul li").on("click", function () {
        //클릭 된 div만 끌어올리기
        $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 1000);
        $(".wrap div").eq($(this).index()).stop().animate({ top: "0" }, 1000);
      });
    } else {
      if (oldIndex === 3) {
        return;
      }

      if ($(".wrap div").is(":animated")) {
        $(".wrap div").animate();
        return;
      }
      // console.log($(".wrap div").is(":animated"));
      $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 1000);
      oldIndex = ++currentIndex;
      $(".wrap div").eq(oldIndex).stop().animate({ top: "0" }, 1000);

      $("ul li").on("click", function () {
        //클릭 된 div만 끌어올리기
        $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 1000);
        $(".wrap div").eq($(this).index()).stop().animate({ top: "0" }, 1000);
      });
    }
  });

  // 스크롤 up => -100% -> 0 되어야함/ 0 -> 100% 되어야함
  // 스크롤 down =>100% -> 0 / 0 -> -100%

  // 마우스휠 동작할 때 애니메이션 걸려야함
});
