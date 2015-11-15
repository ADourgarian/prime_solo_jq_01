$(document).ready(function(){
	var employees = [];

	//  update displayed employees list after each submit
	function listEmployee(employee){
		var $div = $('<div>');
		var $ulX = $('<ul>');
		for (var i=0;i<employee.length;i++){
			//Creates new tags for appends
			
			var $li = $('<li>');

			//create lists
			$li.append(employee[i].name).append(': ').append(employee[i].value);

			$ulX.append($li)
			
		}
		// append all form content
		console.log(employee[4].value);
		switch (employee[4].value){
		case '1': $ulX.addClass('red')
		break;
		case '2': $ulX.addClass('orange')
		break;
		case '3': $ulX.addClass('yellow')
		break;
		case '4': $ulX.addClass('blue')
		break;
		case '5': $ulX.addClass('green')
		break;
		};
		$div.append($ulX);
		$div.addClass('float');
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

	//Store form results on submit
	$('form').on('submit',function(){
		event.preventDefault(); //Stop Refresh
		var employee = $(this).serializeArray(); //Add results to employee variable
		employees.push(employee);

		listEmployee(employee);
		$('form')[0].reset();

	});

})


	
