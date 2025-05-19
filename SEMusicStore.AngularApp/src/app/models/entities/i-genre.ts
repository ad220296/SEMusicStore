//@GeneratedCode
import { IKey } from '@app-models/i-key';
import { IArtist } from '@app-models/entities/i-artist';
//@CustomImportBegin
//@CustomImportEnd
export interface IGenre extends IKey {
  name: string;
  artists: IArtist[];
  id: number;
//@CustomCodeBegin
//@CustomCodeEnd
}
