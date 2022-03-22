

(function(window){
  var speakWord="Hello";
  var helloSpeaker={};
  helloSpeaker.speak=

  function(name){
    this.name=name;

    console.log(speakWord+" "+name);
  };

 window.helloSpeaker=helloSpeaker;


})(window);
