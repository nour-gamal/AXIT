$(function(){

'use strict';

   /*Start tabsection functions*/
    /*Tabs active class functions*/
        $('.tabsSection ul li').on('click',function(){
            if($(this).hasClass('active')){ /*Do nothing */}
            else{
                //adding active class to the selected li and removing it from other li
                $(this).addClass('active').siblings().removeClass('active');
               
                /*getting the value of the selected li and 
                depending on it hidding all the divs except the no of li tab selected*/
                $('.tabsSection .paragraphTabs div').addClass('hidden');
                $('.tabsSection .paragraphTabs div').eq($(this).attr('value')).removeClass('hidden');
         
            }


        });
    
    /*End tabs active class functions*/
    
});

