function gradstoDegrees(grad) {
    let gradToDegree = grad * 0.9 ;
    gradToDegree %= 360;

    if(gradToDegree < 0){
        console.log(360 + gradToDegree);
    }
    else if(gradToDegree >= 360){

        console.log(gradToDegree);
    }
    else{
        console.log(gradToDegree);
    }
}

gradstoDegrees(100);
gradstoDegrees(400);
gradstoDegrees(850);
gradstoDegrees(-50);
