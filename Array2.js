let num;
let arr=new Array();
function rand()
{
    return Math.floor(Math.random()*900)+100;
}
for(i=0;i<10;i++)
{
    arr.push(rand());
}
size=arr.length
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("After Sorting:");
arr.sort();
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log("2nd Largest Number:")
console.log(arr[size-2]);
console.log("2nd Smallest Number:")
console.log(arr[1]);