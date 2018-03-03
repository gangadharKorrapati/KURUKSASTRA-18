$(document).ready(function() {
	setTimeout(remove, 5000);
	$('#site').css("visibility", "visible");
});
function remove(){
	$('#preload').remove();
}