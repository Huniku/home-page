(function(){

  angular
       .module('homePage')
       .controller('HomePageController', [
          'workExperienceService', 'skillsService', '$mdBottomSheet', '$log', '$q',
          HomePageController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param avatarsService
   * @constructor
   */
  function HomePageController( workExperienceService, skillsService, $mdBottomSheet, $log, $q) {
    var self = this;
    var workExp = [];
    var skills = {};
    
    console.log("HomePageController");
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
            console.log(self.skills);
          });


    /*self.browse = browserService.getBrowser();
    if(browse == "chrome") {
      self.workTimelineOffset = "37.05%";
    } else {
      self.workTimelineOffset = "37.05%";
    }*/

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/users/view/contactSheet.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.user = user;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
