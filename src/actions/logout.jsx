import { redirect } from "react-router-dom"
import { deleteItem } from "../helpers"
import {toast} from "react-toastify"

export  const logoutAction=async () =>{
  deleteItem('userName')
  toast.success('You have deleted your account!')
  return redirect('/')

}