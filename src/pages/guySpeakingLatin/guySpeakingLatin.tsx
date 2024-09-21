import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Animal from "../../types/animal";

const guySpeakingLatin = () => {
  const [toggle, setToggle] = useState(true);
  const [latin, setLatin] = useState("");

  useEffect(() => {
    setToggle(false);
    async function getData() {
      await fetch('/api/guySpeakingLatin')
      .then(response => response.json())
      .then(json => {
        let res = json.latin;
        if (json.latin.title !== undefined)
            res = json.latin.title;
        console.log(res)
        setLatin(res);
      });
      return;
    }
    getData();
  }, [latin]);

  return (
    <main className="main-contianer" style={{ paddingTop: "5vh" }}>
      <Card sx={{ ml: "15vw", mr: "15vw" }}>
        <CardContent>
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {latin === undefined || latin === "" ? "It looks like a guy is about to speak some Latin" : `Guy speaking Latin says "`+ latin + `!"`}
          </Typography>
        </CardContent>
        
      </Card>

    </main>
  );
};

export default guySpeakingLatin;
