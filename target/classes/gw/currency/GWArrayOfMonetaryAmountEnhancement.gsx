package gw.currency

uses gw.pl.currency.MonetaryAmount

/**
 *  Copyright 2012 Guidewire Software, Inc.
 */
@Export
enhancement GWArrayOfMonetaryAmountEnhancement : MonetaryAmount[] {

  /**
   * Sums up the MonetaryAmount contents,
   *   which must all be of the default currency.
   *
   * Delete this method if you are running Multi-Currency mode!
   */
  function sum() : MonetaryAmount {
    return this.sum(gw.api.util.CurrencyUtil.getDefaultCurrency())
  }

  /**
   * Sums up the MonetaryAmount contents,
   *   which must all be of the specified currency.
   */
  function sum(currency : Currency) : MonetaryAmount {
    return this.sum(currency, \ amt -> amt)
  }

  /**
   * Return the average of the MonetaryAmount contents,
   *   which must all be of the default currency.
   *
   * Delete this method if you are running Multi-Currency mode!
   */
  function average() : MonetaryAmount {
    return this.toList().average( \ i -> i )
  }

  /**
   * Return the average of the MonetaryAmount contents,
   *   which must all be of the specified currency.
   */
  function average(currency : Currency) : MonetaryAmount {
    return this.toList().average(currency, \ amt -> amt)
  }
}