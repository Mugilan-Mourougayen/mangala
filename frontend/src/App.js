
import lockabi from "./artifacts/contracts/Lock.sol/Lock.json"
import { ethers,BigNumber } from "ethers";
import {useEffect,useState} from "react";

import MaterialTable from 'material-table'
import { Button, Input, TextField } from "@mui/material";
import Swal from "sweetalert2";

function App() {
 
  const [accounts, setAccounts] = useState([]);
  const [msg, setMsg] = useState();
  const [name, setName] = useState();
  const [data,setData]=useState()
  







  const mainaddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  async function connectAccount(){
    if(window.ethereum){
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'}
      );
      setAccounts(accounts)

    }
  } 
  
   
  
useEffect(() => {
 connectAccount()
}, [])



async function addtweet() {
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      mainaddress,
      lockabi.abi,
      signer
    );
    try{
      const responce = await contract.addTwitter(msg,name)
      console.log("response",responce)
      Swal.fire('Tweet has been added plz update the chat')
  
    }
catch(err){
  console.log("err",err)

}

  }
}



async function edittweet(oldmsg,newmsg) {
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      mainaddress,
      lockabi.abi,
      signer
    );
    try{
      const responce = await contract.replace(oldmsg,newmsg)
      console.log("response",responce)
      Swal.fire('Tweet has been updated plz update the chat')
  
    }
catch(err){
  console.log("err",err)

}

  }
}







async function readtweet() {
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      mainaddress,
      lockabi.abi,
      signer
    );
    try{
      const responce = await contract.getResult()
      console.table("list of tweet",responce)

      var objs = responce.map(x => ({ 
        msg: x[0], 
        name: x[1],
        address:x[2]

      }));
      setData(objs)
      
     
    }
catch(err){
  console.log("err",err)

}

  }
  
}

const editfunction=async(msg)=>{
  const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Message',
    inputPlaceholder: 'Type your message here...',
    inputValue:msg,
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    if(text === msg){
      Swal.fire('No update has done')
    }
    else{
      edittweet(msg,text)

    }
  }
}



async function deletefunction(id) {
  if(window.ethereum){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      mainaddress,
      lockabi.abi,
      signer
    );
    try{
      const responce = await contract.remove(id)
      console.log("response",responce)
      Swal.fire('Tweet has been deleted plz update the chat')
    

   
     
    }
catch(err){
  console.log("err",err)

}

  }
  
}



return (
<div>
 <span style={{margin:"30px"}}>Message:</span> 
 <TextField  id="outlined-basic"  variant="outlined" size="small" onChange={(e)=>{setMsg(e.target.value)}} />


 <span style={{margin:"30px"}}>Name:</span> 
 <TextField id="outlined-basic"  variant="outlined" size="small" onChange={(e)=>{setName(e.target.value)}} />



  <Button style={{marginLeft:"100px"}} variant="contained" onClick={addtweet} size="small">add</Button>




  <Button onClick={readtweet} variant="contained" color="warning" size="small" style={{ float: "right"}}>Update</Button>
{data&&


  <table >
      <thead>
  <tr>
    <th>Message</th>
    <th>Name</th>
    <th>address</th>
  
  </tr>

  </thead>
  <tbody>
        { data.map((dat,id) => (
         
         <tr key={dat.id}>
            {/*  <tr > */}
              <td>
            <input
              name="x1"
              style={{width:"100px"}}
              value={dat.msg}
            />
            </td>
            <td>
              
            <input
              name="y1"
              style={{width:"100px"}}
              value={dat.name}
            />
            </td>
            
            <td>
              
              <input
                name="y1"
                style={{width:"100px"}}
                value={dat.address}
              />
              </td>
           <td>              
            <button  onClick={() => editfunction(dat.msg)}>
              edit
            </button>
            </td> 
            <td>
              <button  onClick={() => deletefunction(id)}>
                delete
              </button>
              </td> 
           
            </tr>
        
        )) }
  </tbody>

</table>
}

</div>
)
}

export default App;