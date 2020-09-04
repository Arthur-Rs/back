export interface createTransaction{
  FinanceID: string
  title: string
  type: 'income' | 'outcome'
  value: number
}
