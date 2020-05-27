package acme.ta.batch.legalreport

uses gw.processes.BatchProcessBase
uses gw.api.database.Query

/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 22/5/20
 * Time: 1:16 PM
 * To change this template use File | Settings | File Templates.
 */
class MyBankDetailsBatchProcessImp extends  BatchProcessBase
{
      construct()
      {
        super(BatchProcessType.TC_BANKDETAILSBATCHPROCESS)
      }
  override function doWork()
  {
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var contact=Query.make(SuspectDetails_ext).select().last()
      contact=bundle.add(contact)
      var account=new SuspectBankAccount_Ext()
      account.BankName="andra bank"
      account.AccountNumber="0895748569"
      account.AccountType="Checking"
      account.RoutingNumber="265-662"
      contact.addToSuspectAccounts(account)
      print("bank details added successfully")
      })

  }
}
