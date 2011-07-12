appl.views.Viewport = Ext.extend(Ext.Panel, {
								fullscreen: true,
								layout: 'card',
								cardSwitchAnimation: 'slide',
								initComponent: function() {
									//put instances of cards into appl.views namespace
								alert ("Viewport");
										Ext.apply(appl.views, {
											contactsList: new appl.views.ContactsList(),
											contactDetail: new appl.views.ContactDetail()
										  //contactForm: new appl.views.ContactForm()
										});
								 //alert("Viewport views applied");
									//put instances of cards into viewport
										Ext.apply(this, {
										  items: [
												  appl.views.contactsList,
												  appl.views.contactDetail
												  //appl.views.contactForm,
												  ]
										});
								 //alert ("Viewport cards applied");
										appl.views.Viewport.superclass.initComponent.apply(this, arguments);
								 //alert ("Viewport superclass applied");
								}
								});
