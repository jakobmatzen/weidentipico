/**
 * Client
 */

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Extensions = runtime.Types.Extensions
import $Public = runtime.Types.Public
import $Result = runtime.Types.Result
import $Utils = runtime.Types.Utils

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model users
 *
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model bets
 *
 */
export type bets = $Result.DefaultSelection<Prisma.$betsPayload>
/**
 * Model roles
 *
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model services
 *
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model status
 *
 */
export type status = $Result.DefaultSelection<Prisma.$statusPayload>
/**
 * Model tradeOffers
 *
 */
export type tradeOffers = $Result.DefaultSelection<Prisma.$tradeOffersPayload>
/**
 * Model trades
 *
 */
export type trades = $Result.DefaultSelection<Prisma.$tradesPayload>
/**
 * Model userWallets
 *
 */
export type userWallets = $Result.DefaultSelection<Prisma.$userWalletsPayload>
/**
 * Model betEntries
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type betEntries = $Result.DefaultSelection<Prisma.$betEntriesPayload>
/**
 * Model betOptions
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type betOptions = $Result.DefaultSelection<Prisma.$betOptionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.bets`: Exposes CRUD operations for the **bets** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bets
   * const bets = await prisma.bets.findMany()
   * ```
   */
  get bets(): Prisma.betsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.services.findMany()
   * ```
   */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.status`: Exposes CRUD operations for the **status** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Statuses
   * const statuses = await prisma.status.findMany()
   * ```
   */
  get status(): Prisma.statusDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.tradeOffers`: Exposes CRUD operations for the **tradeOffers** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TradeOffers
   * const tradeOffers = await prisma.tradeOffers.findMany()
   * ```
   */
  get tradeOffers(): Prisma.tradeOffersDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.trades`: Exposes CRUD operations for the **trades** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Trades
   * const trades = await prisma.trades.findMany()
   * ```
   */
  get trades(): Prisma.tradesDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.userWallets`: Exposes CRUD operations for the **userWallets** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserWallets
   * const userWallets = await prisma.userWallets.findMany()
   * ```
   */
  get userWallets(): Prisma.userWalletsDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.betEntries`: Exposes CRUD operations for the **betEntries** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BetEntries
   * const betEntries = await prisma.betEntries.findMany()
   * ```
   */
  get betEntries(): Prisma.betEntriesDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.betOptions`: Exposes CRUD operations for the **betOptions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BetOptions
   * const betOptions = await prisma.betOptions.findMany()
   * ```
   */
  get betOptions(): Prisma.betOptionsDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export interface PrismaVersion {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  interface SelectAndInclude {
    select: any
    include: any
  }

  interface SelectAndOmit {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
  (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
  K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
      U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
        : U : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends bigint
          ? False
          : T extends object
            ? True
            : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" */
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {}

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
  }>>

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | { [P in keyof O as P extends K ? P : never]-?: O[P] } & O
      : never
  >

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" */

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
   */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
   */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
    // based on the brilliant idea of Pierre-Antoine Mills
    // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
      T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
          ? never
          : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  export const ModelName: {
    users: 'users'
    bets: 'bets'
    roles: 'roles'
    services: 'services'
    status: 'status'
    tradeOffers: 'tradeOffers'
    trades: 'trades'
    userWallets: 'userWallets'
    betEntries: 'betEntries'
    betOptions: 'betOptions'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export interface Datasources {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: 'users' | 'bets' | 'roles' | 'services' | 'status' | 'tradeOffers' | 'trades' | 'userWallets' | 'betEntries' | 'betOptions'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      bets: {
        payload: Prisma.$betsPayload<ExtArgs>
        fields: Prisma.betsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.betsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.betsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          findFirst: {
            args: Prisma.betsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.betsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          findMany: {
            args: Prisma.betsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>[]
          }
          create: {
            args: Prisma.betsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          createMany: {
            args: Prisma.betsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.betsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>[]
          }
          delete: {
            args: Prisma.betsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          update: {
            args: Prisma.betsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          deleteMany: {
            args: Prisma.betsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.betsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.betsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>[]
          }
          upsert: {
            args: Prisma.betsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betsPayload>
          }
          aggregate: {
            args: Prisma.BetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBets>
          }
          groupBy: {
            args: Prisma.betsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.betsCountArgs<ExtArgs>
            result: $Utils.Optional<BetsCountAggregateOutputType> | number
          }
        }
      }
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      status: {
        payload: Prisma.$statusPayload<ExtArgs>
        fields: Prisma.statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findFirst: {
            args: Prisma.statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findMany: {
            args: Prisma.statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          create: {
            args: Prisma.statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          createMany: {
            args: Prisma.statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          delete: {
            args: Prisma.statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          update: {
            args: Prisma.statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          deleteMany: {
            args: Prisma.statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          upsert: {
            args: Prisma.statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      tradeOffers: {
        payload: Prisma.$tradeOffersPayload<ExtArgs>
        fields: Prisma.tradeOffersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradeOffersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradeOffersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          findFirst: {
            args: Prisma.tradeOffersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradeOffersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          findMany: {
            args: Prisma.tradeOffersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>[]
          }
          create: {
            args: Prisma.tradeOffersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          createMany: {
            args: Prisma.tradeOffersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradeOffersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>[]
          }
          delete: {
            args: Prisma.tradeOffersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          update: {
            args: Prisma.tradeOffersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          deleteMany: {
            args: Prisma.tradeOffersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradeOffersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tradeOffersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>[]
          }
          upsert: {
            args: Prisma.tradeOffersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradeOffersPayload>
          }
          aggregate: {
            args: Prisma.TradeOffersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTradeOffers>
          }
          groupBy: {
            args: Prisma.tradeOffersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeOffersGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradeOffersCountArgs<ExtArgs>
            result: $Utils.Optional<TradeOffersCountAggregateOutputType> | number
          }
        }
      }
      trades: {
        payload: Prisma.$tradesPayload<ExtArgs>
        fields: Prisma.tradesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tradesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tradesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          findFirst: {
            args: Prisma.tradesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tradesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          findMany: {
            args: Prisma.tradesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          create: {
            args: Prisma.tradesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          createMany: {
            args: Prisma.tradesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tradesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          delete: {
            args: Prisma.tradesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          update: {
            args: Prisma.tradesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          deleteMany: {
            args: Prisma.tradesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tradesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tradesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>[]
          }
          upsert: {
            args: Prisma.tradesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tradesPayload>
          }
          aggregate: {
            args: Prisma.TradesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrades>
          }
          groupBy: {
            args: Prisma.tradesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tradesCountArgs<ExtArgs>
            result: $Utils.Optional<TradesCountAggregateOutputType> | number
          }
        }
      }
      userWallets: {
        payload: Prisma.$userWalletsPayload<ExtArgs>
        fields: Prisma.userWalletsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userWalletsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userWalletsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          findFirst: {
            args: Prisma.userWalletsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userWalletsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          findMany: {
            args: Prisma.userWalletsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>[]
          }
          create: {
            args: Prisma.userWalletsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          createMany: {
            args: Prisma.userWalletsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userWalletsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>[]
          }
          delete: {
            args: Prisma.userWalletsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          update: {
            args: Prisma.userWalletsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          deleteMany: {
            args: Prisma.userWalletsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userWalletsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userWalletsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>[]
          }
          upsert: {
            args: Prisma.userWalletsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userWalletsPayload>
          }
          aggregate: {
            args: Prisma.UserWalletsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWallets>
          }
          groupBy: {
            args: Prisma.userWalletsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWalletsGroupByOutputType>[]
          }
          count: {
            args: Prisma.userWalletsCountArgs<ExtArgs>
            result: $Utils.Optional<UserWalletsCountAggregateOutputType> | number
          }
        }
      }
      betEntries: {
        payload: Prisma.$betEntriesPayload<ExtArgs>
        fields: Prisma.betEntriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.betEntriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.betEntriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          findFirst: {
            args: Prisma.betEntriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.betEntriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          findMany: {
            args: Prisma.betEntriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>[]
          }
          create: {
            args: Prisma.betEntriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          createMany: {
            args: Prisma.betEntriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.betEntriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>[]
          }
          delete: {
            args: Prisma.betEntriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          update: {
            args: Prisma.betEntriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          deleteMany: {
            args: Prisma.betEntriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.betEntriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.betEntriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>[]
          }
          upsert: {
            args: Prisma.betEntriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betEntriesPayload>
          }
          aggregate: {
            args: Prisma.BetEntriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetEntries>
          }
          groupBy: {
            args: Prisma.betEntriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetEntriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.betEntriesCountArgs<ExtArgs>
            result: $Utils.Optional<BetEntriesCountAggregateOutputType> | number
          }
        }
      }
      betOptions: {
        payload: Prisma.$betOptionsPayload<ExtArgs>
        fields: Prisma.betOptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.betOptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.betOptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          findFirst: {
            args: Prisma.betOptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.betOptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          findMany: {
            args: Prisma.betOptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>[]
          }
          create: {
            args: Prisma.betOptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          createMany: {
            args: Prisma.betOptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.betOptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>[]
          }
          delete: {
            args: Prisma.betOptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          update: {
            args: Prisma.betOptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          deleteMany: {
            args: Prisma.betOptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.betOptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.betOptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>[]
          }
          upsert: {
            args: Prisma.betOptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$betOptionsPayload>
          }
          aggregate: {
            args: Prisma.BetOptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBetOptions>
          }
          groupBy: {
            args: Prisma.betOptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetOptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.betOptionsCountArgs<ExtArgs>
            result: $Utils.Optional<BetOptionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export interface GlobalOmitConfig {
    users?: usersOmit
    bets?: betsOmit
    roles?: rolesOmit
    services?: servicesOmit
    status?: statusOmit
    tradeOffers?: tradeOffersOmit
    trades?: tradesOmit
    userWallets?: userWalletsOmit
    betEntries?: betEntriesOmit
    betOptions?: betOptionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export interface LogDefinition {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export interface QueryEvent {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export interface LogEvent {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export interface MiddlewareParams {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export interface Datasource {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UsersCountOutputType
   */

  export interface UsersCountOutputType {
    betEntries: number
    tradeOffers: number
    trades_trades_customerIdTousers: number
    trades_trades_supplierIdTousers: number
  }

  export interface UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betEntries?: boolean | UsersCountOutputTypeCountBetEntriesArgs
    tradeOffers?: boolean | UsersCountOutputTypeCountTradeOffersArgs
    trades_trades_customerIdTousers?: boolean | UsersCountOutputTypeCountTrades_trades_customerIdTousersArgs
    trades_trades_supplierIdTousers?: boolean | UsersCountOutputTypeCountTrades_trades_supplierIdTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export interface UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export interface UsersCountOutputTypeCountBetEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betEntriesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export interface UsersCountOutputTypeCountTradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradeOffersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export interface UsersCountOutputTypeCountTrades_trades_customerIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export interface UsersCountOutputTypeCountTrades_trades_supplierIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradesWhereInput
  }

  /**
   * Count Type BetsCountOutputType
   */

  export interface BetsCountOutputType {
    betOptions: number
  }

  export interface BetsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betOptions?: boolean | BetsCountOutputTypeCountBetOptionsArgs
  }

  // Custom InputTypes
  /**
   * BetsCountOutputType without action
   */
  export interface BetsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the BetsCountOutputType
     */
    select?: BetsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BetsCountOutputType without action
   */
  export interface BetsCountOutputTypeCountBetOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betOptionsWhereInput
  }

  /**
   * Count Type RolesCountOutputType
   */

  export interface RolesCountOutputType {
    users: number
  }

  export interface RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export interface RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export interface RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: usersWhereInput
  }

  /**
   * Count Type StatusCountOutputType
   */

  export interface StatusCountOutputType {
    bets_bets_statusTostatus: number
  }

  export interface StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    bets_bets_statusTostatus?: boolean | StatusCountOutputTypeCountBets_bets_statusTostatusArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export interface StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export interface StatusCountOutputTypeCountBets_bets_statusTostatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betsWhereInput
  }

  /**
   * Count Type TradesCountOutputType
   */

  export interface TradesCountOutputType {
    tradeOffers: number
  }

  export interface TradesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    tradeOffers?: boolean | TradesCountOutputTypeCountTradeOffersArgs
  }

  // Custom InputTypes
  /**
   * TradesCountOutputType without action
   */
  export interface TradesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the TradesCountOutputType
     */
    select?: TradesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradesCountOutputType without action
   */
  export interface TradesCountOutputTypeCountTradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradeOffersWhereInput
  }

  /**
   * Count Type BetOptionsCountOutputType
   */

  export interface BetOptionsCountOutputType {
    betEntries: number
  }

  export interface BetOptionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betEntries?: boolean | BetOptionsCountOutputTypeCountBetEntriesArgs
  }

  // Custom InputTypes
  /**
   * BetOptionsCountOutputType without action
   */
  export interface BetOptionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the BetOptionsCountOutputType
     */
    select?: BetOptionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BetOptionsCountOutputType without action
   */
  export interface BetOptionsCountOutputTypeCountBetEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betEntriesWhereInput
  }

  /**
   * Models
   */

  /**
   * Model users
   */

  export interface AggregateUsers {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export interface UsersAvgAggregateOutputType {
    id: number | null
    role: number | null
  }

  export interface UsersSumAggregateOutputType {
    id: number | null
    role: number | null
  }

  export interface UsersMinAggregateOutputType {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: number | null
  }

  export interface UsersMaxAggregateOutputType {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    role: number | null
  }

  export interface UsersCountAggregateOutputType {
    id: number
    firstName: number
    lastName: number
    username: number
    password: number
    role: number
    _all: number
  }

  export interface UsersAvgAggregateInputType {
    id?: true
    role?: true
  }

  export interface UsersSumAggregateInputType {
    id?: true
    role?: true
  }

  export interface UsersMinAggregateInputType {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export interface UsersMaxAggregateInputType {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
  }

  export interface UsersCountAggregateInputType {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    role?: true
    _all?: true
  }

  export interface UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     */
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }

  export interface usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export interface UsersGroupByOutputType {
    id: number
    firstName: string
    lastName: string
    username: string
    password: string
    role: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
          : GetScalarType<T[P], UsersGroupByOutputType[P]>
      }
    >
  >

  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    betEntries?: boolean | users$betEntriesArgs<ExtArgs>
    tradeOffers?: boolean | users$tradeOffersArgs<ExtArgs>
    trades_trades_customerIdTousers?: boolean | users$trades_trades_customerIdTousersArgs<ExtArgs>
    trades_trades_supplierIdTousers?: boolean | users$trades_trades_supplierIdTousersArgs<ExtArgs>
    userWallets?: boolean | users$userWalletsArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['users']>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    roles?: boolean | users$rolesArgs<ExtArgs>
  }, ExtArgs['result']['users']>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    roles?: boolean | users$rolesArgs<ExtArgs>
  }, ExtArgs['result']['users']>

  export interface usersSelectScalar {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'firstName' | 'lastName' | 'username' | 'password' | 'role', ExtArgs['result']['users']>
  export interface usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betEntries?: boolean | users$betEntriesArgs<ExtArgs>
    tradeOffers?: boolean | users$tradeOffersArgs<ExtArgs>
    trades_trades_customerIdTousers?: boolean | users$trades_trades_customerIdTousersArgs<ExtArgs>
    trades_trades_supplierIdTousers?: boolean | users$trades_trades_supplierIdTousersArgs<ExtArgs>
    userWallets?: boolean | users$userWalletsArgs<ExtArgs>
    roles?: boolean | users$rolesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    roles?: boolean | users$rolesArgs<ExtArgs>
  }
  export interface usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    roles?: boolean | users$rolesArgs<ExtArgs>
  }

  export interface $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'users'
    objects: {
      betEntries: Prisma.$betEntriesPayload<ExtArgs>[]
      tradeOffers: Prisma.$tradeOffersPayload<ExtArgs>[]
      trades_trades_customerIdTousers: Prisma.$tradesPayload<ExtArgs>[]
      trades_trades_supplierIdTousers: Prisma.$tradesPayload<ExtArgs>[]
      userWallets: Prisma.$userWalletsPayload<ExtArgs> | null
      roles: Prisma.$rolesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      username: string
      password: string
      role: number | null
    }, ExtArgs['result']['users']>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     *
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     *
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     */
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the users model
     */
    readonly fields: usersFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    betEntries<T extends users$betEntriesArgs<ExtArgs> = {}>(args?: Subset<T, users$betEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    tradeOffers<T extends users$tradeOffersArgs<ExtArgs> = {}>(args?: Subset<T, users$tradeOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    trades_trades_customerIdTousers<T extends users$trades_trades_customerIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$trades_trades_customerIdTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    trades_trades_supplierIdTousers<T extends users$trades_trades_supplierIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$trades_trades_supplierIdTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    userWallets<T extends users$userWalletsArgs<ExtArgs> = {}>(args?: Subset<T, users$userWalletsArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    roles<T extends users$rolesArgs<ExtArgs> = {}>(args?: Subset<T, users$rolesArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<'users', 'Int'>
    readonly firstName: FieldRef<'users', 'String'>
    readonly lastName: FieldRef<'users', 'String'>
    readonly username: FieldRef<'users', 'String'>
    readonly password: FieldRef<'users', 'String'>
    readonly role: FieldRef<'users', 'Int'>
  }

  // Custom InputTypes
  /**
   * users findUnique
   */
  export interface usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export interface usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export interface usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export interface usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export interface usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export interface usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export interface usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export interface usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export interface usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export interface usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export interface usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export interface usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export interface usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export interface usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.betEntries
   */
  export interface users$betEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    where?: betEntriesWhereInput
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    cursor?: betEntriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetEntriesScalarFieldEnum | BetEntriesScalarFieldEnum[]
  }

  /**
   * users.tradeOffers
   */
  export interface users$tradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    where?: tradeOffersWhereInput
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    cursor?: tradeOffersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeOffersScalarFieldEnum | TradeOffersScalarFieldEnum[]
  }

  /**
   * users.trades_trades_customerIdTousers
   */
  export interface users$trades_trades_customerIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    where?: tradesWhereInput
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    cursor?: tradesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * users.trades_trades_supplierIdTousers
   */
  export interface users$trades_trades_supplierIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    where?: tradesWhereInput
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    cursor?: tradesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * users.userWallets
   */
  export interface users$userWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    where?: userWalletsWhereInput
  }

  /**
   * users.roles
   */
  export interface users$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    where?: rolesWhereInput
  }

  /**
   * users without action
   */
  export interface usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }

  /**
   * Model bets
   */

  export interface AggregateBets {
    _count: BetsCountAggregateOutputType | null
    _avg: BetsAvgAggregateOutputType | null
    _sum: BetsSumAggregateOutputType | null
    _min: BetsMinAggregateOutputType | null
    _max: BetsMaxAggregateOutputType | null
  }

  export interface BetsAvgAggregateOutputType {
    id: number | null
    status: number | null
    participants: number | null
    amount: number | null
  }

  export interface BetsSumAggregateOutputType {
    id: number | null
    status: number | null
    participants: number | null
    amount: number | null
  }

  export interface BetsMinAggregateOutputType {
    id: number | null
    description: string | null
    createdAt: Date | null
    deadlineAt: Date | null
    status: number | null
    participants: number | null
    amount: number | null
  }

  export interface BetsMaxAggregateOutputType {
    id: number | null
    description: string | null
    createdAt: Date | null
    deadlineAt: Date | null
    status: number | null
    participants: number | null
    amount: number | null
  }

  export interface BetsCountAggregateOutputType {
    id: number
    description: number
    createdAt: number
    deadlineAt: number
    status: number
    participants: number
    amount: number
    _all: number
  }

  export interface BetsAvgAggregateInputType {
    id?: true
    status?: true
    participants?: true
    amount?: true
  }

  export interface BetsSumAggregateInputType {
    id?: true
    status?: true
    participants?: true
    amount?: true
  }

  export interface BetsMinAggregateInputType {
    id?: true
    description?: true
    createdAt?: true
    deadlineAt?: true
    status?: true
    participants?: true
    amount?: true
  }

  export interface BetsMaxAggregateInputType {
    id?: true
    description?: true
    createdAt?: true
    deadlineAt?: true
    status?: true
    participants?: true
    amount?: true
  }

  export interface BetsCountAggregateInputType {
    id?: true
    description?: true
    createdAt?: true
    deadlineAt?: true
    status?: true
    participants?: true
    amount?: true
    _all?: true
  }

  export interface BetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which bets to aggregate.
     */
    where?: betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bets to fetch.
     */
    orderBy?: betsOrderByWithRelationInput | betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned bets
     */
    _count?: true | BetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: BetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: BetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: BetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: BetsMaxAggregateInputType
  }

  export type GetBetsAggregateType<T extends BetsAggregateArgs> = {
    [P in keyof T & keyof AggregateBets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBets[P]>
      : GetScalarType<T[P], AggregateBets[P]>
  }

  export interface betsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betsWhereInput
    orderBy?: betsOrderByWithAggregationInput | betsOrderByWithAggregationInput[]
    by: BetsScalarFieldEnum[] | BetsScalarFieldEnum
    having?: betsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetsCountAggregateInputType | true
    _avg?: BetsAvgAggregateInputType
    _sum?: BetsSumAggregateInputType
    _min?: BetsMinAggregateInputType
    _max?: BetsMaxAggregateInputType
  }

  export interface BetsGroupByOutputType {
    id: number
    description: string
    createdAt: Date
    deadlineAt: Date
    status: number | null
    participants: number
    amount: number
    _count: BetsCountAggregateOutputType | null
    _avg: BetsAvgAggregateOutputType | null
    _sum: BetsSumAggregateOutputType | null
    _min: BetsMinAggregateOutputType | null
    _max: BetsMaxAggregateOutputType | null
  }

  type GetBetsGroupByPayload<T extends betsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetsGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof BetsGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BetsGroupByOutputType[P]>
          : GetScalarType<T[P], BetsGroupByOutputType[P]>
      }
    >
  >

  export type betsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    status?: boolean
    participants?: boolean
    amount?: boolean
    betOptions?: boolean | bets$betOptionsArgs<ExtArgs>
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
    _count?: boolean | BetsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['bets']>

  export type betsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    status?: boolean
    participants?: boolean
    amount?: boolean
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
  }, ExtArgs['result']['bets']>

  export type betsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    status?: boolean
    participants?: boolean
    amount?: boolean
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
  }, ExtArgs['result']['bets']>

  export interface betsSelectScalar {
    id?: boolean
    description?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    status?: boolean
    participants?: boolean
    amount?: boolean
  }

  export type betsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'description' | 'createdAt' | 'deadlineAt' | 'status' | 'participants' | 'amount', ExtArgs['result']['bets']>
  export interface betsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betOptions?: boolean | bets$betOptionsArgs<ExtArgs>
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
    _count?: boolean | BetsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface betsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
  }
  export interface betsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    status_bets_statusTostatus?: boolean | bets$status_bets_statusTostatusArgs<ExtArgs>
  }

  export interface $betsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'bets'
    objects: {
      betOptions: Prisma.$betOptionsPayload<ExtArgs>[]
      status_bets_statusTostatus: Prisma.$statusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      createdAt: Date
      deadlineAt: Date
      status: number | null
      participants: number
      amount: number
    }, ExtArgs['result']['bets']>
    composites: {}
  }

  type betsGetPayload<S extends boolean | null | undefined | betsDefaultArgs> = $Result.GetResult<Prisma.$betsPayload, S>

  type betsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<betsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetsCountAggregateInputType | true
    }

  export interface betsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bets'], meta: { name: 'bets' } }
    /**
     * Find zero or one Bets that matches the filter.
     * @param {betsFindUniqueArgs} args - Arguments to find a Bets
     * @example
     * // Get one Bets
     * const bets = await prisma.bets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends betsFindUniqueArgs>(args: SelectSubset<T, betsFindUniqueArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {betsFindUniqueOrThrowArgs} args - Arguments to find a Bets
     * @example
     * // Get one Bets
     * const bets = await prisma.bets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends betsFindUniqueOrThrowArgs>(args: SelectSubset<T, betsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsFindFirstArgs} args - Arguments to find a Bets
     * @example
     * // Get one Bets
     * const bets = await prisma.bets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends betsFindFirstArgs>(args?: SelectSubset<T, betsFindFirstArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsFindFirstOrThrowArgs} args - Arguments to find a Bets
     * @example
     * // Get one Bets
     * const bets = await prisma.bets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends betsFindFirstOrThrowArgs>(args?: SelectSubset<T, betsFindFirstOrThrowArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bets.findMany()
     *
     * // Get first 10 Bets
     * const bets = await prisma.bets.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const betsWithIdOnly = await prisma.bets.findMany({ select: { id: true } })
     *
     */
    findMany<T extends betsFindManyArgs>(args?: SelectSubset<T, betsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Bets.
     * @param {betsCreateArgs} args - Arguments to create a Bets.
     * @example
     * // Create one Bets
     * const Bets = await prisma.bets.create({
     *   data: {
     *     // ... data to create a Bets
     *   }
     * })
     *
     */
    create<T extends betsCreateArgs>(args: SelectSubset<T, betsCreateArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {betsCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bets = await prisma.bets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends betsCreateManyArgs>(args?: SelectSubset<T, betsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {betsCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bets = await prisma.bets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bets and only return the `id`
     * const betsWithIdOnly = await prisma.bets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends betsCreateManyAndReturnArgs>(args?: SelectSubset<T, betsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Bets.
     * @param {betsDeleteArgs} args - Arguments to delete one Bets.
     * @example
     * // Delete one Bets
     * const Bets = await prisma.bets.delete({
     *   where: {
     *     // ... filter to delete one Bets
     *   }
     * })
     *
     */
    delete<T extends betsDeleteArgs>(args: SelectSubset<T, betsDeleteArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bets.
     * @param {betsUpdateArgs} args - Arguments to update one Bets.
     * @example
     * // Update one Bets
     * const bets = await prisma.bets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends betsUpdateArgs>(args: SelectSubset<T, betsUpdateArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {betsDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends betsDeleteManyArgs>(args?: SelectSubset<T, betsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bets = await prisma.bets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends betsUpdateManyArgs>(args: SelectSubset<T, betsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets and returns the data updated in the database.
     * @param {betsUpdateManyAndReturnArgs} args - Arguments to update many Bets.
     * @example
     * // Update many Bets
     * const bets = await prisma.bets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bets and only return the `id`
     * const betsWithIdOnly = await prisma.bets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends betsUpdateManyAndReturnArgs>(args: SelectSubset<T, betsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Bets.
     * @param {betsUpsertArgs} args - Arguments to update or create a Bets.
     * @example
     * // Update or create a Bets
     * const bets = await prisma.bets.upsert({
     *   create: {
     *     // ... data to create a Bets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bets we want to update
     *   }
     * })
     */
    upsert<T extends betsUpsertArgs>(args: SelectSubset<T, betsUpsertArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bets.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
     */
    count<T extends betsCountArgs>(
      args?: Subset<T, betsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends BetsAggregateArgs>(args: Subset<T, BetsAggregateArgs>): Prisma.PrismaPromise<GetBetsAggregateType<T>>

    /**
     * Group by Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends betsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: betsGroupByArgs['orderBy'] }
        : { orderBy?: betsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, betsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the bets model
     */
    readonly fields: betsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for bets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__betsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    betOptions<T extends bets$betOptionsArgs<ExtArgs> = {}>(args?: Subset<T, bets$betOptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    status_bets_statusTostatus<T extends bets$status_bets_statusTostatusArgs<ExtArgs> = {}>(args?: Subset<T, bets$status_bets_statusTostatusArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the bets model
   */
  interface betsFieldRefs {
    readonly id: FieldRef<'bets', 'Int'>
    readonly description: FieldRef<'bets', 'String'>
    readonly createdAt: FieldRef<'bets', 'DateTime'>
    readonly deadlineAt: FieldRef<'bets', 'DateTime'>
    readonly status: FieldRef<'bets', 'Int'>
    readonly participants: FieldRef<'bets', 'Int'>
    readonly amount: FieldRef<'bets', 'Int'>
  }

  // Custom InputTypes
  /**
   * bets findUnique
   */
  export interface betsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter, which bets to fetch.
     */
    where: betsWhereUniqueInput
  }

  /**
   * bets findUniqueOrThrow
   */
  export interface betsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter, which bets to fetch.
     */
    where: betsWhereUniqueInput
  }

  /**
   * bets findFirst
   */
  export interface betsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter, which bets to fetch.
     */
    where?: betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bets to fetch.
     */
    orderBy?: betsOrderByWithRelationInput | betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bets.
     */
    cursor?: betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bets.
     */
    distinct?: BetsScalarFieldEnum | BetsScalarFieldEnum[]
  }

  /**
   * bets findFirstOrThrow
   */
  export interface betsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter, which bets to fetch.
     */
    where?: betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bets to fetch.
     */
    orderBy?: betsOrderByWithRelationInput | betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for bets.
     */
    cursor?: betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of bets.
     */
    distinct?: BetsScalarFieldEnum | BetsScalarFieldEnum[]
  }

  /**
   * bets findMany
   */
  export interface betsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter, which bets to fetch.
     */
    where?: betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of bets to fetch.
     */
    orderBy?: betsOrderByWithRelationInput | betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing bets.
     */
    cursor?: betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` bets.
     */
    skip?: number
    distinct?: BetsScalarFieldEnum | BetsScalarFieldEnum[]
  }

  /**
   * bets create
   */
  export interface betsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * The data needed to create a bets.
     */
    data: XOR<betsCreateInput, betsUncheckedCreateInput>
  }

  /**
   * bets createMany
   */
  export interface betsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many bets.
     */
    data: betsCreateManyInput | betsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bets createManyAndReturn
   */
  export interface betsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * The data used to create many bets.
     */
    data: betsCreateManyInput | betsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * bets update
   */
  export interface betsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * The data needed to update a bets.
     */
    data: XOR<betsUpdateInput, betsUncheckedUpdateInput>
    /**
     * Choose, which bets to update.
     */
    where: betsWhereUniqueInput
  }

  /**
   * bets updateMany
   */
  export interface betsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update bets.
     */
    data: XOR<betsUpdateManyMutationInput, betsUncheckedUpdateManyInput>
    /**
     * Filter which bets to update
     */
    where?: betsWhereInput
    /**
     * Limit how many bets to update.
     */
    limit?: number
  }

  /**
   * bets updateManyAndReturn
   */
  export interface betsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * The data used to update bets.
     */
    data: XOR<betsUpdateManyMutationInput, betsUncheckedUpdateManyInput>
    /**
     * Filter which bets to update
     */
    where?: betsWhereInput
    /**
     * Limit how many bets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * bets upsert
   */
  export interface betsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * The filter to search for the bets to update in case it exists.
     */
    where: betsWhereUniqueInput
    /**
     * In case the bets found by the `where` argument doesn't exist, create a new bets with this data.
     */
    create: XOR<betsCreateInput, betsUncheckedCreateInput>
    /**
     * In case the bets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<betsUpdateInput, betsUncheckedUpdateInput>
  }

  /**
   * bets delete
   */
  export interface betsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    /**
     * Filter which bets to delete.
     */
    where: betsWhereUniqueInput
  }

  /**
   * bets deleteMany
   */
  export interface betsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which bets to delete
     */
    where?: betsWhereInput
    /**
     * Limit how many bets to delete.
     */
    limit?: number
  }

  /**
   * bets.betOptions
   */
  export interface bets$betOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    where?: betOptionsWhereInput
    orderBy?: betOptionsOrderByWithRelationInput | betOptionsOrderByWithRelationInput[]
    cursor?: betOptionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetOptionsScalarFieldEnum | BetOptionsScalarFieldEnum[]
  }

  /**
   * bets.status_bets_statusTostatus
   */
  export interface bets$status_bets_statusTostatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    where?: statusWhereInput
  }

  /**
   * bets without action
   */
  export interface betsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
  }

  /**
   * Model roles
   */

  export interface AggregateRoles {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export interface RolesAvgAggregateOutputType {
    id: number | null
  }

  export interface RolesSumAggregateOutputType {
    id: number | null
  }

  export interface RolesMinAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface RolesMaxAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface RolesCountAggregateOutputType {
    id: number
    description: number
    _all: number
  }

  export interface RolesAvgAggregateInputType {
    id?: true
  }

  export interface RolesSumAggregateInputType {
    id?: true
  }

  export interface RolesMinAggregateInputType {
    id?: true
    description?: true
  }

  export interface RolesMaxAggregateInputType {
    id?: true
    description?: true
  }

  export interface RolesCountAggregateInputType {
    id?: true
    description?: true
    _all?: true
  }

  export interface RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned roles
     */
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
    [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }

  export interface rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export interface RolesGroupByOutputType {
    id: number
    description: string
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
          : GetScalarType<T[P], RolesGroupByOutputType[P]>
      }
    >
  >

  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['roles']>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['roles']>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['roles']>

  export interface rolesSelectScalar {
    id?: boolean
    description?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'description', ExtArgs['result']['roles']>
  export interface rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {}
  export interface rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {}

  export interface $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'roles'
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs['result']['roles']>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     *
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     *
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     *
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     */
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the roles model
     */
    readonly fields: rolesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<'roles', 'Int'>
    readonly description: FieldRef<'roles', 'String'>
  }

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export interface rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export interface rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export interface rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export interface rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export interface rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export interface rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export interface rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export interface rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export interface rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export interface rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export interface rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export interface rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export interface rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export interface rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export interface roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export interface rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }

  /**
   * Model services
   */

  export interface AggregateServices {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export interface ServicesAvgAggregateOutputType {
    id: number | null
  }

  export interface ServicesSumAggregateOutputType {
    id: number | null
  }

  export interface ServicesMinAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface ServicesMaxAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface ServicesCountAggregateOutputType {
    id: number
    description: number
    _all: number
  }

  export interface ServicesAvgAggregateInputType {
    id?: true
  }

  export interface ServicesSumAggregateInputType {
    id?: true
  }

  export interface ServicesMinAggregateInputType {
    id?: true
    description?: true
  }

  export interface ServicesMaxAggregateInputType {
    id?: true
    description?: true
  }

  export interface ServicesCountAggregateInputType {
    id?: true
    description?: true
    _all?: true
  }

  export interface ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned services
     */
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
    [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }

  export interface servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export interface ServicesGroupByOutputType {
    id: number
    description: string
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
          : GetScalarType<T[P], ServicesGroupByOutputType[P]>
      }
    >
  >

  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['services']>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['services']>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['services']>

  export interface servicesSelectScalar {
    id?: boolean
    description?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'description', ExtArgs['result']['services']>

  export interface $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'services'
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs['result']['services']>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     *
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     *
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     *
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     */
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the services model
     */
    readonly fields: servicesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly id: FieldRef<'services', 'Int'>
    readonly description: FieldRef<'services', 'String'>
  }

  // Custom InputTypes
  /**
   * services findUnique
   */
  export interface servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export interface servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export interface servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export interface servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export interface servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export interface servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export interface servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export interface servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services update
   */
  export interface servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export interface servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export interface servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services upsert
   */
  export interface servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export interface servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export interface servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services without action
   */
  export interface servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
  }

  /**
   * Model status
   */

  export interface AggregateStatus {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export interface StatusAvgAggregateOutputType {
    id: number | null
  }

  export interface StatusSumAggregateOutputType {
    id: number | null
  }

  export interface StatusMinAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface StatusMaxAggregateOutputType {
    id: number | null
    description: string | null
  }

  export interface StatusCountAggregateOutputType {
    id: number
    description: number
    _all: number
  }

  export interface StatusAvgAggregateInputType {
    id?: true
  }

  export interface StatusSumAggregateInputType {
    id?: true
  }

  export interface StatusMinAggregateInputType {
    id?: true
    description?: true
  }

  export interface StatusMaxAggregateInputType {
    id?: true
    description?: true
  }

  export interface StatusCountAggregateInputType {
    id?: true
    description?: true
    _all?: true
  }

  export interface StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which status to aggregate.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned statuses
     */
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
    [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }

  export interface statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: statusWhereInput
    orderBy?: statusOrderByWithAggregationInput | statusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export interface StatusGroupByOutputType {
    id: number
    description: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
          : GetScalarType<T[P], StatusGroupByOutputType[P]>
      }
    >
  >

  export type statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    bets_bets_statusTostatus?: boolean | status$bets_bets_statusTostatusArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['status']>

  export type statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['status']>

  export type statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
  }, ExtArgs['result']['status']>

  export interface statusSelectScalar {
    id?: boolean
    description?: boolean
  }

  export type statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'description', ExtArgs['result']['status']>
  export interface statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    bets_bets_statusTostatus?: boolean | status$bets_bets_statusTostatusArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface statusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {}
  export interface statusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {}

  export interface $statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'status'
    objects: {
      bets_bets_statusTostatus: Prisma.$betsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
    }, ExtArgs['result']['status']>
    composites: {}
  }

  type statusGetPayload<S extends boolean | null | undefined | statusDefaultArgs> = $Result.GetResult<Prisma.$statusPayload, S>

  type statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status'], meta: { name: 'status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {statusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statusFindUniqueArgs>(args: SelectSubset<T, statusFindUniqueArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {statusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statusFindUniqueOrThrowArgs>(args: SelectSubset<T, statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statusFindFirstArgs>(args?: SelectSubset<T, statusFindFirstArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statusFindFirstOrThrowArgs>(args?: SelectSubset<T, statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     *
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     *
     */
    findMany<T extends statusFindManyArgs>(args?: SelectSubset<T, statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {statusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     *
     */
    create<T extends statusCreateArgs>(args: SelectSubset<T, statusCreateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {statusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends statusCreateManyArgs>(args?: SelectSubset<T, statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {statusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends statusCreateManyAndReturnArgs>(args?: SelectSubset<T, statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {statusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     *
     */
    delete<T extends statusDeleteArgs>(args: SelectSubset<T, statusDeleteArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {statusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends statusUpdateArgs>(args: SelectSubset<T, statusUpdateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {statusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends statusDeleteManyArgs>(args?: SelectSubset<T, statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends statusUpdateManyArgs>(args: SelectSubset<T, statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {statusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends statusUpdateManyAndReturnArgs>(args: SelectSubset<T, statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {statusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends statusUpsertArgs>(args: SelectSubset<T, statusUpsertArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
     */
    count<T extends statusCountArgs>(
      args?: Subset<T, statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusGroupByArgs['orderBy'] }
        : { orderBy?: statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the status model
     */
    readonly fields: statusFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    bets_bets_statusTostatus<T extends status$bets_bets_statusTostatusArgs<ExtArgs> = {}>(args?: Subset<T, status$bets_bets_statusTostatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the status model
   */
  interface statusFieldRefs {
    readonly id: FieldRef<'status', 'Int'>
    readonly description: FieldRef<'status', 'String'>
  }

  // Custom InputTypes
  /**
   * status findUnique
   */
  export interface statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findUniqueOrThrow
   */
  export interface statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findFirst
   */
  export interface statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findFirstOrThrow
   */
  export interface statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findMany
   */
  export interface statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status create
   */
  export interface statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to create a status.
     */
    data: XOR<statusCreateInput, statusUncheckedCreateInput>
  }

  /**
   * status createMany
   */
  export interface statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status createManyAndReturn
   */
  export interface statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status update
   */
  export interface statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to update a status.
     */
    data: XOR<statusUpdateInput, statusUncheckedUpdateInput>
    /**
     * Choose, which status to update.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status updateMany
   */
  export interface statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to update.
     */
    limit?: number
  }

  /**
   * status updateManyAndReturn
   */
  export interface statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to update.
     */
    limit?: number
  }

  /**
   * status upsert
   */
  export interface statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The filter to search for the status to update in case it exists.
     */
    where: statusWhereUniqueInput
    /**
     * In case the status found by the `where` argument doesn't exist, create a new status with this data.
     */
    create: XOR<statusCreateInput, statusUncheckedCreateInput>
    /**
     * In case the status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusUpdateInput, statusUncheckedUpdateInput>
  }

  /**
   * status delete
   */
  export interface statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter which status to delete.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status deleteMany
   */
  export interface statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which statuses to delete
     */
    where?: statusWhereInput
    /**
     * Limit how many statuses to delete.
     */
    limit?: number
  }

  /**
   * status.bets_bets_statusTostatus
   */
  export interface status$bets_bets_statusTostatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    where?: betsWhereInput
    orderBy?: betsOrderByWithRelationInput | betsOrderByWithRelationInput[]
    cursor?: betsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetsScalarFieldEnum | BetsScalarFieldEnum[]
  }

  /**
   * status without action
   */
  export interface statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the status
     */
    omit?: statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
  }

  /**
   * Model tradeOffers
   */

  export interface AggregateTradeOffers {
    _count: TradeOffersCountAggregateOutputType | null
    _avg: TradeOffersAvgAggregateOutputType | null
    _sum: TradeOffersSumAggregateOutputType | null
    _min: TradeOffersMinAggregateOutputType | null
    _max: TradeOffersMaxAggregateOutputType | null
  }

  export interface TradeOffersAvgAggregateOutputType {
    id: number | null
    tradeId: number | null
    userId: number | null
    value: number | null
  }

  export interface TradeOffersSumAggregateOutputType {
    id: bigint | null
    tradeId: number | null
    userId: number | null
    value: number | null
  }

  export interface TradeOffersMinAggregateOutputType {
    id: bigint | null
    tradeId: number | null
    userId: number | null
    value: number | null
    isAccepted: boolean | null
    createdAt: Date | null
  }

  export interface TradeOffersMaxAggregateOutputType {
    id: bigint | null
    tradeId: number | null
    userId: number | null
    value: number | null
    isAccepted: boolean | null
    createdAt: Date | null
  }

  export interface TradeOffersCountAggregateOutputType {
    id: number
    tradeId: number
    userId: number
    value: number
    isAccepted: number
    createdAt: number
    _all: number
  }

  export interface TradeOffersAvgAggregateInputType {
    id?: true
    tradeId?: true
    userId?: true
    value?: true
  }

  export interface TradeOffersSumAggregateInputType {
    id?: true
    tradeId?: true
    userId?: true
    value?: true
  }

  export interface TradeOffersMinAggregateInputType {
    id?: true
    tradeId?: true
    userId?: true
    value?: true
    isAccepted?: true
    createdAt?: true
  }

  export interface TradeOffersMaxAggregateInputType {
    id?: true
    tradeId?: true
    userId?: true
    value?: true
    isAccepted?: true
    createdAt?: true
  }

  export interface TradeOffersCountAggregateInputType {
    id?: true
    tradeId?: true
    userId?: true
    value?: true
    isAccepted?: true
    createdAt?: true
    _all?: true
  }

  export interface TradeOffersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which tradeOffers to aggregate.
     */
    where?: tradeOffersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tradeOffers to fetch.
     */
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tradeOffersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tradeOffers
     */
    _count?: true | TradeOffersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: TradeOffersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: TradeOffersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: TradeOffersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: TradeOffersMaxAggregateInputType
  }

  export type GetTradeOffersAggregateType<T extends TradeOffersAggregateArgs> = {
    [P in keyof T & keyof AggregateTradeOffers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTradeOffers[P]>
      : GetScalarType<T[P], AggregateTradeOffers[P]>
  }

  export interface tradeOffersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradeOffersWhereInput
    orderBy?: tradeOffersOrderByWithAggregationInput | tradeOffersOrderByWithAggregationInput[]
    by: TradeOffersScalarFieldEnum[] | TradeOffersScalarFieldEnum
    having?: tradeOffersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeOffersCountAggregateInputType | true
    _avg?: TradeOffersAvgAggregateInputType
    _sum?: TradeOffersSumAggregateInputType
    _min?: TradeOffersMinAggregateInputType
    _max?: TradeOffersMaxAggregateInputType
  }

  export interface TradeOffersGroupByOutputType {
    id: bigint
    tradeId: number | null
    userId: number | null
    value: number
    isAccepted: boolean | null
    createdAt: Date
    _count: TradeOffersCountAggregateOutputType | null
    _avg: TradeOffersAvgAggregateOutputType | null
    _sum: TradeOffersSumAggregateOutputType | null
    _min: TradeOffersMinAggregateOutputType | null
    _max: TradeOffersMaxAggregateOutputType | null
  }

  type GetTradeOffersGroupByPayload<T extends tradeOffersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeOffersGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof TradeOffersGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TradeOffersGroupByOutputType[P]>
          : GetScalarType<T[P], TradeOffersGroupByOutputType[P]>
      }
    >
  >

  export type tradeOffersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    value?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }, ExtArgs['result']['tradeOffers']>

  export type tradeOffersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    value?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }, ExtArgs['result']['tradeOffers']>

  export type tradeOffersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    value?: boolean
    isAccepted?: boolean
    createdAt?: boolean
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }, ExtArgs['result']['tradeOffers']>

  export interface tradeOffersSelectScalar {
    id?: boolean
    tradeId?: boolean
    userId?: boolean
    value?: boolean
    isAccepted?: boolean
    createdAt?: boolean
  }

  export type tradeOffersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'tradeId' | 'userId' | 'value' | 'isAccepted' | 'createdAt', ExtArgs['result']['tradeOffers']>
  export interface tradeOffersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }
  export interface tradeOffersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }
  export interface tradeOffersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    trades?: boolean | tradeOffers$tradesArgs<ExtArgs>
    users?: boolean | tradeOffers$usersArgs<ExtArgs>
  }

  export interface $tradeOffersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'tradeOffers'
    objects: {
      trades: Prisma.$tradesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tradeId: number | null
      userId: number | null
      value: number
      isAccepted: boolean | null
      createdAt: Date
    }, ExtArgs['result']['tradeOffers']>
    composites: {}
  }

  type tradeOffersGetPayload<S extends boolean | null | undefined | tradeOffersDefaultArgs> = $Result.GetResult<Prisma.$tradeOffersPayload, S>

  type tradeOffersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tradeOffersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeOffersCountAggregateInputType | true
    }

  export interface tradeOffersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tradeOffers'], meta: { name: 'tradeOffers' } }
    /**
     * Find zero or one TradeOffers that matches the filter.
     * @param {tradeOffersFindUniqueArgs} args - Arguments to find a TradeOffers
     * @example
     * // Get one TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradeOffersFindUniqueArgs>(args: SelectSubset<T, tradeOffersFindUniqueArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TradeOffers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tradeOffersFindUniqueOrThrowArgs} args - Arguments to find a TradeOffers
     * @example
     * // Get one TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradeOffersFindUniqueOrThrowArgs>(args: SelectSubset<T, tradeOffersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersFindFirstArgs} args - Arguments to find a TradeOffers
     * @example
     * // Get one TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradeOffersFindFirstArgs>(args?: SelectSubset<T, tradeOffersFindFirstArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TradeOffers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersFindFirstOrThrowArgs} args - Arguments to find a TradeOffers
     * @example
     * // Get one TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradeOffersFindFirstOrThrowArgs>(args?: SelectSubset<T, tradeOffersFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TradeOffers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findMany()
     *
     * // Get first 10 TradeOffers
     * const tradeOffers = await prisma.tradeOffers.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tradeOffersWithIdOnly = await prisma.tradeOffers.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tradeOffersFindManyArgs>(args?: SelectSubset<T, tradeOffersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a TradeOffers.
     * @param {tradeOffersCreateArgs} args - Arguments to create a TradeOffers.
     * @example
     * // Create one TradeOffers
     * const TradeOffers = await prisma.tradeOffers.create({
     *   data: {
     *     // ... data to create a TradeOffers
     *   }
     * })
     *
     */
    create<T extends tradeOffersCreateArgs>(args: SelectSubset<T, tradeOffersCreateArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TradeOffers.
     * @param {tradeOffersCreateManyArgs} args - Arguments to create many TradeOffers.
     * @example
     * // Create many TradeOffers
     * const tradeOffers = await prisma.tradeOffers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tradeOffersCreateManyArgs>(args?: SelectSubset<T, tradeOffersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TradeOffers and returns the data saved in the database.
     * @param {tradeOffersCreateManyAndReturnArgs} args - Arguments to create many TradeOffers.
     * @example
     * // Create many TradeOffers
     * const tradeOffers = await prisma.tradeOffers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TradeOffers and only return the `id`
     * const tradeOffersWithIdOnly = await prisma.tradeOffers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tradeOffersCreateManyAndReturnArgs>(args?: SelectSubset<T, tradeOffersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a TradeOffers.
     * @param {tradeOffersDeleteArgs} args - Arguments to delete one TradeOffers.
     * @example
     * // Delete one TradeOffers
     * const TradeOffers = await prisma.tradeOffers.delete({
     *   where: {
     *     // ... filter to delete one TradeOffers
     *   }
     * })
     *
     */
    delete<T extends tradeOffersDeleteArgs>(args: SelectSubset<T, tradeOffersDeleteArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TradeOffers.
     * @param {tradeOffersUpdateArgs} args - Arguments to update one TradeOffers.
     * @example
     * // Update one TradeOffers
     * const tradeOffers = await prisma.tradeOffers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tradeOffersUpdateArgs>(args: SelectSubset<T, tradeOffersUpdateArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TradeOffers.
     * @param {tradeOffersDeleteManyArgs} args - Arguments to filter TradeOffers to delete.
     * @example
     * // Delete a few TradeOffers
     * const { count } = await prisma.tradeOffers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tradeOffersDeleteManyArgs>(args?: SelectSubset<T, tradeOffersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TradeOffers
     * const tradeOffers = await prisma.tradeOffers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tradeOffersUpdateManyArgs>(args: SelectSubset<T, tradeOffersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TradeOffers and returns the data updated in the database.
     * @param {tradeOffersUpdateManyAndReturnArgs} args - Arguments to update many TradeOffers.
     * @example
     * // Update many TradeOffers
     * const tradeOffers = await prisma.tradeOffers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TradeOffers and only return the `id`
     * const tradeOffersWithIdOnly = await prisma.tradeOffers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends tradeOffersUpdateManyAndReturnArgs>(args: SelectSubset<T, tradeOffersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one TradeOffers.
     * @param {tradeOffersUpsertArgs} args - Arguments to update or create a TradeOffers.
     * @example
     * // Update or create a TradeOffers
     * const tradeOffers = await prisma.tradeOffers.upsert({
     *   create: {
     *     // ... data to create a TradeOffers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TradeOffers we want to update
     *   }
     * })
     */
    upsert<T extends tradeOffersUpsertArgs>(args: SelectSubset<T, tradeOffersUpsertArgs<ExtArgs>>): Prisma__tradeOffersClient<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersCountArgs} args - Arguments to filter TradeOffers to count.
     * @example
     * // Count the number of TradeOffers
     * const count = await prisma.tradeOffers.count({
     *   where: {
     *     // ... the filter for the TradeOffers we want to count
     *   }
     * })
     */
    count<T extends tradeOffersCountArgs>(
      args?: Subset<T, tradeOffersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeOffersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeOffersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends TradeOffersAggregateArgs>(args: Subset<T, TradeOffersAggregateArgs>): Prisma.PrismaPromise<GetTradeOffersAggregateType<T>>

    /**
     * Group by TradeOffers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradeOffersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends tradeOffersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradeOffersGroupByArgs['orderBy'] }
        : { orderBy?: tradeOffersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, tradeOffersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeOffersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the tradeOffers model
     */
    readonly fields: tradeOffersFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for tradeOffers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradeOffersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    trades<T extends tradeOffers$tradesArgs<ExtArgs> = {}>(args?: Subset<T, tradeOffers$tradesArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends tradeOffers$usersArgs<ExtArgs> = {}>(args?: Subset<T, tradeOffers$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the tradeOffers model
   */
  interface tradeOffersFieldRefs {
    readonly id: FieldRef<'tradeOffers', 'BigInt'>
    readonly tradeId: FieldRef<'tradeOffers', 'Int'>
    readonly userId: FieldRef<'tradeOffers', 'Int'>
    readonly value: FieldRef<'tradeOffers', 'Int'>
    readonly isAccepted: FieldRef<'tradeOffers', 'Boolean'>
    readonly createdAt: FieldRef<'tradeOffers', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * tradeOffers findUnique
   */
  export interface tradeOffersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter, which tradeOffers to fetch.
     */
    where: tradeOffersWhereUniqueInput
  }

  /**
   * tradeOffers findUniqueOrThrow
   */
  export interface tradeOffersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter, which tradeOffers to fetch.
     */
    where: tradeOffersWhereUniqueInput
  }

  /**
   * tradeOffers findFirst
   */
  export interface tradeOffersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter, which tradeOffers to fetch.
     */
    where?: tradeOffersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tradeOffers to fetch.
     */
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tradeOffers.
     */
    cursor?: tradeOffersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tradeOffers.
     */
    distinct?: TradeOffersScalarFieldEnum | TradeOffersScalarFieldEnum[]
  }

  /**
   * tradeOffers findFirstOrThrow
   */
  export interface tradeOffersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter, which tradeOffers to fetch.
     */
    where?: tradeOffersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tradeOffers to fetch.
     */
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tradeOffers.
     */
    cursor?: tradeOffersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tradeOffers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tradeOffers.
     */
    distinct?: TradeOffersScalarFieldEnum | TradeOffersScalarFieldEnum[]
  }

  /**
   * tradeOffers findMany
   */
  export interface tradeOffersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter, which tradeOffers to fetch.
     */
    where?: tradeOffersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tradeOffers to fetch.
     */
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tradeOffers.
     */
    cursor?: tradeOffersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tradeOffers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tradeOffers.
     */
    skip?: number
    distinct?: TradeOffersScalarFieldEnum | TradeOffersScalarFieldEnum[]
  }

  /**
   * tradeOffers create
   */
  export interface tradeOffersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * The data needed to create a tradeOffers.
     */
    data: XOR<tradeOffersCreateInput, tradeOffersUncheckedCreateInput>
  }

  /**
   * tradeOffers createMany
   */
  export interface tradeOffersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many tradeOffers.
     */
    data: tradeOffersCreateManyInput | tradeOffersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tradeOffers createManyAndReturn
   */
  export interface tradeOffersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * The data used to create many tradeOffers.
     */
    data: tradeOffersCreateManyInput | tradeOffersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tradeOffers update
   */
  export interface tradeOffersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * The data needed to update a tradeOffers.
     */
    data: XOR<tradeOffersUpdateInput, tradeOffersUncheckedUpdateInput>
    /**
     * Choose, which tradeOffers to update.
     */
    where: tradeOffersWhereUniqueInput
  }

  /**
   * tradeOffers updateMany
   */
  export interface tradeOffersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update tradeOffers.
     */
    data: XOR<tradeOffersUpdateManyMutationInput, tradeOffersUncheckedUpdateManyInput>
    /**
     * Filter which tradeOffers to update
     */
    where?: tradeOffersWhereInput
    /**
     * Limit how many tradeOffers to update.
     */
    limit?: number
  }

  /**
   * tradeOffers updateManyAndReturn
   */
  export interface tradeOffersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * The data used to update tradeOffers.
     */
    data: XOR<tradeOffersUpdateManyMutationInput, tradeOffersUncheckedUpdateManyInput>
    /**
     * Filter which tradeOffers to update
     */
    where?: tradeOffersWhereInput
    /**
     * Limit how many tradeOffers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tradeOffers upsert
   */
  export interface tradeOffersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * The filter to search for the tradeOffers to update in case it exists.
     */
    where: tradeOffersWhereUniqueInput
    /**
     * In case the tradeOffers found by the `where` argument doesn't exist, create a new tradeOffers with this data.
     */
    create: XOR<tradeOffersCreateInput, tradeOffersUncheckedCreateInput>
    /**
     * In case the tradeOffers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradeOffersUpdateInput, tradeOffersUncheckedUpdateInput>
  }

  /**
   * tradeOffers delete
   */
  export interface tradeOffersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    /**
     * Filter which tradeOffers to delete.
     */
    where: tradeOffersWhereUniqueInput
  }

  /**
   * tradeOffers deleteMany
   */
  export interface tradeOffersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which tradeOffers to delete
     */
    where?: tradeOffersWhereInput
    /**
     * Limit how many tradeOffers to delete.
     */
    limit?: number
  }

  /**
   * tradeOffers.trades
   */
  export interface tradeOffers$tradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    where?: tradesWhereInput
  }

  /**
   * tradeOffers.users
   */
  export interface tradeOffers$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tradeOffers without action
   */
  export interface tradeOffersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
  }

  /**
   * Model trades
   */

  export interface AggregateTrades {
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  export interface TradesAvgAggregateOutputType {
    id: number | null
    supplierId: number | null
    customerId: number | null
  }

  export interface TradesSumAggregateOutputType {
    id: number | null
    supplierId: number | null
    customerId: number | null
  }

  export interface TradesMinAggregateOutputType {
    id: number | null
    supplierId: number | null
    customerId: number | null
    service: string | null
    createdAt: Date | null
    deadlineAt: Date | null
    tradedAt: Date | null
  }

  export interface TradesMaxAggregateOutputType {
    id: number | null
    supplierId: number | null
    customerId: number | null
    service: string | null
    createdAt: Date | null
    deadlineAt: Date | null
    tradedAt: Date | null
  }

  export interface TradesCountAggregateOutputType {
    id: number
    supplierId: number
    customerId: number
    service: number
    createdAt: number
    deadlineAt: number
    tradedAt: number
    _all: number
  }

  export interface TradesAvgAggregateInputType {
    id?: true
    supplierId?: true
    customerId?: true
  }

  export interface TradesSumAggregateInputType {
    id?: true
    supplierId?: true
    customerId?: true
  }

  export interface TradesMinAggregateInputType {
    id?: true
    supplierId?: true
    customerId?: true
    service?: true
    createdAt?: true
    deadlineAt?: true
    tradedAt?: true
  }

  export interface TradesMaxAggregateInputType {
    id?: true
    supplierId?: true
    customerId?: true
    service?: true
    createdAt?: true
    deadlineAt?: true
    tradedAt?: true
  }

  export interface TradesCountAggregateInputType {
    id?: true
    supplierId?: true
    customerId?: true
    service?: true
    createdAt?: true
    deadlineAt?: true
    tradedAt?: true
    _all?: true
  }

  export interface TradesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which trades to aggregate.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trades
     */
    _count?: true | TradesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: TradesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: TradesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: TradesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: TradesMaxAggregateInputType
  }

  export type GetTradesAggregateType<T extends TradesAggregateArgs> = {
    [P in keyof T & keyof AggregateTrades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrades[P]>
      : GetScalarType<T[P], AggregateTrades[P]>
  }

  export interface tradesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: tradesWhereInput
    orderBy?: tradesOrderByWithAggregationInput | tradesOrderByWithAggregationInput[]
    by: TradesScalarFieldEnum[] | TradesScalarFieldEnum
    having?: tradesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradesCountAggregateInputType | true
    _avg?: TradesAvgAggregateInputType
    _sum?: TradesSumAggregateInputType
    _min?: TradesMinAggregateInputType
    _max?: TradesMaxAggregateInputType
  }

  export interface TradesGroupByOutputType {
    id: number
    supplierId: number | null
    customerId: number | null
    service: string | null
    createdAt: Date
    deadlineAt: Date | null
    tradedAt: Date | null
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  type GetTradesGroupByPayload<T extends tradesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradesGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof TradesGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TradesGroupByOutputType[P]>
          : GetScalarType<T[P], TradesGroupByOutputType[P]>
      }
    >
  >

  export type tradesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    customerId?: boolean
    service?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    tradedAt?: boolean
    tradeOffers?: boolean | trades$tradeOffersArgs<ExtArgs>
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
    _count?: boolean | TradesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['trades']>

  export type tradesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    customerId?: boolean
    service?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    tradedAt?: boolean
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
  }, ExtArgs['result']['trades']>

  export type tradesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    customerId?: boolean
    service?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    tradedAt?: boolean
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
  }, ExtArgs['result']['trades']>

  export interface tradesSelectScalar {
    id?: boolean
    supplierId?: boolean
    customerId?: boolean
    service?: boolean
    createdAt?: boolean
    deadlineAt?: boolean
    tradedAt?: boolean
  }

  export type tradesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'supplierId' | 'customerId' | 'service' | 'createdAt' | 'deadlineAt' | 'tradedAt', ExtArgs['result']['trades']>
  export interface tradesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    tradeOffers?: boolean | trades$tradeOffersArgs<ExtArgs>
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
    _count?: boolean | TradesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface tradesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
  }
  export interface tradesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users_trades_customerIdTousers?: boolean | trades$users_trades_customerIdTousersArgs<ExtArgs>
    users_trades_supplierIdTousers?: boolean | trades$users_trades_supplierIdTousersArgs<ExtArgs>
  }

  export interface $tradesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'trades'
    objects: {
      tradeOffers: Prisma.$tradeOffersPayload<ExtArgs>[]
      users_trades_customerIdTousers: Prisma.$usersPayload<ExtArgs> | null
      users_trades_supplierIdTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      supplierId: number | null
      customerId: number | null
      service: string | null
      createdAt: Date
      deadlineAt: Date | null
      tradedAt: Date | null
    }, ExtArgs['result']['trades']>
    composites: {}
  }

  type tradesGetPayload<S extends boolean | null | undefined | tradesDefaultArgs> = $Result.GetResult<Prisma.$tradesPayload, S>

  type tradesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tradesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradesCountAggregateInputType | true
    }

  export interface tradesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trades'], meta: { name: 'trades' } }
    /**
     * Find zero or one Trades that matches the filter.
     * @param {tradesFindUniqueArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tradesFindUniqueArgs>(args: SelectSubset<T, tradesFindUniqueArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tradesFindUniqueOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tradesFindUniqueOrThrowArgs>(args: SelectSubset<T, tradesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindFirstArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tradesFindFirstArgs>(args?: SelectSubset<T, tradesFindFirstArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindFirstOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tradesFindFirstOrThrowArgs>(args?: SelectSubset<T, tradesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trades.findMany()
     *
     * // Get first 10 Trades
     * const trades = await prisma.trades.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tradesWithIdOnly = await prisma.trades.findMany({ select: { id: true } })
     *
     */
    findMany<T extends tradesFindManyArgs>(args?: SelectSubset<T, tradesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Trades.
     * @param {tradesCreateArgs} args - Arguments to create a Trades.
     * @example
     * // Create one Trades
     * const Trades = await prisma.trades.create({
     *   data: {
     *     // ... data to create a Trades
     *   }
     * })
     *
     */
    create<T extends tradesCreateArgs>(args: SelectSubset<T, tradesCreateArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {tradesCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends tradesCreateManyArgs>(args?: SelectSubset<T, tradesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {tradesCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Trades and only return the `id`
     * const tradesWithIdOnly = await prisma.trades.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends tradesCreateManyAndReturnArgs>(args?: SelectSubset<T, tradesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a Trades.
     * @param {tradesDeleteArgs} args - Arguments to delete one Trades.
     * @example
     * // Delete one Trades
     * const Trades = await prisma.trades.delete({
     *   where: {
     *     // ... filter to delete one Trades
     *   }
     * })
     *
     */
    delete<T extends tradesDeleteArgs>(args: SelectSubset<T, tradesDeleteArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trades.
     * @param {tradesUpdateArgs} args - Arguments to update one Trades.
     * @example
     * // Update one Trades
     * const trades = await prisma.trades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends tradesUpdateArgs>(args: SelectSubset<T, tradesUpdateArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {tradesDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends tradesDeleteManyArgs>(args?: SelectSubset<T, tradesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends tradesUpdateManyArgs>(args: SelectSubset<T, tradesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {tradesUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Trades and only return the `id`
     * const tradesWithIdOnly = await prisma.trades.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends tradesUpdateManyAndReturnArgs>(args: SelectSubset<T, tradesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one Trades.
     * @param {tradesUpsertArgs} args - Arguments to update or create a Trades.
     * @example
     * // Update or create a Trades
     * const trades = await prisma.trades.upsert({
     *   create: {
     *     // ... data to create a Trades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trades we want to update
     *   }
     * })
     */
    upsert<T extends tradesUpsertArgs>(args: SelectSubset<T, tradesUpsertArgs<ExtArgs>>): Prisma__tradesClient<$Result.GetResult<Prisma.$tradesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trades.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
     */
    count<T extends tradesCountArgs>(
      args?: Subset<T, tradesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends TradesAggregateArgs>(args: Subset<T, TradesAggregateArgs>): Prisma.PrismaPromise<GetTradesAggregateType<T>>

    /**
     * Group by Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tradesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends tradesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tradesGroupByArgs['orderBy'] }
        : { orderBy?: tradesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, tradesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the trades model
     */
    readonly fields: tradesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for trades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tradesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    tradeOffers<T extends trades$tradeOffersArgs<ExtArgs> = {}>(args?: Subset<T, trades$tradeOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tradeOffersPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    users_trades_customerIdTousers<T extends trades$users_trades_customerIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, trades$users_trades_customerIdTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_trades_supplierIdTousers<T extends trades$users_trades_supplierIdTousersArgs<ExtArgs> = {}>(args?: Subset<T, trades$users_trades_supplierIdTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the trades model
   */
  interface tradesFieldRefs {
    readonly id: FieldRef<'trades', 'Int'>
    readonly supplierId: FieldRef<'trades', 'Int'>
    readonly customerId: FieldRef<'trades', 'Int'>
    readonly service: FieldRef<'trades', 'String'>
    readonly createdAt: FieldRef<'trades', 'DateTime'>
    readonly deadlineAt: FieldRef<'trades', 'DateTime'>
    readonly tradedAt: FieldRef<'trades', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * trades findUnique
   */
  export interface tradesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades findUniqueOrThrow
   */
  export interface tradesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades findFirst
   */
  export interface tradesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades findFirstOrThrow
   */
  export interface tradesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades findMany
   */
  export interface tradesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter, which trades to fetch.
     */
    where?: tradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trades to fetch.
     */
    orderBy?: tradesOrderByWithRelationInput | tradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trades.
     */
    cursor?: tradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trades.
     */
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * trades create
   */
  export interface tradesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The data needed to create a trades.
     */
    data?: XOR<tradesCreateInput, tradesUncheckedCreateInput>
  }

  /**
   * trades createMany
   */
  export interface tradesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many trades.
     */
    data: tradesCreateManyInput | tradesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trades createManyAndReturn
   */
  export interface tradesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * The data used to create many trades.
     */
    data: tradesCreateManyInput | tradesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * trades update
   */
  export interface tradesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The data needed to update a trades.
     */
    data: XOR<tradesUpdateInput, tradesUncheckedUpdateInput>
    /**
     * Choose, which trades to update.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades updateMany
   */
  export interface tradesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update trades.
     */
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyInput>
    /**
     * Filter which trades to update
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to update.
     */
    limit?: number
  }

  /**
   * trades updateManyAndReturn
   */
  export interface tradesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * The data used to update trades.
     */
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyInput>
    /**
     * Filter which trades to update
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * trades upsert
   */
  export interface tradesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * The filter to search for the trades to update in case it exists.
     */
    where: tradesWhereUniqueInput
    /**
     * In case the trades found by the `where` argument doesn't exist, create a new trades with this data.
     */
    create: XOR<tradesCreateInput, tradesUncheckedCreateInput>
    /**
     * In case the trades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tradesUpdateInput, tradesUncheckedUpdateInput>
  }

  /**
   * trades delete
   */
  export interface tradesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
    /**
     * Filter which trades to delete.
     */
    where: tradesWhereUniqueInput
  }

  /**
   * trades deleteMany
   */
  export interface tradesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which trades to delete
     */
    where?: tradesWhereInput
    /**
     * Limit how many trades to delete.
     */
    limit?: number
  }

  /**
   * trades.tradeOffers
   */
  export interface trades$tradeOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the tradeOffers
     */
    select?: tradeOffersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tradeOffers
     */
    omit?: tradeOffersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradeOffersInclude<ExtArgs> | null
    where?: tradeOffersWhereInput
    orderBy?: tradeOffersOrderByWithRelationInput | tradeOffersOrderByWithRelationInput[]
    cursor?: tradeOffersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TradeOffersScalarFieldEnum | TradeOffersScalarFieldEnum[]
  }

  /**
   * trades.users_trades_customerIdTousers
   */
  export interface trades$users_trades_customerIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * trades.users_trades_supplierIdTousers
   */
  export interface trades$users_trades_supplierIdTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * trades without action
   */
  export interface tradesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the trades
     */
    select?: tradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trades
     */
    omit?: tradesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tradesInclude<ExtArgs> | null
  }

  /**
   * Model userWallets
   */

  export interface AggregateUserWallets {
    _count: UserWalletsCountAggregateOutputType | null
    _avg: UserWalletsAvgAggregateOutputType | null
    _sum: UserWalletsSumAggregateOutputType | null
    _min: UserWalletsMinAggregateOutputType | null
    _max: UserWalletsMaxAggregateOutputType | null
  }

  export interface UserWalletsAvgAggregateOutputType {
    id: number | null
    balance: number | null
  }

  export interface UserWalletsSumAggregateOutputType {
    id: number | null
    balance: number | null
  }

  export interface UserWalletsMinAggregateOutputType {
    id: number | null
    balance: number | null
  }

  export interface UserWalletsMaxAggregateOutputType {
    id: number | null
    balance: number | null
  }

  export interface UserWalletsCountAggregateOutputType {
    id: number
    balance: number
    _all: number
  }

  export interface UserWalletsAvgAggregateInputType {
    id?: true
    balance?: true
  }

  export interface UserWalletsSumAggregateInputType {
    id?: true
    balance?: true
  }

  export interface UserWalletsMinAggregateInputType {
    id?: true
    balance?: true
  }

  export interface UserWalletsMaxAggregateInputType {
    id?: true
    balance?: true
  }

  export interface UserWalletsCountAggregateInputType {
    id?: true
    balance?: true
    _all?: true
  }

  export interface UserWalletsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which userWallets to aggregate.
     */
    where?: userWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userWallets to fetch.
     */
    orderBy?: userWalletsOrderByWithRelationInput | userWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned userWallets
     */
    _count?: true | UserWalletsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: UserWalletsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: UserWalletsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: UserWalletsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: UserWalletsMaxAggregateInputType
  }

  export type GetUserWalletsAggregateType<T extends UserWalletsAggregateArgs> = {
    [P in keyof T & keyof AggregateUserWallets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWallets[P]>
      : GetScalarType<T[P], AggregateUserWallets[P]>
  }

  export interface userWalletsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: userWalletsWhereInput
    orderBy?: userWalletsOrderByWithAggregationInput | userWalletsOrderByWithAggregationInput[]
    by: UserWalletsScalarFieldEnum[] | UserWalletsScalarFieldEnum
    having?: userWalletsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWalletsCountAggregateInputType | true
    _avg?: UserWalletsAvgAggregateInputType
    _sum?: UserWalletsSumAggregateInputType
    _min?: UserWalletsMinAggregateInputType
    _max?: UserWalletsMaxAggregateInputType
  }

  export interface UserWalletsGroupByOutputType {
    id: number
    balance: number
    _count: UserWalletsCountAggregateOutputType | null
    _avg: UserWalletsAvgAggregateOutputType | null
    _sum: UserWalletsSumAggregateOutputType | null
    _min: UserWalletsMinAggregateOutputType | null
    _max: UserWalletsMaxAggregateOutputType | null
  }

  type GetUserWalletsGroupByPayload<T extends userWalletsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWalletsGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof UserWalletsGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserWalletsGroupByOutputType[P]>
          : GetScalarType<T[P], UserWalletsGroupByOutputType[P]>
      }
    >
  >

  export type userWalletsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs['result']['userWallets']>

  export type userWalletsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs['result']['userWallets']>

  export type userWalletsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs['result']['userWallets']>

  export interface userWalletsSelectScalar {
    id?: boolean
    balance?: boolean
  }

  export type userWalletsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'balance', ExtArgs['result']['userWallets']>
  export interface userWalletsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export interface userWalletsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export interface userWalletsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export interface $userWalletsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'userWallets'
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      balance: number
    }, ExtArgs['result']['userWallets']>
    composites: {}
  }

  type userWalletsGetPayload<S extends boolean | null | undefined | userWalletsDefaultArgs> = $Result.GetResult<Prisma.$userWalletsPayload, S>

  type userWalletsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userWalletsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWalletsCountAggregateInputType | true
    }

  export interface userWalletsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userWallets'], meta: { name: 'userWallets' } }
    /**
     * Find zero or one UserWallets that matches the filter.
     * @param {userWalletsFindUniqueArgs} args - Arguments to find a UserWallets
     * @example
     * // Get one UserWallets
     * const userWallets = await prisma.userWallets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userWalletsFindUniqueArgs>(args: SelectSubset<T, userWalletsFindUniqueArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWallets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userWalletsFindUniqueOrThrowArgs} args - Arguments to find a UserWallets
     * @example
     * // Get one UserWallets
     * const userWallets = await prisma.userWallets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userWalletsFindUniqueOrThrowArgs>(args: SelectSubset<T, userWalletsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsFindFirstArgs} args - Arguments to find a UserWallets
     * @example
     * // Get one UserWallets
     * const userWallets = await prisma.userWallets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userWalletsFindFirstArgs>(args?: SelectSubset<T, userWalletsFindFirstArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWallets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsFindFirstOrThrowArgs} args - Arguments to find a UserWallets
     * @example
     * // Get one UserWallets
     * const userWallets = await prisma.userWallets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userWalletsFindFirstOrThrowArgs>(args?: SelectSubset<T, userWalletsFindFirstOrThrowArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWallets
     * const userWallets = await prisma.userWallets.findMany()
     *
     * // Get first 10 UserWallets
     * const userWallets = await prisma.userWallets.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWalletsWithIdOnly = await prisma.userWallets.findMany({ select: { id: true } })
     *
     */
    findMany<T extends userWalletsFindManyArgs>(args?: SelectSubset<T, userWalletsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a UserWallets.
     * @param {userWalletsCreateArgs} args - Arguments to create a UserWallets.
     * @example
     * // Create one UserWallets
     * const UserWallets = await prisma.userWallets.create({
     *   data: {
     *     // ... data to create a UserWallets
     *   }
     * })
     *
     */
    create<T extends userWalletsCreateArgs>(args: SelectSubset<T, userWalletsCreateArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWallets.
     * @param {userWalletsCreateManyArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallets = await prisma.userWallets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userWalletsCreateManyArgs>(args?: SelectSubset<T, userWalletsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWallets and returns the data saved in the database.
     * @param {userWalletsCreateManyAndReturnArgs} args - Arguments to create many UserWallets.
     * @example
     * // Create many UserWallets
     * const userWallets = await prisma.userWallets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many UserWallets and only return the `id`
     * const userWalletsWithIdOnly = await prisma.userWallets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends userWalletsCreateManyAndReturnArgs>(args?: SelectSubset<T, userWalletsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a UserWallets.
     * @param {userWalletsDeleteArgs} args - Arguments to delete one UserWallets.
     * @example
     * // Delete one UserWallets
     * const UserWallets = await prisma.userWallets.delete({
     *   where: {
     *     // ... filter to delete one UserWallets
     *   }
     * })
     *
     */
    delete<T extends userWalletsDeleteArgs>(args: SelectSubset<T, userWalletsDeleteArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWallets.
     * @param {userWalletsUpdateArgs} args - Arguments to update one UserWallets.
     * @example
     * // Update one UserWallets
     * const userWallets = await prisma.userWallets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends userWalletsUpdateArgs>(args: SelectSubset<T, userWalletsUpdateArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWallets.
     * @param {userWalletsDeleteManyArgs} args - Arguments to filter UserWallets to delete.
     * @example
     * // Delete a few UserWallets
     * const { count } = await prisma.userWallets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userWalletsDeleteManyArgs>(args?: SelectSubset<T, userWalletsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWallets
     * const userWallets = await prisma.userWallets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends userWalletsUpdateManyArgs>(args: SelectSubset<T, userWalletsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWallets and returns the data updated in the database.
     * @param {userWalletsUpdateManyAndReturnArgs} args - Arguments to update many UserWallets.
     * @example
     * // Update many UserWallets
     * const userWallets = await prisma.userWallets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more UserWallets and only return the `id`
     * const userWalletsWithIdOnly = await prisma.userWallets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends userWalletsUpdateManyAndReturnArgs>(args: SelectSubset<T, userWalletsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one UserWallets.
     * @param {userWalletsUpsertArgs} args - Arguments to update or create a UserWallets.
     * @example
     * // Update or create a UserWallets
     * const userWallets = await prisma.userWallets.upsert({
     *   create: {
     *     // ... data to create a UserWallets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWallets we want to update
     *   }
     * })
     */
    upsert<T extends userWalletsUpsertArgs>(args: SelectSubset<T, userWalletsUpsertArgs<ExtArgs>>): Prisma__userWalletsClient<$Result.GetResult<Prisma.$userWalletsPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsCountArgs} args - Arguments to filter UserWallets to count.
     * @example
     * // Count the number of UserWallets
     * const count = await prisma.userWallets.count({
     *   where: {
     *     // ... the filter for the UserWallets we want to count
     *   }
     * })
     */
    count<T extends userWalletsCountArgs>(
      args?: Subset<T, userWalletsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWalletsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWalletsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends UserWalletsAggregateArgs>(args: Subset<T, UserWalletsAggregateArgs>): Prisma.PrismaPromise<GetUserWalletsAggregateType<T>>

    /**
     * Group by UserWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userWalletsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends userWalletsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userWalletsGroupByArgs['orderBy'] }
        : { orderBy?: userWalletsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, userWalletsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWalletsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the userWallets model
     */
    readonly fields: userWalletsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for userWallets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userWalletsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the userWallets model
   */
  interface userWalletsFieldRefs {
    readonly id: FieldRef<'userWallets', 'Int'>
    readonly balance: FieldRef<'userWallets', 'Int'>
  }

  // Custom InputTypes
  /**
   * userWallets findUnique
   */
  export interface userWalletsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter, which userWallets to fetch.
     */
    where: userWalletsWhereUniqueInput
  }

  /**
   * userWallets findUniqueOrThrow
   */
  export interface userWalletsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter, which userWallets to fetch.
     */
    where: userWalletsWhereUniqueInput
  }

  /**
   * userWallets findFirst
   */
  export interface userWalletsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter, which userWallets to fetch.
     */
    where?: userWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userWallets to fetch.
     */
    orderBy?: userWalletsOrderByWithRelationInput | userWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userWallets.
     */
    cursor?: userWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userWallets.
     */
    distinct?: UserWalletsScalarFieldEnum | UserWalletsScalarFieldEnum[]
  }

  /**
   * userWallets findFirstOrThrow
   */
  export interface userWalletsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter, which userWallets to fetch.
     */
    where?: userWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userWallets to fetch.
     */
    orderBy?: userWalletsOrderByWithRelationInput | userWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for userWallets.
     */
    cursor?: userWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of userWallets.
     */
    distinct?: UserWalletsScalarFieldEnum | UserWalletsScalarFieldEnum[]
  }

  /**
   * userWallets findMany
   */
  export interface userWalletsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter, which userWallets to fetch.
     */
    where?: userWalletsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of userWallets to fetch.
     */
    orderBy?: userWalletsOrderByWithRelationInput | userWalletsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing userWallets.
     */
    cursor?: userWalletsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` userWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` userWallets.
     */
    skip?: number
    distinct?: UserWalletsScalarFieldEnum | UserWalletsScalarFieldEnum[]
  }

  /**
   * userWallets create
   */
  export interface userWalletsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * The data needed to create a userWallets.
     */
    data: XOR<userWalletsCreateInput, userWalletsUncheckedCreateInput>
  }

  /**
   * userWallets createMany
   */
  export interface userWalletsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many userWallets.
     */
    data: userWalletsCreateManyInput | userWalletsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userWallets createManyAndReturn
   */
  export interface userWalletsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * The data used to create many userWallets.
     */
    data: userWalletsCreateManyInput | userWalletsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * userWallets update
   */
  export interface userWalletsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * The data needed to update a userWallets.
     */
    data: XOR<userWalletsUpdateInput, userWalletsUncheckedUpdateInput>
    /**
     * Choose, which userWallets to update.
     */
    where: userWalletsWhereUniqueInput
  }

  /**
   * userWallets updateMany
   */
  export interface userWalletsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update userWallets.
     */
    data: XOR<userWalletsUpdateManyMutationInput, userWalletsUncheckedUpdateManyInput>
    /**
     * Filter which userWallets to update
     */
    where?: userWalletsWhereInput
    /**
     * Limit how many userWallets to update.
     */
    limit?: number
  }

  /**
   * userWallets updateManyAndReturn
   */
  export interface userWalletsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * The data used to update userWallets.
     */
    data: XOR<userWalletsUpdateManyMutationInput, userWalletsUncheckedUpdateManyInput>
    /**
     * Filter which userWallets to update
     */
    where?: userWalletsWhereInput
    /**
     * Limit how many userWallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * userWallets upsert
   */
  export interface userWalletsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * The filter to search for the userWallets to update in case it exists.
     */
    where: userWalletsWhereUniqueInput
    /**
     * In case the userWallets found by the `where` argument doesn't exist, create a new userWallets with this data.
     */
    create: XOR<userWalletsCreateInput, userWalletsUncheckedCreateInput>
    /**
     * In case the userWallets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userWalletsUpdateInput, userWalletsUncheckedUpdateInput>
  }

  /**
   * userWallets delete
   */
  export interface userWalletsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
    /**
     * Filter which userWallets to delete.
     */
    where: userWalletsWhereUniqueInput
  }

  /**
   * userWallets deleteMany
   */
  export interface userWalletsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which userWallets to delete
     */
    where?: userWalletsWhereInput
    /**
     * Limit how many userWallets to delete.
     */
    limit?: number
  }

  /**
   * userWallets without action
   */
  export interface userWalletsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the userWallets
     */
    select?: userWalletsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userWallets
     */
    omit?: userWalletsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userWalletsInclude<ExtArgs> | null
  }

  /**
   * Model betEntries
   */

  export interface AggregateBetEntries {
    _count: BetEntriesCountAggregateOutputType | null
    _avg: BetEntriesAvgAggregateOutputType | null
    _sum: BetEntriesSumAggregateOutputType | null
    _min: BetEntriesMinAggregateOutputType | null
    _max: BetEntriesMaxAggregateOutputType | null
  }

  export interface BetEntriesAvgAggregateOutputType {
    id: number | null
    optionId: number | null
    userId: number | null
    amount: number | null
  }

  export interface BetEntriesSumAggregateOutputType {
    id: number | null
    optionId: number | null
    userId: number | null
    amount: number | null
  }

  export interface BetEntriesMinAggregateOutputType {
    id: number | null
    optionId: number | null
    userId: number | null
    amount: number | null
  }

  export interface BetEntriesMaxAggregateOutputType {
    id: number | null
    optionId: number | null
    userId: number | null
    amount: number | null
  }

  export interface BetEntriesCountAggregateOutputType {
    id: number
    optionId: number
    userId: number
    amount: number
    _all: number
  }

  export interface BetEntriesAvgAggregateInputType {
    id?: true
    optionId?: true
    userId?: true
    amount?: true
  }

  export interface BetEntriesSumAggregateInputType {
    id?: true
    optionId?: true
    userId?: true
    amount?: true
  }

  export interface BetEntriesMinAggregateInputType {
    id?: true
    optionId?: true
    userId?: true
    amount?: true
  }

  export interface BetEntriesMaxAggregateInputType {
    id?: true
    optionId?: true
    userId?: true
    amount?: true
  }

  export interface BetEntriesCountAggregateInputType {
    id?: true
    optionId?: true
    userId?: true
    amount?: true
    _all?: true
  }

  export interface BetEntriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which betEntries to aggregate.
     */
    where?: betEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betEntries to fetch.
     */
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: betEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned betEntries
     */
    _count?: true | BetEntriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: BetEntriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: BetEntriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: BetEntriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: BetEntriesMaxAggregateInputType
  }

  export type GetBetEntriesAggregateType<T extends BetEntriesAggregateArgs> = {
    [P in keyof T & keyof AggregateBetEntries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetEntries[P]>
      : GetScalarType<T[P], AggregateBetEntries[P]>
  }

  export interface betEntriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betEntriesWhereInput
    orderBy?: betEntriesOrderByWithAggregationInput | betEntriesOrderByWithAggregationInput[]
    by: BetEntriesScalarFieldEnum[] | BetEntriesScalarFieldEnum
    having?: betEntriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetEntriesCountAggregateInputType | true
    _avg?: BetEntriesAvgAggregateInputType
    _sum?: BetEntriesSumAggregateInputType
    _min?: BetEntriesMinAggregateInputType
    _max?: BetEntriesMaxAggregateInputType
  }

  export interface BetEntriesGroupByOutputType {
    id: number
    optionId: number | null
    userId: number | null
    amount: number
    _count: BetEntriesCountAggregateOutputType | null
    _avg: BetEntriesAvgAggregateOutputType | null
    _sum: BetEntriesSumAggregateOutputType | null
    _min: BetEntriesMinAggregateOutputType | null
    _max: BetEntriesMaxAggregateOutputType | null
  }

  type GetBetEntriesGroupByPayload<T extends betEntriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetEntriesGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof BetEntriesGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BetEntriesGroupByOutputType[P]>
          : GetScalarType<T[P], BetEntriesGroupByOutputType[P]>
      }
    >
  >

  export type betEntriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    amount?: boolean
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }, ExtArgs['result']['betEntries']>

  export type betEntriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    amount?: boolean
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }, ExtArgs['result']['betEntries']>

  export type betEntriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    userId?: boolean
    amount?: boolean
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }, ExtArgs['result']['betEntries']>

  export interface betEntriesSelectScalar {
    id?: boolean
    optionId?: boolean
    userId?: boolean
    amount?: boolean
  }

  export type betEntriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'optionId' | 'userId' | 'amount', ExtArgs['result']['betEntries']>
  export interface betEntriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }
  export interface betEntriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }
  export interface betEntriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betOptions?: boolean | betEntries$betOptionsArgs<ExtArgs>
    users?: boolean | betEntries$usersArgs<ExtArgs>
  }

  export interface $betEntriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'betEntries'
    objects: {
      betOptions: Prisma.$betOptionsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      optionId: number | null
      userId: number | null
      amount: number
    }, ExtArgs['result']['betEntries']>
    composites: {}
  }

  type betEntriesGetPayload<S extends boolean | null | undefined | betEntriesDefaultArgs> = $Result.GetResult<Prisma.$betEntriesPayload, S>

  type betEntriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<betEntriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetEntriesCountAggregateInputType | true
    }

  export interface betEntriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['betEntries'], meta: { name: 'betEntries' } }
    /**
     * Find zero or one BetEntries that matches the filter.
     * @param {betEntriesFindUniqueArgs} args - Arguments to find a BetEntries
     * @example
     * // Get one BetEntries
     * const betEntries = await prisma.betEntries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends betEntriesFindUniqueArgs>(args: SelectSubset<T, betEntriesFindUniqueArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BetEntries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {betEntriesFindUniqueOrThrowArgs} args - Arguments to find a BetEntries
     * @example
     * // Get one BetEntries
     * const betEntries = await prisma.betEntries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends betEntriesFindUniqueOrThrowArgs>(args: SelectSubset<T, betEntriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesFindFirstArgs} args - Arguments to find a BetEntries
     * @example
     * // Get one BetEntries
     * const betEntries = await prisma.betEntries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends betEntriesFindFirstArgs>(args?: SelectSubset<T, betEntriesFindFirstArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetEntries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesFindFirstOrThrowArgs} args - Arguments to find a BetEntries
     * @example
     * // Get one BetEntries
     * const betEntries = await prisma.betEntries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends betEntriesFindFirstOrThrowArgs>(args?: SelectSubset<T, betEntriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BetEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetEntries
     * const betEntries = await prisma.betEntries.findMany()
     *
     * // Get first 10 BetEntries
     * const betEntries = await prisma.betEntries.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const betEntriesWithIdOnly = await prisma.betEntries.findMany({ select: { id: true } })
     *
     */
    findMany<T extends betEntriesFindManyArgs>(args?: SelectSubset<T, betEntriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a BetEntries.
     * @param {betEntriesCreateArgs} args - Arguments to create a BetEntries.
     * @example
     * // Create one BetEntries
     * const BetEntries = await prisma.betEntries.create({
     *   data: {
     *     // ... data to create a BetEntries
     *   }
     * })
     *
     */
    create<T extends betEntriesCreateArgs>(args: SelectSubset<T, betEntriesCreateArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BetEntries.
     * @param {betEntriesCreateManyArgs} args - Arguments to create many BetEntries.
     * @example
     * // Create many BetEntries
     * const betEntries = await prisma.betEntries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends betEntriesCreateManyArgs>(args?: SelectSubset<T, betEntriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetEntries and returns the data saved in the database.
     * @param {betEntriesCreateManyAndReturnArgs} args - Arguments to create many BetEntries.
     * @example
     * // Create many BetEntries
     * const betEntries = await prisma.betEntries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BetEntries and only return the `id`
     * const betEntriesWithIdOnly = await prisma.betEntries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends betEntriesCreateManyAndReturnArgs>(args?: SelectSubset<T, betEntriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a BetEntries.
     * @param {betEntriesDeleteArgs} args - Arguments to delete one BetEntries.
     * @example
     * // Delete one BetEntries
     * const BetEntries = await prisma.betEntries.delete({
     *   where: {
     *     // ... filter to delete one BetEntries
     *   }
     * })
     *
     */
    delete<T extends betEntriesDeleteArgs>(args: SelectSubset<T, betEntriesDeleteArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BetEntries.
     * @param {betEntriesUpdateArgs} args - Arguments to update one BetEntries.
     * @example
     * // Update one BetEntries
     * const betEntries = await prisma.betEntries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends betEntriesUpdateArgs>(args: SelectSubset<T, betEntriesUpdateArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BetEntries.
     * @param {betEntriesDeleteManyArgs} args - Arguments to filter BetEntries to delete.
     * @example
     * // Delete a few BetEntries
     * const { count } = await prisma.betEntries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends betEntriesDeleteManyArgs>(args?: SelectSubset<T, betEntriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetEntries
     * const betEntries = await prisma.betEntries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends betEntriesUpdateManyArgs>(args: SelectSubset<T, betEntriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetEntries and returns the data updated in the database.
     * @param {betEntriesUpdateManyAndReturnArgs} args - Arguments to update many BetEntries.
     * @example
     * // Update many BetEntries
     * const betEntries = await prisma.betEntries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BetEntries and only return the `id`
     * const betEntriesWithIdOnly = await prisma.betEntries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends betEntriesUpdateManyAndReturnArgs>(args: SelectSubset<T, betEntriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one BetEntries.
     * @param {betEntriesUpsertArgs} args - Arguments to update or create a BetEntries.
     * @example
     * // Update or create a BetEntries
     * const betEntries = await prisma.betEntries.upsert({
     *   create: {
     *     // ... data to create a BetEntries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetEntries we want to update
     *   }
     * })
     */
    upsert<T extends betEntriesUpsertArgs>(args: SelectSubset<T, betEntriesUpsertArgs<ExtArgs>>): Prisma__betEntriesClient<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of BetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesCountArgs} args - Arguments to filter BetEntries to count.
     * @example
     * // Count the number of BetEntries
     * const count = await prisma.betEntries.count({
     *   where: {
     *     // ... the filter for the BetEntries we want to count
     *   }
     * })
     */
    count<T extends betEntriesCountArgs>(
      args?: Subset<T, betEntriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetEntriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetEntriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends BetEntriesAggregateArgs>(args: Subset<T, BetEntriesAggregateArgs>): Prisma.PrismaPromise<GetBetEntriesAggregateType<T>>

    /**
     * Group by BetEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betEntriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends betEntriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: betEntriesGroupByArgs['orderBy'] }
        : { orderBy?: betEntriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, betEntriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetEntriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the betEntries model
     */
    readonly fields: betEntriesFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for betEntries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__betEntriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    betOptions<T extends betEntries$betOptionsArgs<ExtArgs> = {}>(args?: Subset<T, betEntries$betOptionsArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends betEntries$usersArgs<ExtArgs> = {}>(args?: Subset<T, betEntries$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the betEntries model
   */
  interface betEntriesFieldRefs {
    readonly id: FieldRef<'betEntries', 'Int'>
    readonly optionId: FieldRef<'betEntries', 'Int'>
    readonly userId: FieldRef<'betEntries', 'Int'>
    readonly amount: FieldRef<'betEntries', 'Int'>
  }

  // Custom InputTypes
  /**
   * betEntries findUnique
   */
  export interface betEntriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter, which betEntries to fetch.
     */
    where: betEntriesWhereUniqueInput
  }

  /**
   * betEntries findUniqueOrThrow
   */
  export interface betEntriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter, which betEntries to fetch.
     */
    where: betEntriesWhereUniqueInput
  }

  /**
   * betEntries findFirst
   */
  export interface betEntriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter, which betEntries to fetch.
     */
    where?: betEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betEntries to fetch.
     */
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for betEntries.
     */
    cursor?: betEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of betEntries.
     */
    distinct?: BetEntriesScalarFieldEnum | BetEntriesScalarFieldEnum[]
  }

  /**
   * betEntries findFirstOrThrow
   */
  export interface betEntriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter, which betEntries to fetch.
     */
    where?: betEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betEntries to fetch.
     */
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for betEntries.
     */
    cursor?: betEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of betEntries.
     */
    distinct?: BetEntriesScalarFieldEnum | BetEntriesScalarFieldEnum[]
  }

  /**
   * betEntries findMany
   */
  export interface betEntriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter, which betEntries to fetch.
     */
    where?: betEntriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betEntries to fetch.
     */
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing betEntries.
     */
    cursor?: betEntriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betEntries.
     */
    skip?: number
    distinct?: BetEntriesScalarFieldEnum | BetEntriesScalarFieldEnum[]
  }

  /**
   * betEntries create
   */
  export interface betEntriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * The data needed to create a betEntries.
     */
    data: XOR<betEntriesCreateInput, betEntriesUncheckedCreateInput>
  }

  /**
   * betEntries createMany
   */
  export interface betEntriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many betEntries.
     */
    data: betEntriesCreateManyInput | betEntriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * betEntries createManyAndReturn
   */
  export interface betEntriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * The data used to create many betEntries.
     */
    data: betEntriesCreateManyInput | betEntriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * betEntries update
   */
  export interface betEntriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * The data needed to update a betEntries.
     */
    data: XOR<betEntriesUpdateInput, betEntriesUncheckedUpdateInput>
    /**
     * Choose, which betEntries to update.
     */
    where: betEntriesWhereUniqueInput
  }

  /**
   * betEntries updateMany
   */
  export interface betEntriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update betEntries.
     */
    data: XOR<betEntriesUpdateManyMutationInput, betEntriesUncheckedUpdateManyInput>
    /**
     * Filter which betEntries to update
     */
    where?: betEntriesWhereInput
    /**
     * Limit how many betEntries to update.
     */
    limit?: number
  }

  /**
   * betEntries updateManyAndReturn
   */
  export interface betEntriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * The data used to update betEntries.
     */
    data: XOR<betEntriesUpdateManyMutationInput, betEntriesUncheckedUpdateManyInput>
    /**
     * Filter which betEntries to update
     */
    where?: betEntriesWhereInput
    /**
     * Limit how many betEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * betEntries upsert
   */
  export interface betEntriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * The filter to search for the betEntries to update in case it exists.
     */
    where: betEntriesWhereUniqueInput
    /**
     * In case the betEntries found by the `where` argument doesn't exist, create a new betEntries with this data.
     */
    create: XOR<betEntriesCreateInput, betEntriesUncheckedCreateInput>
    /**
     * In case the betEntries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<betEntriesUpdateInput, betEntriesUncheckedUpdateInput>
  }

  /**
   * betEntries delete
   */
  export interface betEntriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    /**
     * Filter which betEntries to delete.
     */
    where: betEntriesWhereUniqueInput
  }

  /**
   * betEntries deleteMany
   */
  export interface betEntriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which betEntries to delete
     */
    where?: betEntriesWhereInput
    /**
     * Limit how many betEntries to delete.
     */
    limit?: number
  }

  /**
   * betEntries.betOptions
   */
  export interface betEntries$betOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    where?: betOptionsWhereInput
  }

  /**
   * betEntries.users
   */
  export interface betEntries$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * betEntries without action
   */
  export interface betEntriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
  }

  /**
   * Model betOptions
   */

  export interface AggregateBetOptions {
    _count: BetOptionsCountAggregateOutputType | null
    _avg: BetOptionsAvgAggregateOutputType | null
    _sum: BetOptionsSumAggregateOutputType | null
    _min: BetOptionsMinAggregateOutputType | null
    _max: BetOptionsMaxAggregateOutputType | null
  }

  export interface BetOptionsAvgAggregateOutputType {
    id: number | null
    betId: number | null
    votes: number | null
    amount: number | null
  }

  export interface BetOptionsSumAggregateOutputType {
    id: number | null
    betId: number | null
    votes: number | null
    amount: number | null
  }

  export interface BetOptionsMinAggregateOutputType {
    id: number | null
    betId: number | null
    description: string | null
    votes: number | null
    amount: number | null
  }

  export interface BetOptionsMaxAggregateOutputType {
    id: number | null
    betId: number | null
    description: string | null
    votes: number | null
    amount: number | null
  }

  export interface BetOptionsCountAggregateOutputType {
    id: number
    betId: number
    description: number
    votes: number
    amount: number
    _all: number
  }

  export interface BetOptionsAvgAggregateInputType {
    id?: true
    betId?: true
    votes?: true
    amount?: true
  }

  export interface BetOptionsSumAggregateInputType {
    id?: true
    betId?: true
    votes?: true
    amount?: true
  }

  export interface BetOptionsMinAggregateInputType {
    id?: true
    betId?: true
    description?: true
    votes?: true
    amount?: true
  }

  export interface BetOptionsMaxAggregateInputType {
    id?: true
    betId?: true
    description?: true
    votes?: true
    amount?: true
  }

  export interface BetOptionsCountAggregateInputType {
    id?: true
    betId?: true
    description?: true
    votes?: true
    amount?: true
    _all?: true
  }

  export interface BetOptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which betOptions to aggregate.
     */
    where?: betOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betOptions to fetch.
     */
    orderBy?: betOptionsOrderByWithRelationInput | betOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: betOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned betOptions
     */
    _count?: true | BetOptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     */
    _avg?: BetOptionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     */
    _sum?: BetOptionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     */
    _min?: BetOptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     */
    _max?: BetOptionsMaxAggregateInputType
  }

  export type GetBetOptionsAggregateType<T extends BetOptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateBetOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBetOptions[P]>
      : GetScalarType<T[P], AggregateBetOptions[P]>
  }

  export interface betOptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    where?: betOptionsWhereInput
    orderBy?: betOptionsOrderByWithAggregationInput | betOptionsOrderByWithAggregationInput[]
    by: BetOptionsScalarFieldEnum[] | BetOptionsScalarFieldEnum
    having?: betOptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetOptionsCountAggregateInputType | true
    _avg?: BetOptionsAvgAggregateInputType
    _sum?: BetOptionsSumAggregateInputType
    _min?: BetOptionsMinAggregateInputType
    _max?: BetOptionsMaxAggregateInputType
  }

  export interface BetOptionsGroupByOutputType {
    id: number
    betId: number | null
    description: string
    votes: number
    amount: number
    _count: BetOptionsCountAggregateOutputType | null
    _avg: BetOptionsAvgAggregateOutputType | null
    _sum: BetOptionsSumAggregateOutputType | null
    _min: BetOptionsMinAggregateOutputType | null
    _max: BetOptionsMaxAggregateOutputType | null
  }

  type GetBetOptionsGroupByPayload<T extends betOptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetOptionsGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof BetOptionsGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BetOptionsGroupByOutputType[P]>
          : GetScalarType<T[P], BetOptionsGroupByOutputType[P]>
      }
    >
  >

  export type betOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    description?: boolean
    votes?: boolean
    amount?: boolean
    betEntries?: boolean | betOptions$betEntriesArgs<ExtArgs>
    bets?: boolean | betOptions$betsArgs<ExtArgs>
    _count?: boolean | BetOptionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs['result']['betOptions']>

  export type betOptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    description?: boolean
    votes?: boolean
    amount?: boolean
    bets?: boolean | betOptions$betsArgs<ExtArgs>
  }, ExtArgs['result']['betOptions']>

  export type betOptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betId?: boolean
    description?: boolean
    votes?: boolean
    amount?: boolean
    bets?: boolean | betOptions$betsArgs<ExtArgs>
  }, ExtArgs['result']['betOptions']>

  export interface betOptionsSelectScalar {
    id?: boolean
    betId?: boolean
    description?: boolean
    votes?: boolean
    amount?: boolean
  }

  export type betOptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<'id' | 'betId' | 'description' | 'votes' | 'amount', ExtArgs['result']['betOptions']>
  export interface betOptionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    betEntries?: boolean | betOptions$betEntriesArgs<ExtArgs>
    bets?: boolean | betOptions$betsArgs<ExtArgs>
    _count?: boolean | BetOptionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export interface betOptionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    bets?: boolean | betOptions$betsArgs<ExtArgs>
  }
  export interface betOptionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    bets?: boolean | betOptions$betsArgs<ExtArgs>
  }

  export interface $betOptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    name: 'betOptions'
    objects: {
      betEntries: Prisma.$betEntriesPayload<ExtArgs>[]
      bets: Prisma.$betsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      betId: number | null
      description: string
      votes: number
      amount: number
    }, ExtArgs['result']['betOptions']>
    composites: {}
  }

  type betOptionsGetPayload<S extends boolean | null | undefined | betOptionsDefaultArgs> = $Result.GetResult<Prisma.$betOptionsPayload, S>

  type betOptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<betOptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetOptionsCountAggregateInputType | true
    }

  export interface betOptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['betOptions'], meta: { name: 'betOptions' } }
    /**
     * Find zero or one BetOptions that matches the filter.
     * @param {betOptionsFindUniqueArgs} args - Arguments to find a BetOptions
     * @example
     * // Get one BetOptions
     * const betOptions = await prisma.betOptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends betOptionsFindUniqueArgs>(args: SelectSubset<T, betOptionsFindUniqueArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BetOptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {betOptionsFindUniqueOrThrowArgs} args - Arguments to find a BetOptions
     * @example
     * // Get one BetOptions
     * const betOptions = await prisma.betOptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends betOptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, betOptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsFindFirstArgs} args - Arguments to find a BetOptions
     * @example
     * // Get one BetOptions
     * const betOptions = await prisma.betOptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends betOptionsFindFirstArgs>(args?: SelectSubset<T, betOptionsFindFirstArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BetOptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsFindFirstOrThrowArgs} args - Arguments to find a BetOptions
     * @example
     * // Get one BetOptions
     * const betOptions = await prisma.betOptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends betOptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, betOptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BetOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BetOptions
     * const betOptions = await prisma.betOptions.findMany()
     *
     * // Get first 10 BetOptions
     * const betOptions = await prisma.betOptions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const betOptionsWithIdOnly = await prisma.betOptions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends betOptionsFindManyArgs>(args?: SelectSubset<T, betOptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a BetOptions.
     * @param {betOptionsCreateArgs} args - Arguments to create a BetOptions.
     * @example
     * // Create one BetOptions
     * const BetOptions = await prisma.betOptions.create({
     *   data: {
     *     // ... data to create a BetOptions
     *   }
     * })
     *
     */
    create<T extends betOptionsCreateArgs>(args: SelectSubset<T, betOptionsCreateArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'create', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BetOptions.
     * @param {betOptionsCreateManyArgs} args - Arguments to create many BetOptions.
     * @example
     * // Create many BetOptions
     * const betOptions = await prisma.betOptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends betOptionsCreateManyArgs>(args?: SelectSubset<T, betOptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BetOptions and returns the data saved in the database.
     * @param {betOptionsCreateManyAndReturnArgs} args - Arguments to create many BetOptions.
     * @example
     * // Create many BetOptions
     * const betOptions = await prisma.betOptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BetOptions and only return the `id`
     * const betOptionsWithIdOnly = await prisma.betOptions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends betOptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, betOptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'createManyAndReturn', GlobalOmitOptions>>

    /**
     * Delete a BetOptions.
     * @param {betOptionsDeleteArgs} args - Arguments to delete one BetOptions.
     * @example
     * // Delete one BetOptions
     * const BetOptions = await prisma.betOptions.delete({
     *   where: {
     *     // ... filter to delete one BetOptions
     *   }
     * })
     *
     */
    delete<T extends betOptionsDeleteArgs>(args: SelectSubset<T, betOptionsDeleteArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BetOptions.
     * @param {betOptionsUpdateArgs} args - Arguments to update one BetOptions.
     * @example
     * // Update one BetOptions
     * const betOptions = await prisma.betOptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends betOptionsUpdateArgs>(args: SelectSubset<T, betOptionsUpdateArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'update', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BetOptions.
     * @param {betOptionsDeleteManyArgs} args - Arguments to filter BetOptions to delete.
     * @example
     * // Delete a few BetOptions
     * const { count } = await prisma.betOptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends betOptionsDeleteManyArgs>(args?: SelectSubset<T, betOptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BetOptions
     * const betOptions = await prisma.betOptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends betOptionsUpdateManyArgs>(args: SelectSubset<T, betOptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BetOptions and returns the data updated in the database.
     * @param {betOptionsUpdateManyAndReturnArgs} args - Arguments to update many BetOptions.
     * @example
     * // Update many BetOptions
     * const betOptions = await prisma.betOptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BetOptions and only return the `id`
     * const betOptionsWithIdOnly = await prisma.betOptions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends betOptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, betOptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'updateManyAndReturn', GlobalOmitOptions>>

    /**
     * Create or update one BetOptions.
     * @param {betOptionsUpsertArgs} args - Arguments to update or create a BetOptions.
     * @example
     * // Update or create a BetOptions
     * const betOptions = await prisma.betOptions.upsert({
     *   create: {
     *     // ... data to create a BetOptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BetOptions we want to update
     *   }
     * })
     */
    upsert<T extends betOptionsUpsertArgs>(args: SelectSubset<T, betOptionsUpsertArgs<ExtArgs>>): Prisma__betOptionsClient<$Result.GetResult<Prisma.$betOptionsPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Count the number of BetOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsCountArgs} args - Arguments to filter BetOptions to count.
     * @example
     * // Count the number of BetOptions
     * const count = await prisma.betOptions.count({
     *   where: {
     *     // ... the filter for the BetOptions we want to count
     *   }
     * })
     */
    count<T extends betOptionsCountArgs>(
      args?: Subset<T, betOptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetOptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BetOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetOptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     */
    aggregate<T extends BetOptionsAggregateArgs>(args: Subset<T, BetOptionsAggregateArgs>): Prisma.PrismaPromise<GetBetOptionsAggregateType<T>>

    /**
     * Group by BetOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {betOptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     */
    groupBy<
      T extends betOptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: betOptionsGroupByArgs['orderBy'] }
        : { orderBy?: betOptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
    >(args: SubsetIntersection<T, betOptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the betOptions model
     */
    readonly fields: betOptionsFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for betOptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__betOptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    betEntries<T extends betOptions$betEntriesArgs<ExtArgs> = {}>(args?: Subset<T, betOptions$betEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$betEntriesPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    bets<T extends betOptions$betsArgs<ExtArgs> = {}>(args?: Subset<T, betOptions$betsArgs<ExtArgs>>): Prisma__betsClient<$Result.GetResult<Prisma.$betsPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the betOptions model
   */
  interface betOptionsFieldRefs {
    readonly id: FieldRef<'betOptions', 'Int'>
    readonly betId: FieldRef<'betOptions', 'Int'>
    readonly description: FieldRef<'betOptions', 'String'>
    readonly votes: FieldRef<'betOptions', 'Int'>
    readonly amount: FieldRef<'betOptions', 'Int'>
  }

  // Custom InputTypes
  /**
   * betOptions findUnique
   */
  export interface betOptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter, which betOptions to fetch.
     */
    where: betOptionsWhereUniqueInput
  }

  /**
   * betOptions findUniqueOrThrow
   */
  export interface betOptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter, which betOptions to fetch.
     */
    where: betOptionsWhereUniqueInput
  }

  /**
   * betOptions findFirst
   */
  export interface betOptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter, which betOptions to fetch.
     */
    where?: betOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betOptions to fetch.
     */
    orderBy?: betOptionsOrderByWithRelationInput | betOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for betOptions.
     */
    cursor?: betOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of betOptions.
     */
    distinct?: BetOptionsScalarFieldEnum | BetOptionsScalarFieldEnum[]
  }

  /**
   * betOptions findFirstOrThrow
   */
  export interface betOptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter, which betOptions to fetch.
     */
    where?: betOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betOptions to fetch.
     */
    orderBy?: betOptionsOrderByWithRelationInput | betOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for betOptions.
     */
    cursor?: betOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of betOptions.
     */
    distinct?: BetOptionsScalarFieldEnum | BetOptionsScalarFieldEnum[]
  }

  /**
   * betOptions findMany
   */
  export interface betOptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter, which betOptions to fetch.
     */
    where?: betOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of betOptions to fetch.
     */
    orderBy?: betOptionsOrderByWithRelationInput | betOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing betOptions.
     */
    cursor?: betOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` betOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` betOptions.
     */
    skip?: number
    distinct?: BetOptionsScalarFieldEnum | BetOptionsScalarFieldEnum[]
  }

  /**
   * betOptions create
   */
  export interface betOptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * The data needed to create a betOptions.
     */
    data: XOR<betOptionsCreateInput, betOptionsUncheckedCreateInput>
  }

  /**
   * betOptions createMany
   */
  export interface betOptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to create many betOptions.
     */
    data: betOptionsCreateManyInput | betOptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * betOptions createManyAndReturn
   */
  export interface betOptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * The data used to create many betOptions.
     */
    data: betOptionsCreateManyInput | betOptionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * betOptions update
   */
  export interface betOptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * The data needed to update a betOptions.
     */
    data: XOR<betOptionsUpdateInput, betOptionsUncheckedUpdateInput>
    /**
     * Choose, which betOptions to update.
     */
    where: betOptionsWhereUniqueInput
  }

  /**
   * betOptions updateMany
   */
  export interface betOptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * The data used to update betOptions.
     */
    data: XOR<betOptionsUpdateManyMutationInput, betOptionsUncheckedUpdateManyInput>
    /**
     * Filter which betOptions to update
     */
    where?: betOptionsWhereInput
    /**
     * Limit how many betOptions to update.
     */
    limit?: number
  }

  /**
   * betOptions updateManyAndReturn
   */
  export interface betOptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * The data used to update betOptions.
     */
    data: XOR<betOptionsUpdateManyMutationInput, betOptionsUncheckedUpdateManyInput>
    /**
     * Filter which betOptions to update
     */
    where?: betOptionsWhereInput
    /**
     * Limit how many betOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * betOptions upsert
   */
  export interface betOptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * The filter to search for the betOptions to update in case it exists.
     */
    where: betOptionsWhereUniqueInput
    /**
     * In case the betOptions found by the `where` argument doesn't exist, create a new betOptions with this data.
     */
    create: XOR<betOptionsCreateInput, betOptionsUncheckedCreateInput>
    /**
     * In case the betOptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<betOptionsUpdateInput, betOptionsUncheckedUpdateInput>
  }

  /**
   * betOptions delete
   */
  export interface betOptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
    /**
     * Filter which betOptions to delete.
     */
    where: betOptionsWhereUniqueInput
  }

  /**
   * betOptions deleteMany
   */
  export interface betOptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Filter which betOptions to delete
     */
    where?: betOptionsWhereInput
    /**
     * Limit how many betOptions to delete.
     */
    limit?: number
  }

  /**
   * betOptions.betEntries
   */
  export interface betOptions$betEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betEntries
     */
    select?: betEntriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betEntries
     */
    omit?: betEntriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betEntriesInclude<ExtArgs> | null
    where?: betEntriesWhereInput
    orderBy?: betEntriesOrderByWithRelationInput | betEntriesOrderByWithRelationInput[]
    cursor?: betEntriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetEntriesScalarFieldEnum | BetEntriesScalarFieldEnum[]
  }

  /**
   * betOptions.bets
   */
  export interface betOptions$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the bets
     */
    select?: betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bets
     */
    omit?: betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betsInclude<ExtArgs> | null
    where?: betsWhereInput
  }

  /**
   * betOptions without action
   */
  export interface betOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    /**
     * Select specific fields to fetch from the betOptions
     */
    select?: betOptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the betOptions
     */
    omit?: betOptionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: betOptionsInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UsersScalarFieldEnum: {
    id: 'id'
    firstName: 'firstName'
    lastName: 'lastName'
    username: 'username'
    password: 'password'
    role: 'role'
  }

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]

  export const BetsScalarFieldEnum: {
    id: 'id'
    description: 'description'
    createdAt: 'createdAt'
    deadlineAt: 'deadlineAt'
    status: 'status'
    participants: 'participants'
    amount: 'amount'
  }

  export type BetsScalarFieldEnum = (typeof BetsScalarFieldEnum)[keyof typeof BetsScalarFieldEnum]

  export const RolesScalarFieldEnum: {
    id: 'id'
    description: 'description'
  }

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]

  export const ServicesScalarFieldEnum: {
    id: 'id'
    description: 'description'
  }

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]

  export const StatusScalarFieldEnum: {
    id: 'id'
    description: 'description'
  }

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]

  export const TradeOffersScalarFieldEnum: {
    id: 'id'
    tradeId: 'tradeId'
    userId: 'userId'
    value: 'value'
    isAccepted: 'isAccepted'
    createdAt: 'createdAt'
  }

  export type TradeOffersScalarFieldEnum = (typeof TradeOffersScalarFieldEnum)[keyof typeof TradeOffersScalarFieldEnum]

  export const TradesScalarFieldEnum: {
    id: 'id'
    supplierId: 'supplierId'
    customerId: 'customerId'
    service: 'service'
    createdAt: 'createdAt'
    deadlineAt: 'deadlineAt'
    tradedAt: 'tradedAt'
  }

  export type TradesScalarFieldEnum = (typeof TradesScalarFieldEnum)[keyof typeof TradesScalarFieldEnum]

  export const UserWalletsScalarFieldEnum: {
    id: 'id'
    balance: 'balance'
  }

  export type UserWalletsScalarFieldEnum = (typeof UserWalletsScalarFieldEnum)[keyof typeof UserWalletsScalarFieldEnum]

  export const BetEntriesScalarFieldEnum: {
    id: 'id'
    optionId: 'optionId'
    userId: 'userId'
    amount: 'amount'
  }

  export type BetEntriesScalarFieldEnum = (typeof BetEntriesScalarFieldEnum)[keyof typeof BetEntriesScalarFieldEnum]

  export const BetOptionsScalarFieldEnum: {
    id: 'id'
    betId: 'betId'
    description: 'description'
    votes: 'votes'
    amount: 'amount'
  }

  export type BetOptionsScalarFieldEnum = (typeof BetOptionsScalarFieldEnum)[keyof typeof BetOptionsScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>

  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>

  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>

  /**
   * Deep Input Types
   */

  export interface usersWhereInput {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<'users'> | number
    firstName?: StringFilter<'users'> | string
    lastName?: StringFilter<'users'> | string
    username?: StringFilter<'users'> | string
    password?: StringFilter<'users'> | string
    role?: IntNullableFilter<'users'> | number | null
    betEntries?: BetEntriesListRelationFilter
    tradeOffers?: TradeOffersListRelationFilter
    trades_trades_customerIdTousers?: TradesListRelationFilter
    trades_trades_supplierIdTousers?: TradesListRelationFilter
    userWallets?: XOR<UserWalletsNullableScalarRelationFilter, userWalletsWhereInput> | null
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }

  export interface usersOrderByWithRelationInput {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    betEntries?: betEntriesOrderByRelationAggregateInput
    tradeOffers?: tradeOffersOrderByRelationAggregateInput
    trades_trades_customerIdTousers?: tradesOrderByRelationAggregateInput
    trades_trades_supplierIdTousers?: tradesOrderByRelationAggregateInput
    userWallets?: userWalletsOrderByWithRelationInput
    roles?: rolesOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    firstName?: StringFilter<'users'> | string
    lastName?: StringFilter<'users'> | string
    username?: StringFilter<'users'> | string
    password?: StringFilter<'users'> | string
    role?: IntNullableFilter<'users'> | number | null
    betEntries?: BetEntriesListRelationFilter
    tradeOffers?: TradeOffersListRelationFilter
    trades_trades_customerIdTousers?: TradesListRelationFilter
    trades_trades_supplierIdTousers?: TradesListRelationFilter
    userWallets?: XOR<UserWalletsNullableScalarRelationFilter, userWalletsWhereInput> | null
    roles?: XOR<RolesNullableScalarRelationFilter, rolesWhereInput> | null
  }, 'id'>

  export interface usersOrderByWithAggregationInput {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export interface usersScalarWhereWithAggregatesInput {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'users'> | number
    firstName?: StringWithAggregatesFilter<'users'> | string
    lastName?: StringWithAggregatesFilter<'users'> | string
    username?: StringWithAggregatesFilter<'users'> | string
    password?: StringWithAggregatesFilter<'users'> | string
    role?: IntNullableWithAggregatesFilter<'users'> | number | null
  }

  export interface betsWhereInput {
    AND?: betsWhereInput | betsWhereInput[]
    OR?: betsWhereInput[]
    NOT?: betsWhereInput | betsWhereInput[]
    id?: IntFilter<'bets'> | number
    description?: StringFilter<'bets'> | string
    createdAt?: DateTimeFilter<'bets'> | Date | string
    deadlineAt?: DateTimeFilter<'bets'> | Date | string
    status?: IntNullableFilter<'bets'> | number | null
    participants?: IntFilter<'bets'> | number
    amount?: IntFilter<'bets'> | number
    betOptions?: BetOptionsListRelationFilter
    status_bets_statusTostatus?: XOR<StatusNullableScalarRelationFilter, statusWhereInput> | null
  }

  export interface betsOrderByWithRelationInput {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    status?: SortOrderInput | SortOrder
    participants?: SortOrder
    amount?: SortOrder
    betOptions?: betOptionsOrderByRelationAggregateInput
    status_bets_statusTostatus?: statusOrderByWithRelationInput
  }

  export type betsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: betsWhereInput | betsWhereInput[]
    OR?: betsWhereInput[]
    NOT?: betsWhereInput | betsWhereInput[]
    description?: StringFilter<'bets'> | string
    createdAt?: DateTimeFilter<'bets'> | Date | string
    deadlineAt?: DateTimeFilter<'bets'> | Date | string
    status?: IntNullableFilter<'bets'> | number | null
    participants?: IntFilter<'bets'> | number
    amount?: IntFilter<'bets'> | number
    betOptions?: BetOptionsListRelationFilter
    status_bets_statusTostatus?: XOR<StatusNullableScalarRelationFilter, statusWhereInput> | null
  }, 'id'>

  export interface betsOrderByWithAggregationInput {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    status?: SortOrderInput | SortOrder
    participants?: SortOrder
    amount?: SortOrder
    _count?: betsCountOrderByAggregateInput
    _avg?: betsAvgOrderByAggregateInput
    _max?: betsMaxOrderByAggregateInput
    _min?: betsMinOrderByAggregateInput
    _sum?: betsSumOrderByAggregateInput
  }

  export interface betsScalarWhereWithAggregatesInput {
    AND?: betsScalarWhereWithAggregatesInput | betsScalarWhereWithAggregatesInput[]
    OR?: betsScalarWhereWithAggregatesInput[]
    NOT?: betsScalarWhereWithAggregatesInput | betsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'bets'> | number
    description?: StringWithAggregatesFilter<'bets'> | string
    createdAt?: DateTimeWithAggregatesFilter<'bets'> | Date | string
    deadlineAt?: DateTimeWithAggregatesFilter<'bets'> | Date | string
    status?: IntNullableWithAggregatesFilter<'bets'> | number | null
    participants?: IntWithAggregatesFilter<'bets'> | number
    amount?: IntWithAggregatesFilter<'bets'> | number
  }

  export interface rolesWhereInput {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<'roles'> | number
    description?: StringFilter<'roles'> | string
    users?: UsersListRelationFilter
  }

  export interface rolesOrderByWithRelationInput {
    id?: SortOrder
    description?: SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    description?: StringFilter<'roles'> | string
    users?: UsersListRelationFilter
  }, 'id'>

  export interface rolesOrderByWithAggregationInput {
    id?: SortOrder
    description?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export interface rolesScalarWhereWithAggregatesInput {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'roles'> | number
    description?: StringWithAggregatesFilter<'roles'> | string
  }

  export interface servicesWhereInput {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    id?: IntFilter<'services'> | number
    description?: StringFilter<'services'> | string
  }

  export interface servicesOrderByWithRelationInput {
    id?: SortOrder
    description?: SortOrder
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    description?: StringFilter<'services'> | string
  }, 'id'>

  export interface servicesOrderByWithAggregationInput {
    id?: SortOrder
    description?: SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export interface servicesScalarWhereWithAggregatesInput {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'services'> | number
    description?: StringWithAggregatesFilter<'services'> | string
  }

  export interface statusWhereInput {
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    id?: IntFilter<'status'> | number
    description?: StringFilter<'status'> | string
    bets_bets_statusTostatus?: BetsListRelationFilter
  }

  export interface statusOrderByWithRelationInput {
    id?: SortOrder
    description?: SortOrder
    bets_bets_statusTostatus?: betsOrderByRelationAggregateInput
  }

  export type statusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    description?: StringFilter<'status'> | string
    bets_bets_statusTostatus?: BetsListRelationFilter
  }, 'id'>

  export interface statusOrderByWithAggregationInput {
    id?: SortOrder
    description?: SortOrder
    _count?: statusCountOrderByAggregateInput
    _avg?: statusAvgOrderByAggregateInput
    _max?: statusMaxOrderByAggregateInput
    _min?: statusMinOrderByAggregateInput
    _sum?: statusSumOrderByAggregateInput
  }

  export interface statusScalarWhereWithAggregatesInput {
    AND?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    OR?: statusScalarWhereWithAggregatesInput[]
    NOT?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'status'> | number
    description?: StringWithAggregatesFilter<'status'> | string
  }

  export interface tradeOffersWhereInput {
    AND?: tradeOffersWhereInput | tradeOffersWhereInput[]
    OR?: tradeOffersWhereInput[]
    NOT?: tradeOffersWhereInput | tradeOffersWhereInput[]
    id?: BigIntFilter<'tradeOffers'> | bigint | number
    tradeId?: IntNullableFilter<'tradeOffers'> | number | null
    userId?: IntNullableFilter<'tradeOffers'> | number | null
    value?: IntFilter<'tradeOffers'> | number
    isAccepted?: BoolNullableFilter<'tradeOffers'> | boolean | null
    createdAt?: DateTimeFilter<'tradeOffers'> | Date | string
    trades?: XOR<TradesNullableScalarRelationFilter, tradesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export interface tradeOffersOrderByWithRelationInput {
    id?: SortOrder
    tradeId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    value?: SortOrder
    isAccepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    trades?: tradesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type tradeOffersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: tradeOffersWhereInput | tradeOffersWhereInput[]
    OR?: tradeOffersWhereInput[]
    NOT?: tradeOffersWhereInput | tradeOffersWhereInput[]
    tradeId?: IntNullableFilter<'tradeOffers'> | number | null
    userId?: IntNullableFilter<'tradeOffers'> | number | null
    value?: IntFilter<'tradeOffers'> | number
    isAccepted?: BoolNullableFilter<'tradeOffers'> | boolean | null
    createdAt?: DateTimeFilter<'tradeOffers'> | Date | string
    trades?: XOR<TradesNullableScalarRelationFilter, tradesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, 'id'>

  export interface tradeOffersOrderByWithAggregationInput {
    id?: SortOrder
    tradeId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    value?: SortOrder
    isAccepted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: tradeOffersCountOrderByAggregateInput
    _avg?: tradeOffersAvgOrderByAggregateInput
    _max?: tradeOffersMaxOrderByAggregateInput
    _min?: tradeOffersMinOrderByAggregateInput
    _sum?: tradeOffersSumOrderByAggregateInput
  }

  export interface tradeOffersScalarWhereWithAggregatesInput {
    AND?: tradeOffersScalarWhereWithAggregatesInput | tradeOffersScalarWhereWithAggregatesInput[]
    OR?: tradeOffersScalarWhereWithAggregatesInput[]
    NOT?: tradeOffersScalarWhereWithAggregatesInput | tradeOffersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<'tradeOffers'> | bigint | number
    tradeId?: IntNullableWithAggregatesFilter<'tradeOffers'> | number | null
    userId?: IntNullableWithAggregatesFilter<'tradeOffers'> | number | null
    value?: IntWithAggregatesFilter<'tradeOffers'> | number
    isAccepted?: BoolNullableWithAggregatesFilter<'tradeOffers'> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<'tradeOffers'> | Date | string
  }

  export interface tradesWhereInput {
    AND?: tradesWhereInput | tradesWhereInput[]
    OR?: tradesWhereInput[]
    NOT?: tradesWhereInput | tradesWhereInput[]
    id?: IntFilter<'trades'> | number
    supplierId?: IntNullableFilter<'trades'> | number | null
    customerId?: IntNullableFilter<'trades'> | number | null
    service?: StringNullableFilter<'trades'> | string | null
    createdAt?: DateTimeFilter<'trades'> | Date | string
    deadlineAt?: DateTimeNullableFilter<'trades'> | Date | string | null
    tradedAt?: DateTimeNullableFilter<'trades'> | Date | string | null
    tradeOffers?: TradeOffersListRelationFilter
    users_trades_customerIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_trades_supplierIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export interface tradesOrderByWithRelationInput {
    id?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrderInput | SortOrder
    tradedAt?: SortOrderInput | SortOrder
    tradeOffers?: tradeOffersOrderByRelationAggregateInput
    users_trades_customerIdTousers?: usersOrderByWithRelationInput
    users_trades_supplierIdTousers?: usersOrderByWithRelationInput
  }

  export type tradesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tradesWhereInput | tradesWhereInput[]
    OR?: tradesWhereInput[]
    NOT?: tradesWhereInput | tradesWhereInput[]
    supplierId?: IntNullableFilter<'trades'> | number | null
    customerId?: IntNullableFilter<'trades'> | number | null
    service?: StringNullableFilter<'trades'> | string | null
    createdAt?: DateTimeFilter<'trades'> | Date | string
    deadlineAt?: DateTimeNullableFilter<'trades'> | Date | string | null
    tradedAt?: DateTimeNullableFilter<'trades'> | Date | string | null
    tradeOffers?: TradeOffersListRelationFilter
    users_trades_customerIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_trades_supplierIdTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, 'id'>

  export interface tradesOrderByWithAggregationInput {
    id?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrderInput | SortOrder
    tradedAt?: SortOrderInput | SortOrder
    _count?: tradesCountOrderByAggregateInput
    _avg?: tradesAvgOrderByAggregateInput
    _max?: tradesMaxOrderByAggregateInput
    _min?: tradesMinOrderByAggregateInput
    _sum?: tradesSumOrderByAggregateInput
  }

  export interface tradesScalarWhereWithAggregatesInput {
    AND?: tradesScalarWhereWithAggregatesInput | tradesScalarWhereWithAggregatesInput[]
    OR?: tradesScalarWhereWithAggregatesInput[]
    NOT?: tradesScalarWhereWithAggregatesInput | tradesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'trades'> | number
    supplierId?: IntNullableWithAggregatesFilter<'trades'> | number | null
    customerId?: IntNullableWithAggregatesFilter<'trades'> | number | null
    service?: StringNullableWithAggregatesFilter<'trades'> | string | null
    createdAt?: DateTimeWithAggregatesFilter<'trades'> | Date | string
    deadlineAt?: DateTimeNullableWithAggregatesFilter<'trades'> | Date | string | null
    tradedAt?: DateTimeNullableWithAggregatesFilter<'trades'> | Date | string | null
  }

  export interface userWalletsWhereInput {
    AND?: userWalletsWhereInput | userWalletsWhereInput[]
    OR?: userWalletsWhereInput[]
    NOT?: userWalletsWhereInput | userWalletsWhereInput[]
    id?: IntFilter<'userWallets'> | number
    balance?: IntFilter<'userWallets'> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export interface userWalletsOrderByWithRelationInput {
    id?: SortOrder
    balance?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type userWalletsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWalletsWhereInput | userWalletsWhereInput[]
    OR?: userWalletsWhereInput[]
    NOT?: userWalletsWhereInput | userWalletsWhereInput[]
    balance?: IntFilter<'userWallets'> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, 'id'>

  export interface userWalletsOrderByWithAggregationInput {
    id?: SortOrder
    balance?: SortOrder
    _count?: userWalletsCountOrderByAggregateInput
    _avg?: userWalletsAvgOrderByAggregateInput
    _max?: userWalletsMaxOrderByAggregateInput
    _min?: userWalletsMinOrderByAggregateInput
    _sum?: userWalletsSumOrderByAggregateInput
  }

  export interface userWalletsScalarWhereWithAggregatesInput {
    AND?: userWalletsScalarWhereWithAggregatesInput | userWalletsScalarWhereWithAggregatesInput[]
    OR?: userWalletsScalarWhereWithAggregatesInput[]
    NOT?: userWalletsScalarWhereWithAggregatesInput | userWalletsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'userWallets'> | number
    balance?: IntWithAggregatesFilter<'userWallets'> | number
  }

  export interface betEntriesWhereInput {
    AND?: betEntriesWhereInput | betEntriesWhereInput[]
    OR?: betEntriesWhereInput[]
    NOT?: betEntriesWhereInput | betEntriesWhereInput[]
    id?: IntFilter<'betEntries'> | number
    optionId?: IntNullableFilter<'betEntries'> | number | null
    userId?: IntNullableFilter<'betEntries'> | number | null
    amount?: IntFilter<'betEntries'> | number
    betOptions?: XOR<BetOptionsNullableScalarRelationFilter, betOptionsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export interface betEntriesOrderByWithRelationInput {
    id?: SortOrder
    optionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    amount?: SortOrder
    betOptions?: betOptionsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type betEntriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: betEntriesWhereInput | betEntriesWhereInput[]
    OR?: betEntriesWhereInput[]
    NOT?: betEntriesWhereInput | betEntriesWhereInput[]
    optionId?: IntNullableFilter<'betEntries'> | number | null
    userId?: IntNullableFilter<'betEntries'> | number | null
    amount?: IntFilter<'betEntries'> | number
    betOptions?: XOR<BetOptionsNullableScalarRelationFilter, betOptionsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, 'id'>

  export interface betEntriesOrderByWithAggregationInput {
    id?: SortOrder
    optionId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    amount?: SortOrder
    _count?: betEntriesCountOrderByAggregateInput
    _avg?: betEntriesAvgOrderByAggregateInput
    _max?: betEntriesMaxOrderByAggregateInput
    _min?: betEntriesMinOrderByAggregateInput
    _sum?: betEntriesSumOrderByAggregateInput
  }

  export interface betEntriesScalarWhereWithAggregatesInput {
    AND?: betEntriesScalarWhereWithAggregatesInput | betEntriesScalarWhereWithAggregatesInput[]
    OR?: betEntriesScalarWhereWithAggregatesInput[]
    NOT?: betEntriesScalarWhereWithAggregatesInput | betEntriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'betEntries'> | number
    optionId?: IntNullableWithAggregatesFilter<'betEntries'> | number | null
    userId?: IntNullableWithAggregatesFilter<'betEntries'> | number | null
    amount?: IntWithAggregatesFilter<'betEntries'> | number
  }

  export interface betOptionsWhereInput {
    AND?: betOptionsWhereInput | betOptionsWhereInput[]
    OR?: betOptionsWhereInput[]
    NOT?: betOptionsWhereInput | betOptionsWhereInput[]
    id?: IntFilter<'betOptions'> | number
    betId?: IntNullableFilter<'betOptions'> | number | null
    description?: StringFilter<'betOptions'> | string
    votes?: IntFilter<'betOptions'> | number
    amount?: IntFilter<'betOptions'> | number
    betEntries?: BetEntriesListRelationFilter
    bets?: XOR<BetsNullableScalarRelationFilter, betsWhereInput> | null
  }

  export interface betOptionsOrderByWithRelationInput {
    id?: SortOrder
    betId?: SortOrderInput | SortOrder
    description?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
    betEntries?: betEntriesOrderByRelationAggregateInput
    bets?: betsOrderByWithRelationInput
  }

  export type betOptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: betOptionsWhereInput | betOptionsWhereInput[]
    OR?: betOptionsWhereInput[]
    NOT?: betOptionsWhereInput | betOptionsWhereInput[]
    betId?: IntNullableFilter<'betOptions'> | number | null
    description?: StringFilter<'betOptions'> | string
    votes?: IntFilter<'betOptions'> | number
    amount?: IntFilter<'betOptions'> | number
    betEntries?: BetEntriesListRelationFilter
    bets?: XOR<BetsNullableScalarRelationFilter, betsWhereInput> | null
  }, 'id'>

  export interface betOptionsOrderByWithAggregationInput {
    id?: SortOrder
    betId?: SortOrderInput | SortOrder
    description?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
    _count?: betOptionsCountOrderByAggregateInput
    _avg?: betOptionsAvgOrderByAggregateInput
    _max?: betOptionsMaxOrderByAggregateInput
    _min?: betOptionsMinOrderByAggregateInput
    _sum?: betOptionsSumOrderByAggregateInput
  }

  export interface betOptionsScalarWhereWithAggregatesInput {
    AND?: betOptionsScalarWhereWithAggregatesInput | betOptionsScalarWhereWithAggregatesInput[]
    OR?: betOptionsScalarWhereWithAggregatesInput[]
    NOT?: betOptionsScalarWhereWithAggregatesInput | betOptionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<'betOptions'> | number
    betId?: IntNullableWithAggregatesFilter<'betOptions'> | number | null
    description?: StringWithAggregatesFilter<'betOptions'> | string
    votes?: IntWithAggregatesFilter<'betOptions'> | number
    amount?: IntWithAggregatesFilter<'betOptions'> | number
  }

  export interface usersCreateInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersUpdateInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface usersCreateManyInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
  }

  export interface usersUpdateManyMutationInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export interface usersUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export interface betsCreateInput {
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    participants?: number
    amount?: number
    betOptions?: betOptionsCreateNestedManyWithoutBetsInput
    status_bets_statusTostatus?: statusCreateNestedOneWithoutBets_bets_statusTostatusInput
  }

  export interface betsUncheckedCreateInput {
    id?: number
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    status?: number | null
    participants?: number
    amount?: number
    betOptions?: betOptionsUncheckedCreateNestedManyWithoutBetsInput
  }

  export interface betsUpdateInput {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUpdateManyWithoutBetsNestedInput
    status_bets_statusTostatus?: statusUpdateOneWithoutBets_bets_statusTostatusNestedInput
  }

  export interface betsUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUncheckedUpdateManyWithoutBetsNestedInput
  }

  export interface betsCreateManyInput {
    id?: number
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    status?: number | null
    participants?: number
    amount?: number
  }

  export interface betsUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betsUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface rolesCreateInput {
    description: string
    users?: usersCreateNestedManyWithoutRolesInput
  }

  export interface rolesUncheckedCreateInput {
    id?: number
    description: string
    users?: usersUncheckedCreateNestedManyWithoutRolesInput
  }

  export interface rolesUpdateInput {
    description?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateManyWithoutRolesNestedInput
  }

  export interface rolesUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    users?: usersUncheckedUpdateManyWithoutRolesNestedInput
  }

  export interface rolesCreateManyInput {
    id?: number
    description: string
  }

  export interface rolesUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface rolesUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface servicesCreateInput {
    description: string
  }

  export interface servicesUncheckedCreateInput {
    id?: number
    description: string
  }

  export interface servicesUpdateInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface servicesUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface servicesCreateManyInput {
    id?: number
    description: string
  }

  export interface servicesUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface servicesUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface statusCreateInput {
    description: string
    bets_bets_statusTostatus?: betsCreateNestedManyWithoutStatus_bets_statusTostatusInput
  }

  export interface statusUncheckedCreateInput {
    id?: number
    description: string
    bets_bets_statusTostatus?: betsUncheckedCreateNestedManyWithoutStatus_bets_statusTostatusInput
  }

  export interface statusUpdateInput {
    description?: StringFieldUpdateOperationsInput | string
    bets_bets_statusTostatus?: betsUpdateManyWithoutStatus_bets_statusTostatusNestedInput
  }

  export interface statusUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    bets_bets_statusTostatus?: betsUncheckedUpdateManyWithoutStatus_bets_statusTostatusNestedInput
  }

  export interface statusCreateManyInput {
    id?: number
    description: string
  }

  export interface statusUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface statusUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface tradeOffersCreateInput {
    id?: bigint | number
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
    trades?: tradesCreateNestedOneWithoutTradeOffersInput
    users?: usersCreateNestedOneWithoutTradeOffersInput
  }

  export interface tradeOffersUncheckedCreateInput {
    id?: bigint | number
    tradeId?: number | null
    userId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradeOffersUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: tradesUpdateOneWithoutTradeOffersNestedInput
    users?: usersUpdateOneWithoutTradeOffersNestedInput
  }

  export interface tradeOffersUncheckedUpdateInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradeOffersCreateManyInput {
    id?: bigint | number
    tradeId?: number | null
    userId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradeOffersUpdateManyMutationInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradeOffersUncheckedUpdateManyInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradesCreateInput {
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersCreateNestedManyWithoutTradesInput
    users_trades_customerIdTousers?: usersCreateNestedOneWithoutTrades_trades_customerIdTousersInput
    users_trades_supplierIdTousers?: usersCreateNestedOneWithoutTrades_trades_supplierIdTousersInput
  }

  export interface tradesUncheckedCreateInput {
    id?: number
    supplierId?: number | null
    customerId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutTradesInput
  }

  export interface tradesUpdateInput {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUpdateManyWithoutTradesNestedInput
    users_trades_customerIdTousers?: usersUpdateOneWithoutTrades_trades_customerIdTousersNestedInput
    users_trades_supplierIdTousers?: usersUpdateOneWithoutTrades_trades_supplierIdTousersNestedInput
  }

  export interface tradesUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutTradesNestedInput
  }

  export interface tradesCreateManyInput {
    id?: number
    supplierId?: number | null
    customerId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
  }

  export interface tradesUpdateManyMutationInput {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export interface tradesUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export interface userWalletsCreateInput {
    balance?: number
    users?: usersCreateNestedOneWithoutUserWalletsInput
  }

  export interface userWalletsUncheckedCreateInput {
    id?: number
    balance?: number
  }

  export interface userWalletsUpdateInput {
    balance?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutUserWalletsNestedInput
  }

  export interface userWalletsUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export interface userWalletsCreateManyInput {
    id?: number
    balance?: number
  }

  export interface userWalletsUpdateManyMutationInput {
    balance?: IntFieldUpdateOperationsInput | number
  }

  export interface userWalletsUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesCreateInput {
    amount: number
    betOptions?: betOptionsCreateNestedOneWithoutBetEntriesInput
    users?: usersCreateNestedOneWithoutBetEntriesInput
  }

  export interface betEntriesUncheckedCreateInput {
    id?: number
    optionId?: number | null
    userId?: number | null
    amount: number
  }

  export interface betEntriesUpdateInput {
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUpdateOneWithoutBetEntriesNestedInput
    users?: usersUpdateOneWithoutBetEntriesNestedInput
  }

  export interface betEntriesUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesCreateManyInput {
    id?: number
    optionId?: number | null
    userId?: number | null
    amount: number
  }

  export interface betEntriesUpdateManyMutationInput {
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betOptionsCreateInput {
    description: string
    votes: number
    amount: number
    betEntries?: betEntriesCreateNestedManyWithoutBetOptionsInput
    bets?: betsCreateNestedOneWithoutBetOptionsInput
  }

  export interface betOptionsUncheckedCreateInput {
    id?: number
    betId?: number | null
    description: string
    votes: number
    amount: number
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutBetOptionsInput
  }

  export interface betOptionsUpdateInput {
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betEntries?: betEntriesUpdateManyWithoutBetOptionsNestedInput
    bets?: betsUpdateOneWithoutBetOptionsNestedInput
  }

  export interface betOptionsUncheckedUpdateInput {
    id?: IntFieldUpdateOperationsInput | number
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betEntries?: betEntriesUncheckedUpdateManyWithoutBetOptionsNestedInput
  }

  export interface betOptionsCreateManyInput {
    id?: number
    betId?: number | null
    description: string
    votes: number
    amount: number
  }

  export interface betOptionsUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betOptionsUncheckedUpdateManyInput {
    id?: IntFieldUpdateOperationsInput | number
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface IntFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export interface StringFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export interface IntNullableFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export interface BetEntriesListRelationFilter {
    every?: betEntriesWhereInput
    some?: betEntriesWhereInput
    none?: betEntriesWhereInput
  }

  export interface TradeOffersListRelationFilter {
    every?: tradeOffersWhereInput
    some?: tradeOffersWhereInput
    none?: tradeOffersWhereInput
  }

  export interface TradesListRelationFilter {
    every?: tradesWhereInput
    some?: tradesWhereInput
    none?: tradesWhereInput
  }

  export interface UserWalletsNullableScalarRelationFilter {
    is?: userWalletsWhereInput | null
    isNot?: userWalletsWhereInput | null
  }

  export interface RolesNullableScalarRelationFilter {
    is?: rolesWhereInput | null
    isNot?: rolesWhereInput | null
  }

  export interface SortOrderInput {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export interface betEntriesOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface tradeOffersOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface tradesOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface usersCountOrderByAggregateInput {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export interface usersAvgOrderByAggregateInput {
    id?: SortOrder
    role?: SortOrder
  }

  export interface usersMaxOrderByAggregateInput {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export interface usersMinOrderByAggregateInput {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export interface usersSumOrderByAggregateInput {
    id?: SortOrder
    role?: SortOrder
  }

  export interface IntWithAggregatesFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export interface StringWithAggregatesFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export interface IntNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export interface DateTimeFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export interface BetOptionsListRelationFilter {
    every?: betOptionsWhereInput
    some?: betOptionsWhereInput
    none?: betOptionsWhereInput
  }

  export interface StatusNullableScalarRelationFilter {
    is?: statusWhereInput | null
    isNot?: statusWhereInput | null
  }

  export interface betOptionsOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface betsCountOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    amount?: SortOrder
  }

  export interface betsAvgOrderByAggregateInput {
    id?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    amount?: SortOrder
  }

  export interface betsMaxOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    amount?: SortOrder
  }

  export interface betsMinOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    amount?: SortOrder
  }

  export interface betsSumOrderByAggregateInput {
    id?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    amount?: SortOrder
  }

  export interface DateTimeWithAggregatesFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export interface UsersListRelationFilter {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export interface usersOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface rolesCountOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface rolesAvgOrderByAggregateInput {
    id?: SortOrder
  }

  export interface rolesMaxOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface rolesMinOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface rolesSumOrderByAggregateInput {
    id?: SortOrder
  }

  export interface servicesCountOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface servicesAvgOrderByAggregateInput {
    id?: SortOrder
  }

  export interface servicesMaxOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface servicesMinOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface servicesSumOrderByAggregateInput {
    id?: SortOrder
  }

  export interface BetsListRelationFilter {
    every?: betsWhereInput
    some?: betsWhereInput
    none?: betsWhereInput
  }

  export interface betsOrderByRelationAggregateInput {
    _count?: SortOrder
  }

  export interface statusCountOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface statusAvgOrderByAggregateInput {
    id?: SortOrder
  }

  export interface statusMaxOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface statusMinOrderByAggregateInput {
    id?: SortOrder
    description?: SortOrder
  }

  export interface statusSumOrderByAggregateInput {
    id?: SortOrder
  }

  export interface BigIntFilter<$PrismaModel = never> {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export interface BoolNullableFilter<$PrismaModel = never> {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export interface TradesNullableScalarRelationFilter {
    is?: tradesWhereInput | null
    isNot?: tradesWhereInput | null
  }

  export interface UsersNullableScalarRelationFilter {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export interface tradeOffersCountOrderByAggregateInput {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export interface tradeOffersAvgOrderByAggregateInput {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export interface tradeOffersMaxOrderByAggregateInput {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export interface tradeOffersMinOrderByAggregateInput {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    isAccepted?: SortOrder
    createdAt?: SortOrder
  }

  export interface tradeOffersSumOrderByAggregateInput {
    id?: SortOrder
    tradeId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
  }

  export interface BigIntWithAggregatesFilter<$PrismaModel = never> {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export interface BoolNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export interface StringNullableFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export interface DateTimeNullableFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export interface tradesCountOrderByAggregateInput {
    id?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    service?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    tradedAt?: SortOrder
  }

  export interface tradesAvgOrderByAggregateInput {
    id?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
  }

  export interface tradesMaxOrderByAggregateInput {
    id?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    service?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    tradedAt?: SortOrder
  }

  export interface tradesMinOrderByAggregateInput {
    id?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
    service?: SortOrder
    createdAt?: SortOrder
    deadlineAt?: SortOrder
    tradedAt?: SortOrder
  }

  export interface tradesSumOrderByAggregateInput {
    id?: SortOrder
    supplierId?: SortOrder
    customerId?: SortOrder
  }

  export interface StringNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export interface DateTimeNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export interface UsersScalarRelationFilter {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export interface userWalletsCountOrderByAggregateInput {
    id?: SortOrder
    balance?: SortOrder
  }

  export interface userWalletsAvgOrderByAggregateInput {
    id?: SortOrder
    balance?: SortOrder
  }

  export interface userWalletsMaxOrderByAggregateInput {
    id?: SortOrder
    balance?: SortOrder
  }

  export interface userWalletsMinOrderByAggregateInput {
    id?: SortOrder
    balance?: SortOrder
  }

  export interface userWalletsSumOrderByAggregateInput {
    id?: SortOrder
    balance?: SortOrder
  }

  export interface BetOptionsNullableScalarRelationFilter {
    is?: betOptionsWhereInput | null
    isNot?: betOptionsWhereInput | null
  }

  export interface betEntriesCountOrderByAggregateInput {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export interface betEntriesAvgOrderByAggregateInput {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export interface betEntriesMaxOrderByAggregateInput {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export interface betEntriesMinOrderByAggregateInput {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export interface betEntriesSumOrderByAggregateInput {
    id?: SortOrder
    optionId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export interface BetsNullableScalarRelationFilter {
    is?: betsWhereInput | null
    isNot?: betsWhereInput | null
  }

  export interface betOptionsCountOrderByAggregateInput {
    id?: SortOrder
    betId?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
  }

  export interface betOptionsAvgOrderByAggregateInput {
    id?: SortOrder
    betId?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
  }

  export interface betOptionsMaxOrderByAggregateInput {
    id?: SortOrder
    betId?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
  }

  export interface betOptionsMinOrderByAggregateInput {
    id?: SortOrder
    betId?: SortOrder
    description?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
  }

  export interface betOptionsSumOrderByAggregateInput {
    id?: SortOrder
    betId?: SortOrder
    votes?: SortOrder
    amount?: SortOrder
  }

  export interface betEntriesCreateNestedManyWithoutUsersInput {
    create?: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput> | betEntriesCreateWithoutUsersInput[] | betEntriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutUsersInput | betEntriesCreateOrConnectWithoutUsersInput[]
    createMany?: betEntriesCreateManyUsersInputEnvelope
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
  }

  export interface tradeOffersCreateNestedManyWithoutUsersInput {
    create?: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput> | tradeOffersCreateWithoutUsersInput[] | tradeOffersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutUsersInput | tradeOffersCreateOrConnectWithoutUsersInput[]
    createMany?: tradeOffersCreateManyUsersInputEnvelope
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
  }

  export interface tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput {
    create?: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput> | tradesCreateWithoutUsers_trades_customerIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_customerIdTousersInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export interface tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput {
    create?: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput> | tradesCreateWithoutUsers_trades_supplierIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_supplierIdTousersInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export interface userWalletsCreateNestedOneWithoutUsersInput {
    create?: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userWalletsCreateOrConnectWithoutUsersInput
    connect?: userWalletsWhereUniqueInput
  }

  export interface rolesCreateNestedOneWithoutUsersInput {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export interface betEntriesUncheckedCreateNestedManyWithoutUsersInput {
    create?: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput> | betEntriesCreateWithoutUsersInput[] | betEntriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutUsersInput | betEntriesCreateOrConnectWithoutUsersInput[]
    createMany?: betEntriesCreateManyUsersInputEnvelope
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
  }

  export interface tradeOffersUncheckedCreateNestedManyWithoutUsersInput {
    create?: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput> | tradeOffersCreateWithoutUsersInput[] | tradeOffersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutUsersInput | tradeOffersCreateOrConnectWithoutUsersInput[]
    createMany?: tradeOffersCreateManyUsersInputEnvelope
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
  }

  export interface tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput {
    create?: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput> | tradesCreateWithoutUsers_trades_customerIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_customerIdTousersInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export interface tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput {
    create?: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput> | tradesCreateWithoutUsers_trades_supplierIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_supplierIdTousersInputEnvelope
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
  }

  export interface userWalletsUncheckedCreateNestedOneWithoutUsersInput {
    create?: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userWalletsCreateOrConnectWithoutUsersInput
    connect?: userWalletsWhereUniqueInput
  }

  export interface StringFieldUpdateOperationsInput {
    set?: string
  }

  export interface betEntriesUpdateManyWithoutUsersNestedInput {
    create?: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput> | betEntriesCreateWithoutUsersInput[] | betEntriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutUsersInput | betEntriesCreateOrConnectWithoutUsersInput[]
    upsert?: betEntriesUpsertWithWhereUniqueWithoutUsersInput | betEntriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: betEntriesCreateManyUsersInputEnvelope
    set?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    disconnect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    delete?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    update?: betEntriesUpdateWithWhereUniqueWithoutUsersInput | betEntriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: betEntriesUpdateManyWithWhereWithoutUsersInput | betEntriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
  }

  export interface tradeOffersUpdateManyWithoutUsersNestedInput {
    create?: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput> | tradeOffersCreateWithoutUsersInput[] | tradeOffersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutUsersInput | tradeOffersCreateOrConnectWithoutUsersInput[]
    upsert?: tradeOffersUpsertWithWhereUniqueWithoutUsersInput | tradeOffersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tradeOffersCreateManyUsersInputEnvelope
    set?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    disconnect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    delete?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    update?: tradeOffersUpdateWithWhereUniqueWithoutUsersInput | tradeOffersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tradeOffersUpdateManyWithWhereWithoutUsersInput | tradeOffersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
  }

  export interface tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput {
    create?: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput> | tradesCreateWithoutUsers_trades_customerIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUsers_trades_customerIdTousersInput | tradesUpsertWithWhereUniqueWithoutUsers_trades_customerIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_customerIdTousersInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUsers_trades_customerIdTousersInput | tradesUpdateWithWhereUniqueWithoutUsers_trades_customerIdTousersInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUsers_trades_customerIdTousersInput | tradesUpdateManyWithWhereWithoutUsers_trades_customerIdTousersInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export interface tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput {
    create?: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput> | tradesCreateWithoutUsers_trades_supplierIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput | tradesUpsertWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_supplierIdTousersInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput | tradesUpdateWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUsers_trades_supplierIdTousersInput | tradesUpdateManyWithWhereWithoutUsers_trades_supplierIdTousersInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export interface userWalletsUpdateOneWithoutUsersNestedInput {
    create?: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userWalletsCreateOrConnectWithoutUsersInput
    upsert?: userWalletsUpsertWithoutUsersInput
    disconnect?: userWalletsWhereInput | boolean
    delete?: userWalletsWhereInput | boolean
    connect?: userWalletsWhereUniqueInput
    update?: XOR<XOR<userWalletsUpdateToOneWithWhereWithoutUsersInput, userWalletsUpdateWithoutUsersInput>, userWalletsUncheckedUpdateWithoutUsersInput>
  }

  export interface rolesUpdateOneWithoutUsersNestedInput {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    disconnect?: rolesWhereInput | boolean
    delete?: rolesWhereInput | boolean
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export interface IntFieldUpdateOperationsInput {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export interface NullableIntFieldUpdateOperationsInput {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export interface betEntriesUncheckedUpdateManyWithoutUsersNestedInput {
    create?: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput> | betEntriesCreateWithoutUsersInput[] | betEntriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutUsersInput | betEntriesCreateOrConnectWithoutUsersInput[]
    upsert?: betEntriesUpsertWithWhereUniqueWithoutUsersInput | betEntriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: betEntriesCreateManyUsersInputEnvelope
    set?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    disconnect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    delete?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    update?: betEntriesUpdateWithWhereUniqueWithoutUsersInput | betEntriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: betEntriesUpdateManyWithWhereWithoutUsersInput | betEntriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
  }

  export interface tradeOffersUncheckedUpdateManyWithoutUsersNestedInput {
    create?: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput> | tradeOffersCreateWithoutUsersInput[] | tradeOffersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutUsersInput | tradeOffersCreateOrConnectWithoutUsersInput[]
    upsert?: tradeOffersUpsertWithWhereUniqueWithoutUsersInput | tradeOffersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tradeOffersCreateManyUsersInputEnvelope
    set?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    disconnect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    delete?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    update?: tradeOffersUpdateWithWhereUniqueWithoutUsersInput | tradeOffersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tradeOffersUpdateManyWithWhereWithoutUsersInput | tradeOffersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
  }

  export interface tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput {
    create?: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput> | tradesCreateWithoutUsers_trades_customerIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUsers_trades_customerIdTousersInput | tradesUpsertWithWhereUniqueWithoutUsers_trades_customerIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_customerIdTousersInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUsers_trades_customerIdTousersInput | tradesUpdateWithWhereUniqueWithoutUsers_trades_customerIdTousersInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUsers_trades_customerIdTousersInput | tradesUpdateManyWithWhereWithoutUsers_trades_customerIdTousersInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export interface tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput {
    create?: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput> | tradesCreateWithoutUsers_trades_supplierIdTousersInput[] | tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput[]
    connectOrCreate?: tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput | tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput[]
    upsert?: tradesUpsertWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput | tradesUpsertWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput[]
    createMany?: tradesCreateManyUsers_trades_supplierIdTousersInputEnvelope
    set?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    disconnect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    delete?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    connect?: tradesWhereUniqueInput | tradesWhereUniqueInput[]
    update?: tradesUpdateWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput | tradesUpdateWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput[]
    updateMany?: tradesUpdateManyWithWhereWithoutUsers_trades_supplierIdTousersInput | tradesUpdateManyWithWhereWithoutUsers_trades_supplierIdTousersInput[]
    deleteMany?: tradesScalarWhereInput | tradesScalarWhereInput[]
  }

  export interface userWalletsUncheckedUpdateOneWithoutUsersNestedInput {
    create?: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userWalletsCreateOrConnectWithoutUsersInput
    upsert?: userWalletsUpsertWithoutUsersInput
    disconnect?: userWalletsWhereInput | boolean
    delete?: userWalletsWhereInput | boolean
    connect?: userWalletsWhereUniqueInput
    update?: XOR<XOR<userWalletsUpdateToOneWithWhereWithoutUsersInput, userWalletsUpdateWithoutUsersInput>, userWalletsUncheckedUpdateWithoutUsersInput>
  }

  export interface betOptionsCreateNestedManyWithoutBetsInput {
    create?: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput> | betOptionsCreateWithoutBetsInput[] | betOptionsUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetsInput | betOptionsCreateOrConnectWithoutBetsInput[]
    createMany?: betOptionsCreateManyBetsInputEnvelope
    connect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
  }

  export interface statusCreateNestedOneWithoutBets_bets_statusTostatusInput {
    create?: XOR<statusCreateWithoutBets_bets_statusTostatusInput, statusUncheckedCreateWithoutBets_bets_statusTostatusInput>
    connectOrCreate?: statusCreateOrConnectWithoutBets_bets_statusTostatusInput
    connect?: statusWhereUniqueInput
  }

  export interface betOptionsUncheckedCreateNestedManyWithoutBetsInput {
    create?: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput> | betOptionsCreateWithoutBetsInput[] | betOptionsUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetsInput | betOptionsCreateOrConnectWithoutBetsInput[]
    createMany?: betOptionsCreateManyBetsInputEnvelope
    connect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
  }

  export interface DateTimeFieldUpdateOperationsInput {
    set?: Date | string
  }

  export interface betOptionsUpdateManyWithoutBetsNestedInput {
    create?: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput> | betOptionsCreateWithoutBetsInput[] | betOptionsUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetsInput | betOptionsCreateOrConnectWithoutBetsInput[]
    upsert?: betOptionsUpsertWithWhereUniqueWithoutBetsInput | betOptionsUpsertWithWhereUniqueWithoutBetsInput[]
    createMany?: betOptionsCreateManyBetsInputEnvelope
    set?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    disconnect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    delete?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    connect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    update?: betOptionsUpdateWithWhereUniqueWithoutBetsInput | betOptionsUpdateWithWhereUniqueWithoutBetsInput[]
    updateMany?: betOptionsUpdateManyWithWhereWithoutBetsInput | betOptionsUpdateManyWithWhereWithoutBetsInput[]
    deleteMany?: betOptionsScalarWhereInput | betOptionsScalarWhereInput[]
  }

  export interface statusUpdateOneWithoutBets_bets_statusTostatusNestedInput {
    create?: XOR<statusCreateWithoutBets_bets_statusTostatusInput, statusUncheckedCreateWithoutBets_bets_statusTostatusInput>
    connectOrCreate?: statusCreateOrConnectWithoutBets_bets_statusTostatusInput
    upsert?: statusUpsertWithoutBets_bets_statusTostatusInput
    disconnect?: statusWhereInput | boolean
    delete?: statusWhereInput | boolean
    connect?: statusWhereUniqueInput
    update?: XOR<XOR<statusUpdateToOneWithWhereWithoutBets_bets_statusTostatusInput, statusUpdateWithoutBets_bets_statusTostatusInput>, statusUncheckedUpdateWithoutBets_bets_statusTostatusInput>
  }

  export interface betOptionsUncheckedUpdateManyWithoutBetsNestedInput {
    create?: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput> | betOptionsCreateWithoutBetsInput[] | betOptionsUncheckedCreateWithoutBetsInput[]
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetsInput | betOptionsCreateOrConnectWithoutBetsInput[]
    upsert?: betOptionsUpsertWithWhereUniqueWithoutBetsInput | betOptionsUpsertWithWhereUniqueWithoutBetsInput[]
    createMany?: betOptionsCreateManyBetsInputEnvelope
    set?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    disconnect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    delete?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    connect?: betOptionsWhereUniqueInput | betOptionsWhereUniqueInput[]
    update?: betOptionsUpdateWithWhereUniqueWithoutBetsInput | betOptionsUpdateWithWhereUniqueWithoutBetsInput[]
    updateMany?: betOptionsUpdateManyWithWhereWithoutBetsInput | betOptionsUpdateManyWithWhereWithoutBetsInput[]
    deleteMany?: betOptionsScalarWhereInput | betOptionsScalarWhereInput[]
  }

  export interface usersCreateNestedManyWithoutRolesInput {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export interface usersUncheckedCreateNestedManyWithoutRolesInput {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export interface usersUpdateManyWithoutRolesNestedInput {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export interface usersUncheckedUpdateManyWithoutRolesNestedInput {
    create?: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput> | usersCreateWithoutRolesInput[] | usersUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutRolesInput | usersCreateOrConnectWithoutRolesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutRolesInput | usersUpsertWithWhereUniqueWithoutRolesInput[]
    createMany?: usersCreateManyRolesInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutRolesInput | usersUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutRolesInput | usersUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export interface betsCreateNestedManyWithoutStatus_bets_statusTostatusInput {
    create?: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput> | betsCreateWithoutStatus_bets_statusTostatusInput[] | betsUncheckedCreateWithoutStatus_bets_statusTostatusInput[]
    connectOrCreate?: betsCreateOrConnectWithoutStatus_bets_statusTostatusInput | betsCreateOrConnectWithoutStatus_bets_statusTostatusInput[]
    createMany?: betsCreateManyStatus_bets_statusTostatusInputEnvelope
    connect?: betsWhereUniqueInput | betsWhereUniqueInput[]
  }

  export interface betsUncheckedCreateNestedManyWithoutStatus_bets_statusTostatusInput {
    create?: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput> | betsCreateWithoutStatus_bets_statusTostatusInput[] | betsUncheckedCreateWithoutStatus_bets_statusTostatusInput[]
    connectOrCreate?: betsCreateOrConnectWithoutStatus_bets_statusTostatusInput | betsCreateOrConnectWithoutStatus_bets_statusTostatusInput[]
    createMany?: betsCreateManyStatus_bets_statusTostatusInputEnvelope
    connect?: betsWhereUniqueInput | betsWhereUniqueInput[]
  }

  export interface betsUpdateManyWithoutStatus_bets_statusTostatusNestedInput {
    create?: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput> | betsCreateWithoutStatus_bets_statusTostatusInput[] | betsUncheckedCreateWithoutStatus_bets_statusTostatusInput[]
    connectOrCreate?: betsCreateOrConnectWithoutStatus_bets_statusTostatusInput | betsCreateOrConnectWithoutStatus_bets_statusTostatusInput[]
    upsert?: betsUpsertWithWhereUniqueWithoutStatus_bets_statusTostatusInput | betsUpsertWithWhereUniqueWithoutStatus_bets_statusTostatusInput[]
    createMany?: betsCreateManyStatus_bets_statusTostatusInputEnvelope
    set?: betsWhereUniqueInput | betsWhereUniqueInput[]
    disconnect?: betsWhereUniqueInput | betsWhereUniqueInput[]
    delete?: betsWhereUniqueInput | betsWhereUniqueInput[]
    connect?: betsWhereUniqueInput | betsWhereUniqueInput[]
    update?: betsUpdateWithWhereUniqueWithoutStatus_bets_statusTostatusInput | betsUpdateWithWhereUniqueWithoutStatus_bets_statusTostatusInput[]
    updateMany?: betsUpdateManyWithWhereWithoutStatus_bets_statusTostatusInput | betsUpdateManyWithWhereWithoutStatus_bets_statusTostatusInput[]
    deleteMany?: betsScalarWhereInput | betsScalarWhereInput[]
  }

  export interface betsUncheckedUpdateManyWithoutStatus_bets_statusTostatusNestedInput {
    create?: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput> | betsCreateWithoutStatus_bets_statusTostatusInput[] | betsUncheckedCreateWithoutStatus_bets_statusTostatusInput[]
    connectOrCreate?: betsCreateOrConnectWithoutStatus_bets_statusTostatusInput | betsCreateOrConnectWithoutStatus_bets_statusTostatusInput[]
    upsert?: betsUpsertWithWhereUniqueWithoutStatus_bets_statusTostatusInput | betsUpsertWithWhereUniqueWithoutStatus_bets_statusTostatusInput[]
    createMany?: betsCreateManyStatus_bets_statusTostatusInputEnvelope
    set?: betsWhereUniqueInput | betsWhereUniqueInput[]
    disconnect?: betsWhereUniqueInput | betsWhereUniqueInput[]
    delete?: betsWhereUniqueInput | betsWhereUniqueInput[]
    connect?: betsWhereUniqueInput | betsWhereUniqueInput[]
    update?: betsUpdateWithWhereUniqueWithoutStatus_bets_statusTostatusInput | betsUpdateWithWhereUniqueWithoutStatus_bets_statusTostatusInput[]
    updateMany?: betsUpdateManyWithWhereWithoutStatus_bets_statusTostatusInput | betsUpdateManyWithWhereWithoutStatus_bets_statusTostatusInput[]
    deleteMany?: betsScalarWhereInput | betsScalarWhereInput[]
  }

  export interface tradesCreateNestedOneWithoutTradeOffersInput {
    create?: XOR<tradesCreateWithoutTradeOffersInput, tradesUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: tradesCreateOrConnectWithoutTradeOffersInput
    connect?: tradesWhereUniqueInput
  }

  export interface usersCreateNestedOneWithoutTradeOffersInput {
    create?: XOR<usersCreateWithoutTradeOffersInput, usersUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTradeOffersInput
    connect?: usersWhereUniqueInput
  }

  export interface BigIntFieldUpdateOperationsInput {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export interface NullableBoolFieldUpdateOperationsInput {
    set?: boolean | null
  }

  export interface tradesUpdateOneWithoutTradeOffersNestedInput {
    create?: XOR<tradesCreateWithoutTradeOffersInput, tradesUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: tradesCreateOrConnectWithoutTradeOffersInput
    upsert?: tradesUpsertWithoutTradeOffersInput
    disconnect?: tradesWhereInput | boolean
    delete?: tradesWhereInput | boolean
    connect?: tradesWhereUniqueInput
    update?: XOR<XOR<tradesUpdateToOneWithWhereWithoutTradeOffersInput, tradesUpdateWithoutTradeOffersInput>, tradesUncheckedUpdateWithoutTradeOffersInput>
  }

  export interface usersUpdateOneWithoutTradeOffersNestedInput {
    create?: XOR<usersCreateWithoutTradeOffersInput, usersUncheckedCreateWithoutTradeOffersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTradeOffersInput
    upsert?: usersUpsertWithoutTradeOffersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTradeOffersInput, usersUpdateWithoutTradeOffersInput>, usersUncheckedUpdateWithoutTradeOffersInput>
  }

  export interface tradeOffersCreateNestedManyWithoutTradesInput {
    create?: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput> | tradeOffersCreateWithoutTradesInput[] | tradeOffersUncheckedCreateWithoutTradesInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutTradesInput | tradeOffersCreateOrConnectWithoutTradesInput[]
    createMany?: tradeOffersCreateManyTradesInputEnvelope
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
  }

  export interface usersCreateNestedOneWithoutTrades_trades_customerIdTousersInput {
    create?: XOR<usersCreateWithoutTrades_trades_customerIdTousersInput, usersUncheckedCreateWithoutTrades_trades_customerIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTrades_trades_customerIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export interface usersCreateNestedOneWithoutTrades_trades_supplierIdTousersInput {
    create?: XOR<usersCreateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedCreateWithoutTrades_trades_supplierIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTrades_trades_supplierIdTousersInput
    connect?: usersWhereUniqueInput
  }

  export interface tradeOffersUncheckedCreateNestedManyWithoutTradesInput {
    create?: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput> | tradeOffersCreateWithoutTradesInput[] | tradeOffersUncheckedCreateWithoutTradesInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutTradesInput | tradeOffersCreateOrConnectWithoutTradesInput[]
    createMany?: tradeOffersCreateManyTradesInputEnvelope
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
  }

  export interface NullableStringFieldUpdateOperationsInput {
    set?: string | null
  }

  export interface NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string | null
  }

  export interface tradeOffersUpdateManyWithoutTradesNestedInput {
    create?: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput> | tradeOffersCreateWithoutTradesInput[] | tradeOffersUncheckedCreateWithoutTradesInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutTradesInput | tradeOffersCreateOrConnectWithoutTradesInput[]
    upsert?: tradeOffersUpsertWithWhereUniqueWithoutTradesInput | tradeOffersUpsertWithWhereUniqueWithoutTradesInput[]
    createMany?: tradeOffersCreateManyTradesInputEnvelope
    set?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    disconnect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    delete?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    update?: tradeOffersUpdateWithWhereUniqueWithoutTradesInput | tradeOffersUpdateWithWhereUniqueWithoutTradesInput[]
    updateMany?: tradeOffersUpdateManyWithWhereWithoutTradesInput | tradeOffersUpdateManyWithWhereWithoutTradesInput[]
    deleteMany?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
  }

  export interface usersUpdateOneWithoutTrades_trades_customerIdTousersNestedInput {
    create?: XOR<usersCreateWithoutTrades_trades_customerIdTousersInput, usersUncheckedCreateWithoutTrades_trades_customerIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTrades_trades_customerIdTousersInput
    upsert?: usersUpsertWithoutTrades_trades_customerIdTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTrades_trades_customerIdTousersInput, usersUpdateWithoutTrades_trades_customerIdTousersInput>, usersUncheckedUpdateWithoutTrades_trades_customerIdTousersInput>
  }

  export interface usersUpdateOneWithoutTrades_trades_supplierIdTousersNestedInput {
    create?: XOR<usersCreateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedCreateWithoutTrades_trades_supplierIdTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTrades_trades_supplierIdTousersInput
    upsert?: usersUpsertWithoutTrades_trades_supplierIdTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTrades_trades_supplierIdTousersInput, usersUpdateWithoutTrades_trades_supplierIdTousersInput>, usersUncheckedUpdateWithoutTrades_trades_supplierIdTousersInput>
  }

  export interface tradeOffersUncheckedUpdateManyWithoutTradesNestedInput {
    create?: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput> | tradeOffersCreateWithoutTradesInput[] | tradeOffersUncheckedCreateWithoutTradesInput[]
    connectOrCreate?: tradeOffersCreateOrConnectWithoutTradesInput | tradeOffersCreateOrConnectWithoutTradesInput[]
    upsert?: tradeOffersUpsertWithWhereUniqueWithoutTradesInput | tradeOffersUpsertWithWhereUniqueWithoutTradesInput[]
    createMany?: tradeOffersCreateManyTradesInputEnvelope
    set?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    disconnect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    delete?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    connect?: tradeOffersWhereUniqueInput | tradeOffersWhereUniqueInput[]
    update?: tradeOffersUpdateWithWhereUniqueWithoutTradesInput | tradeOffersUpdateWithWhereUniqueWithoutTradesInput[]
    updateMany?: tradeOffersUpdateManyWithWhereWithoutTradesInput | tradeOffersUpdateManyWithWhereWithoutTradesInput[]
    deleteMany?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
  }

  export interface usersCreateNestedOneWithoutUserWalletsInput {
    create?: XOR<usersCreateWithoutUserWalletsInput, usersUncheckedCreateWithoutUserWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUserWalletsInput
    connect?: usersWhereUniqueInput
  }

  export interface usersUpdateOneRequiredWithoutUserWalletsNestedInput {
    create?: XOR<usersCreateWithoutUserWalletsInput, usersUncheckedCreateWithoutUserWalletsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUserWalletsInput
    upsert?: usersUpsertWithoutUserWalletsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUserWalletsInput, usersUpdateWithoutUserWalletsInput>, usersUncheckedUpdateWithoutUserWalletsInput>
  }

  export interface betOptionsCreateNestedOneWithoutBetEntriesInput {
    create?: XOR<betOptionsCreateWithoutBetEntriesInput, betOptionsUncheckedCreateWithoutBetEntriesInput>
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetEntriesInput
    connect?: betOptionsWhereUniqueInput
  }

  export interface usersCreateNestedOneWithoutBetEntriesInput {
    create?: XOR<usersCreateWithoutBetEntriesInput, usersUncheckedCreateWithoutBetEntriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutBetEntriesInput
    connect?: usersWhereUniqueInput
  }

  export interface betOptionsUpdateOneWithoutBetEntriesNestedInput {
    create?: XOR<betOptionsCreateWithoutBetEntriesInput, betOptionsUncheckedCreateWithoutBetEntriesInput>
    connectOrCreate?: betOptionsCreateOrConnectWithoutBetEntriesInput
    upsert?: betOptionsUpsertWithoutBetEntriesInput
    disconnect?: betOptionsWhereInput | boolean
    delete?: betOptionsWhereInput | boolean
    connect?: betOptionsWhereUniqueInput
    update?: XOR<XOR<betOptionsUpdateToOneWithWhereWithoutBetEntriesInput, betOptionsUpdateWithoutBetEntriesInput>, betOptionsUncheckedUpdateWithoutBetEntriesInput>
  }

  export interface usersUpdateOneWithoutBetEntriesNestedInput {
    create?: XOR<usersCreateWithoutBetEntriesInput, usersUncheckedCreateWithoutBetEntriesInput>
    connectOrCreate?: usersCreateOrConnectWithoutBetEntriesInput
    upsert?: usersUpsertWithoutBetEntriesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBetEntriesInput, usersUpdateWithoutBetEntriesInput>, usersUncheckedUpdateWithoutBetEntriesInput>
  }

  export interface betEntriesCreateNestedManyWithoutBetOptionsInput {
    create?: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput> | betEntriesCreateWithoutBetOptionsInput[] | betEntriesUncheckedCreateWithoutBetOptionsInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutBetOptionsInput | betEntriesCreateOrConnectWithoutBetOptionsInput[]
    createMany?: betEntriesCreateManyBetOptionsInputEnvelope
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
  }

  export interface betsCreateNestedOneWithoutBetOptionsInput {
    create?: XOR<betsCreateWithoutBetOptionsInput, betsUncheckedCreateWithoutBetOptionsInput>
    connectOrCreate?: betsCreateOrConnectWithoutBetOptionsInput
    connect?: betsWhereUniqueInput
  }

  export interface betEntriesUncheckedCreateNestedManyWithoutBetOptionsInput {
    create?: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput> | betEntriesCreateWithoutBetOptionsInput[] | betEntriesUncheckedCreateWithoutBetOptionsInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutBetOptionsInput | betEntriesCreateOrConnectWithoutBetOptionsInput[]
    createMany?: betEntriesCreateManyBetOptionsInputEnvelope
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
  }

  export interface betEntriesUpdateManyWithoutBetOptionsNestedInput {
    create?: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput> | betEntriesCreateWithoutBetOptionsInput[] | betEntriesUncheckedCreateWithoutBetOptionsInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutBetOptionsInput | betEntriesCreateOrConnectWithoutBetOptionsInput[]
    upsert?: betEntriesUpsertWithWhereUniqueWithoutBetOptionsInput | betEntriesUpsertWithWhereUniqueWithoutBetOptionsInput[]
    createMany?: betEntriesCreateManyBetOptionsInputEnvelope
    set?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    disconnect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    delete?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    update?: betEntriesUpdateWithWhereUniqueWithoutBetOptionsInput | betEntriesUpdateWithWhereUniqueWithoutBetOptionsInput[]
    updateMany?: betEntriesUpdateManyWithWhereWithoutBetOptionsInput | betEntriesUpdateManyWithWhereWithoutBetOptionsInput[]
    deleteMany?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
  }

  export interface betsUpdateOneWithoutBetOptionsNestedInput {
    create?: XOR<betsCreateWithoutBetOptionsInput, betsUncheckedCreateWithoutBetOptionsInput>
    connectOrCreate?: betsCreateOrConnectWithoutBetOptionsInput
    upsert?: betsUpsertWithoutBetOptionsInput
    disconnect?: betsWhereInput | boolean
    delete?: betsWhereInput | boolean
    connect?: betsWhereUniqueInput
    update?: XOR<XOR<betsUpdateToOneWithWhereWithoutBetOptionsInput, betsUpdateWithoutBetOptionsInput>, betsUncheckedUpdateWithoutBetOptionsInput>
  }

  export interface betEntriesUncheckedUpdateManyWithoutBetOptionsNestedInput {
    create?: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput> | betEntriesCreateWithoutBetOptionsInput[] | betEntriesUncheckedCreateWithoutBetOptionsInput[]
    connectOrCreate?: betEntriesCreateOrConnectWithoutBetOptionsInput | betEntriesCreateOrConnectWithoutBetOptionsInput[]
    upsert?: betEntriesUpsertWithWhereUniqueWithoutBetOptionsInput | betEntriesUpsertWithWhereUniqueWithoutBetOptionsInput[]
    createMany?: betEntriesCreateManyBetOptionsInputEnvelope
    set?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    disconnect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    delete?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    connect?: betEntriesWhereUniqueInput | betEntriesWhereUniqueInput[]
    update?: betEntriesUpdateWithWhereUniqueWithoutBetOptionsInput | betEntriesUpdateWithWhereUniqueWithoutBetOptionsInput[]
    updateMany?: betEntriesUpdateManyWithWhereWithoutBetOptionsInput | betEntriesUpdateManyWithWhereWithoutBetOptionsInput[]
    deleteMany?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
  }

  export interface NestedIntFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export interface NestedStringFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export interface NestedIntNullableFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export interface NestedIntWithAggregatesFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export interface NestedFloatFilter<$PrismaModel = never> {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export interface NestedStringWithAggregatesFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export interface NestedIntNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export interface NestedFloatNullableFilter<$PrismaModel = never> {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export interface NestedDateTimeFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export interface NestedDateTimeWithAggregatesFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export interface NestedBigIntFilter<$PrismaModel = never> {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export interface NestedBoolNullableFilter<$PrismaModel = never> {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export interface NestedBigIntWithAggregatesFilter<$PrismaModel = never> {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export interface NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export interface NestedStringNullableFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export interface NestedDateTimeNullableFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export interface NestedStringNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export interface NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export interface betEntriesCreateWithoutUsersInput {
    amount: number
    betOptions?: betOptionsCreateNestedOneWithoutBetEntriesInput
  }

  export interface betEntriesUncheckedCreateWithoutUsersInput {
    id?: number
    optionId?: number | null
    amount: number
  }

  export interface betEntriesCreateOrConnectWithoutUsersInput {
    where: betEntriesWhereUniqueInput
    create: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput>
  }

  export interface betEntriesCreateManyUsersInputEnvelope {
    data: betEntriesCreateManyUsersInput | betEntriesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export interface tradeOffersCreateWithoutUsersInput {
    id?: bigint | number
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
    trades?: tradesCreateNestedOneWithoutTradeOffersInput
  }

  export interface tradeOffersUncheckedCreateWithoutUsersInput {
    id?: bigint | number
    tradeId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradeOffersCreateOrConnectWithoutUsersInput {
    where: tradeOffersWhereUniqueInput
    create: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput>
  }

  export interface tradeOffersCreateManyUsersInputEnvelope {
    data: tradeOffersCreateManyUsersInput | tradeOffersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export interface tradesCreateWithoutUsers_trades_customerIdTousersInput {
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersCreateNestedManyWithoutTradesInput
    users_trades_supplierIdTousers?: usersCreateNestedOneWithoutTrades_trades_supplierIdTousersInput
  }

  export interface tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput {
    id?: number
    supplierId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutTradesInput
  }

  export interface tradesCreateOrConnectWithoutUsers_trades_customerIdTousersInput {
    where: tradesWhereUniqueInput
    create: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput>
  }

  export interface tradesCreateManyUsers_trades_customerIdTousersInputEnvelope {
    data: tradesCreateManyUsers_trades_customerIdTousersInput | tradesCreateManyUsers_trades_customerIdTousersInput[]
    skipDuplicates?: boolean
  }

  export interface tradesCreateWithoutUsers_trades_supplierIdTousersInput {
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersCreateNestedManyWithoutTradesInput
    users_trades_customerIdTousers?: usersCreateNestedOneWithoutTrades_trades_customerIdTousersInput
  }

  export interface tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput {
    id?: number
    customerId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutTradesInput
  }

  export interface tradesCreateOrConnectWithoutUsers_trades_supplierIdTousersInput {
    where: tradesWhereUniqueInput
    create: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput>
  }

  export interface tradesCreateManyUsers_trades_supplierIdTousersInputEnvelope {
    data: tradesCreateManyUsers_trades_supplierIdTousersInput | tradesCreateManyUsers_trades_supplierIdTousersInput[]
    skipDuplicates?: boolean
  }

  export interface userWalletsCreateWithoutUsersInput {
    balance?: number
  }

  export interface userWalletsUncheckedCreateWithoutUsersInput {
    balance?: number
  }

  export interface userWalletsCreateOrConnectWithoutUsersInput {
    where: userWalletsWhereUniqueInput
    create: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
  }

  export interface rolesCreateWithoutUsersInput {
    description: string
  }

  export interface rolesUncheckedCreateWithoutUsersInput {
    id?: number
    description: string
  }

  export interface rolesCreateOrConnectWithoutUsersInput {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export interface betEntriesUpsertWithWhereUniqueWithoutUsersInput {
    where: betEntriesWhereUniqueInput
    update: XOR<betEntriesUpdateWithoutUsersInput, betEntriesUncheckedUpdateWithoutUsersInput>
    create: XOR<betEntriesCreateWithoutUsersInput, betEntriesUncheckedCreateWithoutUsersInput>
  }

  export interface betEntriesUpdateWithWhereUniqueWithoutUsersInput {
    where: betEntriesWhereUniqueInput
    data: XOR<betEntriesUpdateWithoutUsersInput, betEntriesUncheckedUpdateWithoutUsersInput>
  }

  export interface betEntriesUpdateManyWithWhereWithoutUsersInput {
    where: betEntriesScalarWhereInput
    data: XOR<betEntriesUpdateManyMutationInput, betEntriesUncheckedUpdateManyWithoutUsersInput>
  }

  export interface betEntriesScalarWhereInput {
    AND?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
    OR?: betEntriesScalarWhereInput[]
    NOT?: betEntriesScalarWhereInput | betEntriesScalarWhereInput[]
    id?: IntFilter<'betEntries'> | number
    optionId?: IntNullableFilter<'betEntries'> | number | null
    userId?: IntNullableFilter<'betEntries'> | number | null
    amount?: IntFilter<'betEntries'> | number
  }

  export interface tradeOffersUpsertWithWhereUniqueWithoutUsersInput {
    where: tradeOffersWhereUniqueInput
    update: XOR<tradeOffersUpdateWithoutUsersInput, tradeOffersUncheckedUpdateWithoutUsersInput>
    create: XOR<tradeOffersCreateWithoutUsersInput, tradeOffersUncheckedCreateWithoutUsersInput>
  }

  export interface tradeOffersUpdateWithWhereUniqueWithoutUsersInput {
    where: tradeOffersWhereUniqueInput
    data: XOR<tradeOffersUpdateWithoutUsersInput, tradeOffersUncheckedUpdateWithoutUsersInput>
  }

  export interface tradeOffersUpdateManyWithWhereWithoutUsersInput {
    where: tradeOffersScalarWhereInput
    data: XOR<tradeOffersUpdateManyMutationInput, tradeOffersUncheckedUpdateManyWithoutUsersInput>
  }

  export interface tradeOffersScalarWhereInput {
    AND?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
    OR?: tradeOffersScalarWhereInput[]
    NOT?: tradeOffersScalarWhereInput | tradeOffersScalarWhereInput[]
    id?: BigIntFilter<'tradeOffers'> | bigint | number
    tradeId?: IntNullableFilter<'tradeOffers'> | number | null
    userId?: IntNullableFilter<'tradeOffers'> | number | null
    value?: IntFilter<'tradeOffers'> | number
    isAccepted?: BoolNullableFilter<'tradeOffers'> | boolean | null
    createdAt?: DateTimeFilter<'tradeOffers'> | Date | string
  }

  export interface tradesUpsertWithWhereUniqueWithoutUsers_trades_customerIdTousersInput {
    where: tradesWhereUniqueInput
    update: XOR<tradesUpdateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedUpdateWithoutUsers_trades_customerIdTousersInput>
    create: XOR<tradesCreateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_customerIdTousersInput>
  }

  export interface tradesUpdateWithWhereUniqueWithoutUsers_trades_customerIdTousersInput {
    where: tradesWhereUniqueInput
    data: XOR<tradesUpdateWithoutUsers_trades_customerIdTousersInput, tradesUncheckedUpdateWithoutUsers_trades_customerIdTousersInput>
  }

  export interface tradesUpdateManyWithWhereWithoutUsers_trades_customerIdTousersInput {
    where: tradesScalarWhereInput
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersInput>
  }

  export interface tradesScalarWhereInput {
    AND?: tradesScalarWhereInput | tradesScalarWhereInput[]
    OR?: tradesScalarWhereInput[]
    NOT?: tradesScalarWhereInput | tradesScalarWhereInput[]
    id?: IntFilter<'trades'> | number
    supplierId?: IntNullableFilter<'trades'> | number | null
    customerId?: IntNullableFilter<'trades'> | number | null
    service?: StringNullableFilter<'trades'> | string | null
    createdAt?: DateTimeFilter<'trades'> | Date | string
    deadlineAt?: DateTimeNullableFilter<'trades'> | Date | string | null
    tradedAt?: DateTimeNullableFilter<'trades'> | Date | string | null
  }

  export interface tradesUpsertWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput {
    where: tradesWhereUniqueInput
    update: XOR<tradesUpdateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedUpdateWithoutUsers_trades_supplierIdTousersInput>
    create: XOR<tradesCreateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedCreateWithoutUsers_trades_supplierIdTousersInput>
  }

  export interface tradesUpdateWithWhereUniqueWithoutUsers_trades_supplierIdTousersInput {
    where: tradesWhereUniqueInput
    data: XOR<tradesUpdateWithoutUsers_trades_supplierIdTousersInput, tradesUncheckedUpdateWithoutUsers_trades_supplierIdTousersInput>
  }

  export interface tradesUpdateManyWithWhereWithoutUsers_trades_supplierIdTousersInput {
    where: tradesScalarWhereInput
    data: XOR<tradesUpdateManyMutationInput, tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersInput>
  }

  export interface userWalletsUpsertWithoutUsersInput {
    update: XOR<userWalletsUpdateWithoutUsersInput, userWalletsUncheckedUpdateWithoutUsersInput>
    create: XOR<userWalletsCreateWithoutUsersInput, userWalletsUncheckedCreateWithoutUsersInput>
    where?: userWalletsWhereInput
  }

  export interface userWalletsUpdateToOneWithWhereWithoutUsersInput {
    where?: userWalletsWhereInput
    data: XOR<userWalletsUpdateWithoutUsersInput, userWalletsUncheckedUpdateWithoutUsersInput>
  }

  export interface userWalletsUpdateWithoutUsersInput {
    balance?: IntFieldUpdateOperationsInput | number
  }

  export interface userWalletsUncheckedUpdateWithoutUsersInput {
    balance?: IntFieldUpdateOperationsInput | number
  }

  export interface rolesUpsertWithoutUsersInput {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export interface rolesUpdateToOneWithWhereWithoutUsersInput {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export interface rolesUpdateWithoutUsersInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface rolesUncheckedUpdateWithoutUsersInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface betOptionsCreateWithoutBetsInput {
    description: string
    votes: number
    amount: number
    betEntries?: betEntriesCreateNestedManyWithoutBetOptionsInput
  }

  export interface betOptionsUncheckedCreateWithoutBetsInput {
    id?: number
    description: string
    votes: number
    amount: number
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutBetOptionsInput
  }

  export interface betOptionsCreateOrConnectWithoutBetsInput {
    where: betOptionsWhereUniqueInput
    create: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput>
  }

  export interface betOptionsCreateManyBetsInputEnvelope {
    data: betOptionsCreateManyBetsInput | betOptionsCreateManyBetsInput[]
    skipDuplicates?: boolean
  }

  export interface statusCreateWithoutBets_bets_statusTostatusInput {
    description: string
  }

  export interface statusUncheckedCreateWithoutBets_bets_statusTostatusInput {
    id?: number
    description: string
  }

  export interface statusCreateOrConnectWithoutBets_bets_statusTostatusInput {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutBets_bets_statusTostatusInput, statusUncheckedCreateWithoutBets_bets_statusTostatusInput>
  }

  export interface betOptionsUpsertWithWhereUniqueWithoutBetsInput {
    where: betOptionsWhereUniqueInput
    update: XOR<betOptionsUpdateWithoutBetsInput, betOptionsUncheckedUpdateWithoutBetsInput>
    create: XOR<betOptionsCreateWithoutBetsInput, betOptionsUncheckedCreateWithoutBetsInput>
  }

  export interface betOptionsUpdateWithWhereUniqueWithoutBetsInput {
    where: betOptionsWhereUniqueInput
    data: XOR<betOptionsUpdateWithoutBetsInput, betOptionsUncheckedUpdateWithoutBetsInput>
  }

  export interface betOptionsUpdateManyWithWhereWithoutBetsInput {
    where: betOptionsScalarWhereInput
    data: XOR<betOptionsUpdateManyMutationInput, betOptionsUncheckedUpdateManyWithoutBetsInput>
  }

  export interface betOptionsScalarWhereInput {
    AND?: betOptionsScalarWhereInput | betOptionsScalarWhereInput[]
    OR?: betOptionsScalarWhereInput[]
    NOT?: betOptionsScalarWhereInput | betOptionsScalarWhereInput[]
    id?: IntFilter<'betOptions'> | number
    betId?: IntNullableFilter<'betOptions'> | number | null
    description?: StringFilter<'betOptions'> | string
    votes?: IntFilter<'betOptions'> | number
    amount?: IntFilter<'betOptions'> | number
  }

  export interface statusUpsertWithoutBets_bets_statusTostatusInput {
    update: XOR<statusUpdateWithoutBets_bets_statusTostatusInput, statusUncheckedUpdateWithoutBets_bets_statusTostatusInput>
    create: XOR<statusCreateWithoutBets_bets_statusTostatusInput, statusUncheckedCreateWithoutBets_bets_statusTostatusInput>
    where?: statusWhereInput
  }

  export interface statusUpdateToOneWithWhereWithoutBets_bets_statusTostatusInput {
    where?: statusWhereInput
    data: XOR<statusUpdateWithoutBets_bets_statusTostatusInput, statusUncheckedUpdateWithoutBets_bets_statusTostatusInput>
  }

  export interface statusUpdateWithoutBets_bets_statusTostatusInput {
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface statusUncheckedUpdateWithoutBets_bets_statusTostatusInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export interface usersCreateWithoutRolesInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutRolesInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersCreateOrConnectWithoutRolesInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export interface usersCreateManyRolesInputEnvelope {
    data: usersCreateManyRolesInput | usersCreateManyRolesInput[]
    skipDuplicates?: boolean
  }

  export interface usersUpsertWithWhereUniqueWithoutRolesInput {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
    create: XOR<usersCreateWithoutRolesInput, usersUncheckedCreateWithoutRolesInput>
  }

  export interface usersUpdateWithWhereUniqueWithoutRolesInput {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutRolesInput, usersUncheckedUpdateWithoutRolesInput>
  }

  export interface usersUpdateManyWithWhereWithoutRolesInput {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutRolesInput>
  }

  export interface usersScalarWhereInput {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: IntFilter<'users'> | number
    firstName?: StringFilter<'users'> | string
    lastName?: StringFilter<'users'> | string
    username?: StringFilter<'users'> | string
    password?: StringFilter<'users'> | string
    role?: IntNullableFilter<'users'> | number | null
  }

  export interface betsCreateWithoutStatus_bets_statusTostatusInput {
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    participants?: number
    amount?: number
    betOptions?: betOptionsCreateNestedManyWithoutBetsInput
  }

  export interface betsUncheckedCreateWithoutStatus_bets_statusTostatusInput {
    id?: number
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    participants?: number
    amount?: number
    betOptions?: betOptionsUncheckedCreateNestedManyWithoutBetsInput
  }

  export interface betsCreateOrConnectWithoutStatus_bets_statusTostatusInput {
    where: betsWhereUniqueInput
    create: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput>
  }

  export interface betsCreateManyStatus_bets_statusTostatusInputEnvelope {
    data: betsCreateManyStatus_bets_statusTostatusInput | betsCreateManyStatus_bets_statusTostatusInput[]
    skipDuplicates?: boolean
  }

  export interface betsUpsertWithWhereUniqueWithoutStatus_bets_statusTostatusInput {
    where: betsWhereUniqueInput
    update: XOR<betsUpdateWithoutStatus_bets_statusTostatusInput, betsUncheckedUpdateWithoutStatus_bets_statusTostatusInput>
    create: XOR<betsCreateWithoutStatus_bets_statusTostatusInput, betsUncheckedCreateWithoutStatus_bets_statusTostatusInput>
  }

  export interface betsUpdateWithWhereUniqueWithoutStatus_bets_statusTostatusInput {
    where: betsWhereUniqueInput
    data: XOR<betsUpdateWithoutStatus_bets_statusTostatusInput, betsUncheckedUpdateWithoutStatus_bets_statusTostatusInput>
  }

  export interface betsUpdateManyWithWhereWithoutStatus_bets_statusTostatusInput {
    where: betsScalarWhereInput
    data: XOR<betsUpdateManyMutationInput, betsUncheckedUpdateManyWithoutStatus_bets_statusTostatusInput>
  }

  export interface betsScalarWhereInput {
    AND?: betsScalarWhereInput | betsScalarWhereInput[]
    OR?: betsScalarWhereInput[]
    NOT?: betsScalarWhereInput | betsScalarWhereInput[]
    id?: IntFilter<'bets'> | number
    description?: StringFilter<'bets'> | string
    createdAt?: DateTimeFilter<'bets'> | Date | string
    deadlineAt?: DateTimeFilter<'bets'> | Date | string
    status?: IntNullableFilter<'bets'> | number | null
    participants?: IntFilter<'bets'> | number
    amount?: IntFilter<'bets'> | number
  }

  export interface tradesCreateWithoutTradeOffersInput {
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
    users_trades_customerIdTousers?: usersCreateNestedOneWithoutTrades_trades_customerIdTousersInput
    users_trades_supplierIdTousers?: usersCreateNestedOneWithoutTrades_trades_supplierIdTousersInput
  }

  export interface tradesUncheckedCreateWithoutTradeOffersInput {
    id?: number
    supplierId?: number | null
    customerId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
  }

  export interface tradesCreateOrConnectWithoutTradeOffersInput {
    where: tradesWhereUniqueInput
    create: XOR<tradesCreateWithoutTradeOffersInput, tradesUncheckedCreateWithoutTradeOffersInput>
  }

  export interface usersCreateWithoutTradeOffersInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutTradeOffersInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersCreateOrConnectWithoutTradeOffersInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTradeOffersInput, usersUncheckedCreateWithoutTradeOffersInput>
  }

  export interface tradesUpsertWithoutTradeOffersInput {
    update: XOR<tradesUpdateWithoutTradeOffersInput, tradesUncheckedUpdateWithoutTradeOffersInput>
    create: XOR<tradesCreateWithoutTradeOffersInput, tradesUncheckedCreateWithoutTradeOffersInput>
    where?: tradesWhereInput
  }

  export interface tradesUpdateToOneWithWhereWithoutTradeOffersInput {
    where?: tradesWhereInput
    data: XOR<tradesUpdateWithoutTradeOffersInput, tradesUncheckedUpdateWithoutTradeOffersInput>
  }

  export interface tradesUpdateWithoutTradeOffersInput {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users_trades_customerIdTousers?: usersUpdateOneWithoutTrades_trades_customerIdTousersNestedInput
    users_trades_supplierIdTousers?: usersUpdateOneWithoutTrades_trades_supplierIdTousersNestedInput
  }

  export interface tradesUncheckedUpdateWithoutTradeOffersInput {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export interface usersUpsertWithoutTradeOffersInput {
    update: XOR<usersUpdateWithoutTradeOffersInput, usersUncheckedUpdateWithoutTradeOffersInput>
    create: XOR<usersCreateWithoutTradeOffersInput, usersUncheckedCreateWithoutTradeOffersInput>
    where?: usersWhereInput
  }

  export interface usersUpdateToOneWithWhereWithoutTradeOffersInput {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTradeOffersInput, usersUncheckedUpdateWithoutTradeOffersInput>
  }

  export interface usersUpdateWithoutTradeOffersInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutTradeOffersInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface tradeOffersCreateWithoutTradesInput {
    id?: bigint | number
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
    users?: usersCreateNestedOneWithoutTradeOffersInput
  }

  export interface tradeOffersUncheckedCreateWithoutTradesInput {
    id?: bigint | number
    userId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradeOffersCreateOrConnectWithoutTradesInput {
    where: tradeOffersWhereUniqueInput
    create: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput>
  }

  export interface tradeOffersCreateManyTradesInputEnvelope {
    data: tradeOffersCreateManyTradesInput | tradeOffersCreateManyTradesInput[]
    skipDuplicates?: boolean
  }

  export interface usersCreateWithoutTrades_trades_customerIdTousersInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutTrades_trades_customerIdTousersInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersCreateOrConnectWithoutTrades_trades_customerIdTousersInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTrades_trades_customerIdTousersInput, usersUncheckedCreateWithoutTrades_trades_customerIdTousersInput>
  }

  export interface usersCreateWithoutTrades_trades_supplierIdTousersInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutTrades_trades_supplierIdTousersInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersCreateOrConnectWithoutTrades_trades_supplierIdTousersInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedCreateWithoutTrades_trades_supplierIdTousersInput>
  }

  export interface tradeOffersUpsertWithWhereUniqueWithoutTradesInput {
    where: tradeOffersWhereUniqueInput
    update: XOR<tradeOffersUpdateWithoutTradesInput, tradeOffersUncheckedUpdateWithoutTradesInput>
    create: XOR<tradeOffersCreateWithoutTradesInput, tradeOffersUncheckedCreateWithoutTradesInput>
  }

  export interface tradeOffersUpdateWithWhereUniqueWithoutTradesInput {
    where: tradeOffersWhereUniqueInput
    data: XOR<tradeOffersUpdateWithoutTradesInput, tradeOffersUncheckedUpdateWithoutTradesInput>
  }

  export interface tradeOffersUpdateManyWithWhereWithoutTradesInput {
    where: tradeOffersScalarWhereInput
    data: XOR<tradeOffersUpdateManyMutationInput, tradeOffersUncheckedUpdateManyWithoutTradesInput>
  }

  export interface usersUpsertWithoutTrades_trades_customerIdTousersInput {
    update: XOR<usersUpdateWithoutTrades_trades_customerIdTousersInput, usersUncheckedUpdateWithoutTrades_trades_customerIdTousersInput>
    create: XOR<usersCreateWithoutTrades_trades_customerIdTousersInput, usersUncheckedCreateWithoutTrades_trades_customerIdTousersInput>
    where?: usersWhereInput
  }

  export interface usersUpdateToOneWithWhereWithoutTrades_trades_customerIdTousersInput {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTrades_trades_customerIdTousersInput, usersUncheckedUpdateWithoutTrades_trades_customerIdTousersInput>
  }

  export interface usersUpdateWithoutTrades_trades_customerIdTousersInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutTrades_trades_customerIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface usersUpsertWithoutTrades_trades_supplierIdTousersInput {
    update: XOR<usersUpdateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedUpdateWithoutTrades_trades_supplierIdTousersInput>
    create: XOR<usersCreateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedCreateWithoutTrades_trades_supplierIdTousersInput>
    where?: usersWhereInput
  }

  export interface usersUpdateToOneWithWhereWithoutTrades_trades_supplierIdTousersInput {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTrades_trades_supplierIdTousersInput, usersUncheckedUpdateWithoutTrades_trades_supplierIdTousersInput>
  }

  export interface usersUpdateWithoutTrades_trades_supplierIdTousersInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutTrades_trades_supplierIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface usersCreateWithoutUserWalletsInput {
    firstName: string
    lastName: string
    username: string
    password: string
    betEntries?: betEntriesCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutUserWalletsInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    betEntries?: betEntriesUncheckedCreateNestedManyWithoutUsersInput
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
  }

  export interface usersCreateOrConnectWithoutUserWalletsInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUserWalletsInput, usersUncheckedCreateWithoutUserWalletsInput>
  }

  export interface usersUpsertWithoutUserWalletsInput {
    update: XOR<usersUpdateWithoutUserWalletsInput, usersUncheckedUpdateWithoutUserWalletsInput>
    create: XOR<usersCreateWithoutUserWalletsInput, usersUncheckedCreateWithoutUserWalletsInput>
    where?: usersWhereInput
  }

  export interface usersUpdateToOneWithWhereWithoutUserWalletsInput {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUserWalletsInput, usersUncheckedUpdateWithoutUserWalletsInput>
  }

  export interface usersUpdateWithoutUserWalletsInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutUserWalletsInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
  }

  export interface betOptionsCreateWithoutBetEntriesInput {
    description: string
    votes: number
    amount: number
    bets?: betsCreateNestedOneWithoutBetOptionsInput
  }

  export interface betOptionsUncheckedCreateWithoutBetEntriesInput {
    id?: number
    betId?: number | null
    description: string
    votes: number
    amount: number
  }

  export interface betOptionsCreateOrConnectWithoutBetEntriesInput {
    where: betOptionsWhereUniqueInput
    create: XOR<betOptionsCreateWithoutBetEntriesInput, betOptionsUncheckedCreateWithoutBetEntriesInput>
  }

  export interface usersCreateWithoutBetEntriesInput {
    firstName: string
    lastName: string
    username: string
    password: string
    tradeOffers?: tradeOffersCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsCreateNestedOneWithoutUsersInput
    roles?: rolesCreateNestedOneWithoutUsersInput
  }

  export interface usersUncheckedCreateWithoutBetEntriesInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
    role?: number | null
    tradeOffers?: tradeOffersUncheckedCreateNestedManyWithoutUsersInput
    trades_trades_customerIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_customerIdTousersInput
    trades_trades_supplierIdTousers?: tradesUncheckedCreateNestedManyWithoutUsers_trades_supplierIdTousersInput
    userWallets?: userWalletsUncheckedCreateNestedOneWithoutUsersInput
  }

  export interface usersCreateOrConnectWithoutBetEntriesInput {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBetEntriesInput, usersUncheckedCreateWithoutBetEntriesInput>
  }

  export interface betOptionsUpsertWithoutBetEntriesInput {
    update: XOR<betOptionsUpdateWithoutBetEntriesInput, betOptionsUncheckedUpdateWithoutBetEntriesInput>
    create: XOR<betOptionsCreateWithoutBetEntriesInput, betOptionsUncheckedCreateWithoutBetEntriesInput>
    where?: betOptionsWhereInput
  }

  export interface betOptionsUpdateToOneWithWhereWithoutBetEntriesInput {
    where?: betOptionsWhereInput
    data: XOR<betOptionsUpdateWithoutBetEntriesInput, betOptionsUncheckedUpdateWithoutBetEntriesInput>
  }

  export interface betOptionsUpdateWithoutBetEntriesInput {
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    bets?: betsUpdateOneWithoutBetOptionsNestedInput
  }

  export interface betOptionsUncheckedUpdateWithoutBetEntriesInput {
    id?: IntFieldUpdateOperationsInput | number
    betId?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface usersUpsertWithoutBetEntriesInput {
    update: XOR<usersUpdateWithoutBetEntriesInput, usersUncheckedUpdateWithoutBetEntriesInput>
    create: XOR<usersCreateWithoutBetEntriesInput, usersUncheckedCreateWithoutBetEntriesInput>
    where?: usersWhereInput
  }

  export interface usersUpdateToOneWithWhereWithoutBetEntriesInput {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBetEntriesInput, usersUncheckedUpdateWithoutBetEntriesInput>
  }

  export interface usersUpdateWithoutBetEntriesInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
    roles?: rolesUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutBetEntriesInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableIntFieldUpdateOperationsInput | number | null
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface betEntriesCreateWithoutBetOptionsInput {
    amount: number
    users?: usersCreateNestedOneWithoutBetEntriesInput
  }

  export interface betEntriesUncheckedCreateWithoutBetOptionsInput {
    id?: number
    userId?: number | null
    amount: number
  }

  export interface betEntriesCreateOrConnectWithoutBetOptionsInput {
    where: betEntriesWhereUniqueInput
    create: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput>
  }

  export interface betEntriesCreateManyBetOptionsInputEnvelope {
    data: betEntriesCreateManyBetOptionsInput | betEntriesCreateManyBetOptionsInput[]
    skipDuplicates?: boolean
  }

  export interface betsCreateWithoutBetOptionsInput {
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    participants?: number
    amount?: number
    status_bets_statusTostatus?: statusCreateNestedOneWithoutBets_bets_statusTostatusInput
  }

  export interface betsUncheckedCreateWithoutBetOptionsInput {
    id?: number
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    status?: number | null
    participants?: number
    amount?: number
  }

  export interface betsCreateOrConnectWithoutBetOptionsInput {
    where: betsWhereUniqueInput
    create: XOR<betsCreateWithoutBetOptionsInput, betsUncheckedCreateWithoutBetOptionsInput>
  }

  export interface betEntriesUpsertWithWhereUniqueWithoutBetOptionsInput {
    where: betEntriesWhereUniqueInput
    update: XOR<betEntriesUpdateWithoutBetOptionsInput, betEntriesUncheckedUpdateWithoutBetOptionsInput>
    create: XOR<betEntriesCreateWithoutBetOptionsInput, betEntriesUncheckedCreateWithoutBetOptionsInput>
  }

  export interface betEntriesUpdateWithWhereUniqueWithoutBetOptionsInput {
    where: betEntriesWhereUniqueInput
    data: XOR<betEntriesUpdateWithoutBetOptionsInput, betEntriesUncheckedUpdateWithoutBetOptionsInput>
  }

  export interface betEntriesUpdateManyWithWhereWithoutBetOptionsInput {
    where: betEntriesScalarWhereInput
    data: XOR<betEntriesUpdateManyMutationInput, betEntriesUncheckedUpdateManyWithoutBetOptionsInput>
  }

  export interface betsUpsertWithoutBetOptionsInput {
    update: XOR<betsUpdateWithoutBetOptionsInput, betsUncheckedUpdateWithoutBetOptionsInput>
    create: XOR<betsCreateWithoutBetOptionsInput, betsUncheckedCreateWithoutBetOptionsInput>
    where?: betsWhereInput
  }

  export interface betsUpdateToOneWithWhereWithoutBetOptionsInput {
    where?: betsWhereInput
    data: XOR<betsUpdateWithoutBetOptionsInput, betsUncheckedUpdateWithoutBetOptionsInput>
  }

  export interface betsUpdateWithoutBetOptionsInput {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status_bets_statusTostatus?: statusUpdateOneWithoutBets_bets_statusTostatusNestedInput
  }

  export interface betsUncheckedUpdateWithoutBetOptionsInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: NullableIntFieldUpdateOperationsInput | number | null
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesCreateManyUsersInput {
    id?: number
    optionId?: number | null
    amount: number
  }

  export interface tradeOffersCreateManyUsersInput {
    id?: bigint | number
    tradeId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradesCreateManyUsers_trades_customerIdTousersInput {
    id?: number
    supplierId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
  }

  export interface tradesCreateManyUsers_trades_supplierIdTousersInput {
    id?: number
    customerId?: number | null
    service?: string | null
    createdAt?: Date | string
    deadlineAt?: Date | string | null
    tradedAt?: Date | string | null
  }

  export interface betEntriesUpdateWithoutUsersInput {
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUpdateOneWithoutBetEntriesNestedInput
  }

  export interface betEntriesUncheckedUpdateWithoutUsersInput {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesUncheckedUpdateManyWithoutUsersInput {
    id?: IntFieldUpdateOperationsInput | number
    optionId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface tradeOffersUpdateWithoutUsersInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trades?: tradesUpdateOneWithoutTradeOffersNestedInput
  }

  export interface tradeOffersUncheckedUpdateWithoutUsersInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradeOffersUncheckedUpdateManyWithoutUsersInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tradeId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradesUpdateWithoutUsers_trades_customerIdTousersInput {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUpdateManyWithoutTradesNestedInput
    users_trades_supplierIdTousers?: usersUpdateOneWithoutTrades_trades_supplierIdTousersNestedInput
  }

  export interface tradesUncheckedUpdateWithoutUsers_trades_customerIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutTradesNestedInput
  }

  export interface tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    supplierId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export interface tradesUpdateWithoutUsers_trades_supplierIdTousersInput {
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUpdateManyWithoutTradesNestedInput
    users_trades_customerIdTousers?: usersUpdateOneWithoutTrades_trades_customerIdTousersNestedInput
  }

  export interface tradesUncheckedUpdateWithoutUsers_trades_supplierIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutTradesNestedInput
  }

  export interface tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersInput {
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tradedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export interface betOptionsCreateManyBetsInput {
    id?: number
    description: string
    votes: number
    amount: number
  }

  export interface betOptionsUpdateWithoutBetsInput {
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betEntries?: betEntriesUpdateManyWithoutBetOptionsNestedInput
  }

  export interface betOptionsUncheckedUpdateWithoutBetsInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betEntries?: betEntriesUncheckedUpdateManyWithoutBetOptionsNestedInput
  }

  export interface betOptionsUncheckedUpdateManyWithoutBetsInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    votes?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface usersCreateManyRolesInput {
    id?: number
    firstName: string
    lastName: string
    username: string
    password: string
  }

  export interface usersUpdateWithoutRolesInput {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateWithoutRolesInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    betEntries?: betEntriesUncheckedUpdateManyWithoutUsersNestedInput
    tradeOffers?: tradeOffersUncheckedUpdateManyWithoutUsersNestedInput
    trades_trades_customerIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_customerIdTousersNestedInput
    trades_trades_supplierIdTousers?: tradesUncheckedUpdateManyWithoutUsers_trades_supplierIdTousersNestedInput
    userWallets?: userWalletsUncheckedUpdateOneWithoutUsersNestedInput
  }

  export interface usersUncheckedUpdateManyWithoutRolesInput {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export interface betsCreateManyStatus_bets_statusTostatusInput {
    id?: number
    description: string
    createdAt?: Date | string
    deadlineAt: Date | string
    participants?: number
    amount?: number
  }

  export interface betsUpdateWithoutStatus_bets_statusTostatusInput {
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUpdateManyWithoutBetsNestedInput
  }

  export interface betsUncheckedUpdateWithoutStatus_bets_statusTostatusInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    betOptions?: betOptionsUncheckedUpdateManyWithoutBetsNestedInput
  }

  export interface betsUncheckedUpdateManyWithoutStatus_bets_statusTostatusInput {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadlineAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface tradeOffersCreateManyTradesInput {
    id?: bigint | number
    userId?: number | null
    value: number
    isAccepted?: boolean | null
    createdAt?: Date | string
  }

  export interface tradeOffersUpdateWithoutTradesInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneWithoutTradeOffersNestedInput
  }

  export interface tradeOffersUncheckedUpdateWithoutTradesInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface tradeOffersUncheckedUpdateManyWithoutTradesInput {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    value?: IntFieldUpdateOperationsInput | number
    isAccepted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export interface betEntriesCreateManyBetOptionsInput {
    id?: number
    userId?: number | null
    amount: number
  }

  export interface betEntriesUpdateWithoutBetOptionsInput {
    amount?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneWithoutBetEntriesNestedInput
  }

  export interface betEntriesUncheckedUpdateWithoutBetOptionsInput {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  export interface betEntriesUncheckedUpdateManyWithoutBetOptionsInput {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: IntFieldUpdateOperationsInput | number
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export interface BatchPayload {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
