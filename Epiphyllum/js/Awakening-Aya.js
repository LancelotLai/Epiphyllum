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
  $('#bgm').html("<source src='audio/bgm/girlstalk2.mp3'>")
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
      $('#message').html('<div class="Jongun"><p>｢She is really feeling unhappy ...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢She is really feeling unhappy ...｣</p></div>');
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
      $('#char1').html('<img src="images/Aya-Smile2.png" alt="characterImage">').fadeIn(1000, function() {
        $('#char3').addClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Still hasn\'t make your girlfriend happy back?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Still hasn\'t make your girlfriend happy back?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });
    }

    if (textcounter == 2) {
      $('#char1').addClass('filter').empty().html('<img src="images/Aya-Smile.png" alt="characterImage">');
      $('#char3').removeClass('filter');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢We are not a couple...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢We are not a couple...｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 3) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/Aya-Smile2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢But you are worring her, right?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢But you are worring her, right?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 4) {
      $('#char1').addClass('filter').empty().html('<img src="images/Aya-Smile.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢Um.... Do you have any idea can help me?｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Um.... Do you have any idea can help me?｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 5) {
      $('#char3').addClass('filter');
      $('#char1').removeClass('filter').empty().html('<img src="images/Aya-Smile2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢Arlala~ If you can shopping with me, maybe I have some ideas~｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Arlala~ If you can shopping with me, maybe I have some ideas~｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 6) {
      $('#char1').addClass('filter').empty().html('<img src="images/Aya-Smile.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunHappy2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢There is no reason to do another things in this moment.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢There is no reason to do another things in this moment.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 7) {
      $('#flash').empty().show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#stage').removeClass('bg-classroom-dusk').addClass('bg-shopping-street-dusk');
      $('#audio2').empty().html("<audio id='bgs' loop></audio>");
      $('#bgs').html("<source src='audio/bgs/gaya1.mp3'>").get(0).play();
      $('#char3').addClass('filter');
      $('#spokesperson, #message').empty();
      $('#char2').html('<img src="images/ShirleyLaugh.png" alt="characterImage">').fadeIn(1500, function() {
        $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
        $('#message').html('<div class="Shirley"><p>｢You are sooo cunning♥｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>｢You are sooo cunning♥｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      });

    }

    if (textcounter == 8) {
      $('#char2').addClass('filter');
      $('#char3').removeClass('filter').addClass('charFilp').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢But at the same time I am really wanting to get help.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢But at the same time I am really wanting help.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 9) {
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 500, "linear");
      $('#audio2').empty();
      $('#stage').removeClass('bg-shopping-street-dusk').addClass('bg-shop-dusk');
      $('#char2').empty().removeClass('filter charFilp');
      $('#char3').removeClass('charFilp').addClass('filter').empty().html('<img src="images/JongunHappy2.png" alt="characterImage">');
      $('#char1').removeClass('filter').empty().html('<img src="images/Aya-Smile2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢I remember you always find me and Kallen to get help in the childhood.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢I remember you always find me and Kallen to get help in the childhood.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 10) {
      $('#char2').empty().removeClass('filter charFilp');
      $('#char3').removeClass('charFilp').addClass('filter').empty().html('<img src="images/JongunHappy2.png" alt="characterImage">');
      $('#char1').removeClass('filter').empty().html('<img src="images/Aya-Smile2.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
      $('#message').html('<div class="aya"><p>｢But why suddenly estranged with us? Wow...this headband looks good.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢But why suddenly estranged with us? Wow...this headband looks good.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if (textcounter == 11) {
      $('#audio1').empty();
      $('#char1').addClass('filter').empty().html('<img src="images/Aya-Smile.png" alt="characterImage">');
      $('#char3').removeClass('filter').empty().html('<img src="images/JongunUnhappy.png" alt="characterImage">');
      $('#spokesperson, #message').empty();
      $('#option').removeClass('moveBack');
      $('#option, #threeoptionmenu').hide().fadeIn(1000);
      $('#option1').html('<h1>It is not important anymore</h1>').one('click', Normal);
      $('#option2').html('<h1>......</h1>').one('click', Good);
      $('#option3').html('<h1>That is not your business</h1>').one('click', Bad);
    }

    if(textcounter == 12){

      if(ideaOnAya == 3){
        $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/02 Hitomi - Sensibility.mp3'></audio>");
        playBgm();
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Aya-Smile3.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Your reaction really looks like Cheresa when she was a child.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Your reaction really looks like Cheresa when she was a child.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 2){
        $("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/07 Alone.mp3'></audio>");
        playBgm();
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/AyaHappy.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Actually you don\'t need to make yourself so stressful...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Actually you don\'t need to make yourself so stressful...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 1){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/AyaHappy2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 13){

      if(ideaOnAya == 3){
        $('#char1').empty().html('<img src="images/AyaHappy4.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢...both of you are my treasure, I won\'t let either one of you get hurt...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢...both of you are my treasure, I won\'t let either one of you get hurt...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 2){
        $('#char1').empty().html('<img src="images/AyaHappy.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Have a smile little bit more, it will let you become more happy.｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Have a smile little bit more, it will let you become more happy.｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 1){
        $('#char1').empty().html('<img src="images/AyaHappy2.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢It\'s time to back home now...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 14){
      $('#flash').show().toggle("slide", {
        direction: 'right'
      }, 1000, "linear");
      $('#stage').removeClass('bg-shop-dusk').addClass('bg-bypath-dusk');

        if(ideaOnAya == 3 || ideaOnAya == 2){
          $('#char1').empty().html('<img src="images/Aya-New-Happy.png" alt="characterImage">');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
          $('#message').html('<div class="aya"><p>｢Finally just buy it~ Am I look good now...?｣<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Finally just buy it~ Am I look good now...?｣</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();
        }

        if(ideaOnAya == 1){
          $('#char1').addClass('filter');
          $('#char3').removeClass('filter');
          $('#spokesperson, #message').empty();
          $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
          $('#message').html('<div class="Jongun"><p>Finally she hasn\'t say anything about Cheresa...<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Finally she hasn\'t say anything about Cheresa...</p></div>');
          $('.charFirstname').html(charFirstname);
          avoidMonkeyClick();

        }
    }

    if(textcounter == 15){

      if(ideaOnAya == 3 || ideaOnAya == 2){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>Her new look actually looks like the style when we were child...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Her new look actually looks like the style when we were child...</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 1){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Shirley... it\'s time to have the pulishment now...(whisper)｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Shirley... it\'s time to have the pulishment now...(whisper)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();

      }
    }

    if(textcounter == 16){

      if(ideaOnAya == 3 || ideaOnAya == 2){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>When we still haven\'t consider the situation we need to face...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>When we still haven\'t consider the situation we need to face...</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 1){
        ayaBattle();
      }
    }

    if(textcounter == 17){

      if(ideaOnAya == 3 || ideaOnAya == 2){
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Ya... that\'s pretty...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Ya... that\'s pretty...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 18){

      if(ideaOnAya == 3){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>(Sorry Aya.... sorry...sorry)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Sorry Aya.... sorry...sorry)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 2){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>But it is different now...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>But it is different now...</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

    }

    if(textcounter == 19){

      if(ideaOnAya == 3 || ideaOnAya == 2){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Remember~ Smile more~ Smile can protect the treasure in your heart~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Remember~ Smile more~ Smile can protect the treasure in your heart~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

    }

    if(textcounter == 20){

      $('#char1').addClass('filter');
      $('#char3').removeClass('filter');

      if(ideaOnAya == 3){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>(How can I smile now...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Sorry Aya.... sorry...sorry)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }

      if(ideaOnAya == 2){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>Sorry Aya... it\'s time now...I promise you... I will smile...after this tragedy...<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Sorry Aya... it\'s time now...I promise you... I will smile...after this tragedy...</p></div>');
        $('.charFirstname').html(charFirstname);
        setTimeout(ayaBattle, 4000);
      }

    }

    if(textcounter == 21){

      if(ideaOnAya == 3){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢I am looking forward for both of you~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢I am looking forward for both of you~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 22){

      if(ideaOnAya == 3){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>(Please....don\'t be so good to me...)<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>(Please....don\'t be so good to me...)</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 23){

      if(ideaOnAya == 3){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Cheresa just always don\'t know how to express what she is thinking~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Cheresa just always don\'t know how to express what she is thinking~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 24){

      if(ideaOnAya == 3){
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢And you too~｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢And you too~｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 25){

      if(ideaOnAya == 3){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter').animate({left:'-=200'}, 500, 'linear', function(){
          $('#stage').effect("shake", {
          direction: "down"
        });
        $('#audio2').empty().html("<audio id='bgs'></audio>");
        $('#bgs').html("<source src='audio/bgs/falldown.mp3'>").get(0).play();
        $('#char1').empty().html('<img src="images/Aya-New-Shocked.png" alt="characterImage">');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Is that really you want to see!?｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Is that really you want to see!?｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      })
    }
    }

    if(textcounter == 26){

      if(ideaOnAya == 3){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter').empty().html('<img src="images/Aya-New-Unhappy.png" alt="characterImage">');;
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢....｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢....｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 27){

      if(ideaOnAya == 3){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Aya... I know....so please.... please don\'t keep hurting yourself...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Aya... I know....so please.... please don\'t keep hurting yourself...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 28){

      if(ideaOnAya == 3){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Cheresa won\'t want to see this....｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Cheresa won\'t want to see this....｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }


    if(textcounter == 29){
      if(ideaOnAya == 3){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#audio2').empty().html("<audio id='bgs' loop></audio>");
        $('#bgs').html("<source src='audio/bgs/kiss.ogg'>").get(0).play();
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>｢Aya...that\'s enough....｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Aya...that\'s enough....｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 30){
      $('#char1').empty().html('<img src="images/Aya-New-Embarass.png" alt="characterImage">');
      $('#message').html('<div class="Jongun"><p>We kissed.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>We kissed.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 31){
      $('#message').html('<div class="Jongun"><p>With our sincere emotion.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>With our sincere emotion</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 32){
      $('#message').html('<div class="Jongun"><p>If your surname is not Kyodo...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>If your surname is not Kyodo...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 33){
      $('#message').html('<div class="Jongun"><p>If my surname is not Barton...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>If my surname is not Barton...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 34){
      $('#message').html('<div class="Jongun"><p>We are a couple already...<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>We are a couple already...</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 35){
      $('#message').html('<div class="Jongun"><p>Aya...you were my first love.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>Aya...you were my first love.</p></div>');
      $('.charFirstname').html(charFirstname);
      avoidMonkeyClick();
    }

    if(textcounter == 36){

      if(ideaOnAya == 3){
        $('#char3').addClass('filter');
        $('#char1').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="aya"><h1>Aya</h1></div>');
        $('#message').html('<div class="aya"><p>｢Just in this moment....Cheresa...forgive me...｣<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="aya backlogborder"><h1>Aya</h1><p>｢Just in this moment....Cheresa...forgive me...｣</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 37){
      if(ideaOnAya == 3){
        $('#char1').addClass('filter');
        $('#char3').removeClass('filter');
        $('#spokesperson, #message').empty();
        $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
        $('#message').html('<div class="Jongun"><p>But it won\'t have any changes for the situation which is already going on.<span id="textend">▷</span></p></div>');
        $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>But it won\'t have any changes for the situation which is already going on.</p></div>');
        $('.charFirstname').html(charFirstname);
        avoidMonkeyClick();
      }
    }

    if(textcounter == 38){
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
        window.location = 'Awakened-Aya.html'}, 4000);
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
    ideaOnAya = 3;
    threeOptionMenuChoose();
    $(this).toggle("pulsate");
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢...｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢...｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function Normal(){
    ideaOnAya = 2;
    $(this).toggle("pulsate");
    threeOptionMenuChoose();
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢It is not important anymore.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢It is not important anymore.｣</p></div>');
      $('.charFirstname').html(charFirstname);
    avoidMonkeyClick();},1000);
  }

  function Bad(){
    ideaOnAya = 1;
    $(this).toggle("pulsate");
    threeOptionMenuChoose();
    setTimeout(function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#message').html('<div class="Jongun"><p>｢That is not your business.｣<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢That is not your business.｣</p></div>');
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


  function ayaBattle(){
    sessionStorage.setItem("clearcounter", clearcounter);
    sessionStorage.setItem("cheresacounter", cheresacounter);
    sessionStorage.setItem("shirleycounter", shirleycounter);
    sessionStorage.setItem("ayacounter", ayacounter);
    sessionStorage.setItem("kallencounter", kallencounter);
    sessionStorage.setItem("charFirstname", charFirstname);
    sessionStorage.setItem("ideaOnAya", ideaOnAya);
    sessionStorage.setItem("ideaOnKallen", ideaOnKallen);
    window.location = 'Magicability-Aya.html';
  }

})
