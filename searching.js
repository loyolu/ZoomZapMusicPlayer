$(".songtable").hide();
$("iframe").hide();
$("#searchgenre").val("").focus();

$("#searchgenre").keyup(function (event) {
if (event.keyCode === 13) {
    var txt = $("#searchgenre").val();
   	console.log("enter keyup");
   	console.log(txt);
   	getGenre(txt);
   }
});

$("#search").click(function(){
    var txt = $("#searchgenre").val();
   	console.log(txt);
   	getGenre(txt);}); 

var getGenre = function(tag){
	$(".songtable").show();
	$.get("https://api.spotify.com/v1/search?type=track&limit=10&q=" + tag, function(data){
		console.log(data);
	$("#searchresults").empty(); //empties the table before printing search results
	$("#searchgenre").val("").focus();
	$.each(data.tracks.items, function(index,value){
		var songuri = value.uri;
		var songbutton = "<button class='playButton' data-songuri= '" + songuri + "'> play</button>";
		var addTable ="<tr><td class='trackcol'>" + value.name + "</td>" + "<td>" + value.artists[0].name + "</td>"+ "<td class='albumcol'>" + value.album.name + "</td>" + "<td>" + songbutton + "</td></tr>";
			$("#searchresults").append(addTable);
		console.log(value.artists[0].name);
		console.log(value.album.name);
		console.log(value.name);

	});
	$(".playButton").click(function() {
		$("iframe").attr("src", "https://embed.spotify.com/?uri=" + $(this).attr("data-songuri"));
		console.log("play was clicked");
		$("iframe").show();
		$(".begin").hide();
	});
	});
}

