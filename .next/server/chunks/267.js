exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 7267:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Section; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 1 modules
var Box = __webpack_require__(2014);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/components/BackgroundImage.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  root: {
    content: "",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    zIndex: 0
  }
}));

function BackgroundImage(props) {
  const classes = useStyles();

  const {
    image,
    opacity
  } = props,
        otherProps = _objectWithoutProperties(props, ["image", "opacity"]);

  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread({
    className: classes.root,
    style: {
      backgroundImage: `url(${image})`,
      opacity: opacity
    }
  }, otherProps));
}

/* harmony default export */ var components_BackgroundImage = (BackgroundImage);
// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__(5327);
// EXTERNAL MODULE: external "@material-ui/core/utils/capitalize"
var capitalize_ = __webpack_require__(6832);
var capitalize_default = /*#__PURE__*/__webpack_require__.n(capitalize_);
;// CONCATENATED MODULE: ./src/components/Section.js



function Section_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Section_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Section_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Section_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Section_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Section_ownKeys(Object(source), true).forEach(function (key) { Section_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Section_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Section_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Section_useStyles = (0,makeStyles/* default */.Z)(theme => Section_objectSpread(Section_objectSpread({
  root: {
    position: "relative",
    // Ensure child <Container> is above background
    // image (if one is set with the bgImage prop).
    "& > .MuiContainer-root": {
      position: "relative"
    }
  }
}, [["default", theme.palette.background.default], ["light", (0,colorManipulator_.emphasize)(theme.palette.background.default, 0.03)], ["primary", theme.palette.primary.main], ["secondary", theme.palette.secondary.main]].reduce((acc, [name, value]) => {
  acc[`color${capitalize_default()(name)}`] = {
    backgroundColor: value,
    // Ensure text is legible on background
    color: theme.palette.getContrastText(value),
    // Sibling selector that adds a top border if section above
    // has the same color class.
    // We use emphasize to compute border based on background color
    // and make sure it's always lightly visible.
    [`& + &`]: {
      borderTop: `1px solid ${(0,colorManipulator_.emphasize)(value, 0.09)}`
    }
  };
  return acc;
}, {})), {}, {
  colorInherit: {
    color: "inherit"
  },
  colorTransparent: {
    backgroundColor: "transparent",
    color: "inherit"
  }
}));

function Section(props) {
  const classes = Section_useStyles();

  const {
    bgColor = "default",
    bgImage,
    bgImageOpacity,
    size = "normal",
    className,
    children
  } = props,
        otherProps = Section_objectWithoutProperties(props, ["bgColor", "bgImage", "bgImageOpacity", "size", "className", "children"]); // Get MUI responsize size object based
  // on size prop (normal, medium, large, auto)


  const verticalPadding = {
    normal: {
      xs: 6
    },
    medium: {
      xs: 6,
      sm: 10
    },
    large: {
      xs: 6,
      sm: 20
    },
    auto: 0
  }[size];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Box/* default */.Z, Section_objectSpread(Section_objectSpread({
    component: "section",
    py: verticalPadding,
    className: classes.root + ` ${classes[`color${capitalize_default()(bgColor)}`]}` + (className ? ` ${className}` : "")
  }, otherProps), {}, {
    children: [bgImage && /*#__PURE__*/jsx_runtime_.jsx(components_BackgroundImage, {
      image: bgImage,
      opacity: bgImageOpacity
    }), props.children]
  }));
}

/* harmony default export */ var components_Section = (Section);

/***/ })

};
;