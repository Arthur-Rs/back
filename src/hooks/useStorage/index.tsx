import React, { useCallback, createContext, FC, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import uuid from 'react-native-uuid';

import GoalEntity from './entities/goal-entity';
import FinanceEntity from './entities/finance-entity';

import { CreateGoalDTO } from './dtos/goal-dto';
import { CreateFinanceDTO } from './dtos/finance-dto';

interface Context{
  saveGoal(data: CreateGoalDTO): Promise<void>
  getAllGoal(): Promise<GoalEntity[]>
  getOneGoal(id: string): Promise<GoalEntity | undefined>

  saveFinance(data: CreateFinanceDTO): Promise<void>
  getAllFinancies(): Promise<FinanceEntity[]>
  getOneFinance(id: string): Promise<FinanceEntity | undefined>

  goalCacheData: GoalEntity[]
  financiesCache: FinanceEntity[]

  updateStorage():Promise<void>
}

const ContextStorage = createContext<Context>({} as Context);

const StorageProvider:FC = ({ children }) => {
  const [goalCacheData, setGoalCacheData] = useState<GoalEntity[]>([]);
  const [financiesCache, setFinanciesCache] = useState<FinanceEntity[]>([]);

  const saveGoal = useCallback(async (data: CreateGoalDTO): Promise<void> => {
    const { title, description, goal, initialValue, date } = data;
    const Goal: GoalEntity = {
      id: uuid.v4(),
      title,
      description,
      goal,
      amount: initialValue || 0,
      date,
    };

    setGoalCacheData(goalCacheData.concat(Goal));

    const strTotalGoals = await AsyncStorage.getItem('@jotting:goals');

    if (!strTotalGoals) {
      const strGoal = JSON.stringify([Goal]);
      await AsyncStorage.setItem('@jotting:goals', strGoal);
      return;
    }

    const totalGoals:Array<GoalEntity> = JSON.parse(strTotalGoals);

    totalGoals.push(Goal);
    await AsyncStorage.setItem('@jotting:goals', JSON.stringify(totalGoals));
  }, [goalCacheData]);

  const getAllGoal = useCallback(async (): Promise<GoalEntity[]> => {
    const strGoals = await AsyncStorage.getItem('@jotting:goals');
    if (!strGoals) {
      return [];
    }

    const goals = JSON.parse(strGoals);
    return goals;
  }, []);

  const getOneGoal = useCallback(async (id: string): Promise<GoalEntity | undefined> => {
    const strGoals = await AsyncStorage.getItem('@jotting:goals');
    if (!strGoals) {
      return undefined;
    }

    const goals:Array<GoalEntity> = JSON.parse(strGoals);
    const findGoal = goals.find((goal) => (goal.id === id));
    return findGoal;
  }, []);

  const saveFinance = useCallback(async (data: CreateFinanceDTO): Promise<void> => {
    const { title, description, initialValue } = data;
    const Finance: FinanceEntity = {
      id: uuid.v4(),
      title,
      description,
      amount: initialValue || 0,
    };

    setFinanciesCache(financiesCache.concat(Finance));

    const strTotalFinancies = await AsyncStorage.getItem('@jotting:financies');

    if (!strTotalFinancies) {
      const strGoal = JSON.stringify([Finance]);
      await AsyncStorage.setItem('@jotting:financies', strGoal);
      return;
    }

    const totalFinancies:Array<FinanceEntity> = JSON.parse(strTotalFinancies);

    totalFinancies.push(Finance);
    await AsyncStorage.setItem('@jotting:financies', JSON.stringify(totalFinancies));
  }, [financiesCache]);

  const getAllFinancies = useCallback(async (): Promise<FinanceEntity[]> => {
    const strFinancies = await AsyncStorage.getItem('@jotting:financies');
    if (!strFinancies) {
      return [];
    }

    const financies = JSON.parse(strFinancies);
    return financies;
  }, []);

  const getOneFinance = useCallback(async (id: string): Promise<FinanceEntity | undefined> => {
    const strFinancies = await AsyncStorage.getItem('@jotting:financies');
    if (!strFinancies) {
      return undefined;
    }

    const Financies:Array<FinanceEntity> = JSON.parse(strFinancies);
    const findFinance = Financies.find((goal) => (goal.id === id));
    return findFinance;
  }, []);

  const updateStorage = useCallback(async () => {
    const goals = await getAllGoal();
    setGoalCacheData(goals);

    const financies = await getAllFinancies();
    setFinanciesCache(financies);
  }, [getAllFinancies, getAllGoal]);

  useEffect(() => {
    updateStorage();
  }, [updateStorage]);

  return (
    <ContextStorage.Provider value={{
      saveGoal,
      getAllGoal,
      getOneGoal,
      goalCacheData,
      saveFinance,
      getAllFinancies,
      getOneFinance,
      financiesCache,
      updateStorage,
    }}
    >
      {children}
    </ContextStorage.Provider>
  );
};

const useStorage = ():Context => {
  const context = useContext(ContextStorage);

  if (!context) {
    throw Error('');
  }

  return context;
};

export { StorageProvider, useStorage };
export type { GoalEntity, FinanceEntity };
