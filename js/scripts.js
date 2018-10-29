//business logic for Places
function Places() {
  this.information = [],
  this.currentId = 0
}

function Information(name, location, landmark, timeOfTheYear) {
  this.name = name;
  this.location = location,
  this.landmark = landmark,
  this.timeOfTheYear = timeOfTheYear
}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.addInformation = function(information) {
  information.id = this.assignId();
  this.information.push(information);
}

Places.prototype.findInformation = function(id) {
  for (var i = 0; i< this.information.length; i++) {
    if  (this.information[i].id === id) {
      return this.information[i];
    }
  };
  return false;
}
Places.prototype.deleteInformation = function(id) {
  for (var i = 0; i< this.information.length; i++) {
    if (this.information[i].id === id) {
      delete this.information[i];
      return true;
    }
  };
  return false;
}


$(document).ready(function() {
  $(".places-form").submit(function(event) {
    event.preventDefault();

    var inputName = $("#userName").val();
    var inputLocation = $("#userLocation").val();
    var inputLandmark = $("#userLandmark").val();
    var inputYear = $("#userYear").val();

    var info = new Information (inputName, inputLocation, inputLandmark, inputYear);

    console.log(info);
  });
});
