$(document).ready(function(){
	var employees = [];

	//  update displayed employees list after each submit
	function listEmployee(employee){
		for (var i=0;i<employee.length;i++){
			//Creates new tags for appends
			var $ul = $('<ul>')
			var $liName = $('<li>')
			var $liValue = $('<li>')

			//-----------------Problem is here, I think--------------------
			$liName.text(employee[i].name);
			$liValue.text(employee[i].value);

			$ul.append($liName + $liValue);
			$('.content').append($ul);

			console.log(employee[i].value);
		}
	};


	//Store form results on submit
	$('form').on('submit',function(){
		event.preventDefault(); //Stop Refresh
		var employee = $(this).serializeArray(); //Add results to employee variable
		employees.push(employee);

		listEmployee(employee);



	});
})


	
