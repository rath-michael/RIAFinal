
$url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/',
    $apiKey = 'ad11c2c5c1mshe56829274645a52p14d015jsn37b142a787ee',
    $apiHost = 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com';

var main = angular.module('demo', ["ngRoute"]);

main.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/views/random.html",
            controller: "randomController"
        })
        .when("/viewCategories", {
            templateUrl: "app/views/viewCategories.html",
            controller: "categoriesController"
        })
});