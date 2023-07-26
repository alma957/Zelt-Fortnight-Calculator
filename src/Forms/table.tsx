import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { currencyFormat,calculateNI,calculateDirectorNic,calculateCompanyDirNic} from "./nationalInsurance"
import { employeeRates,employerData,directorRatesByCategory,AnnualDirectorDataByCategory, AnnualDirectorData} from "./variables"
export const OutputTable = ({director,pay,category,calculationType,proRata,firstPeriodPaid}:any): JSX.Element => {
 
   
  
  
    const rows:Array<any> = []
    const rates = directorRatesByCategory[category as keyof AnnualDirectorDataByCategory] as AnnualDirectorData
   // Employer NI contribution: £{currencyFormat(calculateNI(inputState.pay * multiplier[inputState.payPeriod as keyof mult],inputState.category,employerData))}
    const months = ["Apr-23","May-23","Jun-23","Jul-23","Aug-23","Sep-23","Oct-23","Nov-23","Dec-23","Jan-24","Feb-24","Mar-24","Total"]
if(!director) {
    for (let i=0;i<months.length-1;i++) {       
            rows.push({"employee":calculateNI(pay,category,employeeRates,false,months[i]), "employer":calculateNI(pay,category,employerData,false,months[i])})
    }
  } else {
    if (calculationType==="standard") {

        for (let i=0;i<months.length-1;i++) {   
          
          const dir = calculateDirectorNic(pay*(Math.max(i+1-firstPeriodPaid,0)),rates,i<=6?"first_period":"second_period",i>0?rows.reduce((a,b)=>a+b['employee'],0):0,proRata)
          const emp = calculateCompanyDirNic(pay*(Math.max(i+1-firstPeriodPaid,0)),rates,i<=6?"first_period":"second_period",i>0?rows.reduce((a,b)=>a+b['employer'],0):0,proRata)    
          rows.push({"employee":dir, "employer":emp})
    }
    //rows.push({"employee":calculateAnnualDirectorEmployeeNic(pay,directorRates), "employer":calculateAnnualDirectorCompanyNic(pay*12,directorRatesByCategory[category as keyof AnnualDirectorDataByCategory] )})
  } else {
    
    for (let i=0;i<months.length-2;i++) {  
      
      if (i<firstPeriodPaid) {
        rows.push({"employee":0,"employer":0})
       
      } else {
      rows.push({"employee":calculateNI(pay,category,employeeRates,false,months[i]), "employer":calculateNI(pay,category,employerData,false,months[i])})
      }
    }
    let totDir = 0;
    let totComp = 0;
    for (let i=0;i<months.length-1;i++) {   
      
      totComp+=calculateCompanyDirNic(pay*(Math.max(i+1-firstPeriodPaid,0)),rates,i<=6?"first_period":"second_period",i>0?totComp:0,proRata)  
      
      totDir+=calculateDirectorNic(pay*(Math.max(i+1-firstPeriodPaid,0)),rates,i<=6?"first_period":"second_period",i>0?totDir:0,proRata)
}
 
    //  rows.reduce((a,b)=>a+b['employee'],0)
    rows.push({"employee":totDir-rows.reduce((a,b)=>a+b['employee'],0),"employer":totComp-rows.reduce((a,b)=>a+b['employer'],0)})
    }

  }
    rows.push({"employee":rows.reduce((a,b)=>a+b["employee"],0),"employer":rows.reduce((a,b)=>a+b["employer"],0)})
    return (
        
       
        <TableContainer  component={Paper} style={{width:"99%",marginLeft:"0px"}}>
        <Table size="small" >
             <TableHead>
            <TableRow >
            <TableCell  style={{fontWeight:"bold",fontSize:"small"}} align="left">Month</TableCell> 
            <TableCell style={{fontWeight:"bold",fontSize:"x-small"}} align="left">{director? "Salary Deductions":"Salary Deductions"}</TableCell> 
            <TableCell style={{fontWeight:"bold",fontSize:"x-small"}} align="left">{"Employer's NIC"}</TableCell> 
            
            </TableRow>
             </TableHead>
             <TableBody>
             {rows.map((row,ind) => (
            <TableRow key={Math.random()*Math.random()*Math.random()}
            style={{width:'70%'}}
              sx={{ '&:last-child td, &:last-child th': { border: 0,backgroundColor:"#D3D3D3",fontWeight:"bold",fontSize:"small" } }}
            >
      
              <TableCell style={{width:'25%', fontSize:ind===12?"normal": "small"}} align="left">{months[ind]}</TableCell>
              <TableCell style={{width:'37.5%',fontSize:ind===12?"normal": "small"}} align="left">{currencyFormat((rows[ind])["employee"]) as string}</TableCell>
              <TableCell style={{width:'37.5%',fontSize:ind===12?"normal": "small"}} align="left">{currencyFormat((rows[ind]["employer"])) as string}</TableCell>
              
             
            </TableRow>
          ))}
          
             </TableBody>
             </Table>
             
        </TableContainer>
  
    )
        
        

    
}