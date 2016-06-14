'use strict';

import angular from 'angular';
import main from './main/index';
import calendar from './calendar/index';
import certificate from './certificate/index';
import corporat from './corporat/index';
import lk from './lk/index';
import franchise from './franchise/index';


export default angular.module('dashboard',
    [   
        main.name,
        calendar.name,
        certificate.name,
        corporat.name,
        lk.name,
        franchise.name
    ])
    // .service('login', Login)
    // .service('modal', Modal)
    // .service('modalSpeed', ModalSpeed)
    // .service('notificationService', NotificationService)
    .config($stateProvider => {
        $stateProvider
            .state('dashboard', {
                abstract: true,
                views: {
                    '': {
                        template: require('./template.html')
                    }
                    ,
                    'dashboard-header@dashboard': {
                        template: require('./header/template.html'),
                    },
                    'dashboard-footer@dashboard': {
                        template: require('./footer/template.html')
                    }
                }
            });
    })
    // .config($provide => {
    //     $provide.decorator('taOptions', ['$delegate', function(taOptions){
    //         taOptions.toolbar = [
    //             ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
    //             ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
    //             ['justifyLeft','justifyCenter','justifyRight', 'justifyFull', 'insertLink']
    //         ];
    //         return taOptions;
    //     }]);
    // });
