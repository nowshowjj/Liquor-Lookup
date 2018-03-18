  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVlYwiaCNakcW2nFtFvSy1mV0iNBCRYjw",
    authDomain: "project-tequila.firebaseapp.com",
    databaseURL: "https://project-tequila.firebaseio.com",
    projectId: "project-tequila",
    storageBucket: "project-tequila.appspot.com",
    messagingSenderId: "663286812715"
  };
  firebase.initializeApp(config);

 //masonry 
   $(window).on('load', function(){
      $('div.container').masonry({
          columnWidth: 'div.blocks',
          itemSelector: 'div.blocks'
      });
    })  
  // nav buttons for mobile
  $(".button-collapse").sideNav();
        