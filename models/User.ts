import { z } from 'zod'
import { UserWallet } from './UserWallet'

interface BaseUser {
  id: number
  name: string
  username: string
  password: string
  role: number
  userWallet?: UserWallet
}

/**
 * @param id The identifier of the user.
 * @param name The name of the user.
 * @param username The username of the user.
 * @param password The password of the user.
 */
export class User implements BaseUser {
  id: number
  name: string
  username: string
  password: string
  role: number
  userWallet?: UserWallet

  /**
   * Initializes a new instance of the User class with given arguments.
   * @param {BaseUser} args - The arguments for initializing the user.
   */
  constructor(args: BaseUser) {
    this.id = args.id
    this.name = args.name
    this.username = args.username
    this.password = args.password
    this.role = args.role
    this.userWallet = args.userWallet
  }

  /**
   * Returns a JSON representation of the User object.
   * @returns {object} JSON representation
   */
  toJson() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      password: this.password,
      role: this.role,
      userWallet: this.userWallet?.toJson()
    }
  }

  /**
   * Converts database data into a User object.
   * Throws an error if conversion fails.
   * @param {any} data - The data from the database.
   * @returns {User} The resulting User object.
   * @throws Error if conversion fails.
   */
  static parseFromDbData(data: any): User {
    try {
      const item: User = new User({
        id: data.id,
        name: data.name,
        username: data.username,
        password: data.password,
        role: data.role,
        userWallet: data.userWallets ? UserWallet.parseFromDbData(data.userWallets) : undefined
      })
      return item
    }
    catch {
      throw new Error('Fehler: Benutzer*in kann nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Converts JSON data into a User object.
   * Throws an error if conversion fails.
   * @param {any} data - The JSON data.
   * @returns {User} The resulting User object.
   * @throws Error if conversion fails.
   */
  static parseFromJsonData(data: any): User {
    try {
      const item: User = new User({
        id: data.id,
        name: data.name,
        username: data.username,
        password: data.password,
        role: data.role,
        userWallet: data.userWallet
      })
      return item
    }
    catch {
      throw new Error('Fehler: Benutzer*in kann nicht in Klasse übersetzt werden.')
    }
  }

  /**
   * Returns a Zod schema object for creating a User.
   * @returns {z.ZodObject} The Zod schema.
   */
  static getZodObject() {
    return z.object({
      id: z.number(),
      name: z.string(),
      username: z.string(),
      role: z.number(),
      password: z.string()
    })
  }
}
