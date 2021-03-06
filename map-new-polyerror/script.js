
// Load the map 
var map = L.mapbox.map('map', 'robertocarroll.h8bm676d', {

    center: [25, -15],
    zoom: 2,
    minZoom: 2,
    maxZoom: 5,
    maxBounds: [[-85, -180.0],[85, 180.0]],

    gridLayer: {},
    // This line redefines part of the underlying code which
    // sanitizes HTML from MapBox Hosting. The original code is there
    // for the protection of sites, so that malicious map-creators
    // can't add cross-site scripting attacks to sites that use their
    // maps.
    // Turning it off allows any content to be available in tooltips.
    // It's recommended to only with trusted maps.
    gridControl: {
        sanitizer: function (x) { return x; }
    }
});

 var countryLayer = L.geoJson(countryData,  {
      style: getStyle, onEachFeature: onEachFeature
  }).addTo(map);


// colour for different status
// 3 = ongoing preliminary examinations 
// 2 = Completed-Decision not to proceed 
// 1 = Situations under investigation

function getColor(d) {
     return d == 3 ? '#6699cc' :
           d == 2   ? '#A9A0A5' :
                      '#00275D';
}

// Style the country polygons

function getStyle(feature) {
    return {       
        weight: 1,
        opacity: 1,
        color: 'white',      
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
    };
}


function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    countryLayer.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// Listen for individual marker clicks
function zoomToFeature(e) {
    //map.fitBounds(e.target.getBounds());
}


countryLayer.on('click',function (e) {

    e.layer.unbindPopup();

    var getInfo = e.layer.feature;
    var info = '<h2>' + getInfo.properties.name + '</h2>';

    document.getElementById('info').innerHTML = info;

});
