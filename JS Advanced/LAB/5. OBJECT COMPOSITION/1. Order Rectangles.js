function orderRectangles(matrix) {

    for (let i = 0; i < matrix.length; i++) {

        matrix[i] = {
            width: matrix[i][0],
            height: matrix[i][1],
            area: function () {
                return this.width * this.height;
            },
            compareTo(otherRect) {
                let diff = otherRect.area() - this.area();
                if(diff === 0){
                    return otherRect.width - this.width;
                }
                return diff;
            }
        }
    }
    return matrix.sort((a,b) => a.compareTo(b));
}

console.log(orderRectangles([[10, 5], [5, 12]]));