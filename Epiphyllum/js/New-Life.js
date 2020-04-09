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
  $('#controlguide div').hide();
  $('#stage').addClass('bg-room-day');
  $('#flash').fadeOut(2000);
  $('#textbox').hide().addClass('mouse-not-allowed').fadeIn(3000, function() {
    $('#char3').html('<img src="images/Jongun-Underwear-Unhappy1.png" alt="characterImage">')
      .hide().fadeIn(1000, function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>How many times I dreamed that dream again...</p></div>');
        $('.charFirstname').html(charFirstname);
        $('#message').html('<div class="Jongun"><p>｢How many times I dreamed that dream again...｣<span id="textend">▷</span></p></div>');
        avoidMonkeyClick();
      });
  });
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);


  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      $('#audio2').html("<audio id='bgs' loop><source src='audio/bgs/birds.ogg'></audio>");
      $('#bgs').get(0).play();
      $('#message').html('<div class="Jongun"><p>Although I just sperated from family for few months, I haven\'t feel the difference so much.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Although I just sperated from family for few months,<br> I haven\'t feel the difference so much.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    };

    if (textcounter == 2) {

      $('#message').html('<div class="Jongun"><p>Maybe I am easy to get used to live alone...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Maybe I am easy to get used to live alone...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    };

    if (textcounter == 3) {

      $('#char3').empty().html('<img src="images/Jongun-Underwear-Unhappy2.png" alt="characterImage">');
      $('#message').html('<div class="Jongun"><p>Or just because I had a long practice start from my childhood?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Or just because I had a long practice start from my childhood?</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    };

    if (textcounter == 4) {
      $('#char3').empty().html('<img src="images/Jongun-Underwear-Relax.png" alt="characterImage">');
      $('#message').html('<div class="Jongun"><p>｢Anyway, nightmare is gone, there is nothing worse than before.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Anyway, nightmare is gone, there is nothing worse than before.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    };

    if (textcounter == 5) {
      $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/01 Previous Notice.mp3'></audio>");
      playBgm();
      $('#char3').empty().html('<img src="images/Jongun-Underwear-shocked.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p>But <span class="charFirstname"></span> just enjoyed this peace for few second.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>But <span class="charFirstname"></span> just enjoyed this peace for few second.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    };

    if (textcounter == 6) {
      $('#char3').effect("shake", {
        direction: "up"
      });
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Arrr!!!!!!!! 7:30!!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢Arrr!!!!!!!! 7:30!!!!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();

    }

    if (textcounter == 7) {
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p>When he looked at his phone, he finally sensed he will coming late to school soon.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>When he look at his phone, <br>he finally sensed he will coming late to school soon</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    }

    if (textcounter == 8) {
      $('#stage').removeClass('bg-room-day').addClass('bg-apartment-day');
      $('#char3').empty().html('<img src="images/Jongun-shocked.png" alt="characterImage">');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢7:35!!!! Why Cheresa hasn\'t call me!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢7:35!!!! Why Cheresa hasn\'t call me!!!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 9) {
      $('#audio2').empty().html("<audio id='bgs' loop><source src='audio/bgs/footstep02.ogg'></audio>");
      $('#bgs').get(0).play();
      $('#stage').removeClass('bg-apartment-day').addClass('bg-apartment-entrance-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p>7:00  :  5 missed call from Cheresa Snowden.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>7:00  :  5 missed call from Cheresa Snowden.  7:00</p></div>');
      avoidMonkeyClick();

    }

    if (textcounter == 10) {
      $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-station-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Okayyyy!!!! My fault!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢Okayyyy!!!! My fault!!!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();

    }

    if (textcounter == 11) {
      $('#stage').removeClass('bg-station-day').addClass('bg-station-inside');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢7:50!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢7:50!!!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();

    }

    if (textcounter == 12) {
      $('#stage').removeClass('bg-station-inside').addClass('bg-street-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3, #stage').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢7:5555555555555555555555555!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢7:5555555555555555555555555!!!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();

    }

    if (textcounter == 13) {
      $('#char3, #stage').effect("shake", {
        direction: "up"
      });
      $('#char3').addClass('charFilp')
      $('#char2').html('<img src="images/Kallen-noticed1.png" alt="characterImage" class="charFilp filter">')
        .hide().fadeIn(1000,
          function() {
            $('#spokesperson, #message').empty();
            $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
            $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen???!!! Why you can keep walking leisurelyyyyyyyyyy｣</p></div>');
            $('.charFirstname').html(charFirstname);
            $('#message').html('<div class="Jongun"><p>｢Kallen???!!! Why you can keep walking leisurelyyyyyyyyyy｣<span id="textend">▷</span></p></div>');
            avoidMonkeyClick();
          });
    }

    if (textcounter == 14) {
      $('#char2').empty().html('<img src="images/Kallen-noticed3.png" alt="characterImage" class="charFilp">');
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Why you keep hurrying, are you stupid?｣</p></div>');
      $('#message').html('<div class="kallen"><p>｢Why you k@#% h#$@%^*^......｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 15) {
      $('#char2').empty().html('<img src="images/Kallen-noticed2.png" alt="characterImage" class="charFilp filter">');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Sorry I can\'t hear!!!!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Sorry I can\'t hear!!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 16) {
      $('#stage').removeClass('bg-street-day').addClass('bg-school-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#char3, #stage').effect("shake", {
          direction: "up"
        });
      }, 500);
      $('#spokesperson, #message, #char2').empty();
      $('#char3').removeClass('charFilp');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢7:59!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢7:59!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 17) {
      $('#char3').empty().html('<img src="images/Jongun-Relax.png" alt="characterImage">');
      $('#audio1, #audio2').empty();
      $('#audio1').html("<audio id='bgm' loop></audio>");
      $('#audio2').html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/yeah.mp3'>").get(0).play();
      $('#message').html('<div class="Jongun"><p>｢Safe.......｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Safe.......｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 18) {
      $('#bgm').html("<source src='audio/bgm/16 Stray Cat.mp3'>");
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#char1').html('<img src="images/AyaHappy.png" alt="characterImage">').hide().fadeIn(1000, function() {
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Good morning <span class="charFirstname"></span>~｣</p></div>');
        $('#message').html('<div class="aya"><p>｢Good morning <span class="charFirstname"></span>~｣<span id="textend">▷</span></p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
      $('#char3').empty().html('<img src="images/JongunHappy2.png" alt="characterImage" class="filter">');
      $('#spokesperson, #message').empty();
      playBgm();
    }

    if (textcounter == 19) {
      $('#char1').empty().html('<img src="images/AyaHappy2.png" alt="characterImage" class="filter">');
      $('#char3').empty().html('<img src="images/JongunHappy3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Good morning Aya... seems like you watched my embarrassed look.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Good morning Aya... seems like you watched my embarrassed look.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 20) {
      $('#char1').empty().html('<img src="images/AyaHappy3.png" alt="characterImage">');
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢Um.... and also the reason~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Um.... and also the reason~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 21) {
      $('#char1').empty().html('<img src="images/AyaHappy2.png" alt="characterImage" class="filter">');
      $('#char3').empty().html('<img src="images/Jongun-sensed3.png" alt="characterImage">').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ar!?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ar!?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 22) {
      $('#char1').empty().html('<img src="images/AyaHappy3.png" alt="characterImage">');
      $('#char3').addClass('filter').empty().html('<img src="images/Jongun-shocked3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢Let\'s go back to classroom, Cheresa is waiting you~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Let\'s go back to classroom, Cheresa is waiting you~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 23) {
      $('#stage').removeClass('bg-school-day').addClass('bg-classroom-day');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#spokesperson, #message, #char1, #char3').empty();
      $('#char3').html('<img src="images/Jongun-shocked.png" alt="characterImage" class="charFilp">');
      $('#char1').html('<img src="images/AyaHappy2.png" alt="characterImage">').addClass('filter');
      $('#char2').html('<img src="images/CheresaUnhappy.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢......｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢......｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 24) {
      $('#spokesperson, #message').empty();
      $('#char3').removeClass('filter');
      $('#char2').addClass('filter');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ms Cheresa...?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ms Cheresa...?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 25) {
      $('#spokesperson, #message').empty();
      $('#char2').removeClass('filter');
      $('#char3').addClass('filter');
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢My surname is Snowden.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢My surname is Snowden.｣</p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 26) {
      $('#spokesperson, #message').empty();
      $('#char3').empty().html('<img src="images/Jongun-sensed2.png" alt="characterImage" class="charFilp">').removeClass('filter');
      $('#char2').addClass('filter');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ms Snowden, are you feeling unhappy?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ms Snowden, are you feeling unhappy?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 27) {
      $('#spokesperson, #message').empty();
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').html('<img src="images/Cheresa-Sigh.png" alt="characterImage">').addClass('charFilp');
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢I am just worrying you, please don\'t call me in this weird way.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢I am just worrying you, please don\'t call me in this weird way.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 28) {
      $('#spokesperson, #message').empty();
      $('#char2').addClass('filter');
      $('#char1').empty().html('<img src="images/AyaHappy3.png" alt="characterImage">').removeClass('filter');
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢But someone just keep saying...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢But someone just keep saying...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 29) {
      $('#spokesperson, #message').empty();
      $('#char1').empty().html('<img src="images/AyaHappy2.png" alt="characterImage">').addClass('filter');
      $('#char2').empty().html('<img src="images/Cheresa-Shout.png" alt="characterImage">').removeClass('filter charFilp');
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Aya...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Aya...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 30) {
      $('#spokesperson, #message').empty();
      $('#char2').empty().html('<img src="images/Cheresa-Embarrass.png" alt="characterImage">').addClass('filter');
      $('#char1').empty().html('<img src="images/AyaHappy3.png" alt="characterImage">').removeClass('filter');
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢But I can\'t see you are worrying another one who also need to be worried.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢But I can\'t see you are worrying another one who also need to be worried.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 31) {
      $('#spokesperson, #message').empty();
      $('#char1').empty().html('<img src="images/AyaHappy.png" alt="characterImage">').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢I know! Because that one is incurable.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I know! Because that one is incurable.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 32) {
      $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
      $('#spokesperson, #message').empty();
      $('#char3').addClass('filter');
      $('#char2').empty().html('<img src="images/Kallen-Smile3.png" alt="characterImage" class="charFilp">').removeClass('filter');
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢Which one need to be worried? Today I am on time.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Which one need to be worried? Today I am on time.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 33) {
      $('#spokesperson, #message').empty();
      $('#char2').addClass('filter').empty().html('<img src="images/Kallen-confidence3.png" alt="characterImage" class="charFilp">');
      $('#char3').removeClass('filter');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Since when have you been here? ar... what were you trying to say?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Since when have you been here? ar... what were you trying to say?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 34) {
      $('#spokesperson, #message').empty();
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/Kallen-Smile3.png" alt="characterImage" class="charFilp">');
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢Nothing. Just saying you are so handsome.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Nothing. Just saying you are so handsome.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 35) {
      $('#spokesperson, #message').empty();
      $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-o.png" alt="characterImage" class="charFilp">');
      $('#char2').addClass('filter').empty().html('<img src="images/Kallen-confidence3.png" alt="characterImage" class="charFilp">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(?!... But I remember....)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(?!... But I remember....)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 36) {
      $('#audio1').empty().html("<audio id='bgm' loop></audio>");
      $('#flash').toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#bgm').html("<source src='audio/bgm/girlstalk.mp3'>");
        $('#stage').removeClass('bg-classroom-day').addClass('bg-classroom-dusk');
        $('#spokesperson, #message, #char1, #char2, #char3').empty().removeClass('filter');
        $('#char3').html('<img src="images/Jongun-Normal.png" alt="characterImage" class="charFilp">');
        $('#char2').html('<img src="images/CheresaHappy.png" alt="characterImage">').addClass('filter');
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Today you go back first, I still need to help Miss Para to finish the stuffs.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Today you go back first, I still need to help Miss Para to finish the stuffs.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
        playBgm();
        $('#flash').toggle("slide", {
          direction: 'left'
        }, 500, "linear");
      }, 2000);
    }

    if (textcounter == 37) {
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Alright, remember to turn on the ring mode of your phone.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Alright, remember to turn on the ring mode f your phone.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 38) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢um...see you~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢um...see you~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 39) {
      $('#char2').addClass('filter').empty().html('<img src="images/Cheresa-Embarrass2.png" alt="characterImage">');
      $('#char3').removeClass('filter').fadeOut(1000, function() {
        $(this).empty()
      });
      $('#spokesperson, #message').empty();
      $('#char1').hide().html('<img src="images/AyaHappy5.png" alt="characterImage">').fadeIn(1000, function() {
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢This couple is letting others envy.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢This couple is letting others envy.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 40) {
      $('#char1').addClass('filter').empty().html('<img src="images/AyaHappy4.png" alt="characterImage">');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-Embarrass3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢We are not a couple...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢We are not a couple...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 41) {
      $('#char2').addClass('filter').empty().html('<img src="images/Cheresa-Embarrass2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#char3').html('<img src="images/Kallen-Smile2.png" alt="characterImage">').hide().fadeIn(1000, function() {
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Cheresa~ I also would like to receive a morning call on every school day~~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Cheresa~ I also would like to receive a morning call on every school day~~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 42) {
      $('#char3').addClass('filter').empty().html('<img src="images/Kallen-confidence2.png" alt="characterImage">');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-Embarrass3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Even I call you, you will also just keep sleeping.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Even I call you, you will also keep sleeping.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 43) {
      $('#char2').addClass('filter').empty().html('<img src="images/Cheresa-Embarrass2.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/Kallen-Smile2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢Who knows~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Who knows~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 44) {
      $('#audio1').empty().html("<audio id='bgm' loop></audio>");
      $('#flash').toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      setTimeout(function() {
        $('#bgs').html("<source src='audio/bgs/night-wild.ogg'>").get(0).play();
        $('#stage').removeClass('bg-classroom-dusk').addClass('bg-classroom-night');
        $('#spokesperson, #message, #char1, #char2, #char3').empty().removeClass('filter');
        $('#char3').hide().fadeIn(1000).html('<img src="images/JongunHappy.png" alt="characterImage">');
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Ar... it is so late already...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ar... it is so late already...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
        $('#flash').toggle("slide", {
          direction: 'left'
        }, 500, "linear");
      }, 2000);
    }

    if (textcounter == 45) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#stage').removeClass('bg-classroom-night').addClass('bg-street-night');
      $('#char3').empty().html('<img src="images/Jongun-Relax.png" alt="characterImage">');
      $('#char1').html('<img src="images/ShirleyHappy.png" alt="characterImage">').addClass('scalesmall deepFilter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Still need to buy dinner...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Still need to buy dinner...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 46) {
      $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(Is there somthing...?)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Is there somthing...?)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 47) {
      $('#option').removeClass('moveBack');
      $('#option, #yesnooption').hide().fadeIn(1000);
      $('#yes').html('Observe').one('click', Observe);
      $('#no').html('Ignore').one('click', Ignore);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });
    }

    if (textcounter == 48) {
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>Is there somthing...?<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Is there somthing...?</p></div>');
      $('.charFirstname').html(charFirstname);
    }
  }

  function counterChange() {
    if (cheresacounter == 0) {
      $('#CheresaCounter').addClass('cheresaCounter1');
    } else if (cheresacounter == 1) {
      $('#CheresaCounter').addClass('cheresaCounter2');
    } else if (cheresacounter >= 2) {
      $('#CheresaCounter').addClass('cheresaCounter3');
    };

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

  function Observe() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Observe</p></div>');
    $('#spokesperson, #message').empty();
    $('#char1').removeClass('scalesmall');
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>In this moment, I never would have imagined that thing would happen to me.<span id="textend">▷</span></p></div>');
    setTimeout(function() {
      $('#stage').animate({
        opacity: "0"
      }, 2000, 'linear', function() {
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        window.location = 'Strange-Girl.html'
      });
    }, 3000);
  };

  function Ignore() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Ignore</p></div>');
    $('#spokesperson, #message').empty();
    $('#char1').removeClass('scalesmall');
    $('#char3').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">');
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>(Maybe I am so tired...)<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>(Maybe I am so tired...)</p></div>');
    $('.charFirstname').html(charFirstname);
    setTimeout(function() {
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/blood.ogg'>").get(0).play();
      $('#flash').css('background-color', 'rgba(255,0,0,1)').fadeIn(500, function() {
        $(this).fadeOut(500, function() {
          $('#char3, #stage').effect("shake", {
            direction: "up"
          });
          $('#spokesperson, #message').empty();
          $('#char3').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>?!<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="nonespeech backlogborder"><p>?!</p></div>');

          setTimeout(function() {
            $('body').css("filter", "blur(2px)");
          }, 1000);
          setTimeout(function() {
            $('body').css("filter", "blur(4px)");
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
            window.location = 'Truth-Falsehood.html';
          });
        });
      })
    }, 3000);
  };
})
