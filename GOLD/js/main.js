/*
Project 3
Edward M Murray Jr
MIU 1211
main js File
GOLD APP
*/
/*$('#home').on('pageinit', function(){
	//code needed for home page goes here
});*/

var storeData = function(data){
	console.log(data);
};
	
$('#additem').on('pageinit', function(){

		var rform = $('#recipeform'),
			rferrorslink = $('#rferrorslink')
			;
		    rform.validate({
			invalidHandler: function(form, validator) {
				rferrorslink.click();
				var html = '';
				for ( var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName + '<li>';
				};
				$("#recipeformerrors ul").html(html);
			},
			submitHandler: function() {
		var data = rform.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};*/

