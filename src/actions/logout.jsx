import { redirect } from "react-router-dom"
import { deleteItem } from "../helpers"

export  const logoutAction=async () =>{
  deleteItem('userName')
  return redirect('/')

}