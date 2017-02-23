$(document).ready(function() {
	var cards = [
		{
			title: "Web Fundamentals",
			links: [
				"http://google.com/",
				"http://stackoverflow.com/"
			]
		},
		{
			title: "HTML",
			links: [
				"http://google.com/",
				"http://stackoverflow.com/"
			]
		},
	]

	/*
	'<div id="one" class="card">
      <h2 class="card--topic">
        <a href="#">Web Fundamentals</a>
      </h2>
      <p><a href="#" class="card--description">How the web works</a></p>
      <p><a href="#" class="card--link">20 things I learned.</a></p>
    </div>'
    */

    var title = "Hello World!"
    var html = "";
    html += '<div id="one" class="card">';
    	html += '<h2 class="card--topic">';
    		html += '<a href="#">' + title + '</a>';
    	html += '</h2>';
    html += '</div>';

	$(".cards").html(html);
})