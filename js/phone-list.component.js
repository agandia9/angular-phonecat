angular.module('phonecatApp')
	.component('phoneList', {
		template: 
			'<div>' +
				'<p> {{$ctrl.title}} </p>' + //$ctrl. => access vars in this associated controller
				'<ul>' +
				'<li ng-repeat="phone in $ctrl.phones" ng-show="phone.id >= 1">{{phone.name}} :<small> {{phone.snippet}}</small></li>' +
				'</ul>' +
			'</div>',
		controller: function PhoneListController() {
			this.title = "Hi there..."
			this.phones = [{
				id: 0,
				name: 'iPhone 4',
				snippet: 'The special one'
			}, {
				id: 1,
				name: 'iPhone 4S',
				snippet: 'The most special one'
			}, {
				id: 2,
				name: 'iPhone 5',
				snippet: 'The experiment...'
			}]
		}
	})
