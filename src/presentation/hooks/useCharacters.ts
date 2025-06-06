import { useCallback } from 'react';

import { GET_CHARACTERS } from '@/infra/graphql/client';
import { client } from '@/infra/client-config';
import { useAppContext } from './useAppContext';



export const useCharacters = () => {
  const {
    characters,
    setCharacters,
    filters,
    setLoading,
    setTotalPages,
    setError,
  } = useAppContext();

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await client.query({
        query: GET_CHARACTERS,
        variables: {
          page: filters.page,
          filter: {
            name: filters.name || undefined,
            status: filters.status || undefined,
            species: filters.species || undefined,
            gender: filters.gender || undefined,
          }
        },
        fetchPolicy: 'network-only'
      });

      if (data?.characters) {
        setCharacters(data.characters.results);
        setTotalPages(data.characters.info.pages);
      } else {
        setCharacters([]);
        setTotalPages(0);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setCharacters([]);
      setTotalPages(0);
    } finally {
      setLoading(false);
    }
  }, [filters, setCharacters, setLoading, setTotalPages, setError]);

  return {
    characters,
    fetchCharacters,
  };
};
