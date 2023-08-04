/*
 * @Date: 2023-01-30 10:18:39
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2023-03-24 10:27:04
 * @FilePath: /history/js/common.js
 */

// 页面刷新回到顶部，回到顶部按钮
function backTop() {
  $('body,html').animate({
    scrollTop: 0
  }, 300);

  $("#backTopMenu").backTop({
    offset: 500,
    duration: 300
  });
}

// 判断是否是移动端
function isMobile() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true;
  } else {
    return false;
  }
}

// tab切换
function tabPane({title, content}) {
  const titleList = title.children()
  const contentList = content.children()
  
  titleList.each(function() {
    $(this).click(function() {
      const index = $(this).index();
      activeItem(index);
    })
  })

  function activeItem(index) {
    titleList.eq(index).addClass('active').siblings().removeClass('active');
    contentList.eq(index).show().siblings().hide();
  }

  activeItem(0)
}

// 弹窗通用函数
function toggleWrapper(options) {
  const open = $(options.open);
  const close = $(options.close);
  const wrapper = $(options.wrapper);
  const content = $(options.content);
  const html = $("html");

  open.click(function () {
    wrapper.addClass("active");
    html.css({ "overflow-y": "hidden" });
  });
  close.click(function () {
    wrapper.removeClass("active");
    html.css({ "overflow-y": "auto" });
  });
  content.on("click", function (e) {
    e.stopPropagation();
  });
}

// 导航
function navsLoopHover(keys) {
  keys.forEach(key => {
    $(key).each(function() {
      $(this).hover(function() {
        // 点亮当前
        $(this).children('a').addClass('active');
        $(this).children('ul').show()
        // 熄灭其他
        $(this).siblings('li').children('a').removeClass('active');
        $(this).siblings('li').children('ul').hide()
      }, function() {
        $(this).children('ul').hide()
      })
    })
  })
}

// 滚动变色的头部
function scrollHeader(query, distance = 300) {
  if ($(query).hasClass("active")) {
    window.addEventListener("scroll", function () {
      const st = $(document).scrollTop();
      if (st > distance) {
        $(query).addClass("scroll");
      } else {
        $(query).removeClass("scroll");
      }
    });
  }
}
