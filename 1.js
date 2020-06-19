window.onscroll = function(){
	
    var kc = document.documentElement.scrollTop;
    var header = document.getElementById("header");
    var logo = document.getElementById("logo");
    var hinhanh = document.getElementById("hinhanh");
    var menu = document.getElementById("menu");
    var hinh3 = document.getElementById("hinh3");
   
   if(kc>50){
        hinhanh.style.height = "167px";
        hinhanh.style.width ="250px";
        header.style.padding = "20px 20px";
        logo.style.fontSize = "30px";
        menu.style.top = "190px";
        menu.classList.add("hieuung1");
   
   }else{
        hinhanh.style.height = "167px";
        hinhanh.style.width ="302px";
        header.style.padding = "50px 20px";
        logo.style.fontSize = "40px";
        menu.style.top = "220px";
        menu.classList.remove("hieuung1");
   }
   
    console.log(kc);
}
function opentimkiem(){
	var khung = document.getElementById("khung");
	if (khung.classList.contains("hieuung2")) {
		khung.classList.remove("hieuung2");
	}else{
		khung.classList.add("hieuung2");
	}
	
}

