 document.body.onkeydown = function(event) {
	 
	 if(event.keyCode==123)
    {
         return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {
         return false;  //Prevent from ctrl+shift+i
    }
    else if(event.ctrlKey && event.keyCode==73)
    {
         return false;  //Prevent from ctrl+i
    }
	else if(event.ctrlKey && event.keyCode==85)
    {
         return false;  //Prevent from ctrl+u
    }
 }
 
 document.body.oncontextmenu= function (e){
	  e.preventDefault();
 }
 