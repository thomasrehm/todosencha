Ext.define('todosencha.view.TodoListView', {
    extend: 'Ext.List',
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
        itemId: 'todoList',
        itemTpl: '{title}'
        // itemTpl: [
        //     '<tpl if="completed == true">',
        //     '<li class="completed">',
        //     '<tpl else>',
        //     '<li>',
        //     '</tpl>',
        //     '<div class="view">',
        //     '<tpl if="completed == true">',
        //     '<input value="{id}" class="toggle" type="checkbox" checked>',
        //     '<tpl else>',
        //     '<input value="{id}" class="toggle" type="checkbox">',
        //     '</tpl>',
        //     '<Label>{title}</Label>',
        //     '<button class="destroy"></button>',
        //     '</div>',
        //     '<input class="edit" value="{title}">',
        //     '</li>'
        // ]

    }
});
