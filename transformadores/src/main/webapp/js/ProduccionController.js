'use strict';

/* Controllers */
var module = angular.module('adminProduccion.controllers', []);

module.controller('ProduccionCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = {};
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    $scope.listar=function(){
        $http.get('./webresources/Produccion', {})
            .success(function (data, status, headers, config) {
                $scope.lista = data;
            }).error(function (data, status, headers, config) {
                alert('Error al consultar la informaci\xf3n, por favor intente m\xe1s tarde');
        });    
    };

        $scope.listarProducto=function(){
            $http.get('./webresources/Producto', {})
                .success(function (data, status, headers, config) {
                    $scope.listaProducto = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de producto, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarProducto();
            $scope.listarCiudad=function(){
            $http.get('./webresources/Ciudad', {})
                .success(function (data, status, headers, config) {
                    $scope.listaCiudad = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de ciudad, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarCiudad();
            $scope.listarCliente=function(){
            $http.get('./webresources/Cliente', {})
                .success(function (data, status, headers, config) {
                    $scope.listaCliente = data;
                }).error(function (data, status, headers, config) {
                    alert('Error al consultar la informaci\xf3n de cliente, por favor intente m\xe1s tarde');
            });    
        };
        $scope.listarCliente();
        

    $scope.listar();
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        
        if (error)
            return;
        $http.post('./webresources/Produccion', JSON.stringify($scope.datosFormulario), {}
            ).success(function (data, status, headers, config) {
                alert("Los datos han sido guardados con Exito");
                $scope.panelEditar = false;
                $scope.listar();
            }).error(function (data, status, headers, config) {
                alert('Error al guardar la informaci\xf3n, por favor intente m\xe1s tarde');
            });
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
        if (confirm('�Desea elminar este registro?')) {    
            $http.delete('./webresources/Produccion/'+data.id, {})
                .success(function (data, status, headers, config) {
                    $scope.listar();
                }).error(function (data, status, headers, config) {    
                    alert('Error al eliminar la informaci\xf3n de Produccion, por favor intente m\xe1s tarde');
            });   
        }
    };
}]);
