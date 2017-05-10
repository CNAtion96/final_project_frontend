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

            vm.usrName = localStorage.getItem('usrName');

            vm.logout = function(){
                localStorage.setItem('token', '');
            }
                
            })();
            
           
        });
        
        
})();