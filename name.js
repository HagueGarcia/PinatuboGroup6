var namePlayer1 = "Player1"
var namePlayer2 = "Player2"

function getNames(){
            namePlayer1 = document.getElementById("mpinput1").value;
            namePlayer2 = document.getElementById("mpinput2").value;
            console.log(namePlayer1);
            console.log(namePlayer2);
            
            if (namePlayer1 == "" && namePlayer2 == ""){
                document.getElementById("mpinput1").style.background = "red";
                document.getElementById("mpinput2").style.background = "red";
                document.getElementById("mpinput1").style.color = "white";
                document.getElementById("mpinput2").style.color = "white";
            }else if (namePlayer1 == namePlayer2){
                
            } else {
                alert("Winner of rock, paper, scissors gets to play first")
                 window.location = "game_easy.html";
            }
            
        }   