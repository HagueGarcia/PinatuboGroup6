var namePlayer1 
var namePlayer2 

function getNames(){
            var namePlayer1 = document.getElementById("mpinput1").value;
            var namePlayer2 = document.getElementById("mpinput2").value;
            
            if (namePlayer1 == "" && namePlayer2 == ""){
                document.getElementById("mpinput1").style.background = "red";
                document.getElementById("mpinput2").style.background = "red";
                document.getElementById("mpinput1").style.color = "white";
                document.getElementById("mpinput2").style.color = "white";
            }else if (namePlayer1 == namePlayer2){
                
            } else {
                 window.location = "game_easy.html.html";
            }
            
        }        

var i = 0;
        
        var errorCount1, errorCount2;
        var Score1 = 0; var Score2 = 0;
        let list_med = ["DOG/ANIMALS", "TV/MOVIE", "CAR", "PLANTS", "MIRROR", "COMPUTER"];
        let list_easy_keywords = ["ANIMALS", "TV", "CARS", "TREES", "REFLECTION", "PC"];
        let listPoints = [ 52,11,6,8,5,5 ];
       
        //first player is player 1//
        var y = 1;
        var currentPlayer;
        var gamePoints1 = 0;
        var gamePoints2 = 0;
        var inArray = "";
        var equivPoints = "input first";
        var sec1, sec2;
        function closePopUp(){

          document.getElementById('popUp').style.display = "none";
          document.getElementById('popUpOverlay').style.display = "none";
          console.log('instructions closed');
          document.getElementById("turn").innerHTML = namePlayer1 + "\'s turn" ;
          console.log("player 1's turn");
          startTimer()
        };

        function startTimer() {

          var sec1 = 60;
          setInterval(function() {
            document.getElementById("time").innerHTML = "00" + " : " + sec1;
            sec1--;
            if (sec1 == 00) {
                document.getElementById('time').innerHTML = "Time's Up!";
                document.querySelector('#time').style.display = "none";
                document.getElementById('time2').style.display = "block";
                preTimer2()
                switchChar2()
              }
            }, 1000);

          }
          function switchChar2(){
            y = 2;
          }
          function preTimer2(){
            console.log(namePlayer2 + "\'s turn");

            startTimer2();
          }
          function forceEnd1(){
            sec = 00;
            document.querySelector('#time').style.display = "none";
            document.getElementById('time2').style.display = "block";
          }

          function startTimer2() {
            document.getElementById("turn").innerHTML = namePlayer2 + "\'s turn";
            sec2 = 60;
            setInterval(function() {
              document.getElementById("time2").innerHTML = "00" + " : " + sec2;
              sec2--;
              if (sec2 == 00) {
                document.getElementById('time2').innerHTML = "Time's Up!";
                document.querySelector('#time2').style.display = "none";
                document.getElementById("field").style.display = "none";

                console.log(Score1);
                console.log(Score2);
                }
              }, 1000);
            }

        function submitButton(){
          var answer;


          answer = document.getElementById('input').value;
          answer = String(answer);
          answer = answer.toUpperCase();
          console.log(answer);

          document.getElementById("input").value = null;

          if (y == 1){
            var correct1Total=0;

                    for (var j=0 ; j<8 ; j++){

                        if( list_easy[j] == answer ){
                        inArray = parseInt(j + 1);
                        console.log("top " + inArray + " in the survey");

                        var reveal = 'answer' + String(j+1);
                        document.getElementById(reveal).innerHTML = list_easy[j];
                        Score1 = Score1 + listPoints[j];
                        console.log("+ " + listPoints[j] + " points");
                        correct1Total++;
                      }
                        else if (list_easy_keywords[j] == answer) {

                        inArray = j + 1;
                        console.log(inArray);
                        var x = inArray;
                        console.log(typeof(inArray));
                        var reveal = 'answer' + String(inArray);
                        console.log(typeof(reveal));
                        document.getElementById(reveal).innerHTML = list_easy[j];

                        Score1 = parseInt(Score1 + listPoints[j]);
                        console.log("+ " + listPoints[j] + " points");
                        correct1Total++;

                        document.getElementById("ansPoint" + [j]).style.display = "block";
                      }
                    }
                        if (correct1Total == 0){
                        console.log("incorrect");
                        answer = null;
                        var wrongAnswer = "errors" + String(y);
                        var board = document.getElementById(wrongAnswer).textContent;
                        board = document.getElementById(wrongAnswer).innerHTML =  board + "X";

                      }
                        console.log(board);
                            if (board == "XXX"){


                              console.log(namePlayer1 + " error limit reached")
                              document.getElementById("turn").innerHTML = namePlayer2 + "\'s turn" ;

                              if (y != 2){
                                  forceEnd1();
                                  switchChar2();
                                  preTimer2()
                                 }
                            };


          }else if (y == 2){
            document.getElementById("time").style.display = "none"
            var correct2Total = 0;
              for (var j=0 ; j<8 ; j++){

                if( list_easy[j] == answer ){
                inArray = parseInt(j + 1);
                console.log("top " + inArray + " in the survey");

                var reveal = 'answer' + String(j+1);
                document.getElementById(reveal).innerHTML = list_easy[j];
                Score2 = Score2 + listPoints[j];
                console.log("+ " + listPoints[j] + " points");
                correct2Total++;
                }
                else if (list_easy_keywords[j] == answer) {

                inArray = j + 1;
                console.log(inArray);
                var x = inArray;
                console.log(typeof(inArray));
                var reveal = 'answer' + String(inArray);
                console.log(typeof(reveal));
                document.getElementById(reveal).innerHTML = list_easy[j];

                Score2 = parseInt(Score2 + listPoints[j]);
                console.log("+ " + listPoints[j] + " points");
                correct2Total++;

                equivPoints= "ansPoint" + x;
                var b = String(equivPoints);
                document.getElementById(b).style.display = "block";
                }
              }
              if (correct2Total == 0){
              console.log("incorrect");
              answer = null;
              var wrongAnswer = "errors" + String(y);
              var board = document.getElementById(wrongAnswer).textContent;
              board = document.getElementById(wrongAnswer).innerHTML =  board + "X";
              }
                  console.log(board);
                  if (board == "XXX"){

                    console.log("Player" + y + " error limit reached");
                    document.getElementById("input").style.display = "none";
                    document.getElementById("time2").style.display = "none";

                  }//close if
                }//close player2
            }//close submitButton