"use strict";
/*
* This file demonstrates a basic ReactXP app.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var RX = require("reactxp");
var Countdown = require('./count');
var styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    container: RX.Styles.createViewStyle({
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    heading: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        color: '#414141',
        marginBottom: 28
    }),
    subHeading: RX.Styles.createTextStyle({
        fontSize: 16,
        marginBottom: 12,
        color: '#A9A9A9'
    }),
    timer: RX.Styles.createTextStyle({
        fontSize: 36,
        fontWeight: 'bold',
        color: '#414141',
        marginTop: 30,
        marginBottom: 30
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    images: RX.Styles.createImageStyle({}),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    })
};
var MainPanel = (function (_super) {
    __extends(MainPanel, _super);
    function MainPanel() {
        var _this = _super.call(this) || this;
        _this._onPressNavigate = function () {
            _this.props.onPressNavigate();
        };
        _this._translationValue = new RX.Animated.Value(-100);
        _this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: _this._translationValue
                }
            ]
        });
        return _this;
    }
    MainPanel.prototype.componentDidMount = function () {
        var animation = RX.Animated.timing(this._translationValue, {
            toValue: 0,
            easing: RX.Animated.Easing.OutBack(),
            duration: 500
        });
        animation.start();
    };
    MainPanel.prototype.render = function () {
        return (RX.createElement(RX.ScrollView, { style: styles.scroll },
            RX.createElement(RX.View, { style: styles.container },
                RX.createElement(RX.Animated.Text, { style: [styles.heading, this._animatedStyle] }, "Classic Programming"),
                RX.createElement(RX.Text, { style: styles.subHeading }, "A lab \uD83D\uDD2C to learn data structures \uD83C\uDF32 in the best practicle way possible, by the collaboration of awesome programmers \uD83D\uDE0E \uD83C\uDFAE \uD83D\uDDA5"),
                RX.createElement(RX.Text, { style: styles.timer },
                    RX.createElement(Countdown, { targetDate: new Date('September 25, 2017'), interval: 1000, timeSeparator: ' : ', format: { day: 'DD', hour: 'HH', minute: 'MM', second: 'SS' }, leadingZero: true })),
                RX.createElement(RX.Link, { style: styles.docLink, url: 'https://github.com/classic-programming/classic-programming.github.io' }, "Github"),
                RX.createElement(RX.Image, { style: [styles.images, { width: 400, height: 400 }], source: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif' }))));
    };
    return MainPanel;
}(RX.Component));
module.exports = MainPanel;
//# sourceMappingURL=MainPanel.js.map