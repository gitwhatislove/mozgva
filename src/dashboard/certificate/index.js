'use strict';

import angular from 'angular';
import CertCtrl from './controller.js';
import CertService from './service.js';


export default angular.module('dashboard.Cert', [])
    .service('certService', CertService)
    .config(function ($stateProvider) {
        $stateProvider
            .state('dashboard.cert', {
                template: require('./template.html'),
                url: '/сertificate',
                controller: CertCtrl,
                controllerAs: 'ctrl',
                // resolve: {
                //     token: ($stateParams) => {
                //         return $stateParams.reset_password_token;
                //     }
                // }
            });
    });
