import { contains } from "cypress/types/jquery";

class Loginpage {

    logovalid(){
        const HSBClogo = cy.get('img[alt="HSBC India Bank"]');
        HSBClogo.should('be.visible');
    }

    Homepagetitle(){
        const title = cy.get('title');
        title.should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    }

    clicklogin(){
        cy.get('.login-button').eq(1).click({force: true});
    }

    Logon(){
        cy.get('.heading').contains('Log On');
    }

    continue(){
        const button = cy.get('#username_submit_btn');
        button.should('not.be.enabled');
    }

    username(value:any){
        const email = cy.get('#username');
        email.clear();
        email.type(value);
        return this
    }

    continueEnabled(){
        const buttonE = cy.get('#username_submit_btn');
        buttonE.should('be.enabled');
    }

    remember_me(){
        const rememberme = cy.get('#rememberMe');
        rememberme.should('not.be.checked');
    }

    quemarktool(){
        const quemark = cy.get('.help-icon');
        quemark.should('be.visible');

    }

    tooltipclick(){
       const queclick = cy.get('.help-icon')
       queclick.click();
    }

    usernamevalidation(){
        const textuser = cy.get('h3');
        textuser.should('have.text','Username');
    }

    closebutton(){
        const closeb = cy.get('#Close_dob_exception');
        closeb.should('exist');
    }

   Closeclick(){
      const closebtn =cy.get('#Close_dob_exception');
       closebtn.click({force:true});
     }









}

export default Loginpage