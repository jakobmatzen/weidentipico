import { User } from '~/models/User'

// eslint-disable style/max-statements-per-line
export default definePayloadPlugin(() => {
    definePayloadReducer('User', (data) => { return data instanceof User && data.toJson() })
    definePayloadReviver('User', (data) => { return User.parseFromJsonData(data) })
})
