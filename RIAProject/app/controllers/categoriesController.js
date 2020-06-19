main.controller('categoriesController', ['$scope', '$http',
    function ($scope, $http) {
        $scope.categoryList = [];
        $scope.pageHeading = "Chuck Norris Categories";

        // Function to communicate the API
        $scope.getCategoriesList = function () {
            var $responsePromise;

            // Get data from API
            $responsePromise = $http({
                method: 'GET',
                url: $url + 'categories',
                contenttype: 'application/json',
                headers: {
                    'x-rapidapi-host': $apiHost,
                    'x-rapidapi-key': $apiKey,
                }
            });

            // Process requestss
            $responsePromise.then(
                function successCallback(response) {
                    $scope.categoryList.push.apply($scope.categoryList, response.data);
                }
            );
        };

        // Calling the function
        $scope.getCategoriesList();
    }
]);