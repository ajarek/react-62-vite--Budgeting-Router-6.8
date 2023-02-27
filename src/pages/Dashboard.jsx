import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import { toast } from 'react-toastify'
import Intro from '../components/Intro'

export const dashboardLoader = () => {
  const userName = fetchData('userName')
  return { userName }
}

export const dashboardAction = async({request}) => {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try{
//  localStorage.setItem('userName',JSON.stringify(formData.userName))
//  return toast.success(`Welcome, ${formData.userName}`)
throw new Error('There was a problem creating your')
}catch(e){
 throw new Error('There was a problem creating your')
}
}

const Dashboard = () => {
  const { userName } = useLoaderData()
  return (
    <>
      {userName?(<p>{userName}</p>):<Intro/>}     
    </>
  )
}

export default Dashboard
