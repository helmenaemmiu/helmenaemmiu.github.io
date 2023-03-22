

$(document).ready(function () {

   
    

});


function searchBtnClickHandler(){
    var result =  $('#txt_result');
    result.html('');
    var text =   $('#txt_search').val();
    if(text!='')
    {
        sendRequest(text , result);
    }
    else
    {
        alert('Please enter some words');
    }

}

function sendRequest(text , result)
{
    // $.get("http://localhost:4000/getDefinition/" + text, function(data, status){
    //     result.text(data);
    //   });

    $.ajax({
        type: "get", url: "http://localhost:3000/definition/" + text,
        success: function (data, text) {
            console.log(data);
            fillTheResults(data);
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}

function fillTheResults(results)
{
    if(results=='[]') alert('No results found.');

    $.each( JSON.parse(results), function( key, value ) {
        
        $('#txt_result').append(` <div class="result">
        <h3>${value.word}</h3>
        <h5>${value.wordtype}</h5>
        <p>
        ${value.definition}
        </p>
     </div>`);
        
      });
}