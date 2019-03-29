function inform() {
    let testScore = Number(document.getElementById('testScore').value);
    let midScore = Number(document.getElementById('midScore').value);
    let finalScore = Number(document.getElementById('finalScore').value);
    if (testScore<0||testScore>10){
        alert("Please input your real scores");
        document.getElementById('testScore').value="";
    }
    if (midScore<0||midScore>10){
        alert("Please input your real scores");
        document.getElementById('midScore').value="";
    }
    if (finalScore<0||finalScoree>10){
        alert("Please input your real scores");
        document.getElementById('finalScore').value="";
    }
}
function Check() {
    let testScore = Number(document.getElementById('testScore').value);
    let midScore = Number(document.getElementById('midScore').value);
    let finalScore = Number(document.getElementById('finalScore').value);
    result = testScore*0.1 + midScore*0.3 + finalScore * 0.6;
    if (result>=9.5) {
        result = "Excellent Student"
    } else if (result<9.5&&result>=8.5) {
        result = "Very Good Student"
    } else if (result<8.5&&result>=8) {
        result = "Good Student"
    } else if (result<8&&result>=6.5) {
        result = "Average Good Student"
    } else if (result<6.5&&result>=5) {
        result = "Average Student"
    } else if (result<5&&result>=3.5) {
        result = "Below Average Student"
    } else {
        result = "Struggling Student"
    }
    document.getElementById("result").innerHTML = result;
}