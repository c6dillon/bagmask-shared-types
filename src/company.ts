export interface Company {
  uid: string;
  status: string;
  companyName: string;
  createDate: Date;
  imported: boolean;
  memberUids?: [];
  linkToData?: string;
  lastImportDate?: Date;
  importerStatus?: {
    automated?: string;
    checksForZero?: string;
    progressBars?: string;
  };
  id?: string;
  emails?: [any];
  expiredPostsInfo?: {
    expiredCount?: number;
    expiredPosts?: {};
    hasExpiredPosts?: boolean;
    oldestExpiredPostDate?: Date;
    totalCount?: number;
    unexpiredCount?: number;
  };
  jobCounts?: {
    AnesthesiologistCount: number;
    CAACount: number;
    CRNAcount: number;
    postingPlanHighIncludedPriorityCount: number;
    postingPlanIncludedPriorityCount: number;
    highPriorityCount: number;
    priorityPriorityCount: number;
    standardPriorityCount: number;
    totalCount: number;
    activeCount: number;
    inactiveCount: number;
    retiredCount: number;
  };
  employeeUIDs?: [any];
  allowAutomatedEmails: boolean;
  lastEmailDates: {
    lastEmailDate: Date;
    expiredEmailDate: Date;
    expiringSoonEmailDate: Date;
    updatedImportedPostsEmailDate: Date;
  };
  lastRefreshDate: Date;
}
