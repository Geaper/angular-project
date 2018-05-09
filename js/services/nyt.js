app.factory('nyt', ['$http', function($http) {
    return $http.get("https://api.nytimes.com/svc/topstories/v2/technology.json", {params: {'api_key': "86d31404dbe24c8683450193b5c7010b"}})

    .then(function(data) {
        return data;
    },function(err) {
        return err;
    });
}])