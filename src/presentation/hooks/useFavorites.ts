
import { useCallback, useState } from 'react';
import { Character } from '../types/api';
import { useAppContext } from './useAppContext';


export const useFavorites = () => {
  const { favorites, setCharacters, setLoading, setError, setTotalPages } = useAppContext();
  const [favoriteCharacters, setFavoriteCharacters] = useState<Character[]>([]);

  const fetchFavorites = useCallback(async () => {
    if (favorites.length === 0) {
      setCharacters([]);
      setTotalPages(0);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const favoriteIds = favorites.join(',');
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${favoriteIds}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch favorite characters');
      }

      const data = await response.json();
      const charactersData = Array.isArray(data) ? data : [data];
      
      setFavoriteCharacters(charactersData);
      setCharacters(charactersData);
      setTotalPages(1); 
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setCharacters([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, [favorites, setCharacters, setLoading, setError, setTotalPages]);

  return {
    favoriteCharacters,
    fetchFavorites,
  };
};
