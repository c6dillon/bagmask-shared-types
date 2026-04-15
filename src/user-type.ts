export const PROVIDER_USER_TYPES = [
  'Anesthesiologist',
  'Anesthesia Resident',
  'CRNA',
  'SRNA',
  'CAA',
  'SAA',
] as const;

export const COMPANY_USER_TYPES = ['Job Poster', 'Recruiter'] as const;

export type ProviderUserType = (typeof PROVIDER_USER_TYPES)[number];
export type CompanyUserType = (typeof COMPANY_USER_TYPES)[number];
export type UserType = ProviderUserType | CompanyUserType;

export function isJobPosterUserType(
  userType?: string | null,
): userType is 'Job Poster' {
  return userType === 'Job Poster';
}

export function isRecruiterUserType(
  userType?: string | null,
): userType is 'Recruiter' {
  return userType === 'Recruiter';
}

export function isCompanyUserType(
  userType?: string | null,
): userType is CompanyUserType {
  return isJobPosterUserType(userType) || isRecruiterUserType(userType);
}

export function isProviderUserType(
  userType?: string | null,
): userType is ProviderUserType {
  return (
    typeof userType === 'string' &&
    (PROVIDER_USER_TYPES as readonly string[]).includes(userType)
  );
}

export function isUserType(userType?: string | null): userType is UserType {
  return isCompanyUserType(userType) || isProviderUserType(userType);
}
