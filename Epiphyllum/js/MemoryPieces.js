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
  $('#bgm').html("<source src='audio/bgm/22 Innocent Days.mp3'>")
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
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">').addClass('charFilp');
    $('#char2').html('<img src="images/CheresaUnhappy.png" alt="characterImage">').addClass('filter');
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢Sorry Cheresa... I know I have done some very wrong things...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Sorry Cheresa... I know I have done some very wrong things...｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }, 4000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);


    if (textcounter == 1) {
      playBgm();
      $('#message').html('<div class="Jongun"><p>｢And I guess maybe you probably know already...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢And I guess maybe you probably know already...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/CheresaUnhappy2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢<span class="charFirstname"></span>...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢<span class="charFirstname"></span>...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      setTimeout(function() {
        $('#char2').animate({
          left: '-=200'
        }, 2000, 'linear', function() {
          $('#char3').effect("shake", {
            direction: "left"
          });
          $('#audio2').empty().html("<audio id='bgs'></audio>");
          $('#bgs').html("<source src='audio/bgs/falldown.mp3'>").get(0).play();
          $('#char2').addClass('filter');
          $('#char3').removeClass('filter');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>She lied on me.<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>She lied on me.</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        }, 1500)
      })
    }

    if (textcounter == 3) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢It\'s too late... sorry....forgive me...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢It\'s too late... sorry....forgive me...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      setTimeout(function() {
        $('#audio2').empty().html("<audio id='bgs' loop></audio>");
        $('#bgs').html("<source src='audio/bgs/kiss.ogg'>").get(0).play();
        setTimeout(function() {
          $('#char3, #stage').effect("shake", {
            direction: "up"
          });
        }, 500);

        $('body').css("filter", "blur(2px)");
        setTimeout(function() {
          $('#message').html('<div class="Cheresa"><p>｢Bye Bye...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Bye Bye...｣</p></div>');
        }, 3000);
        setTimeout(function() {
          $('body').css("filter", "blur(4px)");
        }, 4000);
        setTimeout(function() {
          $('body').css("filter", "blur(6px)");
          $('#stage').animate({
            opacity: "0"
          }, 2000, 'linear', function() {
            $('#char2, #char3, #spokesperson, #message, #audio2').empty();
            $('#backlog section').empty().html('<div id="backlogClose">Close X</div>');
            $('#backlogClose').click(hideBacklog);
            controlTextBox();
          });
        }, 5000);
      }, 2000)

    }

    if (textcounter == 4) {
      $('#stage').removeClass('bg-bypath-dusk').addClass('bg-room-day');
      $('#stage').animate({
        opacity: "1"
      }, 2000, 'linear', function() {
        $('body').css("filter", "blur(6px)");
        setTimeout(function() {
          $('body').css("filter", "blur(4px)");
        }, 1000);
        setTimeout(function() {
          $('body').css("filter", "blur(2px)");
        }, 2000);
        setTimeout(function() {
          $('body').css("filter", "blur(0px)");
        }, 3000);
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 5) {
      $('#char3').removeClass('filter charFilp').hide().html('<img src="images/Jongun-Underwear-Unhappy1.png" alt="characterImage">').fadeIn(1000, function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Days are keep going on.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Days are keep going on.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });

    }

    if (textcounter == 6) {
      $('#stage').removeClass('bg-room-day').addClass('bg-apartment-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢After I separated from my family, all things are also running smoothly.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢After I separated from my family, <br>all things are also running smoothly.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 7) {
      $('#stage').removeClass('bg-apartment-day').addClass('bg-apartment-entrance-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢As I have a good enviornment for me to sleep｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢As I have a good enviornment for me to sleep｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 8) {
      $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-cafe-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢it even can let me have time to eat the breakfast every school day｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢it even can let me have time <br>to eat the breakfast every school day｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }


    if (textcounter == 9) {
      $('#stage').removeClass('bg-cafe-day').addClass('bg-street-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Just don\'t know why I think there is somthing lost on everyday｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Just don\'t know why I think there is somthing lost on everyday｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 10) {
      $('#stage').removeClass('bg-street-day').addClass('bg-classroom-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Maybe it just my illusion...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Maybe it just my illusion...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 11) {
      MemoryPieces()
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

  function MemoryPieces() {
    $('#flash div').removeClass('moveBack');
    $('#referenceList').hide();
    $('#flash').addClass('flashBlack').fadeIn(2000, function() {
      $('#referenceList').fadeIn(1000, function() {
        setTimeout(function() {
          $('html, #referenceList').animate({
            scrollTop: ($(".songBottom").offset().top)
          }, 287500, "linear");
        }, 2000);
      })
      $("#audio1").html("<audio id='bgm'><source src='audio/ed/あなたが…いない -remix ver.-.flac'></audio>");
      playBgm();
      $('#lyrics').addClass('Cheresa flashBlack');
      var songtimecounter = 0;
      var timer = setInterval(eventHandler, 100);

      function eventHandler() {
        songtimecounter++;

        if (songtimecounter == 5) {
          $('#lyrics').html('My smile trembles');
        }

        if (songtimecounter == 41) {
          $('#lyrics').html('And my voice shakes');
        }

        if (songtimecounter == 77) {
          $('#lyrics').html('In this blurring scenery');
        }

        if (songtimecounter == 157) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 244) {
          $('#lyrics').html('I talked to you because I wanted to know you better');
        }

        if (songtimecounter == 312) {
          $('#lyrics').html('Your pure eyes are so bright');
        }

        if (songtimecounter == 380) {
          $('#lyrics').html('I want to to be closer to you, so more and more');
        }

        if (songtimecounter == 448) {
          $('#lyrics').html('I pretend to forget the tiny achings');
        }

        if (songtimecounter == 519) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 535) {
          $('#lyrics').html('When did you finally get the person you love');
        }

        if (songtimecounter == 674) {
          $('#lyrics').html('You seem lively and more talkative than usual');
        }

        if (songtimecounter == 751) {
          $('#lyrics').html('I am in pain as I face this reality');
        }

        if (songtimecounter == 801) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 810) {
          $('#lyrics').html('My smile trembles');
        }

        if (songtimecounter == 842) {
          $('#lyrics').html('And my voice shakes');
        }

        if (songtimecounter == 880) {
          $('#lyrics').html('I look down and pretend I\'m alright');
        }

        if (songtimecounter == 942) {
          $('#lyrics').html('You are...not here');
        }

        if (songtimecounter == 975) {
          $('#lyrics').html('Not by...my side');
        }

        if (songtimecounter == 1015) {
          $('#lyrics').html('Though we understood each other');
        }

        if (songtimecounter == 1077) {
          $('#lyrics').html('There exists an unfillable gap between us');
        }

        if (songtimecounter == 1140) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 1251) {
          $('#lyrics').html('Just exchanging a few words with you makes me happy');
        }

        if (songtimecounter == 1320) {
          $('#lyrics').html('Embraced by your gentle eyes');
        }

        if (songtimecounter == 1389) {
          $('#lyrics').html('I trembled at my real feelings');
        }

        if (songtimecounter == 1455) {
          $('#lyrics').html('But still I quietly offered you all my heart');
        }

        if (songtimecounter == 1534) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 1544) {
          $('#lyrics').html('I want to slowly develope');
        }

        if (songtimecounter == 1610) {
          $('#lyrics').html('Our truly precious meeting');
        }

        if (songtimecounter == 1677) {
          $('#lyrics').html('I want reach you, but I can\'t');
        }

        if (songtimecounter == 1751) {
          $('#lyrics').html('And before I know it, only my fear grows');
        }

        if (songtimecounter == 1812) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 1820) {
          $('#lyrics').html('I\'ve always believed');
        }

        if (songtimecounter == 1885) {
          $('#lyrics').html('That we were never meant to be');
        }

        if (songtimecounter == 1955) {
          $('#lyrics').html('You are...not here');
        }

        if (songtimecounter == 1983) {
          $('#lyrics').html('Not by...my side');
        }

        if (songtimecounter == 2023) {
          $('#lyrics').html('I couldn\'t accept this, so I kept on searching');
        }

        if (songtimecounter == 2150) {
          $('#lyrics').empty();
        }

        if (songtimecounter == 2366) {
          $('#lyrics').html('The words told through tears are disppearing');
        }

        if (songtimecounter == 2423) {
          $('#lyrics').html('The teasing emotions won\'t leave me alone');
        }

        if (songtimecounter == 2504) {
          $('#lyrics').html('You are...not here');
        }

        if (songtimecounter == 2536) {
          $('#lyrics').html('Not by...my side');
        }

        if (songtimecounter == 2572) {
          $('#lyrics').html('With nowhere else to go, I let out a sigh of solitude');
        }

        if (songtimecounter == 2680) {
          $('#lyrics').html('I will continue to smile...so please let me love you');
        }


        if (songtimecounter == 2870) {
          window.location = 'Truth-Falsehood.html';
        }

      }
    });

  }

})