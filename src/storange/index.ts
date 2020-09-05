import { Schema } from './schemas'

import GoalModel from './models/goal.model'
import ManagementModel from './models/management.model'

import TransactionGoal from './models/transaction-goal.model'
import TransactionManagement from './models/transaction-management.model'

const Models = [
  GoalModel,
  ManagementModel,
  TransactionGoal,
  TransactionManagement,
]

export { Schema, Models }
