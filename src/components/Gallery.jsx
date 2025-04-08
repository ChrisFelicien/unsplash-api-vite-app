import axios from "axios";
import useAppContext from "../appContext";
import { useQuery } from "@tanstack/react-query";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { state } = useAppContext();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", state.searchedWord],
    queryFn: async () => {
      const { data } = await axios.get(`${url}&query=${state.searchedWord}`);

      return data;
    }
  });

  if (isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading....</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h4>There where an error.</h4>
      </section>
    );
  }

  const results = data.results;

  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No result founded...</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        return (
          <img
            key={item.id}
            src={item.urls.regular}
            alt={item.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
};

export default Gallery;
