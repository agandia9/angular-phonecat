angular.module('phoneList')
	.component('phoneList', {
		 // Note: The URL is relative to our `index.html` file!
		templateUrl: 'js/phone-list/phone-list.template.html',
		controller: function PhoneListController() {
			this.title = "Hi there..."
			this.secondTitle = "PhoneList"
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
			}, {
				id: 3,
				name: 'iPhone 5S',
				snippet: 'The experiment overprized'
			}]
		}
	})
