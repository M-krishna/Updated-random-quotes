$(document).ready(function(){
    let colors = ['#E27D60','#85DCB','#E8A87C','#C38D9E','#41B3A3','F64C72','#99738E','#659DBD','##DAAD86'];
    let rand = Math.floor(Math.random() * colors.length);
    $.ajax({
        url:'http://api.forismatic.com/api/1.0/',
        jsonp:'jsonp',
        dataType:'jsonp',
        data:{
            method:'getQuote',
            format:'jsonp',
            lang:'en'
        },
        success: function(response){
           let quoteText = response.quoteText;
           let quoteAuthor = response.quoteAuthor;
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
            url:'http://api.forismatic.com/api/1.0/',
            jsonp:'jsonp',
            dataType:'jsonp',
            data:{
                method:'getQuote',
                format:'jsonp',
                lang:'en'
            },
            success: function(response){
               let quoteText = response.quoteText;
               let quoteAuthor = response.quoteAuthor;
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
});