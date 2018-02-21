// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    if (currency < 0) {
      return obj;
    }
    if (currency > 10000) {
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

  while(currency>=0){
    if (sum > 49){
      obj['H'] = Math.floor(currency/50);
      currency = currency - 50*obj['H'];
    }
    if ((currency > 24) && (currency < 50)) {
      obj['Q'] = Math.floor(currency/25)
      currency = currency - 25*obj['Q']
    }
    if ((currency > 9) && (currency < 25)) {
      obj['D'] = Math.floor(currency/10)
      currency = currency - 10*obj['D'];
    }
    if ((currency > 4) && (currency < 10)) {
      obj['N'] = Math.floor(currency/5)
      currency = currency - 5*obj['N'];
    }
    if ((currency > 0) && (currency < 5)) {
      obj['P'] = Math.floor(currency/1)
      currency = currency - 1*obj['P'];
    }
  }
  return obj;
}
