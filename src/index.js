// You should implement your task here.

module.exports = function towelSort(matrix) {
	newMatrix = [];
	if (!matrix) {
		return []
	}
		if (!matrix.length){
			return[]
		}
		else
		 for (i = 0; i <= matrix.length - 1; i++) {
			  newMatrix[i] = matrix[i];
			  if ((i + 1) % 2 == 0) {
					newMatrix[i] = matrix[i].reverse();
			  }
		 }
		return newMatrix.flat();
};
