describe('test suite', () => {
   beforeEach(() => {
    cy.visit('https://www.automationexercise.com/login')
    })

  it('test case 01-register user', () => {
         
    cy.contains ("New User Signup!").should("be.visible")
    cy.get ('[data-qa="signup-name"]').type("tamoJikoTest")
    cy.get ('[data-qa="signup-email"]').type("tamoJikoTest12105@asds")
    cy.get ('[data-qa="signup-button"]').click ()
    cy.contains ("Enter Account Information").should ("be.visible")
    cy.get ("#id_gender2").click()
    cy.get ('[data-qa="password"]').type("Dachi2026")
    cy.get ('[data-qa="days"]').select ("5")
    cy.get ('[data-qa="months"]').select ("12")
    cy.get ('[data-qa="years"]').select ("1980")
    cy.contains ("Sign up for our newsletter!").click ()
    cy.contains ("Receive special offers from our partners!").click ()
    cy.get ('[data-qa="first_name"]').type("Tamari")
    cy.get ('[data-qa="last_name"]').type("Jikia")
    cy.get ('[data-qa="company"]').type("HW")
    cy.get ('[data-qa="address"]').type("Digomi")
    cy.get ('[data-qa="address2"]').type("3 block 18")
    cy.get ('[data-qa="country"]').select ("United States")
    cy.get ('[data-qa="state"]').type("Texas")    
    cy.get ('[data-qa="city"]').type("Chicago")
    cy.get ('[data-qa="zipcode"]').type("60611")
    cy.get ('[data-qa="mobile_number"]').type("595321654")
    cy.get ('[data-qa="create-account"]').click ()
    cy.contains ("Account Created!").should ("be.visible")
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
