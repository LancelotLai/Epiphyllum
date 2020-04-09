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

  $('#stage').addClass('bg-apartment-entrance-day');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/school1.ogg'>")
  $('#controlguide div').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash img').addClass('flashBlack');

  setTimeout(function() {
    $('#flash').empty().toggle("slide", {
      direction: 'right'
    }, 500, "linear");
    $('#textbox').addClass('mouse-not-allowed');
    $('#char3').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">').removeClass('charFilp');
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>Bringing with my blue feeling, I come to the front of Chresa\'s apartment building.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Bringing with my blue feeling, I come to the front of Chresa\'s apartment building.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }, 3000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      $('#message').html('<div class="Jongun"><p>I know now I need to...</p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I know now I need to...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      setTimeout(function(){
        $('#option').removeClass('moveBack');
        $('#option, #yesnooption').hide().fadeIn(1000);
        $('#yes').html('Find her to eat the breakfast<br>').one('click', eatBreakfast);
        $('#no').html('<br>Wait her to go to school').one('click', wait);
        $('#yes, #no').click(function() {
          $("#yesnooption").off("click");
          $("#option").fadeOut(1000, function() {
            $('#yesnooption').addClass('moveBack')
          });
        });

      },1000);
    }

    if(textcounter == 2) {

      if(cheresacounter == 1) {
        $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-cheresa-home-day');
        $('#flash').show().addClass('flashBlack').toggle("slide", {
          direction: 'right'
        }, 3000, "linear");
        $('#audio2').empty().html("<audio id='bgs'></audio>");
        $('#bgs').html("<source src='audio/bgs/Wooden-door-opening-sound-effect.mp3'>").get(0).play();
        $('#char1').html('<img src="images/Cheresa-o.png" alt="characterImage">').addClass('charFilp');
          $('#char3').empty().addClass('filter').html('<img src="images/JongunHappy.png" alt="characterImage">').fadeIn(3000, function(){
            $("#audio1").html("<audio id='bgm' loop></audio>");
            $('#bgm').html("<source src='audio/bgm/school1.ogg'>");
            playBgm();
            $('#char1').addClass('filter');
            $('#char3').removeClass('filter');
            $('#spokesperson, #message').empty();
            $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
            $('#message').html('<div class="Jongun"><p>｢Good morning Cheresa~｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Good morning Cheresa~｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          });
      } else if (cheresacounter == 0) {
        $('#char1').html('<img src="images/Cheresa-o.png" alt="characterImage">').addClass('charFilp').fadeIn(1000, function() {
          $("#audio1").html("<audio id='bgm' loop></audio>");
          $('#bgm').html("<source src='audio/bgm/school1.ogg'>");
          playBgm();
          $('#char1').addClass('filter');
          $('#char3').removeClass('filter');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>｢Good morning Cheresa~｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Good morning Cheresa~｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        });
      }

    }

    if(textcounter == 3) {

        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
        $('#message').html('<div class="Cheresa"><p>｢Today you are so earily.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Today you are so earily.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();

    }

    if(textcounter == 4) {

      if(cheresacounter == 1) {
        $('#char1').addClass('filter').empty().html('<img src="images/Cheresa-Smile.png" alt="characterImage">');
        $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-smile.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Ya~ As I want to find you to eat the breakfast together~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ya~ As I want to find you to eat the breakfast together~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      } else if (cheresacounter == 0) {
        $('#char1').addClass('filter').empty().html('<img src="images/CheresaHappy.png" alt="characterImage">');
        $('#char3').removeClass('filter').empty().html('<img src="images/JongunHappy.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Ya~ As I don\'t want you always worrying me so much.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢｢Ya~ As I don\'t want you always worrying me so much.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 5) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Cheresa-Laugh.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
        $('#message').html('<div class="Cheresa"><p>｢Um~ Let\'s go~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Um~ Let\'s go~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if(textcounter == 6) {

      $('#flash').removeClass('flashBlack').show().toggle("slide", {
        direction: 'right'
      }, 800, "linear");

      if(cheresacounter == 1) {
        $('#stage').removeClass('bg-cheresa-home-day').addClass('bg-cafe-day');
      } else if (cheresacounter == 0) {
        $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-station-day');
      }
        $('#char1').empty().html('<img src="images/Cheresa-worry.png" alt="characterImage">');

        if (ideaOnAya > 0 && ayacounter == 0){
          $('#audio2').empty().html("<audio id='bgs' loop></audio>");
          $('#bgs').html("<source src='audio/bgs/gaya1.mp3'>").get(0).play();
          $('#message').html('<div class="Cheresa"><p>｢What\'s happened with Aya...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢What\'s happened with Aya...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else if ((ideaOnAya > 0 && ayacounter != 0) || (ideaOnKallen > 0 && kallencounter != 0)) {
          $('#audio1, #audio2').empty();
          $("#audio1").html("<audio id='bgm' loop></audio>");
          $('#bgm').html("<source src='audio/bgm/14 黒石ひとみ - If I Were A Bird.mp3'>");
          playBgm();
          $('#message').html('<div class="Cheresa"><p>｢<span class="charFirstname"></span>... have you watched the news...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢<span class="charFirstname"></span>... have you watched the news...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else if (ideaOnKallen > 0 && kallencounter == 0) {
          $('#audio2').empty().html("<audio id='bgs' loop></audio>");
          $('#bgs').html("<source src='audio/bgs/gaya1.mp3'>").get(0).play();
          $('#message').html('<div class="Cheresa"><p>｢What\'s happened with Kallen...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢What\'s happened with Kallen...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else{
          window.location ='index.html'
        }
    }

    if(textcounter == 7) {

        $('#char1').addClass('filter');
        $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Normal.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢What\'s happened?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢What\'s happened?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();

    }

    if(textcounter == 8) {

        $('#char3').addClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
        $('#char1').removeClass('filter').empty().html('<img src="images/CheresaUnhappy2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');

        if (ideaOnAya > 0 && ayacounter == 0){
          $('#message').html('<div class="Cheresa"><p>｢Aya deleted her social media content...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Aya deleted her social media content...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else if (ideaOnAya > 0 && ayacounter != 0) {

          $('#message').html('<div class="Cheresa"><p>｢Aya suicided....she is not a girl like that...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Aya suicided....she is not a girl like that...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else if (ideaOnKallen > 0 && kallencounter == 0) {

          $('#message').html('<div class="Cheresa"><p>｢Kallen blocked my content...even she just asked me to give her a morning call few days ago...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Kallen blocked my social media content...<br>even she just asked me to give her a morning call few days ago...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        } else if (ideaOnKallen > 0 && kallencounter != 0) {

          $('#message').html('<div class="Cheresa"><p>｢Kallen suicided....she is not a girl like that...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Kallen suicided....she is not a girl like that...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        } else{
          window.location ='index.html'
        }
    }

    if (textcounter == 9) {
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        if(ayacounter == 1 || kallencounter ==1) {
          $('#message').html('<div class="Jongun"><p>The news for her suicided is a bolt from the blue for Cheresa...it caused her emotion turns sharply...<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Thes new for her suicided is a bolt from the blue for Cheresa...<br>it caused her emotion turns sharply...</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        } else if (ideaOnAya > 0 && ayacounter == 0) {
          $('#message').html('<div class="Jongun"><p>Aya...what are you thinking now...<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Aya...what are you thinking now...</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        } else if (ideaOnKallen > 0 && kallencounter == 0) {
          $('#message').html('<div class="Jongun"><p>Kallen...what are you thinking now...<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Kallen...what are you thinking now...</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        }
    }

    if (textcounter == 10) {
      if(cheresacounter == 1){
        $('#stage').removeClass('bg-cafe-day').addClass('bg-school-day');
      } else if (cheresacounter == 0) {
        $('#stage').removeClass('bg-station-day').addClass('bg-school-day');
      }
        $('#audio2').empty().html("<audio id='bgs' loop></audio>");
        $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
        $('#flash').show().toggle("slide", {
          direction: 'right'
        }, 500, "linear");
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>And I can feel Cheresa is very upset now...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢And I can feel Cheresa is very upset now...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 11) {
        $('#flash').toggle("slide", {
          direction: 'right'
        }, 4000, "linear");
        setTimeout(function(){
          $('#audio1, #char1').empty();
          $('#char3').addClass('filter');
          $('#char1').removeClass('filter charFilp').html('<img src="images/ShirleyLaugh.png" alt="characterImage">');
          $('#flash').toggle("slide", {
            direction: 'left'
          }, 1500, "linear");
          $('#stage').removeClass('bg-school-day').addClass('bg-classroom-day');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');

          if(shirleycounter == 1){
            $('#message').html('<div class="Shirley"><p>｢Don\'t blame me so annoying... be careful when you are assimilating the mana.｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Don\'t blame me so annoying... be careful when you are assimilating the mana.｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          }else if (shirleycounter == 0) {
            $('#message').html('<div class="Shirley"><p>｢Worring about Cheresa? But don\'t forget to help me assimilate the mana.｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Worring about Cheresa? But don\'t forget to help me assimilate the mana.｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          }else{window.location ='index.html'}

        },4000);
    }

    if(textcounter == 12) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message, #audio1').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Um...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Um...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 13) {
      $('#flash').removeClass('flashBlack').toggle("slide", {
        direction: 'right'
      }, 2000, "linear");

      setTimeout(function(){
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
        sessionStorage.setItem("ideaOnAya", ideaOnAya);

        if(ideaOnKallen == 0) {
        window.location = 'Awakening-Kallen.html';
      } else if (ideaOnAya == 0) {
        window.location = 'Awakening-Aya.html';
      }
      },3000)
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

function eatBreakfast() {
  cheresacounter = 1;
  counterChange();
  $('#backlog section').append('<div class="nonespeech backlogborder"><p>Find her to eat the breakfast</p></div>');
  setTimeout(function(){
    $('#char3').fadeOut(500);
    $('#audio2').empty().html("<audio id='bgs'></audio>");
    $('#bgs').html("<source src='audio/bgs/Apartment-ding-dong-sound.mp3'>").get(0).play();

    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
    $('#message').html('<div class="Cheresa"><p>｢Coming~｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Coming~｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();

  },1000)

}
  function wait() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Wait her to go to school</p></div>');
    setTimeout(function(){
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/birds.ogg'>").get(0).play();

      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>And I waited for around 15 mins...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>And I waited for around 15 mins...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    },1000)
  }

})
