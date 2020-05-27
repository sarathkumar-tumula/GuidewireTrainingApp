package acme.ta.batch.legalreport

uses gw.processes.BatchProcessBase
uses gw.api.database.Query

/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 24/4/20
 * Time: 2:56 PM
 * To change this template use File | Settings | File Templates.
 */
class MyCreditReportBatchProcessImp1 extends  BatchProcessBase {
  construct(){
    super(BatchProcessType.TC_CREDITREPORTBATCHPROCESS_EXT)
  }

  override function doWork() {
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var contact=Query.make(ABContact).select().last()
      contact=bundle.add(contact)
      var account=new BankAccount()
      account.BankName="axis bank"
      account.AccountNumber="2164649558"
      account.AccountType="savings"
      account.RoutingNumber="859-745"
      contact.addToBankAccounts(account)
      print("bank details added successfully")
    })
  }
}