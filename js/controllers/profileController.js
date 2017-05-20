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

            vm.id = {id: 452469208};
            let list = API.list(vm.id);
            list.then(res => {
                console.log(res);
            })

            vm.whichList = function(id,name){
                localStorage.setItem('list_id', id);
                localStorage.setItem('list_name', name);
                console.log('done');
            }
        })
        
})();