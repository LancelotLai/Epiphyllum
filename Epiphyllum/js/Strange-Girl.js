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


  $('#stage').addClass('bg-street-night');
  counterChange();
  controlGuide();
  $('#audio1').html("<audio id='bgm' loop><source src='audio/bgm/07 Strange Girl.mp3'></audio>");
  $('#controlguide div, #char3, #char1, textbox').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);


  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
    $('#flash img').addClass('flashBlack');
  setTimeout(function(){
    $('#flash').empty().fadeOut(2000, function() {
      $('#char1').html('<img src="images/ShirleyLaugh.png" alt="characterImage">').addClass('filter');
      $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#char1, #char3').fadeIn(500);
      $('#textbox').addClass('mouse-not-allowed').fadeIn(500, function() {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>When I tried to approach, what I found is a girl in front of me.</p></div>');
        $('.charFirstname').html(charFirstname);
        $('#message').html('<div class="Jongun"><p>When I tried to approach, what I found is a girl in front of me.<span id="textend">▷</span></p></div>');
        avoidMonkeyClick();
      });
    });
  }, 3000);




  function controlTextBox() {

    $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
    $(document).off('keypress');

    setTimeout(textcounter++, 1000);

    if (textcounter == 1) {
      playBgm();
      $('#message').html('<div class="Jongun"><p>The aura of that girl is letting me to have an ominous presentiment.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>The aura of that girl is letting me to have an ominous presentiment.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 2) {
      $('#message').html('<div class="Jongun"><p>(She is totally doesn\'t like other normal cosplay girls.)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(She is totally doesn\'t like other normal cosplay girls.)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#message').html('<div class="Jongun"><p>Rather than cosplaying, her attitude is closed to perform herself naturally.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Rather than cosplaying, her attitude is closed to perform herself naturally.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#message').html('<div class="Jongun"><p>The body shape of her is dosen\'t like a human... seems like a puppet...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>The body shape of her is dosen\'t like a human...seems like a puppet</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>???</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢<span class="charFirstname"></span> Barton｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>???</h1><p>｢<span class="charFirstname"></span> Barton｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 6) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(Why she knows my name...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Why she knows my name...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 7) {
      $('#message').html('<div class="Jongun"><p>｢Do you know me...?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Do you know me...?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 8) {
      $('#char3').addClass('filter').animate({left:'+=10'}, 100);
      $('#audio2').html("<audio id='bgs'><source src='audio/bgs/footstep01.ogg'>");
      $('#bgs').get(0).play();
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p><span class="charFirstname"></span> has take a step back unconsciously.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p><span class="charFirstname"></span> has take a step back unconsciously.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 9) {
      $('#audio2').empty();
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>???</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Ofcourse~ Actually you don\'t need to be afraid.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>???</h1><p>｢Ofcourse~ Actually you don\'t need to be afraid.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 10) {
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>???</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢I am your buddy, your lovely buddy, we need both of us to achieve our aim.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>???</h1><p>｢I am your buddy, your lovely buddy, we need both of us to achieve our aim.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 11) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>In this time, actually I really don\'t know what she is talking about.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>In this time, actually I really don\'t know what she is talking about.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 12) {
      $('#message').html('<div class="Jongun"><p>A weird girl suddenly come from the brushes, and say she is my buddy even I don\'t know her name.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>A weird girl suddenly come from the brushes, <br>and say she is my buddy even I don\'t know her name.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 13) {
      $('#message').html('<div class="Jongun"><p>｢What aim, I don\'t know what are you talking about, who are you?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢What aim, I don\'t know what are you talking about, who are you?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 14) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢I don\'t have a stable name, but you can call me Shirley if you like.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢I don\'t have a stable name, but you can call me Shirley if you like.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 15) {
      $('#message').html('<div class="Shirley"><p>｢I know all of your things, included the secret for three of your clans.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢I know all of your things, included the secret for three of your clans.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 16) {
      $('#char1').addClass('filter');
      $('#char3').animate({left:'+=10'}, 100);
      $('#audio2').html("<audio id='bgs'><source src='audio/bgs/footstep01.ogg'>");
      $('#bgs').get(0).play();
      $('#spokesperson, #message').empty();
      $('#message').html('<div class="nonespeech"><p><span class="charFirstname"></span> has take a step back unconsciously again.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="nonespeech backlogborder"><p><span class="charFirstname"></span> has take a step back unconsciously again.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 17) {
      $('#audio2').empty();
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢...!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢...!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 18) {
      $('#char1').removeClass('filter');
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Clans of Barton, Kyodo, Sword. And their descendants... <span class="charFirstname"></span>, Aya and Kallen.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Clans of Barton, Kyodo, Sword. <br>And their descendants... <span class="charFirstname"></span>, Aya and Kallen.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 19) {
      $('#message').html('<div class="Shirley"><p>｢Originally all of them should have their own magic ability...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Originally all of them should have their own magic ability...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 20) {
      $('#char3').animate({left:'+=20'}, 100);
      $('#audio2').html("<audio id='bgs'><source src='audio/bgs/footstep01.ogg'>");
      $('#bgs').get(0).play();
      setTimeout(function(){
        $('#char1').fadeOut(400, function(){
        $('#char1').empty();
        $('#char2').html('<img src="images/ShirleyLaugh.png" alt="characterImage">').fadeIn(400)});
        $('#message').html('<div class="Shirley"><p>｢But the only one of them lack of the magical talent... that\'s you.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢But the only one of them lack of the magical talent... that\'s you.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      },500);
    }

    if (textcounter == 21) {
      $('#char2').addClass('filter');
      $('#char3').addClass('charFilp').removeClass('filter');
      $('#audio2').empty();
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢?!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢?!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 22) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢You don\'t need to escape, and you also can\'t esapce. As I am a witch, a lovely witch.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You don\'t need to escape, and you also can\'t esapce. <br>As I am a witch, a lovely witch.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 23) {
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢I can give the ability to you. To against with the disdain from your father and the clans.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢I can give the ability to you.<br> To against with the disdain from your father and the clans.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 24) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(She is leading this conversation...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(She is leading this conversation...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 25) {
      $('#message').html('<div class="Jongun"><p>(And it seems like I could not just ignore her and leave already...)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(And it seems like I could not just ignore her and leave already...)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 26) {
      $('#message').html('<div class="Jongun"><p>｢I don\'t think there is free lunch in this world.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢I don\'t think there is free lunch in this world.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 27) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Ofcourse, therefore I just said \'achieve our aim\'.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Ofcourse, therefore I just said \'achieve our aim\'.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 28) {
      $('#message').html('<div class="Shirley"><p>｢And I also don\'t think you are a stupid guy who believes there is free lunch in this world.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢And I also don\'t think you are a stupid guy who believes <br>there is free lunch in this world.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 29) {
      $('#message').html('<div class="Shirley"><p>｢Otherwise I will feel disapointed.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Otherwise I will feel disapointed.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 30) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>(It is better to ask more about her information first)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(It is better to ask more about her information first)</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 31) {
      $('#message').html('<div class="Jongun"><p>｢So what is your aim? How can I help you?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢So what is your aim? How can I help you?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 32) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Help me to assimilate the mana, that is my aim.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Help me to assimilate the mana, that is my aim.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 33) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢How? From who?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢So what is your aim? How can I help you?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 34){
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢Who? You definitely know , don\'t make me to feel disapointed...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Who? You definitely know , don\'t make me to feel disapointed...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 35){
      $('#message').html('<div class="Shirley"><p>｢Don\'t need to worry about mana, just use the ability on them, and than I can do that.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Don\'t need to worry about mana, <br>just use the ability on them, and than I can do that.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 36) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>(Her aim is on Aya and Kallen?)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Her aim is on Aya and Kallen?</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 37) {
        $('#message').html('<div class="Jongun"><p>(So why don\'t find one of them?)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(So why don\'t find one of them?)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 38) {
        $('#message').html('<div class="Jongun"><p>(...the reason....they don\'t have reason to help her)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(...the reason....they don\'t have reason to help her)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 39) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢I am not a witch full of patience....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢I am not a witch full of patience....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 40) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>(She starts to feel impatient...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(She starts to feel impatient...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
    }

    if (textcounter == 41) {
      $('#option').removeClass('moveBack');
      $('#option, #yesnooption').hide().fadeIn(1000);
      $('#yes').html('Make the contract<br>').one('click', Agree);
      $('#no').html('<br>Reject the idea').one('click', Reject);
      $('#yes, #no').click(function() {
        $("#yesnooption").off("click");
        $("#option").fadeOut(1000, function() {
          $('#yesnooption').addClass('moveBack')
        });
      });
    }

    if (textcounter == 42) {
      $('#char3').addClass('filter');
      $('#char2').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢My lovely <span class="charFirstname"></span>, don\'t need to worry about it, I will help you now ♥｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢My lovely <span class="charFirstname"></span>, don\'t need to worry about it, I will help you now ♥｣</p></div>');
      $('#char2').animate({left:'-=300'}, 1000, 'linear', function(){
        $('#stage').effect("shake", {
        direction: "down"
      });
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/falldown.mp3'>").get(0).play();
      setTimeout(function(){
      $('#bgm').get(0).pause();
      $('#audio2').empty().html("<audio id='bgs'></audio>");
      $('#bgs').html("<source src='audio/bgs/kiss.ogg'>").get(0).play();
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>She kissed me suddenly.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>She kissed me suddenly.</p></div>');
        setTimeout(function(){
          var videotimecounter = 0;
          var timer = setInterval(eventHandler, 1000);
          function eventHandler() {
            document.querySelector('video').playbackRate = 0.75;
            videotimecounter++;
            console.log(videotimecounter);

            if (videotimecounter == 1){
              $('#audio2').empty().html("<audio id='bgs' loop></audio>");
              $('#magicAbility').fadeIn(100, function(){
                $('textbox').hide();
                $('#spokesperson, #message').empty();
              }).get(0).play();
            }
            if (videotimecounter == 4) {
              $('#magicAbility').hide();
              $('#stage').removeClass('bg-street-night').addClass('bg-room-deep-night');
              $('#char2').addClass("filter").css('left', '+=300');
              $('#char3 ').removeClass("filter").empty().html('<img src="images/JongunUnhappy2.png" alt="characterImage">');
              $('body').css("filter", "blur(6px)");
              $('#flash').show().fadeOut(4000, function(){
              $('#bgs').html("<source src='audio/bgs/night-wild.ogg'>").get(0).play();
              setTimeout(function() {
                $('body').css("filter", "blur(4px)");
              }, 1000);
              setTimeout(function() {
                $('body').css("filter", "blur(2px)");
              }, 2000);
              setTimeout(function() {
                $('body').css("filter", "blur(0px)");
              }, 3000);
                $('#textbox').fadeIn(1000, function(){
                  $('#message').html('<div class="Jongun"><p>...<span id="textend">▷</span></p></div>');
                  $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>...</p></div>');
                  clearInterval(timer);
                  avoidMonkeyClick();
              });
            });
            }
          }
        }, 1200);
    },1000);
    });
      $('.charFirstname').html(charFirstname);

    }

if (textcounter == 43) {
  $('#message').html('<div class="Jongun"><p>When I came back to consciousness, I am lying on the bed already.<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>When I came back to consciousness, I am lying on the bed already.</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 44) {
  $('#message').html('<div class="Jongun"><p>Even the shoes and school uniform still haven\'t wearing off.<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Even the shoes and school uniform still haven\'t wearing off.</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 45) {
  $('#char3').addClass('filter');
  $('#char2').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
  $('#message').html('<div class="Shirley"><p>｢We are in the same boat now, don\'t need to be so vigilant♥｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢We are in the same boat now, don\'t need to be so vigilant♥｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 46) {
  $('#char3').effect("shake", {
    direction: "up"
  });
  $('#char2').addClass('filter');
  $('#char3').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢What you have done!｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢What you have done!｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 47) {
  $('#char3').addClass('filter');
  $('#char2').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
  $('#message').html('<div class="Shirley"><p>｢Remember the feeling of whole progess, that is what you need to do for the ability.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Remember the feeling of whole progess, <br>that is what you need to do for the ability.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 48) {
  $('#char3').addClass('filter');
  $('#char2').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
  $('#message').html('<div class="Shirley"><p>｢That is the answer of what you were asking.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢That is the answer of what you were asking.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 49) {
  $('#char2').addClass('filter');
  $('#char3').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢How can I do that! Even I need to be strong! It doesn\'t mean...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢How can I do that! Even I need to be strong! It doesn\'t mean...｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 50) {
  $('#char3').addClass('filter');
  $('#char2').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
  $('#message').html('<div class="Shirley"><p>｢It just depends on how you do it.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢It just depends on how you do it.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 51) {
  $('#char2').addClass('filter');
  $('#char3').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>I have been Interrupted.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I have been Interrupted.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 52) {
  $('#char3').addClass('filter');
  $('#char2').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
  $('#message').html('<div class="Shirley"><p>｢Everything could not escape from the condition of situation.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Everything could not escape from the condition of situation.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}


if (textcounter == 53) {
  $('#message').html('<div class="Shirley"><p>｢You are a criminal if you killed 100 people on the street.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You are a criminal if you killed 100 people on the street.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 54) {
  $('#message').html('<div class="Shirley"><p>｢But you are a hero if you killed 100 people in the war.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢But you are a hero if you killed 100 people in the war.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 55) {
  $('#message').html('<div class="Shirley"><p>｢If you feel guity or not possible to do that, just find a way you feel confortable to do.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢If you feel guity or not possible to do that, <br>just find a way you feel confortable to do.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 56) {
  $('#message').html('<div class="Shirley"><p>｢Or a way they will feel confortable.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Or a way they will feel confortable.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 57) {
  $('#message').html('<div class="Shirley"><p>｢You know, the peace of now is just an illusion.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You know, the peace of now is just an illusion.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 58) {
  $('#message').html('<div class="Shirley"><p>｢An illusion generated by your disability.｣<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢An illusion generated by your disability.｣</p></div>');
  $('.charFirstname').html(charFirstname);
  avoidMonkeyClick();
}

if (textcounter == 59) {
  $('#char2').addClass('filter');
  $('#char3').removeClass('filter');
  $('#spokesperson, #message').empty();
  $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>Although I want to refute what she said is wrong...<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Although I want to refute what she said is wrong...</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 60) {
    $('#message').html('<div class="Jongun"><p>I can\'t, as I also know that is the situation.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I can\'t, as I also know that is the situation.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 61) {
    $('#message').html('<div class="Jongun"><p>What I want to do, and what I have to do.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>What I want to do, and what I have to do.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
}

if (textcounter == 62) {
  $('#stage').animate({
    opacity: "0"
  }, 2000, 'linear', function() {
    sessionStorage.setItem("clearcounter", clearcounter);
    sessionStorage.setItem("cheresacounter", cheresacounter);
    sessionStorage.setItem("shirleycounter", shirleycounter);
    sessionStorage.setItem("ayacounter", ayacounter);
    sessionStorage.setItem("kallencounter", kallencounter);
    sessionStorage.setItem("charFirstname", charFirstname);
    window.location = 'Awakening.html'
  });
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

  function Agree() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Make the contract</p></div>');
    $('#spokesperson, #message').empty();
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Alright, how can I make the contract with you?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Alright, how can I make the contract with you?｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function Reject() {
    $('#backlog section').append('<div class="nonespeech backlogborder"><p>Reject the idea</p></div>');
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Sorry, I won\'t help you.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Sorry, I won\'t help you.｣</p></div>');
    $('.charFirstname').html(charFirstname);

    setTimeout(function(){
      $('#spokesperson, #message').empty();
      $('#char2').removeClass('filter');
      $('#char3').addClass('filter');
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>｢It\'s really disappointing...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢It\'s really disappointing...｣</p></div>');
      $('.charFirstname').html(charFirstname);
    }, 3000);

    setTimeout(function() {
      $('#audio1').empty();
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
          $('#char3').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
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
            window.location = 'Truth-Falsehood.html';
          });
        });
      })
    }, 6000);
  };

})
