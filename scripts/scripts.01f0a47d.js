"use strict";angular.module("groovyApp",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("groovyApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("groovyApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("groovyApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="background"> <h1>Stay Groovy!</h1> <div id="button" class="groovy-button">Groovy!</div> <div class="nick">Yo Nick! Thanks for the idea, fam!</div> </div> <script>$(\'#button\').click(function(){\n    var groovy = new Audio(\'/audio/groovy.mp3\');\n\n    groovy.play();\n    return false;\n  });</script>')}]);