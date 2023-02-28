import { useLoaderData } from 'react-router-dom'
import { createBudget, fetchData, waait } from '../helpers'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AddBudgetForm'
import Intro from '../components/Intro'

export const dashboardLoader = () => {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  return { userName, budgets }
}

export const dashboardAction = async({request}) => {
  await waait()
  const data = await request.formData()
  const {_action, ...values} = Object.fromEntries(data)
  
  if(_action === 'newUser') {
  try{
 localStorage.setItem('userName',JSON.stringify(values.userName))
 return toast.success(`Welcome, ${values.userName}`)

}catch(e){
 throw new Error('There was a problem creating your account.')
}
}
if(_action === 'createBudget') {
  try{
     createBudget({
      name: values.newBudget,
      amount:values.newBudgetAmount
     })
    return toast.success('Budget created!')
  }
  catch(e){
    throw new Error('There was a problem creating your budget.')

  }
}
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()
  return (
    <>
      {userName?(<div className='dashboard'>
        <h1>Welcome back, <span>{userName}</span></h1>
        <div className='grid-sm'>
          {/* {budgets?('lol'):('lol1')} */}
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm/>
            </div>

          </div>
        </div>
        </div>):<Intro/>}     
    </>
  )
}

export default Dashboard
