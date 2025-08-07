import { z } from 'zod'
import { BetEntry } from './BetEntry'

interface BaseBetOption {
    id: number
    betId: number
    description: string
    weight: number
    amount: number
    betEntries?: BetEntry[]
}

/**
 * @param id The identifier of the bet option.
 * @param betId The identifier of the bet.
 * @param description The description of the bet option.
 * @param weight The weight of the bet option.
 * @param amount The amount of the bet option.
 */
export class BetOption implements BaseBetOption {
    id: number
    betId: number
    description: string
    weight: number
    amount: number
    betEntries?: BetEntry[]

    /**
     * Initializes a new instance of the BetOption class with given arguments.
     * @param {BaseBetOption} args - The arguments for initializing the bet option.
     */
    constructor(args: BaseBetOption) {
        this.id = args.id
        this.betId = args.betId
        this.description = args.description
        this.weight = args.weight
        this.amount = args.amount
        this.betEntries = args.betEntries
    }

    /**
     * Returns a JSON representation of the BetOption object.
     * @returns {object} JSON representation
     */
    toJson() {
        return {
            id: this.id,
            betId: this.betId,
            description: this.description,
            weight: this.weight / 100,
            amount: this.amount,
            betEntries: this.betEntries ? this.betEntries.map((entry: BetEntry) => entry.toJson()) : []
        }
    }

    /**
     * Converts database data into a BetOption object.
     * Throws an error if conversion fails.
     * @param {any} data - The data from the database.
     * @returns {BetOption} The resulting BetOption object.
     * @throws Error if conversion fails.
     */
    static parseFromDbData(data: any): BetOption {
        try {
            const item: BetOption = new BetOption({
                id: data.id,
                betId: data.betId,
                description: data.description,
                weight: data.weight * 100,
                amount: data.amount,
                betEntries: data.betEntries ? data.betEntries.map((entry: any) => BetEntry.parseFromDbData(entry)) : undefined
            })
            return item
        }
        catch {
            throw new Error('Fehler: Wett-Optionen können nicht in Klasse übersetzt werden.')
        }
    }

    /**
     * Converts JSON data into a BetOption object.
     * Throws an error if conversion fails.
     * @param {any} data - The JSON data.
     * @returns {BetOption} The resulting BetOption object.
     * @throws Error if conversion fails.
     */
    static parseFromJsonData(data: any): BetOption {
        try {
            const item: BetOption = new BetOption({
                id: data.id,
                betId: data.betId,
                description: data.description,
                weight: data.weight,
                amount: data.amount,
                betEntries: data.betEntries
            })
            return item
        }
        catch {
            throw new Error('Fehler: Wett-Optionen können nicht in Klasse übersetzt werden.')
        }
    }

    /**
     * Returns a Zod schema object for creating a BetOption.
     * @returns {z.ZodObject} The Zod schema.
     */
    static getZodObject() {
        return z.object({
            id: z.number().optional(),
            betId: z.number(),
            description: z.string(),
            weight: z.number(),
            amount: z.number(),
            betEntries: z.array(BetEntry.getZodObject())
        })
    }
}
