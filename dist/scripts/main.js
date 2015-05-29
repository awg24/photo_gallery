$(document).ready(function(){
	$albumOne = $("#album-1")
	$mainBody = $("#album-view");
	$albumDetailView = $("#album-detail-view");
	$photoWindow = $("#album-1 div");
	$albumDetailView.hide();
	$photoWindow.html("<img src=css/images/camera.png>");

	$albumOne.on("click",goToAlbumDetailView)

	function goToAlbumDetailView(){
		$mainBody.hide();
		$albumDetailView.show();
		var $albumPhoto = $("#album-detail-view-1");
		var html = "<img src=css/images/camera.png>"
		html += " <img src=css/images/olive-branch.jpg>"
		$albumPhoto.html(html);
	}

});