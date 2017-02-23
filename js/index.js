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

    var html = "";
    
    function createCards() {
      for (i=0; i < cards.length; i++) {
      var title = cards[i].title;

      html += '<div id="one" class="card">';
        html += '<h2 class="card--topic">';
          html += '<a href="#">' + title + '</a>';
        html += '</h2>';
        html += '<p><a href="' + cards[i].links[0] + '">'+ cards[i].links[0] +'</a></p>';
        html += '<p><a href="' + cards[i].links[1] + '">'+ cards[i].links[1] +'</a></p>';
      html += '</div>';
      }
    }

  createCards();
	$(".cards").html(html);
})
