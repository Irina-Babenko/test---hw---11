const API_KEY = '44920148-106a3962957378fd34fa469a9';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  );
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
}
