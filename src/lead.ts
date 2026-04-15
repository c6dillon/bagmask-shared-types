import { JobPosting } from './post';

export interface Lead {
  leadID?: string;
  jobUID: string;
  jobSeekerEmail: string;
  jobSeekerMessage: string;
  jobSeekerName: string;
  jobSeekerPhone: string;
  jobCompany: string;
  datePopulated: Date;
  linkString: string;
  job: JobPosting;
  anonymousUserUID?: string;
  userUID?: string;
}

export interface LeadQuery {
  jobType?: string | null;
  company?: string | null;
}
