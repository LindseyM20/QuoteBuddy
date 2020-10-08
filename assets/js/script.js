
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
    moveStuffAround();
    // Call function to add to array/local storage here?
  });

function moveStuffAround() {
  $("#chooseVoice").css("display", "flex");
  $("#intro").css("display", "none");
  $("#getQuote").removeClass("getQuoteIntro");
  $("#getQuote").addClass("getQuoteFinal");
  $("#quoteBtn").removeClass("introBtn");
  $("#quoteBtn").addClass("finalBtn");
}


var quote = "" 
var quoteHere = $("#quoteHere")
var authorSubjectHere = $("#authorSubjectHere")

function displayQuote(quoteData) {
    quoteHere.text(quoteData.quote.quoteText);
    authorSubjectHere.text(quoteData.quote.quoteAuthor + " on " + quoteData.quote.quoteGenre);
    $("#saveBtn").css("display", "flex");
    quote = quoteData.quote.quoteText;
    renderSaved();
}

// Getting previously saved quotes from local storage and creating a new array if one does not exist
var savedQuotes = loadSaved();
function loadSaved() {
  var saved = JSON.parse(localStorage.getItem("saved"));
  if (saved === null) {
      saved = ['"There is more than one way to skin a cat." -Dan \'Peter Lamkin\' Mueller on cat'];
  }
  return saved;
}
// Saving a quote to the array of saved quotes and storing locally
function saveQuote(quote2save) {
  savedQuotes.unshift(quote2save);
  localStorage.setItem("saved", JSON.stringify(savedQuotes));
}

// Rendering the list of saved quotes and buttons for them on the bottom of the page
function renderSaved() {
  var quoteHistory = $("#oldQuotes")
  quoteHistory.empty()
  savedQuotes.forEach(function(q, i) {
    quoteHistory.append($("<div>" + 
      "<p>" + q + "</p>" +
      '<button id="display' + i + '" class="displayBtn pure-button pure-button-primary pure-input-1">' + 
      '<i class="far fa-comment"></i></button>' + 
      '<button id="del' + i + '" class="delBtn pure-button pure-button-primary pure-input-1">' + 
      'X</button></div>'))
    $("#display" + i).on("click", function() {
      var qArray = q.split('"')
      quote = qArray[1]
      quoteHere.text(qArray[1])
      authorSubjectHere.text(qArray[2].substring(2))
    })
    $("#del" + i).on("click", function() {
      savedQuotes.splice(i, 1)
      localStorage.setItem("saved", JSON.stringify(savedQuotes))
      renderSaved()
    })
  })
}

// voice to text
// var quote = ""
var english = ""
var voice = ""

$("#voice").on("click", function (event){
  event.preventDefault();


  var voice =   $("#name-selector").val();
  
  if (voice === "Jack" || voice === "Zoe" || voice ==="Isla"){
      english = "en-au"
  }
  if (voice === "Harry" || voice === "Alice"){
      english = "en-gb"
  }
  if (voice === "Linda" || voice === "Mike" || voice === "John") {
      english = "en-us"
  }
  if (voice === "Oran"){
    english = "en-ie"
  }
  if (voice === "Eka" || voice ==="Ajit"){
    english = "en-in"
  }
  if (voice === "Rose" || voice === "Mason") {
    english = "en-ca"
  }

console.log(voice)
console.log(english)

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

// Event listener for the button to save the currently shown quote
$("#saveBtn").on("click", function (event){
  event.preventDefault();
  saveQuote('"' + quote + '" -' + authorSubjectHere.text());
  renderSaved();
})

// Event listener to call a quote from the saved quotes to the top of the page to be read
$(".displayBtn").on("click", function (event){
  event.preventDefault();
  console.log(this);
})