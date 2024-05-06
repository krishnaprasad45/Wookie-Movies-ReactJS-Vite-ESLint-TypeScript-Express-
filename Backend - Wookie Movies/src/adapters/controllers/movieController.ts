import { Request, Response } from 'express';
import getMovieList from "../../business/usecases/getMovieList";

export default async function movieList(req: Request, res: Response) {
  try {
    const movieData = await getMovieList();
    res.json(movieData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
