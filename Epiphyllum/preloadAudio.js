var myaudio = new Array()

function preloadaudio() {
  for (i = 0; i < preloadaudio.arguments.length; i++) {
    myaudio[i] = new Audio()
    myaudio[i].src = preloadaudio.arguments[i]
  }
}


preloadaudio(
  'audio/bgm/defeat.ogg',
  'audio/bgm/school1.ogg',
  'audio/bgm/sad.mp3',
  'audio/bgm/girlstalk.mp3',
  'audio/bgm/girlstalk2.mp3',
  'audio/bgm/fight1.mp3',
  'audio/bgm/fight2.mp3',
  'audio/bgm/healing3.ogg',
  'audio/bgm/bad perception.mp3',
  'audio/bgm/daily1.ogg',
  'audio/bgm/daily2.ogg',
  'audio/bgm/01 僕は、鳥になる。.mp3',
  'audio/bgm/01 Previous Notice.mp3',
  'audio/bgm/02 Hitomi - Sensibility.mp3',
  'audio/bgm/02 Stories.mp3',
  'audio/bgm/05 Feel Ambivalents.mp3',
  'audio/bgm/07 Strange Girl.mp3',
  'audio/bgm/07 Alone.mp3',
  'audio/bgm/11 All Hail Britannia!!!.mp3',
  'audio/bgm/12 Lack of Power for Wisdom.mp3',
  'audio/bgm/13 Masquerade.mp3',
  'audio/bgm/13 Pessimistic Time.mp3',
  'audio/bgm/14 黒石ひとみ - If I Were A Bird.mp3',
  'audio/bgm/16 Stray Cat.mp3',
  'audio/bgm/17 Occupied Thinking.mp3',
  'audio/bgm/22 Innocent Days.mp3',
  'audio/bgm/24. Irreplaceable memories -Piano-.mp3',
  'audio/bgs/school-bell.mp3',
  'audio/bgs/birds.ogg',
  'audio/bgs/footstep01.ogg',
  'audio/bgs/footstep02.ogg',
  'audio/bgs/night-wild.ogg',
  'audio/bgs/gaya1.mp3',
  'audio/bgs/yeah.mp3',
  'audio/bgs/blood.ogg',
  'audio/bgs/falldown.mp3',
  'audio/bgs/kiss.ogg',
  'audio/bgs/se_maoudamashii_se_finger01.ogg',
  'audio/bgs/OutwardInversion,contactmic,BB,cellphone,broken,vibration,notification,long,alt3.wav',
  'audio/bgs/slap.ogg',
  'audio/bgs/knock.ogg',
  'audio/bgs/knife.ogg',
  'audio/bgs/Apartment-ding-dong-sound.mp3',
  'audio/bgs/Wooden-door-opening-sound-effect.mp3',
  'audio/ed/01. For Fruits Basket.mp3',
  'audio/ed/Still I Love You～みつめるよりは幸せ～.flac',
  'audio/ed/あなたが…いない -remix ver.-.flac',
  'audio/ed/悲しみの向こうへ.flac',
  'videos/magicAbility.mov',
  'videos/magicAbility.mp4'
)
