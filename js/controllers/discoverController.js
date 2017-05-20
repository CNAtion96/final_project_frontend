(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('discoverController', function($state, API) {
            const vm = this;

            vm.currentCategory = localStorage.getItem('category');

            vm.hS = function(){
                $('.bar').removeClass('animate');
                $('.menu').addClass('hidden');
            }


            vm.usrName = localStorage.getItem('usrName');
            
            vm.logout = function(){
                localStorage.setItem('token', '');
            }

            vm.changeCategory = function(category){
                vm.hS();
                vm.currentCategory = category;
                localStorage.setItem('category', vm.currentCategory);
                vm.getStories();
            }

            vm.search = function(){
                localStorage.setItem('category', vm.searchTxt);
                console.log(vm.currentCategory);
                //checking to see if search string contains #
                //and replacing it with %23 if one is found
                if(vm.searchTxt.includes('#')){
                    vm.searchText = vm.searchTxt.replace(/#/g, '%23').toLowerCase();
                    vm.searchObj = {search: vm.searchTxt};
                    $state.go('discover',{'category': vm.searchTxt});
                    let search = API.search(vm.searchObj);
                    search.then(res=> {
                        console.log(res.data);
                    })
                } else {
                    vm.searchObj = {search: vm.searchTxt};
                    $state.go('discover',{'category': vm.searchTxt});
                    console.log(vm.searchObj);
                    let search = API.search(vm.searchObj);
                    search.then(res=> {
                        let searchContent = [res.data];
                        console.log('content', searchContent);
                        searchContent.forEach(function(i){
                            vm.stories = i.stories;
                            console.log('search', vm.stories);
                        })
                    })
                }
                vm.searchTxt ='';
                console.log('search', vm.stories);
            }
            vm.getStories = function(){
                vm.story = {category: vm.currentCategory, limit: 50}
                let stories = API.stories(vm.story);
                stories.then(res => {
                    vm.stories = res.data.stories;
                    console.log(vm.stories);
                })
            } 
            vm.read = function(url){
                localStorage.setItem('url', url);
            }
            vm.addStory = function(story){
                vm.modalStory = [];
                vm.modalStory.push(story);
            }
            vm.getStories();

            vm.user = {user: localStorage.getItem('usrName')};
            let lists = API.lists(vm.user);
            lists.then(res => {
                vm.lists = res.data.lists;
                console.log(vm.lists);
            })

            vm.add = function(storyId){
                vm.addId = {id: $('#listAdd').val(),story:{storyIds: `${storyId}`}, token: localStorage.getItem('token')};
                console.log(vm.addId);
                let add = API.addToList(vm.addId);
                add.then(res => {
                    console.log(res);
                })
            }
        })
        
})();