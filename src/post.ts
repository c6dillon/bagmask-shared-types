import { GeoPoint } from 'firebase/firestore';

export interface JobPosting {
  id?: string;
  postPriority: number;
  postPriorityUpgradeCost?: number;
  postTotalCostInCents?: number;
  postStatus: string;
  postEntryType: string;
  uid: string;
  position?: {
    geohash: string;
    geopoint: GeoPoint;
  };
  random: number;
  jobType: string;
  jobTypeLeadership?: boolean;
  jobTypePain?: boolean;
  address?: string;
  city?: string;
  state: string;
  zipCode: number;
  shortDescription: string;
  longDescription: string;
  employmentStatus: string;
  paymentType?: string;
  hasCompensation: boolean;
  minSalary: number;
  maxSalary: number;
  minHourly?: number;
  maxHourly?: number;
  taxStatus: string;
  companyType: string;
  companyName: string;
  companyLogoURL?: string | null;
  contactEmail?: string;
  applyUrl?: string;
  directToCompanyUrl?: boolean | null;
  applyRequirePhone?: boolean | null;
  companyJobID?: string | null;
  companyIconLink?: string;
  facilityName?: string;
  createDate: Date;
  datePosted: Date;
  startDate?: string;
  expirationDate: Date;
  viewCount?: number;
  youtubeID?: string | null;
  salSigningBonus?: number;
  salSigningBonusBoolean?: boolean;
  salSigningBonusCommitmentReimbursement?: string;
  salTuitionReimbursement?: string;
  salTuitionReimbursementBoolean?: boolean;
  salPaidOvertime?: string;
  salWeeksPaidVacation?: string;
  salPaidCMETime?: string;
  salCMEAllowance?: string;
  salSalaryIncomeBoolean?: string;
  salEventualPartnership?: string;
  salEventualPartnershipBoolean?: boolean;
  salIncomeFullPartnerPractice?: string;
  salIncomeFeeForService?: string;
  salMedicalInsurance?: string;
  salRetirementPlan?: string;
  salMalpracticeInsurance?: string;
  salDisabilityInsurance?: string;
  salInterviewExpenses?: string;
  salRelocationAssistance?: string;
  salStudentLoan?: boolean;
  salStudentLoanInfo?: string;
  resShiftType?: [];
  resShiftDuration?: [];
  resScheduledCall?: boolean;
  resCallType?: string;
  resCallResponseTime?: string;
  resHowOftenFirstCall?: string;
  resDayOffAfterFirstCall?: string;
  resHowOftenSecondCall?: string;
  resProviderModel?: string;
  resDirectionSupervision?: string;
  resCaseMix?: [];
  resAnesthesiologistDirecting?: string;
  resAnesthesiologistPercentSolo?: string;
  resCRNAPerformLaborEpidurals?: string;
  resCRNADirectedByAnesthesiologist?: string;
  resLaborEpidurals?: string;
  resSpinalAnesthesia?: string;
  resRegionalBlocks?: string;
  resArterialCatheter?: string;
  resCentralVenousCatheter?: string;
  reqNewGrads?: boolean;
  reqStateLicense?: [];
  reqLifeSupportCard?: [];
  reqABACertification?: string;
  reqSubspecialtyFellowship?: [];
  reqVisaAccepted?: [];
  reqNBCRNACertification?: string;
  facAverageCredentialingTime?: string;
  facNumAnesthesiologists?: number;
  facNumCRNAs?: number;
  facNumAAs?: number;
  facGroupExclusiveContract?: string;
  facOtherSites?: [];
  facTrainingPrograms?: [];
  facFederalGovJob?: [];
  facAvgDailyCensus?: string;
  facNumLicensedBeds?: number;
  facNumSurgicalCasesYear?: number;
  facNumDeliveriesYear?: number;
  facCompanyInfo?: string;
  facHospitalInfo?: string;
  facCommunityInfo?: string;
}

export const jobPostingInits: JobPosting = {
  postPriority: 1,
  postStatus: 'Active',
  postEntryType: 'Manual',
  uid: '',
  random: 0,
  jobType: 'Anesthesiologist',
  state: 'Not Selected',
  zipCode: 0,
  shortDescription: '',
  longDescription: '',
  employmentStatus: 'Full Time',
  paymentType: 'Salary',
  hasCompensation: false,
  minSalary: 0,
  maxSalary: 0,
  minHourly: 0,
  maxHourly: 0,
  taxStatus: 'W-2',
  companyType: 'Default',
  companyName: 'Company',
  createDate: new Date(),
  datePosted: new Date(),
  expirationDate: new Date(),
  jobTypeLeadership: false,
  jobTypePain: false,
  facilityName: '',
  applyRequirePhone: false,
  companyJobID: null,
  youtubeID: null,
  salStudentLoan: false,
  salStudentLoanInfo: '',
};
