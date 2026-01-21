export interface UserTypesI {
  totalUsers: number;
  distribution: Array<UserTypeDistributionI>;
}

export interface UserTypeDistributionI {
  type: string;
  percentage: string;
}
