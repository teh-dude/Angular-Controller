angular.module('todoApp', [])

.controller('todoController', function(){
	var todo = this;
	todo.list = [
		{text: 'Aprender Angular.', done: true},
		{text: 'Hacer la tarea.', done: false}
	];

	todo.add = function(){
		todo.list.push({text: todo.todoText, done: false});
		todo.todoText ='';
	};

	todo.archive = function(){
		var oldTodos = todo.list;
		todo.list = [];
		angular.forEach(oldTodos, function(oldTodo){
			if (!oldTodo.done) {
				todo.list.push(oldTodo);
			};
		});
	};
});