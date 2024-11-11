/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "keep-react";
const ProductCart = ({ brand, img, description, title }) => {
  return (
    <Card>
      <CardHeader>
        <img src={img} className="rounded-t-xl w-80 h-80" alt="image" />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Button>{brand}</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCart;
