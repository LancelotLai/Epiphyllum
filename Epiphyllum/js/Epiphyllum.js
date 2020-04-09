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
  var happyend = sessionStorage.getItem('happyend');

  $(document).keyup(function(e) {
    console.log(e.which);
    if (e.which == 32) {
      showBacklog();
    };
    if (e.which == 27) {
      hideBacklog();
    };
  });

  $('#stage').addClass('bg-index2');
  counterChange();
  controlGuide();
  $('#audio2').empty().html("<audio id='bgs' loop></audio>");

  $('#controlguide div,#textbox').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash, #flash img').addClass('flashBlack');

  setTimeout(function() {
    $('#flash img').hide();
    $('#flash').toggle("slide", {
      direction: 'right'
    }, 1000, "linear");
    $('#textbox').addClass('mouse-not-allowed').fadeIn(1000, function() {
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>Shirley disappeared start from that day.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Shirley disappeared start from that day</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    });
  }, 3000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      $('#bgs').html("<source src='audio/bgs/night-wild.ogg'>").get(0).play();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>When I told Cheresa...She just think I am kidding...Shirley just my fantasy.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>When I told Cheresa...She just think I am kidding...Shirley just my fantasy.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#message').html('<div class="Jongun"><p>But after she disappear, only one thing I confirmed....<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>But after she disappear, only one thing I confirmed....</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      if (ayacounter != 0) {
        $('#message').html('<div class="Jongun"><p>There is no any news reported Aya\'s suicided.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>There is no any news reported Aya\'s suicided.</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (kallencounter != 0) {
        $('#message').html('<div class="Jongun"><p>There is no any news reported Kallen\'s suicided.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>There is no any news reported Kallen\'s suicided.</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else {
        $('#message').html('<div class="Jongun"><p>Before Shirley\'s gone, Aya and Kallen also haven\'t use social media software.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Before Shirley\'s gone, Aya and Kallen also haven\'t use social media software.</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if (textcounter == 4) {
      $('#message').html('<div class="Jongun"><p>Cheresa is lying.</p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Cheresa is lying.</p></div>');
      $('.charFirstname').html(charFirstname);
      setTimeout(function() {
        sessionStorage.clear();
        window.location = 'index.html';
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

})