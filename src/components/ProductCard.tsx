/**
 * ProductCard Component
 * ---------------------
 * A reusable card component for displaying individual product information.
 *
 * Features:
 * - Uses styled-components to dynamically apply theme colors
 * - Displays product image, title, and price
 * - Accepts a `product` prop with id, title, image, and price
 */

import React from "react";
import styled from "styled-components";

/**
 * Styled container for the product card.
 * Adapts its background and text color based on the current theme.
 */
const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

/**
 * Interface defining the shape of a Product object.
 */
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

/**
 * ProductCard Component
 *
 * @param product - The product object containing id, title, image, and price
 *
 * Example usage:
 * <ProductCard product={{ id: 1, title: "Shirt", image: "shirt.png", price: 19.99 }} />
 */
export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card>
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />

      {/* Product Title */}
      <h4>{product.title}</h4>

      {/* Product Price */}
      <p>${product.price}</p>
    </Card>
  );
};
