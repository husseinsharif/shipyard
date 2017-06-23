import { Template } from 'meteor/templating';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
    action: function(params, queryParams) {
    	BlazeLayout.render('shipyardcontainer', { main: "shipyard"});
        console.log(params)
    }
});

FlowRouter.route('/ships/:shipId', {
    action: function(params, queryParams) {
    	BlazeLayout.render('shipyardcontainer', { main: "shipdetail", backbutton: 'backbutton'});
    }
});