import { User } from './user';

export interface SearchMetricOLD {
  SearchMetricID?: string;
  datePopulated: Date;
  searchType: string;
  jobTypeSearched: string;
  jobStateSearched?: any[] | string | undefined;
  employmentTypeSearched?: any[] | string | undefined;
  taxStatusSearched?: any[] | string | undefined;
  hasUserInfo: boolean;
  user?: User;
  anonymousUserUID?: User;
}

export interface SearchMetric {
  SearchMetricID?: string;
  datePopulated: Date;
  searchType: string;
  jobTypeSearched: string;
  jobStateSearched?: any[] | string | undefined;
  employmentTypeSearched?: any[] | string | undefined;
  taxStatusSearched?: any[] | string | undefined;
  hasUserInfo: boolean;
  user?: User;
  anonymousUserUID?: User;
  jobIDImpressions?: (string | undefined)[];
  companyNameImpressions?: string[];
  priorityImpressions?: number[];
  totalRecordsRetrieved?: number;
  totalPossiblePostsFromSearch?: number;
  percentageCompleteSearch?: number;
}

export interface JobSearchMetricsQuery {
  jobType?: string | null;
  state?: string | null;
  company?: string | null;
}
