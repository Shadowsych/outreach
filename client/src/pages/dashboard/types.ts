import { ChatRoom } from '../chat';

export interface Dashboard {
  selectedChatId: string;
}

export interface BusinessOwner {
  id: string;
  firstName: string;
  lastName: string;
  businessName: string;
  minorityOwned: boolean;
  bio: string;
  storyBio: string;
  tags: string[];
  chatRooms: { items: ChatRoom[] };
}

export interface Investor {
  id: string;
  firstName: string;
  lastName: string;
  minMaxLoan: number[];
  bio: string;
  tags: string[];
  chatRooms: { items: ChatRoom[] };
}

export const isBusinessOwner = (object: any): object is BusinessOwner =>
  object && typeof object.businessName === 'string';

export const isInvestor = (object: any): object is Investor =>
  object && object.businessName === undefined && typeof object.firstName === 'string';