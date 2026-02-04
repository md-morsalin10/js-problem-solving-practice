// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// console.log(min)
function smallestName(strs){
    let min = strs[0]
    for(const str of strs){
      if(min.length >str.length){
        min = str;
      }  
    }
    return min;
}

const result = smallestName(heights2);
console.log(result)