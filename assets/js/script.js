function getQuote() {
    var queryURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(displayQuote);
}



function displayQuote(quoteData) {
    console.log(quoteData);
    console.log(quoteData.quote.quoteAuthor);
    console.log(quoteData.quote.quoteGenre);
    console.log(quoteData.quote.quoteText);
}

  // Event listener for search button
  $("#button-xlarge").on("click", function (event) {
    event.preventDefault();
    getQuote();
    // Call function to add to array/local storage here?
  });