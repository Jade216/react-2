function unroll(square) {
    let result = [];
    let n = square.length;
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
  
    while (top <= bottom && left <= right) {
      // Traverse top row (left to right)
      for (let i = left; i <= right; i++) {
        result.push(square[top][i]);
      }
      top++;
  
      // Traverse right column (top to bottom)
      for (let i = top; i <= bottom; i++) {
        result.push(square[i][right]);
      }
      right--;
  
      // Traverse bottom row (right to left), if still valid
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          result.push(square[bottom][i]);
        }
        bottom--;
      }
  
      // Traverse left column (bottom to top), if still valid
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          result.push(square[i][left]);
        }
        left++;
      }
    }
  
    return result;
  }
  
module.exports = unroll;
