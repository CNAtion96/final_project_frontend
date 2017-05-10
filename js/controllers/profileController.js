(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('profileController', function(API) {
            const vm = this;

            vm.user = {user: localStorage.getItem('usrName')};
            let lists = API.lists(vm.user);
            lists.then(res => {
                vm.lists = res.data.lists;
                console.log(vm.lists);
            })
            
        })
        
})();