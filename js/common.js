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
        // $(".wrap div").animate();
        return;
      }
      // console.log(currentIndex);
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 1000);
      oldIndex = --currentIndex;
      $(".wrap div").eq(oldIndex).stop().animate({ top: "0" }, 1000);
      // console.log(currentIndex);
    } else {
      if (oldIndex === 3) {
        return;
      }

      if ($(".wrap div").is(":animated")) {
        // $(".wrap div").animate();
        return;
      }
      // console.log($(".wrap div").is(":animated"));
      $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 1000);
      oldIndex = ++currentIndex;
      $(".wrap div").eq(oldIndex).stop().animate({ top: "0" }, 1000);
    }
    //마우스 업다운d 구분
  });
  //마우스휠 이벤트

  $("ul li").on("click", function () {
    //클릭 된 div만 끌어올리기

    let index = $(this).index();
    console.log(`현재 활성화된 index ${currentIndex}`);
    console.log(`클릭한 index ${index}`);
    if ($(".wrap div").is(":animated")) {
      // $(".wrap div").animate();
      return;
    }

    if (index > currentIndex) {
      // 아래로
      $(".wrap div").eq(currentIndex).stop().animate({ top: "-100%" }, 500);
      $(".wrap div").eq(index).stop().animate({ top: "0" }, 500);
    } else if (index < currentIndex) {
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 500);
      $(".wrap div").eq(index).stop().animate({ top: "0" }, 500);
    }
    currentIndex = index;

    for (let i = 0; i < currentIndex; i++) {
      $(".wrap div").eq(i).css({ top: "-100%" });
    }
    for (let i = currentIndex; i <= $("ul li").length; i++) {
      $(".wrap div").eq(i).css({ top: "100%" });
    }
  });

  // 스크롤 up => -100% -> 0 되어야함/ 0 -> 100% 되어야함
  // 스크롤 down =>100% -> 0 / 0 -> -100%

  // 마우스휠 동작할 때 애니메이션 걸려야함
});
