$(document).ready(function(){
    let colors = ['#E27D60','#85DCB','#E8A87C','#C38D9E','#41B3A3','F64C72','#99738E','#659DBD','##DAAD86'];
    let rand = Math.floor(Math.random() * colors.length);

    let tweetText = '';
    let tweetAuthor = '';

    $.ajax({
        url:'https://api.forismatic.com/api/1.0/',
        jsonp:'jsonp',
        dataType:'jsonp',
        data:{
            method:'getQuote',
            format:'jsonp',
            lang:'en'
        },
        success: function(response){
           let quoteText = response.quoteText;
           tweetText = quoteText;
           let quoteAuthor = response.quoteAuthor;
           tweetAuthor = quoteAuthor;
           $(".main").css("background-color", colors[rand]);
           $("#quoteText").text(quoteText)
           if(quoteAuthor){
               $("#quoteAuthor").text("--" + quoteAuthor);
           }
           else{
            $("#quoteAuthor").text("--Anonymous");
           }
        }
    });
    
    

    $("#get-btn").on('click', function(event){
        event.preventDefault();
        let rand = Math.floor(Math.random() * colors.length);
        $.ajax({
            url:'https://api.forismatic.com/api/1.0/',
            jsonp:'jsonp',
            dataType:'jsonp',
            data:{
                method:'getQuote',
                format:'jsonp',
                lang:'en'
            },
            success: function(response){
               let quoteText = response.quoteText;
               tweetText = quoteText;
               let quoteAuthor = response.quoteAuthor;
               tweetAuthor = quoteAuthor;
               $(".main").css("background-color", colors[rand]);
               $("#quoteText").text(quoteText)
               if(quoteAuthor){
                   $("#quoteAuthor").text("--" + quoteAuthor);
               }
               else{
                $("#quoteAuthor").text("--Anonymous");
               }
            }
        });
    });

    $("#tweet-btn").on('click', function(){
        $("#tweet-btn").attr('href', 'https://twitter.com/intent/tweet?text=' + tweetText + '%20' + '%23'+tweetAuthor);
    })
});