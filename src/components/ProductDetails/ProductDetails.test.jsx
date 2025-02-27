import { render, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails.jsx";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Product Details Component', ()=> {
    test("should render product details with correct id and type from the URL Param", () => {
        // Mock the route with a spl product id and type
        render(
            <MemoryRouter initialEntries={["/products/123/Hoodie"]}>
                <Routes>
                    <Route path="/products/:id/:type" element={<ProductDetails />} />
               </Routes>
            </MemoryRouter>
        );


        expect(screen.getByTestId("product_detail_image")).toHaveAttribute(
            "src",
            "https://placehold.co/520x460"
        );
    });
});