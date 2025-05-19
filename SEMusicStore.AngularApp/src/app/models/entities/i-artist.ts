//@GeneratedCode
import { IKey } from '@app-models/i-key';
import { IGenre } from '@app-models/entities/i-genre';
//@CustomImportBegin
//@CustomImportEnd
export interface IArtist extends IKey {
  name: string;
  genreId: number;
  genre: IGenre;
  id: number;
//@CustomCodeBegin
//@CustomCodeEnd
}
