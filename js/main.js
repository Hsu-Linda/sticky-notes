//jQuery ready
$( document ).ready(function(){
      //Creating Stickies, Making Draggable
      $(function() {
          $( ".square" ).draggable();
            //On click event, create div, class draggable & square
            $('div[class=button]').click(function(){
              var userInput=prompt('Input please');
              var htmlData='<div class="square ui-widget-content ui-draggable"><p class="note-text">' + userInput + '</p></div>';
              $('#squarecontainer').append(htmlData);
              $( ".square" ).draggable();
            });
      });
      
      //Slide Up Effect to ----- About Content
      $("#nav_about").click(function(){
          $("#main_content").slideUp();
      });
      
      //Slide Down Effect to ----- Home Content
      $("#nav_home").click(function(){
          $("#main_content").slideDown();
      });
});