import { useEffect, useState} from "react";
import {
  InputState,
  initialState,



} from "./variables";

import {
  TextField,
  Paper,

  InputAdornment,

  Box,
  Typography,


  
} from "@mui/material";
import "../App.css";


export const perc = (original:number):string=>{
  return (original*100).toFixed(2)+"%"
}

export const NationalInsurance = (): JSX.Element => {
  const [inputState, setInputState] = useState<InputState>(initialState);
 
  const [output,setOutput] = useState<number|undefined>()
  

  
  const dir = "row"
  useEffect(()=>{
    const weeklyHours = inputState.weeklyHours;
    const additionalDaysOff = inputState.additionalDaysOff;
    const per = inputState.per;

    const totalWorkingDaysNew = per*5-additionalDaysOff;
    const hoursOfWorkRequired = weeklyHours*per/totalWorkingDaysNew;
    const differential = hoursOfWorkRequired-weeklyHours/5;
    setOutput(differential);




  },[inputState])
  
  return (
    <Paper
      className="myinput"
      style={{
        width: "600px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: "20px",
        background: "#F2F2F7",
      }}
    >
      {/* //"#F2F2F7" */}
      

    <Box style={{display:"flex",flexDirection:dir,justifyContent:"flex-start","width":"99%"}}>
  
      <TextField
        label="Weekly hours"
        size="small"
        type="number"
        
        style={{marginTop: "15px", background: "white","width":"99%",marginLeft:"2px"}}
        InputLabelProps={{
          shrink: true,
          style: {color: "black", fontWeight: "bold"},
        }}
        
        onChange={e => {          
          inputState.weeklyHours = parseFloat(e.target.value);
          setInputState({...inputState});
        }}
        value={inputState.weeklyHours}
      />
      <TextField
        label="Additional days off"
        size="small"
        type="number"
        
        style={{marginTop: "15px", background: "white","width":"99%",marginLeft:"10px"}}
        InputLabelProps={{
          shrink: true,
          style: {color: "black", fontWeight: "bold"},
        }}
        onChange={e => {          
          inputState.additionalDaysOff = parseFloat(e.target.value);
          setInputState({...inputState});
        }}
        value={inputState.additionalDaysOff}
      />
      
      <TextField
        label="Every"
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">Weeks</InputAdornment>,         
          
        }}
        style={{marginTop: "15px", background: "white","width":"99%",marginLeft:"10px"}}
        InputLabelProps={{
          shrink: true,
          style: {color: "black", fontWeight: "bold"},
        }}
        onChange={e => {          
          inputState.per = parseFloat(e.target.value);
          setInputState({...inputState});
        }}
        value={inputState.per}
      />
      
     
     
      </Box>
      
  
      
     
      <Box>

<Box sx={{ display:"flex",boxShadow: 3,backgroundColor:"white",marginTop:"20px",padding:"10px",borderRadius:"10px" , flexDirection:"row"}}  >
  
    <Typography  >

    You will need to work an extra: <b>{output?`${formatHours(output)} per day over ${inputState.per} weeks`:"NA"} </b>
   </Typography>
   </Box>
   </Box>
      

      
       
      
        
   
    
    </Paper>
  );
};
const formatHours = (inp:number):string=>{
  if (inp<1) {
    return Math.ceil(inp*60).toFixed(0) + " minutes";
  } else {
    const partialHour = inp - Math.floor(inp)
    return `${Math.floor(inp).toFixed(0)} hours${Math.ceil(partialHour*60).toFixed(0)==="0"?"":" and "+Math.ceil(partialHour*60).toFixed(0) + "minutes"} `
  }
}