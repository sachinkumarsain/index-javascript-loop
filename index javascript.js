console.log("sachin babu")
let c=567;
switch(c){
    case 1: console.log("m");break;
    case 20: console.log("r");break;
    case 50: console.log("s");break;
    case 56: console.log("y");break;
    case 234: console.log("k");break;
    case 567: console.log("h");break;
    default :console.log("error")

}
let a=0;
while (a<=10){
    console.log(a);
    a++;
}
let d=0;
for(let d=0; d<100; d++){
    console.log(d)
}

for (i = 1; i <= 5; i++) {
    for (j = 1; j <= i; j++) {
        if (j % 2 == 0) {
            document.write("#")
        }
        else {
            document.write("@")
        }
    }
    document.write("<br>")
}
for (i = 1; i <= 5; i++) 
{
    for (j = 1; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>")
}
for(i=1; i<=5; i++){
    for( j=5;j>=i; j--){
        document.write(j)
    }
    document.write("<br>")
}