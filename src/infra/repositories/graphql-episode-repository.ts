import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { EpisodeRepository } from '../../domain/repositories/episode-repository';
import { GET_EPISODES, GET_EPISODE_DETAILS, GET_EPISODES_BY_IDS } from '../graphql/client';

export class GraphQLEpisodeRepository implements EpisodeRepository {
  constructor(private readonly client: ApolloClient<NormalizedCacheObject>) {}

  async getEpisodes(page?: number) {
    const { data } = await this.client.query({
      query: GET_EPISODES,
      variables: { page }
    });
    return data.episodes;
  }

  async getEpisodeById(id: string) {
    const { data } = await this.client.query({
      query: GET_EPISODE_DETAILS,
      variables: { id }
    });
    return data.episode;
  }

  async getEpisodesByIds(ids: string[]) {
    const { data } = await this.client.query({
      query: GET_EPISODES_BY_IDS,
      variables: { ids }
    });
    return data.episodesByIds;
  }
} 