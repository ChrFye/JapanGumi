

// variables
mr=document.querySelector('#result'),
mq=document.querySelector('.q1'),
correct = 0,
wrong=0;
var chA=document.querySelector('#chA'),
chB=document.querySelector('#chB'),
chC=document.querySelector('#chC'),
chD=document.querySelector('#chD');


//function sur le body en onload
  function execut0() {
    shuffleBut();
    execut();
    verif();
    score();
  }

//recupere le score du local storage et l'affiche || ou || initialise le score total a 0 et le stock dans le local storage
if ("scorekn5" in localStorage) {
  var parsedScore = JSON.parse(localStorage.getItem('scorekn5'));
  document.querySelector('#sResultP').innerHTML ="Total : "+"<span>"+parsedScore.good+"</span>"+" - "+"<span>"+parsedScore.bad+"</span>";
} else {
  var initialScore ={ "good":0,"bad":0 };
  localStorage.setItem("scorekn5",JSON.stringify(initialScore));
}
//choix de réponses possibles

var kn5 = [
                [
                  "一",
                  "イチ,イツ",
                  "ひと,ひと.つ",
                  "un"
                ],
                [
                  "七",
                  "シチ",
                  "なな,なな.つ,なの",
                  "sept"
                ],
                [
                  "万",
                  "マン,バン",
                  "よろず",
                  "dix-mille"
                ],
                [
                  "三",
                  "サン,ゾウ",
                  "み,み.つ,みっ.つ",
                  "trois"
                ],
                [
                  "上",
                  "ジョウ,ショウ,シャン",
                  "うえ, あ.げる,のぼ.る",
                  "au-dessus, haut, monter, donner"
                ],
                [
                  "下",
                  "カ,ゲ",
                  "した, さ.げる,くだ.る",
                  "au-dessous, descendre, bas, donner, inférieur"
                ],
                [
                  "中",
                  "チュウ",
                  "なか,うち,あた.る",
                  "dans, dedans, à l'intérieur, milieu, centre, moyenne"
                ],
                [
                  "九",
                  "キュウ,ク",
                  "ここの,ここの.つ",
                  "neuf"
                ],
                [
                  "二",
                  "ニ,ジ",
                  "ふた,ふた.つ,ふたた.び",
                  "deux"
                ],
                [
                  "五",
                  "ゴ",
                  "いつ,いつ.つ",
                  "cinq"
                ],
                [
                  "人",
                  "ジン,ニン",
                  "ひと",
                  "être humain, personne"
                ],
                [
                  "今",
                  "コン",
                  "いま",
                  "maintenant"
                ],
                [
                  "休",
                  "キュウ",
                  "やす.む,やす.める",
                  "se reposer, repos"
                ],
                [
                  "会",
                  "カイ",
                  "あ.う",
                  "réunion, rencontre, parti"
                ],
                [
                  "何",
                  "カ",
                  "なに,なん",
                  "quoi, que"
                ],
                [
                  "先",
                  "セン",
                  "さき,ま.ず",
                  "avant, devant, précédent"
                ],
                [
                  "入",
                  "ニュウ,ジュ",
                  "い.る,い.れる,はい.る",
                  "entrer, insérer"
                ],
                [
                  "八",
                  "ハチ",
                  "や,や.つ,やっ.つ,よう",
                  "huit"
                ],
                [
                  "六",
                  "ロク,リク",
                  "む",
                  "six"
                ],
                [
                  "円",
                  "エン",
                  "まる.い",
                  "cercle, yen, rond"
                ],
                [
                  "出",
                  "シュツ,スイ",
                  "で.る,だ.す,い.でる",
                  "sortir, quitter, présence"
                ],
                [
                  "分",
                  "ブン,フン",
                  "わ.ける, わ.かる",
                  "comprendre, minute, degré, taux"
                ],
                [
                  "前",
                  "ゼン",
                  "まえ",
                  "avant, devant"
                ],
                [
                  "北",
                  "ホク",
                  "きた",
                  "Nord"
                ],
                [
                  "十",
                  "ジュウ",
                  "とお,と",
                  "dix"
                ],
                [
                  "千",
                  "セン",
                  "ち",
                  "mille"
                ],
                [
                  "午",
                  "ゴ",
                  "うま",
                  "midi"
                ],
                [
                  "半",
                  "ハン",
                  "なか.ば",
                  "moitié, milieu, demi"
                ],
                [
                  "南",
                  "ナン",
                  "みなみ",
                  "Sud"
                ],
                [
                  "友",
                  "ユウ",
                  "とも",
                  "ami"
                ],
                [
                  "口",
                  "コウ,ク",
                  "くち",
                  "bouche"
                ],
                [
                  "古",
                  "コ",
                  "ふる.い",
                  "vieux, ancien"
                ],
                [
                  "右",
                  "ウ,ユウ",
                  "みぎ",
                  "droite"
                ],
                [
                  "名",
                  "メイ,ミョウ",
                  "な",
                  "nom, célèbre, fameux"
                ],
                [
                  "四",
                  "シ",
                  "よ,よん",
                  "quatre"
                ],
                [
                  "国",
                  "コク",
                  "くに",
                  "pays"
                ],
                [
                  "土",
                  "ド,ト",
                  "つち",
                  "sol, terre, terrain"
                ],
                [
                  "外",
                  "ガイ",
                  "そと,はず.れ",
                  "extérieur, dehors"
                ],
                [
                  "多",
                  "タ",
                  "おお.い",
                  "nombreux, beaucoup"
                ],
                [
                  "大",
                  "ダイ,タイ",
                  "おお.きい",
                  "grand"
                ],
                [
                  "天",
                  "テン",
                  "あまつ,あめ",
                  "cieux, ciel, impérial"
                ],
                [
                  "女",
                  "ジョ,ニョ,ニョウ",
                  "おんな,め",
                  "femme, féminin"
                ],
                [
                  "子",
                  "シ,ス,ツ",
                  "こ",
                  "enfant"
                ],
                [
                  "学",
                  "ガク",
                  "まな.ぶ",
                  "étudier, apprendre, science"
                ],
                [
                  "安",
                  "アン",
                  "やす.い",
                  "bon marché, peu cher, sûr, tranquille"
                ],
                [
                  "小",
                  "ショウ",
                  "ちい.さい,こ",
                  "petit"
                ],
                [
                  "少",
                  "ショウ",
                  "すく.ない,すこ.し",
                  "un peu, peu de"
                ],
                [
                  "山",
                  "サン,セン",
                  "やま",
                  "montagne"
                ],
                [
                  "川",
                  "セン",
                  "かわ",
                  "rivière, fleuve"
                ],
                [
                  "左",
                  "サ,シャ",
                  "ひだり",
                  "gauche"
                ],
                [
                  "年",
                  "ネン",
                  "とし",
                  "année, compteur pour les années"
                ],
                [
                  "店",
                  "テン",
                  "みせ",
                  "magasin, échoppe"
                ],
                [
                  "後",
                  "ゴ,コウ",
                  "のち,うし.ろ,あと,おく.れる",
                  "après, derrière"
                ],
                [
                  "手",
                  "シュ",
                  "て",
                  "main"
                ],
                [
                  "新",
                  "シン",
                  "あたら.しい",
                  "nouveau, frais"
                ],
                [
                  "日",
                  "ニチ,ジツ",
                  "ひ,か",
                  "jour, soleil, Japon, compteur pour les jours"
                ],
                [
                  "時",
                  "ジ",
                  "とき",
                  "temps, heure"
                ],
                [
                  "書",
                  "ショ",
                  "か.く",
                  "écrire"
                ],
                [
                  "月",
                  "ゲツ,ガツ",
                  "つき",
                  "lune, mois"
                ],
                [
                  "木",
                  "モク",
                  "き",
                  "arbre, bois"
                ],
                [
                  "本",
                  "ホン",
                  "もと",
                  "livre, essentiel, réalité, compteur pour les objets allongés"
                ],
                [
                  "来",
                  "ライ",
                  "く.る",
                  "venir, suivant"
                ],
                [
                  "東",
                  "トウ",
                  "ひがし",
                  "Est"
                ],
                [
                  "校",
                  "コウ",
                  "めん",
                  "école"
                ],
                [
                  "母",
                  "ボ",
                  "はは",
                  "mère, maman"
                ],
                [
                  "毎",
                  "マイ",
                  "ごと",
                  "chaque, tous les"
                ],
                [
                  "気",
                  "キ",
                  "いき",
                  "esprit, atmosphère, humeur"
                ],
                [
                  "水",
                  "スイ",
                  "みず",
                  "eau"
                ],
                [
                  "火",
                  "カ",
                  "ひ",
                  "feu"
                ],
                [
                  "父",
                  "フ",
                  "ちち",
                  "père, papa"
                ],
                [
                  "生",
                  "セイ,ショウ",
                  "い.きる,う.まれる,なま",
                  "vivre, naître, cru, authentique"
                ],
                [
                  "男",
                  "ダン,ナン",
                  "おとこ",
                  "homme, mâle"
                ],
                [
                  "白",
                  "ハク",
                  "しろ.い",
                  "blanc"
                ],
                [
                  "百",
                  "ヒャク,ビャク",
                  "もも",
                  "cent"
                ],
                [
                  "目",
                  "モク,ボク",
                  "め",
                  "œil, numérateur ordinal"
                ],
                [
                  "社",
                  "シャ",
                  "やしろ",
                  "entreprise, société, temple shinto"
                ],
                [
                  "空",
                  "クウ",
                  "そら,あ.く,す.く",
                  "ciel, creux, vide"
                ],
                [
                  "立",
                  "リツ",
                  "た.つ",
                  "être debout, établir"
                ],
                [
                  "耳",
                  "ジ",
                  "みみ",
                  "oreille"
                ],
                [
                  "聞",
                  "ブン,モン",
                  "き.く,き.こえる",
                  "entendre, écouter, demander"
                ],
                [
                  "花",
                  "カ",
                  "はな",
                  "fleur"
                ],
                [
                  "行",
                  "コウ,ギョウ",
                  "い.く,ゆ.く,おこ.なう",
                  "aller, voyage"
                ],
                [
                  "西",
                  "セイ",
                  "にし",
                  "Ouest"
                ],
                [
                  "見",
                  "ケン",
                  "み.る,み.える,み.せる",
                  "regarder, voir"
                ],
                [
                  "言",
                  "ゲン,ゴン",
                  "い.う",
                  "dire, parler"
                ],
                [
                  "話",
                  "ワ",
                  "はな.す,はなし",
                  "parler, histoire"
                ],
                [
                  "語",
                  "ゴ",
                  "かた.る,かた.らう",
                  "langage, mot, raconter"
                ],
                [
                  "読",
                  "ドク,トク",
                  "よ.む",
                  "lire"
                ],
                [
                  "買",
                  "バイ",
                  "か.う",
                  "acheter"
                ],
                [
                  "足",
                  "ソク",
                  "あし,た.りる,た.す",
                  "jambe, être suffisant, ajouter"
                ],
                [
                  "車",
                  "シャ",
                  "くるま",
                  "véhicule, voiture"
                ],
                [
                  "週",
                  "シュウ -",
                  "",
                  "semaine"
                ],
                [
                  "道",
                  "ドウ",
                  "みち",
                  "voie, route, chemin"
                ],
                [
                  "金",
                  "キン,コン",
                  "かね",
                  "or"
                ],
                [
                  "長",
                  "チョウ",
                  "なが.い",
                  "chef, long"
                ],
                [
                  "間",
                  "カン",
                  "あいだ,ま",
                  "intervalle"
                ],
                [
                  "雨",
                  "ウ",
                  "あめ",
                  "pluie"
                ],
                [
                  "電",
                  "デン -",
                  "",
                  "électricité"
                ],
                [
                  "食",
                  "ショク",
                  "た.べる",
                  "manger, nourriture"
                ],
                [
                  "飲",
                  "イン,オン",
                  "の.む",
                  "boire, boisson"
                ],
                [
                  "駅",
                  "エキ -",
                  "",
                  "gare"
                ],
                [
                  "高",
                  "コウ",
                  "たか.い",
                  "haut, élevé, cher"
                ],
                [
                  "魚",
                  "ギョ",
                  "うお,さかな",
                  "poisson"
                ],
]


  //compteur du score actuel
  function score() {
   mr.innerHTML="Vous avez <span>"+correct+"</span> bonnes réponses et <span>"+wrong+"</span> mauvaises réponses";
  }

  //reset le score actuel et l'affiche dans l'historique + ajoute le score au score total
  function scoreReset() {
    var parsedScore = JSON.parse(localStorage.getItem('scorekn5'));

    parsedScore.good += correct;
    parsedScore.bad += wrong;
    localStorage.setItem('scorekn5', JSON.stringify(parsedScore));
    var parsedScoreR = JSON.parse(localStorage.getItem('scorekn5'));
    document.querySelector('#sResultP').innerHTML ="Total : "+"<span>"+parsedScoreR.good+"</span>"+" - "+"<span>"+parsedScoreR.bad+"</span>";

    var ss = document.querySelector('#sResultUl');// selectionne l'UL
    var dd = document.createElement("li");// create a LI
    var scorrect = correct.toString()
    var swrong = wrong.toString()
    var newContent = document.createTextNode(scorrect +" - "+ swrong);//create text content
    dd.appendChild(newContent);// met le texte content dans le LI
    ss.insertBefore(dd, ss.childNodes[0]);//met le LI avant le premier enfant de l'UL

    correct = 0,
    wrong= 0;
    score();
  }

  //reset l'historique des scores
  function historeset() {
    document.querySelector('#sResultUl').innerHTML = "<li></li>"
  }

  //boutton pour afficher l'historique des scores
  $( "#scorer" ).click(function() {
    $( "#sResult" ).toggle( "slow");
  });


  function shuffleBut() {

    //reset la class des boutton a l'original
    chA.classList.add("btn-primary")
    chB.classList.add("btn-primary")
    chC.classList.add("btn-primary")
    chD.classList.add("btn-primary")
    chA.classList.remove("btn-danger")
    chB.classList.remove("btn-danger")
    chC.classList.remove("btn-danger")
    chD.classList.remove("btn-danger")
    chA.classList.remove("btn-success")
    chB.classList.remove("btn-success")
    chC.classList.remove("btn-success")
    chD.classList.remove("btn-success")

    //met les 4 bouttons de choix possible dans un ordre aleatoire
    var parent = $("#buttons");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  }


  function execut() {
    var elements = document.getElementsByName('c1');

    //reactive les bouttons
    for(var i = 0; i < elements.length; i++) {
      elements[i].disabled = false
    }

    //reaffiche la question
    $(".q1").fadeIn(200);

    shuffleBut();

    //genere le contenu de la question et des choix de réponse aleatoirement
    var rand=Math.floor(Math.random()*kn5.length);
    var rand1=Math.floor(Math.random()*kn5.length);
    var rand2=Math.floor(Math.random()*kn5.length);
    var rand3=Math.floor(Math.random()*kn5.length);
    mqg=kn5[rand][0];
    mqk=kn5[rand][1];
    mqh=kn5[rand][2];
    mqa=kn5[rand][3];
    mq.innerHTML= mqg;
    chA.innerHTML="<div id='mqss'>"+mqa+"</div>"+"<br>"+"<div id='mqas'>"+mqh+"<br>"+mqk+"</div>";
    chB.innerHTML="<div id='mqss'>"+kn5[rand1][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[rand1][2]+"<br>"+kn5[rand1][1]+"</div>";
    chC.innerHTML="<div id='mqss'>"+kn5[rand2][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[rand2][2]+"<br>"+kn5[rand2][1]+"</div>";
    chD.innerHTML="<div id='mqss'>"+kn5[rand3][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[rand3][2]+"<br>"+kn5[rand3][1]+"</div>";

    //tant que 2 choix de réponses sont indentique ou qu'un choix de réponse est identique a la bonne réponse redo un random
    while (chA.innerHTML==chB.innerHTML || chA.innerHTML==chC.innerHTML || chA.innerHTML==chD.innerHTML
      || chB.innerHTML==chC.innerHTML || chB.innerHTML==chD.innerHTML
      ||chC.innerHTML==chD.innerHTML) {
      var reRand=Math.floor(Math.random()*kn5.length);
      var reRand2=Math.floor(Math.random()*kn5.length);
      var reRand3=Math.floor(Math.random()*kn5.length);
      chB.innerHTML="<div id='mqss'>"+kn5[reRand][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[reRand][2]+"<br>"+kn5[reRand][1]+"</div>";
      chC.innerHTML="<div id='mqss'>"+kn5[reRand2][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[reRand2][2]+"<br>"+kn5[reRand2][1]+"</div>";
      chD.innerHTML="<div id='mqss'>"+kn5[reRand3][3]+"</div>"+"<br>"+"<div id='mqas'>"+kn5[reRand3][2]+"<br>"+kn5[reRand3][1]+"</div>";
    }
  }
  // verifie si le boutton cliqué est == a la bonne réponse de la question
  function verif() {
    var elements = document.getElementsByName('c1');
    for(var i = 0; i < elements.length; i++) {

        elements[i].onclick = function () {
            // si correct change class du boutton et disables tout les bouttons, met a jour le score, passe a la question suivante
            if (this.id==chA.id) {
              this.classList.remove("btn-primary")
              this.classList.add("btn-success")
              for(var i = 0; i < elements.length; i++) {
                elements[i].disabled = true
              }
              $(".q1").fadeOut(950);
              correct++;
              score();
              setTimeout(function(){
                execut();
              }, 900);

            // si faux change class du buttons et disable it, met le score a jour
            } else {
              this.classList.remove("btn-primary")
              this.classList.add("btn-danger")
              this.disabled= true;

              wrong++;
              score();

            }
        }
    }
  }
