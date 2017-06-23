import { Template } from 'meteor/templating';
import { Ships } from '../api/ships.js'
import { ReactiveVar } from 'meteor/reactive-var'
import {showDetails} from '../../lib/methods.js'
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter  } from 'meteor/kadira:flow-router';

import './shipdetail.html';
import './shipdetail.js';

Template.shipyard.onCreated ( function (){
});

Template.shipyard.helpers ({
  showShips: function(){
      return Ships.find({});
  }
});

Template.shipyard.events ({
  'click .shipBox' (event){

    // Prevent default browser form submit
    event.preventDefault();

    // Get the ID of the ship clicked
    let shipid = event.currentTarget.getAttribute('shipid');

    // Change URL
    FlowRouter.go('/ships/'+shipid);
  }
})
