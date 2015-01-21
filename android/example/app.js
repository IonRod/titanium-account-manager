
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

//
var account_manager = require('com.ionrod.accountmanager');


label.text = account_manager.getUserEmail();


