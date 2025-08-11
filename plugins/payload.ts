import { Bet } from '~/models/Bet'
import { BetEntry } from '~/models/BetEntry'
import { BetOption } from '~/models/BetOption'
import { User } from '~/models/User'
import { UserWallet } from '~/models/UserWallet'

// eslint-disable style/max-statements-per-line
export default definePayloadPlugin(() => {
  definePayloadReducer('Bet', (data) => { return data instanceof Bet && data.toJson() })
  definePayloadReviver('Bet', (data) => { return Bet.parseFromJsonData(data) })
  definePayloadReducer('BetOption', (data) => { return data instanceof BetOption && data.toJson() })
  definePayloadReviver('BetOption', (data) => { return BetOption.parseFromJsonData(data) })
  definePayloadReducer('BetEntry', (data) => { return data instanceof BetEntry && data.toJson() })
  definePayloadReviver('BetEntry', (data) => { return BetEntry.parseFromJsonData(data) })
  definePayloadReducer('User', (data) => { return data instanceof User && data.toJson() })
  definePayloadReviver('User', (data) => { return User.parseFromJsonData(data) })
  definePayloadReducer('UserWallet', (data) => { return data instanceof UserWallet && data.toJson() })
  definePayloadReviver('UserWallet', (data) => { return UserWallet.parseFromJsonData(data) })
})
