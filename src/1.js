function towelSort(matrix){
	newMatrix = [];
	if (matrix.flat().length != 0) {
		console.log(matrix.flat().length)
		 for (i = 0; i <= matrix.length - 1; i++) {
			  newMatrix[i] = matrix[i];
			  if ((i + 1) % 2 == 0) {
					newMatrix[i] = matrix[i].reverse();
			  }
		 }
		return newMatrix.flat();
	}else
	return matrix;
}

matrix=[([])];
//console.log (newMatrix.length)
console.log(towelSort(matrix))		  