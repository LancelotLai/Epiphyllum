$(document).ready(function() {

  var textcounter = 0;
  var clearcounter = sessionStorage.getItem('clearcounter') || 0;
  var cheresacounter = sessionStorage.getItem('cheresacounter') || 0;
  var shirleycounter = sessionStorage.getItem('shirleycounter') || 0;
  var ayacounter = sessionStorage.getItem('ayacounter') || 0;
  var kallencounter = sessionStorage.getItem('kallencounter') || 0;
  var charFirstname = sessionStorage.getItem('charFirstname') || 'Noname';

$(document).keyup(function(e){
    playBgm();
    console.log(e.which);
    if(e.which==32) {showBacklog();};
    if(e.which==27) {hideBacklog();};

  });

counterChange();
$(document).click(playBgm);
$('#magicAbility, #controlguide div').hide();
$('#stage').addClass('bg-classroom-day');
$('#flash').toggle("slide", {direction: 'right'}, 400);
$('#controlguide li:last').hover(function(){
  $('#controlguide div').stop(false,true).show('slide',{direction: 'right'},300);
  $('#controlguide li:last').html('◁ Control Guide');
},
  function(){
    $('#controlguide div').stop(false,true).hide('slide',{direction: 'right'},300);
    $('#controlguide li:last').html('▷ Control Guide');
});
$('#textbox').hide().addClass('mouse-not-allowed').fadeIn(1000, function(){
  $('#message').html('<div class="nonespeech"><p>Seems you have found your truth...that is the end of the story, hope to see you at somwhere else.<span id="textend">▷</span></p></div>');
  $('#backlog section').append('<div class="nonespeech backlogborder"><p>Seems you have found your truth...that is the end of the story, hope to see you at somwhere else.</p></div>');
  avoidMonkeyClick();
});
$("#audio1").html("<audio id='bgm' loop><source src='audio/bgm/school1.ogg'></audio>");
$('#stage').mousemove(playBgm);
document.getElementById("textbox").addEventListener("wheel", showBacklog);
$('#backlogClose').click(hideBacklog);
$('.charFirstname').html(charFirstname);

function counterChange(){
if (cheresacounter == 0) {
  $('#CheresaCounter').addClass('cheresaCounter1');
} else if (cheresacounter == 1) {
  $('#CheresaCounter').addClass('cheresaCounter2');
} else if (cheresacounter >= 2) {
  $('#CheresaCounter').addClass('cheresaCounter3');
};

if (shirleycounter == 0){
  $('#ShirleyCounter').addClass('shirleyCounter1');
} else if (shirleycounter == 1) {
  $('#ShirleyCounter').addClass('shirleyCounter2');
} else if (shirleycounter >= 2) {
  $('#ShirleyCounter').addClass('shirleyCounter3');
}

if (ayacounter != 0){
  $('#AyaCounter').addClass('charGrayscale');
}

if (kallencounter != 0){
  $('#KallenCounter').addClass('charGrayscale');
}
}

function playBgm() {
  $('#bgm').get(0).play();
};

function avoidMonkeyClick(){

  setTimeout(function(){
    $('#textbox').addClass('mouse-click').removeClass('mouse-not-allowed').click(controlTextBox);
    $(document).keypress(function(e){
      if(e.which==13) {controlTextBox();$('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mouse-click')};
    });
  }, 2000);
};

function showBacklog(){
  $('#backlog').removeClass('moveBack');
};

function hideBacklog(){
  $('#backlog').addClass('moveBack');
};

function threeOptionMenuChoose(){
  $("#option1, #option2, #option3").off("click");
  $('#textbox').fadeIn(2500);
  $("#option, #threeoptionmenu").fadeOut(2500, function(){
   $('#spokesperson, #message, #option1, #option2, #option3').empty();
});
}

function controlTextBox(){

  $('#textbox').off('click').addClass('mouse-not-allowed').removeClass('mousemouse-click');
  $(document).off('keypress');


  setTimeout(textcounter++,1000);

  if (textcounter == 1) {
    $('#spokesperson, #message').empty();
    $('#char1').html('<img src="images/JongunHappy.png" alt="characterImage" class="charFilp">')
    .hide().fadeIn(1000, function(){
      $('#spokesperson').html('<div class="Jongun"><h1 class="charFirstname"></h1></div>');
      $('#backlog section').append('<div class="Jongun backlogborder"><h1 class="charFirstname"></h1><p>｢Here is testing the typewriter effect.｣</p></div>');
      $('.charFirstname').html(charFirstname);
      $('#message').html('<div class="Jongun"><p>｢Here is testing the typewriter effect.｣<span id="textend">▷</span></p></div>');
      avoidMonkeyClick();
    });
  }

  if (textcounter == 2) {
    $('#spokesperson, #message').empty();
    $('#char1').addClass("filter");
    $('#char2').html('<img src="images/ShirleyHappy.png" alt="characterImage">')
    .hide().fadeIn(1000, function(){
      $('#spokesperson').html('<div class="Shirley"><h1>Shirley</h1></div>');
      $('#message').html('<div class="Shirley"><p>(Here is texting the overlay effect)<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Shirley backlogborder"><h1>Shirley</h1><p>(Here is texting the overlay effect)</p></div>');
      avoidMonkeyClick();
    });
  }

  if (textcounter == 3) {
    $('#spokesperson, #message').empty();
    $('#char2').addClass("filter");
    $('#char3').html('<img src="images/CheresaHappy.png" alt="characterImage">')
    .hide().fadeIn(1000, function(){
      $('#spokesperson').html('<div class="Cheresa"><h1>Cheresa</h1></div>');
      $('#message').html('<div class="Cheresa"><p>Click it and start to test the magic ability effect.<span id="textend">▷</span></p></div>');
      $('#backlog section').append('<div class="Cheresa backlogborder"><h1>Cheresa</h1><p>Click it and start to test the magic ability effect.</p></div>');
      avoidMonkeyClick();
    });
  }

  if (textcounter == 4) {
    var videotimecounter = 0;
    var timer = setInterval(eventHandler, 1000);
    function eventHandler() {
      document.querySelector('video').playbackRate = 0.75;
      videotimecounter++;
      console.log(videotimecounter);

      if (videotimecounter == 1){
        $('#audio1').empty().html("<audio id='bgm' loop></audio>");
        $('#audio2').html("<audio id='bgs'></audio>")
        $('#magicAbility').fadeIn(100, function(){
          $('textbox').hide();
          $('#spokesperson, #message').empty();
        }).get(0).play();
      }
      if (videotimecounter == 4) {
        $('#magicAbility').hide();
        $('#stage').removeClass('bg-classroom-day').addClass('bg-classroom-dusk');
        $('#char3').addClass("filter");
        $('#char1 ').removeClass("filter");
        $('#flash').show().fadeOut(2000, function(){
          $('#bgs').html("<source src='audio/bgs/school-bell.mp3'>").get(0).play();
        $('#bgm').html("<source src='audio/bgm/girlstalk.mp3'>").get(0).play();
          $('#textbox').fadeIn(1000, function(){
            $('#message').html('<div class="nonespeech"><p>Test for counter.<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="nonespeech backlogborder"><p>Test for counter.</p></div>');
            clearInterval(timer);avoidMonkeyClick();
        });
      });
      }
    }
    }
        if (textcounter == 5) {
          $('#yesnooption').hide();
          $('#option').removeClass("moveBack").hide().fadeIn(1000);
          $('textbox').fadeOut(1000);
            $('#option1').html('<h1>add shirley counter</h1>').one('click', function(){
              $(this).toggle("pulsate");
              $('#backlog section').append('<div class="nonespeech backlogborder"><p>add shirley counter</p></div>');
              threeOptionMenuChoose();
              shirleycounter++;
              console.log(shirleycounter);
              setTimeout (function(){
                avoidMonkeyClick();
                $('#message').html('<div class="nonespeech"><p>Please click to check the counter result.<span id="textend">▷</span></p></div>');
                $('#backlog section').append('<div class="nonespeech backlogborder"><p>Please click to check the counter result.</p></div>');
              }, 3000);
            });
            $('#option2').html('<h1>add cheresa counter</h1>').one('click', function(){
              $(this).toggle("pulsate");
              $('#backlog section').append('<div class="nonespeech backlogborder"><p>add cheresa counter</p></div>');
              threeOptionMenuChoose();
              cheresacounter++;
              console.log(cheresacounter);
              setTimeout (function(){
                avoidMonkeyClick();
                $('#message').html('<div class="nonespeech"><p>Please click to check the counter result.<span id="textend">▷</span></p></div>');
                $('#backlog section').append('<div class="nonespeech backlogborder"><p>Please click to check the counter result.</p></div>');
              }, 3000);
            });
            $('#option3').html('<h1>don\'t add counter</h1>').one('click', function(){
              $(this).toggle("pulsate");
              $('#backlog section').append('<div class="nonespeech backlogborder"><p>don\'t add counter</p></div>');
              threeOptionMenuChoose();
              setTimeout (function(){
                avoidMonkeyClick();
                $('#message').html('<div class="nonespeech"><p>Please click to check the counter result.<span id="textend">▷</span></p></div>');
                $('#backlog section').append('<div class="nonespeech backlogborder"><p>Please click to check the counter result.</p></div>');
              }, 3000);
            });
      }

        if (textcounter == 6) {
         $('#spokesperson, #message').empty();
          $("#char2, #char3").fadeOut(1000, function(){$(this).empty();});
          if (cheresacounter == 1 && shirleycounter <= 0) {
            $('#message').html('<div class="Cheresa"><p>You killed her.<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Cheresa backlogborder"><p>You killed her.</p></div>');
          } else if (shirleycounter == 1 && cheresacounter <= 0) {
            $('#message').html('<div class="Shirley"><p>You haven\'t kill her.<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><p>You haven\'t kill her.</p></div>');
          } else if (cheresacounter >= 1 && shirleycounter <= 0) {
              $('#message').html('<div class="Cheresa"><p>You killed twice.<span id="textend">▷</span></p></div>');
              $('#backlog section').append('<div class="Cheresa backlogborder"><p>You killed twice.</p></div>');
          } else if (shirleycounter >= 1 && cheresacounter <= 0) {
            $('#message').html('<div class="Shirley"><p>You haven\'t kill her twice.<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Shirley backlogborder"><p>You haven\'t kill her twice.</p></div>');
          }
            else {
            $('#message').html('<div class="Jongun"><p>You done nothing.<span id="textend">▷</span></p></div>');
            $('#backlog section').append('<div class="Jongun backlogborder"><p>You done nothing.</p></div>');
          }
          avoidMonkeyClick();
        }

        if (textcounter == 7) {
          avoidMonkeyClick();
          $('#message').empty();
          $('#message').html('<div class="nonespeech"><p>Let\'s move to the battle scene text.<span id="textend">▷</span></p></div>');
          $('#backlog section').append('<div class="nonespeech backlogborder"><p>Let\'s move to the battle scene text.</p></div>');
        }


        if (textcounter == 8) {
            sessionStorage.setItem("cheresacounter", cheresacounter);
            sessionStorage.setItem("shirleycounter", shirleycounter);
            sessionStorage.setItem("ayacounter", ayacounter);
            sessionStorage.setItem("kallencounter", kallencounter);
            sessionStorage.setItem("charFirstname", charFirstname);
            window.location = 'demo2.html';
        }
};
})
