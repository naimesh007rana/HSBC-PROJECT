//script file HSBC ATM Search Test Scenario:  

class HSBCATM {

 //Scroll down to the bottom of the page   
Scrolldown(){
        cy.scrollTo('bottom');
    }

//Click on Find your nearest branch or ATM link in footer section
clickATM(){
    const atmclick=cy.get('a[href="/ways-to-bank/branches/"]');
    atmclick.contains('Find your nearest HSBC branch or ATM').click({force:true});
}

//Validate in new page the URL has String = ‘/ways-to-bank/branches/’
URLValid(value:any){
  cy.url().should('include',value);
}

//Validate Header as Branches & ATM
headervalid(value:any){
   const headerv =  cy.get('span[aria-label="Branches & ATMs"]');
   headerv.contains(value);
}

//Click on before Branch & ATM Locator button
ATMBTN(){
   const ATMbutton =  cy.get('#content_main_button_1');
   ATMbutton.click({force:true});
}

//Type country name as India
locationfield(){
    const countryname = cy.get('#searchInput');
    cy.wait(3000);
    countryname.type('india');
}

//In drop-down option click option India
selectIndia(){
    const indiaselect = cy.get('#autocomplete-results');
    indiaselect.contains('India').click();
}

//Validate ATM Header name is showing as Rajbhavan Road
ATMname(value:any){

    const ATMnameis = cy.contains(value);
}

//Click on add Show more results button
moreresult(){
   const resultbtnn = cy.get('button[aria-label="Show more results"]');
   resultbtnn.click();
}

//Check second ATM branch name tooltip as 2 in red color is getting displayed
tooltip2(value:any){
    const tooltip=cy.contains(value);
}

//Check Instagram in social media option in footer section
Instagram(){
   const insta =  cy.get('#content_socialmediafooterlink_1');
   insta.contains('HSBC India Instrgram Account This link will open in a new window');
}

//Check Facebook in social media option in footer section
Facebook(){
    cy.wait(2000);
    const facebooki=  cy.get('#content_socialmediafooterlink_2');
    facebooki.contains('HSBC India Facebook Account This link will open in a new window');
 }

 //Check Twitter in social media option in footer section
 Twitter(){
    const twitteri=  cy.get('#content_socialmediafooterlink_3');
    twitteri.contains('HSBC India Twitter Account This link will open in a new window');
 }

 //Check Youtube in social media option in footer section
 Youtube(){
    const youtubei=  cy.get('#content_socialmediafooterlink_4');
    youtubei.contains('HSBC India Youtube Account This link will open in a new window');
 }


 //Click on HSBC Logo
 HSBClogo(){
     const logoHSBC = cy.get('img[alt="HSBC India Bank"]');
     logoHSBC.eq(1).click({force:true});
 }

 //Validate page is navigating to home page by its title
 Homevalidation(){
    const hometitle = cy.get('title');
    hometitle.should('have.text','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
 }

 //Check and Click on Privacy link
 privacy(){
    const privacylink = cy.get('a[href="/privacy-statement/"]');
    privacylink.contains('Privacy Statement').click({force:true});
}

//Validate Privacy Statement as Header
Statementvalid(){
    const validity = cy.get('h1[class="A-TYP48T-RW-ALL text-container text "]');
    validity.contains('Privacy Statement');
}



    



    





}

export default HSBCATM