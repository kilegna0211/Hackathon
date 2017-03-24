angular.module('app')
    .service('webcamService', function($http) {
        return {
            getBeach: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=beach/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },
            getMountain: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=mountain/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },
            getIsland: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=island/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },
            getMeteo: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=city/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },
            getGolf: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=golf/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },
            getLake: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/category=lake/orderby=popularity/limit=20?show=webcams:location,image,url,timelapse', {
                    headers: {
                        "X-Mashape-Key": "MPZVLalhhKmshCdy1KulUtnl7KuTp16GfPejsnUflL00XyYbQX"
                    }
                });
            },

        };

    });
