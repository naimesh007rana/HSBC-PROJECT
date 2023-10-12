class creditcard {

    hovermouse() {
        cy.contains('Banking').trigger('mouseover');
    }

    creditcardlink() {
        const cradlink = cy.get('h2[class="doormat-heading"]');
        cradlink.contains('Credit Cards').click({ force: true });
    }

    validcreditcard() {
        const validcard = cy.get('.A-TYP38L-RW-ALL');
        validcard.contains('Credit cards');
    }

    applybtn() {
        const applybuttons = cy.get('#listing_intro_button_1');
        applybuttons.contains('Apply now');
    }

    cardavailable() {
        cy.get('#listing_main_image_3').should('be.visible');
        cy.get('#listing_main_image_6').should('be.visible');
        cy.get('#listing_main_image_9').should('be.visible');
    }

    cardoneimage() {
        cy.get('img[id="listing_main_image_3"]').invoke('attr', 'alt').should('eq', 'HSBC Visa Cashback Credit Card');

    }

    cardoneheader() {
        const cardtext = cy.get('.A-LNKND38L-RW-ALL');
        cardtext.eq(0).contains('HSBC Cashback Credit Card');
    }

    comparecard() {
        const cardcompare = cy.get('#listing_main_button_1');
        cardcompare.contains('Compare cards');
    }

    findmorebtn() {
        const findmoreb = cy.get('#listing_main_button_2');
        findmoreb.contains('Find out more');
    }

    applynowbtn() {
        const applynowb = cy.get('#listing_main_button_3');
        applynowb.contains('Apply now for the HSBC Cashback Credit Card This link will open in a new window');

    }

    firstcompare() {
        const fisrtcombtn = cy.get('#listing_main_button_1');
        fisrtcombtn.click();
    }

    closebutton() {
        const CLSBTNs = cy.get('.close-button');
        CLSBTNs.contains('Close');

    }

    selectcardheader() {
        const crdhdr = cy.get('#title-pp_tools_productComparator_4');
        crdhdr.contains('Select cards to compare');
    }

    fourcardcmr() {
        const fourcard = cy.get('#subtitle-pp_tools_productComparator_5');
        fourcard.contains('You can choose up to 4');

    }

    checkboxclk() {
        const fst = cy.get('.modal-checkbox');
        fst.eq(0).click();
        const snd = cy.get('.modal-checkbox');
        snd.eq(1).click();
    }

    clickcomparebtn() {
        const comparebtnn = cy.get('.A-BTNP-RW-ALL')
        comparebtnn.click();
    }

    twocards(value:any) {
        cy.get('.title-loaded').should('have.length',value);
        
    }

    removelnk(value:any){
        cy.get('.clear-icon').should('have.length',value);
    }

    addcardlnk(){
        const cardlink=cy.get('.add-icon');
        cardlink.eq(0).click();
    }

    addtrdcrd(){
        const trdcrd = cy.get('.modal-checkbox');
        trdcrd.eq(2).click({force:true});
        cy.get('.A-BTNP-RW-ALL').click({force:true});
    }

    removelinkclk(){
        const rmvlnk=cy.get('.clear-icon');
        rmvlnk.eq(0).click({force:true}); 
    }

    agnadcards(){
        const agcd = cy.get('.add-icon')
        agcd.eq(0).click({force:true});
    }

    clsbtnclk(){
        const clsbtclt = cy.get('.close-button');
        clsbtclt.eq(0).click({force:true});
    }
   
        

}
export default creditcard