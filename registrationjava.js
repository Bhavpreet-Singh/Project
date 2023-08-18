var $ = function(id){
    return document.getElementById(id);
};
var joinLi = function(){
    var name = $("name1").value;
    var email = $("email1").value;
    var pass = $("password1").value;
    var isValid = true;

    if(name == ""){
        $("name1_error").firstChild.nodeValue = 
        "Required Field";
        isValid = false;
    } else {
        $("name1_error").firstChild.nodeValue = 
        "";
    }
    if (email = "") {
        $("email1_error").firstChild.nodeValue = 
            "Required";
        isValid = false;
    }else {$ ("email1_error").firstChild.nodeValue = "";}


    if ($("password1").value == "") {
        $("password1_error").firstChild.nodeValue = 
           "This field is required";
        isValid = false;
    } else { $ ("password1_error").firstChild.nodeValue = "";}
    if (pass.length <= 6) {
        $("password2_error").firstChild.nodeValue = 
         "Password should contain more than six characters.";
         isValid = false;}

    if (isValid){
        $("register_form").submit();
    }
};
window.onload =  function(){
    $("join_li").onclick = joinLi;
    $("name1").focus();
};




