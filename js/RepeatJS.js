        var chart_Headers = angular.module("chart", []);

            chart_Headers.controller("SWC_Region", function($scope) {
            $scope.Countries = [
                "EUR",
                "AME",
                "ASIA",
                "AFR",
                "MEA",
                "EAST",
                "NAT",
                "SAT",
                "PAC",
                "S.ASIA",
                "AUST"
            ];
            });
            chart_Headers.controller("ULC_Region" , function($scope){
                $scope.Countries = [
                    "EUR",
                    "AME",
                    "ASIA",
                    "AFR",
                    "MEA",
                    "EAST",
                    "NAT",
                    "SAT",
                    "PAC",
                    "S.ASIA",
                    "AUST"
                ];
            });