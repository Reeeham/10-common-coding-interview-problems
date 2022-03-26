function largestRectangle(heights) {
    let max_area = 0;
    let left = 0;
    let right = 0;
    for(let i = 0; i <= heights.length; i++) {
        left = i;
        while(left-1 >=0 && heights[left-1] >= heights[i]) {
            left -= 1;
        }
        right = i;
        while(right+1 < heights.length && heights[right + 1] >= heights[i]){
            right += 1;
        }
        let newArea = heights[i] * (right - left + 1);
        max_area = Math.max(max_area, newArea) || max_area;
    }

    return max_area;
}

var largestRectangleArea = function(heights) {
    var len = heights.length;
    var stack = [];
    var max = 0;
    var h = 0;
    var w = 0;
  
    for (var i = 0; i <= len; i++) {
      while (stack.length && (i === len || heights[i] <= heights[stack[stack.length - 1]])) {
        h = heights[stack.pop()];
        w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        max = Math.max(max, h * w);
      }
      stack.push(i);
    }
  
    return max;
  };
const heights = [3,2,4,5,7,6,1,3,8,9,11,10,7,5,2,6];
console.log(largestRectangleArea(heights))