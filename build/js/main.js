function video_resize(){var o=$(document).width(),e=$(".head__video video").width();if(console.log(o),console.log(e),o<1920){var s=(o-e)/2;console.log(s),$(".head__video video").css("left",s+"px")}}window.onload=function(){Waves.init({duration:800,delay:200})},jQuery(document).ready(function(o){o(".input_phone").mask("+7(999) 999-9999"),o(".formstom__slider").owlCarousel({nav:!0,navText:["",""],loop:!0,dots:!1,responsive:{0:{items:1},1024:{items:2,margin:20},1280:{items:3,margin:40}}}),o(".scroll").jScrollPane({contentWidth:"0px"}),Waves.attach(".buttons",["waves-button","waves-float","waves-light"]),o(".info__number").counterUp({delay:100,time:2500}),o(".modal-open").click(function(e){e.preventDefault(),o(".modal-form").fadeIn()}),o(window).keydown(function(e){27==e.keyCode&&o(".modal-form").fadeOut()}),o(document).mouseup(function(e){var s=(o(".modal-form"),o(".modal-form__wrapper"));s.is(e.target)||0!==s.has(e.target).length||o(".modal-form").fadeOut()}),o(".popup").magnificPopup({type:"image",closeOnContentClick:!0,mainClass:"mfp-img-mobile",image:{verticalFit:!0}}),o(".personal__slider .item").click(function(e){if(e.preventDefault(),o(this).hasClass("personal_button"));else{o(".personal__slider .item").removeClass("personal_button"),o(this).addClass("personal_button");var s=o(this).attr("data-item");o(".personal__img").removeClass("active"),o(".personal__img").eq(s).addClass("active"),o(".personal__textitem").removeClass("active"),o(".personal__textitem").eq(s).addClass("active")}}),video_resize()}),$(document).ready(function(){var o=".forstom__wrap , .forstom__title , .forstom__text , .personal__textwrap , .personal__text , .personal__title , section , .title , .info__text , .uslugi__text , .phone__center , h2 span,  .container,  .container *, body, .head__title strong , .head__title h1, head, .head__title h2, footer, .head__video, .phone__top span";$(".fs-outer button").click(function(){$("body").css("font-size",$(this).css("font-size")),$.cookie("font-size",$(this).attr("id")),$(".fs-outer button").removeClass("active"),$(this).addClass("active")}),$(".cs-outer button").click(function(){$(o).css("color",$(this).css("color")),$(o).css("background",$(this).css("background")),$(".head__title strong , .head__title h1, .head__title h2, .head__title span").css("background","none"),$.cookie("cs",$(this).attr("id")),$(".cs-outer button").removeClass("active"),$(this).addClass("active")}),$(".img-outer button").click(function(){"on"!=$.cookie("img")?($("img").css("display","none"),$.cookie("img","on"),$(".personal__img").css("display","none"),$(".forstom__top").css("display","none"),$(".personal__textwrap").css({width:"100%","min-height":"100%"}),$(".personal__text").css("height","auto"),$("#img-onoff-text").text(" Включить"),$(this).addClass("active")):($("img").css("display","block"),$.cookie("img","off"),$(".personal__img.active").css("display","block"),$(".personal__textwrap").css("width","63%"),$(".forstom__top").css("dislpay","block"),$("#img-onoff-text").text(" Выключить"),$(this).removeClass("active"))}),"true"==$.cookie("sv_on")&&($("#sv_on").addClass("active"),$("#sv_settings").css("display","block"),$(".section_forstom").removeClass("section_forstom"),$(".head__video video").css("display","none"),$(".head__video").removeClass("head__video"),$(o).css("line-height",1.1),$(o).css("color","#000"),$(o).css("background","#fff"),$(".section_reviews").removeClass("section_reviews"),null!==$.cookie("font-size")&&$("#"+$.cookie("font-size")).click(),null!==$.cookie("cs")?$("#"+$.cookie("cs")).click():($(o).css("color","#000"),$(o).css("background","#fff"))),$("#sv_on").click(function(){$(o).css("color","#000"),$(o).css("background","#fff"),"true"!=$.cookie("sv_on")?($.cookie("sv_on","true"),$(o).css("color","#000"),$(o).css("background","#fff"),"null"==$.cookie("font-size")&&$(".fs-n").click(),"null"==$.cookie("cs")&&($(".cs-bw").click(),$(o).css("color","#000"),$(o).css("background","#fff"))):$.cookie("sv_on","false"),location.reload()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsidmlkZW9fcmVzaXplIiwiZG9jIiwiJCIsImRvY3VtZW50Iiwid2lkdGgiLCJ2aWRlbyIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0IiwiY3NzIiwid2luZG93Iiwib25sb2FkIiwiV2F2ZXMiLCJpbml0IiwiZHVyYXRpb24iLCJkZWxheSIsImpRdWVyeSIsInJlYWR5IiwibWFzayIsIm93bENhcm91c2VsIiwibmF2IiwibmF2VGV4dCIsImxvb3AiLCJkb3RzIiwicmVzcG9uc2l2ZSIsIjAiLCJpdGVtcyIsIjEwMjQiLCJtYXJnaW4iLCIxMjgwIiwialNjcm9sbFBhbmUiLCJjb250ZW50V2lkdGgiLCJhdHRhY2giLCJjb3VudGVyVXAiLCJ0aW1lIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJmYWRlSW4iLCJrZXlkb3duIiwiZXZlbnQiLCJrZXlDb2RlIiwiZmFkZU91dCIsIm1vdXNldXAiLCJlbGVtcyIsImlzIiwidGFyZ2V0IiwiaGFzIiwibGVuZ3RoIiwibWFnbmlmaWNQb3B1cCIsInR5cGUiLCJjbG9zZU9uQ29udGVudENsaWNrIiwibWFpbkNsYXNzIiwiaW1hZ2UiLCJ2ZXJ0aWNhbEZpdCIsInRoaXMiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJpdGVtIiwiYXR0ciIsImVxIiwic2VsZWN0b3IiLCJjb29raWUiLCJtaW4taGVpZ2h0IiwidGV4dCIsImxvY2F0aW9uIiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiQUFxR0EsUUFBU0EsZ0JBQ1IsR0FBSUMsR0FBTUMsRUFBRUMsVUFBVUMsUUFDbEJDLEVBQVFILEVBQUUsc0JBQXNCRSxPQUdwQyxJQUZBRSxRQUFRQyxJQUFJTixHQUNaSyxRQUFRQyxJQUFJRixHQUNUSixFQUFNLEtBQU0sQ0FDZCxHQUFJTyxJQUFRUCxFQUFNSSxHQUFPLENBQ3pCQyxTQUFRQyxJQUFJQyxHQUNaTixFQUFFLHNCQUFzQk8sSUFBSSxPQUFRRCxFQUFLLE9BN0czQ0UsT0FBT0MsT0FBUyxXQUVmQyxNQUFNQyxNQUNOQyxTQUFVLElBQ1ZDLE1BQU8sT0FJUkMsT0FBT2IsVUFBVWMsTUFBTSxTQUFTZixHQUMvQkEsRUFBRSxnQkFBZ0JnQixLQUFLLG9CQUV2QmhCLEVBQUUscUJBQXFCaUIsYUFDdEJDLEtBQUssRUFDTEMsU0FBVSxHQUFJLElBQ2RDLE1BQU0sRUFDTkMsTUFBTSxFQUNOQyxZQUNDQyxHQUNDQyxNQUFPLEdBRVJDLE1BQ0NELE1BQU8sRUFDUEUsT0FBUSxJQUVUQyxNQUNDSCxNQUFPLEVBQ1BFLE9BQVEsT0FLWDFCLEVBQUUsV0FBVzRCLGFBQ1pDLGFBQWMsUUFLZm5CLE1BQU1vQixPQUFPLFlBQ1osZUFDQSxjQUNBLGdCQUVEOUIsRUFBRSxpQkFBaUIrQixXQUNsQmxCLE1BQU8sSUFDUG1CLEtBQU0sT0FLTmhDLEVBQUUsZUFBZWlDLE1BQU0sU0FBVUMsR0FDL0JBLEVBQUVDLGlCQUNGbkMsRUFBRSxlQUFlb0MsV0FHbkJwQyxFQUFFUSxRQUFRNkIsUUFBUSxTQUFVQyxHQUNOLElBQWpCQSxFQUFNQyxTQUNQdkMsRUFBRSxlQUFld0MsWUFHckJ4QyxFQUFFQyxVQUFVd0MsUUFBUSxTQUFVUCxHQUM1QixHQUNJUSxJQURPMUMsRUFBRSxlQUNEQSxFQUFFLHdCQUNUMEMsR0FBTUMsR0FBR1QsRUFBRVUsU0FDb0IsSUFBL0JGLEVBQU1HLElBQUlYLEVBQUVVLFFBQVFFLFFBQ3ZCOUMsRUFBRSxlQUFld0MsWUFNckJ4QyxFQUFFLFVBQVUrQyxlQUNaQyxLQUFNLFFBQ05DLHFCQUFxQixFQUNyQkMsVUFBVyxpQkFDWEMsT0FDQ0MsYUFBYSxLQU9mcEQsRUFBRSwyQkFBMkJpQyxNQUFNLFNBQVNLLEdBRTNDLEdBREFBLEVBQU1ILGlCQUNIbkMsRUFBRXFELE1BQU1DLFNBQVMsd0JBR2hCLENBQ0h0RCxFQUFFLDJCQUEyQnVELFlBQVksbUJBQ3pDdkQsRUFBRXFELE1BQU1HLFNBQVMsa0JBQ2pCLElBQUlDLEdBQU96RCxFQUFFcUQsTUFBTUssS0FBSyxZQUN4QjFELEdBQUUsa0JBQWtCdUQsWUFBWSxVQUNoQ3ZELEVBQUUsa0JBQWtCMkQsR0FBR0YsR0FBTUQsU0FBUyxVQUN0Q3hELEVBQUUsdUJBQXVCdUQsWUFBWSxVQUNyQ3ZELEVBQUUsdUJBQXVCMkQsR0FBR0YsR0FBTUQsU0FBUyxhQUc3QzFELGlCQWVERSxFQUFFQyxVQUFVYyxNQUFNLFdBRWxCLEdBQUk2QyxHQUFTLGtVQUVUNUQsR0FBRSxvQkFBb0JpQyxNQUFNLFdBQ3hCakMsRUFBRSxRQUFRTyxJQUFJLFlBQVlQLEVBQUVxRCxNQUFNOUMsSUFBSSxjQUN0Q1AsRUFBRTZELE9BQU8sWUFBWTdELEVBQUVxRCxNQUFNSyxLQUFLLE9BQ2xDMUQsRUFBRSxvQkFBb0J1RCxZQUFZLFVBQ2xDdkQsRUFBRXFELE1BQU1HLFNBQVMsWUFJckJ4RCxFQUFFLG9CQUFvQmlDLE1BQU0sV0FDeEJqQyxFQUFFNEQsR0FBVXJELElBQUksUUFBUVAsRUFBRXFELE1BQU05QyxJQUFJLFVBQ3BDUCxFQUFFNEQsR0FBVXJELElBQUksYUFBYVAsRUFBRXFELE1BQU05QyxJQUFJLGVBQ3pDUCxFQUFFLDZFQUE2RU8sSUFBSSxhQUFjLFFBQ2pHUCxFQUFFNkQsT0FBTyxLQUFLN0QsRUFBRXFELE1BQU1LLEtBQUssT0FDM0IxRCxFQUFFLG9CQUFvQnVELFlBQVksVUFDbEN2RCxFQUFFcUQsTUFBTUcsU0FBUyxZQUlyQnhELEVBQUUscUJBQXFCaUMsTUFBTSxXQUNKLE1BQWpCakMsRUFBRTZELE9BQU8sUUFDVDdELEVBQUUsT0FBT08sSUFBSSxVQUFVLFFBQ3ZCUCxFQUFFNkQsT0FBTyxNQUFNLE1BQ3hCN0QsRUFBRSxrQkFBa0JPLElBQUksVUFBVyxRQUNuQ1AsRUFBRSxpQkFBaUJPLElBQUksVUFBVSxRQUNqQ1AsRUFBRSx1QkFBdUJPLEtBQ3hCTCxNQUFRLE9BQ1I0RCxhQUFhLFNBRWQ5RCxFQUFFLG1CQUFtQk8sSUFBSSxTQUFVLFFBQzFCUCxFQUFFLG1CQUFtQitELEtBQUssYUFDMUIvRCxFQUFFcUQsTUFBTUcsU0FBUyxZQUdqQnhELEVBQUUsT0FBT08sSUFBSSxVQUFVLFNBQ3ZCUCxFQUFFNkQsT0FBTyxNQUFNLE9BQ3hCN0QsRUFBRSx5QkFBeUJPLElBQUksVUFBVyxTQUMxQ1AsRUFBRSx1QkFBdUJPLElBQUksUUFBUyxPQUN0Q1AsRUFBRSxpQkFBaUJPLElBQUksVUFBWSxTQUMxQlAsRUFBRSxtQkFBbUIrRCxLQUFLLGNBQzFCL0QsRUFBRXFELE1BQU1FLFlBQVksYUFJTCxRQUFuQnZELEVBQUU2RCxPQUFPLFdBQ1Q3RCxFQUFFLFVBQVV3RCxTQUFTLFVBQ3JCeEQsRUFBRSxnQkFBZ0JPLElBQUksVUFBWSxTQUNsQ1AsRUFBRSxvQkFBb0J1RCxZQUFZLG1CQUN4Q3ZELEVBQUUsc0JBQXNCTyxJQUFJLFVBQVcsUUFDdkNQLEVBQUUsZ0JBQWdCdUQsWUFBWSxlQUM5QnZELEVBQUU0RCxHQUFVckQsSUFBSSxjQUFlLEtBQy9CUCxFQUFFNEQsR0FBVXJELElBQUksUUFBUyxRQUN6QlAsRUFBRTRELEdBQVVyRCxJQUFJLGFBQWEsUUFDN0JQLEVBQUUsb0JBQW9CdUQsWUFBWSxtQkFDQSxPQUF4QnZELEVBQUU2RCxPQUFPLGNBQ1g3RCxFQUFFLElBQUlBLEVBQUU2RCxPQUFPLGNBQWM1QixRQUdWLE9BQWpCakMsRUFBRTZELE9BQU8sTUFDWDdELEVBQUUsSUFBSUEsRUFBRTZELE9BQU8sT0FBTzVCLFNBRzdCakMsRUFBRTRELEdBQVVyRCxJQUFJLFFBQVMsUUFDekJQLEVBQUU0RCxHQUFVckQsSUFBSSxhQUFhLFVBTTVCUCxFQUFFLFVBQVVpQyxNQUNaLFdBQ0ZqQyxFQUFFNEQsR0FBVXJELElBQUksUUFBUyxRQUN6QlAsRUFBRTRELEdBQVVyRCxJQUFJLGFBQWEsUUFDSixRQUFuQlAsRUFBRTZELE9BQU8sVUFDYjdELEVBQUU2RCxPQUFPLFFBQVMsUUFDcEI3RCxFQUFFNEQsR0FBVXJELElBQUksUUFBUyxRQUN6QlAsRUFBRTRELEdBQVVyRCxJQUFJLGFBQWEsUUFDQSxRQUF2QlAsRUFBRTZELE9BQU8sY0FDVjdELEVBQUUsU0FBU2lDLFFBR00sUUFBaEJqQyxFQUFFNkQsT0FBTyxRQUVWN0QsRUFBRSxVQUFVaUMsUUFDakJqQyxFQUFFNEQsR0FBVXJELElBQUksUUFBUyxRQUN6QlAsRUFBRTRELEdBQVVyRCxJQUFJLGFBQWEsVUFLeEJQLEVBQUU2RCxPQUFPLFFBQVMsU0FFckJHLFNBQVNDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcclxuXHJcblx0V2F2ZXMuaW5pdCh7XHJcblx0ZHVyYXRpb246IDgwMCxcclxuXHRkZWxheTogMjAwXHJcblx0fSk7XHJcbn07XHJcblxyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcclxuXHQkKCcuaW5wdXRfcGhvbmUnKS5tYXNrKFwiKzcoOTk5KSA5OTktOTk5OVwiKTtcclxuXHJcblx0JCgnLmZvcm1zdG9tX19zbGlkZXInKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRuYXY6IHRydWUsXHJcblx0XHRuYXZUZXh0OiBbJycsICcnXSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRkb3RzOiBmYWxzZSxcclxuXHRcdHJlc3BvbnNpdmUgOiB7XHJcblx0XHRcdDA6IHtcclxuXHRcdFx0XHRpdGVtczogMVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMDI0OiB7XHJcblx0XHRcdFx0aXRlbXM6IDIsXHJcblx0XHRcdFx0bWFyZ2luOiAyMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMjgwOiB7XHJcblx0XHRcdFx0aXRlbXM6IDMsXHJcblx0XHRcdFx0bWFyZ2luOiA0MFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCQoJy5zY3JvbGwnKS5qU2Nyb2xsUGFuZSh7XHJcblx0XHRjb250ZW50V2lkdGg6ICcwcHgnXHJcblx0fSk7XHJcblxyXG5cdFxyXG5cclxuXHRXYXZlcy5hdHRhY2goXCIuYnV0dG9uc1wiLCBbXHJcblx0XHRcIndhdmVzLWJ1dHRvblwiLFxyXG5cdFx0XCJ3YXZlcy1mbG9hdFwiLFxyXG5cdFx0XCJ3YXZlcy1saWdodFwiXHJcblx0XSk7XHJcblx0JCgnLmluZm9fX251bWJlcicpLmNvdW50ZXJVcCh7XHJcblx0XHRkZWxheTogMTAwLFxyXG5cdFx0dGltZTogMjUwMFxyXG5cdH0pO1xyXG5cclxuXHRcclxuXHQgLy/QntGC0LrRgNGL0YLQuNC1INC80L7QtNCw0LvRjNC90L7Qs9C+INC+0LrQvdCwXHJcblx0XHQkKCcubW9kYWwtb3BlbicpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1mb3JtJykuZmFkZUluKCk7XHJcblx0XHR9KTtcclxuXHRcdC8v0JfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdGL0YUg0L7QutC+0L1cclxuXHRcdCQod2luZG93KS5rZXlkb3duKGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0XHRcdGlmKGV2ZW50LmtleUNvZGUgPT0gMjcpIHtcclxuXHRcdFx0XHRcdFx0JCgnLm1vZGFsLWZvcm0nKS5mYWRlT3V0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGVsZW0gPSAkKCcubW9kYWwtZm9ybScpO1xyXG5cdFx0XHRcdHZhciBlbGVtcyA9ICQoJy5tb2RhbC1mb3JtX193cmFwcGVyJyk7XHJcblx0XHRcdFx0aWYgKCFlbGVtcy5pcyhlLnRhcmdldClcclxuXHRcdFx0XHRcdFx0JiYgZWxlbXMuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0XHRcdFx0JCgnLm1vZGFsLWZvcm0nKS5mYWRlT3V0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cclxuXHJcblx0XHQkKCcucG9wdXAnKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdHR5cGU6ICdpbWFnZScsXHJcblx0XHRjbG9zZU9uQ29udGVudENsaWNrOiB0cnVlLFxyXG5cdFx0bWFpbkNsYXNzOiAnbWZwLWltZy1tb2JpbGUnLFxyXG5cdFx0aW1hZ2U6IHtcclxuXHRcdFx0dmVydGljYWxGaXQ6IHRydWVcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cclxuXHJcblxyXG5cdCQoJy5wZXJzb25hbF9fc2xpZGVyIC5pdGVtJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdwZXJzb25hbF9idXR0b24nKSkge1xyXG5cclxuXHRcdH1cclxuXHRcdGVsc2V7IFxyXG5cdFx0XHQkKCcucGVyc29uYWxfX3NsaWRlciAuaXRlbScpLnJlbW92ZUNsYXNzKCdwZXJzb25hbF9idXR0b24nKTtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygncGVyc29uYWxfYnV0dG9uJyk7XHJcblx0XHRcdHZhciBpdGVtID0gJCh0aGlzKS5hdHRyKCdkYXRhLWl0ZW0nKTtcclxuXHRcdFx0JCgnLnBlcnNvbmFsX19pbWcnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQoJy5wZXJzb25hbF9faW1nJykuZXEoaXRlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKCcucGVyc29uYWxfX3RleHRpdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKCcucGVyc29uYWxfX3RleHRpdGVtJykuZXEoaXRlbSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1x0XHJcblx0dmlkZW9fcmVzaXplKCk7XHJcblx0XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdmlkZW9fcmVzaXplKCkge1xyXG4gdmFyIGRvYyA9ICQoZG9jdW1lbnQpLndpZHRoKCk7XHJcbiB2YXIgdmlkZW8gPSAkKCcuaGVhZF9fdmlkZW8gdmlkZW8nKS53aWR0aCgpO1xyXG4gY29uc29sZS5sb2coZG9jKTtcclxuIGNvbnNvbGUubG9nKHZpZGVvKTtcclxuIGlmKGRvYyA8IDE5MjApIHtcclxuIFx0dmFyIGxlZnQgPSAoZG9jIC0gdmlkZW8pLzI7XHJcbiBcdGNvbnNvbGUubG9nKGxlZnQpO1xyXG4gXHQkKCcuaGVhZF9fdmlkZW8gdmlkZW8nKS5jc3MoJ2xlZnQnLCBsZWZ0KydweCcpO1xyXG4gfVxyXG59XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vc3Zfc2V0dGluZ3NcclxudmFyIHNlbGVjdG9yPScuZm9yc3RvbV9fd3JhcCAsIC5mb3JzdG9tX190aXRsZSAsIC5mb3JzdG9tX190ZXh0ICwgLnBlcnNvbmFsX190ZXh0d3JhcCAsIC5wZXJzb25hbF9fdGV4dCAsIC5wZXJzb25hbF9fdGl0bGUgLCBzZWN0aW9uICwgLnRpdGxlICwgLmluZm9fX3RleHQgLCAudXNsdWdpX190ZXh0ICwgLnBob25lX19jZW50ZXIgLCBoMiBzcGFuLCAgLmNvbnRhaW5lciwgIC5jb250YWluZXIgKiwgYm9keSwgLmhlYWRfX3RpdGxlIHN0cm9uZyAsIC5oZWFkX190aXRsZSBoMSwgaGVhZCwgLmhlYWRfX3RpdGxlIGgyLCBmb290ZXIsIC5oZWFkX192aWRlbywgLnBob25lX190b3Agc3Bhbic7XHJcbiAgICAvLy0tLS0tLS0tLS0tLS1cclxuICAgICQoJy5mcy1vdXRlciBidXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoJ2ZvbnQtc2l6ZScsJCh0aGlzKS5jc3MoJ2ZvbnQtc2l6ZScpKTtcclxuICAgICAgICAkLmNvb2tpZSgnZm9udC1zaXplJywkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICQoJy5mcy1vdXRlciBidXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmNzLW91dGVyIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChzZWxlY3RvcikuY3NzKCdjb2xvcicsJCh0aGlzKS5jc3MoJ2NvbG9yJykpO1xyXG4gICAgICAgICQoc2VsZWN0b3IpLmNzcygnYmFja2dyb3VuZCcsJCh0aGlzKS5jc3MoJ2JhY2tncm91bmQnKSk7XHJcbiAgICAgICAgJCgnLmhlYWRfX3RpdGxlIHN0cm9uZyAsIC5oZWFkX190aXRsZSBoMSwgLmhlYWRfX3RpdGxlIGgyLCAuaGVhZF9fdGl0bGUgc3BhbicpLmNzcygnYmFja2dyb3VuZCcsICdub25lJyk7XHJcbiAgICAgICAgJC5jb29raWUoJ2NzJywkKHRoaXMpLmF0dHIoJ2lkJykpO1xyXG4gICAgICAgICQoJy5jcy1vdXRlciBidXR0b24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJCgnLmltZy1vdXRlciBidXR0b24nKS5jbGljayhmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICgkLmNvb2tpZSgnaW1nJykhPSdvbicpe1xyXG4gICAgICAgICAgICAkKCdpbWcnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgICAgICAgICQuY29va2llKCdpbWcnLCdvbicpO1xyXG5cdFx0XHQkKCcucGVyc29uYWxfX2ltZycpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHRcdCQoJy5mb3JzdG9tX190b3AnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcblx0XHRcdCQoJy5wZXJzb25hbF9fdGV4dHdyYXAnKS5jc3Moe1xyXG5cdFx0XHRcdCd3aWR0aCc6JzEwMCUnLFxyXG5cdFx0XHRcdCdtaW4taGVpZ2h0JzonMTAwJSdcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQoJy5wZXJzb25hbF9fdGV4dCcpLmNzcygnaGVpZ2h0JywgJ2F1dG8nKTtcclxuICAgICAgICAgICAgJCgnI2ltZy1vbm9mZi10ZXh0JykudGV4dCgnINCS0LrQu9GO0YfQuNGC0YwnKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoJ2ltZycpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgICAgICAgICQuY29va2llKCdpbWcnLCdvZmYnKTtcclxuXHRcdFx0JCgnLnBlcnNvbmFsX19pbWcuYWN0aXZlJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcblx0XHRcdCQoJy5wZXJzb25hbF9fdGV4dHdyYXAnKS5jc3MoJ3dpZHRoJyAsJzYzJScpO1xyXG5cdFx0XHQkKCcuZm9yc3RvbV9fdG9wJykuY3NzKCdkaXNscGF5JyAsICdibG9jaycpO1xyXG4gICAgICAgICAgICAkKCcjaW1nLW9ub2ZmLXRleHQnKS50ZXh0KCcg0JLRi9C60LvRjtGH0LjRgtGMJyk7XHJcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGlmICgkLmNvb2tpZSgnc3Zfb24nKT09J3RydWUnKXtcclxuICAgICAgICAkKCcjc3Zfb24nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgJCgnI3N2X3NldHRpbmdzJykuY3NzKCdkaXNwbGF5JyAsICdibG9jaycpO1xyXG4gICAgICAgICQoJy5zZWN0aW9uX2ZvcnN0b20nKS5yZW1vdmVDbGFzcygnc2VjdGlvbl9mb3JzdG9tJyk7XHJcblx0XHQkKCcuaGVhZF9fdmlkZW8gdmlkZW8nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0JCgnLmhlYWRfX3ZpZGVvJykucmVtb3ZlQ2xhc3MoJ2hlYWRfX3ZpZGVvJyk7XHJcblx0XHQkKHNlbGVjdG9yKS5jc3MoJ2xpbmUtaGVpZ2h0JywgMS4xKTtcclxuXHRcdCQoc2VsZWN0b3IpLmNzcygnY29sb3InLCAnIzAwMCcpO1xyXG5cdFx0JChzZWxlY3RvcikuY3NzKCdiYWNrZ3JvdW5kJywnI2ZmZicpO1xyXG5cdFx0JCgnLnNlY3Rpb25fcmV2aWV3cycpLnJlbW92ZUNsYXNzKCdzZWN0aW9uX3Jldmlld3MnKTtcclxuICAgICAgICBpZiAoJC5jb29raWUoJ2ZvbnQtc2l6ZScpIT09bnVsbCl7XHJcbiAgICAgICAgICAkKCcjJyskLmNvb2tpZSgnZm9udC1zaXplJykpLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJC5jb29raWUoJ2NzJykhPT1udWxsKXtcclxuICAgICAgICAgICQoJyMnKyQuY29va2llKCdjcycpKS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHQkKHNlbGVjdG9yKS5jc3MoJ2NvbG9yJywgJyMwMDAnKTtcclxuXHRcdFx0JChzZWxlY3RvcikuY3NzKCdiYWNrZ3JvdW5kJywnI2ZmZicpO1xyXG5cdFx0fVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgICQoJyNzdl9vbicpLmNsaWNrKFxyXG4gICAgZnVuY3Rpb24oKXtcclxuXHRcdCQoc2VsZWN0b3IpLmNzcygnY29sb3InLCAnIzAwMCcpO1xyXG5cdFx0JChzZWxlY3RvcikuY3NzKCdiYWNrZ3JvdW5kJywnI2ZmZicpO1xyXG4gICAgaWYgKCQuY29va2llKCdzdl9vbicpIT0ndHJ1ZScpe1xyXG4gICAgJC5jb29raWUoJ3N2X29uJywgJ3RydWUnKTtcclxuXHRcdCQoc2VsZWN0b3IpLmNzcygnY29sb3InLCAnIzAwMCcpO1xyXG5cdFx0JChzZWxlY3RvcikuY3NzKCdiYWNrZ3JvdW5kJywnI2ZmZicpO1xyXG4gICAgaWYgKCQuY29va2llKCdmb250LXNpemUnKT09XCJudWxsXCIpe1xyXG4gICAgICAgJCgnLmZzLW4nKS5jbGljaygpOyBcclxuICAgICAgIFxyXG4gICAgfVxyXG4gICAgaWYgKCQuY29va2llKCdjcycpPT1cIm51bGxcIil7XHJcblxyXG4gICAgICAgJCgnLmNzLWJ3JykuY2xpY2soKTtcclxuXHRcdCQoc2VsZWN0b3IpLmNzcygnY29sb3InLCAnIzAwMCcpO1xyXG5cdFx0JChzZWxlY3RvcikuY3NzKCdiYWNrZ3JvdW5kJywnI2ZmZicpO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgJC5jb29raWUoJ3N2X29uJywgJ2ZhbHNlJyk7IFxyXG4gICAgfVxyXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgICApO1xyXG4gICAgXHJcbn0pOyJdfQ==
