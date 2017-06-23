import { Template } from 'meteor/templating';
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { Ships } from '../api/ships.js'

import './shipdetail.html';

Template.shipdetail.onCreated ( function (){

});

Template.shipdetail.helpers ({
  getShipDetails: function(){
    return Ships.findOne({"_id":FlowRouter.getParam('shipId')});
  },
  getTechSpecs: function(specs){
    return _.pairs(this.ship.techspecs);
  }
});

Template.shipdetail.events ({

})

Template.carousel.rendered = function() {
  $('#carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true
  });
}
