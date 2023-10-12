import Loginpage from './HSBC'
import HSBCATM from './HSBC_ATM'
import creditcard from './Credit_card'

describe('Automating the HSBC Banking Application Using Cypress ', () => {
  
  beforeEach(()=> {
    cy.visit('https://www.hsbc.co.in/');
  })
  
  
  it('should pass HSBC Login Test Scenario', () => {
    const login = new Loginpage();
    login.logovalid();
    login.Homepagetitle();
    login.clicklogin();
    login.Logon();
    login.continue();
    login.username('xyz@gmail.com');
    login.continueEnabled();
    login.remember_me();
    login.quemarktool();
    login.tooltipclick();
    login.usernamevalidation();
    login.closebutton();
    login.Closeclick();

  })

  it('should PASS HSBC ATM Search Test Scenario',()=>{
   const ATM = new HSBCATM();
   ATM.Scrolldown();
   ATM.clickATM();
   ATM.URLValid('/ways-to-bank/branches/');
   ATM.headervalid('Branches & ATMs');
   ATM.ATMBTN();
   ATM.locationfield();
   ATM.selectIndia();
   ATM.ATMname('Rajbhavan Road');
   ATM.moreresult();
   ATM.tooltip2('Amar Avinash Corporate City Branch');
   ATM.Instagram();
   ATM.Facebook();
   ATM.Twitter();
   ATM.Youtube();
   ATM.HSBClogo();
   ATM.Scrolldown();
   ATM.privacy();
   ATM.Statementvalid();
   
 })

 it('should pass HSBC Credit Card Flow', () => {
  const card = new creditcard();
  card.hovermouse();
  card.creditcardlink();
  card.validcreditcard();
  card.applybtn();
  card.cardavailable();
  card.cardoneimage();
  card.cardoneheader();
  card.comparecard();
  card.findmorebtn();
  card.applynowbtn();
  card.firstcompare();
  card.closebutton();
  card.selectcardheader();
  card.fourcardcmr();
  card.checkboxclk();
  card.clickcomparebtn();
  card.twocards(2);
  card.removelnk(2);
  card.addcardlnk();
  card.addtrdcrd();
  card.twocards(3);
  card.removelnk(3);
  card.removelinkclk();
  card.twocards(2);
  card.agnadcards();
  card.clsbtnclk();
    

})







})