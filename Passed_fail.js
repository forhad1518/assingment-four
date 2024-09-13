function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return "Invalid Input"
    }

    if(obj.isFFamily === true){
        obj.isFFamily = 20;
    }
    const total = obj.isFFamily + obj.testScore + obj.schoolGrade;
    if(total >= 80){
        return true
    }
    return false
}