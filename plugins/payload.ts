import { User } from '~/models/User'
import { UserWallet } from '~/models/UserWallet'

// eslint-disable style/max-statements-per-line
export default definePayloadPlugin(() => {
    definePayloadReducer('User', (data) => { return data instanceof User && data.toJson() })
    definePayloadReviver('User', (data) => { return User.parseFromJsonData(data) })
    definePayloadReducer('UserWallet', (data) => { return data instanceof UserWallet && data.toJson() })
    definePayloadReviver('UserWallet', (data) => { return UserWallet.parseFromJsonData(data) })
})
