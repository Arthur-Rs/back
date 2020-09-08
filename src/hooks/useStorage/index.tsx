import React, { createContext, useContext, useState, useEffect } from 'react'

import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { Models, schema } from '../../storange'

interface ISContext {
  db: Database
}

const StorageContext = createContext<ISContext>({} as ISContext)

const useStorage = () => {
  const context = useContext(StorageContext)

  if (!context) {
    throw new Error('')
  }

  return context
}

let database: Database

const StorageProvider: React.FC = ({ children }) => {
  const [db, setDb] = useState<Database | undefined>()

  useEffect(() => {
    const adapter = new SQLiteAdapter({
      schema,
      dbName: 'dev',
    })

    database = new Database({
      adapter,
      modelClasses: Models,
      actionsEnabled: true,
    })

    setDb(database)
  }, [])

  if (!db) {
    return <></>
  }
  return (
    <StorageContext.Provider value={{ db }}>{children}</StorageContext.Provider>
  )
}

export { StorageProvider, useStorage, database }
