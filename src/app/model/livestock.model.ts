import { GeoPoint } from 'firebase/firestore';

export class Livestock {
  producer_name: string;
  producer_description: string;
  product_name: string;
  product_description: string;
  product_provenance: string;
  packaging_date: string;
  expiration_date: string;
  lot_number: string;
  category_type: string;
  weight: string;
  id: string;
  timeline: any[];
}
