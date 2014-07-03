$(".songtable").hide();
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
	$("#table_div").empty(); //empties the table before printing search results
	$("#searchgenre").val("").focus();
	$.each(data.tracks.items, function(index,value){
		$("#table_div").append("<tr><td class='trackcol'>" + value.name + "</td>" + "<td>" + value.artists[0].name + "</td>"+ "<td class='albumcol'>" + value.album.name + "</td></tr>");

		console.log(value.artists[0].name);
		console.log(value.album.name);
		console.log(value.name);

	});
	});
}

