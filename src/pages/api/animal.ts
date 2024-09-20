import type { NextApiRequest, NextApiResponse } from "next";
import Animal from '../../types/animal';

const animals: Animal[] = [];

let num = 0;
setInterval(() => {
  animals.push({
    name: "animal" + num,
    number: num,
    key: "key" + num
  });
  num++;
}, 1500);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    animals: [...animals],
  });
}
