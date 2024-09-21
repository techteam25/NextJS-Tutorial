import type { NextApiRequest, NextApiResponse } from "next";

let num = 0;
let latin = "";
setInterval(() => {
    num++;
    fetch('https://jsonplaceholder.typicode.com/todos/' + num)
      .then(response => response.json())
      .then(json => {
        latin = json
      }).catch(err => latin = "I actually don't know any Latin.  You'll have to talk to that dude over there")
}, 3000);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    latin
});
}
