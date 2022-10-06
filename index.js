require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdomclient = require("react-dom/client");
var $ltMAx$reacticonsai = require("react-icons/ai");
var $ltMAx$reacticonsbs = require("react-icons/bs");
var $ltMAx$reacticonsfa = require("react-icons/fa");
var $ltMAx$reacticonsim = require("react-icons/im");
var $ltMAx$reacticonsti = require("react-icons/ti");
var $ltMAx$reacttypical = require("react-typical");
var $ltMAx$reacticonshi = require("react-icons/hi");
var $ltMAx$swiper = require("swiper");
var $ltMAx$swiperreact = require("swiper/react");
require("swiper/swiper.min.css");
require("swiper/modules/pagination/pagination.min.css");
var $ltMAx$emailjsbrowser = require("@emailjs/browser");
var $ltMAx$reacthottoast = require("react-hot-toast");
var $ltMAx$reacticonsio = require("react-icons/io");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}









var $f7ba7bd42b489d04$exports = {};
$f7ba7bd42b489d04$exports = new URL("logo.5725b5da.svg", "file:" + __filename).toString();








const $cc76198bb4942566$var$Sidebar = ()=>{
    /*==========Toggle Menu======= */ const [toggle, showMenu] = (0, $ltMAx$react.useState)(false);
    const [activeSideBar, setActiveSideBar] = (0, $ltMAx$react.useState)("#home");
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("aside", {
                className: toggle ? "aside show-menu" : "aside",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                        href: "#home",
                        className: "nav_logo",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                            src: (0, (/*@__PURE__*/$parcel$interopDefault($f7ba7bd42b489d04$exports))),
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("nav", {
                        className: "nav",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                            className: "nav_menu",
                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("ul", {
                                className: "nav_list",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#home",
                                            onClick: ()=>setActiveSideBar("#home"),
                                            className: activeSideBar === "#home" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-home",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsai.AiFillHome), {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#about",
                                            onClick: ()=>setActiveSideBar("#about"),
                                            className: activeSideBar === "#about" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-user-following",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsai.AiOutlineUser), {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#services",
                                            onClick: ()=>setActiveSideBar("#services"),
                                            className: activeSideBar === "#services" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-briefcase",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsbs.BsBriefcaseFill), {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#resume",
                                            onClick: ()=>setActiveSideBar("#resume"),
                                            className: activeSideBar === "#resume" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-graduation",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsfa.FaGraduationCap), {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#work",
                                            onClick: ()=>setActiveSideBar("#work"),
                                            className: activeSideBar === "#work" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-layers",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsbs.BsLayersFill), {})
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("li", {
                                        className: "nav_item",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                            href: "#contact",
                                            onClick: ()=>setActiveSideBar("#contact"),
                                            className: activeSideBar === "#contact" ? "nav_link active-link" : "nav_link",
                                            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                                className: "icon-bubble",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsim.ImBubbles2), {})
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "nav_footer",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                            className: "copyright",
                            children: "Dev.Joshua \xa9 2022."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: toggle ? "nav_toggle nav_toggle-open" : "nav_toggle",
                onClick: ()=>showMenu(!toggle),
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                    className: "icon-menu",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsti.TiThMenuOutline), {})
                })
            })
        ]
    });
};
var $cc76198bb4942566$export$2e2bcd8739ae039 = $cc76198bb4942566$var$Sidebar;






var $7699aa32e901ad52$exports = {};
$7699aa32e901ad52$exports = new URL("profile_picture.4511d85c.jpg", "file:" + __filename).toString();






const $87d16e0065a2cb69$var$HeaderSocials = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "home_socials",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                href: "https://twitter.com/JayDrayl01",
                className: "home_social-link",
                target: "_blank",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                    class: "fa fa-twitter",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsbs.BsTwitter), {})
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                href: "https://www.linkedin.com/in/onifade-joshua-7b844322b/",
                className: "home_social-link",
                target: "_blank",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                    class: "fa fa-linkedin",
                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsbs.BsLinkedin), {})
                })
            })
        ]
    });
};
var $87d16e0065a2cb69$export$2e2bcd8739ae039 = $87d16e0065a2cb69$var$HeaderSocials;





const $6eeb1f353f2fc4fc$var$ScrollDown = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        className: "scroll_down",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
            href: "#about",
            className: "mouse_wrapper",
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                className: "mouse",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                    className: "wheel"
                })
            })
        })
    });
};
var $6eeb1f353f2fc4fc$export$2e2bcd8739ae039 = $6eeb1f353f2fc4fc$var$ScrollDown;





const $ae8e186cb4f4bad7$var$Shapes = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "shapes",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "27",
                height: "29",
                class: "shape s1",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z",
                    fill: "#FFD15C",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "26",
                height: "26",
                class: "shape s2",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M13 3.3541L2.42705 24.5h21.1459L13 3.3541z",
                    stroke: "#FF4C60",
                    "stroke-width": "3",
                    fill: "none",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "30",
                height: "25",
                class: "shape s3",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z",
                    fill: "#44D7B6",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "15",
                height: "23",
                class: "shape s4",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("rect", {
                    transform: "rotate(30 9.86603 10.13397)",
                    x: "7",
                    width: "3",
                    height: "25",
                    rx: "1.5",
                    fill: "#FFD15C",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "15",
                height: "23",
                class: "shape s5",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("rect", {
                    transform: "rotate(30 9.86603 10.13397)",
                    x: "7",
                    width: "3",
                    height: "25",
                    rx: "1.5",
                    fill: "#6C6CE5",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "49",
                height: "17",
                class: "shape s6",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("g", {
                    fill: "#FF4C60",
                    "fill-rule": "evenodd",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                            d: "M.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C23.1175 5.50106 25.5 10.78292 25.5 16.5H23c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0C4.90625 7.70116 3 11.92697 3 16.5H.5z"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                            d: "M23.5 16.5c0-5.71709 2.3825-10.99895 6.25-13.8567 3.8675-2.85774 8.6325-2.85774 12.5 0C46.1175 5.50106 48.5 10.78292 48.5 16.5H46c0-4.57303-1.90625-8.79884-5-11.08535-3.09375-2.28652-6.90625-2.28652-10 0-3.09375 2.28651-5 6.51232-5 11.08535h-2.5z"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "26",
                height: "26",
                class: "shape s7",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M13 22.6459L2.42705 1.5h21.1459L13 22.6459z",
                    stroke: "#FFD15C",
                    "stroke-width": "3",
                    fill: "none",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "19",
                height: "21",
                class: "shape s8",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("rect", {
                    transform: "rotate(-40 6.25252 10.12626)",
                    x: "7",
                    width: "3",
                    height: "25",
                    rx: "1.5",
                    fill: "#6C6CE5",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "30",
                height: "25",
                class: "shape s9",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z",
                    fill: "#6C6CE5",
                    "fill-rule": "evenodd"
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "47",
                height: "29",
                class: "shape s10",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("g", {
                    fill: "#44D7B6",
                    "fill-rule": "evenodd",
                    children: [
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                            d: "M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z"
                        }),
                        /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                            d: "M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("svg", {
                width: "33",
                height: "20",
                class: "shape s11",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("path", {
                    d: "M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z",
                    fill: "#FFD15C",
                    "fill-rule": "evenodd"
                })
            })
        ]
    });
};
var $ae8e186cb4f4bad7$export$2e2bcd8739ae039 = $ae8e186cb4f4bad7$var$Shapes;


const $973f119f07a50c3c$var$Home = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "home",
        id: "home",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "intro",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($7699aa32e901ad52$exports))),
                        alt: "",
                        className: "home_img"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                        className: "home_name",
                        children: "Hello, I'm Joshua"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "home_education",
                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, ($parcel$interopDefault($ltMAx$reacttypical))), {
                            steps: [
                                "Enthusiastic Dev\uD83D\uDE0E",
                                1000,
                                "Frontend Developer\uD83D\uDCBB",
                                1000,
                                "React Developer\uD83C\uDF10",
                                1000
                            ],
                            loop: Infinity
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "home-role-tagline",
                        children: "Knack of building applications with frontend operations."
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $87d16e0065a2cb69$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                        href: "#contact",
                        className: "btn",
                        children: "Hire Me"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $6eeb1f353f2fc4fc$export$2e2bcd8739ae039), {})
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ae8e186cb4f4bad7$export$2e2bcd8739ae039), {})
        ]
    });
};
var $973f119f07a50c3c$export$2e2bcd8739ae039 = $973f119f07a50c3c$var$Home;





var $1c2c41e5a0da3ad8$exports = {};
$1c2c41e5a0da3ad8$exports = new URL("bg-picture.660eefe1.jpg", "file:" + __filename).toString();


var $fa0a0b79ef80cc88$exports = {};
$fa0a0b79ef80cc88$exports = new URL("Developer-Resume-Onifade-Joshua.de279a0f.pdf", "file:" + __filename).toString();


const $37f71eeec14b9e26$var$About = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "about_container section",
        id: "about",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "About Me"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "about_container grid",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                        src: (0, (/*@__PURE__*/$parcel$interopDefault($1c2c41e5a0da3ad8$exports))),
                        alt: "",
                        className: "about_img"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "about_data grid",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "about_info",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "about_description",
                                        children: "An Enthusiastic Developer, eager to contribute to team success through hard work, attention to details, excellent organizational skills."
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                        className: "about_description",
                                        children: "Clear understanding of work ethics, actively looking for opportunity to contribute. Ability to solve problems creatively using the language of the web and the language which the web understand. I'm dedicated and as well motivated to learn, grow and excel in all my endeavors."
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                        href: (0, (/*@__PURE__*/$parcel$interopDefault($fa0a0b79ef80cc88$exports))),
                                        className: "btn",
                                        download: "Developer-Resume-Onifade-Joshua",
                                        children: "Get Resume"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "about_skills grid",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "skills_data",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                className: "skills_titles",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                        className: "skills_name",
                                                        children: "HTML"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        className: "skills_number",
                                                        children: "95%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "skills_bar",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    className: "skills_percentage html"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "skills_data",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                className: "skills_titles",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                        className: "skills_name",
                                                        children: "CSS"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        className: "skills_number",
                                                        children: "80%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "skills_bar",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    className: "skills_percentage css"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "skills_data",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                className: "skills_titles",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                        className: "skills_name",
                                                        children: "BOOTSTRAP"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        className: "skills_number",
                                                        children: "85%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "skills_bar",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    className: "skills_percentage bootstrap"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "skills_data",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                className: "skills_titles",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                        className: "skills_name",
                                                        children: "JAVASCRIPT"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        className: "skills_number",
                                                        children: "90%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "skills_bar",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    className: "skills_percentage javascript"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                        className: "skills_data",
                                        children: [
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                                className: "skills_titles",
                                                children: [
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                                        className: "skills_name",
                                                        children: "REACT"
                                                    }),
                                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                        className: "skills_number",
                                                        children: "85%"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                                className: "skills_bar",
                                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                                    className: "skills_percentage react"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
var $37f71eeec14b9e26$export$2e2bcd8739ae039 = $37f71eeec14b9e26$var$About;





var $f1be177ece6a00d7$exports = {};
$f1be177ece6a00d7$exports = new URL("service-2.74345e25.svg", "file:" + __filename).toString();


const $66c928856aa2d86f$var$data = [
    {
        id: 2,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($f1be177ece6a00d7$exports))),
        title: "Web Development",
        description: "As a Frontend Developer based in Lagos, Nigeria. I'm responsible in using the knowledge of programming languages to design and code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications. Communicating with clients to identify their needs, optimizing websites for different formats like desktops and mobile phones and running tests to ensure code strings perform the correct functions."
    }
];
const $66c928856aa2d86f$var$Services = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "services_container section",
        id: "services",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "Services"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "services_container grid",
                children: $66c928856aa2d86f$var$data.map(({ id: id , image: image , title: title , description: description  })=>{
                    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "services_card",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                src: image,
                                alt: "",
                                className: "services_img"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                className: "services_title",
                                children: title
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "services_description",
                                children: description
                            })
                        ]
                    }, id);
                })
            })
        ]
    });
};
var $66c928856aa2d86f$export$2e2bcd8739ae039 = $66c928856aa2d86f$var$Services;





const $1067c7a133693b5e$var$Data = [
    {
        id: 1,
        category: "education",
        icon: "icon-graduation",
        year: "2019",
        title: "Bachelor's Degree",
        desc: "B.sc Political Science and International Relations."
    },
    {
        id: 2,
        category: "education",
        icon: "icon-graduation",
        year: "2020",
        title: "Academic Degree",
        desc: "National Youth Service Corps."
    },
    {
        id: 3,
        category: "education",
        icon: "icon-graduation",
        year: "2021 - 2022",
        title: "Academic Degree",
        desc: "Graduate Of #14GZURI Scholarship Programming Academy."
    },
    {
        id: 4,
        category: "experience",
        icon: "icon-briefcase",
        year: "2020 - 2022",
        title: "Frontend Developer",
        desc: "As a Frontend Developer, I have years experience in using the knowledge of programming languages to design and code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications. Communicating with clients to identify their needs, optimizing websites for different formats like desktops and mobile phones and running tests to ensure code strings perform the correct functions."
    }, 
];
var $1067c7a133693b5e$export$2e2bcd8739ae039 = $1067c7a133693b5e$var$Data;




const $c95be220ad3c5c09$var$Card = (props)=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "timeline_item",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                className: props.icon
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                className: "timeline_date",
                children: props.year
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                className: "timeline_title",
                children: props.title
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                className: "timeline_text",
                children: props.desc
            })
        ]
    });
};
var $c95be220ad3c5c09$export$2e2bcd8739ae039 = $c95be220ad3c5c09$var$Card;


const $fc0a950f4280a3ad$var$Resume = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "resume_container section",
        id: "resume",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "Experience"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "resume_container grid",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "timeline grid",
                        children: (0, $1067c7a133693b5e$export$2e2bcd8739ae039).map((val, id)=>{
                            if (val.category === "education") return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $c95be220ad3c5c09$export$2e2bcd8739ae039), {
                                icon: val.icon,
                                title: val.title,
                                year: val.year,
                                desc: val.desc
                            }, id);
                        })
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                        className: "timeline grid",
                        children: (0, $1067c7a133693b5e$export$2e2bcd8739ae039).map((val, index)=>{
                            if (val.category === "experience") return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $c95be220ad3c5c09$export$2e2bcd8739ae039), {
                                icon: val.icon,
                                title: val.title,
                                year: val.year,
                                desc: val.desc
                            }, index);
                        })
                    })
                ]
            })
        ]
    });
};
var $fc0a950f4280a3ad$export$2e2bcd8739ae039 = $fc0a950f4280a3ad$var$Resume;





var $e7ba0de40164d52b$exports = {};
$e7ba0de40164d52b$exports = new URL("sample1.fd94bb2c.png", "file:" + __filename).toString();


var $9099db38709bcf43$exports = {};
$9099db38709bcf43$exports = new URL("sample2.99ff0798.png", "file:" + __filename).toString();


var $97c1e07dff8631a6$exports = {};
$97c1e07dff8631a6$exports = new URL("sample3.3bd2c363.png", "file:" + __filename).toString();


var $3965db109045ba8c$exports = {};
$3965db109045ba8c$exports = new URL("sample4.fccb663d.png", "file:" + __filename).toString();


var $66ae03863f203848$exports = {};
$66ae03863f203848$exports = new URL("sample5.025057b6.png", "file:" + __filename).toString();


var $f253acae9c08bf7e$exports = {};
$f253acae9c08bf7e$exports = new URL("sample6.caac015b.png", "file:" + __filename).toString();


var $64c1d9ca38d0682e$exports = {};
$64c1d9ca38d0682e$exports = new URL("sample7.d51c2c7d.png", "file:" + __filename).toString();


var $10e459abd0dcbcec$exports = {};
$10e459abd0dcbcec$exports = new URL("sample8.b337972f.png", "file:" + __filename).toString();


var $41e090ea4fa51156$exports = {};
$41e090ea4fa51156$exports = new URL("sample9.a07b1b5d.png", "file:" + __filename).toString();


var $debdb1c05f5127cb$exports = {};
$debdb1c05f5127cb$exports = new URL("sample10.f0c7a5f1.png", "file:" + __filename).toString();


const $ea18201e1e975f3c$var$Menu = [
    {
        id: 1,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($e7ba0de40164d52b$exports))),
        title: "E-commerce Land Page",
        category: "App",
        website: "https://onifade-joshua.github.io/taxmingo-page/"
    },
    {
        id: 2,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($9099db38709bcf43$exports))),
        title: "Survey Form",
        category: "Web",
        website: "https://onifade-joshua.github.io/survey-form/"
    },
    {
        id: 3,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($97c1e07dff8631a6$exports))),
        title: "Recover Form For a Health Organisation",
        category: "App",
        website: "https://onifade-joshua.github.io/bounce_signin_signup_page/"
    },
    {
        id: 4,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($3965db109045ba8c$exports))),
        title: "Login Form For a Health Organisation",
        category: "App",
        website: "https://onifade-joshua.github.io/Bounce_health_login_signup_web_page/signup.html"
    },
    {
        id: 5,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($66ae03863f203848$exports))),
        title: "Portfolio Web Page",
        category: "Web",
        website: "https://onifade-joshua.github.io/developer_portfolio_website/"
    },
    {
        id: 6,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($f253acae9c08bf7e$exports))),
        title: "Web Internet Banking App",
        category: "App",
        website: "https://onifade-joshua.github.io/sample_internet_app_cmfbank/"
    },
    {
        id: 7,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($64c1d9ca38d0682e$exports))),
        title: "Sign up Form For a Health Organisation",
        category: "App",
        website: "https://onifade-joshua.github.io/signup-validation-form/"
    },
    {
        id: 8,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($10e459abd0dcbcec$exports))),
        title: "Questionnaire Form",
        category: "Web",
        website: "https://onifade-joshua.github.io/reactjs_forms/"
    },
    {
        id: 9,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($41e090ea4fa51156$exports))),
        title: "Social Media Chat App",
        category: "App",
        website: "https://onifade-joshua.github.io/draylmeet-chat-app/"
    },
    {
        id: 10,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($debdb1c05f5127cb$exports))),
        title: "Crypto Currency Tracking App ",
        category: "Web",
        website: "https://onifade-joshua.github.io/crypto-dashboard/"
    }, 
];
var $ea18201e1e975f3c$export$2e2bcd8739ae039 = $ea18201e1e975f3c$var$Menu;



const $26fdffbd5b9204e6$var$Portfolio = ()=>{
    const [items, setItems] = (0, $ltMAx$react.useState)((0, $ea18201e1e975f3c$export$2e2bcd8739ae039));
    const filterItem = (categoryItem)=>{
        const updatedItems = (0, $ea18201e1e975f3c$export$2e2bcd8739ae039).filter((curElem)=>{
            return curElem.category === categoryItem;
        });
        setItems(updatedItems);
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "work_container section",
        id: "work",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "My Recent Works"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "work_filters",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "work_item",
                        onClick: ()=>setItems((0, $ea18201e1e975f3c$export$2e2bcd8739ae039)),
                        children: "All"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "work_item",
                        onClick: ()=>filterItem("Web"),
                        children: "Web"
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                        className: "work_item",
                        onClick: ()=>filterItem("App"),
                        children: "App"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "work_container grid",
                children: items.map((elem)=>{
                    const { id: id , image: image , title: title , category: category , website: website  } = elem;
                    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "work_card",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "work_thumbnail",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                        src: image,
                                        alt: "",
                                        className: "work_img"
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "work_mask"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                className: "work_category",
                                children: category
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                className: "work_title",
                                children: title
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
                                href: website,
                                className: "work_button",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
                                    className: "icon-link work_button-icon",
                                    children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonshi.HiLink), {})
                                })
                            })
                        ]
                    }, id);
                })
            })
        ]
    });
};
var $26fdffbd5b9204e6$export$2e2bcd8739ae039 = $26fdffbd5b9204e6$var$Portfolio;





var $500b16232328fede$exports = {};
$500b16232328fede$exports = new URL("client_img.64e1862f.jpg", "file:" + __filename).toString();


var $2ff03f0002085719$exports = {};
$2ff03f0002085719$exports = new URL("client_img2.c960a3fb.jpg", "file:" + __filename).toString();






const $1989ff0dae2eff51$var$data = [
    {
        id: 1,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($500b16232328fede$exports))),
        title: "Mr Ifeanyi",
        subtitle: "Senior Software Developer at SDSD Prestige Ltd",
        comment: "Commitment to work and attention to details displayed by him is commendable, without that I don’t think that the project would have progressed so smoothly. I definitely recommend Dev Joshua to other clients."
    },
    {
        id: 2,
        image: (0, (/*@__PURE__*/$parcel$interopDefault($2ff03f0002085719$exports))),
        title: "Mr Samuel Osinloye",
        subtitle: "Software Developer at SDSD Prestige Ltd",
        comment: "I was very happy to work with Dev Joshua for my web application. The quality of work was really excellent, and his turnaround time was really amazing. Anytime i had bug or issues to fix, he rectified in required timing. And he did an excellent job. I will definitely recommend him and i will definitely work with him in future projects."
    }, 
];
const $1989ff0dae2eff51$var$Testimonials = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "testimonials_container section",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "Clients & Reviews"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$swiperreact.Swiper), {
                className: "testimonials_container grid",
                // install Swiper modules
                modules: [
                    (0, $ltMAx$swiper.Pagination)
                ],
                spaceBetween: 30,
                slidesPerView: 1,
                loop: true,
                grabCursor: true,
                pagination: {
                    clickable: true
                },
                children: $1989ff0dae2eff51$var$data.map(({ id: id , image: image , title: title , subtitle: subtitle , comment: comment  })=>{
                    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$swiperreact.SwiperSlide), {
                        className: "testimonials_item",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "thumb",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                                    src: image,
                                    className: "client_img",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                className: "testimonials_title",
                                children: title
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("span", {
                                className: "subtitle",
                                children: subtitle
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "comment",
                                children: comment
                            })
                        ]
                    }, id);
                })
            })
        ]
    });
};
var $1989ff0dae2eff51$export$2e2bcd8739ae039 = $1989ff0dae2eff51$var$Testimonials;







const $0a587d6e145b2dbf$var$notify = ()=>{
    (0, ($parcel$interopDefault($ltMAx$reacthottoast))).success("Mail sent successfully!");
};
const $0a587d6e145b2dbf$var$Contact = ()=>{
    const form = (0, $ltMAx$react.useRef)();
    const sendEmail = (e)=>{
        e.preventDefault();
        (0, ($parcel$interopDefault($ltMAx$emailjsbrowser))).sendForm("service_os9c1vi", "template_uq5y1ib", form.current, "DUwpHpX2m1EJDDFkk").then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
        e.target.reset();
    };
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("section", {
        className: "contact_container section",
        id: "contact",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h2", {
                className: "section_title",
                children: "Get In Touch"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                className: "contact_container grid",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "contact_info",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h3", {
                                className: "contact_title",
                                children: "Let's talk about everything!"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                                className: "contact_details",
                                children: "Don't like forms? Send me an email \uD83D\uDC4B"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("form", {
                        ref: form,
                        onSubmit: sendEmail,
                        className: "contact_form",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                                className: "contact_form-group",
                                children: [
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "contact_form-div",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                            type: "text",
                                            name: "user_name",
                                            className: "contact_form-input",
                                            placeholder: "Insert your name",
                                            required: true
                                        })
                                    }),
                                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                        className: "contact_form-div",
                                        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                            type: "email",
                                            name: "user_email",
                                            className: "contact_form-input",
                                            placeholder: "Insert your email",
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "contact_form-div",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("input", {
                                    type: "text",
                                    name: "subject",
                                    className: "contact_form-input",
                                    placeholder: "Insert your subject",
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                                className: "contact_form-div contact_form-area",
                                children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("textarea", {
                                    type: "text",
                                    name: "message",
                                    cols: "30",
                                    rows: "10",
                                    className: "contact_form-input",
                                    placeholder: "write your message",
                                    required: true
                                })
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                onClick: $0a587d6e145b2dbf$var$notify,
                                className: "btn",
                                children: "Send Message"
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacthottoast.Toaster), {})
                        ]
                    })
                ]
            })
        ]
    });
};
var $0a587d6e145b2dbf$export$2e2bcd8739ae039 = $0a587d6e145b2dbf$var$Contact;







const $66b972c9161aee98$var$ScrollUp = ()=>{
    const [scrollUp, setScrollUp] = (0, $ltMAx$react.useState)(false);
    const toggleScroll = ()=>{
        if (window.scrollY >= 100) setScrollUp(true);
        else setScrollUp(false);
    };
    const scrollBackUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0, $ltMAx$react.useEffect)(()=>{
        window.addEventListener("scroll", toggleScroll);
        return ()=>{
            window.removeEventListener("scroll", toggleScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("a", {
        href: "#",
        type: "button",
        onClick: scrollBackUp,
        className: "scrollup",
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("i", {
            className: "scrollup_icon",
            children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $ltMAx$reacticonsio.IoIosArrowDropupCircle), {})
        })
    });
};
var $66b972c9161aee98$export$2e2bcd8739ae039 = $66b972c9161aee98$var$ScrollUp;


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)((0, $ltMAx$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $cc76198bb4942566$export$2e2bcd8739ae039), {}),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $973f119f07a50c3c$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $37f71eeec14b9e26$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $66c928856aa2d86f$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $fc0a950f4280a3ad$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $26fdffbd5b9204e6$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $1989ff0dae2eff51$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0a587d6e145b2dbf$export$2e2bcd8739ae039), {}),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $66b972c9161aee98$export$2e2bcd8739ae039), {})
                ]
            })
        ]
    });
};
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$App;



const $4fa36e821943b400$var$root = (0, ($parcel$interopDefault($ltMAx$reactdomclient))).createRoot(document.getElementById("root"));
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {}));


//# sourceMappingURL=index.js.map
