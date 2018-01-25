import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

const ResultCard = ({ place }) => {
    // let open = place.opening_hours.open_now;
    // if(open === undefined) {
    //   open = 'It might be open now?'
    // } else if (open) {
    //   open = 'Open';
    // } else {
    //   open = 'Closed';
    // }

    // console.log(open);

  return (
      <Card style={styles.card}>
        <CardContent>
          {/* <Typography style={styles.title}>Word of the Day</Typography> */}
          <Typography type="headline" component="h2">
            {place.name}
          </Typography>
          {/* <Typography style={styles.pos}>{opened}</Typography> */}
          <Typography style={styles.pos}>{place.price_level}</Typography>
          <Typography style={styles.pos}>{place.rating} Stars</Typography>
          <Typography component="p">Location: {place.vicinity}</Typography>
        </CardContent>
        <CardActions>
          <Button dense>Learn More</Button>
        </CardActions>
      </Card>
  );
}


export default ResultCard;