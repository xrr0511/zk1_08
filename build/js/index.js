"use strict";

$(function () {
  var i = new BScroll(".content-wrap");$.ajax({ url: "/api/swiper", dataType: "json", success: function success(e) {
      if (1 === e.code) {
        var i = "";e.data.forEach(function (e) {
          i += '<div class="swiper-slide"><img src="' + e.url + '" alt=""><p>' + e.title + "</p></div>";
        }), $(".swiper-wrapper").append(i);new Swiper(".swiper-container", { slidesPerView: 3, spaceBetween: 30, pagination: { el: ".swiper-pagination", clickable: !0 } });
      }
    }, error: function error(e) {
      console.log(e);
    } }), $.ajax({ url: "/api/list", dataType: "json", success: function success(e) {
      if (1 === e.code) {
        e.data.forEach(function (e) {}), $(".list").append(""), i.refresh();
      }
    }, error: function error(e) {
      console.log(e);
    } });
});