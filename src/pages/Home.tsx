/**
 * Home Page
 * ---------
 * Main landing page of the Multi-Theme App.
 * Fetches products from the Fake Store API and displays them in a responsive grid layout.
 *
 * Features:
 * - Uses styled-components for theme-based styles
 * - Fetches product data from https://fakestoreapi.com/products
 * - Renders products using the reusable ProductCard component
 * - Responsive grid layout that adapts to screen size
 */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductCard } from "../components/ProductCard";

/**
 * Container
 * ---------
 * Main wrapper for the Home page.
 * Applies theme-based background, text color, and font styles.
 * Adds spacing for the fixed header.
 */
const Container = styled.div`
  margin-top: 80px; /* Offset for fixed header */
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: ${({ theme }) => theme.font};
  min-height: 100vh;
`;

/**
 * Grid
 * ----
 * Responsive grid layout for displaying product cards.
 * Automatically adjusts the number of columns based on available screen width.
 */
const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

/**
 * Home Component
 * --------------
 * Fetches and displays products from the Fake Store API.
 */
export const Home: React.FC = () => {
  // State to store fetched products
  const [products, setProducts] = useState<any[]>([]);

  /**
   * useEffect hook runs once on component mount
   * - Fetches product data from Fake Store API
   * - Updates the products state with fetched data
   */
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <Container>
      {/* Page Title */}
      <h1>Welcome to Multi-Theme Store</h1>

      {/* Page Subtitle */}
      <p>Explore our collection from the Fake Store API.</p>

      {/* Responsive Product Grid */}
      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
};
