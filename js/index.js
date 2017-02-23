$(document).ready(function() {
	function init() {
		// Pull the data using AJAX

		// Populate the page after you get the data
	}
    
    function createCards() {
    	var html = "";
      for (i=0; i < cards.length; i++) {
      	var card = cards[i];
      	html += createCard(card);
      }
      return html;
    }

    function createCard(card) {
    	var html = "";
	    	html += '<div id="one" class="card">';
	        html += '<h2 class="card--topic">';
	          html += '<a href="#">' + card.title + '</a>';
	        html += '</h2>';

	        // Add support for description

	        // Turn link generation into a function

	        // Fix link generation with new JSON format
	        
	        html += '<p><a href="' + cards[i].links[0] + '">'+ cards[i].links[0] +'</a></p>';
	        html += '<p><a href="' + cards[i].links[1] + '">'+ cards[i].links[1] +'</a></p>';
	      html += '</div>';
	    return html;
    }

	$(".cards").html(createCards());
})
