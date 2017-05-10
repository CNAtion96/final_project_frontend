(function() {
    'use strict';

    angular
        .module('wattpad', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){
            
            var token = localStorage.getItem('token');
            var location = '';
            var category = localStorage.getItem('category');
            
            if(!token){
                location = '../partials/login.html'
            } else {
                location = '../partials/home.html'
            }

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: location,
                    controller: 'homeController',
                    controllerAs: 'vm'    
                })
                .state('callback', {
                    url: '/callback?code',
                    templateUrl: '../partials/home.html',
                    controller: 'homeController',
                    controllerAs: 'vm'    
                })
                .state('discover', {
                    url: `/discover/${category}`,
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
        });
        
})();