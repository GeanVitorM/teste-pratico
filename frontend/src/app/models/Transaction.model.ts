export interface Transaction {
  id: number;
  type: string;
  amount: number;
  description: string;
  created_at?: string;
  updated_at?: string;
}
