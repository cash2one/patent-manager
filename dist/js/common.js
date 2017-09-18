// 关闭 modal弹出层
function closeModal() {
  $(".modal").hide()
}


/* *******jq操作dom对象********** */
//初始化 宽高度
$(window).resize(function () {
  init();
});
function init() {
  var body_h = $('body').height();
  var body_w = $('body').width();
  $(".menu").height(body_h - 56);
  $("#content").width(body_w - 200);
  $("#content").height(body_h - 46);
}

//自定义滚动条
$(".menu").mCustomScrollbar({
  scrollButtons: {
    enable: false,
    scrollType: "continuous",
    scrollSpeed: 40,
    scrollAmount: 40
  },
  horizontalScroll: false
});

// 左侧菜单栏
$(function () {
  $('.menu ul li .a1').on('click', function () {
    var dataOpen = $(this).next().attr('data-open');
    $(".menu ul li .a1").removeClass("active");
    $(".menu ul li .a1").next().attr('data-open', 0);
    $(".menu ul li .a1").next().slideUp(10);
    $(".menu ul li .a1").find('.arrow').removeClass('icon-arrow_down').addClass(
      'icon-xiangyou')
    $(this).next().attr('data-open', dataOpen);
    $(this).addClass("active");
    if ($(this).next().attr('data-open') == 0) {
      $(this).next().attr('data-open', 1);
      $(this).next().slideDown(200);
      $(this).find('.arrow').removeClass('icon-xiangyou').addClass('icon-arrow_down')
    } else {
      $(this).next().attr('data-open', 0);
      $(this).next().slideUp(200);
      $(this).find('.arrow').removeClass('icon-arrow_down').addClass('icon-xiangyou')
    }
  })
  $("ul.subnav-menu>li").on("click", function () {
    $("ul.subnav-menu>li").removeClass("active");
    $(this).addClass("active");
  });
})