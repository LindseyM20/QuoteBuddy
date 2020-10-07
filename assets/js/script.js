function getQuote() {
    var queryURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(displayQuote);
}

  // Event listener for search button
  $("#quoteBtn").on("click", function (event) {
    event.preventDefault();
    getQuote();
    // Call function to add to array/local storage here?
  });
var quote = "" 
var quoteHere = $("#quoteHere")
var genreHere = $("#genreHere")
var authorHere = $("#authorHere")

function displayQuote(quoteData) {
    console.log(quoteData);
    console.log(quoteData.quote.quoteAuthor);
    console.log(quoteData.quote.quoteGenre);
    console.log(quoteData.quote.quoteText);
    quoteHere.text(quoteData.quote.quoteText);
    genreHere.text(quoteData.quote.quoteGenre);
    authorHere.text(quoteData.quote.quoteAuthor)

    quote = quoteData.quote.quoteText
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

// voice to text
// var quote = ""
var english = "en-au"
var voice = "jack"

$("#voice").on("click", function (event){
  event.preventDefault();

  $.speech({
      key: 'c20c4262b40342378e9a0c89ff525317',
      src: quote,
      hl: english,
      v: voice,
      r: 0, 
      c: 'mp3',
      f: '44khz_16bit_stereo',
      ssml: false
  });
})
