(function() {
  // Generated Pixel Id
  var id = 47;
  // initialize the global queue, 'q' which is attached to a 'crl8' object
  if (!("crl8" in window)) {
    window.crl8 = function() {
      window.crl8.q.push(arguments);
    };
    window.crl8.q = [];
  }

  window.crl8.q = [["init", id],
  ["addTimestamp", ""],
  ["addUrl", ""]]


  // load your js library of pixel functions...
  var script = document.createElement("script");
  script.src = "pixel-library.min.js";

  // ...do it asynchronously...
  script.async = true;

  // ...and insert it before the first script on the page!
  var firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);

  /*Adding required information keys
  Add an array with two elements index-->0: function name and index-->1: parameter*/
  
})();
