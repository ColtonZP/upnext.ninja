import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Game {
  readonly id: number;
  readonly name: string;
  readonly background_image: string;
  readonly slug: string;
  readonly released: string;
  readonly completed: boolean;
  constructor(init: ModelInit<Game>);
}

export declare class Playlist {
  readonly id: string;
  readonly title: string;
  readonly games?: Game[] | null;
  constructor(init: ModelInit<Playlist>);
}

type UserPlaylistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserPlaylist {
  readonly id: string;
  readonly playlists?: Playlist[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserPlaylist, UserPlaylistMetaData>);
  static copyOf(source: UserPlaylist, mutator: (draft: MutableModel<UserPlaylist, UserPlaylistMetaData>) => MutableModel<UserPlaylist, UserPlaylistMetaData> | void): UserPlaylist;
}