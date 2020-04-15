(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{b1EY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("4cIV"),n("NZyX"),n("c0Gx"),n("QNbk"),n("+ytS"),n("WY76");var a=n("V0Ug"),r=n("sN0p");n("xH0s");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/gestures.mdx"}});var o={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(s,l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"gestures"},"Gestures"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"withoffset"},Object(a.b)("inlineCode",{parentName:"h2"},"withOffset()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"export declare const withOffset: (value: Animated.Node<number>, state: Animated.Value<State>, offset?: Animated.Value<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Decorates animated value from the pan gesture handler so that its position is memorized accross touches."),Object(a.b)("p",null,"--"),Object(a.b)("h2",{id:"withscaleoffset"},Object(a.b)("inlineCode",{parentName:"h2"},"withScaleOffset()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"export declare const withScaleOffset: (value: Animated.Node<number>, state: Animated.Value<State>, offset?: Animated.Value<number>) => Animated.Node<number>;\n")),Object(a.b)("p",null,"Decorates animated value from the pinch gesture handler so that its scale value is memorized accross touches.\nThis function differs from ",Object(a.b)("inlineCode",{parentName:"p"},"withOffset")," because it uses multiplication instead of additions.\nTranslations start from 0 and are added on top of each other whereas scale transformations start from 1 and are multiplied on top of each other."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"onscrollevent"},Object(a.b)("inlineCode",{parentName:"h2"},"onScrollEvent()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"export declare const onScrollEvent: (contentOffset: {\n    x?: Animated.Node<number> | undefined;\n    y?: Animated.Node<number> | undefined;\n}) => (...args: any[]) => void;\n")),Object(a.b)("p",null,"Returns a reanimated event handler for the ScrollView."),Object(a.b)("p",null,"Example usage for a vertical ",Object(a.b)("inlineCode",{parentName:"p"},"ScrollView"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"<Animated.ScrollView onScroll={onScrollEvent({ y: new Value(0) })} />\n")),Object(a.b)("p",null,"And for a horizontal one."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"<Animated.ScrollView onScroll={onScrollEvent({ x: new Value(0) })} horizontal />\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"ongestureevent"},Object(a.b)("inlineCode",{parentName:"h2"},"onGestureEvent()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"export declare const onGestureEvent: (nativeEvent: Partial<Adaptable<GestureHandlerStateChangeNativeEvent & TapGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & LongPressGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & ForceTouchGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & PanGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & PinchGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & RotationGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & FlingGestureHandlerEventExtra>>) => {\n    onHandlerStateChange: (...args: any[]) => void;\n    onGestureEvent: (...args: any[]) => void;\n};\n")),Object(a.b)("p",null,"Returns a reanimated event handler for any Gesture handler event handler.\nExample usage for a vertical ",Object(a.b)("inlineCode",{parentName:"p"},"PanGestureHandler"),"."),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const translationX = new Value(0);\nconst state = new Value(State.UNDETERMINED);\nconst gestureHandler = onGestureEvent({ translationX, state });\nreturn <PanGestureHandler {...gestureHandler} />;\n")),Object(a.b)("hr",null),Object(a.b)("h2",{id:"pinchbegan"},Object(a.b)("inlineCode",{parentName:"h2"},"pinchBegan()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const pinchBegan: (state: Animated.Node<State>) => Animated.Node<1 | 0>;\n")),Object(a.b)("p",null,"Returns one if the state of the gesture is BEGAN. Is equivalent to ",Object(a.b)("inlineCode",{parentName:"p"},"eq(state, State.BEGAN)")," on iOS.\nOn Android, this function takes into account a small inconsistency where the ",Object(a.b)("inlineCode",{parentName:"p"},"focalX")," and ",Object(a.b)("inlineCode",{parentName:"p"},"focalY")," values are not available\nat ",Object(a.b)("inlineCode",{parentName:"p"},"BEGAN")," but rather in ",Object(a.b)("inlineCode",{parentName:"p"},"ACTIVE"),". See ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/kmagiera/react-native-gesture-handler/issues/553"}),"https://github.com/kmagiera/react-native-gesture-handler/issues/553"),"."),Object(a.b)("p",null,"--"),Object(a.b)("h2",{id:"pinchactive"},Object(a.b)("inlineCode",{parentName:"h2"},"pinchActive()")),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-tsx"}),"const pinchActive:  (state: Animated.Node<State>) => Animated.Node<1 | 0>;\n")),Object(a.b)("p",null,"Returns one if the gesture is active (and doesn't overlap with ",Object(a.b)("inlineCode",{parentName:"p"},"pinchBegan"),")."))}c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/gestures.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-gestures-mdx-4195ebb54d6bd3b54b42.js.map