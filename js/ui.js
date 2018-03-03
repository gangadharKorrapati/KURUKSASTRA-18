$(document).ready(function() {
	setTimeout(remove, 5000);
	$('#site').css("visibility", "visible");
    $(".button-collapse").sideNav();
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
  $('.modal').modal({
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        
      },
      complete: function() { 

      } // Callback for Modal close
    }
  );