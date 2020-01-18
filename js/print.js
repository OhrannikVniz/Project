$( '.dropbutton' ).click( function() {
  $( '.droptable' ).toggle(500);
  $( '.dropbutton').toggleClass( 'spinEffect' );
});

$( '.dropbuttontwo' ).click( function() {
  $( '.droptabletwo' ).toggle(500);
  $( '.dropbuttontwo').toggleClass( 'spinEffect' );
});

const clockContainer = document.querySelector(".clock");
setInterval(
  () => (clockContainer.innerText = new Date().toLocaleTimeString()),
  1000
);
