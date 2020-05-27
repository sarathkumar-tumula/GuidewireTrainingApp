package acme.ta.webservice.customWebService

uses gw.xml.ws.annotation.WsiExportable
/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 30/12/19
 * Time: 9:41 AM
 * To change this template use File | Settings | File Templates.
 */

@WsiExportable
final class Suspect {
  var name: String
  var age: int
  var desc: String
  construct()
  {

  }

}