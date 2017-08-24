/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
var Countdown = require('./count');

interface MainPanelProps {
    onPressNavigate: () => void;
}

const styles = {
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

class MainPanel extends RX.Component<MainPanelProps, null> {
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

    constructor() {
        super();

        this._translationValue = new RX.Animated.Value(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
              toValue: 0,
              easing: RX.Animated.Easing.OutBack(),
              duration: 500
            }
        );

        animation.start();
    }

    render() {
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Animated.Text style={ [styles.heading, this._animatedStyle] }>
                       Classic Programming
                    </RX.Animated.Text>
                    <RX.Text style={ styles.subHeading }>
                        A lab 🔬 to learn data structures 🌲 in the best practicle way possible, by the collaboration of awesome programmers 😎 🎮 🖥
                    </RX.Text>
                    <RX.Text style={ styles.timer }>
                        <Countdown  targetDate={new Date('September 25, 2017')}
                            interval={1000}
                            timeSeparator={' : '}
                            format={{ day: 'DD', hour: 'HH', minute: 'MM', second: 'SS' }}
                            leadingZero = {true} />
                    </RX.Text>
                    
                    <RX.Link style={ styles.docLink } url={ 'https://github.com/classic-programming/classic-programming.github.io' }>
                        Github
                    </RX.Link>
                    <RX.Image style={[styles.images, { width: 400, height: 400 }]} source={'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'} />
                    {/* <RX.Button style={ styles.roundButton } onPress={ this._onPressNavigate }>
                        <RX.Text style={ styles.buttonText }>
                            See More Examples
                        </RX.Text>
                    </RX.Button> */}
                </RX.View>
            </RX.ScrollView>
        );
    }

    private _onPressNavigate = () => {
        this.props.onPressNavigate();
    }
}

export = MainPanel;
