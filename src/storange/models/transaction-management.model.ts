import { Model } from '@nozbe/watermelondb'
import { field, date, relation } from '@nozbe/watermelondb/decorators'
import ManagementModel from './management.model'
import { Associations } from '@nozbe/watermelondb/Model'

class TransactionGoalModel extends Model {
  static table = 'transactions_management'

  static associations = {
    management: { type: 'belongs_to', key: 'management_id' },
  } as Associations

  @field('title')
  title: string

  @field('type')
  type: 'income' | 'outcome'

  @field('amount')
  amount: number

  @date('created_at')
  created_at: Date

  @date('date')
  updated_at: Date

  @relation('management', 'management_id')
  management: ManagementModel
}

export default TransactionGoalModel
