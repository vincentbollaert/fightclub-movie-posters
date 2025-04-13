import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type AlternativeTitle = {
  __typename?: 'AlternativeTitle';
  iso3166_1: Scalars['String']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type AnyImage = BackdropSizeDetailImage | LogoSizeDetailImage | PosterSizeDetailImage | ProfileSizeDetailImage | StillSizeDetailImage;

export enum BackdropSize {
  Original = 'Original',
  W300 = 'W300',
  W780 = 'W780',
  W1280 = 'W1280'
}

export type BackdropSizeDetailImage = {
  __typename?: 'BackdropSizeDetailImage';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  image: Scalars['URL']['output'];
  iso639_1?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};


export type BackdropSizeDetailImageImageArgs = {
  size: BackdropSize;
};

export type CastCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CastCreditWithMovie';
  character: Scalars['String']['output'];
  id: Scalars['String']['output'];
  value: Movie;
};

export type CastCreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CastCreditWithMovieOrTV';
  character: Scalars['String']['output'];
  id: Scalars['String']['output'];
  value: MovieOrTv;
};

export type CastCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CastCreditWithPerson';
  character: Scalars['String']['output'];
  id: Scalars['String']['output'];
  value: Person;
};

export type CastCreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CastCreditWithTVShow';
  character: Scalars['String']['output'];
  id: Scalars['String']['output'];
  value: TvShow;
};

export type CreditWithMovie = ICreditWithMovie & {
  __typename?: 'CreditWithMovie';
  id: Scalars['String']['output'];
  value: Movie;
};

export type CreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CreditWithMovieOrTV';
  id: Scalars['String']['output'];
  value: MovieOrTv;
};

export type CreditWithPerson = ICreditWithPerson & {
  __typename?: 'CreditWithPerson';
  id: Scalars['String']['output'];
  value: Person;
};

export type CreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CreditWithTVShow';
  id: Scalars['String']['output'];
  value: TvShow;
};

export type CreditsWithMovie = {
  __typename?: 'CreditsWithMovie';
  cast: Array<CastCreditWithMovie>;
  crew: Array<CrewCreditWithMovie>;
  id: Scalars['Int']['output'];
};

export type CreditsWithMovieOrTv = {
  __typename?: 'CreditsWithMovieOrTV';
  cast: Array<CastCreditWithMovieOrTv>;
  crew: Array<CrewCreditWithMovieOrTv>;
  id: Scalars['Int']['output'];
};

export type CreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'CreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int']['output'];
};

export type CreditsWithTvShow = {
  __typename?: 'CreditsWithTVShow';
  cast: Array<CastCreditWithTvShow>;
  crew: Array<CrewCreditWithTvShow>;
  id: Scalars['Int']['output'];
};

export type CrewCreditWithMovie = ICreditWithMovie & {
  __typename?: 'CrewCreditWithMovie';
  department: Scalars['String']['output'];
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  value: Movie;
};

export type CrewCreditWithMovieOrTv = ICreditWithMovieOrTv & {
  __typename?: 'CrewCreditWithMovieOrTV';
  department: Scalars['String']['output'];
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  value: MovieOrTv;
};

export type CrewCreditWithPerson = ICreditWithPerson & {
  __typename?: 'CrewCreditWithPerson';
  department: Scalars['String']['output'];
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  value: Person;
};

export type CrewCreditWithTvShow = ICreditWithTvShow & {
  __typename?: 'CrewCreditWithTVShow';
  department: Scalars['String']['output'];
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  value: TvShow;
};

export type Discover = {
  __typename?: 'Discover';
  movies: DiscoverMovies;
  tv: DiscoverTv;
};


export type DiscoverMoviesArgs = {
  input?: InputMaybe<MovieDiscoverInput>;
};


export type DiscoverTvArgs = {
  input?: InputMaybe<TvDiscoverInput>;
};

export type DiscoverDateFilter = {
  max?: InputMaybe<Scalars['Date']['input']>;
  min?: InputMaybe<Scalars['Date']['input']>;
};

export type DiscoverFloatFilter = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type DiscoverIncludeExcludeFilter = {
  exclude?: InputMaybe<Array<Scalars['ID']['input']>>;
  include?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type DiscoverIncludeFilter = {
  include: Array<Scalars['ID']['input']>;
};

export type DiscoverInput = {
  cast?: InputMaybe<DiscoverIncludeFilter>;
  companies?: InputMaybe<DiscoverIncludeExcludeFilter>;
  crew?: InputMaybe<DiscoverIncludeFilter>;
  genres?: InputMaybe<DiscoverIncludeExcludeFilter>;
  keywords?: InputMaybe<DiscoverIncludeExcludeFilter>;
  people?: InputMaybe<DiscoverIncludeFilter>;
  rating?: InputMaybe<DiscoverFloatFilter>;
  runtime?: InputMaybe<DiscoverIntFilter>;
  streamingOptions?: InputMaybe<StreamingOptions>;
  voteCount?: InputMaybe<DiscoverIntFilter>;
};

export type DiscoverIntFilter = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscoverMovies = {
  __typename?: 'DiscoverMovies';
  latest: MovieConnection;
  popular: MovieConnection;
  topRated: MovieConnection;
};


export type DiscoverMoviesLatestArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscoverMoviesPopularArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscoverMoviesTopRatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DiscoverTv = {
  __typename?: 'DiscoverTV';
  latest: TvShowConnection;
  onTheAir: TvShowConnection;
  popular: TvShowConnection;
  topRated: TvShowConnection;
};


export type DiscoverTvLatestArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscoverTvOnTheAirArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscoverTvPopularArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type DiscoverTvTopRatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Episode = IStreamable & Node & {
  __typename?: 'Episode';
  airDate?: Maybe<Scalars['Date']['output']>;
  credits: EpisodeCreditsWithPerson;
  crew: Array<CrewCreditWithPerson>;
  episodeNumber: Scalars['Int']['output'];
  externalIds: IExternalIds;
  guestStars: Array<CastCreditWithPerson>;
  id: Scalars['ID']['output'];
  images: EpisodeImages;
  name: Scalars['String']['output'];
  next?: Maybe<Episode>;
  overview: Scalars['String']['output'];
  previous?: Maybe<Episode>;
  productionCode: Scalars['String']['output'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasonNumber: Scalars['Int']['output'];
  show: TvShow;
  still?: Maybe<Scalars['URL']['output']>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
};


export type EpisodeSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type EpisodeStillArgs = {
  size: StillSize;
};


export type EpisodeStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type EpisodeCreditsWithPerson = ICreditsWithPerson & {
  __typename?: 'EpisodeCreditsWithPerson';
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  guestStars: Array<CastCreditWithPerson>;
  id: Scalars['Int']['output'];
};

export type EpisodeImages = {
  __typename?: 'EpisodeImages';
  stills: Array<StillSizeDetailImage>;
};

export type ExternalIds = IExternalIds & {
  __typename?: 'ExternalIDS';
  facebook?: Maybe<Scalars['String']['output']>;
  imdb?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export enum ExternalSource {
  Facebook = 'Facebook',
  Freebase = 'Freebase',
  Imdb = 'Imdb',
  Instagram = 'Instagram',
  Tvdb = 'Tvdb',
  Tvrage = 'Tvrage',
  Twitter = 'Twitter'
}

export type FromExternalIds = {
  __typename?: 'FromExternalIds';
  movies: Array<Movie>;
  people: Array<Person>;
  tv: Array<TvShow>;
};

export type FullExternalIds = IExternalIds & {
  __typename?: 'FullExternalIDS';
  facebook?: Maybe<Scalars['String']['output']>;
  imdb?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  tmdb: Scalars['Int']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
};

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  UnknownOrNonBinary = 'UnknownOrNonBinary'
}

export type Genre = Node & {
  __typename?: 'Genre';
  discover: Discover;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type GenreDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export type GenreConnection = {
  __typename?: 'GenreConnection';
  edges?: Maybe<Array<Maybe<GenreEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type GenreEdge = {
  __typename?: 'GenreEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Genre>;
};

export type Genres = {
  __typename?: 'Genres';
  all: GenreConnection;
  genre: Genre;
};


export type GenresAllArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type GenresGenreArgs = {
  id: Scalars['ID']['input'];
};

export type ICreditWithMovie = {
  id: Scalars['String']['output'];
  value: Movie;
};

export type ICreditWithMovieOrTv = {
  id: Scalars['String']['output'];
  value: MovieOrTv;
};

export type ICreditWithPerson = {
  id: Scalars['String']['output'];
  value: Person;
};

export type ICreditWithTvShow = {
  id: Scalars['String']['output'];
  value: TvShow;
};

export type ICreditsWithPerson = {
  cast: Array<CastCreditWithPerson>;
  crew: Array<CrewCreditWithPerson>;
  id: Scalars['Int']['output'];
};

export type IExternalIds = {
  facebook?: Maybe<Scalars['String']['output']>;
  imdb?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
};

export type IStreamable = {
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type IStreamableSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type IStreamableStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type Keyword = Node & {
  __typename?: 'Keyword';
  discover: Discover;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type KeywordDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};

export enum LogoSize {
  Original = 'Original',
  W45 = 'W45',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W300 = 'W300',
  W500 = 'W500'
}

export type LogoSizeDetailImage = {
  __typename?: 'LogoSizeDetailImage';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  image: Scalars['URL']['output'];
  iso639_1?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};


export type LogoSizeDetailImageImageArgs = {
  size: LogoSize;
};

export type MediaImages = {
  __typename?: 'MediaImages';
  backdrops: Array<BackdropSizeDetailImage>;
  posters: Array<PosterSizeDetailImage>;
};

export type Movie = IStreamable & Node & {
  __typename?: 'Movie';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']['output']>;
  budget?: Maybe<Scalars['Int']['output']>;
  credits: ICreditsWithPerson;
  externalIds: FullExternalIds;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  images: MediaImages;
  imdbID: Scalars['String']['output'];
  isAdult: Scalars['Boolean']['output'];
  isVideo: Scalars['Boolean']['output'];
  keywords: Array<Keyword>;
  numberOfRatings: Scalars['Int']['output'];
  originalLanguage: Scalars['String']['output'];
  originalTitle: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularityIndex?: Maybe<Scalars['Float']['output']>;
  poster?: Maybe<Scalars['URL']['output']>;
  productionCompanies: Array<ProductionCompany>;
  productionCountries: Array<ProductionCountry>;
  rating: Scalars['Float']['output'];
  recommendations: MovieConnection;
  releaseDate?: Maybe<Scalars['Date']['output']>;
  revenue?: Maybe<Scalars['Int']['output']>;
  reviews: ReviewConnection;
  runtime: Scalars['Int']['output'];
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  similar: MovieConnection;
  spokenLanguages: Array<SpokenLanguage>;
  status: Status;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  tagline: Scalars['String']['output'];
  title: Scalars['String']['output'];
  translations: Array<TranslationWithTranslatedMovieInfo>;
  videos: Array<Video>;
};


export type MovieBackdropArgs = {
  size: BackdropSize;
};


export type MoviePosterArgs = {
  size: PosterSize;
};


export type MovieRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MovieReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MovieSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type MovieSimilarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MovieStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type MovieConnection = {
  __typename?: 'MovieConnection';
  edges?: Maybe<Array<Maybe<MovieEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieDiscoverInput = {
  includeAdult?: InputMaybe<Scalars['Boolean']['input']>;
  includeVideo?: InputMaybe<Scalars['Boolean']['input']>;
  releaseDate?: InputMaybe<DiscoverDateFilter>;
};

export type MovieEdge = {
  __typename?: 'MovieEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Movie>;
};

export type MovieOrTv = Movie | TvShow;

export type MovieOrTvOrPeople = Movie | Person | TvShow;

export type MovieOrTvOrPeopleConnection = {
  __typename?: 'MovieOrTVOrPeopleConnection';
  edges?: Maybe<Array<Maybe<MovieOrTvOrPeopleEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MovieOrTvOrPeopleEdge = {
  __typename?: 'MovieOrTVOrPeopleEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<MovieOrTvOrPeople>;
};

export type Movies = {
  __typename?: 'Movies';
  movie: Movie;
  nowPlaying: MovieConnection;
  popular: MovieConnection;
  productionCompany: ProductionCompany;
  search: MovieConnection;
  topRated: MovieConnection;
  trending: MovieConnection;
  upcoming: MovieConnection;
};


export type MoviesMovieArgs = {
  id: Scalars['ID']['input'];
};


export type MoviesNowPlayingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MoviesPopularArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MoviesProductionCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MoviesSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type MoviesTopRatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type MoviesTrendingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  timeWindow?: TimeWindow;
};


export type MoviesUpcomingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Network = Node & {
  __typename?: 'Network';
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['URL']['output']>;
  name: Scalars['String']['output'];
  originCountry: Scalars['String']['output'];
  tv: DiscoverTv;
};


export type NetworkLogoArgs = {
  size: LogoSize;
};


export type NetworkTvArgs = {
  input?: InputMaybe<TvDiscoverInput>;
  otherFilters?: InputMaybe<DiscoverInput>;
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type People = {
  __typename?: 'People';
  person: Person;
  popular: PersonConnection;
  search: PersonConnection;
  trending: PersonConnection;
};


export type PeoplePersonArgs = {
  id: Scalars['ID']['input'];
};


export type PeoplePopularArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PeopleSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type PeopleTrendingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  timeWindow?: TimeWindow;
};

export type Person = Node & {
  __typename?: 'Person';
  alsoKnownAs: Array<Scalars['String']['output']>;
  biography: Scalars['String']['output'];
  birthday?: Maybe<Scalars['Date']['output']>;
  credits: PersonCredits;
  deathday?: Maybe<Scalars['Date']['output']>;
  discover: Discover;
  externalIds: FullExternalIds;
  gender: Gender;
  homepage?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  images: Array<ProfileSizeDetailImage>;
  imdbID?: Maybe<Scalars['String']['output']>;
  isAdult: Scalars['Boolean']['output'];
  knownFor: Array<MovieOrTv>;
  knownForDepartment: Scalars['String']['output'];
  name: Scalars['String']['output'];
  placeOfBirth?: Maybe<Scalars['String']['output']>;
  popularityIndex: Scalars['Float']['output'];
  profilePicture?: Maybe<Scalars['URL']['output']>;
  taggedImages: TaggedImageConnection;
  translations: Array<TranslationWithTranslatedPersonInfo>;
};


export type PersonDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type PersonProfilePictureArgs = {
  size: ProfileSize;
};


export type PersonTaggedImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonConnection = {
  __typename?: 'PersonConnection';
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PersonCredits = {
  __typename?: 'PersonCredits';
  all: CreditsWithMovieOrTv;
  movies: CreditsWithMovie;
  tv: CreditsWithTvShow;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Person>;
};

export enum PosterSize {
  Original = 'Original',
  W92 = 'W92',
  W154 = 'W154',
  W185 = 'W185',
  W342 = 'W342',
  W500 = 'W500',
  W780 = 'W780'
}

export type PosterSizeDetailImage = {
  __typename?: 'PosterSizeDetailImage';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  image: Scalars['URL']['output'];
  iso639_1?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};


export type PosterSizeDetailImageImageArgs = {
  size: PosterSize;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
};

export type ProductionCompany = Node & {
  __typename?: 'ProductionCompany';
  discover: Discover;
  id: Scalars['ID']['output'];
  logo?: Maybe<Scalars['URL']['output']>;
  name: Scalars['String']['output'];
  originCountry: Scalars['String']['output'];
};


export type ProductionCompanyDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type ProductionCompanyLogoArgs = {
  size: LogoSize;
};

export type ProductionCountry = {
  __typename?: 'ProductionCountry';
  iso3166_1: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum ProfileSize {
  H632 = 'H632',
  Original = 'Original',
  W45 = 'W45',
  W185 = 'W185'
}

export type ProfileSizeDetailImage = {
  __typename?: 'ProfileSizeDetailImage';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  image: Scalars['URL']['output'];
  iso639_1?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};


export type ProfileSizeDetailImageImageArgs = {
  size: ProfileSize;
};

export type Query = {
  __typename?: 'Query';
  discover: Discover;
  find: FromExternalIds;
  genres: Genres;
  movies: Movies;
  node?: Maybe<Node>;
  people: People;
  search: MovieOrTvOrPeopleConnection;
  streaming: Streaming;
  trending: MovieOrTvOrPeopleConnection;
  tv: Tv;
};


export type QueryDiscoverArgs = {
  input?: InputMaybe<DiscoverInput>;
};


export type QueryFindArgs = {
  externalId: Scalars['String']['input'];
  source: ExternalSource;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type QueryTrendingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  timeWindow?: TimeWindow;
};

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Review>;
};

export type Season = IStreamable & Node & {
  __typename?: 'Season';
  airDate?: Maybe<Scalars['Date']['output']>;
  credits: ICreditsWithPerson;
  episode: Episode;
  episodeCount: Scalars['Int']['output'];
  episodes: Array<Episode>;
  externalIds: IExternalIds;
  id: Scalars['ID']['output'];
  images: MediaImages;
  name: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  poster?: Maybe<Scalars['URL']['output']>;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  seasonNumber: Scalars['Int']['output'];
  show: TvShow;
  streamingOptions?: Maybe<Array<StreamingOption>>;
  videos: Array<Video>;
};


export type SeasonEpisodeArgs = {
  number: Scalars['Int']['input'];
};


export type SeasonPosterArgs = {
  size: PosterSize;
};


export type SeasonSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type SeasonStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type SpokenLanguage = {
  __typename?: 'SpokenLanguage';
  iso639_1: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export enum Status {
  Cancelled = 'Cancelled',
  InProduction = 'InProduction',
  Planned = 'Planned',
  PostProduction = 'PostProduction',
  Released = 'Released',
  Rumored = 'Rumored'
}

export enum StillSize {
  Original = 'Original',
  W92 = 'W92',
  W185 = 'W185',
  W300 = 'W300'
}

export type StillSizeDetailImage = {
  __typename?: 'StillSizeDetailImage';
  aspectRatio: Scalars['Float']['output'];
  height: Scalars['Int']['output'];
  image: Scalars['URL']['output'];
  iso639_1?: Maybe<Scalars['String']['output']>;
  voteAverage: Scalars['Float']['output'];
  voteCount: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};


export type StillSizeDetailImageImageArgs = {
  size: StillSize;
};

export type Streamable = IStreamable & {
  __typename?: 'Streamable';
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  streamingOptions?: Maybe<Array<StreamingOption>>;
};


export type StreamableSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type StreamableStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type Streaming = {
  __typename?: 'Streaming';
  allProviders: Array<StreamingProvider>;
  countries: Array<StreamingCountry>;
  myCountry?: Maybe<StreamingCountry>;
  providers: Array<StreamingProvider>;
};


export type StreamingProvidersArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type StreamingCountry = Node & {
  __typename?: 'StreamingCountry';
  emoji: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  iso3166_2: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type StreamingCountryOption = {
  __typename?: 'StreamingCountryOption';
  country: StreamingCountry;
  option: StreamingOption;
};

export type StreamingLinks = {
  __typename?: 'StreamingLinks';
  androidTV?: Maybe<Scalars['URL']['output']>;
  fireTV?: Maybe<Scalars['URL']['output']>;
  tvOS?: Maybe<Scalars['URL']['output']>;
  web?: Maybe<Scalars['URL']['output']>;
};

export enum StreamingMonetizationType {
  Ads = 'Ads',
  Buy = 'Buy',
  Cinema = 'Cinema',
  Flatrate = 'Flatrate',
  Free = 'Free',
  Rent = 'Rent'
}

export type StreamingOption = {
  __typename?: 'StreamingOption';
  bestOffering: StreamingOptionOffering;
  offerings: Array<StreamingOptionOffering>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingOptionProviderArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type StreamingOptionOffering = {
  __typename?: 'StreamingOptionOffering';
  links: StreamingLinks;
  price?: Maybe<Price>;
  resolution: VideoResolution;
  type: StreamingMonetizationType;
};

export type StreamingOptions = {
  country?: InputMaybe<Scalars['ID']['input']>;
  monetizationTypes?: InputMaybe<Array<StreamingMonetizationType>>;
  streamingProviders: Array<Scalars['ID']['input']>;
};

export type StreamingProvider = Node & {
  __typename?: 'StreamingProvider';
  iconURL: Scalars['URL']['output'];
  id: Scalars['ID']['output'];
  monetizationTypes: Array<StreamingMonetizationType>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type StreamingResultForProvideer = {
  __typename?: 'StreamingResultForProvideer';
  bestOption: StreamingCountryOption;
  options: Array<StreamingCountryOption>;
  provider?: Maybe<StreamingProvider>;
};


export type StreamingResultForProvideerProviderArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type Tv = {
  __typename?: 'TV';
  airingToday: TvShowConnection;
  episode: Episode;
  network: Network;
  onTheAir: TvShowConnection;
  popular: TvShowConnection;
  search: TvShowConnection;
  season: Season;
  show: TvShow;
  topRated: TvShowConnection;
  trending: TvShowConnection;
  upcoming: TvShowConnection;
};


export type TvAiringTodayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvEpisodeArgs = {
  id: Scalars['ID']['input'];
};


export type TvNetworkArgs = {
  id: Scalars['ID']['input'];
};


export type TvOnTheAirArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvPopularArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvSearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  term: Scalars['String']['input'];
};


export type TvSeasonArgs = {
  id: Scalars['ID']['input'];
};


export type TvShowArgs = {
  id: Scalars['ID']['input'];
};


export type TvTopRatedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvTrendingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  timeWindow?: TimeWindow;
};


export type TvUpcomingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type TvDiscoverInput = {
  airDate?: InputMaybe<DiscoverDateFilter>;
  firstAirDate?: InputMaybe<DiscoverDateFilter>;
  networks?: InputMaybe<DiscoverIncludeFilter>;
};

export type TvShow = IStreamable & Node & {
  __typename?: 'TVShow';
  alternativeTitles: Array<AlternativeTitle>;
  backdrop?: Maybe<Scalars['URL']['output']>;
  createdBy: Array<ICreditWithPerson>;
  credits: ICreditsWithPerson;
  episodeRunTime: Array<Scalars['Int']['output']>;
  episodes: Array<Episode>;
  externalIds: FullExternalIds;
  firstAirDate?: Maybe<Scalars['Date']['output']>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['URL']['output']>;
  id: Scalars['ID']['output'];
  images: MediaImages;
  inProduction: Scalars['Boolean']['output'];
  keywords: Array<Keyword>;
  languages: Array<Scalars['String']['output']>;
  lastAirDate?: Maybe<Scalars['Date']['output']>;
  lastEpisodeToAir?: Maybe<Episode>;
  name: Scalars['String']['output'];
  networks: Array<Network>;
  nextEpisodeToAir?: Maybe<Episode>;
  numberOfEpisodes: Scalars['Int']['output'];
  numberOfRatings: Scalars['Int']['output'];
  numberOfSeasons: Scalars['Int']['output'];
  originCountry: Array<Scalars['String']['output']>;
  originalLanguage: Scalars['String']['output'];
  originalName: Scalars['String']['output'];
  overview: Scalars['String']['output'];
  popularityIndex?: Maybe<Scalars['Float']['output']>;
  poster?: Maybe<Scalars['URL']['output']>;
  productionCompanies: Array<Network>;
  rating: Scalars['Float']['output'];
  recommendations: TvShowConnection;
  reviews: ReviewConnection;
  searchStreamingOptions: Array<StreamingResultForProvideer>;
  season: Season;
  seasons: Array<Season>;
  similar: TvShowConnection;
  status: Scalars['String']['output'];
  streamingOptions?: Maybe<Array<StreamingOption>>;
  topRatedEpisode?: Maybe<Episode>;
  translations: Array<TranslationWithTranslatedMovieInfo>;
  type: Scalars['String']['output'];
  videos: Array<Video>;
};


export type TvShowBackdropArgs = {
  size: BackdropSize;
};


export type TvShowPosterArgs = {
  size: PosterSize;
};


export type TvShowRecommendationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvShowReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvShowSearchStreamingOptionsArgs = {
  countries?: InputMaybe<Array<Scalars['ID']['input']>>;
  providers: Array<Scalars['ID']['input']>;
};


export type TvShowSeasonArgs = {
  number: Scalars['Int']['input'];
};


export type TvShowSimilarArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type TvShowStreamingOptionsArgs = {
  country?: InputMaybe<Scalars['ID']['input']>;
};

export type TvShowConnection = {
  __typename?: 'TVShowConnection';
  edges?: Maybe<Array<Maybe<TvShowEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TvShowEdge = {
  __typename?: 'TVShowEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TvShow>;
};

export type TaggedImage = {
  __typename?: 'TaggedImage';
  image: AnyImage;
  media: MovieOrTv;
};

export type TaggedImageConnection = {
  __typename?: 'TaggedImageConnection';
  edges?: Maybe<Array<Maybe<TaggedImageEdge>>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TaggedImageEdge = {
  __typename?: 'TaggedImageEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<TaggedImage>;
};

export enum TimeWindow {
  Day = 'Day',
  Week = 'Week'
}

export type TranslatedMovieInfo = {
  __typename?: 'TranslatedMovieInfo';
  overview: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type TranslatedPersonInfo = {
  __typename?: 'TranslatedPersonInfo';
  biography: Scalars['String']['output'];
};

export type TranslationWithTranslatedMovieInfo = {
  __typename?: 'TranslationWithTranslatedMovieInfo';
  info: TranslatedMovieInfo;
  iso639_1: Scalars['String']['output'];
  iso3166_1: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  localizedLanguage?: Maybe<Scalars['String']['output']>;
};

export type TranslationWithTranslatedPersonInfo = {
  __typename?: 'TranslationWithTranslatedPersonInfo';
  info: TranslatedPersonInfo;
  iso639_1: Scalars['String']['output'];
  iso3166_1: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  localizedLanguage?: Maybe<Scalars['String']['output']>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['String']['output'];
  iso639_1: Scalars['String']['output'];
  iso3166_1: Scalars['String']['output'];
  key: Scalars['String']['output'];
  links?: Maybe<StreamingLinks>;
  name: Scalars['String']['output'];
  site: Scalars['String']['output'];
  size: Scalars['Int']['output'];
  thumbnail?: Maybe<Scalars['URL']['output']>;
  type: Scalars['String']['output'];
};

export enum VideoResolution {
  Bluray = 'Bluray',
  Dvd = 'Dvd',
  Hd = 'Hd',
  Sd = 'Sd',
  Theatre = 'Theatre',
  UltraHd = 'UltraHd'
}
