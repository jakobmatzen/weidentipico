import { z } from 'zod'
import { BetOption } from './BetOption'

interface BaseBet {
  id?: number
  description: string
  createdAt: Date
  deadlineAt: Date
  status: number
  participants: number
  amount: number
  betOptions?: BetOption[]
}

/**
 * @param id The identifier of the bet.
 * @param description The description of the bet.
 * @param createdAt The date and time the bet was created.
 * @param deadlineAt The date and time the bet will be closed.
 * @param status The status of the bet.
 * @param participants The number of participants in the bet.
 * @param amount The amount of NKoins placed in the bet.
 */
export class Bet implements BaseBet {
  id?: number
  description: string
  createdAt: Date
  deadlineAt: Date
  status: number
  participants: number
  amount: number
  betOptions?: BetOption[]

  /**
   * Initializes a new instance of the Bet class with given arguments.
   * @param {BaseBet} args - The arguments for initializing the bet.
   */
  constructor(args: BaseBet) {
    this.id = args.id
    this.description = args.description
    this.createdAt = args.createdAt
    this.deadlineAt = args.deadlineAt
    this.status = args.status
    this.participants = args.participants
    this.amount = args.amount
    this.betOptions = args.betOptions
  }

  /**
   * Returns a JSON representation of the Bet object.
   * @returns {object} JSON representation
   */
  toJson() {
    return {
      id: this.id,
      description: this.description,
      createdAt: new Date(new Date(this.createdAt).getTime() + 2 * 60 * 60 * 1000),
      deadlineAt: new Date(new Date(this.deadlineAt).getTime() + 2 * 60 * 60 * 1000),
      status: this.status,
      participants: this.participants,
      amount: this.amount,
      betOptions: this.betOptions ? this.betOptions.map((option: BetOption) => option.toJson()) : []
    }
  }

  /**
   * Converts database data into a Bet object.
   * Throws an error if conversion fails.
   * @param {any} data - The data from the database.
   * @returns {Bet} The resulting Bet object.
   * @throws Error if conversion fails.
   */
  static parseFromDbData(data: any): Bet {
    try {
      const item: Bet = new Bet({
        id: data.id,
        description: data.description,
        createdAt: new Date(new Date(data.createdAt).getTime() - 2 * 60 * 60 * 1000),
        deadlineAt: new Date(new Date(data.deadlineAt).getTime() - 2 * 60 * 60 * 1000),
        status: data.status,
        participants: data.participants,
        amount: data.amount,
        betOptions: data.betOptions ? data.betOptions.map((option: any) => BetOption.parseFromDbData(option)) : undefined
      })
      return item
    }
    catch {
      throw new Error('Fehler: Wetten kann nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Converts JSON data into a Bet object.
   * Throws an error if conversion fails.
   * @param {any} data - The JSON data.
   * @returns {Bet} The resulting Bet object.
   * @throws Error if conversion fails.
   */
  static parseFromJsonData(data: any): Bet {
    try {
      const item: Bet = new Bet({
        id: data.id,
        description: data.description,
        createdAt: data.createdAt,
        deadlineAt: data.deadlineAt,
        status: data.status,
        participants: data.participants,
        amount: data.amount,
        betOptions: data.betOptions
      })
      return item
    }
    catch {
      throw new Error('Fehler: Wetten kann nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Returns a Zod schema object for creating a Bet.
   * @returns {z.ZodObject} The Zod schema.
   */
  static getZodObject() {
    return z.object({
      id: z.number().optional(),
      description: z.string(),
      createdAt: z.date(),
      deadlineAt: z.date(),
      status: z.number(),
      participants: z.number(),
      amount: z.number(),
      betOptions: z.array(BetOption.getZodObject())
    })
  }
}
