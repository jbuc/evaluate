Date.prototype.getFiscal = function() {
  var date = new Date(this.getTime());
  
  function pad(num, size) {
      var s = num+"";
      while (s.length < size) s = "0" + s;
      return s;
  }

  date.setHours(0, 0, 0, 0);
  
  // Thursday in current week decides the year.

  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 1, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  var wn = 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                        - 3 + (week1.getDay() + 6) % 7) / 7);
  var yr = (wn <= 0) ? date.getFullYear() - 1 : date.getFullYear();
  var wn = (wn <= 0) ? 52 + wn : wn;
  return {
      "week" : wn,
      "year": yr,
      "daystamp": date.getFullYear() + "" + pad(date.getMonth() + 1,2) + "" + pad(date.getDate(),2), 
      "weekstamp" : yr + "-wk" + pad(wn,2),
      "date":this};
}

Array.prototype.average = function(){
  var sum = this.reduce(function(a,c){ return a+c; });
  return sum / this.length;
};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};