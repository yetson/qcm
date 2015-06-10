$(document).ready(function(){		
	var navH = $("nav").offset().top;//获取要定位元素距离浏览器顶部的距离
	var a=['#sell','#car','#check','#price'];

	$(window).scroll(function(){//注册滚动条事件
		scrollEvent0();
		scrollEvent1();
		scrollEvent2();
//显示屏幕滚动距离，请删除下一行
		$('#stop').text($(window).scrollTop());
	});
	
	$('nav a').on('click', function(i){        //点击每个导航栏滚动到页面指定位置
		$($(this).attr("scroll-to")).ScrollTo({duration: 1000});
	});
	$("img.lazy").lazyload({"effect":"fadeIn"});
	
	function scrollEvent0(){           //甄别页面位置，触发交互事件
		var scroH = $(this).scrollTop();
		var z=parseInt($('#zhu1').css("height"));
		var g=parseInt($('#cir3').css("height"));
		if((z==0)&&(scroH>=$('#bk img').offset().top-400)){
		scrollEvent3();} else if((z==1400)&&(scroH<$('#bk img').offset().top-400)){scrollEvent4();};
		if((g==0)&&(scroH>=$('#cir2').offset().top-300)){
		scrollEvent5();} else if((g==599)&&(scroH<$('#cir2').offset().top-300)){scrollEvent6();};
	};

	function scrollEvent1(){            //固定导航栏
		var scroH = $(this).scrollTop();
		if(scroH>=navH){
			$("nav").css({"position":"fixed","top":0,"left":"50%","margin-left":"-480px"});
		}else if(scroH<navH){
			$("nav").css({"position":"static","margin":"0 auto"});
		}
	};

	function scrollEvent2(){            //根据页面位置选择导航栏的值
		var scroH = $(this).scrollTop();
		if(scroH<$(a[0]).offset().top){
			$('.nav a').removeClass("here");
		}
		else if(scroH<$(a[1]).offset().top){
			$('.nav a').removeClass("here");
			$('nav a:eq(0)').addClass("here");
		}
		else if(scroH<$(a[2]).offset().top){
			$('.nav a').removeClass("here");
			$('nav a:eq(1)').addClass("here");
		}
		else if(scroH<$(a[3]).offset().top){
			$('.nav a').removeClass("here");
			$('nav a:eq(2)').addClass("here");
		}
		else {
			$('.nav a').removeClass("here");
			$('nav a:eq(3)').addClass("here");
		}
	};

	function scrollEvent3(){           //car部分的水管流动交互
		$('#zhu1').stop().animate({height:'1400px'},7000);
		$('.ji1').each(function(i){
			var that = this;
			setTimeout(function(){
				$(that).animate({width:'250px'},500);
			},1000*i+2500);
		});

		$('.ji2').each(function(i){
			var that = this;
			setTimeout(function(){
				$(that).animate({width:'250px'},500);
			},1000*i+3000);
		});
	};
	
	function scrollEvent4(){             //car部分的水管流动交互（返回）
		$('#zhu1').stop().animate({height:'0px'},1000);
		$('.ji1').each(function(i){
		$(this).animate({width:'0px'},1000)
		});
		$('.ji2').each(function(i){
		$(this).animate({width:'0px'},1000)
		});
	};

	function scrollEvent5(){             //price部分的p2p水管流动交互
		$('#cir3').stop().animate({height:'599px'},4000);
	};


	function scrollEvent6(){             //price部分的p2p水管流动交互（返回）
		$('#cir3').stop().animate({height:'0px'},1000);
	};
})
