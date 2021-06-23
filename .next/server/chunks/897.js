exports.id = 897;
exports.ids = [897];
exports.modules = {

/***/ 8897:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7267);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3832);
/* harmony import */ var components_SectionHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8739);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1749);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2014);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2318);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2822);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(998);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5757);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1120);













const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(theme => ({
  itemsContainer: {
    marginTop: 60
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse"
    },
    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`
    }
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto"
  },
  image: {
    height: "auto",
    maxWidth: "100%"
  }
}));

function FeaturesSection(props) {
  const classes = useStyles();
  const items = [{
    title: "Education",
    description: "Arizona State University - Bachelor's of Fine Arts - Digital Culture (Film) ",
    timeSpent: "2011 – 2016",
    image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
  }, {
    title: "Front End Developer",
    description: "Tivity Health",
    timeSpent: "March 2019 - Present",
    listTitle: "",
    list: ["Crafted front end user experience in ReactJS for client facing product.", "Maintained and added user features to React Native fitness application.", "Collaborated on architecture design for onboarding new clients for React Native Application with .NET backend services.", "MVP for Silversneakers Roku Application.", "Created Kafka Data Streaming structure for data manipulation."],
    image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
  }, {
    title: "Fullstack Developer",
    description: "Walts TV ",
    timeSpent: "August 2015 - March 2019",
    listTitle: "",
    list: ["Deployed ReactJS POS, product reviews application, and product images for e-commerce website.", "Created POS system for Ebay with PHP and MySQL that manages submit, revise, end items, and import orders.", "Implemented real time monitoring solutions for back end services.", "Developed scalable solutions for collection of data and delivery of timely and efficient solutions.", "Crafted resources for designing of data store architecture, public and private APIs."],
    image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
    bgColor: props.bgColor,
    size: props.size,
    bgImage: props.bgImage,
    bgImageOpacity: props.bgImageOpacity,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_SectionHeader__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        title: props.title,
        subtitle: props.subtitle,
        size: 4,
        textAlign: "center"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        maxWidth: "md",
        disableGutters: true,
        className: classes.itemsContainer,
        children: items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          className: classes.row,
          container: true,
          item: true,
          alignItems: "center",
          spacing: 4,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              textAlign: {
                xs: "center",
                md: "left"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                variant: "h5",
                gutterBottom: true,
                children: item.title
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                variant: "subtitle1",
                gutterBottom: item.listTitle ? true : false,
                children: item.description
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                variant: "subtitle2",
                gutterBottom: item.listTitle ? true : false,
                children: item.timeSpent
              }), item.listTitle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                variant: "subtitle1",
                children: item.listTitle
              }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                children: item.list ? item.list.map((listItem, id) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                    primary: listItem
                  })
                })) : null
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
              className: classes.figure,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: item.image,
                alt: item.title,
                className: classes.image
              })
            })
          })]
        }, index))
      })]
    })
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (FeaturesSection);

/***/ })

};
;