
package extensions.ab.internal.domain.contact.gen;

import com.guidewire.pl.domain.contact.impl.PlaceImpl;
import extensions.ab.internal.domain.contact.impl.ContactExtInternal;
import extensions.ab.internal.domain.contact.impl.GlobalContactNameExtInternal;
import extensions.ab.internal.domain.contact.impl.GlobalContactNameExtMethodsImpl;

public class PlaceExtStub
    extends PlaceImpl
    implements ContactExtInternal, GlobalContactNameExtInternal
{


    @Override
    public String getNameKanji() {
        return getExtensionDelegate(GlobalContactNameExtMethodsImpl.class).getNameKanji();
    }

    @Override
    public void setNameKanji(String value) {
        getExtensionDelegate(GlobalContactNameExtMethodsImpl.class).setNameKanji(value);
    }

}
