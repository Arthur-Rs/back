import React, { createContext, useContext, useCallback } from 'react'

import uuid from 'react-native-uuid'

import AsyncStorange from '@react-native-community/async-storage'

import { useStorage } from '../useStorage'

import { createTransaction } from './dtos/transaction-dto'

import Transaction from './entities/transaction-entity'

interface IContext {
  saveTransaction(data: createTransaction): Transaction
  getAllTransactions(FinanceID: string): Promise<Transaction>
}

const Context = createContext<IContext>({} as IContext)

const TransactionProvider: React.FC = ({ children }) => {
  const { updateStorage } = useStorage()

  const saveTransaction = useCallback(
    async ({
      FinanceID,
      title,
      module,
      type,
      value,
    }: createTransaction): Promise<Transaction> => {
      const transaction: Transaction = {
        id: uuid.v4(),
        title,
        type,
        value,
        createDate: new Date(),
      }

      const [storageTransaction, storageModule] = await AsyncStorange.multiGet([
        `@jotting:transactions?id=${FinanceID}`,
        `@jotting:${module}`,
      ])

      if (!storageTransaction) {
        const newStorageTransaction = JSON.stringify([transaction])
        await AsyncStorange.setItem(
          `@jotting:transactions?id=${FinanceID}`,
          newStorageTransaction,
        )

        const alterModule = storageModule.find((_module) => {
          _module.id = FinanceID
        })

        alterModule.amount = alterModule.amount

        return transaction
      }

      const arrayTransactions: Transaction[] = JSON.parse(
        (storageTransaction as unknown) as string,
      )

      arrayTransactions.push(transaction)

      const strTransaction = JSON.stringify(arrayTransactions)

      await AsyncStorange.setItem(
        `@jotting:transactions?id=${FinanceID}`,
        strTransaction,
      )

      updateStorage()
      return transaction
    },
    [updateStorage],
  )

  return (
    <Context.Provider value={{ getAllTransactions, saveTransaction }}>
      {children}
    </Context.Provider>
  )
}
