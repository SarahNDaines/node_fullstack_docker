export type GPOType = {
  id: string;
  name: string;
  domain?: string;
  owner?: string;
  created?: Date | null; // Changed to Date | null
  modified?: Date | null; // Changed to Date | null
  userRevision?: string;
  computerRevision?: string;
  status?: boolean;
};
  
export type ContactType = {
  id: number;
  name: string;
}