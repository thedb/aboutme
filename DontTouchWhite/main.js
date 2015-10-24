var board=new Array();
var score=0;
var timerun=0.00;
var t;
$(function(){
	init();//自设函数
});
function init(){
	for(var i=0;i<4;i++){
		board[i]=new Array();
		for(var j=0;j<3;j++){
			var $grid=$("#grid-"+i+"-"+j);
			$grid.css({
				"top" : (i*100)+"px",
				"left" : (j*100)+"px"
			});
			var $Block=$("<div class='block' id='block-"+i+"-"+j+"'></div>");
			$("#box_container").append($Block);
			var $block=$("#block-"+i+"-"+j);
			$block.css({
				"top" : (i*100)+"px",
				"left" : (j*100)+"px"
			});
			board[i][randy]=0;
		}
	}
	for(var i=0;i<4;i++){
		var randy=Math.floor(Math.random()*3);
		if(i>0&&board[i-1][randy]==1){
			randy=Math.floor(Math.random()*3);
		}
		var $block=$('#block-'+i+'-'+randy);
		$block.css("background-color","#000");
		board[i][randy]=1;
	}
	$("#block-3-0").text("按J开始");
	$("#block-3-1").text("按K开始");
	$("#block-3-2").text("按L开始");
}
$(window).keydown(function(event){
	switch(event.keyCode){
		case 74://J
			if(board[3][0]==1){
				if(score==0){
					timeRun();
					moveDown();
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					if(score==50){
						gameover();
					}else{
						moveDown();
					}
				}
			}else{
				gameover();
			}
			break;
		case 75://K
			if(board[3][1]==1){
				if(score==0){
					timeRun();
					moveDown();
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					if(score==50){
						gameover();
					}else{
						moveDown();
					}
				}
			}else{
				gameover();
			}
			break;
		case 76://L
			if(board[3][2]==1){
				if(score==0){
					timeRun();
					moveDown();
					$("#block-3-0").text("");
					$("#block-3-1").text("");
					$("#block-3-2").text("");
				}else{
					if(score==50){
						gameover();
					}else{
						moveDown();
					}
				}
			}else{
				gameover();
			}
			break;
	}
});
function timeRun(){
	timerun+=0.01;
	$('#time_box>span').text(timerun.toString().substr(0,4));
	t=setTimeout("timeRun()",10);
};
function moveDown(){
	for(var i=3;i>=0;i--){
		for(var j=2;j>=0;j--){
			if(i==3){
				$("#block-"+i+"-"+j).css("background-color","#fff");
				board[i][j]=0;
			}else{
				if(board[i][j]==1){
					$("#block-"+(i+1)+"-"+j).css("background-color","#000");
					board[i+1][j]=1;
					$("#block-"+(i)+"-"+j).css("background-color","#fff");
					board[i][j]=0;
				}
			}
		}
	}
	var randy=Math.floor(Math.random()*3);
	$("#block-0-"+randy).css("background-color","#000");
	board[0][randy]=1;
	score++;
}
function gameover(){
	clearTimeout(t);
	$("#box_container").append($("<div id='gameover' class='gameover'><p>本次用时</p><span>"+timerun.toString().substr(0,5)+"秒</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>"));
	var gameover=$('#gameover');
	gameover.css({
		"width":300+"px",
		"height":400+"px",
		"background-color":"rgba(0,0,0,0.5)"
	});
}
function restartgame(){
	timeRun();
	moveDown();
	$("#block-3-0").text("");
	$("#block-3-1").text("");
	$("#block-3-2").text("");
}
restartgame();				