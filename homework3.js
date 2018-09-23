<script>

const a = function(x,y,z) {
	
    return a*b-c;
}

const b = function(){
	
	return a;
} 
const c = function(x,y) {
	x = x+1;
	y = 2*y;	
}

const d = function(str1, str2, str3){
	
if (str1.length>str2.length && str1.length>str3.length){
		return str1
	}
else if (str2.length>str1.length && str2.length>str3.length) 
{
	return str2
}
else 
	return str3
}



const e = function(a,b) {
	if (a === b) {
		return 0
	}
else if (a>b) {
	return 1
}
else  {
	return -1
}
}
const multiply = function(a,b) {
	
	return a*b
}
const divide = function(a,b) {
	
	return a/b
}
const triangleArea = function(base,height){
	 return divide(multiply(base,height),2);
}

const numLength = function(a){
	
	a=a+"o";
	return a.length-1;
}
	const f = function(str1,str2,num){
		 sum = str1+str2;
		if (sum.length>num){
			return 1;}
			else return -1; 
     }
	const runStuff = function(num1, num2, str){

    if (str === 'rectangle'){
     return num1*num2;
      } else if (str === 'triangle'){
       return triangleArea(num1, num2);
         } else 
         return -1;
                    
      };


</script>
