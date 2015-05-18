Ext.define('todosencha.controller.TodoController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            addTodoButton: '#addTodoButton',
            newTodoInput: '#newTodoInput',
            destroyTodo: 'destroy',
            completeTodo: 'toggle'


        },
        control: {
            completeTodo: {
                tap: 'setCompleted'
            },
            addTodoButton: {
                tap: 'addToStorage'
            },
            newTodoInput: {
                keyup: function(field, e) {
                    if(e.event.keyCode === 13) {
                        this.addToStorage();
                        this.clearInput();

                    }
                }
            }
        }

    },

    addToStorage: function () {
        //console.log('hello');
        var todoStore = Ext.getStore('TodoStore'),
            todoInput = this.getNewTodoInput().getValue();

        todoStore.load();
        todoStore.add({
            title: todoInput,
            completed: false
        });
        todoStore.sync();
    },
    clearInput: function() {
        this.getNewTodoInput().setValue('');
    },
    destroyTodo: function() {

    },
    setCompleted: function() {
        var todo_id = this.getCompleteTodo().getValue();
        console.log(todo_id);
    }
});
