

export default interface itemType {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  description: string;
  slug: string;
  discountPercentage: string;
  stockLevel: number;
  category: string;
}

export default interface Props {
  params: {
    slug: string;
  };
}