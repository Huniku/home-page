(function(){
  'use strict';

  angular.module('homePage')
         .service('skillsService', ['$q', SkillService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function SkillService($q){
    var skills = {
      languages: [
        {
          name: "Java",
          skill: 90
        },
        {
          name: "Javascript",
          skill: 85
        },
        {
          name: "Python",
          skill: 80
        },
        {
          name: "HTML",
          skill: 60
        },
        {
          name: "CSS",
          skill: 55
        }
      ],
      libraries: [
        {name: "Spring"},
        {name: "Swagger"},
        {name: "Retrofit"},
        {name: "JOOQ"},
        {name: "MySQL"},
        {name: "MongoDB"},
        {name: "Couchbase"},
        {name: "jUnit"},
        {name: "EasyMock"},
        {name: "jMeter"},
        {name: "Node.js"},
        {name: "Express.js"},
        {name: "Angular.js"},
        {name: "Angular Material"},
        {name: "SeleniumDriver"},
        {name: "pytest"},
        {name: "TCP/IP"},
        {name: "UDP"}
      ]
    };

    // Promise-based API
    return {
      loadAllSkills : function() {
        console.log("WorkExp loader run");
        // Simulate async nature of real remote calls
        return $q.when(skills);
      }
    };
  }

})();
