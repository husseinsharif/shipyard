import { Meteor } from 'meteor/meteor';
import {Ships} from '../imports/api/ships.js';

Meteor.startup(() => {

  // Remove all existing data
  Ships.remove({});

  // Get JSON
  HTTP.call( 'GET', 'http://demo7475333.mockable.io/spaceships', {}, function( error, response ) {
    console.log(response.data.products);
    
    // Store each ship into database
    response.data.products.forEach(function(item){
      // Insert to DB
      Ships.insert({
        ship : item
      });
    })

  });
});
