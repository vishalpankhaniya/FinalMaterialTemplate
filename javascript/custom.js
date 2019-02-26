const dialog=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.mdc-dialog'));
const dialog2=new mdc.dialog.MDCDialog.attachTo(document.querySelector('.dialog2'));
const textField1 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field1'));
const textField2 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field2'));

const textField3 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field3'));
const textField4 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field4'));
const textField5 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field5'));
const textField6 = new mdc.textField.MDCTextField.attachTo(document.querySelector('.field6'));

$('#signin').on('click',function(evt){
	
	dialog.open();
})
$('#cancel').on('click',function(evt){
	
	dialog.close();
})

$('#register').on('click',function(evt){
	
	dialog2.open();
})
$('#cancel').on('click',function(evt){
	
	dialog2.close();
})

$(function(){
	$("#login").on("click", function(){

		var usr = document.getElementById("username").value;
		var pass = document.getElementById("password").value;
		var data={
			usrname:usr,
			password:pass
		}
		console.log(data);
    return false; // return statement is included just as safety measure as this will make sure form is not submitted. 

});
});

$(function(){
	$("#register").on("click", function(){

		var firstname = document.getElementById("fname").value;
		var lastname = document.getElementById("lname").value;
		var email = document.getElementById("email").value;
		var pass = document.getElementById("pass").value;
		var data={
			firstname:firstname,
			lastname:lastname,
			emailId:email,
			password:pass
		}
		console.log(data);
    return false; // return statement is included just as safety measure as this will make sure form is not submitted. 

});
});


// $(document).ready(function(){
//   $("#login").click(function(){
//     var email=document.
//   });
// });
