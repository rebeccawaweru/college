window.onscroll=function(){

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop){
            document.getElementById("navBar2").style.display = "flex";

    }else{
        document.getElementById("navBar2").style.display="none";
    }
}

//if(document.body.scrollTop < 50 || document.documentElement.scrollTop){
    // document.getElementById("navBar2").style.display = "none"
//}