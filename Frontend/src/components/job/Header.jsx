import React from 'react'
import {Box, Grid} from '@material-ui/core'

const JobListing_page = () => {
  return (
    <Box class="py-14 bg-green-600" style ={{marginBottom: "-15px"}}>
        <Grid container class="flex justify-center">
            <Box class="flex items-center flex justify-between">
              <h1 class="text-5xl font-bold">Job Entries</h1>
            </Box>
        </Grid>
    </Box>
  )
}

export default JobListing_page