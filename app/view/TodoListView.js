Ext.define('todosencha.view.TodoListView', {
    extend: 'Ext.DataView',
    alias: 'widget.todoList',
    requires: ['todosencha.store.TodoStore'],
    xtype: 'todoList',
    config: {
        fullscreen: false,
        scrollable: null,
        autoLoad: true,
        deferEmtyText: true,
        store: 'TodoStore',
        cls: 'view',
        itemTpl: [
            '<li>',
            '<div class="view">',
            '<tpl if="completed == true">',
            '<input value="{id}" class="toggle" type="checkbox" checked>',
            '<tpl else>',
            '<input value="{id}" class="toggle" type="checkbox">',
            '</tpl>',
            '<Label>{title}</Label>',
            '<button class="destroy"></button>',
            '</div>',
            '</li>'
        ]

    }
});
