$(document).ready(function() {
	function init() {
		// Pull the data using AJAX
    $.get('/js/cards.json', function(cardsData) {
      console.log('Cards: ', JSON.parse(cardsData));
		  // Populate the page after you get the data

      $(".cards").html(createCards(JSON.parse(cardsData)));
    });
	}
    
    function createCards(cards) {
    	var html = "";
      for (var i=0; i < cards.length; i++) {
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
          html += '<p>'+ card.description +'</p>';

	        // Turn link generation into a function
          html += createLinks(card.links);
	        // Fix link generation with new JSON format
	      
	      html += '</div>';
	    return html;
    }

    function createLinks(links) {
      var html = "";
      for (var i = 0; i < links.length; i++) {
        html += '<p><a href="' + links[i].url + '">'+ links[i].title +'</a></p>';
      }
      return html;
    }

    init();
})
