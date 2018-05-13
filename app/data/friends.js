// use this to hold all of the data for potential
// friendly friends
// of friendlyfriends


var friendArray = {
  name: $("#name").val(),
  photo: $("#photo").val(),
  scores: [
    $("#question1").val(),
    $("#question2").val(),
    $("#question3").val(),
    $("#question4").val(),
    $("#question55").val(),
    $("#question6").val(),
    $("#question7").val(),
    $("#question8").val(),
    $("#question9").val(),
    $("#question10").val()
  ]
};



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;





    } else {
      alert("Please fill out all fields before submitting!");
    }
  });
