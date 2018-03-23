
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
 //masonry 
   //$(window).on('load', function(){
    //  $('div.container').masonry({
    //      columnWidth: 'div.blocks',
     //     itemSelector: 'div.blocks'
    //  });
  //  })  
  // nav buttons for mobile
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

