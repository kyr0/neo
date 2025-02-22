import Container            from '../../../../../src/container/Base.mjs';
import LivePreviewContainer from '../preview/PageCodeContainer.mjs';

/**
 * @class Portal.view.home.parts.HelloWorld
 * @extends Neo.container.Base
 */
class HelloWorld extends Container {
    static config = {
        /**
         * @member {String} className='Portal.view.home.parts.HelloWorld'
         * @protected
         */
        className: 'Portal.view.home.parts.HelloWorld',

        cls: ['page', 'hello-world'],
        /**
         * @member {Object} layout=null
         */
//        layout: null,

        responsiveConfig: {
            oldPhone: {maxWidth: 320},
            phone   : {maxWidth: 480},
            tablet  : {maxWidth: 770},
            medium  : {maxWidth: 840},
            large   : {minWidth: 841}
        },

        responsive: {
            medium: {layout: {ntype: 'vbox', align: 'stretch', pack: 'center'}},
            large : {layout: {ntype: 'hbox', align: 'stretch', pack: 'center'}}
        },

        /**
         * @member {Object[]} items
         */
        items: [{
            module: Container,
            flex  : '1',
            style : {padding: '2rem'},
            layout: {ntype: 'vbox', align: 'center', pack: 'center'},
            items : [{
                cls : 'neo-h1',
                id  : 'neo-hello-world-h1',
                flex: 'none',
                html: 'Hello World'
            }, {
                cls : 'neo-h2',
                flex: 'none',
                html: 'Your first code snippet'
            }, {
                cls : 'neo-content',
                flex: 'none',
                html: 'If you understand these lines, you are ready to start with Neo.mjs'
            }]
        }, {
            module: LivePreviewContainer,
            flex: 0.8,
            value : [
                "import Container from '../../../../src/container/Base.mjs';",
                "",
                "class MainView extends Container {",
                "    static config = {",
                "        className: 'Portal.view.MainView',",
                "        layout   : {ntype:'vbox', align:'stretch'},",
                "        items    : [{",
                "            module: Container,",
                "            html  : 'Hello World'",
                "        }]",
                "    }",
                "}",
                "",
                "Neo.setupClass(MainView);"
            ].join('\n')
        }]
    }
}

Neo.setupClass(HelloWorld);

export default HelloWorld;
