//script the calculator and to do list using angularjs------
//by mohammed nin sahl


(function(){
'use strict';

var items =[];
    angular.module('capp',[])
    .controller('calculater',calc)


    function calc($scope){
        $scope.r ='';
        
        $scope.one = function(){
            return $scope.r +="1"
        }
        $scope.two = function(){
            return $scope.r +="2"
        }
        $scope.three = function(){
            return $scope.r +="3"
        }
        $scope.four = function(){
            return $scope.r +="4"
        }
        $scope.five = function(){
            return $scope.r +="5"
        }
        $scope.six = function(){
            return $scope.r +="6"
        }
        $scope.seven = function(){
            return $scope.r +="7"
        }
        $scope.eight = function(){
            return $scope.r +="8"
        }
        $scope.nine = function(){
            return $scope.r +="9"
        }
        $scope.zero = function(){
            return $scope.r +="0"
        }
        $scope.pls = function(){
            return $scope.r +='+'
            
        }
        $scope.multi = function(){
            return $scope.r +="*"
        }
        $scope.divi = function(){
            return $scope.r +="/"
        }
        $scope.mins = function(){
            return $scope.r +='-'
            
        }
        $scope.calc = function(){
       
       
       var t= eval($scope.r);
       return  $scope.r = t;
        
    }
    $scope.del = function(){
        $scope.r = '';
    }
}
    
    




   






})()