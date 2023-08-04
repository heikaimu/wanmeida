/*
 * @Date: 2023-07-16 11:14:34
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2023-08-03 13:38:25
 * @FilePath: /wanmeida/js/theme.js
 */
$(function () {
  new WOW().init();

  toggleWrapper({
    open: '[data-nav-open]',
    close: '[data-nav-close]',
    wrapper: '[data-nav-wrapper]',
    content: '[data-nav-content]'
  });

  mainWebNav();

  $(".drawer-list").find(".business-card").each(function () {
    $(this).click(function () {
      $(this).addClass("active").parent("li").siblings("li").find(".business-card").removeClass("active");
    })
  })

  // featureList
  // 目标 <div> 元素
  const targetDiv = document.querySelector('#featureList');
  // 创建一个观察器实例
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // 当目标元素进入可见区域时
      if (entry.isIntersecting) {
        $('[data-count]').each(function () {
          if (!$(this).attr('done')) {
            const val = $(this).attr('data-count');
            var numAnim = new countUp.CountUp($(this)[0], Number(val));
            numAnim.start();
            $(this).attr('done', true);
          }
        })
        // 在这里执行你想要的操作
      } else {
        console.log('目标 <div> 不可见');
        // 在这里执行其他操作，当目标元素离开可见区域时
      }
    });
  });

  // 开始观察目标元素
  if (targetDiv) {
    observer.observe(targetDiv);
  }

  if ($('#fullpage')[0]) {
    $('#fullpage').fullpage({
      navigation: true,
      resize: true,
      verticalCentered: true,
      licenseKey: "YOUR_KEY_HERE",
      afterLoad: function (origin, destination, direction, trigger) {
        if (destination.index === 0) {
          $("#header").removeClass("light");
        } else {
          $("#header").addClass("light");
        }
      },
    });
  }
});

// 主导航栏目
function mainWebNav() {
  // 判断当前分辨率
  const wWidth = $("body").width();

  if (wWidth < 1200) {
    return
  }

  // 所有导航层级
  const keys = [
    '[data-nav-lv1]',
    '[data-nav-lv2]',
  ]
  navsLoopHover(keys)
}

// banner
$(function () {
  const bannerSwiper = new Swiper('#homeBanner', {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    speed: 1000,
    allowTouchMove: true,
    loop: true,
    navigation: {
      nextEl: '#homeBannerNext',
      prevEl: '#homeBannerPrev',
    },
  });


  // 文化
  new Swiper('#cultureSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '#culturePagination',
      clickable: true,
    }
  });

  // 办公环境
  new Swiper('#envSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '#envPagination',
      clickable: true,
    }
  });

  // 优秀团队
  new Swiper('#teamSwiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: '#teamPagination',
      clickable: true,
    }
  });

  window.onresize = function () {
    bannerSwiper.update();
  }

  $(".section-news .col-1-of-4").eq(1).addClass('mr0');
})
