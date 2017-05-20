(function() {
    'use strict';

    angular
        .module('wattpad', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider){
            
            var token = localStorage.getItem('token');
            var location = '';
            
            if(!token){
                location = '../partials/login.html'
            } else {
                location = '../partials/home.html'
            }

            //var category = localStorage.getItem('category');

            $stateProvider
                .state('discover', {
                    url: '/discover/:category',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('recommended', {
                    url: '/discover/Recommended',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
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
                .state('profile', {
                    url: '/profile',
                    templateUrl: '../partials/profile.html',
                    controller: 'profileController',
                    controllerAs: 'vm'    
                })
                .state('story', {
                    url: '/story',
                    templateUrl: '../partials/story.html',
                    controller: 'homeController',
                    controllerAs: 'vm'    
                })
                .state('lists', {
                    url: '/Lists',
                    templateUrl: '../partials/readingLists.html',
                    controller: 'homeController',
                    controllerAs: 'vm'    
                })
                .state('list', {
                    url: '/Reading_List',
                    templateUrl: '../partials/readingList.html',
                    controller: 'homeController',
                    controllerAs: 'vm'    
                })
            $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.wattpad.com/**'
        ])
        });
        
})();