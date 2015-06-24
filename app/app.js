'use strict';

/**
 * @ngdoc overview
 * @name weilaSlackApp
 * @description
 * # weilaSlackApp
 *
 * Main module of the application.
 */
angular
  .module('weilaSlackApp', [
    'firebase',
    'angular-md5',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html'
      });

    $urlRouterProvider.otherwise('/');
  })
  .constant('FirebaseUrl', 'https://weilaslack.firebaseio.com/');
