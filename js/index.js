$(document).ready(function () {
  function init() {
    // Pull the data using AJAX
    $.get('/js/cards.json', function (cardsData) {
      // Populate the page after you get the data
      var parsedCardsData = JSON.parse(cardsData);
      createCards(parsedCardsData);
    });
  }

  function createCards(cards) {
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      $(createCard(card)).appendTo(".cards").on('click', function() {
        console.log($(this).attr("data-title"));
      });
    }
  }

  function createCard(card) {
    var html = "";
    html += '<div id="card_' + card.id + '" class="card" data-title="' + card.title + '">';
    html += '<h2 class="card--topic">';
    html += '<a href="#">' + card.title + '</a>';
    html += '</h2>';
    // Add support for description
    html += '<p>' + card.description + '</p>';

    // Turn link generation into a function
    html += createLinks(card.links);
    // Fix link generation with new JSON format

    html += '</div>';
    return html;
  }

  function createLinks(links) {
    var html = "";
    for (var i = 0; i < links.length; i++) {
      html += '<p><a href="' + links[i].url + '">' + links[i].title + '</a></p>';
    }
    return html;
  }

  function setCardTitle(title) {
    // Update card title based on clicked card

  }

  init();
})
