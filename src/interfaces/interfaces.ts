export interface IGame {
  id: string;
  name: string;
  box_art_url: string;
}

export interface IPagination {
  cursor?: string;
}

export interface IGetDataWithToken {
  accessToken: string;
  after?: string;
}

export interface ISearchGameWithToken {
  accessToken: string;
  name: string;
}
