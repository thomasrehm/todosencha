Ext.define('todosencha.view.TodoListView', {
    extend: 'Ext.List',
    alias: 'widget.todoList',
    requires: ['todosencha.store.TodoStore'],
    xtype: 'todoList',
    config: {
        fullscreen: false,
        scrollable: true,
        title: 'List',
        store: 'TodoStore',
        emptyText: '<div style="margin: 5px;">No notes cached.</div><pre></pre><pre>',
        itemTpl: '{title}'

    }
});
