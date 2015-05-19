Ext.define('todosencha.view.TodoInfo', {
    extend: 'Ext.Panel',
    requires: ['todosencha.store.TodoStore'],
    xtype: 'todoInfo',
    config: {
        xtype: 'panel',
        fullscreen: false,
        scrollable: null,
        html: [
            '<footer class="info">',
        //    '<p>Double-click to edit a todo</p>',
            '<p>Created by <a href="http://todosencha.cloudcontrolled.com">Thomas Rehm</a></p>',
            '<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>',
            '</footer>'
        ].join("")

    }
});
