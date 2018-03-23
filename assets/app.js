
<<<<<<< HEAD
<<<<<<< HEAD
  // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCVlYwiaCNakcW2nFtFvSy1mV0iNBCRYjw",
//     authDomain: "project-tequila.firebaseapp.com",
//     databaseURL: "https://project-tequila.firebaseio.com",
//     projectId: "project-tequila",
//     storageBucket: "project-tequila.appspot.com",
//     messagingSenderId: "663286812715"
//   };
//   firebase.initializeApp(config);

//   var messagesRef = firebase.database().ref("messages");
=======
=======
>>>>>>> de0594cfc1a10c90f063537adcd3699a758fd1d9
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
<<<<<<< HEAD
>>>>>>> 2da60190d844dc8f99c4b441be597313bd1ef70a

  //var messagesRef = firebase.database().ref("messages");

<<<<<<< HEAD
//   document.getElementById('email').addEventListener('submit', submitForm);

//   function submitForm (e){
//       e.preventDefault();

//       var email = getInputValues("email");

//       saveMessage(email);

//   }

//    save message to firebase

//    function saveMessage (email){
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         email: email
//     })
// }
=======
=======

  //var messagesRef = firebase.database().ref("messages");

>>>>>>> de0594cfc1a10c90f063537adcd3699a758fd1d9

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
<<<<<<< HEAD
>>>>>>> 2da60190d844dc8f99c4b441be597313bd1ef70a
=======
>>>>>>> de0594cfc1a10c90f063537adcd3699a758fd1d9
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
<<<<<<< HEAD
  // $(".button-collapse").sideNav();
        // external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry




  var map;
  var infowindow;
  var pos;
  
  function initMap() {
  
    if (navigator.geolocation) { //GEO LOCATION, FINDS USERS LOCATION
      navigator.geolocation.getCurrentPosition(function(position) {
  
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
=======
  $(".button-collapse").sideNav();
        


      // Requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      var map, infoWindow;
      function initMap() {
>>>>>>> de0594cfc1a10c90f063537adcd3699a758fd1d9
        map = new google.maps.Map(document.getElementById('map'), {
          center: myLocation,
          zoom: 12
        });
        infoWindow = new google.maps.InfoWindow({
          map: map
        });
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
        var myLocation = pos; //Sets variable to geo location long and lat co-ordinates.
  
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: myLocation, //Uses geolocation to find the following
          radius: 10000,
          keyword: ['Liquor+Sales']
        }, callback);
      })
    };
  
  
  
  }
  
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  }
  
  function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location

      

    });
  
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }
  
  initMap();

<<<<<<< HEAD
=======
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }


>>>>>>> de0594cfc1a10c90f063537adcd3699a758fd1d9
