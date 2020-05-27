package acme.ta.webservice.customWebService

uses gw.xml.ws.annotation.WsiWebService
/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 30/12/19
 * Time: 9:29 AM
 * To change this template use File | Settings | File Templates.
 */
@WsiWebService
class ClaimSuspectsInfo {

  function isThisFraud() : Boolean {
  return false
 }
  function claimsHistory() : String {
    return ""
  }
  function getSuspectDetails() :  Suspect {
    return new Suspect()
  }

}