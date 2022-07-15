'use strict';
// Function to check Whether both passwords 
// is same or not.
function checkname(inid, outid, elem_name) {
    var elem = document.getElementById(inid).value;
    //var re = /^[a-zA-Z0-9]{8,}$/;
    var xhr = new XMLHttpRequest();


    xhr.open('POST', 'finalServlet');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(elem_name + elem);

    xhr.onload = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(outid).innerHTML = xhr.responseText;
        } else if (xhr.status != 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };

    /*if (!re.test(elem.value)) {
     document.getElementById("wrn_name").innerHTML = "Invalid Username!!";
     }
     else {
     document.getElementById("wrn_name").innerHTML = "";
     }*/
    return;
}
function logincheck(){
    //alert("lala");
    if(document.getElementById("wrn_name").value == "Nice Username!! "){
        document.getElementById("loginp").innerHTML = "Not available";
    }
    else{
        document.getElementById("loginp").innerHTML = "";
    }
}


/*function checkemail() {
 var elem = document.getElementById("b2");
 var re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
 
 checkname();
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_email").innerHTML = "Invalid Email address!!";
 } else {
 document.getElementById("wrn_email").innerHTML = "";
 }
 }*/

function checkPassword() {
    var pw1 = document.getElementById("b31").value;
    var pw2 = document.getElementById("b32").value;

    var elem1 = document.getElementById("b31");
    var elem2 = document.getElementById("b32");
    var re = /^(?=.*\d)(?=.*[A-Za-z])(?=.*[|=|?|+|_|!|/|\\|@|#|\$|%|&]).{8,10}$/;

    if ((!re.test(elem1.value)) && (!re.test(elem2.value))) {
        document.getElementById("lala").innerHTML = "Invalid Password!!";
    } else {

        // If password not entered 
        if (pw1 == '') {
            document.getElementById("lala").setAttribute("style", "color: green;");
            document.getElementById("lala").innerText = "Please enter Password";
        }
        // If confirm password not entered 
        else if (pw2 == '') {
            document.getElementById("lala").setAttribute("style", "color: green;");
            document.getElementById("lala").innerText = "Please confirm password";
        }
        // If Not same return False.     
        else if (pw1 != pw2) {

            document.getElementById("lala").innerText = "Passwords do not match.";

            //alert ("\nPassword did not match: Please try again...") 
            return false;
        }

        // If same return True. 
        else {
            checkname('b32', 'lala', 'pw2=');
            document.getElementById("lala").setAttribute("style", "color: greenyellow;");
            document.getElementById("lala").innerText = "Password Match";
            return true;
        }
    }
}

/*function checknm() {
 
 var elem = document.getElementById("b4");
 var re = /^[A-Za-z]{3,15}$/;
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_nm").innerHTML = "Invalid Name!!";
 } else {
 document.getElementById("wrn_nm").innerHTML = "";
 }
 }
 
 function checksubnm() {
 
 
 var elem = document.getElementById("b5");
 var re = /^[A-Za-z]{3,15}$/;
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_subnm").innerHTML = "Invalid Subname!!";
 } else {
 document.getElementById("wrn_subnm").innerHTML = "";
 }
 }*/

function checkdate() {
    if (document.getElementById("b6").value.length === 0) {
        document.getElementById("wrn_date").innerHTML = "Invalid Date!!";
    } else {
        document.getElementById("wrn_date").innerHTML = "";
        checkname('b6', 'wrn_date', 'bday=');
    }
}

function checkgender() {

    checkdate();
    if ((!document.getElementById('b7').checked) && (!document.getElementById('b81').checked) && (!document.getElementById('b82').checked)) {
        document.getElementById("wrn_gender").innerHTML = "Please select an option!!";
    } else {
        document.getElementById("wrn_gender").innerHTML = "";
        if (document.getElementById('b7').checked) {
            checkname('b7', 'wrn_gender', 'gender=');
        }
        if (document.getElementById('b81').checked) {
            checkname('b81', 'wrn_gender', 'gender=');
        }
        if (document.getElementById('b82').checked) {
            checkname('b82', 'wrn_gender', 'gender=');
        }
    }
}
/*
 function checkaddress() {
 checkname();
 checkemail();
 checkPassword();
 checknm();
 checksubnm();
 checkdate();
 checkgender();
 }
 
 function checkcity() {
 checkname();
 checkemail();
 checkPassword();
 checknm();
 checksubnm();
 checkdate();
 checkgender();
 checkaddress();
 var elem = document.getElementById("b10");
 var re = /^[A-Za-z]{2,20}$/;
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_city").innerHTML = "Invalid City!!";
 } else {
 document.getElementById("wrn_city").innerHTML = "";
 }
 }
 
 function checkjob() {
 checkname();
 checkemail();
 checkPassword();
 checknm();
 checksubnm();
 checkdate();
 checkgender();
 checkaddress();
 checkcity();
 
 var elem = document.getElementById("b11");
 var re = /^[A-Za-z]{3,15}$/;
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_job").innerHTML = "Invalid Job!!";
 } else {
 document.getElementById("wrn_job").innerHTML = "";
 }
 }
 
 function checkhobbies() {
 checkname();
 checkemail();
 checkPassword();
 checknm();
 checksubnm();
 checkdate();
 checkgender();
 checkaddress();
 checkcity();
 checkjob();
 
 var elem = document.getElementById("b12");
 var re = /^[A-Za-z]{1,100}$/;
 
 if (!re.test(elem.value)) {
 document.getElementById("wrn_hobbies").innerHTML = "Invalid!!";
 } else {
 document.getElementById("wrn_hobbies").innerHTML = "";
 }
 }*/

function checkinfo() {

    var elem = document.getElementById("b13");
    var re = /^[A-Za-z]{0,500}$/;

    if (!re.test(elem.value)) {
        document.getElementById("wrn_info").innerHTML = "Invalid!!";
    } else {
        document.getElementById("wrn_info").innerHTML = "";
    }
}

var loc, addr;
function updatebutton(){
    document.getElementById("loginp").innerHTML = "<B>You have successfully Logged in!</B>";
    document.getElementById("wrn_name").innerHTML = "";
    document.getElementById("wrn_email").innerHTML = "";
    document.getElementById("lala").innerHTML = "";
    document.getElementById("wrn_nm").innerHTML = "";
    document.getElementById("wrn_subnm").innerHTML = "";
    document.getElementById("wrn_date").innerHTML = "";
    document.getElementById("wrn_date").innerHTML = "";
    document.getElementById("wrn_gender").innerHTML = "";
    document.getElementById("wrn_addr").innerHTML = "";
    document.getElementById("wrn_city").innerHTML = "";
    document.getElementById("wrn_job").innerHTML = "";
    document.getElementById("wrn_hobbies").innerHTML = "";
    document.getElementById("wrn_info").innerHTML = "";
    document.getElementById("pipi").innerHTML = "";
}

function logout(){
    document.getElementById("b1").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("b31").value = "";
    document.getElementById("b32").value = "";
    document.getElementById("b4").value = "";
    document.getElementById("b5").value = "";
    document.getElementById("b6").value = "";
    document.getElementById("b7").value = "";
    document.getElementById("b81").value = "";
    document.getElementById("b82").value = "";
    document.getElementById("b100").value = "";
    document.getElementById("b10").value = "";
    document.getElementById("b11").value = "";
    document.getElementById("b12").value = "";
    document.getElementById("b13").value = "";
    document.getElementById("wrn_name").innerHTML = "";
    document.getElementById("wrn_email").innerHTML = "";
    document.getElementById("lala").innerHTML = "";
    document.getElementById("wrn_nm").innerHTML = "";
    document.getElementById("wrn_subnm").innerHTML = "";
    document.getElementById("wrn_date").innerHTML = "";
    document.getElementById("wrn_date").innerHTML = "";
    document.getElementById("wrn_gender").innerHTML = "";
    document.getElementById("wrn_addr").innerHTML = "";
    document.getElementById("wrn_city").innerHTML = "";
    document.getElementById("wrn_job").innerHTML = "";
    document.getElementById("wrn_hobbies").innerHTML = "";
    document.getElementById("wrn_info").innerHTML = "";
    document.getElementById("loginp").innerHTML = "";
    document.getElementById("pipi").innerHTML = "";
    document.getElementById("loginp").innerHTML = "<B>You have Logged out!</B>";
}

function pr() {
    //alert("akakka");
    addr = document.getElementById('b100').value + " " + document.getElementById('b10').value + " " + document.getElementById('b9').value;
    loc = "https://nominatim.openstreetmap.org/search?q=" + document.getElementById('b100').value + "+" + document.getElementById('b10').value + "+" + document.getElementById('b9').value + "&format=json&limit=1";
    //url = loc.split(' ').join('+');
}


function Get(myurl) {
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", myurl, false);
    httpreq.send();
    return httpreq.responseText;
}

var json_obj;
var json_obj1;
var long;
var lati;
var mylat;
var mylon;


function loc_check() {
    //document.getElementById("b100").value = "Johnny Bravo"; 


    loc = "https://nominatim.openstreetmap.org/search?q=" + document.getElementById('b100').value + "+" + document.getElementById('b10').value + "+" + document.getElementById('b9').value + "&format=json&limit=1";
    //document.getElementById("lele").innerHTML = loc;
    json_obj = JSON.parse(Get(loc));
    if (json_obj[0] == null) {
        document.getElementById("mapdiv").innerHTML = "";
        document.getElementById('mapdiv').setAttribute("style", "display:none");
        document.getElementById("lele").innerHTML = "That address does not exist.";
    } else {

        document.getElementById("lele").innerHTML = json_obj[0].display_name;
        long = json_obj[0].lon;
        lati = json_obj[0].lat;

        document.getElementById("mapdiv").innerHTML = "";
        document.getElementById('mapdiv').setAttribute("style", "display:block");
        var map = new OpenLayers.Map("mapdiv");
        map.addLayer(new OpenLayers.Layer.OSM());

        var lonLat = new OpenLayers.LonLat(long, lati)
                .transform(
                        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                        map.getProjectionObject() // to Spherical Mercator Projection
                        );

        var zoom = 16;

        var markers = new OpenLayers.Layer.Markers("Markers");
        map.addLayer(markers);

        markers.addMarker(new OpenLayers.Marker(lonLat));

        map.setCenter(lonLat, zoom);

    }
}

function starte() {
    function geo_success(position) {
        mylat = position.coords.latitude;
        mylon = position.coords.longitude;
        var url1;
        url1 = "https://nominatim.openstreetmap.org/reverse?format=geocodejson&lat=" + mylat + "&lon=" + mylon;
        json_obj1 = JSON.parse(Get(url1));

        //document.getElementById("b100").value = mylat +" "+ mylon;
        if (json_obj1.features[0].properties.geocoding.housenumber == null) {
            document.getElementById("b100").value = json_obj1.features[0].properties.geocoding.street;
        } else {
            document.getElementById("b100").value = json_obj1.features[0].properties.geocoding.street + " " + json_obj1.features[0].properties.geocoding.housenumber;
        }
        var ddl = document.getElementById("b9");
        var opts = ddl.options.length;
        for (var i = 0; i < opts; i++) {
            if (ddl.options[i].value == json_obj1.features[0].properties.geocoding.country) {
                ddl.options[i].selected = true;
                break;
            }
        }
        document.getElementById("b10").value = json_obj1.features[0].properties.geocoding.city;
    }

    function geo_error() {
        document.getElementById("lele").innerHTML = "Sorry, no position available.";
    }

    var geo_options = {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000
    };

    navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

    //document.getElementById("b100").value = "lalallal" ; 

}
////////////////////////////////////////////////////////////////////////////////////////////////////////

