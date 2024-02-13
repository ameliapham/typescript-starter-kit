import { bankAccount } from "./bankAccount"

export function calculateAdjustedAmount(
    params: { desiredAmount: number }
): number {

    const { desiredAmount } = params

    console.log(`My current bank balance is ${bankAccount.currentBankBalance}€`)

    if (bankAccount.currentBankBalance < 400) {

        bankAccount.currentBankBalance -= desiredAmount / 2;
        return desiredAmount / 2;

    } else {

        bankAccount.currentBankBalance -= desiredAmount;
        return desiredAmount;
    }



}