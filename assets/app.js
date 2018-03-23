
  //Modal for email information
  

 
  
  
  // Initialize Firebase
  //var config = {
   // apiKey: "AIzaSyCVlYwiaCNakcW2nFtFvSy1mV0iNBCRYjw",
   // authDomain: "project-tequila.firebaseapp.com",
    //databaseURL: "https://project-tequila.firebaseio.com",
    //projectId: "project-tequila",
    //storageBucket: "project-tequila.appspot.com",
   // messagingSenderId: "663286812715"
  //};
  //firebase.initializeApp(config);

  //var messagesRef = firebase.database().ref("messages");


  //document.getElementById('email').addEventListener('submit', submitForm);

  //function submitForm (e){
  //    e.preventDefault();

   //   var email = getInputValues("email");

    //  saveMessage(email);

  //}
//
   //save message to firebase

   //function saveMessage (email){
  //  var newMessageRef = messagesRef.push();
  //  newMessageRef.set({
    //    email: email
   // })
//}
 //masonry 
   //$(window).on('load', function(){
    //  $('div.container').masonry({
    //      columnWidth: 'div.blocks',
     //     itemSelector: 'div.blocks'
    //  });
  //  })  

 
  // nav buttons for mobile
  $(".button-collapse").sideNav();
        


      // Requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -30.285126, lng: 97.731556,15},
          zoom: 8
        });
        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


