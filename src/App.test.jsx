import { describe, expect } from "vitest";
import  App from "./App.jsx"
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";



const renderWithRouter = (component) => {
     return render(<BrowserRouter>{component}</BrowserRouter>);
    
};

describe("App Component", () => {
    test("should render the App and navigation Link", () => {
        renderWithRouter(<App />);
        expect(screen.getByTestId("brandName")).toHaveTextContent("The Clothing Company");

        expect(screen.getByTestId("Home_Link")).toBeInTheDocument();
        expect(screen.getByTestId("About_Link")).toBeInTheDocument();
        expect(screen.getByTestId("Product_Link")).toBeInTheDocument();

        expect(screen.getByRole("button")).toHaveTextContent("Login");
    });

    test("should navigate to About page when clicked", async () => {
        renderWithRouter(<App />);
        fireEvent.click(screen.getByTestId("About_Link"));

        await waitFor(() => {
            expect(screen.getByText(/About Us/i)).toBeInTheDocument();
        });
    });

    test("should handle login and logout", async () => {
        renderWithRouter(<App />);
        const loginButton = screen.getByTestId("login_button");
    
        // Ensure button initially shows "Login"
        expect(loginButton).toHaveTextContent("Login");
    
        // Click login button
        fireEvent.click(loginButton);
    
        // First, wait for the loading animation
        await waitFor(() => {
            expect(screen.getByTestId("loader")).toBeInTheDocument();
        });
    
        // Then, wait for the button to change to "Logout"
        await waitFor(() => {
            expect(loginButton).toHaveTextContent("Logout");
        }, { timeout: 3000 }); // Ensure it waits for at least 2 seconds
    
        // Click logout button
        fireEvent.click(loginButton);
    
        // Wait for the logout to complete and change back to "Login"
        await waitFor(() => {
            expect(loginButton).toHaveTextContent("Login");
        }, { timeout: 3000 });
    });
    
    });