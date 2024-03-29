export type BankAccount = {
    balance: number;
    withdrawAmount: (
        params: {
            desiredAmount: number;
        }
    ) => { spendingAmount: number }
}

export function createBankAccount(params: { initialBalance: number }): BankAccount {

    const { initialBalance } = params;

    /*
    function withdrawAmount(params: { desiredAmount: number; }): { spendingAmount: number } {

        const { desiredAmount } = params;

        const spendingAmount = (() => {
            if (desiredAmount > bankAccount.balance) {
                console.log(`Warning : Not enough money in your account`);
                return bankAccount.balance;
            };

            if (bankAccount.balance < 500) {
                return desiredAmount / 2;
            }

            return desiredAmount;

        })();

        bankAccount.balance -= spendingAmount;
        return { spendingAmount };

    }
    */

    /*
    const withdrawAmount = (params: { desiredAmount: number; }): { spendingAmount: number } => {

        const { desiredAmount } = params;

        const spendingAmount = (() => {
            if (desiredAmount > bankAccount.balance) {
                console.log(`Warning : Not enough money in your account`);
                return bankAccount.balance;
            };

            if (bankAccount.balance < 500) {
                return desiredAmount / 2;
            }

            return desiredAmount;

        })();

        bankAccount.balance -= spendingAmount;
        return { spendingAmount };

    }
    */

    /*
    type WithdrawAmount= (params: { desiredAmount: number; }) => { spendingAmount: number; };

    const withdrawAmount: WithdrawAmount = (params)=> {

        const { desiredAmount } = params;

        const spendingAmount = (() => {
            if (desiredAmount > bankAccount.balance) {
                console.log(`Warning : Not enough money in your account`);
                return bankAccount.balance;
            };

            if (bankAccount.balance < 500) {
                return desiredAmount / 2;
            }

            return desiredAmount;

        })();

        bankAccount.balance -= spendingAmount;
        return { spendingAmount };

    }
    */

    /*
    const withdrawAmount: BankAccount["withdrawAmount"] = (params)=> {

        const { desiredAmount } = params;

        const spendingAmount = (() => {
            if (desiredAmount > bankAccount.balance) {
                console.log(`Warning : Not enough money in your account`);
                return bankAccount.balance;
            };

            if (bankAccount.balance < 500) {
                return desiredAmount / 2;
            }

            return desiredAmount;

        })();

        bankAccount.balance -= spendingAmount;
        return { spendingAmount };

    }
    */

    /*
    const withdrawAmount: BankAccount["withdrawAmount"] = ({ desiredAmount })=> {

        const spendingAmount = (() => {
            if (desiredAmount > bankAccount.balance) {
                console.log(`Warning : Not enough money in your account`);
                return bankAccount.balance;
            };

            if (bankAccount.balance < 500) {
                return desiredAmount / 2;
            }

            return desiredAmount;

        })();

        bankAccount.balance -= spendingAmount;
        return { spendingAmount };

    }
    */





    const bankAccount: BankAccount = {
        "balance": initialBalance,
        //withdrawAmount
        //"withdrawAmount": withdrawAmount
        "withdrawAmount": ({ desiredAmount }) => {

            const spendingAmount = (() => {
                if (desiredAmount > bankAccount.balance) {
                    console.log(`Warning : Not enough money in your account`);
                    return bankAccount.balance;
                };

                if (bankAccount.balance < 500) {
                    return desiredAmount / 2;
                }

                return desiredAmount;

            })();

            bankAccount.balance -= spendingAmount;
            return { spendingAmount };

        }
    }

    return bankAccount;
}