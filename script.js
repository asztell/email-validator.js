/*var imageArray = new Array();

imageArray[0] = "http://goo.gl/Hy0Kgx";
imageArray[1] = "http://goo.gl/FZnXlK"; 
imageArray[2] = "http://goo.gl/WeHZun"; 
imageArray[3] = "http://goo.gl/x7hr6m";
imageArray[4] = "http://goo.gl/ILAR7J"; 

var i = 0;
function swapImage() {

    if(i < imageArray.length) {
        console.log(imageArray[i]);
        document.getElementById('slide').src = imageArray[i];
        i++;
    } else {
        i = 0;
    }
    window.setTimeout(swapImage, 3000);
}*/

function Label(opt_options) {
    // Initialization
    this.setValues(opt_options);

    // Label specific
    var span = this.span_ = document.createElement('span');
    span.style.cssText = 'position: relative; left: -50%; top: -8px; ' +
        'white-space: nowrap; border: 1px solid blue; ' +
        'padding: 2px; background-color: white';

    var div = this.div_ = document.createElement('div');
    div.appendChild(span);
    div.style.cssText = 'position: absolute; display: none';
};
Label.prototype = new google.maps.OverlayView;

// Implement onAdd
Label.prototype.onAdd = function () {
    var pane = this.getPanes().overlayLayer;
    pane.appendChild(this.div_);

    // Ensures the label is redrawn if the text or position is changed.
    var me = this;
    this.listeners_ = [
    google.maps.event.addListener(this, 'position_changed',

    function () {
        me.draw();
    }),
    google.maps.event.addListener(this, 'text_changed',

    function () {
        me.draw();
    })];
};

// Implement onRemove
Label.prototype.onRemove = function () {
    this.div_.parentNode.removeChild(this.div_);

    // Label is removed from the map, stop updating its position/text.
    for (var i = 0, I = this.listeners_.length; i < I; ++i) {
        google.maps.event.removeListener(this.listeners_[i]);
    }
};

// Implement draw
Label.prototype.draw = function () {
    var projection = this.getProjection();
    var position = projection.fromLatLngToDivPixel(this.get('position'));

    var div = this.div_;
    div.style.left = position.x + 'px';
    div.style.top = position.y + 'px';
    div.style.display = 'block';

    this.span_.innerHTML = this.get('text').toString();
};

(function () {
    var mapCanvas = document.getElementById('map_canvas'),
        mapOptions = {
            center: new google.maps.LatLng(34.02851, -118.413835),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(mapCanvas, mapOptions),
        pos1 = new google.maps.LatLng(34.02851, -118.413835),
        infowindow = new google.maps.InfoWindow({
            content: "I live here" + ". ." + ". ."
        }),
        ArpadsHouse = new google.maps.Marker({
            position: pos1,
            map: map,
            title: "Arpad's house",
            visible: true
            //          ,draggable: true
        }),
        label = new Label({
            map: map
        });
    label.bindTo('position', ArpadsHouse, 'position');
    label.bindTo('text', ArpadsHouse, 'title');
    infowindow.open(map, ArpadsHouse);
    var labelText = "Arpad's house",
        myOptions = {
            content: labelText,
            boxStyle: {
                border: "1px solid black",
                textAlign: "center",
                fontSize: "8pt",
                width: "50px"
            },
            disableAutoPan: true,
            pixelOffset: new google.maps.Size(-25, 0),
            position: new google.maps.LatLng(34.02851, -118.413835),
            closeBoxURL: "",
            isHidden: false,
            pane: "mapPane",
            enableEventPropagation: true
        },
        ibLabel = new InfoBox(myOptions);
    ibLabel.open(map);
})();

    var i = 1,
        create_link = function() {
            $('<div/>', {
                id: 'activeLink' + [i + 1],
                href: '#' + [i + 1],
                onclick: 'create_link();',
                text: '#' + [i + 1]
            }).appendTo('#activeLink' + [i]);
            $('<span/>', {
                id: 'nextText' + [i + 1]
    /*,text: '<' + '===' + ' ' + 'clickable link'*/
            }).appendTo('#activeLink' + [i + 1]);
            i++;
            document.getElementById('activeLink' + [i - 1]).setAttribute('onclick', '');
    /*            if (i > 2) {
                document.getElementById('activeLink' + [i - 1]).removeChild(document.getElementById('nextText' + [i]);
    }*/
        };
