var defangIPaddr = function(address) {
    let str='';
    [...address].forEach((x)=>{
       if(x=='.'){
           str+="[.]";
       }else{
           str+=x;
       }
    })

    return str;
};