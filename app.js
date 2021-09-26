const buyPrice = document.querySelector("#input1");
const totalQuantity = document.querySelector("#input2");
const currentPrice = document.querySelector("#input3");
const calcButton = document.querySelector("#button");
const result = document.querySelector("#output");


calcButton.addEventListener("click",showResult);

function showResult(){
    var buy = Number(buyPrice.value);
    var current = Number(currentPrice.value);
    var quantity = Number(totalQuantity.value);

    // buy - 100, current - 90
    // loss calculation
    if(buy > current){
        var loss = buy - current;
        var lossAmt = loss*quantity;
        var lossPer = (loss/buy)*100;
        result.innerText = `You made a loss of ${loss} & Your loss percentage is ${lossPer}%`;
        

    // profit calculation    
    }else if(current > buy) {
        var profit = current - buy;
        var proAmt = profit*quantity;
        var proPer = (profit/buy)*100;
        result.innerText = `Wow, you made a profit of ${proAmt} & your profit percentage is ${proPer}%`; 
    }
    //no profit-no loss
    else{
        result.innerText = "Be patient, hold your stocks longer to earn profits";
    }

    

}

