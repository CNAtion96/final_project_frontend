(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('discoverController', function(API) {
            const vm = this;

            vm.currentCategory = localStorage.getItem('category');
            vm.category = localStorage.getItem('category_id');

            vm.checkCategory = function(category){
                if(category === 'Teen Fiction'){
                    vm.category = 1;
                } else if(category === 'Poetry'){
                    vm.category = 2;
                } else if(category === 'Fantasy'){
                    vm.category = 3;
                } else if(category === 'Romance'){
                    vm.category = 4;
                } else if(category === 'Science Fiction'){
                    vm.category = 5;
                } else if(category === 'Fanfiction'){
                    vm.category = 6;
                } else if(category === 'Humor'){
                    vm.category = 7;
                } else if(category === 'Mystery / Thriller'){
                    vm.category = 8;
                } else if(category === 'Horror'){
                    vm.category = 9;
                } else if(category === 'Classics'){
                    vm.category = 10;
                } else if(category === 'Adventure'){
                    vm.category = 11;
                } else if(category === 'Paranormal'){
                    vm.category = 12;
                } else if(category === 'Spiritual'){
                    vm.category = 13;
                } else if(category === 'Action'){
                    vm.category = 14;
                } else if(category === 'Non-Fiction'){
                    vm.category = 16;
                } else if(category === 'Short Story'){
                    vm.category = 17;
                } else if(category === 'Vampire'){
                    vm.category = 18;
                } else if(category === 'Recommended'){
                    vm.category = 19;
                } else if(category === 'General Fiction'){
                    vm.category = 21;
                } else if(category === 'Werewolf'){
                    vm.category = 22;
                } else if(category === 'Historical Fiction'){
                    vm.category = 23;
                } else if(category === 'ChickLit'){
                    vm.category = 24;
                }
            }


            
            vm.hS = function(){
                $('.category').on('click', function(){ 
                    $('.bar').removeClass('animate');
                    $('.menu').addClass('hidden');
                })
            }
            


            vm.changeCategory = function(category){
                vm.hS();
                vm.currentCategory = category;
                vm.checkCategory(category);
                localStorage.setItem('category', vm.currentCategory);
                localStorage.setItem('category_id', vm.category);
                vm.getStories();
            }
            vm.getStories = function(){
                vm.story = {id: vm.category, limit: 50}
                let stories = API.stories(vm.story);
                stories.then(res => {
                    vm.stories = res.data.stories;
                    console.log(vm.stories);
                })
            } 
            vm.getStories();
        })
        
})();