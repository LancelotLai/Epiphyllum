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

  $('#stage').addClass('bg-kallenroom-deep-night');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/01 僕は、鳥になる。.mp3'>")
  $('#controlguide div').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">').addClass('flashBlack');
  $('#flash img').addClass('flashBlack');

  setTimeout(function() {
    $('#stage').css({
      "border-color": "rgba(255, 163, 205, 1)",
      "border-size": "40px",
      "border-style": "solid",
      "border-radius": "1px"
    });
    $('#textbox').css("background-color", "rgba(255, 163, 205, 0.5)");
    $('#flash').empty().fadeOut(2000, function() {
      $('#textbox').addClass('mouse-not-allowed');
      $('#char3').empty().html('<img src="images/Kallen-Tower-sad2.png" alt="characterImage">').removeClass('charFilp');
      $('#spokesperson').html('<div class="kallen"><h1>Kallen (<span class="charFirstname"></span>)</h1></div>');
      $('#message').html('<div class="kallen"><p>｢...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen (<span class="charFirstname"></span>)</h1><p>｢...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    });
  }, 3000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      playBgm();
      $('#char2').html('<img src="images/ShirleyNormal.png" alt="characterImage">').fadeIn(1000, function() {
        $('#char3').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢Let\'s start.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Let\'s start.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 2) {

      if (ideaOnKallen == 3 || ideaOnKallen == 1) {
        $('#char2').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen (<span class="charFirstname"></span>)</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Um...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen (<span class="charFirstname"></span>)</h1><p>｢Um...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if (ideaOnKallen == 2) {
        $('#char2').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#option').removeClass('moveBack');
        $('#option, #yesnooption, #threeoptionmenu').hide();
        $('#option, #yesnooption').fadeIn(1000);
        $('#yes').html('Let her becomes my hope<br>').one('click', letHerBecomesMyHope);
        $('#no').html('<br>Let her becomes my memories').one('click', letHerBecomesMyMemories);
        $('#yes, #no').click(function() {
          $("#yesnooption").off("click");
          $("#option").fadeOut(1000, function() {
            $('#yesnooption').hide();
          });
        });
      }

    }

    if (textcounter == 3) {
      $('#char2').removeClass('filter').html('<img src="images/ShirleyNormal.png" alt="characterImage">').fadeIn(1000, function() {
        $('#char3').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢No worries, I know what to do...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢No worries, I know what to do...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 4) {
      $('#stage').animate({
        opacity: "0"
      }, 4000, 'linear', function() {
        $('#spokesperson, #message, #char2, #char3').empty();
        if (ideaOnKallen == 3) {
          $('#stage').css({
            "border-color": "",
            "border-size": "",
            "border-style": "",
            "border-radius": ""
          });
          $('#textbox').css("background-color", "rgba(0, 0, 0, 0.7)");
          $('#char2').addClass('charFilp').html('<img src="images/Kallen-Tower-sad1.png" alt="characterImage">');
          $('#char3').addClass('charFilp').html('<img src="images/Jongun-UnderwearHappy.png" alt="characterImage">');
        }

        if (ideaOnKallen == 1) {
          $('#stage').removeClass('bg-kallenroom-deep-night').addClass('bg-index2');

        }
        $('#stage').animate({
          opacity: "1"
        }, 2000, 'linear', function() {


          if (ideaOnKallen == 3) {
            $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
            $('#message').html('<div class="kallen"><p>｢I will wait for you...｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢I will wait for you...｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          }

          if (ideaOnKallen == 1) {
            $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
            $('#message').html('<div class="kallen"><p>｢Byebye...｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Byebye...｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          }
        });

      });

    }

    if (textcounter == 5) {

      if (ideaOnKallen == 3) {
        $('#char2').empty().html('<img src="images/Kallen-Tower-smile.png" alt="characterImage">');
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Until the day you will choose me...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Until the day you will choose me...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if (ideaOnKallen == 1) {
        kallencounter = 1;
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢My dearest...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢My dearest...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if (textcounter == 6) {

      if (ideaOnKallen == 1) {
        $('#audio2').empty().html("<audio id='bgs' ></audio>");
        $('#bgs').html("<source src='audio/bgs/blood.ogg'>").get(0).play();
        counterChange();
      }
      $('#stage').animate({
        opacity: "0"
      }, 4000, 'linear', function() {
        if (ideaOnKallen == 1) {
          $('#stage').css({
            "border-color": "",
            "border-size": "",
            "border-style": "",
            "border-radius": ""
          });
          $('#textbox').css("background-color", "rgba(0, 0, 0, 0.7)");
        };
        $('#spokesperson, #message').empty();
        $('#audio1, #char2, #char3').empty();
        $('body').css("filter", "blur(6px)");
        $('#stage').removeClass('bg-kallenroom-deep-night').addClass('bg-room-day').animate({
          opacity: "1"
        }, 2000, 'linear', function() {
          $('#audio2').empty().html("<audio id='bgs' loop></audio>");
          $('#bgs').html("<source src='audio/bgs/birds.ogg'>").get(0).play();
          setTimeout(function() {
            $('body').css("filter", "blur(4px)");
          }, 1000);
          setTimeout(function() {
            $('body').css("filter", "blur(2px)");
          }, 2000);
          setTimeout(function() {
            $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
            $('#message').html('<div class="Jongun"><p>｢Stay with me...｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Stay with me...｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
            $('body').css("filter", "blur(0px)");
          }, 3000);
        });
      });
    }

    if (textcounter == 7) {
      $('#char3').removeClass('filter charFilp').html('<img src="images/Jongun-Underwear-Unhappy1.png" alt="characterImage">').hide().fadeIn(1000);
      $('#message').html('<div class="Jongun"><p>When I backed to consciousness, I tried to wipe the tears away.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>When I backed to consciousness, I tried to wipe the tears away.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 8) {
      $('#message').html('<div class="Jongun"><p>I don\'t know why I am feeling guilty with no reason.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I don\'t know why I am feeling guilty with no reason.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 9) {
      $('#message').html('<div class="Jongun"><p>｢...Is that really a dream?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢...Is that really a dream?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 10) {
      $('#spokesperson, #message').empty();
      $('#option').removeClass('moveBack');
      $('#option, #threeoptionmenu, #yesnooption').hide();
      $('#option, #threeoptionmenu').fadeIn(1000);

      if (ideaOnAya == 0) {
        $('#option1').html('<h1>Shirley...will you also feel alone?</h1>').one('click', Good);
        $('#option2').html('<h1>Shirley...what is the mana used for?</h1>').one('click', Normal);
        $('#option3').html('<h1>Shirley...are we doing the wrong thing?</h1>').one('click', Bad);
      } else {
        $('#option3').html('<h1>Shirley...I will stay with you...</h1>').one('click', Good);
        $('#option1').html('<h1>Shirley...what is your plan after the contract end?</h1>').one('click', Normal);
        $('#option2').html('<h1>Shirley...don\'t you feel guilty when we are doing such things?</h1>').one('click', Bad);
      }

    }

    if (textcounter == 11) {
      $('#char3').addClass('filter');
      $('#char1').empty().html('<img src="images/ShirleyNormal.png" alt="characterImage">').hide().fadeIn(1000, function() {
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢What\'s happened with you?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢What\'s happened with you?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 12) {
      if (ideaOnAya > 0 && shirleycounter == 2) {
        $('#char1').empty().html('<img src="images/ShirleyEmbarrass.png" alt="characterImage">');
        $('#message').html('<div class="Shirley"><p>｢Don\'t need to worry, I won\'t leave you alone.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Don\'t need to worry, I won\'t leave you alone.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya > 0 && shirleycounter == 1) {
        $('#char1').empty().html('<img src="images/ShirleyHappy.png" alt="characterImage">');
        $('#message').html('<div class="Shirley"><p>｢You don\'t need to worry, I won\'t betray your trust.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You don\'t need to worry, I won\'t betray your trust.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya > 0 && shirleycounter == 0) {
        $('#char1').empty().html('<img src="images/ShirleyLaugh.png" alt="characterImage">');
        $('#message').html('<div class="Shirley"><p>｢That\'s not important anymore.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢That\'s not important anymore.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya == 0 && shirleycounter == 1) {
        $('#char1').empty().html('<img src="images/ShirleyLaugh.png" alt="characterImage">');
        $('#message').html('<div class="Shirley"><p>｢Ofcourse not~ As I am staying with an interesting guy everyday now~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Ofcourse not~ As I am staying with an interesting guy everyday now~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya == 0 && shirleycounter == 0) {
        $('#message').html('<div class="Shirley"><p>｢You don\'t need to care about that.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You don\'t need to care about that.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else {
        console.log(shirleycounter);
      }
    }

    if (textcounter == 13) {
      if (ideaOnAya > 0 && shirleycounter == 2) {
        $('#message').html('<div class="Shirley"><p>｢But I finally noticed both of their ability are stole by someone... you need to be careful.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢But I finally noticed both of their ability are stole by someone... <br>you need to be careful｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya > 0 && shirleycounter == 1) {
        $('#message').html('<div class="Shirley"><p>｢Just to be careful... I have a bad presentiment.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Just to be careful... I have a bad presentiment.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya > 0 && shirleycounter == 0) {
        $('#message').html('<div class="Shirley"><p>｢As your mission is done...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢As your mission is done...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        setTimeout(function() {
          $('#audio2').empty().html("<audio id='bgs'></audio>");
          $('#bgs').html("<source src='audio/bgs/blood.ogg'>").get(0).play();
          $('#flash').css('background-color', 'rgba(255,0,0,1)').removeClass('flashBlack').fadeIn(500, function() {
            $(this).fadeOut(500, function() {
              $('#char3, #stage').effect("shake", {
                direction: "up"
              });
              $('#char3').removeClass('filter');
              $('#char2').addClass('filter');
              $('#spokesperson, #message').empty();
              $('#char3').empty().html('<img src="images/Jongun-Underwear-o.png" alt="characterImage">');
              $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
              $('#message').html('<div class="Jongun"><p>?!<span id="textend">▷</span></p></div>');
              $('#backlog section').append('<div class="nonespeech backlogborder"><p>?!</p></div>');

              setTimeout(function() {
                $('body').css("filter", "blur(2px)");
              }, 1000);
              setTimeout(function() {
                $('body').css("filter", "blur(4px)");
                $('#char1').removeClass('filter');
                $('#char2').addClass('filter');
                $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
                $('#message').html('<div class="Shirley"><p>｢Bye bye...｣<span id="textend">▷</span></p></div>');
                $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Bye bye...｣</p></div>');
              }, 2000);
              setTimeout(function() {
                $('body').css("filter", "blur(6px)");
              }, 3000);
              $('#stage').animate({
                opacity: "0"
              }, 4000, 'linear', function() {
                sessionStorage.setItem("clearcounter", clearcounter);
                sessionStorage.setItem("cheresacounter", cheresacounter);
                sessionStorage.setItem("shirleycounter", shirleycounter);
                sessionStorage.setItem("ayacounter", ayacounter);
                sessionStorage.setItem("kallencounter", kallencounter);
                sessionStorage.setItem("charFirstname", charFirstname);
                sessionStorage.setItem("ideaOnAya", ideaOnAya);
                sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
                window.location = 'Truth-Falsehood.html';
              });
            });
          })
        }, 3000);

      } else if (ideaOnAya == 0 && shirleycounter == 1) {
        $('#message').html('<div class="Shirley"><p>｢One interesting thing can let you know, there is somthing weird with the mana...be careful~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢One interesting thing can let you know, <br>there is somthing weird with the mana...be careful~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (ideaOnAya == 0 && shirleycounter == 0) {
        $('#message').html('<div class="Shirley"><p>｢Just focusing on the contract, and it can let both of us happy.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You don\'t need to care about that.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if (textcounter == 14) {
      $('#flash').removeClass('flashBlack').toggle("slide", {
        direction: 'right'
      }, 2000, "linear");

      setTimeout(function() {
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        sessionStorage.setItem("ideaOnAya", ideaOnAya);
        sessionStorage.setItem("ideaOnKallen", ideaOnKallen);

        if (ideaOnAya == 0) {
          window.location = 'Sensibility.html';
        } else {
          window.location = 'Masquerade.html';
        }
      }, 3000)

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


  function threeOptionMenuChoose() {
    $("#option1, #option2, #option3").off("click");
    $("#option, #threeoptionmenu").fadeOut(1000, function() {
      $('#option1, #option2, #option3').empty();
      $('#threeoptionmenu').addClass('moveBack');
    });
  }

  function letHerBecomesMyHope() {
    ideaOnKallen = 3;
    $('#spokesperson').html('<div class="kallen"><h1>Kallen (<span class="charFirstname"></span>)</h1></div>');
    $('#message').html('<div class="kallen"><p>｢Um...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen (<span class="charFirstname"></span>)</h1><p>｢Um...｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();

  }

  function letHerBecomesMyMemories() {
    ideaOnKallen = 1;
    $('#spokesperson').html('<div class="kallen"><h1>Kallen (<span class="charFirstname"></span>)</h1></div>');
    $('#message').html('<div class="kallen"><p>｢Um.｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen (<span class="charFirstname"></span>)</h1><p>｢Um.｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }


  function Good() {
    shirleycounter++;
    threeOptionMenuChoose();
    $(this).toggle("pulsate");

    if (ideaOnAya == 0) {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...will you also feel alone?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...will you also feel alone?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    } else {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...I will stay with you...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...I will stay with you...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    }

  }

  function Normal() {
    threeOptionMenuChoose();
    $(this).toggle("pulsate");
    if (ideaOnAya == 0) {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...what is the mana used for?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...what is the mana used for?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    } else {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...what is your plan after the contract end?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...what is your plan after the contract end?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    }
  }

  function Bad() {
    threeOptionMenuChoose();
    $(this).toggle("pulsate");
    if (ideaOnAya == 0) {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...are we doing the wrong thing?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...are we doing the wrong thing?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    } else {
      setTimeout(function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley...don\'t you feel guilty when we are doing such things?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...don\'t you feel guilty when we are doing such things?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    }
  }

})
