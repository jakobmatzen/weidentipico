import { z } from 'zod'

interface BaseUser {
    id: string
    firstName: string
    lastName: string
    username: string
    password: string
}

/**
 * @param id The identifier of the user.
 * @param firstName The first name of the user.
 * @param lastName The last name of the user.
 * @param username The username of the user.
 * @param password The password of the user.
 */
export class User implements BaseUser {
    id: string
    firstName: string
    lastName: string
    username: string
    password: string

    /**
     * Initializes a new instance of the User class with given arguments.
     * @param {BaseUser} args - The arguments for initializing the user.
     */
    constructor(args: BaseUser) {
        this.id = args.id
        this.firstName = args.firstName
        this.lastName = args.lastName
        this.username = args.username
        this.password = args.password
    }

    /**
     * Returns a JSON representation of the User object.
     * @returns {object} JSON representation
     */
    toJson() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            password: this.password
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
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                password: data.password
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
                firstName: data.firstName,
                lastName: data.lastName,
                username: data.username,
                password: data.password
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
            id: z.string(),
            firstName: z.string(),
            lastName: z.string(),
            username: z.string(),
            password: z.string()
        })
    }
}
