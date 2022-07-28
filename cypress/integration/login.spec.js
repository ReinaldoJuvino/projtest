/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it("senha e nome vazios", () => {
        cy.get("#login2").click({ force: true });
    
        cy.get("#loginusername").type(" ");
        cy.get("#loginpassword").type(" ");
    
        cy.get("button[type=button]").contains("Log in").click({ force: true });
    
        cy.on("window:alert", (str) => {
          expect(str).to.equal("Please fill out Username and Password.");
          cy.get('[name="alert"]').click();
        });
    });

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type
        cy.get('#txtUsername').type(
            "fnoewnf"
        )
        cy.get('#txtPassword').type(
            "fnoewnf"
        )
        cy.get('#btnLogin').click(
            {force: true}
        )
        cy.get('#spanMessage').should(
            'have.text','Invalid credentials'
        )
    });

    it('credenciais invalidas', () => {
        cy.get("#login2").click({ force: true });
    
        cy.get("#loginusername").type("usuario invalido");
        cy.get("#loginpassword").type("senha invalida");
    
        cy.get("button[type=button]").contains('Log in').click({force:true});
    
        cy.on("window:alert", (str) => {
          expect(str).to.equal("User does not exist.");
          cy.get('[name="alert"]').click();
        });
      });

      it("senha invalida", () => {
        cy.get("#login2").click({ force: true });
    
        cy.get("#loginusername").type("teste1234567");
        cy.get("#loginpassword").type("senha invalida");
    
        cy.get("button[type=button]").contains("Log in").click({ force: true });
    
        cy.on("window:alert", (str) => {
          expect(str).to.equal("Wrong password.");
          cy.get('[name="alert"]').click();
        });
      });
    
     
    
      it("senha e nome validos", () => {
        cy.get("#login2").click({ force: true });
    
        cy.get("#loginusername").type("teste1234567");
        cy.get("#loginpassword").type("test");
    
        cy.get("button[type=button]").contains("Log in").click({ force: true });
    
        cy.on("#nameofuser", (str) => {
          expect("str").to.equal("Bem-vindo teste1234567");
        });
      });
    
      it("nome de usuario invalido", () => {
        cy.get("#login2").click({ force: true });
    
        cy.get("#loginusername").type("usuario invalido");
        cy.get("#loginpassword").type("test");
    
        cy.get("button[type=button]").contains("Log in").click({ force: true });
    
        cy.on("window:alert", (str) => {
          expect(str).to.equal("User does not exist.");
          cy.get('[name="alert"]').click();
        });
      });
    
      
})
