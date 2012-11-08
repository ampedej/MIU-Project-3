/*
Project 3
Edward M Murray Jr
MIU 1211
main js File
GOLD APP
*/
$('#home').on('pageinit', function(){
	//code needed for home page goes here
});
	
$('#additem').on('pageinit', function(){

		var myForm = $('#recipeForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};

