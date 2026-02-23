class McBasketballTest {
    constructor(runtime) {
        this.runtime = runtime;
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "McBasketballTest.name":"篮球の测试拓展",
                "McBasketballTest.test":"测试积木"
            },
            "en": {
                "McBasketballTest.name":"basketball test extension",
                "McBasketballTest.test":"test block"
            }
        })
    }
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }
    getInfo() {
        return {
            id : "McBasketballTest",
            name: this.formatMessage("McBasketballTest.name"),
            color1: "#EC3838",
            color2: "#B32B2B",
            blocks: [
                {
                    opcode: "test",
                    blockType: "reporter",
                    text: this.formatMessage("McBasketballTest.test")
                }
            ]
        }
    }
    test() {
        return 0;
    }
    
}
window.tempExt = {
    Extension: McBasketballTest,
    info: {
        name: "McBasketballTest.name",
        description: "McBasketballTest.descp",
        extensionId: "McBasketballTest",
        featured: true,
        disabled: false,
        collaborator: "MC篮球 @ CCW"
    },
    l10n: {
        "zh-cn": {
            "McBasketballTest.name": "篮球の测试",
            "McBasketballTest.descp": "测试测试测试测试测试"
        },
        en: {
            "McBasketballTest.name": "basketball test",
            "McBasketballTest.descp": "test"
        }
    }
};
