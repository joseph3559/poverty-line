import React from 'react'
import axios from '../../api/axios'
import {useState, useEffect} from 'react'
import {Box, Grid, Button, makeStyles} from '@material-ui/core';
import Modal from './Modal';

const skills = [""];

 const useStyles = makeStyles({
   wrapper: {
     border: "1px solid green",
     cursor: "pointer",
     padding: "5px",

     "&:hover": {
      BoxShadow: "0px 5px 25px rgba(0, 0, 0,0.1)",
      borderLeft: "6px solid green",
     }
   },

   companyName: {
     fontSize: "13px",
     backgroundColor: "green",
     padding: "6px",
     borderRadius: "5px",
     display: "inline-block",
     fontWeight: 600,
   },

   skills:{
    margin: "4px",
    padding: "6px",
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight: "600",
    backgroundColor: "green",
    color: "white",
   },

  });

const JobCard = () => {
  const classes = useStyles()
  const [jobs, setJobs ] = useState ([])
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios.get('/jobs').then((response) => setJobs(response.data));
 }, [])

  return (
    <>
      <div style = {{backgroundColor: ""}}>
      {modalOpen && <Modal setOpenModal={setModalOpen}/>}

            {jobs.map((job) => (        
              <Box className={classes.wrapper}>
                <Grid container alignItems='center'>
                <Grid item xs>
                    <h5 class="text-2xl">{job.job_title}</h5>
                  <p class="text-sm" className={ classes.companyName }>{job.company_name}</p>
                </Grid>
                <Grid item container xs>
                  {skills.map((skill) =>( 
                    <Grid key={ skill } className={ classes.skills } item>{job.required_skills }</Grid>
                  ))}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" xs>
                    <Grid item>
                      <p variant="caption" class="text-sm">Before 12-12-2022 { job.deadline }| { job.job_type}</p>
                    </Grid>
                    <Grid item>
                      <Box mt={2} >
                        <Button className='openModalBtn' onClick={()=> {
                          setModalOpen(true); }} variant="outlined" class="normal-case text-s border-4 border-black-40/100 text-black">More Details</Button>
                         
                      </Box>
                    </Grid>
                </Grid>
                </Grid>
                
                </Box>  
            ))}
            
        </div>
    </>    
  )
}

export default JobCard