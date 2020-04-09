$(document).ready(function() {

  let keysToRemove = ['cheresacounter', 'shirleycounter', 'ayacounter', 'kallencounter', 'ideaOnAya', 'ideaOnKallen'];
  for (key of keysToRemove) {
    sessionStorage.removeItem(key);
  };
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || undefined;

  $('#flash').fadeOut(3000);
  $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/healing3.ogg'></audio>");
  /* for the browser has not block the autoplay*/
  $(document).click(playBgm);
  index();


function playBgm() {
  $('#bgm').get(0).play();
};

  function index() {
    if (typeof charFirstname === "undefined") {
      $('#stage').addClass('bg-index1');
      $(document).one('click keypress', nameInput);
      $('#icon, #landingArea').hide().fadeIn(4000);
    } else if (clearcounter != 0) {
      $('#stage').addClass('bg-index2');
      $('#icon, #landingArea').hide().fadeIn(4000, function() {
        $(document).one('click keypress', function() {
          window.location = 'New-Life.html';
        });
      });
    }
    else {
      $('#stage').addClass('bg-index3');
      $('#icon, #landingArea').hide().fadeIn(4000, function() {
        $(document).one('click keypress', function() {
          window.location = 'Introduction.html';
        });
      });
    }
  };

  function nameInput() {
    $(document).off('click keypress');
    $('#landingArea').empty().hide().fadeIn(1000).html('<form action=""><p>Please input your character First Name:<br><input type="text" id="charFirstname" value="" maxlength="12" required><br><input type="submit" value="Okay"></p></form>');
    $("form").submit(charNameSet);
  };

  function charNameSet() {
    var charFirstname = document.getElementById("charFirstname").value;
    sessionStorage.setItem("charFirstname", charFirstname);
    window.location = 'Introduction.html';
    return false;

  };
})
