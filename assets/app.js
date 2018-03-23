
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

 //Masonry tiles
              $('div.container').imagesLoaded( function() {
                  // images have loaded
                  });
               $(window).on('load', function(){
                  $('div.container').masonry({
                    columnWidth: 'div.blocks',
                    itemSelector: 'div.blocks',
                   });
                })  
  //Modal        
          $(document).ready(function(){
              // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
              $('.modal').modal();
              
           })
           
           $(document).ready(function(){
            
            $('#emailForm').on('keyup', function(){
             var validator = $("#emailForm").validate();
            if (validator.form() && validateEmail($('#email').val())) {
              $('#submitButton').prop('disabled', false);
              $('#submitButton').removeClass('disabled');
            }
              else{
                $('#submitButton').prop('disabled', true);
                $('#submitButton').addClass('disabled');
                }
            }  );
           })
           
           function validateEmail(email) {
           var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return re.test(email.toLowerCase());
           };
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


