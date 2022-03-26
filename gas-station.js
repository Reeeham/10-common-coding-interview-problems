const gas = [1,5,3,3,5,3,1,3,4,5]
const cost = [5,2,2,8,2,4,2,5,1,2]
//output: 8

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 const canTraverse = (gas, cost) => {
    let start = 0;
    let tank = 0;
    let total = 0;
  
    for (let i = 0; i < gas.length; i++) {
      const diff = gas[i] - cost[i];

      tank += diff;
      total += diff;
  
      // Cannot reach to the next station
      if (tank < 0) {
        // Reset the gas tank
        tank = 0;
        // Try from next position
        start = i + 1;
      }
    }
  
    return total >= 0 ? start : -1;
  };
console.log(canTraverse(gas,cost));
