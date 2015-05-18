Ext.define('todosencha.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Label',
        'Ext.List',
        'todosencha.view.TodoListView',
        'todosencha.view.TodoInfo',
        'todosencha.store.TodoStore',
        'todosencha.view.TodoFooter'
    ],

    config: {
        items: [{
            layout: 'vbox',
            baseCls: 'todoapp',
            items: [{
                flex: 1,
                cls: 'header',
                items: [{
                    xtype: 'label',
                    html: '<h1>todos</h1>'
                }, {
                    xtype: 'textfield',
                    name: 'new-todo',
                    placeHolder: 'What needs to be done?',
                    id: 'newTodoInput',
                    //cls: 'new-todo',
                    inputCls: 'new-todo'
                }]
            }, {
                cls: 'main',
                flex: 2,
                scrollable: null,
                items: [{
                    xtype: 'checkboxfield',
                    cls: 'toggle-all',
                    inputCls: 'toggle-all',
                    clearIcon: true
                }, {
                    cls: 'todo-list',
                    xtype: 'todoList'
                }]
            }, {
                cls: 'footer',
                flex: 1,
                xtype: 'todoFooter'



            }]
        },{
            xtype: 'todoInfo'
        }]
    }

});
