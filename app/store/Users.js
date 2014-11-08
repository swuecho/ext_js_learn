Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    fields: ['name', 'email'],
    data: [{
        name: 'Ed',
        email: 'ed@sencha.com'
    }, {
        name: 'Tommy',
        email: 'tommy@sencha.com'
    }]
});
