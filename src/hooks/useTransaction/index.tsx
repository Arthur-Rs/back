import React, {
  createContext,
  useContext,
  useCallback,
} from 'react';

import uuid from 'react-native-uuid';

import AsyncStorange from '@react-native-community/async-storage';

import {
  useStorage,
} from '../useStorage';

import {
  createTransaction,
} from './dtos/transaction-dto';

import Transaction from './entities/transaction-entity';

interface IContext{
  saveTransaction(data: createTransaction): Transaction
  getAllTransactions(FinanceID: string): Promise<Transaction>
}

const Context = createContext<IContext>({} as IContext);

const TransactionProvider: React.FC = ({ children }) => {
  const { updateStorage } = useStorage();

  const saveTransactino = useCallback(async ({
    FinanceID,
    title,
    type,
    value,
  }: createTransaction): Promise<Transaction> => {
    const transaction: Transaction = {
      id: uuid.v4(),
      title,
      type,
      value,
      createDate: new Date(),
    };

    const [storageTransaction, goals, finances] = await AsyncStorange
      .multiGet([
        `@jotting:transactions?id=${FinanceID}`,
        '@jotting:goals',
        '@jotting:transaction',
      ]);

    if (!storageTransaction) {
      const newStorageTransaction = JSON.stringify([transaction]);
      await AsyncStorange
        .setItem(`@jotting:transactions?id=${FinanceID}`, newStorageTransaction);
      return transaction;
    }

    const findInGoals = goals.find((goal) => goal.id === FinanceID);

    if (findInGoals) {
      cost inde
      AsyncStorange
        .setItem('@jotting:goals', newStorageTransaction);
    }

    const arrayTransactions:Transaction[] = JSON
      .parse(storageTransaction as unknown as string);

    arrayTransactions.push(transaction);

    const strTransaction = JSON.stringify(arrayTransactions);

    await AsyncStorange
      .setItem(`@jotting:transactions?id=${FinanceID}`, strTransaction);

    updateStorage();
    return transaction;
  }, []);

  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
};
