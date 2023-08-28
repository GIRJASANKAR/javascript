var isPalindrome = function(x) {
    var re = 0; var cp = x;
   while (cp > 0) {
    const digit = cp % 10;
    re = re * 10 + digit;
    cp = ~~(cp / 10);
  }
  return re == x;
};




