﻿/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="DTO.ts"/>
var FinancialApp;
(function (FinancialApp) {
    var ArchiveController = (function () {
        function ArchiveController($scope, $resource) {
            this.api = $resource("/api/sheet/:id");

            $scope.sheets = this.api.query(function () {
                $scope.isLoaded = true;
            });
        }
        ArchiveController.$inject = ["$scope", "$resource"];
        return ArchiveController;
    })();
    FinancialApp.ArchiveController = ArchiveController;
})(FinancialApp || (FinancialApp = {}));
//# sourceMappingURL=ArchiveController.js.map
