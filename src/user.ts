import { GeoPoint } from 'firebase/firestore';

import { UserType } from './user-type';

export interface User {
  email: string;
  uid: string;
  firstNameOrInitial?: string;
  lastNameOrInitial?: string;
  mailingList?: boolean;
  createDate?: Date;
  lastOnlineDate?: Date;
  userType?: UserType;
  userCompanyType?: string;
  userCompanyName?: string;
  promoCode?: string;
  recruiterCompanyUID?: string;
  recruiterFName?: string;
  recruiterLName?: string;
  userCompanyURL?: string;
  userCompanyInfo?: string;
  userCompanyMonthlyPlan?: string;
  logoName?: string;
  logoURL?: string;
  logoUpdatedAt?: Date;
  displayName?: string;
  userAddress?: string;
  userCity?: string;
  userGraduationYear?: string;
  userState?: string;
  userZip?: string;
  planPrisRemaining?: number;
  planPrisTotal?: number;
  planHiPrisRemaining?: number;
  planHiPrisTotal?: number;
  planPrisTotalSubscription?: number;
  planHiPrisTotalSubscription?: number;
  planPrisTotalCustom?: number;
  planHiPrisTotalCustom?: number;
  planRCPlanCreditsCustom?: number;
  planRCCreditsMaxCustom?: number;
  rcPlanCredits?: number;
  rcCredits?: number;
  rcCreditsMax?: number;
  launchpad?: string[];
  launchpadRecord?: { course: string; date: Date }[];
  scholarshipCheckbox1?: boolean;
  scholarshipCheckbox2?: boolean;
  scholarshipCheckbox3?: boolean;
  scholarship2023Checkbox?: boolean;
  scholarship2024Checkbox1?: boolean;
  scholarship2024Checkbox2?: boolean;
  scholarship2024Checkbox3?: boolean;
  scholarship2025Checkbox1?: boolean;
  scholarship2025Checkbox2?: boolean;
  aaaa2024Q1?: string[];
  aaaa2025Q1?: string[];
  aaaa2025Q2Phone?: string;
  aaaa2026Q1?: string[];
  aaaa2026Q2YesNo?: 'Yes' | 'No';
  aana2024Q1?: string[];
  aana2024Q2?: string;
  aana2025Q1?: string[];
  aana2025Q2?: string;
  mobileNumber?: string | null;
  position?: Position;
  onboarding?: {
    jobPosterMyJobsTutorial?: boolean;
  };
}

export interface Position {
  geohash: string;
  geopoint: GeoPoint;
}

export interface MonthlyData {
  countAcceptedRCConversations: number;
}

export interface JobApplication {
  dateApplied: Date;
  companyAppliedTo?: string;
  jobType?: string;
  jobId?: string;
  job?: unknown;
  userUID?: string;
}
