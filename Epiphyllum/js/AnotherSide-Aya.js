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
  $('#bgm').html("<source src='audio/bgm/defeat.ogg'>")
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
    $('#char1').html('<img src="images/ShirleyNormal.png" alt="characterImage">');
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">').addClass('filter charFilp');
    if (ideaOnAya == 2) {
      $('#char2').html('<img src="images/Aya-New-Happy.png" alt="characterImage">').addClass('filter charFilp');
    } else {
      $('#char2').html('<img src="images/AyaHappy5.png" alt="characterImage">').addClass('filter charFilp');
    }

    $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
    $('#message').html('<div class="Shirley"><p>｢...!｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢...!｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }, 4000);

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
      $('#message').html('<div class="Shirley"><p>｢She noticed you have the magic ability...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢She noticed you have the magic ability...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(....maybe she still doesn\'t know how I can activate...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(....maybe she still doesn\'t know how I can activate...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢<span class="charFirstname"></span>...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>aya</h1><div class="aya"><p>｢<span class="charFirstname"></span>...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Shirley....help!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley....help!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 6) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Even you call a help...she is also a magic ability owner...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Even you call a help...she is also a magic ability owner...｣</p></div>');
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
        $('#char3').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢HaHa~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢HaHa~｣</p></div>');
        $('#char2').removeClass('filter');
        $('#audio2').empty().html("<audio id='bgs'></audio>");
        $('#bgs').html("<source src='audio/bgs/slap.ogg'>").get(0).play();
        setTimeout(function() {
          $('#flash').css('background-color', 'rgba(255,0,0,1)').removeClass('flashBlack').fadeIn(500, function() {
            $(this).fadeOut(500, function() {
              $(this).css('background-color', 'rgba(255,255,255,1)').addClass('flashBlack');
              $('#char2').addClass('filter');
              $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
              $('#spokesperson, #message').empty();
              $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
              $('#message').html('<div class="Jongun"><p>｢!?｣</p></div>');
              $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢!?｣</p></div>');
              $('.charFirstname').html(charFirstname);
              $('#audio2').empty().html("<audio id='bgs'></audio>");
              $('#bgs').html("<source src='audio/bgs/falldown.mp3'>").get(0).play();
              $('#stage, #char3').effect("shake", {
                direction: "down"
              });

            });
          });
          $('#audio2').empty().html("<audio id='bgs'></audio>");
          $('#bgs').html("<source src='audio/bgs/blood.ogg'>").get(0).play();
          setTimeout(function() {
            $('#char3').addClass('filter');
            $('#char2').removeClass('filter');
            $('#spokesperson, #message').empty();
            $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
            $('#message').html('<div class="aya"><p>｢I haven\'t think you got the ability back...it is my mistake~｣</p></div>');
            $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢I haven\'t think you got the ability back...it is my mistake~｣</p></div>');
            $('.charFirstname').html(charFirstname);
            $('#audio2').empty().html("<audio id='bgs'></audio>");
            $('#bgs').html("<source src='audio/bgs/knife.ogg'>").get(0).play();
            setTimeout(Fatality, 2000);
          }, 2500)
        }, 500);
      }, 2500)
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
      $('#lyrics').addClass('aya flashBlack');
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
