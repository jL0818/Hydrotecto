angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('hydrotecto', {
    url: '/page2',
    templateUrl: 'templates/hydrotecto.html',
    controller: 'hydrotectoCtrl'
  })

  .state('menu.monitor', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/monitor.html',
        controller: 'monitorCtrl'
      }
    }
  })
   .state('menu.tips', {
    url: '/page5',
    views: {
      'tab1': {
        templateUrl: 'templates/tips.html',
        controller: 'tipsCtrl'
      }
    }
  })
   .state('menu.wtips', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/wtips.html',
        controller: 'wtipsCtrl'
      }
    }
  })

  .state('menu.warning', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/warning.html',
        controller: 'warningCtrl'
      }
    }
  })
    .state('menu.about',{
    url: '/about',
    views: {
      'menuContent':{
        templateUrl:'templates/aboutUs.html'
      }
    }
  })

  .state('menu.dailyWeather', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/dailyWeather.html',
        controller: 'dailyWeatherCtrl'
      }
    }
  })

  .state('description', {
    url: '/page7',
    templateUrl: 'templates/description.html',
    controller: 'descriptionCtrl'
  })

  .state('howToUseThisApplication', {
    url: '/page8',
    templateUrl: 'templates/howToUseThisApplication.html',
    controller: 'howToUseThisApplicationCtrl'
  })

  .state('logs', {
    url: '/page9',
    templateUrl: 'templates/logs.html',
    controller: 'logsCtrl'
  })

  .state('menu.aboutUs', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/page1',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page2')

  

});