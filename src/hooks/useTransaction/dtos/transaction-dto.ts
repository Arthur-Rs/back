export interface createTransaction {
  FinanceID: string
  title: string
  module: 'goal' | 'finance'
  type: 'income' | 'outcome'
  value: number
}
