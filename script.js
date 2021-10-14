const colorArr = [
  '#9289FF',
  '#61AAFF',
  '#64C06D',
  '#C2D574',
  '#FA7171',
  '#EFA46D',
  '#E06DCE',
];

const fetchData = () => {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',(json) => {
    $('#text').text(json.quoteText);
    $('#author').text('- '+json.quoteAuthor);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + json.quoteText + '" ' + json.quoteAuthor));
    const color = colorArr[Math.floor(Math.random()*colorArr.length)];
    $('body, #new-quote, #tweet-quote').css('background-color', color);
    $('#text, #author, .repo').css('color', color);
  });
}

$(document).ready(() => {
  fetchData();
})

$('#new-quote').click(() => {
  fetchData();
});