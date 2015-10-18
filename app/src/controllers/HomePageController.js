"use strict";
(function(){

  angular
       .module('homePage')
       .controller('HomePageController', [
          'workExperienceService', 'skillsService', '$window', '$log', '$q',
          HomePageController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param avatarsService
   * @constructor
   */
  function HomePageController( workExperienceService, skillsService, $window, $log, $q) {
    var self = this;
    var workExp = [];
    var skills = {};

    // Load all registered users

    workExperienceService
          .loadAllWorkExperience()
          .then( function( work ) {
            self.workExp    = [].concat(work);
          });

    skillsService
          .loadAllSkills()
          .then( function ( skill ) {
            self.skills = skill;
          });

    self.winWidth = $window.innerWidth;
  }

})();
