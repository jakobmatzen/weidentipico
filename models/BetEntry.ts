import { z } from 'zod'

interface BaseBetEntry {
  id?: number
  optionId: number
  userId: number
  amount: number
}

/**
 * @param id The identifier of the bet option.
 * @param betId The identifier of the bet.
 * @param description The description of the bet option.
 * @param quote The quote of the bet option.
 * @param amount The amount of the bet option.
 */
export class BetEntry implements BaseBetEntry {
  id?: number
  optionId: number
  userId: number
  amount: number

  /**
   * Initializes a new instance of the BetEntry class with given arguments.
   * @param {BaseBetEntry} args - The arguments for initializing the bet entry.
   */
  constructor(args: BaseBetEntry) {
    this.id = args.id
    this.optionId = args.optionId
    this.userId = args.userId
    this.amount = args.amount
  }

  /**
   * Returns a JSON representation of the BetEntry object.
   * @returns {object} JSON representation
   */
  toJson() {
    return {
      id: this.id,
      optionId: this.optionId,
      userId: this.userId,
      amount: this.amount
    }
  }

  /**
   * Converts database data into a BetEntry object.
   * Throws an error if conversion fails.
   * @param {any} data - The data from the database.
   * @returns {BetEntry} The resulting BetEntry object.
   * @throws Error if conversion fails.
   */
  static parseFromDbData(data: any): BetEntry {
    try {
      const item: BetEntry = new BetEntry({
        id: data.id,
        optionId: data.optionId,
        userId: data.userId,
        amount: data.amount
      })
      return item
    }
    catch {
      throw new Error('Fehler: Wett-Einträge können nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Converts JSON data into a BetEntry object.
   * Throws an error if conversion fails.
   * @param {any} data - The JSON data.
   * @returns {BetEntry} The resulting BetEntry object.
   * @throws Error if conversion fails.
   */
  static parseFromJsonData(data: any): BetEntry {
    try {
      const item: BetEntry = new BetEntry({
        id: data.id,
        optionId: data.optionId,
        userId: data.userId,
        amount: data.amount
      })
      return item
    }
    catch {
      throw new Error('Fehler: Wett-Einträge können nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Returns a Zod schema object for creating a BetEntry.
   * @returns {z.ZodObject} The Zod schema.
   */
  static getZodObject() {
    return z.object({
      id: z.number().optional(),
      optionId: z.number(),
      userId: z.number(),
      amount: z.number()
    })
  }
}
