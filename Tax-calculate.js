function calculateTax(income, expenses) {
    if(income < expenses || expenses < 0){
        return "Invalid Input"
    }
    else{
        const profit = income - expenses;
        const tax = profit * .20;
        return tax
    }
}