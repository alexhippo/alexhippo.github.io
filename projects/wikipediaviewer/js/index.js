$(document).ready(function() {
  $("#searchTerm").focus();
  $("#clear").hide();
  
  $("#go").click(function(){
    var search = $("#searchTerm").val();
    if (!$("#searchTerm").val()) {
      $("#results").html('<h5>Please enter a valid search term. Or try our randomiser! Click "I like learning" above.</h5>'); 
    }
    else {
      getSearchResults(search);
    }
  });
  
  $("#clear").click(function() {
    $('#results').empty();
    $('#searchTerm').val('');
    $("#clear").hide();
  });
  
  //user story 2: I can click a button to see a random Wikipedia entry.
  $("#random").click(function() {
    window.open('https://en.wikipedia.org/wiki/Special:Random', 'window name', 'window settings'); 
  });
  
  $("#searchTerm").on('keyup', function() {
    if ($(this).val() !== '') {
      $("#clear").show();
    } else {
      $("#clear").hide();
    }
  });
  
  $('#searchTerm').keypress(function(e){
     if(e.which == 13){
        $("#go").click();
       }
    });
  
});

//user story 1: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.
function getSearchResults(search) {
  $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=5&search=' + search + '&callback=?', function(data) {
  console.log(data);
  displaySearchResults(data);
}).error(function() { 
  $('#results').empty();  
  $("#results").html('<h5>Sorry, something went wrong. Please try again later. If the problem still exists, please contact alexhippo.</h5>');   
  });
}

function displaySearchResults(data) {
  $('#results').empty();
  $('#results').append('<h5>Found ' + data[1].length + ' results</h5>');
  for (i = 0; i < data[1].length; i++) {
    $('#results').append('<h3><a href="' + data[3][i] + '" target="blank">' + data[1][i] + '</a></h3>');
    $('#results').append('<p>' + data[2][i] + '</p>');
  }
}