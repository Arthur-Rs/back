import { Model } from '@nozbe/watermelondb'
import { field, date, children } from '@nozbe/watermelondb/decorators'
import TransactionManagementModel from './transaction-management.model'

class ManagementModel extends Model {
  static table = 'managements'

  static associations = {
    transactions: { type: 'has_many', foreignKey: 'management_id' },
  }

  @field('title')
  title: string

  @field('description')
  description: string

  @field('total')
  total: number

  @date('created_at')
  created_at: Date

  @date('date')
  updated_at: Date

  @children('transactions')
  transactions: TransactionManagementModel
}

export default ManagementModel
