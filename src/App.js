import './App.css';
import {Typography, styled,Box} from '@mui/material';
import { useState } from 'react';
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';

const  Header=styled(Typography)` 
   font-size:35px;
   color:#52a15a;
   text-transform:uppercase;
`
const Component=styled(Box)`
      display:flex;
      background:#CACFD2;
      width:800px;
      padding:10px;
      border-radius:20px;
      margin:auto;
      & > div {
        height:72vh;
        width:50%;
        padding:10px;
        background:#D7DBDD;
        border-radius:20px;
        margin:3.5px;
      }
`

function App() {
  const[transactions,setTransactions]=useState([
    {id:1,text:'Bonus',amount:2700},
    {id:2,text:'Tax',amount:-850},
    {id:3,text:'Dividend',amount:400},
    {id:4,text:'Food',amount:-120},
    
  ])

  return (
    <Box className="AppCss">
     <Header id='head'>Expense Tracker</Header>
     <Component id='padding'>
      <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransactions setTransactions={setTransactions}/>
       </Box>
      <Box>
        <Transactions transactions={transactions} setTransactions={setTransactions}/>
      </Box>
     </Component>
    </Box>
  );
}

export default App;