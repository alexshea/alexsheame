Meteor.startup(function(){
	if(Meteor.users.find().count() === 0){
		Accounts.createUser({
			username: 'theredtexan',
			email: 'alexanderwshea@gmail.com',
			password: 'P3nguin$'
		});
	}
});