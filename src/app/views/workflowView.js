import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

var StageView = Marionette.ItemView.extend({
	template: 'stage'
});

export default Marionette.ItemView.extend({

  template: 'workflowView',

	templateHelpers: {
		stages: [
			{name: 'Development'},
			{name: 'Test'},
			{name: 'Stage'},
			{name: 'Production'}
		]
	},
	events: {
		'click li a': 'onClick'
	},

	onClick: function(e) {
		var stage = $(e.target).data('stage');
		var stageView = new StageView({
			templateHelpers: { title: stage }
		}).render();

		this.$('.sub-view-container').html(stageView.$el);
	},

  serializeData() {
    return {
      name: 'world'
    };
  }

});
