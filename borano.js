function change_back2()
{
    document.body.style.background="url('mountain.jpg')";
    document.body.style.backgroundSize="cover";
}
function change_back1()
{
    document.body.style.background="url('laptop.jpg')";
    document.body.style.backgroundSize="cover";
}

function change_theme()
{
  
   	var x = document.getElementsByClassName("buttoninside");
   	x[0].style.color="white";
   	
   	x[0].style.backgroundColor="black";
   	x[1].style.color="white";
   	x[1].style.backgroundColor="black";
   	x[2].style.color="white";
   	x[2].style.backgroundColor="black";
    	x[3].style.color="white";
   	x[3].style.backgroundColor="black";
  
    
  	var y=document.getElementsByClassName("darktext")
  	y[0].style.color="white";
  	y[0].style.backgroundColor="black";

  	document.getElementById("bottomline").style.backgroundColor="black";
 	 document.getElementById("topline").style.backgroundColor="black";
  
 
}

function setbackground(){

document.body.style.background="url('mountain.jpg')";
document.body.style.backgroundSize="cover";
set.innerHTML=" ";
fullscreen.innerHTML='<i class="fa fa-compress" aria-hidden="true"></i>'


}
function stopplay(){


pause.innerHTML='<i class="fa fa-play" aria-hidden="true"></i>'


}