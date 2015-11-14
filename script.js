$(document).ready(function(){
	var employees = [];

	//  update displayed employees list after each submit
	function listEmployee(employee){
		var $div = $('<div>');
		for (var i=0;i<employee.length;i++){
			//Creates new tags for appends
			
			var $ulX = $('<ul>');
			var $liName = $('<li>');
			var $liValue = $('<li>');

			//create lists
			$liName.append(employee[i].name);
			$liValue.append(employee[i].value);

			$ulX.append($liName).append($liValue);
			$div.append($ulX);

		}
		// append all form content
		$('.content').append($div);

		//Add Button to Delete employee
		function removeEmployee () {
			var $button = $('<button>');
			$button.text('Remove Employee');
			$button.on('click',function () {
				$(this).parent().remove();
			});
			$div.append($button);
		}
		removeEmployee();
	};

	$('.createEmp').on('click',function(){
		$('form').removeClass('display','hide')
	});

	//Store form results on submit
	$('form').on('submit',function(){
		event.preventDefault(); //Stop Refresh
		var employee = $(this).serializeArray(); //Add results to employee variable
		employees.push(employee);

		listEmployee(employee);



	});
})


	
