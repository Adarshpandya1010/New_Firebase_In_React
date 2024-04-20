import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { db } from "./config/fire";
import Home from "./Home";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    justify: "center",
    maxWidth: 300,
    maxHeight: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function SnapshotFireBase() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function getSchools() {
    setLoading(true);
    db.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchools(items);
      setLoading(false);
    });
  }

  function addSchool(newSchool) {
    db.doc(newSchool.id)
      .set(newSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  function deleteSchool(school) {
    db.doc(school.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editSchool(updatedSchool) {
    setLoading();
    console.log(updatedSchool);
    db.doc(updatedSchool.id)
      .update(updatedSchool)
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getSchools();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <Home />
      <Grid container justify="center">
        <Paper style={{ height: 250, width: 400, padding: 40, marginTop: 0 }}>
          <Grid>
            <h1 style={{ background: "#e6f7ff", marginTop: 0 }}>CREATE</h1>
          </Grid>
          <form>
            <Grid>
              <TextField
                style={{ padding: 10, width: 300 }}
                type="text"
                id="title"
                name="title"
                label="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Grid>
            <Grid>
              <TextField
                style={{ padding: 10, width: 300 }}
                name="desc"
                type="text"
                id="desc"
                label="Enter the desc"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                onClick={() => addSchool({ title, desc, id: uuidv4() })}
                style={{ padding: 10, margin: 30 }}
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <br />
      {loading ? <h1>Loading...</h1> : null}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={8}
      >
        {schools?.map((school) => {
          return (
            <Grid item key={school.id}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {school.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {school.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={() => deleteSchool(school)}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => editSchool({ title, desc, id: school.id })}
                  >
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      ;
    </div>
  );
}
