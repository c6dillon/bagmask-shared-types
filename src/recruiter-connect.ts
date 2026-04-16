import { UserType } from './user-type';

export interface FirestoreTimestampLike {
  toDate(): Date;
}

export type RecruiterConnectUnreadReminderStage = '24h' | '3d' | '7d';

export interface RecruiterConnectUnreadReminderState {
  firstUnreadAt?: FirestoreTimestampLike | Date;
  lastUnreadMessageAt?: FirestoreTimestampLike | Date;
  lastReminderSentAt?: FirestoreTimestampLike | Date;
  nextReminderAt?: FirestoreTimestampLike | Date;
  lastReminderStage?: RecruiterConnectUnreadReminderStage;
  reminderCount?: number;
  suppressedAt?: FirestoreTimestampLike | Date;
}

export interface RecruiterConnectConversation {
  participants: string[];
  lastUpdated: FirestoreTimestampLike | Date;
  providerResponded: boolean;
  providerAgreed: boolean;
  lastEmailSent?: { [userId: string]: string };
  lastReadAtByUser?: { [userId: string]: FirestoreTimestampLike | Date };
  unreadBy?: string[];
  archivedBy?: string[];
  otherUserId?: string;
  otherUserCompanyId?: string;
  otherUserInitials?: string;
  otherUserEmail?: string;
  otherUserName?: string;
  otherUserCompanyName?: string;
  otherUserType?: 'PROVIDER' | UserType;
  id?: string;
  currentUserId?: string;
  isPaidFor: boolean;
  isActive?: boolean;
  companyOrGroup?: string;
  userType?: UserType;
  preferredEmployment?: string;
  preferredLocations?: string;
  preferredStates?: string;
  yearsExperience?: string;
  shiftPreference?: string;
  willingToTakeCall?: string;
  mobileNumber?: string | null;
  unreadMessageCount?: number;
  unreadReminderByUser?: { [userId: string]: RecruiterConnectUnreadReminderState };
}

export interface RecruiterConnectMessage {
  content: string;
  senderId: string;
  timestamp: Date | FirestoreTimestampLike;
  type?: string;
}
