package acme.ta.webservice.CustomWebService1

uses gw.xml.ws.annotation.WsiWebService
/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 23/4/20
 * Time: 12:57 PM
 * To change this template use File | Settings | File Templates.
 */
@WsiWebService
class ClaimSuspectinfo1 {

  function isThisFraud() : Boolean
  {
    return false
  }
  function claimHistory() : String
  {
    return " "
  }
  function getSuspectDetails1():Suspect1
  {
    return new Suspect1()
  }


}