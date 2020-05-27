
package extensions.ab.internal.domain.community.gen;

import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import gw.entity.IColumnPropertyInfo;
import gw.pl.community.entity.UserSearchCriteria;
import gw.pl.persistence.type.EntityPropertyInfoReference;

public interface UserSearchCriteriaExtMethodsStubI {

    EntityPropertyInfoReference<IColumnPropertyInfo> GROUPNAMEKANJI_PROP = new ColumnPropertyInfoCache(UserSearchCriteria.TYPE, "GroupNameKanji");

    /**
     * Gets the value of the GroupNameKanji field.
     * Name of group the user belongs to in Kanji. Used only for Japanese.
     * 
     */
    String getGroupNameKanji();

    /**
     * Sets the value of the GroupNameKanji field.
     * 
     */
    void setGroupNameKanji(String value);

}
