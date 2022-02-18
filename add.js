
document.getElementById('deposit-submit').addEventListener('click', function () {

    const depositInput = document.getElementById('salary-input');

    const depositText = depositInput.value;
    const salaryTotal = parseFloat(depositText);

    if (salaryTotal < 1 ) {
        alert( 'salary can not be lease then one' );
        return;
    }

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
    newBalanceTotal = salaryTotal1 - totalCost;
    balanceTotal.innerHTML = cash;
    depositInput.value = '';
});

// deposit area add info
document.getElementById('saving').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input');
    const savingText = savingInput.value;
    const savingTotal = parseFloat(savingText);
    // console.log(savingTotal);

    const savingTitle = document.getElementById('total-balance');
    const savingAmountTitle = savingTitle.innerHTML;
    const savingAmountText = parseFloat(savingAmountTitle);
    const savingAmountTotal = (savingAmountText * savingTotal) / 100;
    // saving-amount maintaining 
    document.getElementById('saving-amount').innerText = savingAmountTotal;
    // remaining balance add information 
    document.getElementById('remaining').innerText = savingAmountText - savingAmountTotal;

});
