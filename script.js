function register(){
    let user=document.getElementById("uid").value;
    let mail=document.getElementById("mail").value;
    let pass=document.getElementById("pass").value;

    if(localStorage.getItem(user)){
        alert("Account already exists. Please login to continue!");
        window.location='./index.html'
    }else{
        let credentials={
            name: user,
            mail:mail,
            pwd:pass
        };
        localStorage.setItem(name,JSON.stringify(credentials));
        window.location.href="./index.html";
        alert("Account Created");
    }
}


function login() {
    let username = document.getElementById('uid').value;
    console.log(username);
    localStorage.setItem('USERNAME', username);
    window.location='./home.html'
}

username=localStorage.getItem('USERNAME');
console.log(username);
uid.innerHTML=`<i class="fa-solid fa-user fa-bounce" style="color: #25745c; "></i>Welcome ${username}`



let totalIncome = 0;
let totalExpense = 0;

function addIncome() {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('inamt').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    totalIncome += amount;
    document.getElementById('totalincome').innerHTML = `Rs ${totalIncome}/-`;

    // Optional: Clear input fields after adding
    document.getElementById('type').value = '';
    document.getElementById('inamt').value = '';


    const table = document.getElementById('incometable');
    const row = table.insertRow();
    const cellType = row.insertCell(0);
    const cellAmount = row.insertCell(1);

    cellType.innerHTML = type;
    cellAmount.innerHTML = `Rs ${amount}/-`;

    document.getElementById('type').value = '';
    document.getElementById('inamt').value = '';
}

function addExpense() {
    const type = document.getElementById('exptype').value;
    const amount = parseFloat(document.getElementById('expamnt').value);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    if (amount > totalIncome) {
        alert("Expense amount exceeds total income!");
        return;
    }

    totalExpense += amount;
    totalIncome -= amount;

    document.getElementById('totalexpense').innerHTML = `Rs ${totalExpense}/-`;
    document.getElementById('totalincome').innerHTML = `Rs ${totalIncome}/-`;

    const table = document.getElementById('expensetable');
    const row = table.insertRow();
    const cellType = row.insertCell(0);
    const cellAmount = row.insertCell(1);

    cellType.innerHTML = type;
    cellAmount.innerHTML = `Rs ${amount}/-`;

    document.getElementById('exptype').value = '';
    document.getElementById('expamnt').value = '';
}

function clearAll() {
    totalIncome = 0;
    totalExpense = 0;
    document.getElementById('totalincome').innerHTML = `Rs ${totalIncome}/-`;
    document.getElementById('totalexpense').innerHTML = `Rs ${totalExpense}/-`;

    document.getElementById('incometable').innerHTML = '';
    document.getElementById('expensetable').innerHTML = '';
}