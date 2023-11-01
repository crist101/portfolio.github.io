
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.links');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', function () {
  this.classList.toggle('is-active');
  menu.classList.toggle('show');
  nav.classList.toggle('nav-background');
});


var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider2");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
  console.log(divisor.style.width);
}

window.onload = function() {
	moveDivisor();
};

$(document).ready(function(){
    $(".avatar").on("click","img",function(){
        $(".response .desc p").remove();
        $(".response .desc ").append(`<p  class="animate__animated animate__lightSpeedInLeft">"${$(this).attr("desc")}"</p>`);
        $(".avatar img").removeClass("active");
        $(this).addClass("active");
    });
    window.addEventListener('resize', function(event) {
        $(".gallery-list, .width").css("max-width",$("body").width());
    }, true);

    $("#selected-language").click(function(){
        if($(".Selection").hasClass("show-language-selection"))
        {
            $(".Selection").removeClass("show-language-selection");
        }else{
            $(".Selection").addClass("show-language-selection");
        }
    });
    $(".Selection ul li").click(function(){
        $("img[alt=SelectedFlag]").attr("src",`${$(this).attr("data-src")}`);
        $("#selected-language").click();
    });
});

let counter = 1;
const numberOfImages = document.getElementsByClassName("imgCheck").length
setInterval(function(){
  document.getElementById('s' + counter).checked = true;
  counter++;
  if(counter > numberOfImages){
    counter = 1;
  }
}, 1000000);

var scroll = document.getElementById("myRange");

scroll.oninput = function () {
	var panel = document.getElementById("galleryScroll");
	
	var total = panel.scrollWidth - panel.offsetWidth;
	var percentage = total*(this.value/100);
	
	console.log(total);
	panel.scrollLeft = percentage;
	//console.log(percentage);
}

