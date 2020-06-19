main.controller('randomController', ['$scope', '$http',
    function ($scope, $http) {
        // Overall function to call API
        $scope.callAPI = function () {
            $scope.pageHeading = "Random Chuck Norris Fact";

            // Function to communicate with API
            $scope.getRandomJoke = function () {
                var $responsePromise;

                // Get data from API
                $responsePromise = $http({
                    method: 'GET',
                    url: $url + 'random',
                    contenttype: 'application/json',
                    headers: {
                        'x-rapidapi-host': $apiHost,
                        'x-rapidapi-key': $apiKey,
                    }
                });

                // Process requests
                $responsePromise.then(
                    function successCallback(response) {
                        $scope.randJoke = response.data.value;
                    }
                );
            };

            // Call the function initially
            $scope.getRandomJoke();
        }
        // Call the function initially
        $scope.callAPI();
    }
]);