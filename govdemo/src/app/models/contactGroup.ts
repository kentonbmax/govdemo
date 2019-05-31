import { Contact } from "./contact";

export class ContactGroup {
  public email: string;
  public name: string;
  public enabled: boolean;
  public contacts: Contact[];
}