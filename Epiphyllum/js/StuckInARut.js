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

  $('#stage').addClass('bg-home-entrance-dusk');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/05 Feel Ambivalents.mp3'>");
  $('#controlguide div,#textbox').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash img').addClass('flashBlack');

  setTimeout(function() {
    $('#flash img').hide();
    $('#flash').toggle("slide", {
      direction: 'right'
    }, 1000, "linear");
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">');
    $('#textbox').addClass('mouse-not-allowed').fadeIn(1000, function() {
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Father....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Father....｣</p></div>');
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
      $('#audio2').html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/Apartment-ding-dong-sound.mp3'>").get(0).play();
      $('#char2').addClass('deepFilter scalesmall').html('<img src="images/Cheresa-shadow.png" alt="characterImage">').css("right", "-100px");
      $('#message').html('<div class="Jongun"><p>(Is that you....)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Is that you....)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#char2').removeClass('scalesmall').css("right", "0");
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#message').html('<div class="Jongun"><p>(No people at home?)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(No people at home?)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#bgs').html("<source src='audio/bgs/blood.ogg'>").get(0).play();
      $('#flash').css('background-color', 'rgba(255,0,0,1)').removeClass('flashBlack').fadeIn(500, function() {
        $(this).fadeOut(500, function() {
          $('#char3').effect("shake", {
            direction: "right"
          });
          $('#spokesperson, #message').empty();
          $('#char3').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>?!<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="nonespeech backlogborder"><p>?!</p></div>');

          setTimeout(function() {
            $('#audio2').html("<audio id='bgs'></audio>");
            $('#bgs').html("<source src='audio/bgs/knife.ogg'>").get(0).play();
          }, 1000);
          setTimeout(function() {
            $('body').css("filter", "blur(2px)");
            $('#spokesperson, #message').empty();
            $('#spokesperson').html('<div class="nonespeech"><h1>???</h1></div>');
            $('#message').html('<div class="nonespeech"><p>｢I have never think the last one is you...｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="nonespeech backlogborder"><h1>???</h1><p>｢I have never think the last one is you...｣</p></div>');
          }, 2000);
          setTimeout(function() {
            $('body').css("filter", "blur(4px)");
            $('#stage').animate({
              opacity: "0"
            }, 4000, 'linear', function() {
              sessionStorage.setItem("clearcounter", clearcounter);
              sessionStorage.setItem("cheresacounter", cheresacounter);
              sessionStorage.setItem("shirleycounter", shirleycounter);
              sessionStorage.setItem("ayacounter", ayacounter);
              sessionStorage.setItem("kallencounter", kallencounter);
              sessionStorage.setItem("charFirstname", charFirstname);
              sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
              sessionStorage.setItem("ideaOnAya", ideaOnAya);
              window.location = 'Truth-Falsehood.html';
            });
          }, 5000);



        })
      })

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

})