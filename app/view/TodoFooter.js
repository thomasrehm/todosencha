Ext.define('todosencha.view.TodoFooter', {
    extend: 'Ext.Container',
    requires: ['todosencha.store.TodoStore'],
    xtype: 'todoFooter',
    config: {
        fullscreen: false,
        scrollable: null,
        cls: 'footer',
        items: [{
            xtype: 'panel',
            html: '<strong>0</strong> items left',
            cls: 'todo-count'
        },{

            layout: 'hbox',
            cls: 'filters',
            items: [{
                xtype: 'button',
                itemId: 'allTodo',
                html: '<li><a class="selected" href="#/">All</a></li>'

            }, {
                xtype: 'button',
                itemId: 'activeTodo',
                html: '<li><a class="" href="#/active">Active</a></li>'
            }, {
                xtype: 'button',
                itemId: 'completedTodo',
                html: '<li><a class="" href="#/completed">Completed</a></li>'


            }]
        }, {
            xtype: 'button',
            itemId: 'clearCompletedTodo',
            html: '<button class="clear-completed">Clear completed</button>'
        }]


    }
});
