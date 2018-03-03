$(document).ready(function() {
	setTimeout(remove, 5000);
	$('#site').css("visibility", "visible");
    $(".button-collapse").sideNav();
});
function remove(){
	$('#preload').remove();
}