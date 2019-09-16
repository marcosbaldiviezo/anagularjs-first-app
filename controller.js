var app = angular.module('MyFirstApp', []);
app.controller('FirstController', function($scope, $http) {
    



    
    $scope.posts = [];
    $http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
            console.log(response.data);
            $scope.posts = response.data;
        }
        ,function(err) {

        });


    $scope.newPost = {};    
    $scope.addPost = function() {
        
        $http.post('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/posts', {
            title: $scope.newPost.title,
            body: $scope.newPost.body,
            userId: 1
        })
        .then(function(data, status, headers, config) {
            console.log("regresa del post");
            console.log(data);
            $scope.posts.push($scope.newPost);
            $scope.newPost = {};            
        }
        ,function(error, status, headers, config) {
            console.log(error);
        });
    }




    $scope.nombre = 'Marcos Baldiviezo';
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: 'Buen tutorial',
            username: 'marcos'
        },
        {
            comentario: 'Mal tutorial',
            username: 'user1'
        }
    ];
    $scope.agregarComentario = function() {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    };


});
