let arr=new Array();

for(i = 1; i <= 100; i++)
{
    if(i % 11 == 0)
    {
        arr.push(i);
    }
}
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}