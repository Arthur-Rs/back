import { Model } from '@nozbe/watermelondb'
import { field, date, relation } from '@nozbe/watermelondb/decorators'
import GoalModel from './goals.model'

class TransactionGoalModel extends Model {
  static table = 'transactions_goal'

  static associations = {
    goal: { type: 'belongs_to', key: 'goal_id' },
  }

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

  @relation('goals', 'goal_id')
  goal: GoalModel
}

export default TransactionGoalModel
