function getQuote() {
    var queryURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(displayQuote);
}

getQuote();

function displayQuote(quoteData) {
    console.log(quoteData);
    console.log(quoteData.quote.quoteAuthor);
    console.log(quoteData.quote.quoteGenre);
    console.log(quoteData.quote.quoteText);
}