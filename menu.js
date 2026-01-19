var button=document.getElementById("menu_button1");
document.getElementById("menu_button1").addEventListener("click",function(){
    var selectMenu=document.getElementById("select_menu");
    if(selectMenu.style.display==="none"){
        selectMenu.style.display="block";
    } else {
        selectMenu.style.display="none";
    }
});