document.querySelector(".numbers").onclick=function(){
	let target=event.target
	let value=target.innerHTML
	let input1=document.querySelector("input")
	if (target.classList.contains("number")) {
     if (input1.value=="0"){
     	input1.value=value
     }
     else{
     	 input1.value+=value
     }
}
    if (target.classList.contains("function")){
	let operator=["+","-","/","*","."];
	let exp=input1.value
	let last=exp[exp.length-1]
	if (operator.indexOf(last) !=-1){
		exp=exp.replace(/.$/,value);
		input1.value=exp
	}
    else{
    	input1.value+=value
    }
}


  if (target.classList.contains("calc")){
  	let input2=input1.value 
  	let result=eval(input2)
  	input1.value=result
  }

  if (target.classList.contains("delete_all")){
  	input1.value=""
  }
  
  if (target.classList.contains("delete_last")){
  	let input2=input1.value
  	input2=input2.substring(0,input2.length-1)
  	input1.value=input2
  }

 


}