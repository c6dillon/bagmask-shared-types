export interface JobAlert {
  createDate: Date;
  activeDate: Date;
  RCavailableDate: Date;
  lastOnlineRC: Date;
  email: string;
  firstNameOrInitial: string;
  lastNameOrInitial: string;
  jobAlertId: string;
  notificationInterval: string;
  preferredEmployment: string[];
  preferredLocation: string[] | USState[];
  preferredNotification: string[];
  preferredJob: string;
  status: string;
  userId: string;
  mobileNumber?: string | null;
  allowRecruiters: string;
  interestedCities?: string | null;
  willingToTakeCall: string;
  shiftPreference?: string[];
  yearsExperience?: string;
}

export interface jobAlertState {
  stateCode: string;
  stateName: string;
}

export interface USState {
  abbreviation: string;
  stateName: string;
}
