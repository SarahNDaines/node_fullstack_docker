import { GPOType } from "../types/types";

export class GPO implements GPOType {
  id: string;
  name: string;
  domain: string;
  owner: string;
  created: Date | null;
  modified: Date | null;
  userRevision: string;
  computerRevision: string;
  status: boolean;

  constructor(
    id: string,
    name: string,
    domain?: string,
    owner?: string,
    created?: Date | null,
    modified?: Date | null,
    userRevision?: string,
    computerRevision?: string,
    status?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.domain = domain || "";
    this.owner = owner || "";
    this.created = created || null;
    this.modified = modified || null;
    this.userRevision = userRevision || "";
    this.computerRevision = computerRevision || "";
    this.status = status || false;
  }

  // Static method to create an instance from a database row
  static fromRow(row: {
    id: string;
    name: string;
    domain: string;
    owner: string;
    created: Date | null;
    modified: Date | null;
    userRevision: string;
    computerRevision: string;
    status: boolean;
  }): GPO {
    return new GPO(row.id, row.name, row.domain, row.owner, row.created, row.modified, row.userRevision, row.computerRevision, row.status);
  }
}
