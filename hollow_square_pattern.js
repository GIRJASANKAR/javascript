function printFirstAndLast(n){
    let str='';
    for(let i=1;i<=n;i++){
        if(i==1 || i== n){
          str+='*';
        }else{
          str+=' ';
        }
    }
    console.log(str);
  }
  
  function printAll(n){
    let str='';
    for(let i=1;i<=n;i++){
        str+='*';
    }
    console.log(str);
  }
  
  
  for(let i=1;i<=5;i++){
    if(i==1 || i==5){
      printAll(5);
    }else{
      printFirstAndLast(5);
    }
  }
  