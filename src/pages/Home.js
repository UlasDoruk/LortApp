import React, { useEffect } from 'react'
import { fetchBooks,fetchMovies } from '../redux/charactersSlice'
import { useDispatch, useSelector } from "react-redux";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {

    const movies = useSelector((state) => state.characters.movies);
    const books = useSelector((state) => state.characters.books);
    let dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchBooks(),fetchMovies());
    },[dispatch])

    const renderBooks = (()=>{
        return (
          <React.Fragment>
            {books.map((item, index) => {
              return (
                <Card
                  sx={{ minWidth: 275 }}
                  key={index}
                  spacing={{ xs: 2, md: 3 }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.gender}
                      {item.race}
                    </Typography>
                    <Typography variant="body2">
                      {item.birth} {item.death}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              );
            })}
          </React.Fragment>
        );
    })

    const renderMovies = (()=>{
        return (
          <React.Fragment>
            {movies.map((item, index) => {
              return (
                <Card sx={{ minWidth: 275 }} key={index}>
                  <CardContent >
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {/* be{bull}nev{bull}o{bull}lent */}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.gender}
                      {item.race}
                    </Typography>
                    <Typography variant="body2">
                      {item.birth} {item.death}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              );
            })}
          </React.Fragment>
        );
    })

  return (
    <div>
      {renderBooks()}
      {renderMovies()}
    </div>
  );
}

export default Home