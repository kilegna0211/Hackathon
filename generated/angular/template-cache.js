angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "</div class=\"row\">\n" +
    "<div class=\"col-xs-12 text-center\">\n" +
    "    <h1><span id=\"title\">web</span>.<span id=\"title2\">travel </span> come travel through a webcam</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"row wrap\">\n" +
    "   <div class=\"search\">\n" +
    "      <input type=\"text\" class=\"searchTerm\" placeholder=\"What are you looking for?\">\n" +
    "      <button type=\"submit\" class=\"searchButton\">\n" +
    "        <i class=\"fa fa-search\"></i>\n" +
    "     </button>\n" +
    "   </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<div class=\"container\">\n" +
    "    <div id=\"row1\" class=\"row\">\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">Beach</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runBeach()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{beach}}\"></a><span class=\"title\">{{title1}}</span><br><span class=\"pays\">{{country1}}</span></div>\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">Mountain</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runMountain()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{mountain}}\"></a><span class=\"title\">{{title2}}</span><br><span class=\"pays\">{{country2}}</span></div>\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">Island</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runIsland()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{island}}\"></a><span class=\"title\">{{title3}}</span><br><span class=\"pays\">{{country3}}</span></div>\n" +
    "    </div>\n" +
    "    <div id=\"row2\" class=\"row\">\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">City</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runMeteo()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{meteo}}\"></a><span class=\"title\">{{title4}}</span><br><span class=\"pays\">{{country4}}</span></div>\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">Golf</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runGolf()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{golf}}\"></a><span class=\"title\">{{title5}}</span><br><span class=\"pays\">{{country5}}</span></div>\n" +
    "        <div class=\"col-sm-4\"><span class=\"theme\">Lake</span><button class=\"btn next pull-right\" type=\"button\" name=\"button\" ng-click=\"runLake()\">More</button><a href=\"/#!/map\"><img class=\"vue\" src=\"{{lake}}\"></a><span class=\"title\">{{title6}}</span><br><span class=\"pays\">{{country6}}</span></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div>\n" +
    "<a href=\"/#!/map\"></a>\n" +
    "  </div>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/map.html",
    "<!-- <div class=\"row\"> -->\n" +
    "\n" +
    "<!-- <div id=\"map\"></div> -->\n" +
    "\n" +
    "<link rel=\"stylesheet\" href=\"/maps/documentation/javascript/demos/demos.css\">\n" +
    "<style>\n" +
    "    .map-control {\n" +
    "        background-color: #fff;\n" +
    "        border: 1px solid #ccc;\n" +
    "        box-shadow: 0 2px 2px rgba(33, 33, 33, 0.4);\n" +
    "        font-family: 'Roboto', 'sans-serif';\n" +
    "        margin: 10px;\n" +
    "        /* Hide the control initially, to prevent it from appearing\n" +
    "             before the map loads. */\n" +
    "        display: none;\n" +
    "    }\n" +
    "    /* Display the control once it is inside the map. */\n" +
    "\n" +
    "\n" +
    "    #map .map-control {\n" +
    "        display: block;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "\n" +
    "    .selector-control {\n" +
    "        font-size: 14px;\n" +
    "        line-height: 30px;\n" +
    "        padding-left: 5px;\n" +
    "        padding-right: 5px;\n" +
    "    }\n" +
    "</style>\n" +
    "</head>\n" +
    "\n" +
    "<body>\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <div id=\"style-selector-control\" class=\"map-control\">\n" +
    "                    <select id=\"style-selector\" class=\"selector-control\">\n" +
    "          <option value=\"default\">Default</option>\n" +
    "          <option value=\"silver\">Silver</option>\n" +
    "          <option value=\"night\">Night mode</option>\n" +
    "          <option value=\"retro\" selected=\"selected\">Retro</option>\n" +
    "          <option value=\"hiding\">Hide features</option>\n" +
    "        </select></div>\n" +
    "                <div id=\"map\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-sm-5\">\n" +
    "                <iframe src=\"https://www.lookr.com/lookout/1196779927#action-play-lifetime\" />\n" +
    "                <div><span class=\"title\">Andilana</span><br><span class=\"pays\">Spain</span></div>\n" +
    "                <div>\n" +
    "                    <h3>About this webcam</h3>\n" +
    "                    <p>This webcam is currently assigned to Andilana Beach Resort. It was originally added on 27 juin 2014 and has been viewed 116 379 times since then. The current picture above was taken il y a 17 minutes, thereby the webcam seems to be\n" +
    "                        currently active. So far, it was added to their personal favorites on webcams.travel by 5 people.</p>\n" +
    "                </div>\n" +
    "\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "    <script>\n" +
    "        var map;\n" +
    "\n" +
    "        function initMap() {\n" +
    "            // Create the map with no initial style specified.\n" +
    "            // It therefore has default styling.\n" +
    "\n" +
    "            var myLatLng = {\n" +
    "                lat: 5.548282,\n" +
    "                lng: 73.465152\n" +
    "            };\n" +
    "            var map = new google.maps.Map(document.getElementById('map'), {\n" +
    "                center: myLatLng,\n" +
    "                scrollwheel: false,\n" +
    "                zoom: 2\n" +
    "            });\n" +
    "            var marker = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: myLatLng,\n" +
    "            });\n" +
    "            var marker1 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 41.69701,\n" +
    "                    lng: 2.84466\n" +
    "                },\n" +
    "            });\n" +
    "            var marker2 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 36.61306,\n" +
    "                    lng: -4.501102\n" +
    "                },\n" +
    "            });\n" +
    "            var marker3 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 7.828903,\n" +
    "                    lng: 98.293133\n" +
    "                },\n" +
    "            });\n" +
    "            var marker4 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 39.001231,\n" +
    "                    lng: 1.577547\n" +
    "                },\n" +
    "            });\n" +
    "            var marker5 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 39.283264,\n" +
    "                    lng: 20.404752\n" +
    "                },\n" +
    "            });\n" +
    "            var marker6 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: -17.929906,\n" +
    "                    lng: 122.210219\n" +
    "                },\n" +
    "            });\n" +
    "            var marker7 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 43.588317,\n" +
    "                    lng: 15.923435\n" +
    "                },\n" +
    "            });\n" +
    "            var marker8 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 25.06997,\n" +
    "                    lng: 55.133096\n" +
    "                },\n" +
    "            });\n" +
    "            var marker9 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 5.548282,\n" +
    "                    lng: 73.465152\n" +
    "                },\n" +
    "            });\n" +
    "            var marker10 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 27.736975,\n" +
    "                    lng: -15.594621\n" +
    "                },\n" +
    "            });\n" +
    "            var marker11 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: -4.442948,\n" +
    "                    lng: 39.536578\n" +
    "                },\n" +
    "            });\n" +
    "            var marker12 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 55.919921,\n" +
    "                    lng: 21.050749\n" +
    "                },\n" +
    "            });\n" +
    "            var marker13 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 21.297012,\n" +
    "                    lng: -157.866883\n" +
    "                },\n" +
    "            });\n" +
    "            var marker14 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 28.054281,\n" +
    "                    lng: -16.733508\n" +
    "                },\n" +
    "            });\n" +
    "            var marker15 = new google.maps.Marker({\n" +
    "                map: map,\n" +
    "                position: {\n" +
    "                    lat: 37.984718,\n" +
    "                    lng: -0.658911\n" +
    "                },\n" +
    "            });\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "            // Add a style-selector control to the map.\n" +
    "            var styleControl = document.getElementById('style-selector-control');\n" +
    "            map.controls[google.maps.ControlPosition.TOP_LEFT].push(styleControl);\n" +
    "\n" +
    "            // Set the map's style to the initial value of the selector.\n" +
    "            var styleSelector = document.getElementById('style-selector');\n" +
    "            map.setOptions({\n" +
    "                styles: styles[styleSelector.value]\n" +
    "            });\n" +
    "\n" +
    "            // Apply new JSON when the user selects a different style.\n" +
    "            styleSelector.addEventListener('change', function() {\n" +
    "                map.setOptions({\n" +
    "                    styles: styles[styleSelector.value]\n" +
    "                });\n" +
    "            });\n" +
    "        }\n" +
    "\n" +
    "        var styles = {\n" +
    "            default: null,\n" +
    "            silver: [{\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f5f5f5'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.icon',\n" +
    "                    stylers: [{\n" +
    "                        visibility: 'off'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#616161'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f5f5f5'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'administrative.land_parcel',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#bdbdbd'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#eeeeee'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#757575'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#e5e5e5'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#9e9e9e'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#ffffff'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.arterial',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#757575'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dadada'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#616161'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.local',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#9e9e9e'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.line',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#e5e5e5'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.station',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#eeeeee'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#c9c9c9'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#9e9e9e'\n" +
    "                    }]\n" +
    "                }\n" +
    "            ],\n" +
    "\n" +
    "            night: [{\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#242f3e'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#242f3e'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#746855'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'administrative.locality',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#d59563'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#d59563'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#263c3f'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#6b9a76'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#38414e'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#212a37'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#9ca5b3'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#746855'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#1f2835'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f3d19c'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#2f3948'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.station',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#d59563'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#17263c'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#515c6d'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'labels.text.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#17263c'\n" +
    "                    }]\n" +
    "                }\n" +
    "            ],\n" +
    "\n" +
    "            retro: [{\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#ebe3cd'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#523735'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    elementType: 'labels.text.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f5f1e6'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'administrative',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#c9b2a6'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'administrative.land_parcel',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dcd2be'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'administrative.land_parcel',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#ae9e90'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'landscape.natural',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dfd2ae'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dfd2ae'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#93817c'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'geometry.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#a5b076'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'poi.park',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#447530'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f5f1e6'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.arterial',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#fdfcf8'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#f8c967'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#e9bc62'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway.controlled_access',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#e98d58'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.highway.controlled_access',\n" +
    "                    elementType: 'geometry.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#db8555'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'road.local',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#806b63'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.line',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dfd2ae'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.line',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#8f7d77'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.line',\n" +
    "                    elementType: 'labels.text.stroke',\n" +
    "                    stylers: [{\n" +
    "                        color: '#ebe3cd'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit.station',\n" +
    "                    elementType: 'geometry',\n" +
    "                    stylers: [{\n" +
    "                        color: '#dfd2ae'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'geometry.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#b9d3c2'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'water',\n" +
    "                    elementType: 'labels.text.fill',\n" +
    "                    stylers: [{\n" +
    "                        color: '#92998d'\n" +
    "                    }]\n" +
    "                }\n" +
    "            ],\n" +
    "\n" +
    "            hiding: [{\n" +
    "                    featureType: 'poi.business',\n" +
    "                    stylers: [{\n" +
    "                        visibility: 'off'\n" +
    "                    }]\n" +
    "                },\n" +
    "                {\n" +
    "                    featureType: 'transit',\n" +
    "                    elementType: 'labels.icon',\n" +
    "                    stylers: [{\n" +
    "                        visibility: 'off'\n" +
    "                    }]\n" +
    "                }\n" +
    "            ]\n" +
    "        };\n" +
    "    </script>\n" +
    "    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBKf4XhXyU15Zn5fH_rBBTKhCj07o4x_78&callback=initMap\" async defer></script>\n" +
    "</body>\n" +
    "\n" +
    "</html>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- <script>\n" +
    "        function initMap() {\n" +
    "          var myLatLng = {lat: -25.363, lng: 131.044};\n" +
    "\n" +
    "          // Create a map object and specify the DOM element for display.\n" +
    "          var map = new google.maps.Map(document.getElementById('map'), {\n" +
    "            center: myLatLng,\n" +
    "            scrollwheel: false,\n" +
    "            zoom: 4\n" +
    "          });\n" +
    "\n" +
    "          // Create a marker and set its position.\n" +
    "          var marker = new google.maps.Marker({\n" +
    "            map: map,\n" +
    "            position: myLatLng,\n" +
    "\n" +
    "          });\n" +
    "        }\n" +
    "\n" +
    "      </script> -->\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBKf4XhXyU15Zn5fH_rBBTKhCj07o4x_78&callback=initMap\"\n" +
    "    async defer></script> -->\n"
  );

  $templateCache.put("anon/navbar.html",
    "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n" +
    "<header>\n" +
    "<div class=\"top_bar\">\n" +
    "<div class=\"container\">\n" +
    "<div class=\"col-md-6\">\n" +
    "<ul class=\"social\">\n" +
    "<li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-facebook text-white\"></i></a></li>\n" +
    "<li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-twitter text-white\"></i></a></li>\n" +
    "<li><a target=\"_blank\" href=\"#\"><i class=\"fa fa-instagram text-white\"></i></a></li>\n" +
    "</ul></div>\n" +
    "\n" +
    "<div class=\"col-md-6\">\n" +
    "<ul class=\"rightc\">\n" +
    "<li><i class=\"fa fa-envelope-o\"></i> webtravel@gmail.com  </li>\n" +
    "<li><i class=\"fa fa-user\"></i> <a href=\"#\">Become a Partner</a></li>\n" +
    "</ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<!--top_bar-->\n" +
    "\n" +
    "\n" +
    "\n" +
    "<nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "    \t<div class=\"container\">\n" +
    "\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n" +
    "\t\t\t<div class=\"navbar-header\">\n" +
    "\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n" +
    "\t\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n" +
    "\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t\t<span class=\"icon-bar\"></span>\n" +
    "\t\t\t\t</button>\n" +
    "\t\t\t\t<a class=\"navbar-brand\" href=\"#\"><img class=\"logo\" src=\"img/map.svg\" width=\"100px\" height=\"100px\"></a>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "\t\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "\n" +
    "\n" +
    "\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n" +
    "\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n" +
    "          <li><a href=\"#\">Partners</a></li>\n" +
    "          <li><a href=\"#\">Login</a></li>\n" +
    "\t\t\t\t</ul>\n" +
    "\n" +
    "\t\t\t</div><!-- /.navbar-collapse -->\n" +
    "\t\t</div><!-- /.container-fluid -->\n" +
    "\t</nav>\n" +
    "\n" +
    "</header>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
