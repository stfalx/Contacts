appl.views.ContactsList = Ext.extend(Ext.Panel, {
									dockedItems: [{
												  xtype: 'toolbar',
												  title: 'Contacts'
												  }],
									items: [{
											xtype: 'list',
											store: appl.stores.contacts,
											itemTpl: '{givenName} {familyName}',
											onItemDisclosure: function (record) {
											alert ("Item Disclosure");
												Ext.dispatch({
													controller: appl.controllers.contacts,
													action: 'show',
													id: record.getId()
												});
											alert("Item Displayed");
											}
									}],
									initComponent: function() {
										alert("ContactsList init");
										appl.stores.contacts.load();
										alert("Contacts loaded");
										appl.views.ContactsList.superclass.initComponent.apply(this, arguments);
									}
});
