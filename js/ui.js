$(document).ready(function() {
	setTimeout(remove, 5000);
	$('#site').css("visibility", "visible");
    $(".button-collapse").sideNav();
window.sr = ScrollReveal();
sr.reveal('.col', { duration: 2000 }, 50);
});
function openmodel(modelid){
	$(modelid).addClass("open");
}
function exitmodel(modelid){
		$(modelid).removeClass("open");

}
function remove(){
	$('#preload').remove();
}