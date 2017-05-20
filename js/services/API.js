(function() {
    'use strict';

    angular
        .module('wattpad')
        .factory('API', function($http){

            return{
                login: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/login`
                    })
                },
                stories: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/home`
                    })
                },
                lists: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/getLists`
                    })
                },
                list: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/getList`
                    })
                },
                addToList: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/addToList`
                    })
                },
                search: (data) => {
                    return $http({
                        method:"POST",
                        data: data,
                        url: `https://finalbackendserver2.herokuapp.com/search`
                    })
                },
            }

         });
        
})();