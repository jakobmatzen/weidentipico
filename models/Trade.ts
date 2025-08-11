import { z } from 'zod'

interface BaseTrade {
  id?: number
  supplierId: number
  customerId: number
  service: string
  createdAt: Date
  deadlineAt: Date
  tradedAt: Date
}

/**
 * @param id The identifier of the trade.
 * @param supplierId The identifier of the supplier.
 * @param customerId The identifier of the customer.
 * @param service The service being traded.
 * @param createdAt The date and time the trade was created.
 * @param deadlineAt The date and time the trade will expire.
 * @param tradedAt The date and time the trade was completed.
 */
export class Trade implements BaseTrade {
  id?: number
  supplierId: number
  customerId: number
  service: string
  createdAt: Date
  deadlineAt: Date
  tradedAt: Date

  /**
   * Initializes a new instance of the Trade class with given arguments.
   * @param {BaseTrade} args - The arguments for initializing the trade.
   */
  constructor(args: BaseTrade) {
    this.id = args.id
    this.supplierId = args.supplierId
    this.customerId = args.customerId
    this.service = args.service
    this.createdAt = args.createdAt
    this.deadlineAt = args.deadlineAt
    this.tradedAt = args.tradedAt
  }

  /**
   * Returns a JSON representation of the Trade object.
   * @returns {object} JSON representation
   */
  toJson() {
    return {
      id: this.id,
      supplierId: this.supplierId,
      customerId: this.customerId,
      service: this.service,
      createdAt: new Date(new Date(this.createdAt).getTime() + 2 * 60 * 60 * 1000),
      deadlineAt: new Date(new Date(this.deadlineAt).getTime() + 2 * 60 * 60 * 1000),
      tradedAt: new Date(new Date(this.tradedAt).getTime() + 2 * 60 * 60 * 1000)
    }
  }

  /**
   * Converts database data into a Trade object.
   * Throws an error if conversion fails.
   * @param {any} data - The data from the database.
   * @returns {Trade} The resulting Trade object.
   * @throws Error if conversion fails.
   */
  static parseFromDbData(data: any): Trade {
    try {
      const item: Trade = new Trade({
        id: data.id,
        supplierId: data.supplierId,
        customerId: data.customerId,
        service: data.service,
        createdAt: new Date(new Date(data.createdAt).getTime() - 2 * 60 * 60 * 1000),
        deadlineAt: new Date(new Date(data.deadlineAt).getTime() - 2 * 60 * 60 * 1000),
        tradedAt: new Date(new Date(data.tradedAt).getTime() - 2 * 60 * 60 * 1000)
      })
      return item
    }
    catch {
      throw new Error('Fehler: Angebot können nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Converts JSON data into a Trade object.
   * Throws an error if conversion fails.
   * @param {any} data - The JSON data.
   * @returns {Trade} The resulting Trade object.
   * @throws Error if conversion fails.
   */
  static parseFromJsonData(data: any): Trade {
    try {
      const item: Trade = new Trade({
        id: data.id,
        supplierId: data.supplierId,
        customerId: data.customerId,
        service: data.service,
        createdAt: data.createdAt,
        deadlineAt: data.deadlineAt,
        tradedAt: data.tradedAt
      })
      return item
    }
    catch {
      throw new Error('Fehler: Angebot kann nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Returns a Zod schema object for creating a Trade.
   * @returns {z.ZodObject} The Zod schema.
   */
  static getZodObject() {
    return z.object({
      id: z.number().optional(),
      supplierId: z.number(),
      customerId: z.number(),
      service: z.string(),
      createdAt: z.date(),
      deadlineAt: z.date(),
      tradedAt: z.date()
    })
  }
}
