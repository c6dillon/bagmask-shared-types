import { JobPosting } from './post';
import { User } from './user';

export interface JobViewMetric {
  JobViewMetricID?: string;
  jobUID: string;
  jobID: string | undefined;
  jobCompany: string;
  jobPostPriority: number;
  datePopulated: Date;
  linkString: string;
  hasCompensation: boolean;
  hasTuitionReimbursement: boolean;
  daysOld: number;
  job: JobPosting;
  hasUserInfo: boolean;
  user?: User;
  anonymousUserUID?: User;
}

export interface JobViewMetricsQuery {
  jobType?: string | null;
  company?: string | null;
}
