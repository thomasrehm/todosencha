Ext.define('todosencha.store.TodoStore', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        model: 'todosencha.model.TodoModel',
        autoLoad: true,
        autoSync: true,

        proxy: {
            type: 'localstorage',
            id: 'TodoStore'
        }
    }
});
