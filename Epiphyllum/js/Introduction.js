$(document).ready(function() {

  var textcounter = 0;
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var cheresacounter = sessionStorage.getItem('cheresacounter') || 0;
  var shirleycounter = sessionStorage.getItem('shirleycounter') || 0;
  var ayacounter = sessionStorage.getItem('ayacounter') || 0;
  var kallencounter = sessionStorage.getItem('kallencounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || 'Noname';

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
  $('#controlguide div').hide();
  $('#flash').fadeOut(1000);
  $('#textbox').hide().addClass('mouse-not-allowed').fadeIn(1000, function() {
    $('#message').html('<div class="nonespeech"><p>This is a story.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>This is a story.</p></div>');
    avoidMonkeyClick();
  });
  $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/05 Feel Ambivalents.mp3'></audio>");
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);


  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      playBgm();
      $('#message').html('<div class="nonespeech"><p>A story full of falsehoods.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>A story full of falsehood.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 2) {
      $('#message').html('<div class="nonespeech"><p>And a story full of truths.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>And a story full of truth.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 3) {
        $('#message').html('<div class="nonespeech"><p>Which things are falsehoods? Which things are truths?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Which things are falsehoods? Which things are truths?</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 4) {
        $('#message').html('<div class="nonespeech"><p>I don\'t know.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>I don\'t know.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 5) {
        $('#message').html('<div class="nonespeech"><p>I really don\'t know.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>I really don\'t know.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 6) {
        $('#message').html('<div class="nonespeech"><p>All of them could be the truths.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>All of them could be the truths.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 7) {
        $('#message').html('<div class="nonespeech"><p>All of them could be the falsehoods.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>All of them could be the falsehoods.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 8) {
        $('#message').html('<div class="nonespeech"><p>You will know.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>You will know.</p></div>');
      avoidMonkeyClick();
    };

    if (textcounter == 9) {
        $('#message').html('<div class="nonespeech"><p>You should know.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>You should know.</p></div>');
      setTimeout(function(){ $('#flash').fadeIn(4000, function() {
        $('#flash').html('<div id="icon">Epiphyllum</div>');
        setTimeout(controlTextBox, 5000);
        $('#icon').hide().fadeIn(5000, function() {
          $('#audio1').empty().html("<audio id='bgm' loop></audio>");
          $('#bgm').html("<source src='audio/bgm/12 Lack of Power for Wisdom.mp3'>").get(0).play();
          $('#icon').fadeOut(1000, function(){$('#flash').fadeOut(1000, function(){$('#flash').empty()});})
        });
      });}, 1000);

    };

    if (textcounter == 10) {
      $('#stage').addClass('bg-home-night');
      $('#char3').html('<img src="images/FakperAngry2.png" alt="characterImage">')
      .hide().fadeIn(1000, function(){
        $('#spokesperson').html('<div class="fakper"><h1>Fakper</h1></div>');
        $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢Why I teached a son like that.｣</p></div>');
        $('#message').html('<div class="fakper"><p>｢Why I teached a son like that.｣<span id="textend">▷</span></p></div>');
        avoidMonkeyClick();
      });
    };

    if (textcounter == 11) {
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢If I know he is so foolish, I won\'t give birth to him.｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢If I know he is so foolish, I won\'t give birth to him.｣<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 12) {
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢Shame on the clan of Barton.｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢Shame on the clan of Barton.｣<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 13) {
      $('#char3').empty().html('<img src="images/FakperAngry1.png" alt="characterImage" class="filter">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>......</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>......<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };



    if (textcounter == 14) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(I know eavesdropping is bad...)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(I know eavesdropping is bad...)<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 15) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(But am I so bad...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(But am I so bad...?)<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 16) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Is it because of I am worse than Aya and Kallen...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(Is it because of I am worse than Aya and Kallen...?)<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 17) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Is it because of I don\'t know magic...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(Is it because of I don\'t know magic...?)<span id="textend">▷</span></p></div>');
    avoidMonkeyClick();
    };

    if (textcounter == 18) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Am I so bad...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(Am I so bad...?)<span id="textend">▷</span></p></div>');
      $('body').css("filter", "blur(1px)");
    avoidMonkeyClick();
    };

    if (textcounter == 19) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Am...I...so...bad...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(Am...I...so...bad...?)<span id="textend">▷</span></p></div>');
      $('body').css("filter", "blur(2px)");
    avoidMonkeyClick();
    };

    if (textcounter == 20) {
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Am...I...so...)</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>(Am...I...so...)<span id="textend">▷</span></p></div>');
      $('body').css("filter", "blur(3px)");
      $('#stage').animate({opacity:"0"}, 2000, 'linear', function(){
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        window.location = 'New-Life.html';});
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

  function controlGuide(){
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

})
