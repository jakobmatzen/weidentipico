interface BaseUserWallet {
    id: string
    balance: number
}

/**
 * @param id The identifier of the user wallet.
 * @param balance The balance of the user wallet.
 */
export class UserWallet implements BaseUserWallet {
    id: string
    balance: number

    /**
     * Initializes a new instance of the UserWallet class with given arguments.
     * @param {BaseUserWallet} args - The arguments for initializing the user wallet.
     */
    constructor(args: BaseUserWallet) {
        this.id = args.id
        this.balance = args.balance
    }

    /**
     * Returns a JSON representation of the UserWallet object.
     * @returns {object} JSON representation
     */
    toJson() {
        return {
            id: this.id,
            balance: this.balance
        }
    }

    /**
     * Converts database data into a UserWallet object.
     * Throws an error if conversion fails.
     * @param {any} data - The data from the database.
     * @returns {UserWallet} The resulting UserWallet object.
     * @throws Error if conversion fails.
     */
    static parseFromDbData(data: any): UserWallet {
        try {
            const item: UserWallet = new UserWallet({
                id: data.id,
                balance: data.balance
            })
            return item
        }
        catch {
            throw new Error('Fehler: Benutzer-Wallet kann nicht in Klasse übersetzt werden.')
        }
    }

    /**
     * Converts JSON data into a UserWallet object.
     * Throws an error if conversion fails.
     * @param {any} data - The JSON data.
     * @returns {UserWallet} The resulting UserWallet object.
     * @throws Error if conversion fails.
     */
    static parseFromJsonData(data: any): UserWallet {
        try {
            const item: UserWallet = new UserWallet({
                id: data.id,
                balance: data.balance
            })
            return item
        }
        catch {
            throw new Error('Fehler: Benutzer-Wallet kann nicht in Klasse übersetzt werden.')
        }
    }
}
