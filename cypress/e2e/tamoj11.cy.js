describe('test suite', () => {
   beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login')
    })

  it.only('test case 01-register user', () => {
     let randomnumber=Math.random() 
     let email="tamriko+"+randomnumber+"@gmail.com"   
    cy.registration ("Tamari",email,"Dachi123")
    
    cy.get ('[data-qa="continue-button"]').click ()
    cy.contains (" Logged in as").should ("be.visible")
    cy.get ('[href="/delete_account"]').click ()
    cy.contains ("Account Deleted!").should ("be.visible")
   

  })

  it ('test case 02-login user', () => {
   
    cy.contains ("Login to your account").should("be.visible")
    cy.get ('[data-qa="login-email"]').type("tamoJikoTest12115@asds")
    cy.get ('[data-qa="login-password"]').type("Dachi2026")
    cy.get ('[data-qa="login-button"]').click ()
    cy.contains (" Logged in as").should ("be.visible")
   // cy.get ('[href="/delete_account"]').click ()
   // cy.contains ("Account Deleted!").should ("be.visible")
    


  })

  it ('test case 03-login user incorect email', () => {
   
    cy.contains ("Login to your account").should("be.visible")
    cy.get ('[data-qa="login-email"]').type("tamoJikoTest12265@asds")
    cy.get ('[data-qa="login-password"]').type("Dachi2226")
    cy.get ('[data-qa="login-button"]').click ()
    cy.contains ("Your email or password is incorrect!").should ("be.visible")
    


  })

  it ('test case 04-logout user', () => {
   
    cy.contains ("Login to your account").should("be.visible")
    cy.get ('[data-qa="login-email"]').type("tamoJikoTest12115@asds")
    cy.get ('[data-qa="login-password"]').type("Dachi2026")
    cy.get ('[data-qa="login-button"]').click ()
    cy.contains ("Logged in as").should ("be.visible")
    cy.get ('[href="/logout"]').click ()

    


  })

  it ('test case 05-Register User with existing email', () => {
   
    cy.contains ("New User Signup!").should("be.visible")
    cy.get ('[data-qa="signup-name"]').type("giorgiJiko")
    cy.get ('[data-qa="signup-email"]').type("tamoJikoTest12115@asds")
    cy.get ('[data-qa="signup-button"]').click ()
    cy.contains("Email Address already exist!").should ("be.visible")    
    
  })


})


// cvlileba