// var SERVER = 'http://localhost/loris/'
var SERVER = 'http://127.0.0.1:8080/loris/'
var INFO = '/info.json'


var SAMPLES = [
  'segIns_001.jp2'
]

var height = jQuery(window).height();
var width = jQuery(window).width();

$('#viewer').width( width );
$('#viewer').height( height );
$('#container').width( width );
$('#container').height( height );
$('.toolbar').width( width );

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars() {
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var osd_config = {
  id: "viewer",
  prefixUrl: "js/openseadragon/images/",
  preserveViewport: true,
  showNavigator:  true,
  visibilityRatio: 1,
  minZoomLevel: 3,
  minLevel: 3,
  showNavigator:  false,
  tileSources: []
}


feedMe = getUrlVars()['feedme'];

if (feedMe) {
  osd_config['tileSources'].push(SERVER + feedMe + INFO);
} else {
  for (c=0; c<SAMPLES.length; c++) {
    osd_config['tileSources'].push(SERVER + SAMPLES[c] + INFO);
  }
}

OpenSeadragon(osd_config);
