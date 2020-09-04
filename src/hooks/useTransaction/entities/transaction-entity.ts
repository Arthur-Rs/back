/* eslint-disable semi */
export default interface TransactionEntity{
  id: string
  title:string
  type: 'income' | 'outcome'
  value: number
  createDate: Date
};
