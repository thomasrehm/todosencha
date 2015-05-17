Ext.define('todosencha.controller.TodoController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            addTodoButton: '#addTodoButton',
            newTodoInput: '#newTodoInput'

        },
        control: {
            addTodoButton: {
                tap: 'addToStorage'
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
    }
});
