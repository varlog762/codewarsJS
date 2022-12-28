function findShort(s){
    let strArr = s.split(' '),
        lengthArr = [];

    for (let value of strArr) {
        lengthArr.push(value.length);
    }

    function sortfunction(a, b){
        return (a - b);
      }
    
    return lengthArr.sort(sortfunction)[0];
}

console.log(findShort('DarkCoin Steem Steem Dash LiteCoin Ethereum BTC Dogecoin Lisk ProofOfWork'));