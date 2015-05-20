Ext.define('todosencha.view.MainView', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Label',
        'Ext.List',
        'Ext.field.Checkbox',
        'todosencha.view.TodoListView',
        'todosencha.view.TodoInfo',
        'todosencha.store.TodoStore'
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
                    xtype: 'button',
                    cls: 'toggle-all',
                    itemId: 'toggle-all',
                    hidden: false,
                    action: 'doToggleAll'
                }, {
                    cls: 'todo-list',
                    xtype: 'todoList'
                }]
            }, {
                hidden: false,
                flex: 1,
                id: 'todoFooterID',
                cls: 'footer',
                items: [{
                    xtype: 'label',
                    itemId: 'uncompletedTodos',
                    text: '',
                    cls: 'todo-count'
                }, {

                    layout: 'hbox',
                    cls: 'filters',

                    items: [{
                        xtype: 'button',
                        itemId: 'allTodo',
                        action: 'showAllTodos',
                        style: 'display: inline',
                        html: '<li><a class="selected" href="#/">All</a></li>'

                    }, {
                        xtype: 'button',
                        itemId: 'activeTodo',
                        action: 'showActiveTodos',
                        style: 'display: inline',
                        html: '<li><a class="" href="#/active">Active</a></li>'
                    }, {
                        xtype: 'button',
                        itemId: 'completedTodo',
                        action: 'showCompletedTodos',
                        style: 'display: inline',
                        html: '<li><a class="" href="#/completed">Completed</a></li>'


                    }]
                }, {
                    xtype: 'button',
                    itemId: 'clearCompletedTodo',
                    action: 'clearCompletedTodos',
                    html: '<button class="clear-completed">Clear completed</button>'
                }]

            }]
        }, {
            xtype: 'todoInfo'
        }]
    }
});
