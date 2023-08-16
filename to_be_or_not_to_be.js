var expect = function(val) {
    return {
        toBe:function (val1){
        if(val1!==val) throw new Error("Not Equal");
        else return true;
        },
        notToBe:function (val2){
          if(val===val2) throw new Error("Equal");
         else return true;
        },
    }
};
