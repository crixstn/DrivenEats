let option1;
let price1;
function selectFood(food){

    const check = document.querySelector('.menu1 .check');

    if ( check !== null ){
        check.remove(); 
    }

     food.innerHTML += `<div class="check">
    <ion-icon class="check-icon" name="checkmark-circle"></ion-icon>
  </div>`

    option1 = food.querySelector('.card-title').innerHTML;

    value1 = food.querySelector('.price').innerHTML.replace(",",".");
    price1 = Number(value1);
    
    activateButton()
}

let option2;
let price2;
function selectDrink(drink){

    const check = document.querySelector('.menu2 .check');

    if ( check !== null ){
        check.remove(); 
    }

     drink.innerHTML += `<div class="check">
    <ion-icon class="check-icon" name="checkmark-circle"></ion-icon>
  </div>`

    option2 = drink.querySelector('.card-title').innerHTML;

    value2 = drink.querySelector('.price').innerHTML.replace(",",".");
    price2 = Number(value2)

    activateButton()
}

let option3;
let price3;
function selectDessert(dessert){

    const check = document.querySelector('.menu3 .check');

    if ( check !== null ){
        check.remove(); 
    }

     dessert.innerHTML += `<div class="check">
    <ion-icon class="check-icon" name="checkmark-circle"></ion-icon>
  </div>`

    option3 = dessert.querySelector('.card-title').innerHTML;

    value3 = dessert.querySelector('.price').innerHTML.replace(",",".");
    price3 = Number(value3)

    activateButton()
}

function activateButton(){

    const textButton = document.querySelector('.text-button');

    if( option1 !== undefined){
        textButton.innerHTML = `Selecione mais 2 itens <br>
        para fechar o pedido`
        if( option2 !== undefined){
            textButton.innerHTML = `Selecione mais 1 item <br>
        para fechar o pedido`
            if( option3 !== undefined){
                const finishButton = document.querySelector('.finish-button');
                finishButton.classList.add('active');

                textButton.innerHTML = `Fechar pedido`
            }
                
         }
    }
}

let nameClient;
let address;
function next(){
    if(option1 && option2 && option3 !== undefined){
        nameAddress = document.querySelector('.bonus2');
        nameAddress.classList.remove('hidden');
    }else{
        const alert = document.querySelector('.alert-bonus');
        alert.classList.remove('hidden');
    }
}

function ok(){
    const alert = document.querySelector('.alert-bonus');
    alert.classList.add('hidden');
}

function goToFinish(){

    nameClient = document.querySelector(".name").value;

    address = document.querySelector(".address").value;

    nameAddress = document.querySelector('.bonus2');
    nameAddress.classList.add('hidden')

    confirmationScreen = document.querySelector('.bonus');
    confirmationScreen.classList.remove('hidden')

    const item1 = document.querySelector('.title1');
    const item2 = document.querySelector('.title2');
    const item3 = document.querySelector('.title3');

    const value1 = document.querySelector('.price1');
    const value2 = document.querySelector('.price2');
    const value3 = document.querySelector('.price3');

    item1.innerHTML = option1;
    value1.innerHTML = price1.toFixed(2).replace(".",",");

    item2.innerHTML = option2;
    value2.innerHTML = price2.toFixed(2).replace(".",",");

    item3.innerHTML = option3;
    value3.innerHTML = price3.toFixed(2).replace(".",",");

    const priceTotal = price1 + price2 + price3;
    const total = document.querySelector('.price-total-text');
    total.innerHTML = priceTotal.toFixed(2).replace(".",",");
}

function finish(){

    const prices = price1 + price2 + price3;
    const total = prices.toFixed(2).replace(".",",");


    let mensage = `Olá gostaria de fazer o pedido: \n- Prato: ${option1} \n- Bebida: ${option2} \n- Sobremesa: ${option3} \n- Total: R$ ${total}  \n  \nNome: ${nameClient}\nEndereço: ${address}`;
    window.open(`https://wa.me/5531997774395?text=${encodeURIComponent(mensage)}`);

    confirmationScreen = document.querySelector('.bonus');
    confirmationScreen.classList.add('hidden');

    textThanks = document.querySelector('.text-thanks');
    textThanks.innerHTML = `Olá ${nameClient}! <br>Agradecemos pela preferencia, volte sempre!`

    thanksMessage = document.querySelector('.bonus3');
    thanksMessage.classList.remove('hidden');

}

function exit(){
   const message = document.querySelector('.bonus3');
    message.classList.add('hidden');

    cancel();
}

function cancel(){

    window.scrollTo({ top: 0, behavior: 'smooth' });

    confirmationScreen = document.querySelector('.bonus');
    confirmationScreen.classList.add('hidden');

    setTimeout("reload()", 350);
}

function reload(){
    window.location.reload(true)
}