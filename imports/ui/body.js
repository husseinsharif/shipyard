import { Template } from 'meteor/templating';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './body.html';
import './shipyard.html';
import './shipyard.js';

Template.body.onCreated ( function (){

});

Template.body.helpers ({

});

Template.body.events ({

});

// SHOULD BE IN ITS OWN FILE
Template.backbutton.events ({
  'click'(event){
    FlowRouter.go('/');
  }
 
})
