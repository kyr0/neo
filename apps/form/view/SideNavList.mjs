import List from '../../../src/list/Base.mjs';

/**
 * @class Form.view.SideNavList
 * @extends Neo.list.Base
 */
class SideNavList extends List {
    static config = {
        /**
         * @member {String} className='Form.view.SideNavList'
         * @protected
         */
        className: 'Form.view.SideNavList',
        /**
         * @member {Boolean} useHeaders=true
         */
        useHeaders: true
    }
}

Neo.applyClassConfig(SideNavList);

export default SideNavList;
