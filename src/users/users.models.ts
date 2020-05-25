import Joi from "@hapi/joi";
import { Permission } from "../permissions/permissions.models";

export interface User {
  userId: string;
  organizationId: string;
  email: string;
  firstname: string;
  lastname: string;
  permissions: Permission[];
}

export interface UserJson {
  user_id: string;
  organization_id: string;
  email: string;
  firstname: string;
  lastname: string;
}

export interface UserRecord {
  user_id: string;
  organization_id: string;
  email: string;
  firstname: string;
  lastname: string;

  creation_date: Date;
  creation_user_id: string;
  motification_date: Date;
  motification_user_id: string;
}

export const saveUserSchema = Joi.object<UserJson>({
  organization_id: Joi.string().required(),
  email: Joi.string().required()
});
