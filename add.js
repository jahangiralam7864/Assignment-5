document.getElementById('deposit-submit').addEventListener('click', function () {
    const depositInput = document.getElementById('salary-input');
    const depositText = depositInput.value;
    const salaryTotal = parseFloat(depositText);
    // console.log(salaryTotal);

    // cost information add
    const foodAmount = document.getElementById('food');
    const foodCost = foodAmount.value;
    const foodTotal = parseFloat(foodCost);

    const rentAmount = document.getElementById('rent');
    const rentCost = rentAmount.value;
    const rentTotal = parseFloat(rentCost);

    const depositCost = document.getElementById('clothes');
    const clothesCost = depositCost.value;
    const clothesTotal = parseFloat(clothesCost);
    const totalCost = foodTotal + rentTotal + clothesTotal;
    const cash = salaryTotal - totalCost;

    // total expenses add information
    const expenses = document.getElementById('total-expenses');
    const expensesValue = expenses.value;
    const expensesParse = parseFloat(expensesValue);
    const expensesTotal = totalCost + expensesParse;
    expenses.innerHTML = totalCost;


    // total balance check information
    const balanceTotal = document.getElementById('total-balance');
    const deposit = balanceTotal.value;
    const salaryTotal1 = parseFloat(deposit);
    const newBalanceTotal = salaryTotal1 - totalCost;
    balanceTotal.innerHTML = cash;

});
