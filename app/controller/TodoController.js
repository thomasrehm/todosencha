Ext.define('todosencha.controller.TodoController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'all': 'onAll',
            'active': 'onActive',
            'completed': 'onCompleted'
        },

        refs: {
            //addTodoButton: '#addTodoButton',
            mainArea: '#main_area',
            newTodoInput: '#newTodoInput',
            todoList: 'main #todoList',
            // completeTodo: 'toggle'


        },

        control: {
            completeTodo: {
                tap: 'setCompleted'
            },
            addTodoButton: {
                tap: 'addToStorage'
            },
            todoList: {
                itemsingletap: 'todoClickPos',
                itemdoubletap: 'editTodo'
            },

            newTodoInput: {
                keyup: function (field, e) {
                    if (e.event.keyCode === 13) {
                        this.addToStorage();
                        this.clearInput();

                    }
                }
            },
            mainArea:  {
                onShowOrHide: 'showOrHide'
            }
        }

    },

    showOrHide: function () {
        var todoStore = Ext.getStore('TodoStore');
        todoStore.load();
        var todoStore_totalCount = todoStore._totalCount;
        if (todoStore._totalCount == 0) {
            this.getMain().hide();
            console.log('kleiner 1');


        }
        console.log(todoStore._totalCount);
    },


    addToStorage: function () {
        //console.log('hello');
        var todoStore = Ext.getStore('TodoStore'),
            todoInput = this.getNewTodoInput().getValue();
        if (todoInput.trim() === '') {
            return;
        }
        todoStore.load();
        todoStore.add({
            title: todoInput,
            completed: false
        });
        todoStore.sync();
    },
    clearInput: function () {
        this.getNewTodoInput().setValue('');
    },
    destroyTodo: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        todoStore.remove(record);
        //record.erase();
        todoStore.sync();
        console.log('deleted');

    },
    editTodo: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        record.get('title');
        evt.getTarget('.edit').style('display: block');

    },

    todoClickPos: function (ctx, index, target, record, evt, eOpts) {
        if (evt.getTarget('.destroy')) {
            this.destroyTodo(ctx, index, target, record, evt, eOpts);
        } else if (evt.getTarget('.toggle')) {
            this.todoCheck(ctx, index, target, record, evt, eOpts)
        };

    },

    todoCheck: function (ctx, index, target, record, e, eOpts) {
        var todoStore = Ext.getStore('TodoStore');
        if (record.get('completed') == true) {
            record.set('completed', false);
        } else {
            record.set('completed', true);
        }
        todoStore.sync();

    }


});
