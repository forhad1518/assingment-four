function checkDigitsInName(name) {
    if (typeof name !== 'string'){
        return "Invalid Input"
    }

    else{
        if(typeof name === 'string'){
            for (let letter of name){
                if (letter >= '0' && letter <= '9'){
                    return true
                }
            }
        }
        
        return false
    }
}
