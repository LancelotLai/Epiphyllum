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
  var happyend = 0;


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
  $('#audio1').html("<audio id='bgm' loop></audio>");
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
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">');
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    if (shirleycounter == 2) {
      $('#message').html('<div class="Jongun"><p>Someone is controlling behind us...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Someone is controlling behind us...</p></div>');
    } else if (shirleycounter == 1) {
      $('#message').html('<div class="Jongun"><p>Some crisis should be going on...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Some crisis should be going on...</p></div>');
    }

    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
  }, 3000);

  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      playBgm();
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char1').html('<img src="images/Cheresa-worry.png" alt="characterImage">').addClass('filter charFilp');
      $('#message').html('<div class="Jongun"><p>But who will doing these stuffs...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>But who will doing these stuffs...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
      if (cheresacounter == 1) {
        $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-cafe-day');

      }
      if (cheresacounter == 0) {
        $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-station-inside');
      }
    }

    if (textcounter == 2) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').html('<img src="images/Cheresa-worry.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Why both of them need to do that...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Why both of them need to do that...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char3').removeClass('filter');
      $('#char1').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢...?!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢...?!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

      if (ayacounter == 0 && kallencounter == 0) {
        $('#message').html('<div class="Cheresa"><p>｢Both of them seem like becoming estranged with me...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Both of them seem like becoming estranged with me...｣</p></div>');
      } else if (ayacounter != 0 && kallencounter == 0) {
        $('#message').html('<div class="Cheresa"><p>｢Aya suicided...and Kallen seems like becoming estranged with me...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Aya suicided...and Kallen seems like becoming estranged with me...｣</p></div>');
      } else if (ayacounter == 0 && kallencounter != 0) {
        $('#message').html('<div class="Cheresa"><p>｢Kallen suicided...and Aya seems like becoming estranged with me...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Kallen suicided...and Aya seems like becoming estranged with me...｣</p></div>');
      } else if (ayacounter != 0 && kallencounter != 0) {
        $('#message').html('<div class="Cheresa"><p>｢Why both of them need to suicide...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Why both of them need to suicide...｣</p></div>');
      } else {
        window.location = 'index.html';
      }

    }

    if (textcounter == 5) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      avoidMonkeyClick();

      if (cheresacounter == 1) {
        $('#message').html('<div class="Jongun"><p>(The crisis is letting me terribly upset...but I could not ignore her worries...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(The crisis is letting me terribly upset...<br>but I could not ignore her worries...)</p></div>');
        $('.charFirstname').html(charFirstname);
      } else if (cheresacounter == 0) {
        $('#message').html('<div class="Jongun"><p>(Although Cheresa is worrying...the crisis lets me can\'t focus what she talked...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Although Cheresa is worrying...<br>the crisis lets me can\'t focus what she talked...)</p></div>');
        $('.charFirstname').html(charFirstname);
      }
    }

    if (textcounter == 6) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#char2').hide().html('<img src="images/ShirleyEmbarrass.png" alt="characterImage">').fadeIn(1500, function() {
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });

      if (cheresacounter == 1) {
        $('#stage').removeClass('bg-cafe-day').addClass('bg-school-day');
      } else if (cheresacounter == 0) {
        $('#stage').removeClass('bg-station-inside').addClass('bg-school-day');
      }
    }

    if (textcounter == 7) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter').addClass('charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Shirley...anything happened?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley...anything happened?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 8) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      avoidMonkeyClick();
      if (shirleycounter == 2) {
        $('#message').html('<div class="Shirley"><p>｢Nothing...I am just suddenly feeling uncomfortable...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Nothing...I am just suddenly feeling uncomfortable...｣</p></div>');
        $('.charFirstname').html(charFirstname);
      } else if (shirleycounter == 1) {
        $('#message').html('<div class="Shirley"><p>｢Nothing...maybe just my illusion...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Nothing...maybe just my illusion...｣</p></div>');
        $('.charFirstname').html(charFirstname);
      }
    }

    if (textcounter == 9) {
      $('#char2, #char1').empty();
      $('#char3').removeClass('filter charFilp');
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#stage').removeClass('bg-school-day').addClass('bg-classroom-day');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(The person who knows both of the descendants...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(The person who knows both of the descendants...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 10) {
      $('#message').html('<div class="Jongun"><p>(And has the conflict of interest on magic ability...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(And has the conflict of interest on magic ability...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 11) {
      $('#message').html('<div class="Jongun"><p>(Fakper Barton!!)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Fakper Barton!!)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 12) {
      $('#message').html('<div class="Jongun"><p>(But I also feel confused with the action of Shirley on today...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(But I also feel confused with the action of Shirley on today...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 13) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#char3').addClass('charFilp');
      $('#char2').addClass('filter charFilp').html('<img src="images/Cheresa-worry.png" alt="characterImage">');
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
      $('#stage').removeClass('bg-classroom-day').addClass('bg-classroom-dusk');
      $('#message').empty();
      setTimeout(function() {
        $('#message').html('<div class="Jongun"><p>(And Cheresa also really look so disappointed...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(And Cheresa also really look so disappointed...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }, 1000);
    }

    if (textcounter == 14) {
      $('#audio2').empty();

      if (cheresacounter == 1) {
        $('#message').html('<div class="Jongun"><p>(What should I do...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(What should I do...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
      if (cheresacounter == 0) {
        $('#message').html('<div class="Jongun"><p>(But.... sorry Cheresa...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(But.... sorry Cheresa...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if (textcounter == 15) {

      if (cheresacounter == 1) {
        $('#spokesperson, #message').empty();
        $('#option').removeClass('moveBack');
        $('#threeoptionmenu').hide();
        $('#option, #yesnooption').hide().fadeIn(1000);
        $('#yes').html('Find Fakper to confirm<br>').one('click', Fakper);
        $('#no').html('<br>Face up to her emotion').one('click', Face);
        $('#yes, #no').click(function() {
          $("#yesnooption").off("click");
          $("#option").fadeOut(1000, function() {
            $('#yesnooption').addClass('moveBack')
          });
        });
      }

      if (cheresacounter == 0) {
        $('#message').html('<div class="Jongun"><p>(I have to find him to investigate what is going on...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(I have to find him to investigate what is going on...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if (textcounter == 16) {
      if (cheresacounter == 2) {
        $('#char2').fadeOut(1000);
        $('#message').html('<div class="Jongun"><p>(I have to face it first.)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(I have to face it first)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
      if (cheresacounter < 2) {
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
          window.location = 'StuckInARut.html';
        });
      }


    }

    if(textcounter == 17) {
      $('#spokesperson, #message').empty();
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/footstep02.ogg'>").get(0).play();
      $('#char3').fadeOut(1000, function() {
        $('#flash').show().toggle("slide", {
          direction: 'right'
        }, 500, "linear");
        $('#audio2').empty();
        $('#stage').removeClass('bg-classroom-dusk').addClass('bg-street-dusk');
        $('#char3').fadeIn(1000, function(){
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>｢Cheresa...wait...I have something to say...｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Cheresa...wait...I have something to say...｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        });
        $('#char2').removeClass('charFilp').fadeIn(1000);
      });
    }

    if (textcounter == 18) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-o.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢!?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢!?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 19) {
      $('#flash').toggle("slide", {
        direction: 'right'
      }, 2000, "linear");
      sessionStorage.setItem("clearcounter", clearcounter);
      sessionStorage.setItem("cheresacounter", cheresacounter);
      sessionStorage.setItem("shirleycounter", shirleycounter);
      sessionStorage.setItem("ayacounter", ayacounter);
      sessionStorage.setItem("kallencounter", kallencounter);
      sessionStorage.setItem("charFirstname", charFirstname);
      sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
      sessionStorage.setItem("ideaOnAya", ideaOnAya);

      setTimeout(function(){
      if(ayacounter > 0 && kallencounter > 0) {
        window.location = 'Fatality.html'

      } else if ((shirleycounter == 1 && ayacounter == 1) || (shirleycounter == 1 && kallencounter == 1)) {
        window.location = 'OccupiedThinking.html'

      } else if (shirleycounter == 1 && ayacounter == 0 && kallencounter == 0) {
        window.location = 'MemoryPieces.html'

      } else if (shirleycounter == 2 && (ayacounter == 0 || kallencounter == 0)) {


          $('#flash').toggle("slide", {
            direction: 'left'
          }, 2000, "linear");
          $('#char2').addClass('filter');
          $('#spokesperson, #message').empty();
          $('#stage').removeClass('bg-street-dusk').addClass('bg-bypath-dusk');
          $('#char1').removeClass('charFilp filter').hide().html('<img src="images/ShirleyEmbarrass.png" alt="characterImage">').fadeIn(1000, function() {
            $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
            $('#message').html('<div class="Shirley"><p>｢...!｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢...!｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          });
      }
      }, 2000)

    }

    if(textcounter == 20) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Sorry Cheresa... I was keep escaping...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Sorry Cheresa... I was keep escaping...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 21) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢It even hurted other people...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢It even hurted other people...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 22) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢No! <span class="charFirstname"></span> you should escape now!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢No! <span class="charFirstname"></span> you should escape now!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 23) {
      $('#char1').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-worry.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢<span class="charFirstname"></span>... do you know... I am keep bearing....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢<span class="charFirstname"></span>... do you know... I am keep bearing....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 24) {
      $('#char2').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢<span class="charFirstname"></span>, Escape!! She is the ability stealer!!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢<span class="charFirstname"></span>, Escape!! <br>She is the ability stealer!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 25) {
      $('#message').html('<div class="Shirley"><p>｢Can you hear me? Escape....please....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Can you hear me? Escape....please....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 26) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>Shirley...I know... but I can\'t escape from her anymore...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Shirley...I know... but I can\'t escape from her anymore...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 27) {
      $('#message').html('<div class="Jongun"><p>I can\'t tolerant with my stubbornness anymore...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I can\'t tolerant with my stubbornness anymore...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 28) {
      $('#message').html('<div class="Jongun"><p>I can\'t tolerant to hurt the innocent people anymore...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I can\'t tolerant to hurt the innocent people anymore...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 29) {
      $('#message').html('<div class="Jongun"><p>｢Cheresa. I care about you.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Cheresa. I care about you.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 30) {
      $('#message').html('<div class="Jongun"><p>｢I am extremely care about you.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I am extremely care about you.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 31) {

    $('#spokesperson, #message').empty();

    if(ayacounter != 0){
      $('#yesnooption').removeClass('moveBack');
      $('#option, #yesnooption').fadeIn(1000);
      $('#yes').html('As I am loving you.<br>').one('click', Cheresa);
      $('#no').html('<br>But what my love is Kallen').one('click', Kallen);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });

    }else if (kallencounter != 0) {

      $('#yesnooption').removeClass('moveBack');
      $('#option, #yesnooption').fadeIn(1000);
      $('#yes').html('As I am loving you.<br>').one('click', Cheresa);
      $('#no').html('<br>But what my love is Aya').one('click', Aya);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });

    }else{
      $('#option, #threeoptionmenu').fadeIn(1000);
      $('#option1').html('<h1>As I am loving you</h1>').one('click', Cheresa);
      $('#option2').html('<h1>But what my love is Aya</h1>').one('click', Aya);
      $('#option3').html('<h1>But what my love is Kallen</h1>').one('click', Kallen);
    }

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

  function Face() {
    cheresacounter = 2;
    $("#audio1").empty();
    counterChange();
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Face up to her emotion</p></div>');
    setTimeout(function() {
      $("#audio1").html("<audio id='bgm' loop></audio>");
      $('#bgm').html("<source src='audio/bgm/24. Irreplaceable memories -Piano-.mp3'>");
      playBgm();
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(Actually I know the reason why she is disapointed...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Actually I know the reason why she is disapointed...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();

    }, 1000)
  }

  function Fakper() {
    setTimeout(function() {
    $('#message').html('<div class="Jongun"><p>(I have to find him to investigate what is going on...)<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(I have to find him to investigate what is going on...)</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
    }, 1000)
  }


  function Cheresa() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>As I am loving you.</p></div>');
    happyend = 1;
    sessionStorage.setItem("happyend", happyend);
    setTimeout(function(){
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢As I am loving you.｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢As I am loving you.｣</p></div>');
    $('.charFirstname').html(charFirstname);},1000);

    setTimeout(function(){
      $('#audio1').empty();
      cheresaEd();
    },3000);

    if(ayacounter == 0 && kallencounter == 0) {
      $(this).toggle("pulsate");
      threeOptionMenuChoose();
    }

  }

  function Aya() {
    happyend = 1;
    sessionStorage.setItem("happyend", happyend);
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>But what my love is Aya</p></div>');
    setTimeout(function(){
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢But what my love is Aya... sorry...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢But what my love is Aya... sorry...｣</p></div>');
    $('.charFirstname').html(charFirstname);},1000);
    setTimeout(function(){
      $('#audio1').empty();
      ayakallenEd();
    },3000);

    if(kallencounter == 0) {
      $(this).toggle("pulsate");
      threeOptionMenuChoose();
    }

  }

  function Kallen() {
    happyend = 1;
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>But what my love is Kallen</p></div>');
    sessionStorage.setItem("happyend", happyend);
    setTimeout(function(){
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢But what my love is Kallen... sorry...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢But what my love is Kallen... sorry...｣</p></div>');
    $('.charFirstname').html(charFirstname);},1000);
    setTimeout(function(){
      $('#audio1').empty();
      ayakallenEd();
    },3000);

    if(ayacounter == 0) {
      $(this).toggle("pulsate");
      threeOptionMenuChoose();
    }

  }

  function cheresaEd() {
    $('#flash div').removeClass('moveBack');
    $('#referenceList').hide();
    $('#flash').addClass('flashBlack').fadeIn(2000, function(){
      $('#referenceList').fadeIn(1000, function() {
        setTimeout(function(){
          $('html, #referenceList').animate({
          scrollTop: ($(".songBottom").offset().top)
        }, 264000, "linear");
      },2000);
    });
      $("#audio1").html("<audio id='bgm'><source src='audio/ed/01. For Fruits Basket.mp3'></audio>");
      playBgm();
      $('#lyrics').addClass('Cheresa flashBlack');
      var songtimecounter = 0;
      var timer = setInterval(eventHandler, 100);
      function eventHandler() {
        songtimecounter++;

        if(songtimecounter == 148){
          $('#lyrics').html('I was so happy, you were laughing');
        }

        if(songtimecounter == 217){
          $('#lyrics').html('With a smile that melts everything away');
        }

        if(songtimecounter == 279){
          $('#lyrics').empty();
        }

        if(songtimecounter == 287){
          $('#lyrics').html('Spring is still far away, inside the cold earth');
        }

        if(songtimecounter == 357){
          $('#lyrics').html('Waiting for the time to sprout');
        }

        if(songtimecounter == 410){
        $('#lyrics').empty();
      }

      if(songtimecounter == 417){
        $('#lyrics').html('For instance, even if today is painful');
      }

      if(songtimecounter == 452){
        $('#lyrics').html('And yesterday\'s wounds remain');
      }

      if(songtimecounter == 487){
        $('#lyrics').html('I want to believe that I can free my heart and go on');
      }

      if(songtimecounter == 550){
      $('#lyrics').empty();
    }

    if(songtimecounter == 557){
      $('#lyrics').html('I cannot be reborn');
    }

    if(songtimecounter == 592){
      $('#lyrics').html('But I can change as I go on, so');
    }

    if(songtimecounter == 636){
      $('#lyrics').html('Let\'s stay together always');
    }

    if(songtimecounter == 687){
      $('#lyrics').empty();
    }

    if(songtimecounter == 845){
      $('#lyrics').html('A smile that\'s just for me, the touch of your finger');
    }

    if(songtimecounter == 913){
      $('#lyrics').html('And my hopes for the future are boundless');
    }

    if(songtimecounter == 973){
      $('#lyrics').empty();
    }

    if(songtimecounter == 973){
      $('#lyrics').html('My simple wish, so as to have no more regrets');
    }

    if(songtimecounter == 1054){
      $('#lyrics').html('Let\'s pass over the sea of grief');
    }

    if(songtimecounter == 1107){
      $('#lyrics').empty();
    }

    if(songtimecounter == 1114){
      $('#lyrics').html('What if today is full of pain');
    }

    if(songtimecounter == 1147){
      $('#lyrics').html('It will be a warm memory someday');
    }

    if(songtimecounter == 1184){
      $('#lyrics').html('Once I let go of all the things in my heart');
    }

    if(songtimecounter == 1245){
      $('#lyrics').empty();
    }
    if(songtimecounter == 1252){
      $('#lyrics').html('I realize what it means to be alive');
    }

    if(songtimecounter == 1287){
      $('#lyrics').html('It\'s to learn the joy of being born');
    }

    if(songtimecounter == 1333){
      $('#lyrics').html('Let\'s stay together, always');
    }

    if(songtimecounter == 1333){
      $('#lyrics').html('Let\'s stay together, always');
    }

    if(songtimecounter == 1384){
      $('#lyrics').html('PaPaPaPaPaPaPa PaPaPaPaPaPaPa');
    }

    if(songtimecounter == 1740){
      $('#lyrics').html('What if today is full of pain');
    }

    if(songtimecounter == 1775){
      $('#lyrics').html('It will be a warm memory someday');
    }

    if(songtimecounter == 1811){
      $('#lyrics').html('Once I let go of all the things in my heart');
    }

    if(songtimecounter == 1872){
      $('#lyrics').empty();
    }

    if(songtimecounter == 1879){
      $('#lyrics').html('I realize what it means to be alive');
    }

    if(songtimecounter == 1914){
      $('#lyrics').html('It\'s to learn the joy of being born');
    }

    if(songtimecounter == 1958){
      $('#lyrics').html('Let\'s stay together, always');
    }

    if(songtimecounter == 2000){
      $('#lyrics').html('PaPaPaPaPaPaPa PaPaPaPaPaPaPa');
    }

    if(songtimecounter == 2200){
      $('#lyrics').html('PaPaPaPaPaPaPa PaPaPaPaPaPaPa');
    }

    if(songtimecounter == 2670) {

      window.location = 'Truth-Falsehood.html';
    }

}
    });

  }


  function ayakallenEd() {
    $('#flash div').removeClass('moveBack');
    $('#referenceList').hide();
    $('#flash').addClass('flashBlack').fadeIn(2000, function(){
      $('#referenceList').fadeIn(1000, function(){
        setTimeout(function(){$('html, #referenceList').animate({
        scrollTop: ($(".songBottom").offset().top)
      }, 272500, "linear");}, 2000);
      })
      $("#audio1").html("<audio id='bgm'><source src='audio/ed/Still I Love You～みつめるよりは幸せ～.flac'></audio>");
      playBgm();
      $('#lyrics').addClass('nonespeech flashBlack');
      var songtimecounter = 0;
      var timer = setInterval(eventHandler, 100);
      function eventHandler() {
        songtimecounter++;

        if(songtimecounter == 20){
          $('#lyrics').html('Plastic Lies, I\'m contented just looking at you');
        }

        if(songtimecounter == 95){
          $('#lyrics').html('Paper Heart, we can no longer return to those times...');
        }

        if(songtimecounter == 183){
          $('#lyrics').empty();
        }

        if(songtimecounter == 375){
          $('#lyrics').html('I want to meet you and hear your voice once more');
        }

        if(songtimecounter == 455){
          $('#lyrics').html('At the street corner I passed, I stopped breathing');
        }

        if(songtimecounter == 515){
          $('#lyrics').empty();
        }

        if(songtimecounter == 535){
          $('#lyrics').html('The shadows of two cast by the moonlight, overlap by chance');
        }

        if(songtimecounter == 605){
          $('#lyrics').html('Longer than a rooted eternity, that single moment');
        }


        if(songtimecounter == 676){
          $('#lyrics').empty();
        }

        if(songtimecounter == 685){
          $('#lyrics').html('Always being with you, I was in high spirits');
        }

        if(songtimecounter == 760){
          $('#lyrics').html('But one by one they disappear, the places that belonged only to me');
        }

        if(songtimecounter == 830){
          $('#lyrics').empty();
        }

        if(songtimecounter == 850){
          $('#lyrics').html('Plastic Lies, I said I was happy just looking at you');
        }

        if(songtimecounter == 925){
          $('#lyrics').html('Paper Heart, I kept lying about my feelings');
        }

        if(songtimecounter == 1004){
          $('#lyrics').empty();
        }

        if(songtimecounter == 1015){
          $('#lyrics').html('I love you so much I\'m ashamed');
        }

        if(songtimecounter == 1075){
          $('#lyrics').html('Only passions without shelter remained');
        }

        if(songtimecounter == 1138){
          $('#lyrics').empty();
        }

        if(songtimecounter == 1360){
          $('#lyrics').html('People are probably hiding their true cowardly selves');
        }

        if(songtimecounter == 1445){
          $('#lyrics').html('And become used to forcing themselves to laugh');
        }

        if(songtimecounter == 1504){
          $('#lyrics').empty();
        }

        if(songtimecounter == 1515){
          $('#lyrics').html('As time passes people can forget, even that comforting touch');
        }

        if(songtimecounter == 1595){
          $('#lyrics').html('I did not realize that I was serious about you, even if in vain');
        }

        if(songtimecounter == 1660){
          $('#lyrics').empty();
        }

        if(songtimecounter == 1670){
          $('#lyrics').html('It\'s painful no matter where I run to, the memories keep resurfacing');
        }

        if(songtimecounter == 1745){
          $('#lyrics').html('That all too reserved gentleness, has now become my sin');
        }

        if(songtimecounter == 1818){
          $('#lyrics').empty();
        }

        if(songtimecounter == 2165){
          $('#lyrics').html('Plastic Night, I saw the night sky beyond the fence');
        }

        if(songtimecounter == 2245){
          $('#lyrics').html('Paper Moon, I grieve under the cold moonlight');
        }

        if(songtimecounter == 2322){
          $('#lyrics').empty();
        }

        if(songtimecounter == 2330){
          $('#lyrics').html('Though it\'s darker than the waves hitting the shore');
        }

        if(songtimecounter == 2400){
          $('#lyrics').html('I will embrace and cry out that fleeting emotion');
        }

        if(songtimecounter == 2456){
          $('#lyrics').empty();
        }

        if(songtimecounter == 2480){
          $('#lyrics').html('Still I Love You...');
        }

        if(songtimecounter == 2600) {

          window.location = 'Truth-Falsehood.html';
        }
}
    });
  }


  function threeOptionMenuChoose(){
    $("#option1, #option2, #option3").off("click");
    $("#option, #threeoptionmenu").fadeOut(1000, function(){
     $('#option1, #option2, #option3').empty();
     $('#threeoptionmenu').addClass('moveBack');
  });
  }

})
