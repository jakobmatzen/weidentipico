export interface LoginForm {
  username: string
  password: string
}

export interface BetForm {
  title: string
  optionCount: number
  options: string[]
  date: Date
  time: {
    hours: number
    minutes: number
  }
  amount: number
  selectedBetFilterOption: string
  selectedSort: string
}

export interface MarketplaceForm {
  service: string
  date: Date
  time: {
    hours: number
    minutes: number
  }
  price: number
  selectedMarketplaceFilterOption: string
  selectedMarketplaceSort: string
}
