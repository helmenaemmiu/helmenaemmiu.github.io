
$(document).ready(function(){
    
    $(document).keypress(function(e) {
        if(e.which == 83 || e.which == 115) {
           
            $('#start').focus();
        }
      });

});