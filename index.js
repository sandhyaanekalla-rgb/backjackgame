let arr=[];
let blackjack = false;
let sum=0;
let isalive = true;
let playerdetail={
    name:"Sandhya",
    coins:"$421"
};
let det=document.querySelector("#details")
det.textContent="Good to see "+playerdetail.name+"🥰😍😁"
det.textContent+="coins count :"+playerdetail.coins
let dis=document.querySelector("#display")
let card=document.querySelector("#cards")
let sum1=document.getElementById("sum")
let msg1=""
function newcard()
{
    if(isalive==true&&blackjack==false)
    {
    let ele=(Math.floor(Math.random()*10))+1
    arr.push(ele)
    sum+=ele
    startagain()
    }
    else if(blackjack==false){
        msg1="sorry u can't draw new card anymore🥲😭"
        dis.textContent=msg1
    }
    else{
        msg1="hey "+playerdetail.name+" you already won🥳 ur chompion you know  with "+playerdetail.coins+" coins at you .."
        dis.textContent=msg1
    }
    
}

function startagain()
{
    card.textContent="CARDS ARE : "
    for(let i=0;i<arr.length;i++)
    {
        card.textContent+=arr[i]+" "
    }
    sum1.textContent="Sum :"+sum
    let msg=""
    if(sum==21)
    {
        blackjack=true
        msg="Hurrayy!! U won you are blackJack😇🤩🥳😁👋"
    }
    else if(sum<21)
    {
        msg="NOT YET! Try Again😆🥹"
    }
    else 
    {
        isalive=false
        msg="Yappp!🙎🤦Sorry u lost try again if you want🫵"
        
       
    }
    dis.textContent=msg
}let s=0;
function start()
{
    if(s==0){
    arr=[];
    blackjack = false;
    isalive = true;

    arr.push((Math.floor(Math.random()*10)+1))
    arr.push((Math.floor(Math.random()*10)+1))
    sum=0
   for(let i=0;i<arr.length;i++)
   {
    sum+=arr[i];
   }s=1;
   startagain()
}
else{
        let msg1="already started!! u can restart"
        dis.textContent=msg1;
}
}
function re()
{
    
    arr=[];
    blackjack = false;
    isalive = true;

    arr.push((Math.floor(Math.random()*10)+1))
    arr.push((Math.floor(Math.random()*10)+1))
    sum=0
   for(let i=0;i<arr.length;i++)
   {
    sum+=arr[i];
   }s=1;
   startagain()
    
}