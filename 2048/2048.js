var game={
	data:[],
	score:0,
	randomNum:function(){
		if(!this.isFull()){
			while(true){
				var row=Math.floor(Math.random()*4);
				var col=Math.floor(Math.random()*4);
				if(this.data[row][col]==0){
					this.data[row][col]=Math.random()<0.5?2:4;
					break;
				}
			}
		}
	},
	isFull:function(){
		return this.data.toString().search(/(0,)|(,0)/)==-1;
	},
	start:function(){
		this.data=[ [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0] ];
		this.score=0;
		this.randomNum();  
		this.randomNum();
		this.updateView();
	},
	updateView:function(){
		var span=document.getElementById("score");
		span.innerHTML=this.score;
		for(var row=0;row<this.data.length;row++){
			for(var col=0;col<this.data[row].length;col++){
				var div=document.getElementById("c"+row+col);
				if(this.data[row][col]!=0){
					  div.innerHTML=this.data[row][col];
					  div.className="cell n"+this.data[row][col];
				}else{
					  div.innerHTML="";
					  div.className="cell";
				}
			}
		}
		this.gameOver();
		var divOver=document.getElementById("gameOver");
		if(this.state==this.GAMEOVER){
			divOver.style.display="block";
			var Score=document.getElementById("finalScore");
			Score.innerHTML=this.score;
		}else{
			divOver.style.display="none";
		}
	},
	moveLeft:function(){
		var start=this.data.toString();
		for(var row=0;row<4;row++){
			var col=1;
			var c=0;
			while(col<4){
				var prev=this.data[row][col-1]; 
				var curr=this.data[row][col]; 
				if(curr!=0){ this.merge(row,col,row,col-1); }
				if(curr!=0&&prev==0&&(col!=c+1)){  
					col--;
				}else{ 
					col++; 
				if(curr!=0&&prev!=0&&this.data[row][c]!=0){
					c++; 
				}
			}
		}
	}
	var end=this.data.toString();
	if(start!=end){
		this.randomNum(); 
		this.updateView();
	}
},
	moveRight:function(){
		var start=this.data.toString();
		for(var row=0;row<4;row++){
			var col=2; 
			var c=3; 
			while(col>=0){
				var prev=this.data[row][col+1]; 
				var curr=this.data[row][col]; 
				if(curr!=0){ this.merge(row,col,row,col+1); }
				if(curr!=0&&prev==0&&(col!=c-1)){  
					col++;
				}else{ 
					col--;
				if(curr!=0&&this.data[row][c]!=0&&prev!=0){
					c--;
				}
			}
		}
	}
		var end=this.data.toString();
		if(start!=end){
			this.randomNum(); 
			this.updateView();
		}
	},
	moveUp:function(){
		var start=this.data.toString();
		for(var col=0;col<4;col++){
			var row=1; 
			var r=0; 
			while(row<4){
				var prev=this.data[row-1][col]; 
				var curr=this.data[row][col];
				if(curr!=0){ this.merge(row,col,row-1,col); }
				if(curr!=0&&prev==0&&(row!=r+1)){  
					row--;
				}else{ 
					row++; 
				if(curr!=0&&prev!=0&&this.data[r][col]!=0){
					r++; 
				}
			}
		}
	}
	var end=this.data.toString();
	if(start!=end){
		this.randomNum(); this.updateView();}
	},
	moveDown:function(){
		var start=this.data.toString();
		for(var col=0;col<4;col++){
			var row=2;  var r=3; 
		while(row>=0){
			var prev=this.data[row+1][col];
			var curr=this.data[row][col]; 
			if(curr!=0){ this.merge(row,col,row+1,col); }
			if(curr!=0&&prev==0&&(row!=r-1)){  
				row++;
			}else{ row--;
				if(curr!=0&&this.data[r][col]!=0&&prev!=0){
					r--;
				}				
			}
		}
	}
		var end=this.data.toString();
		if(start!=end){
			this.randomNum(); 
			this.updateView();
		}
	},
	merge:function(row,col,prevRow,prevCol){
		if(this.data[prevRow][prevCol]==0){
			this.data[prevRow][prevCol]=this.data[row][col];
			this.data[row][col]=0; 
		}else if(this.data[prevRow][prevCol]==
			         this.data[row][col]){
			this.data[prevRow][prevCol]*=2;
			this.score+=this.data[prevRow][prevCol];
			this.data[row][col]=0; 
		}
	},
	state:1,
	PLAYING:1,
	GAMEOVER:0,
	gameOver:function(){
		if(this.has8192()){
			this.state=this.GAMEOVER;
		}else if(this.isFull()&&!this.canMove()){
			this.state=this.GAMEOVER;
		}else{
			this.state=this.PLAYING;
		}
	},
	canMove:function(){
		for(var row=0;row<4;row++){
			for(var col=0;col<4;col++){
			   var curr=this.data[row][col];
			   if(col!=0){
					if(curr==this.data[row][col-1]){
						return true;
					}
			   }
			   if(col!=3){
					if(curr==this.data[row][col+1]){
						return true;
					}
			   }
			    if(row!=0){
					if(curr==this.data[row-1][col]){
						return true; 
					}
			   }
			   if(row!=3){
					if(curr==this.data[row+1][col]){
						return true
					}
			   }
			}
		}
		return false; 
	},
	has8192:function(){
		return this.data.toString().search(/(8192,)|(,8192)/)!=-1;
	}
}
window.onload=function(){
		game.start();
		document.onkeydown=function(){
			if(game.state==game.PLAYING){
				var event=window.event||arguments[0];
				var code=event.keyCode;
				if(code==37){ game.moveLeft(); }
				else if(code==39){ game.moveRight(); }
				else if(code==38){ game.moveUp(); }
				else if(code==40){ game.moveDown(); }
			}
		}
}