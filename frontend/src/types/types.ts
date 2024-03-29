export type CustomerType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  createdAt: Date;
};

export type CategoryType = {
  id: string;
  name: string;
  createdAt: Date;
};

export type ServiceType = {
  id: string;
  name: string;
  price: string;
  duration: string;
  category: CategoryType;
  createdAt: Date;
};

export type bookType = {
  id: string;
  customer: CustomerType;
  service: ServiceType;
  startDate: Date;
  endDate: Date;
  realDuration: String;
  realPrice: Number;
  createdAt: Date;
};
