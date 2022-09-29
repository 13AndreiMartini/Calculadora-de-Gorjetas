function calcTip(event){
    event.preventDefault();
    
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | service == ''){
        alert("Por favor, preencha os valores")
        return;
    }

    if(numOfPeople== '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('tipDiv').style.display="none";
    } else{
        let totalDiv = (bill * service) / numOfPeople;
        totalDiv = totalDiv.toFixed(2);
        document.getElementById('tipDiv').innerHTML = 'R$ ' + totalDiv + ' para cada';
        document.getElementById('tipDiv').style.display="block";
    }

    let total = (bill * service);
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";    
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('tipDiv').style.display = "none";

document.getElementById('frmtips').addEventListener('submit', calcTip);