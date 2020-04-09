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

  $('#stage').addClass('bg-classroom-dusk');
  counterChange();
  controlGuide();
  $('#audio1').empty().html("<audio id='bgm' loop></audio>");
  $('#bgm').html("<source src='audio/bgm/daily1.ogg'>");
  $('#controlguide div,#textbox').hide();
  document.getElementById("textbox").addEventListener("wheel", showBacklog);
  $('#backlogClose').click(hideBacklog);
  $('.charFirstname').html(charFirstname);
  $('#flash').html('<img src="images/nowloading.gif" alt="nowloading">');
  $('#flash img').addClass('flashBlack');

  setTimeout(function(){
  $('#flash').toggle("slide", {
    direction: 'right'
  }, 1000, "linear");
    $('#char3').html('<img src="images/JongunUnhappy.png" alt="characterImage">').addClass('charFilp');
    $('#char2').html('<img src="images/CheresaUnhappy2.png" alt="characterImage">').addClass('charFilp');
    $('#textbox').addClass('mouse-not-allowed').fadeIn(1000, function() {
    $('#char2').fadeOut(1500, function() {
      $(this).empty();
      $('#char3').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">').removeClass('charFilp');
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Ha....you see all the process now...right?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ha....you see all the process now...right?｣</p></div>');
      $('.charFirstname').html(charFirstname);
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
      $('#char1').hide().html('<img src="images/Kallen-Sigh3.png" alt="characterImage">').fadeIn(1000, function() {
        $('#char3').addClass('filter').empty().html('<img src="images/JongunUnhappy2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Is her emotion really so important?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Is her emotion really so important?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 2) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">');;
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢But you also can see she is really unhappy...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢But you also can see she is really unhappy...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char3').addClass('filter').empty().html('<img src="images/JongunUnhappy2.png" alt="characterImage">');
      $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Sigh2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢But both of you are not couple, right?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢But both of you are not couple, right?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char1').addClass('filter').empty().html('<img src="images/Kallen-Sigh3.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Um....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Um....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Sigh.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢Ha..... I am hungry, come with me, now!｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Ha..... I am hungry, come with me, now!｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 6) {
      $('#char1').addClass('filter');
      $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Relax.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢My treat, right?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢My treat, right?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 7) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Smile3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢Ofcourse~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Ofcourse~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 8) {
      $('#flash').empty().show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#stage').removeClass('bg-classroom-dusk').addClass('bg-shopping-street-dusk');
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/gaya1.mp3'>").get(0).play();
      $('#char1').addClass('filter').empty().html('<img src="images/Kallen-confidence3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#char2').html('<img src="images/ShirleyLaugh.png" alt="characterImage">').fadeIn(1500, function() {
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢Are you being a slave?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢Are you being a slave?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });

    }

    if (textcounter == 9) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter').addClass('charFilp').empty().html('<img src="images/Jongun-Normal.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢The way to communicate with Kallen is like that....｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢The way to communicate with Kallen is like that....｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 10) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#stage').removeClass('bg-shopping-street-dusk').addClass('bg-cafe-dusk');
      $('#char2').empty().removeClass('filter charFilp');
      $('#char3').removeClass('charFilp').addClass('filter').empty().html('<img src="images/Jongun-Normal.png" alt="characterImage">');
      $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-noticed1.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢I know you are a dopey dude started from childhood...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢I know you are a dopey dude started from childhood...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 11) {
      $('#char2').empty().removeClass('filter charFilp');
      $('#char3').removeClass('charFilp').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-noticed3.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
      $('#message').html('<div class="kallen"><p>｢But why don\'t you just tell her what you are thinking directly?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢But why don\'t you just tell her what you are thinking directly?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 12) {
      $('#audio1, #audio2').empty();
      $('#char1').addClass('filter').empty().html('<img src="images/Kallen-noticed2.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#option').removeClass('moveBack');
      $('#option, #threeoptionmenu').hide().fadeIn(1000);
      $('#option1').html('<h1>As I am confused…</h1>').one('click', Normal);
      $('#option2').html('<h1>If you were me… will you?</h1>').one('click', Bad);
      $('#option3').html('<h1>Have you think about how she feels?</h1>').one('click', Good);
    }

    if(textcounter == 13){

      if(ideaOnKallen == 3){
        $('#audio2').html("<audio id='bgs'></audio>");
        $('#stage, #char3').effect("shake", {
          direction: "up"
        });
        $('#bgs').html("<source src='audio/bgs/slap.ogg'>").get(0).play();
        $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/13 Masquerade.mp3'></audio>");
        setTimeout(playBgm, 1000);
        $('#char3').addClass('filter').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢So have you think about my feeling?!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢So have you think about my feeling?!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 2){
        $('#audio2').html("<audio id='bgs'></audio>");
        $('#stage').effect("shake", {
          direction: "up"
        });
        $('#bgs').html("<source src='audio/bgs/knock.ogg'>").get(0).play();
        $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/02 Stories.mp3'></audio>");
        setTimeout(playBgm, 1000);
        $('#char3').addClass('filter').empty().html('<img src="images/Jongun-o.png" alt="characterImage">');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Won\'t you think the people around you are getting hurt by your confusion !?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Won\'t you think <br>the people around you are getting hurt by your confusion !?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 1){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Sigh2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢...this reponse is also completely containing with your personal style...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢...this reponse is also completely containing with your personal style...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 14){

      if(ideaOnKallen == 3 || ideaOnKallen == 2){
        $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
        $('#char1').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>People in the cafe start staring at both of us...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>People in the cafe start staring at both of us...</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 1){
        $('#char3').removeClass('filter').empty().html('<img src="images/Jongun-Relax2.png" alt="characterImage">');
        $('#char1').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Even you say that is my personal style I also won\'t know what style is that...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Even you say that is my personal style I also won\'t know what style is that...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 15){

      if(ideaOnKallen == 3 || ideaOnKallen == 2){
        $('#char3').animate({left:'-=300'}, 600, 'linear', function(){
          setTimeout(function(){$('#char3, #char1').animate({left:'-=400'}, 1000, 'linear');},500);
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>I grabbed her hand and leave from the cafe.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I grabbed her hand and leave from the cafe.</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      })

      }

      if(ideaOnKallen == 1){
        $('#char1').removeClass('filter').empty().html('<img src="images/KallenHappy.png" alt="characterImage">');
        $('#char3').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Alright~ I am enough... Let\'s back.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Alright~ I am enough... Let\'s back.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }


    if(textcounter == 16){
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#stage').removeClass('bg-cafe-dusk').addClass('bg-bypath-dusk');

        if(ideaOnKallen == 3 || ideaOnKallen == 2){
        $('#char3').animate({left:'+=700'}, 10, 'linear');
        $('#char1').animate({left:'+=400'}, 10, 'linear');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢What were you doing!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢What were you doing!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
        }

        if(ideaOnKallen == 1){
          $('#char1').addClass('filter');
          $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>Kallen...there is no any free lunch in this world...<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Kallen...there is no any free lunch in this world...</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        }
    }

    if(textcounter == 17){

        if(ideaOnKallen == 3 || ideaOnKallen == 2) {
          $('#char3').addClass('filter');
          $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
          $('#message').html('<div class="kallen"><p>｢What were you doing that\'s you!｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢What were you doing that\'s you!｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        }

        if(ideaOnKallen == 1){
          $('#char1').addClass('filter');
          $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>It\'s time for you to pay for it now.<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>It\'s time for you to pay for it now.</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        }
    }

    if(textcounter == 18){

      if(ideaOnKallen == 3 || ideaOnKallen == 2) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Why you won\'t think your confusion is letting me feel painful?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Why you won\'t think your confusion is letting me feel painful?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 1){
        kallenBattle();
      }
    }

    if(textcounter == 19){

      if(ideaOnKallen == 3 || ideaOnKallen == 2) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-sad1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Why you won\'t think I am also care about you.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Why you won\'t think I am also care about you.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 1){
        kallenBattle();
      }
    }

    if(textcounter == 20){

      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();

      if(ideaOnKallen == 3) {
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>Have I think about her....<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Have I think about her....</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnKallen == 2){
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>Kallen...that\'s enough....<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Kallen...that\'s enough....</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 21){

      if(ideaOnKallen == 3 || ideaOnKallen == 2) {
        $('#message').html('<div class="Jongun"><p>｢Kallen...sorry...I know that\'s my bad...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen...sorry...I know that\'s my bad...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

    }

    if(textcounter == 22){

      if(ideaOnKallen == 3 || ideaOnKallen == 2) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Why you are so stubborn!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Why you are so stubborn!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }
    }

    if(textcounter == 23){

      if(ideaOnKallen == 3) {
        $('#char1').addClass('filter').empty().html('<img src="images/Kallen-sad2.png" alt="characterImage">');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Kallen...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

       if(ideaOnKallen == 2){
         $('#char1').addClass('filter').empty().html('<img src="images/Kallen-sad2.png" alt="characterImage">');
         $('#char3').removeClass('filter');
         $('#spokesperson, #message').empty();
         $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
         $('#message').html('<div class="Jongun"><p>I promise you...you won\'t need to get hurt after this moment...<span id="textend">▷</span></p></div>');
         $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>I promise you...you won\'t need to get hurt after this moment...</p></div>');
         $('.charFirstname').html(charFirstname);
         avoidMonkeyClick();
       }

    }

    if(textcounter == 24){

      if(ideaOnKallen == 3) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢All things will be fine if you are in relationship!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢All things will be fine if you are in relationship!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

       if(ideaOnKallen == 2){
         $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
         $('#message').html('<div class="Jongun"><p>As I know what I need to do in this moment now.<span id="textend">▷</span></p></div>');
         $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>As I know what I need to do in this moment now.</p></div>');
         $('.charFirstname').html(charFirstname);
         setTimeout(kallenBattle, 3000);
       }

    }

    if(textcounter == 25){

      if(ideaOnKallen == 3) {
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢All things will be fine if you choose Aya in the past!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢All things will be fine if you choose Aya in the past!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

    }

    if(textcounter == 26){

      if(ideaOnKallen == 3) {
        $('#char1').empty().html('<img src="images/Kallen-sad1.png" alt="characterImage">');
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢But why...?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢But why...?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

    }

    if(textcounter == 27){

      $('#char3').removeClass('filter');
      $('#char1').addClass('filter').empty().html('<img src="images/Kallen-sad2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();

      if(ideaOnKallen == 3 && ideaOnAya == 3) {
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Kallen...that is not related to Aya...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen...that is not related to Aya...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

       if(ideaOnKallen == 3 && ideaOnAya < 3) {
         $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
         $('#message').html('<div class="Jongun"><p>｢Kallen...that is the past already...｣<span id="textend">▷</span></p></div>');
         $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen...that is the past already...｣</p></div>');
         $('.charFirstname').html(charFirstname);
         avoidMonkeyClick();
        }

    }

    if(textcounter == 28){

      if(ideaOnKallen == 3) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢And now, why you don\'t choose Cheresa?!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢And now, why you don\'t choose Cheresa?!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }

    }

    if(textcounter == 29){

      if(ideaOnKallen == 3) {
        $('#char1').empty().html('<img src="images/Kallen-sad1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢Why are you so stubborn...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Why are you so stubborn...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }
    }

    if(textcounter == 30){

      if(ideaOnKallen == 3) {
        $('#char3').removeClass('filter');
        $('#char1').addClass('filter').empty().html('<img src="images/Kallen-sad2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Kallen... Cheresa is not an object... I have to take her feeling into consideration.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen... Cheresa is not an object... I have to take her feeling into consideration.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }
    }

    if(textcounter == 31){

      if(ideaOnKallen == 3) {
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-Angry1.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
        $('#message').html('<div class="kallen"><p>｢So have you care about me!｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢So have you care about me!｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
       }
    }

    if(textcounter == 32){

      if(ideaOnKallen == 3) {
        $('#char1').empty().html('<img src="images/Kallen-sad1.png" alt="characterImage">').animate({left:'+=250'}, 500, 'linear', function(){
          $('#stage').effect("shake", {
          direction: "down"
        });
        $('#audio2').empty().html("<audio id='bgs'></audio>");
        $('#bgs').html("<source src='audio/bgs/falldown.mp3'>").get(0).play();
        $('#message').html('<div class="kallen"><p>｢Is it because I look so rude?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Is it because I look so rude?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      })
    }
}

if(textcounter == 33){

  if(ideaOnKallen == 3) {
    $('#char1').addClass('filter');
    $('#char3').removeClass('filter');
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>She pushed me over.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>She pushed me down.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 34){

  if(ideaOnKallen == 3) {
    $('#char3').addClass('filter');
    $('#char1').removeClass('filter');
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
    $('#message').html('<div class="kallen"><p>｢Am I not feminine enough?｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Am I not feminine enough?｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 35){

  if(ideaOnKallen == 3) {
    $('#char1').addClass('filter');
    $('#char3').removeClass('filter');
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>｢Kallen...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Kallen...｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 36){

  if(ideaOnKallen == 3) {
    $('#char3').addClass('filter');
    $('#char1').removeClass('filter');
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="kallen"><h1>Kallen</h1></div>');
    $('#message').html('<div class="kallen"><p>｢Don\'t always give me a false hope...｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Don\'t always give me a false hope...｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 37){

  if(ideaOnKallen == 3) {
    $('#char3').addClass('filter');
    $('#char1').removeClass('filter').empty().html('<img src="images/Kallen-noticed1.png" alt="characterImage">');;
    $('#message').html('<div class="kallen"><p>｢Push me away....｣<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="kallen backlogborder"><h1>Kallen</h1><p>｢Push me away....｣</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 38){

  if(ideaOnKallen == 3) {
    $('#char1').addClass('filter');
    $('#char3').removeClass('filter');
    $('#audio2').empty().html("<audio id='bgs' loop></audio>");
    $('#bgs').html("<source src='audio/bgs/kiss.ogg'>").get(0).play();
    $('#spokesperson, #message').empty();
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>She kissed me.<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>She kissed me.</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}

if(textcounter == 39){

  if(ideaOnKallen == 3) {
    $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
    $('#message').html('<div class="Jongun"><p>Sorry...Kallen...sorry...forgive me...<span id="textend">▷</span></p></div>');
    $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Sorry...Kallen...sorry...forgive me...</p></div>');
    $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();
   }
}


    if(textcounter == 40){
      $('#audio1, #audio2').empty();
      document.querySelector('video').playbackRate = 0.75;
      $('#magicAbility').removeClass('moveBack').hide().fadeIn(100).get(0).play();
      setTimeout(function(){
        $('#flash').show();
        sessionStorage.setItem("clearcounter", clearcounter);
        sessionStorage.setItem("cheresacounter", cheresacounter);
        sessionStorage.setItem("shirleycounter", shirleycounter);
        sessionStorage.setItem("ayacounter", ayacounter);
        sessionStorage.setItem("kallencounter", kallencounter);
        sessionStorage.setItem("charFirstname", charFirstname);
        sessionStorage.setItem("ideaOnAya", ideaOnAya);
        sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
        window.location = 'Awakened-Kallen.html'}, 4000);
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

  function Good(){
    ideaOnKallen = 3;
    threeOptionMenuChoose();
    $(this).toggle("pulsate");
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Have you think about how she feels? ｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Have you think about how she feels? ｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function Normal(){
    ideaOnKallen = 2;
    $(this).toggle("pulsate");
    threeOptionMenuChoose();
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢As I am confused…｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢As I am confused…｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function Bad(){
    ideaOnKallen = 1;
    $(this).toggle("pulsate");
    threeOptionMenuChoose();
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢If you were me… will you?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢If you were me… will you?｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function threeOptionMenuChoose(){
    $("#option1, #option2, #option3").off("click");
    $("#option, #threeoptionmenu").fadeOut(1000, function(){
     $('#option1, #option2, #option3').empty();
     $('#threeoptionmenu').addClass('moveBack');
  });
  }


  function kallenBattle(){
    sessionStorage.setItem("clearcounter", clearcounter);
    sessionStorage.setItem("cheresacounter", cheresacounter);
    sessionStorage.setItem("shirleycounter", shirleycounter);
    sessionStorage.setItem("ayacounter", ayacounter);
    sessionStorage.setItem("kallencounter", kallencounter);
    sessionStorage.setItem("charFirstname", charFirstname);
    sessionStorage.setItem("ideaOnAya", ideaOnAya);
    sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
    window.location = 'Magicability-Kallen.html';
  }

})
