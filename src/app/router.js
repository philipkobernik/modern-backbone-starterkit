import $ from 'jquery';
import Backbone from 'backbone';

import WorkflowView from './views/workflowView.js';


export default Backbone.Router.extend({

  routes: {
    '': 'dashboard',
    'about': 'about'
  },

  initialize: () => {
    $('body').append('<div id="js-app"></div>');
  },

  dashboard: () => {
    var workflowView = new WorkflowView({
      template: 'workflowView'
    }).render();

    $('#js-app').empty().append(workflowView.$el);
  },

  about: () => {
    var helloView = new HelloView({
      template: _.template('Im the about page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  }

});
