var taskClass = [
    "current-task-list",
    "later-task-list",
    "plans-web-list",
    "finished-task-list"
];

var currentTasks = [
    "Rewriting this sites JavaScript",
    "Learning JavaScript mainly using nodejs",
    "Lots of homework",
    "Making a desktop version of a game (More info on the about page)"
];

var laterTasks = [
    "Copying and converting 4K videos to 1080p",
    "Make a game using Java"
];

var plansWeb = [
    "Add content to the media tab"
];

var finishedTasks = [
    "To add more javascript and to make these lists more easy to manage",
    "When you reload the page it will stay on the tab you had selected",
    "Moving Files",
    "Learning HTML and CSS",
    "This websites style",
    "A JavaScript secret code encode/decode thing",
    "Using JavaScript to set the content of the list item and the order",
    "Use JS for the progress bars"
];

var str = '<ul>';
currentTasks.forEach(function(currentTasks) {
    str += '<li>' + currentTasks + '</li>';
});
str += '</ul>';
document.getElementsByClassName(taskClass[0])[0].innerHTML = str;

str = '<ul>';
laterTasks.forEach(function(laterTasks) {
    str += '<li>' + laterTasks + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[1])[0].innerHTML = str;

str = '<ul>';
plansWeb.forEach(function(plansWeb) {
    str += '<li>' + plansWeb + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[2])[0].innerHTML = str;

str = '<ul>';
finishedTasks.forEach(function(finishedTasks) {
    str += '<li>' + finishedTasks + '</li>';
});
str += '</ul>'
document.getElementsByClassName(taskClass[3])[0].innerHTML = str;

// Progress bars
var pb = ".05%";
document.getElementsByClassName("progressone")[0].innerHTML = pb;
document.getElementsByClassName("progressone")[1].innerHTML = pb;
document.getElementsByClassName("progressbarone")[0].style.width = pb;