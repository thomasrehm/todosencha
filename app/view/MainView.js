Ext.define('todosencha.view.MainView', {
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
                    focus: true,
                    placeHolder: 'What needs to be done?',
                    id: 'newTodoInput',
                    inputCls: 'new-todo'
                }]
            }, {
                id: 'main_area',
                cls: 'main',
                flex: 2,
                hidden: false,
                scrollable: null,
                items: [{
                    xtype: 'checkboxfield',
                    cls: 'toggle-all',
                    hidden: true,
                    style: '-webkit-appearance:none !important'
                }, {
                    cls: 'todo-list',
                    xtype: 'todoList'
                }]
            }, {
                cls: 'footer',
                hidden: true,
                flex: 1,
                xtype: 'todoFooter',

                id: 'todoFooterID'

            }]
        }, {
            xtype: 'todoInfo'
        }]
    }
});
