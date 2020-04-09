$(document).ready(function() {

  var textcounter = 0;
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var cheresacounter = sessionStorage.getItem('cheresacounter') || 0;
  var shirleycounter = sessionStorage.getItem('shirleycounter') || 0;
  var ayacounter = sessionStorage.getItem('ayacounter') || 0;
  var kallencounter = sessionStorage.getItem('kallencounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || 'Noname';
  var ideaOnAya = sessionStorage.getItem('ideaOnAya') || 0;
  var ideaOnKallen = sessionStorage.getItem('ideaOnKallen') || 0;
  var happyend = sessionStorage.getItem('happyend') || 0;


  $(document).keyup(function(e) {

    console.log(e.which);
    if (e.which == 32) {
      showBacklog();
    };
    if (e.which == 27) {
      hideBacklog();
    };

  });

  counterChange();
  controlGuide();
  $(document).click(playBgm);
  $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/05 Feel Ambivalents.mp3'></audio>");
  $('#controlguide div').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash img').addClass('flashBlack');
  $('#textbox').hide();
  setTimeout(function() {
    $('#flash').fadeOut(1000, function() {
      $('#textbox').addClass('mouse-not-allowed').fadeIn(1000, function() {
        $('#message').html('<div class="nonespeech"><p>Hi, is me again.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>Hi, is me again.</p></div>');
        avoidMonkeyClick();
      });
    });
  }, 3000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      clearcounter++;
      playBgm();
      $('#message').html('<div class="nonespeech"><p>The author of this story, Lancelot~<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>The author of this story, Lancelot~</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 2) {
      $('#message').html('<div class="nonespeech"><p>What do you think about the story?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>What do you think about the story?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 3) {
      $('#message').html('<div class="nonespeech"><p>Is it like....somthing is missed?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Is it like....somthing is missed?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 4) {
      $('#message').html('<div class="nonespeech"><p>Or is it feels.... someone is lying?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Or is it feels.... someone is lying?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 5) {
      $('#message').html('<div class="nonespeech"><p>Or maybe you found the truth?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Or maybe you found the truth?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 6) {
      $('#message').html('<div class="nonespeech"><p>Here is a chance... do you think the story now you see is the truth?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Here is a chance... do you think the story now you see is the truth?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 7) {
      $('#option').removeClass('moveBack');
      $('#option, #yesnooption').hide().fadeIn(1000);
      $('#yes').html('I believe that\'s the truth<br>').one('click', Yes);
      $('#no').html('<br>No...there\'s somthing wrong').one('click', No);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });
    };

  }

  function counterChange() {
    if (cheresacounter == 0) {
      $('#CheresaCounter').addClass('cheresaCounter1');
    } else if (cheresacounter == 1) {
      $('#CheresaCounter').addClass('cheresaCounter2');
    } else if (cheresacounter >= 2) {
      $('#CheresaCounter').addClass('cheresaCounter3');
    };

    if (shirleycounter == 0) {
      $('#ShirleyCounter').addClass('shirleyCounter1');
    } else if (shirleycounter == 1) {
      $('#ShirleyCounter').addClass('shirleyCounter2');
    } else if (shirleycounter >= 2) {
      $('#ShirleyCounter').addClass('shirleyCounter3');
    }

    if (ayacounter != 0) {
      $('#AyaCounter').addClass('charGrayscale');
    }

    if (kallencounter != 0) {
      $('#KallenCounter').addClass('charGrayscale');
    }
  }

  function playBgm() {
    $('#bgm').get(0).play();
  };

  function avoidMonkeyClick() {

    setTimeout(function() {
      $('#textbox').addClass('mouse-click').removeClass('mouse-not-allowed').click(controlTextBox);
      $(document).keypress(function(e) {
        if (e.which == 13) {
          controlTextBox();
          $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mouse-click')
        };
      });
    }, 2000);
  };

  function showBacklog() {
    $('#backlog').removeClass('moveBack');
  };

  function hideBacklog() {
    $('#backlog').addClass('moveBack');
  };

  function controlGuide() {
    $('#controlguide li:last').hover(function() {
        $('#controlguide div').stop(false, true).show('slide', {
          direction: 'right'
        }, 300);
        $('#controlguide li:last').html('◁ Control Guide');
      },
      function() {
        $('#controlguide div').stop(false, true).hide('slide', {
          direction: 'right'
        }, 300);
        $('#controlguide li:last').html('▷ Control Guide');
      });
  }

  function Yes() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>I believe that\'s the truth</p></div>');
    setTimeout(function() {
      $('#message').html('<div class="nonespeech"><p>Seems you have found your truth...that is the end of the story, hope to see you at somewhere else.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Seems you have found your truth...that is the end of the story, <br>hope to see you at somewhere else.</p></div>');
    }, 1000);
    setTimeout(function() {
      sessionStorage.clear();
      window.location = 'index.html';
    }, 4000);
  }

  function No() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>No...there\'s somthing wrong</p></div>');
    sessionStorage.setItem("clearcounter", clearcounter);
    setTimeout(function() {
      if(happyend == 0){
        let keysToRemove = ['cheresacounter', 'shirleycounter', 'ayacounter', 'kallencounter', 'ideaOnAya', 'ideaOnKallen'];
        for (key of keysToRemove) {
          sessionStorage.removeItem(key);
        };
      } if (happyend == 1){
        window.location = 'Epiphyllum.html'
      }


      if (clearcounter == 1) {
        $('#message').html('<div class="nonespeech"><p>Let\'s go~<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>Let\'s go~</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

      if (clearcounter == 2) {
        $('#message').html('<div class="nonespeech"><p>Look at backlog, maybe it can help you.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>I think Cheresa is keeping some secret.</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

      if (clearcounter == 3) {
        $('#message').html('<div class="nonespeech"><p>Someone is lying.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>The disposition of Kallen and Aya are totally different.<br>You can prevent to have the \'battle\' with them.</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

      if (clearcounter == 4) {
        $('#message').html('<div class="nonespeech"><p>What is the gap between dusk and morning?<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>Something happen in the night might be not the truth.</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

      if (clearcounter == 5) {
        $('#message').html('<div class="nonespeech"><p>Shirley is reliable if you show empathy to her.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>Is Shirley really existing?</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

      if (clearcounter > 5) {
        $('#message').html('<div class="nonespeech"><p>Sometimes it will be bad if you keep saying no.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="nonespeech backlogborder"><p>Be careful of Cheresa!!!</p></div>');
        setTimeout(function() {
          window.location = 'New-Life.html';
        }, 4000);
      }

    }, 1000);


  }



})
