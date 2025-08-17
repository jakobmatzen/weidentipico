import { z } from 'zod'
import { User } from './User'

interface BaseTrade {
  id?: number
  supplierId: number | null
  customerId: number | null
  service: string
  price: number
  createdAt: Date
  deadlineAt: Date
  acceptedAt: Date | null
  confirmedAt: Date | null
  supplier?: User
  customer?: User
}

/**
 * @param id The identifier of the trade.
 * @param supplierId The identifier of the supplier.
 * @param customerId The identifier of the customer.
 * @param service The service being traded.
 * @param price The price of the trade.
 * @param createdAt The date and time the trade was created.
 * @param deadlineAt The date and time the trade will expire.
 * @param acceptedAt The date and time the trade was accepted.
 * @param confirmedAt The date and time the trade was confirmed.
 * @param supplier The supplier of the trade.
 * @param customer The customer of the trade.
 */
export class Trade implements BaseTrade {
  id?: number
  supplierId: number | null
  customerId: number | null
  service: string
  price: number
  createdAt: Date
  deadlineAt: Date
  acceptedAt: Date | null
  confirmedAt: Date | null
  supplier?: User
  customer?: User

  /**
   * Initializes a new instance of the Trade class with given arguments.
   * @param {BaseTrade} args - The arguments for initializing the trade.
   */
  constructor(args: BaseTrade) {
    this.id = args.id
    this.supplierId = args.supplierId
    this.customerId = args.customerId
    this.service = args.service
    this.price = args.price
    this.createdAt = args.createdAt
    this.deadlineAt = args.deadlineAt
    this.acceptedAt = args.acceptedAt
    this.confirmedAt = args.confirmedAt
    this.supplier = args.supplier
    this.customer = args.customer
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
      price: this.price,
      createdAt: this.createdAt,
      deadlineAt: this.deadlineAt,
      acceptedAt: this.acceptedAt,
      confirmedAt: this.confirmedAt,
      supplier: this.supplier ? this.supplier.toJson() : undefined,
      customer: this.customer ? this.customer.toJson() : undefined
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
        price: data.price,
        createdAt: data.createdAt,
        deadlineAt: data.deadlineAt,
        acceptedAt: data.acceptedAt,
        confirmedAt: data.confirmedAt,
        supplier: data.users_trades_supplierIdTousers ? User.parseFromDbData(data.users_trades_supplierIdTousers) : undefined,
        customer: data.users_trades_customerIdTousers ? User.parseFromDbData(data.users_trades_customerIdTousers) : undefined
      })
      return item
    }
    catch {
      throw new Error('Fehler: Angebot kann nicht in Klasse übersetzt werden.')
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
        price: data.price,
        createdAt: data.createdAt,
        deadlineAt: data.deadlineAt,
        acceptedAt: data.acceptedAt,
        confirmedAt: data.confirmedAt,
        supplier: data.supplier,
        customer: data.customer
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
      supplierId: z.number().nullable(),
      customerId: z.number().nullable(),
      service: z.string(),
      price: z.number(),
      createdAt: z.date(),
      deadlineAt: z.date(),
      acceptedAt: z.date().nullable(),
      confirmedAt: z.date().nullable(),
      supplier: User.getZodObject().optional(),
      customer: User.getZodObject().optional()
    })
  }
}
