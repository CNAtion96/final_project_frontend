(function() {
    'use strict';

    angular
        .module('wattpad', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider, $locationProvider){
            
            var token = localStorage.getItem('token');
            var location = '';
            
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
                .state('profile', {
                    url: '/profile',
                    templateUrl: '../partials/profile.html',
                    controller: 'profileController',
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
                .state('recommended', {
                    url: '/discover/Recommended',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('action', {
                    url: '/discover/action',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('nf', {
                    url: '/discover/Non-Fiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('adventure', {
                    url: '/discover/Adventure',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('paranormal', {
                    url: '/discover/Paranormal',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('chicklit', {
                    url: '/discover/ChickLit',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('poetry', {
                    url: '/discover/Poetry',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('classics', {
                    url: '/discover/Classics',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('fanfiction', {
                    url: '/discover/Fanfiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('romance', {
                    url: '/discover/Romance',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('fantasy', {
                    url: '/discover/Fantasy',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('sf', {
                    url: '/discover/Science_Fiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('gf', {
                    url: '/discover/General_Fiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('ss', {
                    url: '/discover/Short_Story',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('hf', {
                    url: '/discover/Historical_Fiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('spiritual', {
                    url: '/discover/Spiritual',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('horror', {
                    url: '/discover/Horror',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('tf', {
                    url: '/discover/Teen_Fiction',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('humor', {
                    url: '/discover/Humor',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('vampire', {
                    url: '/discover/Vampire',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('mystery', {
                    url: '/discover/Mystery_Thriller',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
                .state('werewolf', {
                    url: '/discover/Werewolf',
                    templateUrl: '../partials/discover.html',
                    controller: 'discoverController',
                    controllerAs: 'vm'
                })
        });
        
})();