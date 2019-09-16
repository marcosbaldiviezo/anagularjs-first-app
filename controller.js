var app = angular.module('MyFirstApp', []);
app.controller('FirstController', function($scope) {
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
    }
});
