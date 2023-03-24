const data=[
    {
        id:101,
        name:"football",
        price:100,
        quantity:1
    },
    {
        id:102,
        name:"baseball",
        price:130,
        quantity:1
    },
    {
        id:103,
        name:"tennisball",
        price:120,
        quantity:1
    },
    {
        id:104,
        name:"soccer",
        price:150,
        quantity:1
    },
    {
        id:105,
        name:"basketball",
        price:200,
        quantity:1
    }
];
let amount=700;
const arr=data;

$(document).ready(function(){
    let html=display(arr,"");
    $("#tbody").html(html);
    $("#total_amount").html(amount);
});
$(document).on("click","#increment",function(){
    let id=this.getAttribute("data-inc");
    let index=this.getAttribute("data-inc-index");
    arr[index].quantity++;
   $(`#quantity${id}`).html(arr[index].quantity);
   amount+=arr[index].price;
   $("#total_amount").html(amount);
});
$(document).on("click","#decrement",function(){
    let id=this.getAttribute("data-dec");
    let index=this.getAttribute("data-dec-index");
    let deldata="";
    if(arr[index].quantity==1){
        delte(arr,index);
        deldata=display(arr,"");
        $("#tbody").html(deldata);
        return;
    }
    arr[index].quantity--;
   $(`#quantity${id}`).html(arr[index].quantity);
   amount-=arr[index].price;
   $("#total_amount").html(amount);
});
$(document).on("click","#remove",function(){
   let index=this.getAttribute("data-rem-index");
   if(arr.length==1){
    emptycart();
    return;
   }
   delte(arr,index);
   let html=display(arr,"");
   $("#tbody").html(html);
})
function display(arr,html){
    arr.map((e,index)=>{
  html+=`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.price}</td><td><button id='increment' data-inc-index=${index} data-inc=${e.id} data-inc-quan=${e.quantity} data-inc-price=${e.price}>+</button><span id='quantity${e.id}'>${e.quantity}</span><button id='decrement' data-dec-index=${index} data-dec=${e.id} data-dec-quan=${e.quantity} data-dec-price=${e.price}>-</button></td><td id='remove' data-rem-price=${e.price} data-rem-quan=${e.quantity} data-rem-index=${index}><button>REMOVE</button></td></tr>`;
    });
    return html;
}
function delte(arr,index){
    amount-=arr[index].quantity*arr[index].price;
    $("#total_amount").html(amount);
    let filt=arr.filter((e,i)=>{
        if(index==i){
            arr.splice(i,1);
        }
    });
    
}
function emptycart(){
    $("#tbody").html("");
    $("#total_amount").html(0);
    $("#total_amount").css({"color":"red"});
    $("#emptycart").hide();
}