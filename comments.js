// Create web server

module.exports = function comments() {
    return {
        restrict: 'E',
        templateUrl: 'views/skills/comments.html',
        controller: 'SkillsCommentsController',
        controllerAs: 'skillsCommentsCtrl',
        bindToController: true,
        scope: {
            comments: '='
        }
    };
}