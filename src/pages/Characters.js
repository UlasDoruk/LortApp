import React, { useEffect } from "react";
import { fetchCharacters } from "../redux/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Characters() {
  const data = useSelector((state) => state.characters.characters);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <Card sx={{ minWidth: 275 }} key={index}>
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
    </div>
  );
}

export default Characters;
