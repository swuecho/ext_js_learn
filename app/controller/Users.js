    Ext.define('AM.controller.Users', {
	extend: 'Ext.app.Controller',
	// this is used to load the view user.List
	// do have to put the view to controller (you can put it in the requires in the main app
	// so the file can be loaded properly
	// but I guess it is easier if put the view to its controller
	stores: [
	    'Users'
	],
	models: ['User'],
	views: [
	    'user.List',
	    'user.Edit'
	],
	init: function() {
	    this.control({
		'userlist': {
		    itemdblclick: this.editUser
		},
		'useredit button[action=save]': {
		    click: this.updateUser
		}
	    });
	},

	editUser: function(grid, record) {
	    var view = Ext.widget('useredit');
	    console.log(view,record);
	    view.down('form').loadRecord(record);
	},
	updateUser: function(button) {
	    var win    = button.up('window'),
		form   = win.down('form'),
		record = form.getRecord(),
		values = form.getValues();

	    record.set(values);
	    win.close();
	}

    });
