// JavaScript Document
$(function(){
	var yuan_img_w;
	function resize_img(){
	for(var i=0;i<$(".yuan_img").length;i++){
		yuan_img_w=$(".yuan_img").eq(i).width();
		$(".yuan_img").eq(i).css({"height":yuan_img_w+"px","line-height":yuan_img_w+"px","top":-yuan_img_w*0.5+"px"});
		$(".yuan_img").eq(i).parent().css("height",yuan_img_w*0.75+"px");
		$(".yuan_img").eq(i).parent().parent().css("margin-top",yuan_img_w*0.5+"px");
		}
	}
	resize_img();
	$(window).resize(function(){
		resize_img();
		})
	$(".ppai li a").click(function(){
		$(this).parent().parent().find(".cur").removeClass("cur");
		$(this).addClass("cur");
		$(".ppai").parent().prev().find(".sxuan span").text($(this).text());
		$("#ppai").val($(this).attr("data"));
		})
	$(".price li a").click(function(){
		$(this).parent().parent().find(".cur").removeClass("cur");
		$(this).addClass("cur");
		$(".price").parent().prev().find(".sxuan span").text($(this).text());
		$("#price").val($(this).attr("data"));
		})
	$(".speed li a").click(function(){
		$(this).parent().parent().find(".cur").removeClass("cur");
		$(this).addClass("cur");
		$(".speed").parent().prev().find(".sxuan span").text($(this).text());
		$("#speed").val($(this).attr("data"));
		})
	$(".reset").click(function(){
		$("#ppai").val(0);
		$("#price").val(0);
		$("#speed").val(0);
		$(".ppai").parent().prev().find(".sxuan span").text("不限");
		$(".speed").parent().prev().find(".sxuan span").text("不限");
		$(".ppai .cur").removeClass("cur");
		$(".ppai li").eq(0).find("A").addClass("cur");
		$(".price .cur").removeClass("cur");
		$(".price li").eq(0).find("A").addClass("cur");
		$(".speed .cur").removeClass("cur");
		$(".speed li").eq(0).find("A").addClass("cur");
		})
	$(".ar_054 h3").click(function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(this).next(".c_info").hide();
			}
		else{
			$(this).addClass("cur");
			$(this).next(".c_info").show();
			}
		})
	//if($("#choose").length>0){if($("#choose a").eq(0).hasClass("cur")){$("#choose a b").hide();}}
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$(".ar_07 .a_top").addClass("fixed");
			}
		else{
			$(".ar_07 .a_top").removeClass("fixed");
			}
		})
	})