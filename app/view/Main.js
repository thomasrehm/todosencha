Ext.define('todosencha.view.Main', {
    extend: 'Ext.Container',

    xtype: 'main',
    requires: [
        'Ext.Label',
        'Ext.List',
        'todosencha.view.TodoListView',
        'todosencha.store.TodoStore'
    ],

    config: {
        layout: 'vbox',
        items: [{
            flex: 1,

            items: [{

                xtype: 'textfield',
                name: 'new-todo',
                placeHolder: 'What needs to be done?',
                id: 'newTodoInput',
                listeners: {
                    change: {element: 'el',
                            fn: function(field, newValue, oldValue){
                                console.log(newValue.value);
                            }
                        }
                    // keydown: function (TextField, event) {
                    //     if (event.keycode == '13') {
                    //         console.log('pressed enter');//call your function here
                    //     }
                    // }
                },


            }, {
                xtype: 'button',
                name: 'add-todo',
                id: 'addTodoButton',
                text: 'Add new Todo'


            }]
        }, {
            scrollable: true,
            flex: 2,
            xtype: 'todoList'


        }]
    }

});
