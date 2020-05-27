package acme.ta.batch.legalreport

uses gw.processes.BatchProcessBase
uses gw.api.database.Query

/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 24/4/20
 * Time: 11:29 AM
 * To change this template use File | Settings | File Templates.
 */
class MyCustomBatchProcessImp1 extends BatchProcessBase {
  construct(){
    super(BatchProcessType.TC_CUSTOMBATCHPROCESS_EXT)
  }
  override function doWork() {
    gw.transaction.Transaction.runWithNewBundle(\bundle -> {
      var contact=Query.make(ABContact).select().last()
      contact=bundle.add(contact)
      var history=new HistoryEntry()
      history.Description="Savings bank from batch"
      history.EventType=HistoryEventType.TC_ASSIGNED
      contact.addToHistoryEntries(history)

    print("done")
    })

  }
}