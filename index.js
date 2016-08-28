
function sqr(a,b,c){
    if (Number(a)!==0) {
          var des=((b*b)-(4*a*c));
          if(des>0){
                    return [(-b+Math.sqrt(des))/(2*a),(-b-Math.sqrt(des))/(2*a)];
                }
                else if(des==0){
                  return (-b)/2*a +' '+'X1=X2';
                    }
                        else{
                         return 'no sense';
                        }
    }else{
        return 'Its no sense';
    }
}
alert('for resolving a*x^2+b*x+c=0 you need to find out what are x1 and x2' );
document.write(sqr(  prompt('enter a'),  prompt('enter b'),  prompt('enter c')) );











// function sqr(a,b,c){
//  return /*(-b+*/Math.sqrt(4*a*c)/(2*a);
    
// }
// document.write(sqr(1,4,3));

// JavaScript File
//var hello='Hello World!';
//document.write(hello);
//console.log(hello);
//alert(hello);

// var num=10;
// var str="hello";
// var result=num-str;
// document.write(result);

// function sum(a,b){
//     var result = a+b;
//     return result;
// }
// function print(val){
//     document.write(val);
//     document.write('<br>')
// }
// function lg(a,b){
//     if (a>b){
//         return a;
//     }else{
//         return b;
//     }

    
// }
// // 
// print(lg(10,20));
// print(lg(200,-20));
// print(lg(-10,-20));
// print(Math.sqrt(256));
// var num=String(prompt("enter"));
