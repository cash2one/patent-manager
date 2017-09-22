
//提示对话框
function custom_prompt(content_info) {
  $('.pop-box-prompt, .pop-box-bg').show();
  $("#content_info").html(content_info);
}

//删除确认对话框
function delete_confirm(content_info) {
  $('.pop-box-confirm-delete, .pop-box-bg').show();
  $("#delete_content_info").html(content_info);
}

/* *******jq操作dom对象********** */

//关闭对话框
$(function(){
  $('.pop-box-close,.btn-cancel,.btn-prompt-confirm').on("click", function () {
    $('.pop-box,.pop-box-bg').hide();
  });
})
//初始化 宽高度
$(window).resize(function () {
  init();
});
$(function(){
  init();
})
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