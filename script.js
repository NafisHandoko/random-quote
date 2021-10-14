const fetchData = () => {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',(json) => {
    $('#text').text(json.quoteText);
    $('#author').text('- '+json.quoteAuthor);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));
  });
}

$(document).ready(() => {
  fetchData();
})

$('#new-quote').click(() => {
  fetchData();
});