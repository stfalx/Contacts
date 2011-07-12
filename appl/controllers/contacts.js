appl.controllers.contacts = new Ext.Controller({
											  index: function(options) {
											  },
											  show: function(options) {
											   alert("Contacts Controller: show");
												var id = parseInt(options.id),
												contact = appl.stores.contacts.getById(id);
												if (contact) {
											   alert("Got ID = "+id);
											   
													appl.views.contactDetail.updateWithRecord(contact);
													appl.views.viewport.setActiveItem(
														appl.views.contactDetail, options.animation
													);
											   
											   alert("Finished Detail");											   
												}
											  },
											  edit: function(options) {
											  }
											  });

