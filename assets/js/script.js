function getQuote() {
    var queryURL = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(displayQuote);
}

  // Event listener for search button
  $("#getQuote").on("click", function (event) {
    event.preventDefault();
    getQuote();
    // Call function to add to array/local storage here?
  });
 

function displayQuote(quoteData) {
    console.log(quoteData);
    console.log(quoteData.quote.quoteAuthor);
    console.log(quoteData.quote.quoteGenre);
    console.log(quoteData.quote.quoteText);
}


// voice to text
var quote = "Good morning Josh and Lindsey"
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
