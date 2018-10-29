//business logic for information
 function Information(name, location, landmark, timeOfTheYear) {
   this.name = name;
   this.location = location,
   this.landmark = landmark,
   this.timeOfTheYear = timeOfTheYear
   this.currentId = 0;
   this.info = [];
 }

 Information.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Information.prototype.addInformation = function(info) {
  information.id = this.assignId();
  this.info.push(info);
}

Information.prototype.findInformation = function(id) {
  for (var i = 0; i < this.info.length; i++) {
    if  (this.info[i].id === id) {
      return this.info[i];
    }
  };
  return false;
}

Information.prototype.deleteInformation = function(id) {
  for (var i = 0; i< this.info.length; i++) {
    if (this.info[i].id === id) {
      delete this.info[i];
      return true;
    }
  };
  return false;
}

// output for Information (backend function)
  Information.prototype.outputInfo = function() {
   return "<h1 id='" + this.info + "'>" + this.name + "</h1>" + "<p> You visited <span class='italics'>" + this.location + "</span> in the <span class='italics'>" + this.timeOfTheYear + "</span> and you've seen <span class='italics'>" + this.landmark + "</span>";
}


//  User Interface Logic
$(document).ready(function() {
  $(".places-form").submit(function(event) {
    event.preventDefault();

    var inputName = $("#userName").val();
    var inputLocation = $("#userLocation").val();
    var inputLandmark = $("#userLandmark").val();
    var inputYear = $("#userYear").val();

    var info = new Information (inputName, inputLocation, inputLandmark, inputYear);
    var resultOutput = info.outputInfo();

    $(".output").append(resultOutput);
    $("h1").click(function(){
      $("p").toggle();
    })

  })
});
