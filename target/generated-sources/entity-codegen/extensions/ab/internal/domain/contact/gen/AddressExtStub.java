
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.ab.domain.contact.impl.AddressCoreExtImpl;
import extensions.ab.internal.domain.contact.impl.AddressExtInternal;
import extensions.ab.internal.domain.contact.impl.GlobalAddressExtInternal;
import extensions.ab.internal.domain.contact.impl.GlobalAddressExtMethodsImpl;

public class AddressExtStub
    extends AddressCoreExtImpl
    implements AddressExtInternal, GlobalAddressExtInternal
{


    @Override
    public String getAddressLine1Kanji() {
        return getExtensionDelegate(GlobalAddressExtMethodsImpl.class).getAddressLine1Kanji();
    }

    @Override
    public void setAddressLine1Kanji(String value) {
        getExtensionDelegate(GlobalAddressExtMethodsImpl.class).setAddressLine1Kanji(value);
    }

    @Override
    public String getAddressLine2Kanji() {
        return getExtensionDelegate(GlobalAddressExtMethodsImpl.class).getAddressLine2Kanji();
    }

    @Override
    public void setAddressLine2Kanji(String value) {
        getExtensionDelegate(GlobalAddressExtMethodsImpl.class).setAddressLine2Kanji(value);
    }

    @Override
    public String getCityKanji() {
        return getExtensionDelegate(GlobalAddressExtMethodsImpl.class).getCityKanji();
    }

    @Override
    public void setCityKanji(String value) {
        getExtensionDelegate(GlobalAddressExtMethodsImpl.class).setCityKanji(value);
    }

    @Override
    public Boolean isCEDEX() {
        return getExtensionDelegate(GlobalAddressExtMethodsImpl.class).isCEDEX();
    }

    @Override
    public void setCEDEX(Boolean value) {
        getExtensionDelegate(GlobalAddressExtMethodsImpl.class).setCEDEX(value);
    }

    @Override
    public String getCEDEXBureau() {
        return getExtensionDelegate(GlobalAddressExtMethodsImpl.class).getCEDEXBureau();
    }

    @Override
    public void setCEDEXBureau(String value) {
        getExtensionDelegate(GlobalAddressExtMethodsImpl.class).setCEDEXBureau(value);
    }

}
