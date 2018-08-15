function chessboard(number) {
    let result = "<div class=\"chessboard\">\n";

    for (let row = 0; row < number; row++) {
        result+="  <div>\n";
        let color = "";
        if(row % 2 === 0){
            color = "black";
        }else{
            color = "white";
        }
        for(let col = 0; col < number; col++){
            result+=`    <span class="${color}"></span>\n`;
            if(color === "white"){
                color = "black";
            }
            else{
                color = "white";
            }
        }
        result+="  </div>\n";
    }
    result+="</div>\n";

    console.log(result);
}

chessboard(10);