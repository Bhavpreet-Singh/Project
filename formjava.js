var $ = function(id) {
    return document.getElementById(id);
};
var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var password1 = $("password1").value;
    var isValid = true;

    if (emailAddress1 == "") {
        $("email_address1_error").firstChild.nodeValue = 
            "This field is required";
        isValid = false;
    } else { $("email_address1_error").firstChild.nodeValue = "";}

    if (emailAddress1 != emailAddress2) {
        $("email_address2_error").firstChild.nodeValue = 
            "This entry must equal first entry";
        isValid = false;
    }else {$ ("email_address2_error").firstChild.nodeValue = "";

}
    if ($("password1").value == "") {
        $("password1_error").firstChild.nodeValue = 
           "This field is required";
        isValid = false;
    } else { $ ("password1_error").firstChild.nodeValue = "";}
    if (password1.length <= 6) {
        $("password2_error").firstChild.nodeValue = 
         "Password should contain more than six characters.";
         isValid = false;
 }
    if (isValid) {
     $("email_form").submit();
}

};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
     
    
