(function(){
  'use strict';

  angular.module('homePage')
         .service('workExperienceService', ['$q', WorkExperienceService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function WorkExperienceService($q){
    console.log("WorkExpLoaded");
    var experience = [
      {
        company: "Disney Parks and Resorts Technology",
        position: "Software Engineer",
        startDate: "Feb 2015",
        endDate: "Present",
        icon: "assets/dprdIcon.png",
        lineHeight: '300px',
        description: [
          {text:"Designed and implemented the migration of confirmation emails to a new managed email service; involving the creation of new email templates, and integration with a new SOAP API."},
          {text:"Worked on the migration of Booking Service to new backend services including implementing freeze, thaw, book, and modify order functionality and integrating with the new data structures."},
          {text:"Added service endpoints and business rule functionality to support a number of projects including Disneyland eTicket and Online Order Modifications."}
        ]
      },
      {
        company: "Disney Parks and Resorts Technology",
        position: "Project Hire Software Engineer",
        startDate: "Jan 2014",
        endDate: "Feb 2015",
        icon: "assets/dprdIcon.png",
        lineHeight: '270px',
        description: [
          {
            text:"Part of the on call rotation for Disneyland and Disneyworld checkout and reservation services."
          },
          {
            text:"Served as scrum master for the Cart+ Automation team, assigning tickets, clearing blockers, and overseeing the design and architecture of a new browser automation framework using Python, pytest and Selenium WebDriver to allow for rapid development of automation tests."
          }
        ]
      },
      {
        company: "Disney Parks and Resorts Technology",
        position: "Professional Intern",
        startDate: "May 2013",
        endDate: "Dec 2013",
        icon: "assets/dprdIcon.png",
        lineHeight: '0px',
        description: [
          {text:"Developed an automation tool to capture full-page screenshots of websites in various states, and upload them to a central web app where they could be inspected, annotated and compared to screenshots from previous tests."},
          {text:"The app was built using Node.js, Express,js, Twitter Bootstrap, Raphael.js and jQuery."},
          {text:"Disney is applying for a patent for this project, where I am listed as the Lead Inventor."}
        ]
      }
    ];

    // Promise-based API
    return {
      loadAllWorkExperience : function() {
        console.log("WorkExp loader run");
        // Simulate async nature of real remote calls
        return $q.when(experience);
      }
    };
  }

})();
