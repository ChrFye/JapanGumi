

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
if ("score2" in localStorage) {
  var parsedScore = JSON.parse(localStorage.getItem('score2'));
  document.querySelector('#sResultP').innerHTML ="Total : "+"<span>"+parsedScore.good+"</span>"+" - "+"<span>"+parsedScore.bad+"</span>";
} else {
  var initialScore ={ "good":0,"bad":0 };
  localStorage.setItem("score2",JSON.stringify(initialScore));
}
//choix de réponses possibles
var answerRoman =[
  "Ka" , "Sa" , "Ta" , "Na" , "Ha" , "Ma" , "Ya" , "Ra" , "Wa" , "Ga" , "Za" , "Da" , "Ba" , "Pa" ,
  "Ki" , "Shi" , "Chi" , "Ni" , "Hi" , "Mi" , "Ri" , "Wi" , "Gi" , "ji" , "Bi" , "Pi" ,
  "Ku" , "Su" , "Tsu" , "Nu" , "Fu" , "Mu" , "Yu" , "Ru" , "Gu" , "Zu" , "Bu" , "Pu" ,
  "Ke" , "Se" , "Te" , "Ne" , "He" , "Me" , "Re" , "Ge" , "Ze" , "De" , "Be" , "Pe" ,
  "Ko" , "So" , "To" , "No" , "Ho" , "Mo" , "Yo" , "Ro" , "Wo" , "Go" , "Zo" , "Do" , "Bo" , "Po"

];

// question en [0] et bonne réponse en [1]
var questions1 = [
  ['ア','A'],
  ['イ','I'],
  ['ウ','U'],
  ['エ','E'],
  ['オ','O'],

  ['カ','KA'],
  ['キ','KI'],
  ['ク','KU'],
  ['ケ','KE'],
  ['コ','KO'],

  ['サ','SA'],
  ['シ','SHI'],
  ['ス','SU'],
  ['セ','SE'],
  ['ソ','SO'],

  ['タ','TA'],
  ['チ','CHI'],
  ['ツ','TSU'],
  ['テ','TE'],
  ['ト','TO'],

  ['ナ','NA'],
  ['ニ','NI'],
  ['ヌ','NU'],
  ['ネ','NE'],
  ['ノ','NO'],

  ['ハ','HA'],
  ['ヒ','HI'],
  ['フ','FU'],
  ['ヘ','HE'],
  ['ホ','HO'],

  ['マ','MA'],
  ['ミ','MI'],
  ['ム','MU'],
  ['メ','ME'],
  ['モ','MO'],

  ['ヤ','YA'],
  ['ユ','YU'],
  ['ヨ','YO'],

  ['ラ','RA'],
  ['リ','RI'],
  ['ル','RU'],
  ['レ','RE'],
  ['ロ','RO'],

  ['ワ ','WA'],
  ['ヲ ','WO'],

  ['ガ','GA'],
  ['ギ','GI'],
  ['グ','GU'],
  ['ゲ','GE'],
  ['ゴ','GO'],

  ['ザ','ZA'],
  ['ジ','JI'],
  ['ズ','ZU'],
  ['ゼ','ZE'],
  ['ゾ','ZO'],

  ['ダ','DA'],
  ['ヂ','JI(di)'],
  ['ヅ','ZU(du)'],
  ['デ','DE'],
  ['ド','DO'],

  ['バ','BA'],
  ['ビ','BI'],
  ['ブ','BU'],
  ['ベ','BE'],
  ['ボ','BO'],

  ['パ','PA'],
  ['ピ','PI'],
  ['プ','PU'],
  ['ペ','PE'],
  ['ポ','PO'],


];


  //compteur du score actuel
  function score() {
   mr.innerHTML="Vous avez <span>"+correct+"</span> bonnes réponses et <span>"+wrong+"</span> mauvaises réponses";
  }

  //reset le score actuel et l'affiche dans l'historique + ajoute le score au score total
  function scoreReset() {
    var parsedScore = JSON.parse(localStorage.getItem('score2'));

    parsedScore.good += correct;
    parsedScore.bad += wrong;
    localStorage.setItem('score2', JSON.stringify(parsedScore));
    var parsedScoreR = JSON.parse(localStorage.getItem('score2'));
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
    var rand=Math.floor(Math.random()*questions1.length);
    var rand1=Math.floor(Math.random()*answerRoman.length);
    var rand2=Math.floor(Math.random()*answerRoman.length);
    var rand3=Math.floor(Math.random()*answerRoman.length);
    mqg=questions1[rand][0];
    mqa=questions1[rand][1];
    mq.innerHTML=mqg;
    chA.innerHTML=questions1[rand][1];
    chB.innerHTML=answerRoman[rand1].toUpperCase();
    chC.innerHTML=answerRoman[rand2].toUpperCase();
    chD.innerHTML=answerRoman[rand3].toUpperCase();

    //tant que 2 choix de réponses sont indentique ou qu'un choix de réponse est identique a la bonne réponse redo un random
    while (chA.innerHTML==chB.innerHTML || chA.innerHTML==chC.innerHTML || chA.innerHTML==chD.innerHTML
      || chB.innerHTML==chC.innerHTML || chB.innerHTML==chD.innerHTML
      ||chC.innerHTML==chD.innerHTML) {
      var reRand=Math.floor(Math.random()*answerRoman.length);
      var reRand2=Math.floor(Math.random()*answerRoman.length);
      var reRand3=Math.floor(Math.random()*answerRoman.length);
        chB.innerHTML=answerRoman[reRand].toUpperCase();
        chC.innerHTML=answerRoman[reRand2].toUpperCase();
        chD.innerHTML=answerRoman[reRand3].toUpperCase();


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
