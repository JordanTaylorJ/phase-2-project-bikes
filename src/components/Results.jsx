import React from 'react'

const Results = ({boards}) => {

  return (
    <div>
        <h1>Results</h1>
        {boards.map((board) => 
        <div>
          <h2 key={board.id}>Board {board.id}</h2>
          <li> 
            {board.deck} 
          </li>
          <li> 
            {board.trucks} 
          </li>
          <li> 
            {board.wheels} 
          </li>
        </div>
        )}
    </div>
  )
}
export default Results;

/*

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Results = ({index, deck, trucks}) => {

const card =(
  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {`Board${index}`}
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective {deck}
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
  </>
); 


  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default Results;

*/