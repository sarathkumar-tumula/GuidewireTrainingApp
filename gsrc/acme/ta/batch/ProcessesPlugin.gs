package acme.ta.batch

uses gw.plugin.processing.IProcessesPlugin
uses gw.processes.BatchProcess
uses acme.ta.batch.legalreport.FlagOverdueLegalReportsBatch
uses acme.ta.batch.legalreport.MyCustomBatchProcessImp1
uses acme.ta.batch.legalreport.MyCreditReportBatchProcessImp1
uses acme.ta.batch.legalreport.MyBankDetailsBatchProcessImp

class ProcessesPlugin implements IProcessesPlugin {
  construct() {
  }

  override function createBatchProcess(type: BatchProcessType, arguments: Object[]): BatchProcess {
    switch (type) {
      case BatchProcessType.TC_FLAGOVERDUELEGALREPORTS:
          var myBatchProcess = new FlagOverdueLegalReportsBatch()
          return myBatchProcess
      case BatchProcessType.TC_CUSTOMBATCHPROCESS_EXT:
          return new MyCustomBatchProcessImp1()
      case BatchProcessType.TC_CREDITREPORTBATCHPROCESS_EXT:
          return new MyCreditReportBatchProcessImp1()
      case BatchProcessType.TC_BANKDETAILSBATCHPROCESS:
          return new MyBankDetailsBatchProcessImp()

        default:
        return null
    }
  }
}

// CurrDev: File Reference is TA80_INTG140_BatchProcess_Lab.docx