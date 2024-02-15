export function calculateAdjustedAmount(
    params: { 
        desiredAmount: number; 
        currentBankBalance: number; 
    }
): { 
    adjustedAmount: number; 
    newBankBalance: number; 
} {

    let { desiredAmount, currentBankBalance } = params

    console.log(`My current bank balance is ${currentBankBalance}€`)

    if (currentBankBalance < 400 && currentBankBalance > 0) {

        currentBankBalance -= desiredAmount / 2;
        return {
            adjustedAmount: desiredAmount / 2,
            newBankBalance: currentBankBalance
        };

    } 

    if (desiredAmount > currentBankBalance){
        console.log(`Warning : Not enough money in your account`)

        desiredAmount = currentBankBalance;
        currentBankBalance -= desiredAmount;

        return {
            adjustedAmount: desiredAmount,
            newBankBalance: currentBankBalance
        }
    }
    
    else {
        currentBankBalance -= desiredAmount;

        return {
            adjustedAmount: desiredAmount,
            newBankBalance: currentBankBalance
        };
    }



}



