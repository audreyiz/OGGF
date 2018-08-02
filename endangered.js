var images=['tiger_swimming.jpg','tiger_flickr_Kristof Borkowski.jpg','image_url_3','image_url_4'];

setInterval(function(){
  var url=images[Math.floor(Math.random() * images.length)];
  document.body.style.backgroundImage = 'url('+url+')';
},5000);
