import { redirect } from 'react-router-dom'
import { deleteItem } from '../helpers'
import { toast } from 'react-toastify'

export const logoutAction = async () => {
  deleteItem('userName')
  deleteItem('budgets')
  deleteItem('expenses')
  toast.success('You have deleted your account!')
  return redirect('/')
}
