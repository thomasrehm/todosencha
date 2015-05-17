Ext.define('todosencha.model.TodoModel', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'id',
        identifier: 'uuid',
        fields: [{
            name: 'id'
        }, {
            name: 'title',
            type: 'string'
        }, {
            name: 'completed',
            type: 'boolean'
        }]
    }
});
