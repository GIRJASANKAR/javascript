function printFirstAndLast(n){
  
    for(let i=1;i<=n;i++){
      let str='';
      for(let j=1;j<=n;j++){
        if(j==1 || j==n){
          str+='*';
        }else{
          str+='';
        }
      }
      console.log(str);
    }
  }
  
  function printAll(n){
    for(let i=1;i<=5;i++){
      let str='';
      for(j=1;j<=5;j++){
        str+='*';
      }
      console.log(str);
    }
  
  }
  
  
  printAll(5);