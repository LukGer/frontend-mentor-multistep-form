export interface AddOn {
  title: string;
  subTitle: string;
  price: number;
  enabled: boolean;
}

export interface Form {
  plan: string;
  planPrice: number;
  yearlyBilling: boolean;
  addOns: AddOn[];
}
