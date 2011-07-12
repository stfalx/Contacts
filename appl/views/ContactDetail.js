appl.views.ContactDetail = Ext.extend(Ext.Panel, {
			dockedItems: [{
				xtype: 'toolbar',
				title: 'View contact',
				items: [
					{
					  text: 'Back',
					  ui: 'back',
					  listeners: {
						'tap': function () {
							//Ext.dispatch({
							//	controller: appl.controllers.contacts,
							//	action: 'index',
							//	animation: {type:'slide', direction:'right'}
							//});
						}
					  }
					},
					{xtype:'spacer'},
					{
						id: 'edit',
						text: 'Edit',
						ui: 'action',
						listeners: {
							'tap': function () {
								//Ext.dispatch({
								//	controller: appl.controllers.contacts,
								//	action: 'edit',
								//	id: this.record.getId()
								//});
							}
						}
					}
				]
			}],
			updateWithRecord: function(record) {
				alert ("updateWithRecord");
				var toolbar = this.getDockedItems()[0];
				toolbar.setTitle(record.get('givenName') + ' ' + record.get('familyName'));
				alert ("Set title OK" + record.get('givenName') + ' ' + record.get('familyName'));
				toolbar.getComponent('edit').record = record;
				alert("Set Edit record OK");
			},								  
			styleHtmlContent:true,
			scroll: 'vertical',
			items: []
					  
});

