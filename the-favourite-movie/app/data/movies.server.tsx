// GET ALL MOVIES
export async function getMovies(title: string, y: number, plot: string) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&plot=${plot}&y=${y}&apikey=fd45aca9`, {
      method: "GET",
    });
    return response;
  } catch (error) {
    throw new Error("Failed to get movies.");
  }
}

