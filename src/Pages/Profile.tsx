import  { Component } from 'react'
  type classProps = {
    values: {name: string,pass: string};
  }
export default class Profile extends Component<classProps> {
  render() {
    console.log(this.props.values);
    let name = this.props.values
    return (
      <div className='mt-[100px] w-full'>
       <div className="container">
        <div className='w-full flex flex-col items-center gap-8'>
          <p>User Name : {name.name}</p>
          <p>User password : {name.pass}</p>
       
        </div>
       </div>
      </div>
    )
  }
}
