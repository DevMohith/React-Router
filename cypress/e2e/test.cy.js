describe("My project test", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  // App loading correctly
  it("Should load the homepage successfully", () => {
    cy.visit("/");
    cy.contains("The Clothing Company").should("be.visible");
  });

  // it test checks if nested navs exist or not
  it("Should load the About page with navigation", () => {
    cy.visit("/about");
    cy.contains("About Us", { timeout: 5000 }).should("be.visible");
    cy.get('nav[data-testid="mini_switch"]').should("exist");
  });

  it("Should navigate to Info section", () => {
    cy.visit("/about/info");
    cy.contains("About Us").should("be.visible"); // Ensure Info section loads
  });

  it("Should navigate to Offers section", () => {
    cy.visit("/about/offers");
    cy.contains("Offers").should("be.visible"); // Ensure Offers section loads
  });

    

  it("it Should display products ONLY AFTER login", () => {
    cy.visit("/products");
    cy.get('[data-testid="login_button"]').click();

    cy.contains("Logout").should("be.visible");
    cy.visit("/Products");
  });

  // corrects product details display
  
  
    it("should display the correct product details when a product is clicked", () => {
      cy.visit("/products");
   
      // Login first
      cy.contains("Login").click();
      cy.wait(2500);
   
      cy.get(".products div").first().click();
   
      cy.url().should("include", "/products/");
      
    });


     // favourites test
    
     it("Should allow user to add and remove favourites", () => {
      // Step 1: Log in the user
      cy.visit("/");
      cy.get('[data-testid="login_button"]').click();
      cy.contains("Logout", { timeout: 5000 }).should("be.visible");
  
      // Step 2: Wait for login to fully process before visiting products
      cy.wait(2000);
      cy.visit("/products");
  
      // Step 3: Wait for products to load
      cy.get(".products div", { timeout: 8000 }).should("have.length.greaterThan", 0);
  
      // Step 4: Ensure favourite buttons exist
      cy.get(".fav-button").should("exist");
  
      // Step 5: Click on the first product's favourite button
      cy.get(".fav-button").first().click();
  
      // Step 6: Verify that the product is now a favourite (button should change to ❤️)
      cy.get(".fav-button").first().should("have.text", "❤️");
  
      // Step 7: Remove the product from favourites
      cy.get(".fav-button").first().click();
  
      // Step 8: Ensure the product is removed from favourites
      cy.get(".fav-button").first().should("have.text", "🤍");
    });
    

  
  
  });
  

