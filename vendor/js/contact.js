function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters =/^[a-zA-Z\s]*$/; 
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    
    if(n == "" || n == null){
        document.getElementById('nameLabel').innerHTML = ('<strong>Please enter your name</strong>');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
       
  
    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('<strong>Please enter only letters</strong>');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
  
    if(e == "" || e == null ){
          document.getElementById('emailLabel').innerHTML = ('<strong>Please enter your email</strong>');
          document.getElementById('email').style.borderColor = "red";
          return false;
      }
  
    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('<strong>Please enter a valid email address</strong>');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }
  
    if(s == "" || s == null ){
          document.getElementById('subjectLabel').innerHTML = ('<strong>Please enter your subject</strong>');
          document.getElementById('subject').style.borderColor = "red";
          return false;
      }
  
    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('<strong>Please enter only letters</strong>');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }
  
    if(m == "" || m == null){
        document.getElementById('messageLabel').innerHTML = ('<strong>Please enter your message</strong>');
        document.getElementById('message').style.borderColor = "red";
        return false;
    }
  
    else{
          return true;
      }
      
}
var t = window.location.href.indexOf('send');
console.log(t);
if(t!=-1){
  alert("Your message has been sent successfully");
}

// map
var mymap = L.map('mapid').setView([28.6054222,77.0380539], 11);
L.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=f6YtUrA5Dp6VgJepVdWO',{
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
  maxZoom:20,
}).addTo(mymap);
var marker = L.marker([28.605448,77.040248]).addTo(mymap)
  .bindPopup("Yoddhas - Indians Fighting Against Cancer")
  .openPopup();



//sending mail
//view engine setup
