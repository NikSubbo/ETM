import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Container, Button, Box, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  paper: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  btnLink: {
    textDecoration: 'none',
  },
  btn: {
    marginTop: theme.spacing(3)
  }
}))

export default function Card(props) {
  const classes = useStyles();
  const rows = useSelector(state => state.rows)
  const [item] = rows.filter(row => props.match.params.id === row.id)

  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid>
            <img alt="itemPic" src={item.img} className={classes.img} />
          </Grid>
          <Grid>
            <Typography variant="h6" className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              id: {item.id}
            </Typography>
            <Typography variant="body1">
              vendor: {item.vendor} <br />
              pack: {item.pack} <br />
              price: {item.price} &#8381; <br />
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Box className={classes.btn}>
        <Link className={classes.btnLink} to="/catalog">
          <Button variant="outlined" color="primary">Back to Catalog</Button>
        </Link>
      </Box>
    </Container>
  )
}
