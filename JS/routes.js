
$(function() {

// Building highlights + Routes ============================ operation //

	/**
	* Building 1
	***/
	$('#building-1').hover(function() {
		$(this).attr("src","./images/building-lit.png").css({"padding-top": "21px","padding-left":"133px"});
		$('#line-1').slideToggle("slow");
		$('#line-2').slideToggle("slow");
		$('#line-3').slideToggle("slow");
	});

	$('#building-1').on('mouseleave',function() {
		$(this).attr("src","./images/building.png").css({"padding-top": "25px","padding-left":"137px"});
	});

	/**
	* Building 2
	***/
	$('#building-2').hover(function() {
		$(this).attr("src","./images/building-lit.png").css({"padding-top": "115px","padding-left":"0px"});
		$('#line-2').slideToggle("slow");
		$('#line-4').slideToggle("slow");
	});

	$('#building-2').on('mouseleave',function() {
		$(this).attr("src","./images/building.png").css({"padding-top": "119px","padding-left":"4px"});
	});

	/**
	* Building 3
	***/
	$('#building-3').hover(function() {
		$(this).attr("src","./images/building-lit.png").css({"padding-top": "103px","padding-left":"47px"});
		$('#line-1').slideToggle("slow");
	});

	$('#building-3').on('mouseleave',function() {
		$(this).attr("src","./images/building.png").css({"padding-top": "107px","padding-left":"51px"});
	});

	/**
	* Building 4
	***/
	$('#building-4').hover(function() {
		$(this).attr("src","./images/building-lit.png").css({"padding-top": "39px","padding-left":"159px"});
		$('#line-3').slideToggle("slow");
		$('#line-5').slideToggle("slow");
	});

	$('#building-4').on('mouseleave',function() {
		$(this).attr("src","./images/building.png").css({"padding-top": "43px","padding-left":"163px"});
	});

	/**
	* Building 5
	***/
	$('#building-5').hover(function() {
		$(this).attr("src","./images/building-lit.png").css({"padding-top": "11px","padding-left":"7px"});
		$('#line-4').slideToggle("slow");
		$('#line-5').slideToggle("slow");
	});

	$('#building-5').on('mouseleave',function() {
		$(this).attr("src","./images/building.png").css({"padding-top": "15px","padding-left":"11px"});
	});
});
