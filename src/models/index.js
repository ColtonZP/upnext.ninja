// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserPlaylist, Game, Playlist } = initSchema(schema);

export {
  UserPlaylist,
  Game,
  Playlist
};