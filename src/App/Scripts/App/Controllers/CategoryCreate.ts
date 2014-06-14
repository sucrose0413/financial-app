﻿/// <init-options route="/manage/category/add" viewName="CategoryEdit" />
/// <reference path="../../typings/angularjs/angular.d.ts" /> 
/// <reference path="../DTO.generated.ts"/>
/// <reference path="../Common.ts"/>

module FinancialApp {

    export interface ICategoryCreateScope extends ng.IScope {
        category: DTO.ICategory;
        save: IAction;
    }

    export class CategoryCreateController {
        static $inject = ["$scope", "$location", "categoryResource"];

        private api: ng.resource.IResourceClass<DTO.ICategory>;

        constructor($scope: ICategoryCreateScope, $location: ng.ILocationService, categoryResource: ng.resource.IResourceClass<DTO.ICategory>) {
            this.api = categoryResource;
            $scope.save = () => this.api.save($scope.category, () => $location.path("/manage/category"));
        }
    }

}