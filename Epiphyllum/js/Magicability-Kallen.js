$(document).ready(function() {

  var textcounter = 0;
  var battletimecounter = 0;
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var cheresacounter = sessionStorage.getItem('cheresacounter') || 0;
  var shirleycounter = sessionStorage.getItem('shirleycounter') || 0;
  var ayacounter = sessionStorage.getItem('ayacounter') || 0;
  var kallencounter = sessionStorage.getItem('kallencounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || 'Noname';
  var ideaOnAya = sessionStorage.getItem('ideaOnAya') || 0;
  var ideaOnKallen = sessionStorage.getItem('ideaOnKallen') || 0;


  $(document).keyup(function(e) {
    playBgm();
    console.log(e.which);
    if (e.which == 32) {
      showBacklog();
    };
    if (e.which == 27) {
      hideBacklog();
    };

  });

  $('#magicAbility, #controlguide div, #textbox').hide();
  $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/fight1.mp3'></audio>");
  $(document).click(playBgm);
  $('#stage').addClass('bg-bypath-dusk');
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

  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash img').addClass('flashBlack');
  setTimeout(function() {
    $('#flash').toggle("slide", 400, tutorial);
  }, 3000);
  counterChange();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  document.getElementById("battlemenu").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);

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

  function showBacklog() {
    $('#backlog').removeClass('moveBack');
  };

  function hideBacklog() {
    $('#backlog').addClass('moveBack');
  };

  function playBgm() {
    $('#bgm').get(0).play();
  };


  function tutorial() {
    $('#yesnooption').prepend('Do you need a tutorial?<br>');
    $('#option, #yesnooption, #threeoptionmenu').hide();
    $('#option').removeClass('moveBack');
    $('#option, #yesnooption').fadeIn(1000);
    $('#yes').one('click', needTutorial);
    $('#no').one('click', noneedTutorial);
    $('#yes, #no').click(function() {
      $("#yesnooption").off("click");
      $("#option").fadeOut(1000, function() {
        $('#yesnooption').addClass('moveBack')
      });
    });
  };


  function needTutorial() {
    var timer = setInterval(eventHandler, 1000);
    var videotimecounter = 0;

    function eventHandler() {
      videotimecounter++;
      console.log(videotimecounter);
      if (videotimecounter == 1) {
        $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click').fadeIn(1000, function() {
          $('#message').html('<div class="nonespeech"><p>Let\'s start the tutorial~</p></div>');
        });
      };

      if (videotimecounter == 5) {
        $('#message').empty();
        $('#battlephase').hide().removeClass('moveBack').fadeIn(1000, function() {
          $('#message').html('<div class="nonespeech"><p>You will see this battle menu after the tutorial.</p></div>');
        });
        $('#battlemenu').html('<div id="battleTimer">Vs</div><h1 id="battleAttack" class="battleOption">Start</h1> <h1 id="battleEvade" class="battleOption">Tutorial</h1> <h1 id="battleMagic" class="battleOption moveBack">Use Magic ability</h1>');
        $('#char1').html('<img src="images/JongunUnhappy.png" alt="characterImage" class="charFilp">').fadeIn(1000);

        if (ideaOnKallen == 1) {
          $('#char2').html('<img src="images/KallenHappy.png" alt="characterImage" class="charFilp">').fadeIn(1000);
        } else if (ideaOnKallen == 2) {
          $('#char2').html('<img src="images/Kallen-sad1.png" alt="characterImage" class="charFilp">').fadeIn(1000);

        }
      };

      if (videotimecounter == 9) {
        $('#textbox').fadeOut(1000, function() {
          $('#message').empty()
        });
      };

      if (videotimecounter == 13) {
        $('#textbox').fadeIn(1000, function() {
          $('#message').html('<div class="nonespeech"><p>You can click [start] to start to approach.</p></div>');
          $('#battleAttack').addClass('battleKeyup');
        });
      };

      if (videotimecounter == 17) {
        $('#message').empty();
        $('#battleAttack').removeClass('battleKeyup');
        $('#message').html('<div class="nonespeech"><p>Or click [Tutorial] to watch the tutorial again.</p></div>');
        $('#battleEvade').addClass('battleKeyup');
      };

      if (videotimecounter == 21) {
        $('#battleEvade').removeClass('battleKeyup');
        $('#message').empty();
        $('#playerLife .life').css({
          'width': '300'
        })
        $('#message').html('<div class="nonespeech"><p>The bar on the top-left corner which is the distance between both of you.</p></div>');
      };

      if (videotimecounter == 22) {
        $('#playerLife .life').css({
          'width': '0'
        })
      }

      if (videotimecounter == 23) {
        $('#playerLife .life').css({
          'width': '300'
        })
      }

      if (videotimecounter == 24) {
        $('#playerLife .life').css({
          'width': '0'
        })
      }

      if (videotimecounter == 25) {
        $('#message').empty();
        $('#message').html('<div class="nonespeech"><p>When the color is becoming green, which means you are start approaching her.</p></div>');
        $('#playerLife .life').css({
          'width': '150'
        });
      }

      if (videotimecounter == 26) {
        $('#playerLife .life').css({
          'width': '0'
        });
      }

      if (videotimecounter == 27) {
        $('#playerLife .life').css({
          'width': '150'
        });
      }

      if (videotimecounter == 29) {
        $('#message').empty();
        $('#message').html('<div class="nonespeech"><p>When you are close enough to her, you can use the magicAbility.</p></div>');
      }

      if (videotimecounter == 33) {
        $('#message').empty();
        $('#message').html('<div class="nonespeech"><p>After you use that, you can achieve you aim.</p></div>');
        $('#battlemenu').empty().html("<div id='battleTimer'>You Win</div>");
        $('#playerLife .life').css({
          'width': '300'
        });
      }

      if (videotimecounter == 37) {
        $('#message').empty();
        $('#message').html('<div class="nonespeech"><p>So how can you do that?</p></div>');
      }

      if (videotimecounter == 42) {
        $('#playerLife .life').css({
          'width': '0'
        });
        $('#message, #battlemenu').empty();
        $('#battlemenu').html('<div id="battleTimer">30</div><h1 id="battleAttack" class="battleOption">Approach</h1> <h1 id="battleEvade" class="battleOption">Evade</h1> <h1 id="battleMagic" class="battleOption moveBack">Use Magic ability</h1>');
        $('#message').html('<div class="nonespeech"><p>After you press the start, you can see the battle menu.</p></div>');
      }

      if (videotimecounter == 43) {
        $('#battleTimer').empty().html('29');
        $('#enemyLife .life').css({
          'width': '10'
        });
      }

      if (videotimecounter == 44) {
        $('#battleTimer').empty().html('28');
        $('#enemyLife .life').css({
          'width': '20'
        });
      }

      if (videotimecounter == 45) {
        $('#battleTimer').empty().html('27');
        $('#enemyLife .life').css({
          'width': '30'
        });
      }

      if (videotimecounter == 46) {
        $('#battleTimer').empty().html('26');
        $('#message').empty().html('<div class="nonespeech"><p>And the timer will start countdown.</p></div>');
        $('#enemyLife .life').css({
          'width': '40'
        });
      }

      if (videotimecounter == 47) {
        $('#battleTimer').empty().html('25');
        $('#enemyLife .life').css({
          'width': '50'
        });
      }


      if (videotimecounter == 48) {
        $('#battleTimer').empty().html('24');
        $('#enemyLife .life').css({
          'width': '60'
        });
      }

      if (videotimecounter == 49) {
        $('#battleTimer').empty().html('23');
        $('#enemyLife .life').css({
          'width': '70'
        });
      }

      if (videotimecounter == 50) {
        $('#battleTimer').empty().html('22');
        $('#message').empty().html('<div class="nonespeech"><p>After you start, she will also alerted your unusual action.</p></div>');
        $('#enemyLife .life').css({
          'width': '80'
        });
      }

      if (videotimecounter == 51) {
        $('#battleTimer').empty().html('21');
        $('#enemyLife .life').css({
          'width': '90'
        });
      }

      if (videotimecounter == 52) {
        $('#battleTimer').empty().html('20');
        $('#enemyLife .life').css({
          'width': '100'
        });
      }

      if (videotimecounter == 53) {
        $('#battleTimer').empty().html('19');
        $('#enemyLife .life').css({
          'width': '110'
        });
      }

      if (videotimecounter == 54) {
        $('#battleTimer').empty().html('18');
        $('#enemyLife .life').css({
          'width': '120'
        });
        $('#message').empty().html('<div class="nonespeech"><p>The top-right corner is reflecting how far she will noticed your unusal action is dangerous to her. </p></div>');
      }

      if (videotimecounter == 55) {
        $('#battleTimer').empty().html('17');
        $('#enemyLife .life').css({
          'width': '130'
        });
      }

      if (videotimecounter == 56) {
        $('#battleTimer').empty().html('16');
        $('#enemyLife .life').css({
          'width': '140'
        });
      }

      if (videotimecounter == 57) {
        $('#battleTimer').empty().html('15');
        $('#enemyLife .life').css({
          'width': '150'
        });
      }

      if (videotimecounter == 58) {
        $('#battleTimer').empty().html('14');
        $('#enemyLife .life').css({
          'width': '300'
        });
        $('#message').empty().html('<div class="nonespeech"><p>If the bar is full, you will be discover and lose.</p></div>');
      }

      if (videotimecounter == 62) {
        $('#enemyLife .life').css({
          'width': '0'
        });
        $('#battleTimer').empty().html('0');
        $('#message').empty().html('<div class="nonespeech"><p>You also will be losed by Timesup.</p></div>');
      }

      if (videotimecounter == 66) {
        $('#battleTimer').empty().html('30');
        $('#message').empty().html('<div class="nonespeech"><p>So you need to click [Approach] or Press [A] to get approach before you lose.</p></div>');
        $('#battleAttack').addClass('battleKeyup');
      }

      if (videotimecounter == 70) {
        $('#battleEvade').addClass('battleKeyup');
        $('#battleAttack').removeClass('battleKeyup');
        $('#message').empty().html('<div class="nonespeech"><p>And also click [Evade] or Press [E] to delay her discovering.</p></div>');
      }

      if (videotimecounter == 76) {
        $('#battleEvade').removeClass('battleKeyup');
        $('#message').html('<div class="nonespeech"><p>When the distance is closed enough, you can Click [magicAbility] to use your magicAbility.</p></div>');
        $('#battleMagic').removeClass('moveBack').addClass('battleKeyup');
      }

      if (videotimecounter == 80) {
        $('#textbox').fadeOut(1000, function() {
          $('#message').empty()
        });
      }

      if (videotimecounter == 82) {
        $('#textbox').fadeIn(1000, function() {
          $('#message').empty().html('<div class="nonespeech"><p>After that, grab your character on her to activate the ability.</p></div>');
          $('#char1').animate({
            left: '700px'
          }, 2000, function() {
            $(this).animate({
              left: '0px'
            }, 2000)
          });
        });
        $('#battleMagic').removeClass('battleKeyup');

      }

      if (videotimecounter == 88) {
        $('#battlephase, #char1, #char2').fadeOut(1000);
        $('#battlemenu, #message').empty();
        $('#message').html('<div class="nonespeech"><p>Okay, you finished the tutorial.</p></div>');
      }

      if (videotimecounter == 90) {
        if (textcounter != 0) {
          textcounter--;
        };
        clearInterval(timer);
        $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
        $('#message').html('<div class="nonespeech"><p>Let\'s go~ <span id="textend">▷</span></p></div>');
        $(document).off('keypress');
        avoidMonkeyClick();
      }
    }
  };

  function noneedTutorial() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click').fadeIn(1000, function() {
      $('#message').html('<div class="nonespeech"><p>Okay, Let\'s go~<span id="textend">▷</span></p></div>');
    });
    $(document).off('keypress');
    avoidMonkeyClick();
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

  function controlTextBox() {
    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');
    setTimeout(textcounter++, 500);

    if (textcounter == 1) {
      $('#textbox').fadeOut(2000);
      $('#message').empty();
      $('#battlephase').hide().removeClass('moveBack').fadeIn(4000);
      $('#char1').html('<img src="images/JongunUnhappy.png" alt="characterImage" class="charFilp">').fadeIn(2000);
      if (ideaOnKallen == 1) {
        $('#char2').html('<img src="images/KallenHappy.png" alt="characterImage" class="charFilp">').fadeIn(1000);
      } else if (ideaOnKallen == 2) {
        $('#char2').html('<img src="images/Kallen-sad1.png" alt="characterImage" class="charFilp">').fadeIn(1000);

      }
      battleControl();
    }
  };


  function battleControl() {
    $('#battlemenu').html('<div id="battleTimer">Vs</div><h1 id="battleAttack" class="battleOption">Start</h1> <h1 id="battleEvade" class="battleOption">Tutorial</h1> <h1 id="battleMagic" class="battleOption moveBack">Use Magic ability</h1>');
    $('#battleAttack').one('click', battleTimer);

    if (typeof(battleTimeCount) === "undefined") {
      $('#battleEvade').one('click', secondTutorial);
    }
  };

  function secondTutorial() {
    $('#battlephase, #char1, #char2').fadeOut(1000);
    setTimeout(needTutorial, 1000);
  }


  function playerWin() {


    $('#char1').addClass('mouse-grab').draggable({
      revert: 'invalid',
      containment: 'parent',
    });

    $('#char2').droppable({
      drop: function(event, ui) {
        var opponent = ui.draggable.attr('#char2');
        $('#char').removeClass('mouse-grab').addClass('mouse-not-allowed').draggable({
          disabled: true
        });
        document.querySelector('video').playbackRate = 0.75;
        $('#audio1').empty();
        $('#magicAbility').fadeIn(100).get(0).play();
        setTimeout(function() {
          window.location = 'Awakened-Kallen.html'
        }, 4000);
      }
    });
  };

  function playerLose() {
    $('#stage').fadeOut(2000, function() {
      window.location = 'AnotherSide-Kallen.html'
    });
  }


  function attack() {
    $('#playerLife .life').css({
      'width': $('#playerLife .life').width() + 1
    });
    $('#enemyLife .life').css({
      'width': $('#enemyLife .life').width() + 1
    });
    $('#char1').stop(false, true).animate({
      left: '+=1'
    }, 50, 'linear', function() {
      $(this).stop(false, true).animate({
        left: '-=1'
      }, 50, 'linear')
    });

  };

  function evade() {
    $('#enemyLife .life').css({
      'width': $('#enemyLife .life').width() - 1
    });
    $('#char1').stop(false, true).animate({
      left: '-=1'
    }, 50, 'linear', function() {
      $(this).stop(false, true).animate({
        left: '+=1'
      }, 50, 'linear')
    });
  };


  function battleTimer() {
    var timer = setInterval(battleHandler, 100);
    var battleTimeCount = 30;
    $('#battleEvade').off('click', secondTutorial);
    $('#battleTimer').empty().html(battleTimeCount);
    $('#battleAttack').empty().html('Approach');
    $('#battleEvade').empty().html('Evade');
    $('#battleMagic').click(function() {
      $('#playerLife .life').css({
        'width': '300'
      })
    });

    function battleHandler() {
      console.log(battletimecounter);
      battletimecounter++;
      $('#enemyLife .life').css({
        'width': $('#enemyLife .life').width() + 1
      });
      $('#battleAttack').one('click', attack);
      $('#battleEvade').one('click', evade);
      $(document).one('keydown', function(e) {
        if (e.which == 65) {
          attack();
          $('#battleAttack').addClass('battleKeyDown').removeClass('battleKeyup');
        };
        if (e.which == 69) {
          evade();
          $('#battleEvade').addClass('battleKeyDown').removeClass('battleKeyup');
        };
      });
      $(document).one('keyup', function(e) {
        if (e.which == 65) {
          $('#battleAttack').addClass('battleKeyup').removeClass('battleKeyDown');
        };
        if (e.which == 69) {
          $('#battleEvade').addClass('battleKeyup').removeClass('battleKeyDown');
        };

      });


      if ($('#playerLife .life').width() >= 250 && $('#playerLife .life').width() < 300) {
        $('#playerLife .life').css({
          'width': '0'
        });
        $('#battleMagic').addClass('moveBack');
      } else if ($('#playerLife .life').width() >= 150) {
        $('#battleMagic').removeClass('moveBack');
      };

      if (battletimecounter == 10) {
        battleTimeCount--;
        $('#battleTimer').empty().html(battleTimeCount);
        battletimecounter = 0;
      }

      if (battleTimeCount == 0 || $('#enemyLife .life').width() >= 300) {
        clearInterval(timer);
        $('#battlemenu').empty().html("<div id='battleTimer'>You Lose</div>");
        setTimeout(playerLose, 2000);
      };


      if ($('#playerLife .life').width() == 300) {
        clearInterval(timer);
        $('#battlemenu').empty().html("<div id='battleTimer'>You Win</div>");
        playerWin();
      }
    }
  };



})
