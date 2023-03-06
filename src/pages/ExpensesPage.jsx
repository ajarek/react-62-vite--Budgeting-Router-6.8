import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Table from '../components/Table'
import { fetchData } from '../helpers'

export const expensesLoader = () => { 
  const expenses = fetchData('expenses')
  return { expenses }
}

const ExpensesPage = () => {
  const{ expenses}=useLoaderData()
  return (
    <div className='grid-sm'>
      <h1>All Expenses</h1>
      {
        expenses && expenses.length>0?(
           <div className="grid-xs">
            <h2>
              Recent Expenses <small>({expenses.length})</small>
            </h2>
            <Table expenses={expenses}/>
           </div>
        ):
         <p>No Expenses to show</p>
      }
    </div>
  )
}

export default ExpensesPage