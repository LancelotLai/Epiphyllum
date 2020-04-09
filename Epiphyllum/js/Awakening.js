$(document).ready(function() {

  var textcounter = 0;
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var cheresacounter = sessionStorage.getItem('cheresacounter') || 0;
  var shirleycounter = sessionStorage.getItem('shirleycounter') || 0;
  var ayacounter = sessionStorage.getItem('ayacounter') || 0;
  var kallencounter = sessionStorage.getItem('kallencounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || 'Noname';
  var ideaOnAya = 0;
  var ideaOnKallen = 0;

  $(document).keyup(function(e) {
    console.log(e.which);
    if (e.which == 32) {
      showBacklog();
    };
    if (e.which == 27) {
      hideBacklog();
    };
  });


  $('#stage').addClass('bg-home-night');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/12 Lack of Power for Wisdom.mp3'>")
  $('#controlguide div, #char3, #textbox').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);

  $('#flash').fadeOut(2000, function() {
    $('#char3').html('<img src="images/FakperAngry2.png" alt="characterImage">').fadeIn(1000);
    $('#textbox').addClass('mouse-not-allowed').fadeIn(1000, function() {
      $('#spokesperson').html('<div class="fakper"><h1>Fakper</h1></div>');
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢You know magic?｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢You know magic?｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    });
  });



  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      playBgm();
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢If you know, show me!｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢If you know, show me!｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢Show me! As for the comparasion with two other clans.｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢Show me! As for the comparasion with two other clans.｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char3').addClass('filter').empty().html('<img src="images/FakperAngry1.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Father... let me kiss you.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Father... let me kiss you.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char3').removeClass('filter').empty().html('<img src="images/FakperAngry2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="fakper"><h1>Fakper</h1></div>');
      $('#backlog section').append('<div class="fakper backlogborder"><h1>Fakper</h1><p>｢Are you kidding me?｣</p></div>');
      $('#message').html('<div class="fakper"><p>｢Are you kidding me? Are you taking whole magic clans as a joke?｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('body').css("filter", "blur(2px)");
      $('#char3').removeClass('filter').empty().html('<img src="images/FakperAngry1.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢No...Father... let me kiss you...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢No...Father... let me kiss you...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 6) {
      $('#audio1').empty();
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/birds.ogg'>").get(0).play();
      $('#stage').removeClass('bg-home-night').addClass('bg-room-day');
      $('#flash').removeClass('flashBlack').show().fadeOut(2000);
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
      $('#char3').removeClass('filter').empty();
      $('#char2').css('left', '-=700').html('<img src="images/ShirleyLaugh.png" alt="characterImage">').addClass('scaleGiant');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢let me kiss you...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢let me kiss you...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 7) {
      $('#stage').effect("shake", {
        direction: "up"
      });
      $('#char2').removeClass('scaleGiant').animate({
        left: '+=350'
      }, 500, 'linear', function() {
        $('#char3').hide().fadeIn(1000).html('<img src="images/Jongun-Underwear-shocked.png" alt="characterImage">').addClass('charFilp');
        $('#char2').addClass('filter');
      });
      $('#message').html('<div class="Jongun"><p>｢?!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢?!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 8) {
      $('#char2').removeClass('filter');
      $('#char3').addClass('filter');
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Still enjoying the kiss in last night?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Still enjoying the kiss in last night?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 9) {
      $('#char3').effect("shake", {
        direction: "up"
      });
      $('#char3').removeClass('filter');
      $('#char2').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ofcourse not !｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ofcourse not !｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
      setTimeout(function() {
        $('#audio1').html("<audio id='bgm' loop></audio>");
        $('#bgm').html("<source src='audio/bgm/11 All Hail Britannia!!!.mp3'>");
        playBgm();
      }, 1000);
    }

    if (textcounter == 10) {
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p>Incoming Call: Cheresa Snowden<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p>Incoming Call: Cheresa Snowden</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 11) {
      $('#spokesperson, #message, #audio1').empty();
      $('#audio1').html("<audio id='bgm'></audio>");
      $('#bgm').html("<source src='audio/bgs/OutwardInversion,contactmic,BB,cellphone,broken,vibration,notification,long,alt3.wav'>");
      playBgm();
      $('#char3').empty().html('<img src="images/Jongun-Underwear-normal.png" alt="characterImage">');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Cheresa? Yes... Um...3mins.....ar, have not....tomorrow...ok...bye...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Cheresa? Yes... Um...3mins.....ar, have not....tomorrow...ok...bye...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 12) {
      playBgm();
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢I have to go to school now, how about you?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I have to go to school now, how about you?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 13) {
      $('#audio1').empty().html("<audio id='bgm' loop></audio>");
      $('#bgm').html("<source src='audio/bgm/daily2.ogg'>");
      playBgm();
      $('#spokesperson, #message').empty();
      $('#char2').removeClass('filter');
      $('#char3').addClass('filter');
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Certainly following you ~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Certainly following you ~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 14) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Underwear-Relax2.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Our school won\'t allow a creepy witch to com in, just like you.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Our school won\'t allow a creepy witch to com in, just like you.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 15) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢No worries, they even cannot see or hear I am existing.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢No worries, they even cannot see or hear I am existing.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 16) {
      $('#message').html('<div class="Shirley"><p>｢Or are you wanting me to be your lovely housewife, wearing a sexy apron and waiting you back♥｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Or are you wanting me to be your lovely housewife, <br>wearing the sexy apron and waiting you back♥｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 17) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(Seems like ignore her directly is the best reply.)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Seems like ignore her directly is the best reply.)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 18) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#stage').removeClass('bg-room-day').addClass('bg-apartment-entrance-day');
      $('#char3').empty().html('<img src="images/JongunHappy.png" alt="characterImage">');
      $('#char2').empty().html('<img src="images/CheresaHappy.png" alt="characterImage">');
      $('#message').html('<div class="Jongun"><p>｢Morning Cheresa~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Morning Cheresa~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 19) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Morning, what was going on the stuffs given by Miss Para?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Morning, what was going on the stuffs given by Miss Para?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 20) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ya....That task was so complicated.... I even need to work until.....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ya....That task was so complicated.... I even need to work until.....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 21) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/gaya1.mp3'>").get(0).play();
      $('#stage').removeClass('bg-apartment-entrance-day').addClass('bg-station-day');
      $('#char3').addClass('filter').empty().html('<img src="images/JongunHappy.png" alt="characterImage">');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-Smile.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Kallen said the new cafe on the shopping street is quite good.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Kallen said the new cafe on the shopping street is quite good.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 22) {
      $('#char1').html('<img src="images/ShirleyHappy.png" alt="characterImage">')
        .hide().fadeIn(1000,
          function() {
            $('#char2').addClass('filter');
            $('#spokesperson, #message').empty();
            $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
            $('#message').html('<div class="Shirley"><p>｢Don\'t forget to help me assimilate the mana.｣<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Don\'t forget to help me assimilate the mana.｣</p></div>');
            $('.charFirstname').html(charFirstname);
            avoidMonkeyClick();
          });
    }

    if (textcounter == 23) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢It would be great if I can try once.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢It would be great if I can try once.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }


    if (textcounter == 24) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#stage').removeClass('bg-station-day').addClass('bg-street-day');
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/birds.ogg'>").get(0).play();
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-Laugh.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢...And then Aya is thinking is it better for she to change a look.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢...And then Aya is thinking is it better for she to change a look.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 25) {
      $('#char2').addClass('filter').empty().html('<img src="images/Cheresa-Smile.png" alt="characterImage">');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Hey, can you hear? Don\'t forget to help me assimilate the mana.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Hey, can you hear? Don\'t forget to help me assimilate the mana.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 26) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢I know... plan to do that on tommorow...(whisper)｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I know... plan to do that on tommorow...(whisper)｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 27) {
      $('#char3').addClass('charFilp');
      $('#message').html('<div class="Jongun"><p>｢It is unusual to see Aya feels confused.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢It is unusual to see Aya feels confused.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 28) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter').empty().html('<img src="images/Cheresa-Laugh.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢Rather than confused, I think she is feeling excited.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢Rather than confused, I think she is feeling excited.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 29) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#char2').empty().html('<img src="images/Cheresa-Embarrass2.png" alt="characterImage">');
      $('#stage').removeClass('bg-street-day').addClass('bg-school-day');
      $('#message').html('<div class="Cheresa"><p>｢...You need to eat breakfast everyday, don\'t always just say no time and tommorow.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢...You need to eat breakfast everyday, <br>don\'t always just say no time and tommorow.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 30) {
      $('#char2').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Assimilate the mana assimilate the mana assimilate the mana assimilate the mana assimilate...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Assimilate the mana assimilate the mana <br>assimilate the mana assimilate the mana assimilate...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 31) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter charFilp').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢I have told you to do it on tommorow!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I have told you do it on tommorow!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 32) {
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $("#audio1").html("<audio id='bgm' loop></audio>");
      $('#bgm').html("<source src='audio/bgm/16 Stray Cat.mp3'>");
      playBgm();
      $('#char3').addClass('filter charFilp').empty().html('<img src="images/Jongun-sensed2.png" alt="characterImage">');
      $('#char2').removeClass('filter').empty().html('<img src="images/CheresaUnhappy2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>｢...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>｢...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 33) {
      $('#bgs').html("<source src='audio/bgs/footstep02.ogg'>").get(0).play();
      $('#char3').removeClass('filter');
      $('#char2').fadeOut(1000, function() {
        $(this).removeClass('filter');
        $('#char3').empty().html('<img src="images/Jongun-shocked.png" alt="characterImage">');
      });
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢?! Cheresa! I am not meaning that!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢?! Cheresa! I am not meaning that!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 34) {
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/ShirleyLaugh.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Wow~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Wow~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 35) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter charFilp').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢I will do it, please don\'t be so annoying again.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I will do it, please don\'t be so annoying again.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 36) {
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#spokesperson, #message').empty();
      $('#stage').removeClass('bg-school-day').addClass('bg-classroom-day');
      $('#char3').addClass('filter').empty().html('<img src="images/Jongun-Relax.png" alt="characterImage">');
      $('#char1').removeClass('filter').empty().html('<img src="images/AyaHappy3.png" alt="characterImage">').fadeIn(1000, function() {
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢What interesting thing you have done?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢What interesting thing you have done?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }
    if (textcounter == 37) {
      $('#char1').addClass('filter').empty().html('<img src="images/AyaHappy2.png" alt="characterImage">');;
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ha.....(Sigh)｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ha.....(Sigh)｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 38) {
      $('#char3, #char1').addClass('filter');
      $('#char2').removeClass('filter');
      $('#char2').empty().html('<img src="images/Kallen-Sigh.png" alt="characterImage">').fadeIn(1000, function() {
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢<span class="charFirstname"></span>, you caused me late as for watching that drama.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢<span class="charFirstname"></span>, you caused me late as for watching that drama.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }


    if (textcounter == 39) {
      $('#char3').effect("shake", {
        direction: "up"
      });
      $('#char2').addClass('filter');
      $('#char3').empty().html('<img src="images/Jongun-shocked.png" alt="characterImage">').removeClass('filter').addClass('charFilp');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢You will also late even you don\'t watch it!!!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢You will also late even you don\'t watch it!!!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 40) {
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="nonespeech"><h1>Miss Para</h1></div>');
      $('#message').html('<div class="nonespeech"><p>｢Everyone go back to your sit! Kallen, please aware of your attendance.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><h1>Miss Para</h1><p>｢Everyone go back to your sit! Kallen, please aware of your attendance.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 41) {
      $('#flash').toggle("slide", {
      direction: 'left'
    }, 2000, "linear");
      setTimeout(function(){
        $('#flash').toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#char1, #char2, #audio1').empty();
      $('#char1').html('<img src="images/ShirleyHappy.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Shirley, there is a good idea suddenly comes into my mind...even don\'t need to do on tommorow.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Shirley, there is a good idea suddenly comes into my mind...<br>even don\'t need to do on tommorow.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    },2000);
      $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
    }

    if (textcounter == 42) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/ShirleyLaugh.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Wow~ what\'s that♥｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Wow~ what\'s that♥｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 43) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#option').removeClass('moveBack');
      $('#option, #yesnooption').hide().fadeIn(1000);
      $('#yes').html('That\'s about Aya<br>').one('click', chooseAya);
      $('#no').html('<br>That\'s about Kallen').one('click', chooseKallen);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });
    }

    if (textcounter == 44) {
      $('#flash').toggle("slide", {
      direction: 'left'
    }, 2000, "linear");

    if(ideaOnAya == 1){
      setTimeout(function(){
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        sessionStorage.setItem("ideaOnAya", ideaOnAya);
        sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
        window.location = 'Awakening-Aya.html';
      } ,3000);
    }

    if(ideaOnKallen == 1){
      setTimeout(function(){
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        sessionStorage.setItem("ideaOnAya", ideaOnAya);
        sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
        window.location = 'Awakening-Kallen.html';
      } ,3000);
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

  function chooseAya() {
    ideaOnAya = 1;
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>That\'s about Aya</p></div>');
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢That\'s about Aya...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢That\'s about Aya...｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  };

  function chooseKallen() {
    ideaOnKallen = 1;
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>That\'s about Kallen</p></div>');
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢That\'s about Kallen...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢That\'s about Kallen...｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  };

})
