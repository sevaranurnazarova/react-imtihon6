import Button from '@mui/material/Button';
import { useState } from 'react';
type propType ={
    setLogin:(a:boolean)=>void,
    setProfilvalues:(b:{name:string,pass:string})=>void,
}
const LoginPage = ({setLogin,setProfilvalues}:propType )=> {
    let [values,setValues]=useState<{name:string,pass:string}>({
        name:'',
        pass:''
    })
    const handleClick = () => {
       if (values.name!=='' && values.pass!=='') {
        setLogin(true)
        setProfilvalues(values)
       }
    }

  return (

    <div className='w-full h-dvh flex justify-center items-center'>
      <form className='flex flex-col gap-5'>
        <input onChange={(e)=>setValues({name:e.target.value,pass:values.pass})} className=' rounded-xl' placeholder="User Name" type="text" />
        <input onChange={(e)=>setValues({name:values.name,pass:e.target.value})} className=' rounded-xl'  type="password" placeholder="Password" />
        <Button onClick={()=>{
            handleClick()
        }} variant="contained">Log In</Button>
      </form>
    </div>
  )
}

export default LoginPage
