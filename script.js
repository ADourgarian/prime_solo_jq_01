/*$(document).ready(function(){
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
*/

function Employee(firstName, lastName, num, myTitle, reviewScore, salary) {
	
	var newEmp = {};
  	newEmp.firstName = firstName;
 	newEmp.lastName = lastName;
 	newEmp.empNum = num;
 	newEmp.title = myTitle;
 	newEmp.lastScore = reviewScore;
 	newEmp.salary = salary;
 	console.log(newEmp)
 	return newEmp;
 	
 //	var newEmpA = [firstName, lastName, num, myTitle, salary, reviewScore]
 //	return newEmpA;
 }
function EmployeeList(){
	var list = [];

	this.getList = function() {
		return list.slice(0);
	}

	this.addEmployee = function(employee) {
		if(numExists(employee.num)) {
			console.log('cant create, employee num already used')
			return;
		}
		if(employee instanceof Employee) {
			console.log('seflij');
			list.push(employee);
		}
		else {			
			console.log('seflij');
			list.push(employee);
		};
	}

	this.removeEmployee = function(num) {
		for(var i = 0; i < list.length; i++){
			list.splice(i,1);
			break;
		}
	}
	numExists = function(num) {
		return list.some(function(element, index, array) {
			console.log('asdfs');
			return num == element.num;
		});
	}
};
$(function(){
	var employeesList = new EmployeeList();
	console.log(employeesList);

	$('form').on('submit',function(event){
		event.preventDefault();

		employeesList.addEmployee(new Employee($('.fn').val(),$('.ln').val(),$('.empNum').val(),$('.myTitle').val(),$('.LRS').val(),$('.salary').val()))
		console.log(employeesList.getList());
		var employeeTemplate = $('#employee-list').html();

		var theTemplate = Handlebars.compile(employeeTemplate);

		var compiledHtml = theTemplate({employees: employeesList.getList()});

		$(".employees").append(compiledHtml);

	});
	$('.remove').on('click',function(){
		alert('asdf');
		$('body').css({'background-color':'yellow'});
	})
/*
	var employeeTemplate = $('#employee-list').html();

	var theTemplate = Handlebars.compile(employeeTemplate);

	var compiledHtml = theTemplate({employees: list.getList()});

	$(".employees").append(compiledHtml);
*/
});





















