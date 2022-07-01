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

type PlaylistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Playlist {
  readonly id: string;
  readonly title: string;
  readonly games?: Game[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Playlist, PlaylistMetaData>);
  static copyOf(source: Playlist, mutator: (draft: MutableModel<Playlist, PlaylistMetaData>) => MutableModel<Playlist, PlaylistMetaData> | void): Playlist;
}