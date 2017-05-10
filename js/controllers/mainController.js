(function() {
    'use strict';

    angular
        .module('wattpad')
        .controller('mainController', function(API) {
            const vm = this;
            var clicked = false;
            (()=>{
                $('.burger').on('click', function(){                
                    if(clicked === false){
                        $('.bar').addClass('animate');
                        $('.menu').removeClass('hidden');
                        clicked = true;
                    } else if(clicked === true) {
                        $('.bar').removeClass('animate');
                        $('.menu').addClass('hidden');
                        clicked = false;
                    }
                })
            })();
            vm.dropdown = function(i){
                vm.discClicked = false;
                if(i === 'disc' && vm.discClicked === false){
                    $('.discMenu').removeClass('hidden');
                    $('.discMenu').addClass('show');
                } else if(i === 'disc' && vm.discClicked === true){
                    $('.discMenu').removeClass('show');
                    $('.discMenu').addClass('hidden');
                }
            }
           
        });
        
        
})();