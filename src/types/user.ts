export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  street: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;
  status: "active" | "inactive";
  role: string;
  joinedAt: string;
  avatar?: string;
}