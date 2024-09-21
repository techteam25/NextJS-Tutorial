import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const guySpeakingLatin = () => {
  const [latin, setLatin] = useState("");

  const getData = async () => {
    try {
        const res =  await fetch('/api/guySpeakingLatin')
        .then(response => response.json())
        .then(json => {
            let res = json.latin;
        if (json.latin.title !== undefined)
            res = json.latin.title;
        console.log(res)
        setLatin(res);
        });
    } finally {
        setTimeout(getData, 3000);
    }
}

  useEffect(() => {
    getData();
  }, []);

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