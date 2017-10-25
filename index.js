$(document).ready(function(){
    function getIP(json) {
  $("#tester").html("My public IP address is: ", json.ip);
}
})
