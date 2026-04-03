let one=(Math.floor(Math.random()*6))+1
let two=(Math.floor(Math.random()*6))+1
let blackjack=false
let isalive=true
let arr=[one,two];
let sum=one+two;
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
function newcard()
{
    if(isalive==true&&blackjack==false)
    {
    let ele=(Math.floor(Math.random()*6))+1
    arr.push(ele)
    sum+=ele
    startagain()
    }
    else if(blackjack==false){
        msg="sorry u can't draw new card anymore🥲😭"
    }
    else{
        msg="hey "+playerdetail.name+" you already won🥳 ur chompion you know  with "+playerdetail.coins+" coins at you"
    }
    dis.textContent=msg
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
}
function start()
{
    startagain()
}