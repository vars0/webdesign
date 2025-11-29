$(function () {
  //슬라이드
  let i = 0;

  function slide() {
    
    i++;
    if (i > 2) {
      i = 0;
    }
    $(".slide ul").animate({ marginLeft: -1200 * i + "px" }, 1000);
  }

  setInterval(slide, 2000);

  //팝업창
  $(".pop").click(function(){
    $(".popup").show();
    return false;
  })
  $(".close button").click(function(){
    $(".popup").hide();
    return false;
  })
});
