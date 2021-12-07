# Full page 스크립트 구현
fullpage.js 를 api 도움 없이 직접 스크립트로만 구현을 해보았습니다.<br>
인덱스 값을 건너뛰는 페이지를 불러오면 인덱스 중간 값의 페이지가 전부 지나가는 것이 아닌,<br>
불러오는 페이지 한 장만 화면에 나타나 보이게 하는 것이 특징입니다.

## Link
* https://gayoung914.github.io/full_page/

## Tool
* HTML5
* CSS3
* Jquery

## Skill

    👉 wheelDelta 마우스 휠 이벤트로 마우스 up down을 구분합니다.
```
let d = e.originalEvent.wheelDelta;

    if (d > 0) {
      if (currentIndex === 0) {
        return;
      }
```

    👉 화면에 보이는 100vh의 페이지들을 absolute로 띄워서<br>
        스크롤이 내려가면 밑에 있는(++currentIndex, 즉, 현재 화면에 나타나있는 페이지의 인덱스 값의 페이지 다음 인덱스 값) 페이지         가 top: "-100%" 였다가 100%가 되는 방식으로 스크립트를 만들어봤습니다. 
```
let currentIndex = 0;
//...생략
if ($(".wrap div").is(":animated")) {
        return;
      }
      $(".wrap div").eq(currentIndex).stop().animate({ top: "100%" }, 500);
      console.log("이전 div index" + currentIndex);
      currentIndex = --currentIndex;
      //$(".wrap div").eq(currentIndex)의 top값이 0 되기 전에 100%으로 만들어놓아야함
      $(".wrap div").eq(currentIndex).stop().css({ top: "-100%" });
      $(".wrap div").eq(currentIndex).stop().animate({ top: "0" }, 500);
      console.log("지금 div index" + currentIndex);
    }
```

## License
* 개인 포트폴리오를 위해 만들어진 사이트입니다.


