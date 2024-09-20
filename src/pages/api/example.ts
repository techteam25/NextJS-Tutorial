// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ 
    record1 : {
        name: 'What if there wuz chicken?', 
        number: 1, 
        key: "key1"
    }})
}
