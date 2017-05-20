(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('homeController', function($stateParams, API) {
            const vm = this;

            vm.type = function(){
                Typed.new('.typing-title', {
                    strings: ["Romance","Fanfiction","Science Fiction","Mystery","Werewolf"],
                    typeSpeed: 80, 
                    backDelay: 900, 
                    loop: true, 
                    loopCount: false, 
                });
            }
            vm.type();
            
            vm.code = {code: $stateParams.code};
            vm.token = localStorage.getItem('token');

            if(!vm.token){
                let login = API.login(vm.code);
                login.then(res => {
                    vm.user = res.data.auth
                    console.log("user",vm.user);
                    localStorage.setItem('token', vm.user.token);
                    localStorage.setItem('usrName', vm.user.username);
                })
            }

            vm.currentCategory = 'Recommended';

            
            vm.getStories = function(){
                vm.stories = {category: vm.currentCategory, limit: 20};
                console.log(vm.currentCategory, vm.category);
                let getStories = API.stories(vm.stories);
                getStories.then(res =>{
                    vm.stories_home = res.data.stories;
                    console.log(vm.stories_home);
                    vm.storyDescription = [vm.stories_home[0]];
                })
            }
            vm.getStories();
            vm.changeCategory = function(category){
                vm.currentCategory = category;
                localStorage.setItem('category', vm.currentCategory);
                vm.getStories();
            }

            vm.read = function(url){
                localStorage.setItem('url', url);
            }
            vm.readStory = localStorage.getItem('url');

            vm.user = {user: localStorage.getItem('usrName')};
            let lists = API.lists(vm.user);
            lists.then(res => {
                vm.lists = res.data.lists;
                console.log(vm.lists);
            })
             vm.addStory = function(story){
                vm.modalStory = [];
                vm.modalStory.push(story);
            }

            vm.showStory = function(story){
                vm.storyDescription = [story];
            }


            vm.list = localStorage.getItem('list_name');
            vm.listId = localStorage.getItem('list_id');

            if(vm.list){
                vm.listLower = vm.list.replace(/\s+/g, '-').toLowerCase();
                vm.param = vm.listLower.replace(/'/g, '');
                console.log(vm.param);
                vm.listUrl = `https://www.wattpad.com/list/${vm.listId}-${vm.param}`;
                console.log(vm.listUrl);
            }

            // var iframe = document.getElementById('iframe');
            
            // if(iframe){
            //     var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            //     var iframeContent;
            //     console.log(iframeDocument);
                
            // }
        })
        
})();