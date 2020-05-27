package libraries
/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 31/3/20
 * Time: 7:27 PM
 * To change this template use File | Settings | File Templates.
 */
enhancement SuspectAddressEnhancement_EXT : entity.SuspectAddress_EXT {

  property get completeAddress():String
  {
    return this.AddressLine1+" "+this.AddressLine2+" "+this.State
  }

}
