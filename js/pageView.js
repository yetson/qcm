$(function(){
	var page = {
		init: function(){
			this.liclick();
			this.scrollli();
			this.adjustGuide();
		},
		liclick: function(){
			$("#gtitle2 li").on('click', function(){
				var index = $(this).index();
				$("#span"+(index+1)).ScrollTo({duration: 500});
			});		
		},
		scrollli:function(){
			var spanHs = [];
			var index = 0;
			$("h2 span").each(function(i, v){
				spanHs.push($(v).offset().top);
			});
			$(document).scroll(function(){
				var h = $(document).scrollTop();
				for(var i = 0, len = spanHs.length; i < len - 1; ++i){
					if(h <= spanHs[0]){index = 0;}
					if(spanHs[i] < h && h <= spanHs[i+1]){
						index = i+1;
					}
					$("#gtitle2 li").removeClass("current");
					$("#gtitle2 li:eq('"+(index)+"')").addClass("current");
				}
			});
		},
		adjustGuide: function(){
			var hMax = document.body.scrollHeight || document.documentElement.scrollHeight;
			var header = $("#header").height();
			var footer = $("#footer").height();
			var guide = $(".guide").outerHeight();
			var timer_scroll;
			$(window).scroll(function(){
				var h = $(window).scrollTop();
				var top = parseInt($(".guide").css("top"));
				if(h > header && h < hMax - footer -  guide){
					$(".guide").css({bottom: "auto", top: "10px"});
				}else if(h > hMax - footer -  guide){
					$(".guide").css({top: "auto", bottom: footer + "px"});
				}else{
					$(".guide").css({bottom: "auto", top: "100px"});
				}
			});
		}
	}
	page.init();
});
