package acme.ta.enhancements.entity

uses gw.api.util.DateUtil
uses gw.api.util.Math
uses java.math.BigDecimal
uses java.lang.Double

/**
 * Created with IntelliJ IDEA.
 * User: santh
 * Date: 29/4/20
 * Time: 8:45 PM
 * To change this template use File | Settings | File Templates.
 */
enhancement SuspectDetails : entity.SuspectDetails_ext {

  property get Ages(): String {
    if (this.DateOfBirth == null) {
      return "Unknown"
    } else {
      var today = DateUtil.currentDate()
      var ageInDays = DateUtil.daysBetween(this.DateOfBirth, today)
      var ageInYears = Math.roundDown(ageInDays / 365)
      return ageInYears as java.lang.String
    }
  }
  property get FullName1():String
  {
    if(this.MiddleName==null)
    {
      return this.FirstName+" "+this.LastName
    }
    else if(this.FirstName==null)
    {
      return this.MiddleName+" "+this.LastName
    }
    else
    {
      return this.FirstName+" "+this.MiddleName
    }
   }



  property get HeightInInches1(): BigDecimal
  {
          if(this.HeightInMeters!=null)
          {
            return Math.roundNearest(this.HeightInMeters/0.0254) as Double
          }
          else
           {
             return 0.0
           }
  }
  property get GoverningAdd():String
  {

    print("hello world")
    print("welcome")
    return this.Governing


  }


}
