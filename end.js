const username=document.getElementById('username');
const saveScoreBtn=document.getElementById('saveScoreBtn');
const mostRecentScore=localStorage.getItem('mostRecentScore');
const finalScore=document.getElementById('finalScore');

const highScores= JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES= 5;

finalScore.innerText=mostRecentScore

username.addEventListener("keyup", function(){
    console.log('username.value');
    saveScoreBtn.disabled=!username.value;
})

function saveHighScore(e){
    e.preventDefault();
    const score={
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    //Sort array in descending order
    
    highScores.sort( (a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("./index.html");
}



