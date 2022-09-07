function rangeOfNumbers(startNum, endNum) {
   if (startNum > endNum || startNum < 1 || endNum < 1) {
      return [];
   } else {
      let leng = endNum - startNum;
      if (leng < 0) {
         return true;
      }
      const countArray = rangeOfNumbers(startNum + 1, endNum);
      countArray.unshift(startNum);
      leng--;
      return countArray;
   }
};

