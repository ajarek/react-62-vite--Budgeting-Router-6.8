//local Storage support
export const fetchData=(key)=>{
  return JSON.parse(localStorage.getItem(key))
}

export const waait =()=> new Promise(res=>setTimeout(res,Math.random()*800))

const generateRandomColor=()=>{
  const existingBudgetsLength=fetchData('budgets')?.length??0
  return `${existingBudgetsLength*34}% 65% 50%`
}

export const createBudget=({name, amount})=>{
  const newItem={
    id:crypto.randomUUID(),
    name:name,
    createAt: Date.now(),
    amount:+amount,
    color:generateRandomColor()
  }
  const existingBudgets =fetchData('budgets') ?? []
  return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}
export const createExpense=({name, amount, budgetId})=>{
  const newItem={
    id:crypto.randomUUID(),
    name:name,
    createAt: Date.now(),
    amount:+amount,
    budgetId:budgetId
  }
  const existingExpenses =fetchData('expenses') ?? []
  return localStorage.setItem('expenses', JSON.stringify([...existingExpenses, newItem]))
}
export const calculateSpentByBudget=(budgetId)=>{
  const expenses = fetchData('expenses')??[]
  const budgetSpent = expenses.reduce((acc,expense)=>{
    if(expense.budgetId!==budgetId)return acc
    return acc += expense.amount

  },0)
  return budgetSpent  
}

export const formatCurrency=(amt)=>{
  return amt.toLocaleString(undefined,{
    style: 'currency',
    currency:'USD'
  })
}

export const formatPercentage=(amt)=>{
  return amt.toLocaleString(undefined,{
    style: 'percent',
    miniumFractionDigits:0
  })
}
export const formatDataToLocaleString=(epoch)=>new Date(epoch).toLocaleString()


export const deleteItem = (key)=>{
  return localStorage.removeItem(key)
}