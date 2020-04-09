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


  $(document).keyup(function(e) {
    console.log(e.which);
    if (e.which == 32) {
      showBacklog();
    };
    if (e.which == 27) {
      hideBacklog();
    };
  });

  $('#stage').addClass('bg-bypath-dusk');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/13 Pessimistic Time.mp3'>")
  $('#controlguide div').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);

  setTimeout(function() {
    $('#flash img').hide();
    $('#flash').toggle("slide", {
      direction: 'right'
    }, 500, "linear");
    $('#textbox').addClass('mouse-not-allowed');
    $('#char1').html('<img src="images/ShirleyLaugh.png" alt="characterImage">');
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">').addClass('filter charFilp');
    $('#char2').html('<img src="images/CheresaUnhappy.png" alt="characterImage">').addClass('filter');
    $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
    $('#message').html('<div class="Shirley"><p>｢...!｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢...!｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }, 3500);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);


    if (textcounter == 1) {
      playBgm();
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Shirley...what\'s happened.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...what\'s happened.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢I finally noticed~ That bitch is the ability stealer♥｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢I finally noticed~ That bitch is the ability stealer♥｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunHappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢That is lucky~ We can kill two problem at the same time easily~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢That is lucky~ We can kill two problem at the same time easily~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢<span class="charFirstname"></span>, I know what you have done...what you want to say?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><div class="Cheresa"><p>｢<span class="charFirstname"></span>, I know what you have done...what you want to say?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Shirley~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 6) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Buddy♥ ofcourse I know what to do~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Buddy♥ ofcourse I know what to do~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 7) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter').addClass('charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Nothing~ Just............................. RIP｣</p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Nothing~ Just............................. RIP｣</p></div>');
      $('.charFirstname').html(charFirstname);
      setTimeout(function() {
        $('#stage').animate({
          opacity: "0"
        }, 4000, 'linear', function() {
          $('#stage').removeClass('bg-bypath-duck').addClass('bg-index1');
          $('#char1, #char2, #char3, #spokesperson, #message').empty();
          $('#stage').animate({
            opacity: "1"
          }, 4000, 'linear', function() {
            $('#spokesperson').html('<div class="nonespeech"><h1>News reporter</h1></div>');
            $('#message').html('<div class="nonespeech"><p>｢In this month, there are 3 female high school students suicided already...｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="nonespeech backlogborder"><h1>News reporter</h1><p>｢In this month, there are 3 female high school students suicided already...｣</p></div>');
            avoidMonkeyClick();
          });
        });
      }, 1500)
    }

    if (textcounter == 8) {
      $('#message').html('<div class="nonespeech"><p>｢District Council is now casting doubt on these cases are related to sexual violence.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><h1>News reporter</h1><p>｢District Council is now casting doubt on <br>these cases are related to sexual violence.｣</p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 9) {
      Fatality();
    }


  }

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

  function Fatality() {
    $('#flash div').removeClass('moveBack');
    $('#referenceList').hide();
    $('#flash').addClass('flashBlack').fadeIn(2000, function() {
      $('#referenceList').fadeIn(1000, function() {
        setTimeout(function() {
          $('html, #referenceList').animate({
            scrollTop: ($(".songBottom").offset().top)
          }, 272500, "linear");
        }, 2000);
      })
      $("#audio1").html("<audio id='bgm'><source src='audio/ed/悲しみの向こうへ.flac'></audio>");
      playBgm();
      $('#lyrics').addClass('Jongun flashBlack');
      var songtimecounter = 0;
      var timer = setInterval(eventHandler, 100);

      function eventHandler() {
        songtimecounter++;

        if (songtimecounter == 13) {
          $('#lyrics').html('If I could struggle to the other side of sorrow');
        }

        if (songtimecounter == 133) {
          $('#lyrics').html('I don\'t need warmth, or even a tomorrow anymore');
        }

        if (songtimecounter == 260) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 435) {
          $('#lyrics').html('My falling dream which landed in the silent darkness');
        }

        if (songtimecounter == 555) {
          $('#lyrics').html('\"Who...?\" The light that trickled off your cheek was transient');
        }

        if (songtimecounter == 680) {
          $('#lyrics').html('\"Why...?\" Without knowing how to preserve this exceedingly frail world');
        }

        if (songtimecounter == 804) {
          $('#lyrics').html('I simply wished, yes, for oblivion');
        }

        if (songtimecounter == 908) {
          $('#lyrics').html('If I could struggle to the other side of sorrow');
        }

        if (songtimecounter == 1030) {
          $('#lyrics').html('I\'m fine with not feeling anything beyond this');
        }

        if (songtimecounter == 1162) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 1399) {
          $('#lyrics').html('\"Why...?\" The remarkably beautiful ringing of these repeating words');
        }

        if (songtimecounter == 1569) {
          $('#lyrics').html('and our collapsing vows has now been severed');
        }

        if (songtimecounter == 1628) {
          $('#lyrics').html('Will you return to the other side of despair?');
        }

        if (songtimecounter == 1748) {
          $('#lyrics').html('In these eternal sails, this supreme love bears your unsullied corpse');
        }

        if (songtimecounter == 1869) {
          $('#lyrics').html('If I could struggle to the other side of sorrow');
        }

        if (songtimecounter == 1988) {
          $('#lyrics').html('I won\'t be afraid anymore; even of this lonely slumber...');
        }

        if (songtimecounter == 2137) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 2600) {
          window.location = 'Truth-Falsehood.html';
        }
      }
    });

  }

})