import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AddBudgetForm'
import Intro from '../components/Intro'

export const dashboardLoader = () => {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  return { userName, budgets }
}

export const dashboardAction = async({request}) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try{
 localStorage.setItem('userName',JSON.stringify(formData.userName))
 return toast.success(`Welcome, ${formData.userName}`)

}catch(e){
 throw new Error('There was a problem creating your account.')
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
