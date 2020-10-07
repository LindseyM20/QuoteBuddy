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

// Getting previously saved quotes from local storage and creating a new array if one does not exist
var savedQuotes = loadSaved();
function loadSaved() {
  var saved = JSON.parse(localStorage.getItem("saved"));
  if (saved === null) {
      saved = ["This is a test quote. -Josh"];
  }
  return saved;
}
// Saving a quote to the array of saved quotes and storing locally
function saveQuote(quote) {
  savedQuotes.unshift(quote);
  localStorage.setItem("saved", JSON.stringify(savedQuotes));
}