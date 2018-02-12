function query(){
    
    $.get( "/query", function( data ) {
        console.log(data)
        $('.table').text("Data Loaded: " + data);
      });
}