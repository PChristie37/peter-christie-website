(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5335:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Section.js + 1 modules
var Section = __webpack_require__(7267);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js
var AppBar = __webpack_require__(5258);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(3832);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(8358);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 3 modules
var Hidden = __webpack_require__(1543);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(7812);
;// CONCATENATED MODULE: external "@material-ui/icons/Menu"
var Menu_namespaceObject = require("@material-ui/icons/Menu");;
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(282);
;// CONCATENATED MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_namespaceObject = require("@material-ui/icons/ExpandMore");;
;// CONCATENATED MODULE: external "@material-ui/icons/NightsStay"
var NightsStay_namespaceObject = require("@material-ui/icons/NightsStay");;
var NightsStay_default = /*#__PURE__*/__webpack_require__.n(NightsStay_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/WbSunny"
var WbSunny_namespaceObject = require("@material-ui/icons/WbSunny");;
var WbSunny_default = /*#__PURE__*/__webpack_require__.n(WbSunny_namespaceObject);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js + 3 modules
var Drawer = __webpack_require__(7159);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/List/List.js
var List = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js
var ListItem = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(5757);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./src/util/auth.js


/*
  This file (auth.js) is added to your codebase if you chose "None" for your
  auth provider when exporting from Divjoy, but some of you components attempt 
  to import auth.js and use the useAuth() hook. Rather than break your site, 
  we include this file and just just throw errors when auth methods (auth.signup, auth.signin, etc) are used. 
  To entirely remove auth from your codebase search for "auth" and remove all related code.
*/

const useAuth = () => {
  return {
    user: false,
    signup: errorFunction,
    signin: errorFunction,
    signinWithProvider: errorFunction,
    signout: errorFunction,
    sendPasswordResetEmail: errorFunction,
    confirmPasswordReset: errorFunction,
    updateEmail: errorFunction,
    updatePassword: errorFunction,
    updateProfile: errorFunction
  };
};
const errorMessage = (/* unused pure expression or super */ null && (`Authentication is disabled because you chose "None" when picking an authentication option in Divjoy. Please go to the Divjoy homepage and choose an option or choose "Other" if you'd like to integrate a different auth service after code export.`));

const errorFunction = () => Promise.reject(new Error(errorMessage));

const requireAuth = Component => {
  return props => {
    useEffect(() => {
      router.replace("/auth/signin");
    }, []);
    return null;
  };
};
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 11 modules
var createMuiTheme = __webpack_require__(4490);
// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__(4047);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(8920);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/indigo.js
var indigo = __webpack_require__(4446);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/pink.js
var pink = __webpack_require__(9198);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/colors/grey.js
var grey = __webpack_require__(8105);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(5834);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(3457);
// EXTERNAL MODULE: ./node_modules/use-local-storage-state/es/src/createLocalStorageStateHook.js + 2 modules
var createLocalStorageStateHook = __webpack_require__(1484);
;// CONCATENATED MODULE: ./src/util/theme.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const themeConfig = {
  // Light theme
  light: {
    palette: {
      type: "light",
      primary: {
        // Use hue from colors or hex
        main: indigo/* default.500 */.Z[500] // Uncomment to specify light/dark
        // shades instead of automatically
        // calculating from above value.
        //light: "#4791db",
        //dark: "#115293",

      },
      secondary: {
        main: pink/* default.500 */.Z[500]
      },
      background: {
        // Background for <body>
        // and <Section color="default">
        default: "#fff",
        // Background for elevated
        // components (<Card>, etc)
        paper: "#fff"
      }
    }
  },
  // Dark theme
  dark: {
    palette: {
      type: "dark",
      primary: {
        // Same as in light but we could
        // adjust color hue if needed
        main: indigo/* default.500 */.Z[500]
      },
      secondary: {
        main: pink/* default.500 */.Z[500]
      },
      background: {
        default: grey/* default.900 */.Z[900],
        paper: grey/* default.800 */.Z[800]
      }
    }
  },
  // Values for both themes
  common: {
    typography: {
      fontSize: 14,
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' // Uncomment to make button lowercase
      // button: { textTransform: "none" },

    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1920
      }
    },
    // Override component styles
    overrides: {
      // Global styles
      MuiCssBaseline: {
        "@global": {
          "#__next": {
            // Flex column that is height
            // of viewport so that footer
            // can push self to bottom by
            // with auto margin-top
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            // Prevent child elements from
            // shrinking when content
            // is taller than the screen
            // (quirk of flex parent)
            "& > *": {
              flexShrink: 0
            }
          }
        }
      }
    }
  }
};

function getTheme(name) {
  // Create MUI theme from themeConfig
  return (0,createMuiTheme/* default */.Z)(_objectSpread(_objectSpread(_objectSpread({}, themeConfig[name]), themeConfig.common), {}, {
    overrides: _objectSpread(_objectSpread({}, themeConfig[name] && themeConfig[name].overrides), themeConfig.common && themeConfig.common.overrides)
  }));
} // Create a local storage hook for dark mode preference


const useDarkModeStorage = (0,createLocalStorageStateHook/* default */.Z)("isDarkMode");
const ThemeProvider = props => {
  // Get system dark mode preference
  const prefersDarkMode = (0,useMediaQuery/* default */.Z)("(prefers-color-scheme: dark)"); // Get stored dark mode preference

  let [isDarkModeStored, setIsDarkModeStored] = useDarkModeStorage(); // Only used stored preference after hydration to avoid client/server mismatch

  const hasHydrated = useHasHydrated();

  if (!hasHydrated) {
    isDarkModeStored = undefined;
  } // Use stored dark mode with fallback to system preference


  const isDarkMode = isDarkModeStored === undefined ? prefersDarkMode : isDarkModeStored; // Get MUI theme object

  const themeName = isDarkMode ? "dark" : "light";
  const theme = getTheme(themeName); // Add toggle function to theme object

  theme.palette.toggle = () => setIsDarkModeStored(value => !value); // Since Next.js server-renders we need to remove
  // the server-side injected CSS on mount so the
  // client can take over with managing styles.


  (0,external_react_.useEffect)(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(CssBaseline/* default */.ZP, {}), props.children]
  });
}; // Hook for detecting dark mode and toggling between light/dark
// More convenient than reading theme.palette.type from useTheme

function useDarkMode() {
  // Get current Material UI theme
  const theme = (0,useTheme/* default */.Z)(); // Check if it's the dark theme

  const isDarkMode = theme.palette.type === "dark"; // Return object containing dark mode value and toggle function

  return {
    value: isDarkMode,
    toggle: theme.palette.toggle
  };
} // Hook that tells us when hydration is complete so that we can
// safely use the value returned by useDarkModeStorage without
// risking a mismatch between server and client.
// This will hopefully be built-in to the use-local-storage-state library soon
// See https://github.com/astoilkov/use-local-storage-state/issues/23

function useHasHydrated() {
  const {
    0: hasHydrated,
    1: setHasHydrated
  } = (0,external_react_.useState)(false);
  const isServer = true; // To reduce flicker, we use `useLayoutEffect` so that app re-renders before
  // before React has painted to the browser.
  // React throws a warning when using useLayoutEffect on the server so
  // we use useEffect on the server (no-op) and useLayoutEffect in the browser.

  const useEffectFn = isServer ? external_react_.useEffect : external_react_.useLayoutEffect;
  useEffectFn(() => {
    setHasHydrated(true);
  }, []);
  return hasHydrated;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/components/Navbar.js


























const useStyles = (0,makeStyles/* default */.Z)(theme => ({
  logo: {
    height: 28,
    marginRight: theme.spacing(2)
  },
  drawerList: {
    width: 250
  },
  spacer: {
    flexGrow: 1
  }
}));

function Navbar(props) {
  const classes = useStyles();
  const darkMode = useDarkMode();
  const {
    0: drawerOpen,
    1: setDrawerOpen
  } = (0,external_react_.useState)(false);
  const {
    0: menuState,
    1: setMenuState
  } = (0,external_react_.useState)(null); // Use inverted logo if specified
  // and we are in dark mode

  const logo = props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleOpenMenu = (event, id) => {
    // Store clicked element (to anchor the menu to)
    // and the menu id so we can tell which menu is open.
    setMenuState({
      anchor: event.currentTarget,
      id
    });
  };

  const handleCloseMenu = () => {
    setMenuState(null);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Section/* default */.Z, {
    bgColor: props.color,
    size: "auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx(AppBar/* default */.Z, {
      position: "static",
      color: "transparent",
      elevation: 0,
      children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
        disableGutters: true,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Toolbar/* default */.Z, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: logo,
                alt: "Logo",
                className: classes.logo
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: classes.spacer
          }), /*#__PURE__*/jsx_runtime_.jsx(Hidden/* default */.Z, {
            mdUp: true,
            implementation: "css",
            children: /*#__PURE__*/jsx_runtime_.jsx(IconButton/* default */.Z, {
              onClick: () => {
                setDrawerOpen(true);
              },
              color: "inherit",
              children: /*#__PURE__*/jsx_runtime_.jsx((Menu_default()), {})
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Hidden/* default */.Z, {
            smDown: true,
            implementation: "css",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "inherit",
                component: "a",
                children: "About"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/projects",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "inherit",
                component: "a",
                children: "Projects"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/resume",
              passHref: true,
              children: /*#__PURE__*/jsx_runtime_.jsx(Button/* default */.Z, {
                color: "inherit",
                component: "a",
                children: "Resume"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconButton/* default */.Z, {
              color: "inherit",
              onClick: darkMode.toggle,
              style: {
                opacity: 0.6
              },
              children: [darkMode.value && /*#__PURE__*/jsx_runtime_.jsx((NightsStay_default()), {}), !darkMode.value && /*#__PURE__*/jsx_runtime_.jsx((WbSunny_default()), {})]
            })]
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Drawer/* default */.ZP, {
      anchor: "right",
      open: drawerOpen,
      onClose: () => setDrawerOpen(false),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(List/* default */.Z, {
        className: classes.drawerList,
        onClick: () => setDrawerOpen(false),
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/about",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
            button: true,
            component: "a",
            children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
              children: "About"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
            button: true,
            component: "a",
            children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
              children: "Projects"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/resume",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
            button: true,
            component: "a",
            children: /*#__PURE__*/jsx_runtime_.jsx(ListItemText/* default */.Z, {
              children: "Resume"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ListItem/* default */.Z, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconButton/* default */.Z, {
            color: "inherit",
            onClick: darkMode.toggle,
            style: {
              opacity: 0.6
            },
            children: [darkMode.value && /*#__PURE__*/jsx_runtime_.jsx((NightsStay_default()), {}), !darkMode.value && /*#__PURE__*/jsx_runtime_.jsx((WbSunny_default()), {})]
          })
        })]
      })
    })]
  });
}

/* harmony default export */ var components_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(2318);
;// CONCATENATED MODULE: external "@material-ui/icons/Twitter"
var Twitter_namespaceObject = require("@material-ui/icons/Twitter");;
var Twitter_default = /*#__PURE__*/__webpack_require__.n(Twitter_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Facebook"
var Facebook_namespaceObject = require("@material-ui/icons/Facebook");;
var Facebook_default = /*#__PURE__*/__webpack_require__.n(Facebook_namespaceObject);
;// CONCATENATED MODULE: external "@material-ui/icons/Instagram"
var Instagram_namespaceObject = require("@material-ui/icons/Instagram");;
;// CONCATENATED MODULE: ./src/components/Footer.js












const Footer_useStyles = (0,makeStyles/* default */.Z)(theme => ({
  sticky: {
    marginTop: "auto"
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap"
  },
  item: {
    display: "flex",
    flex: "none",
    justifyContent: "center",
    width: "100%",
    marginBottom: 24,
    [theme.breakpoints.up("sm")]: {
      flex: "50%"
    }
  },
  brand: {
    display: "block",
    height: 32
  },
  social: {
    alignItems: "flex-end"
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    lineHeight: 1,
    "&:hover": {
      opacity: 0.8
    },
    "&:not(:first-of-type)": {
      marginLeft: 20
    }
  },
  left: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start"
    }
  },
  right: {
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  // Move links to end (bottom right)
  // Swaps position with social
  smallLinks: {
    [theme.breakpoints.up("sm")]: {
      order: 1
    }
  }
}));

function Footer(props) {
  const classes = Footer_useStyles();
  const darkMode = useDarkMode(); // Use inverted logo if specified
  // and we are in dark mode

  const logo = props.logoInverted && darkMode.value ? props.logoInverted : props.logo;
  return /*#__PURE__*/jsx_runtime_.jsx(Section/* default */.Z, {
    bgColor: props.bgColor,
    size: props.size,
    bgImage: props.bgImage,
    bgImageOpacity: props.bgImageOpacity,
    className: props.sticky && classes.sticky,
    children: /*#__PURE__*/jsx_runtime_.jsx(Container/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: classes.wrapper,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${classes.item} ${classes.left}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: logo,
                alt: "Logo",
                className: classes.brand
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${classes.item} ${classes.right} ${classes.smallLinks}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Typography/* default */.Z, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: classes.link,
                children: "About"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/projects",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: classes.link,
                children: "Projects"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/resume",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: classes.link,
                children: "Resume"
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `${classes.item} ${classes.right} ${classes.social}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://twitter.com/yeahthatpeter",
            target: "_blank",
            rel: "noreferrer",
            className: classes.link,
            children: /*#__PURE__*/jsx_runtime_.jsx((Twitter_default()), {
              fontSize: "small"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "https://www.facebook.com/peter.christie.927",
            target: "_blank",
            rel: "noreferrer",
            className: classes.link,
            children: /*#__PURE__*/jsx_runtime_.jsx((Facebook_default()), {
              fontSize: "small"
            })
          })]
        }), props.copyright && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `${classes.item} ${classes.left}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(Typography/* default */.Z, {
            component: "p",
            children: props.copyright
          })
        })]
      })
    })
  });
}

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(ThemeProvider, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Navbar, {
        color: "default",
        logo: "https://uploads.divjoy.com/logo.svg",
        logoInverted: "https://uploads.divjoy.com/logo-white.svg"
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {
        bgColor: "light",
        size: "normal",
        bgImage: "",
        bgImageOpacity: 1,
        description: "A short description of what you do here",
        copyright: "\xA9 2020 Company",
        logo: "https://uploads.divjoy.com/logo.svg",
        logoInverted: "https://uploads.divjoy.com/logo-white.svg",
        sticky: true
      })]
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 5327:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles/colorManipulator");;

/***/ }),

/***/ 6832:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/utils/capitalize");;

/***/ }),

/***/ 4047:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/styles");;

/***/ }),

/***/ 9137:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/system");;

/***/ }),

/***/ 2958:
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/utils");;

/***/ }),

/***/ 3536:
/***/ (function(module) {

"use strict";
module.exports = require("clsx");;

/***/ }),

/***/ 9638:
/***/ (function(module) {

"use strict";
module.exports = require("hoist-non-react-statics");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 4229:
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2268:
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [669,832,32,367,895,664,639,455,267], function() { return __webpack_exec__(5335); });
module.exports = __webpack_exports__;

})();