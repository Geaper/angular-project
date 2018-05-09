app.controller('MainController', ['$scope', '$http', 'nyt', function($scope, $http, nyt) {

$scope.list = [];

	nyt.then(function(response) {
		console.log(response);
		for (i = 0; i < response.data.results.length; i++) {
			var story = {
				title: response.data.results[i].title,
				abstract : response.data.results[i].abstract,
				url: response.data.results[i].url
			}
			$scope.list.push(story);
		}
	})

	$scope.todo = {
		title: "Things I need to do",
		list: ["Clean my room", "Go to the store", "study Cracking"]
	}

	$scope.books = {
		title: "Books I need to buy",
		list: []
	}

	function hasOnlyNumbers(item) {
		return /^[0-9]*$/.test(item);
	}

	$scope.addItem = function(itemList, item) {
		//ISBN : 10 or 13 length and consist of only numbers
		if((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)) {
			console.log("ISBN");
			$http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).then(function(data) {
				console.log(data);
				itemList.push("Title: " + data.data.items[0].volumeInfo.title + " // Authors: " + data.data.items[0].volumeInfo.authors);
			})
		}
		else {
			console.log("NOT ISBN");
			itemList.push(item);
		}
	}
}]);