$('#new-quote').click(() => {
  $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',(json) => {
    console.log(json.quoteText);
    $('#text').text(json.quoteText);
    $('#author').text(json.quoteAuthor);
  })
})