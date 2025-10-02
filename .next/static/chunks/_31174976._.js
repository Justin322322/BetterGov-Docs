(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBreadcrumbs",
    ()=>getBreadcrumbs,
    "getNavigationItem",
    ()=>getNavigationItem,
    "isActiveNavItem",
    ()=>isActiveNavItem,
    "navigationConfig",
    ()=>navigationConfig
]);
const navigationConfig = {
    main: [
        {
            title: 'About BetterGov',
            href: '/docs/about',
            description: 'Learn about our mission and vision'
        },
        {
            title: 'Getting Started',
            href: '/docs/getting-started',
            description: 'Set up your development environment'
        },
        {
            title: 'Meilisearch Setup',
            href: '/docs/meilisearch',
            description: 'Configure search functionality'
        },
        {
            title: 'Contributing',
            href: '/docs/contributing',
            description: 'Help improve BetterGov.ph',
            children: [
                {
                    title: 'Testing',
                    href: '/docs/contributing/testing',
                    description: 'Testing guidelines and practices'
                },
                {
                    title: 'Code of Conduct',
                    href: '/docs/contributing/code-of-conduct',
                    description: 'Community guidelines'
                }
            ]
        }
    ],
    footer: [
        {
            title: 'Resources',
            href: '#',
            children: [
                {
                    title: 'GitHub',
                    href: 'https://github.com/bettergovph/bettergov'
                },
                {
                    title: 'Discord',
                    href: 'https://discord.gg/mHtThpN8bT'
                }
            ]
        }
    ]
};
function getNavigationItem(href) {
    for (const item of navigationConfig.main){
        if (item.href === href) return item;
        if (item.children) {
            for (const child of item.children){
                if (child.href === href) return child;
            }
        }
    }
    return null;
}
function getBreadcrumbs(href) {
    const breadcrumbs = [];
    for (const item of navigationConfig.main){
        if (item.href === href) {
            breadcrumbs.push(item);
            return breadcrumbs;
        }
        if (item.children) {
            for (const child of item.children){
                if (child.href === href) {
                    breadcrumbs.push(item, child);
                    return breadcrumbs;
                }
            }
        }
    }
    return breadcrumbs;
}
function isActiveNavItem(item, currentPath) {
    if (item.href === currentPath) return true;
    if (item.children) {
        return item.children.some((child)=>child.href === currentPath);
    }
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "MobileNavToggle",
    ()=>MobileNavToggle,
    "Navigation",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/navigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * Navigation item component with active state handling
 */ function NavigationItemComponent(param) {
    let { item, currentPath, level = 0 } = param;
    const isActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActiveNavItem"])(item, currentPath);
    const hasChildren = item.children && item.children.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('navigation-item', level > 0 && 'ml-4'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: item.href,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors', 'hover:bg-muted hover:text-foreground', isActive ? 'bg-primary text-primary-foreground' : 'text-muted-foreground', level === 0 && 'font-semibold'),
                children: [
                    item.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-4 h-4",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-4 bg-current rounded opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navigation.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            hasChildren && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('mt-1 space-y-1', level === 0 && 'border-l-2 border-muted ml-2 pl-2'),
                children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationItemComponent, {
                        item: child,
                        currentPath: currentPath,
                        level: level + 1
                    }, child.href, false, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/navigation.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navigation.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = NavigationItemComponent;
function Navigation(param) {
    let { className } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('navigation', className),
        role: "navigation",
        "aria-label": "Main navigation",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationConfig"].main.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationItemComponent, {
                    item: item,
                    currentPath: pathname
                }, item.href, false, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/navigation.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navigation.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Navigation, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = Navigation;
function Breadcrumb(param) {
    let { className } = param;
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Simple breadcrumb logic - can be enhanced with the getBreadcrumbs function
    const segments = pathname.split('/').filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('breadcrumb', className),
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex items-center space-x-2 text-sm text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "hover:text-foreground transition-colors",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this),
                segments.map((segment, index)=>{
                    const href = '/' + segments.slice(0, index + 1).join('/');
                    const isLast = index === segments.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground capitalize",
                                children: segment.replace('-', ' ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 114,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "hover:text-foreground transition-colors capitalize",
                                children: segment.replace('-', ' ')
                            }, void 0, false, {
                                fileName: "[project]/src/components/navigation.tsx",
                                lineNumber: 118,
                                columnNumber: 17
                            }, this)
                        ]
                    }, href, true, {
                        fileName: "[project]/src/components/navigation.tsx",
                        lineNumber: 111,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navigation.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navigation.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_s1(Breadcrumb, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = Breadcrumb;
function MobileNavToggle(param) {
    let { isOpen, onToggle } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onToggle,
        className: "md:hidden p-2 rounded-md hover:bg-muted transition-colors",
        "aria-label": isOpen ? 'Close navigation' : 'Open navigation',
        "aria-expanded": isOpen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-6 h-6 flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block w-5 h-0.5 bg-current transition-all duration-300', isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1')
                }, void 0, false, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block w-5 h-0.5 bg-current transition-all duration-300', isOpen ? 'opacity-0' : 'opacity-100')
                }, void 0, false, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('block w-5 h-0.5 bg-current transition-all duration-300', isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1')
                }, void 0, false, {
                    fileName: "[project]/src/components/navigation.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navigation.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navigation.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c3 = MobileNavToggle;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "NavigationItemComponent");
__turbopack_context__.k.register(_c1, "Navigation");
__turbopack_context__.k.register(_c2, "Breadcrumb");
__turbopack_context__.k.register(_c3, "MobileNavToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/fumadocs-core/dist/framework/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-BBP7MIO4.js [app-client] (ecmascript)");
"use client";
;
;
;
}),
"[project]/node_modules/fumadocs-core/dist/framework/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FrameworkProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrameworkProvider"],
    "Image",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"],
    "Link",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"],
    "createContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"],
    "useParams",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
    "usePathname",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
    "useRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$framework$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/framework/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-BBP7MIO4.js [app-client] (ecmascript)");
}),
"[project]/node_modules/fumadocs-ui/dist/utils/use-copy-button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCopyButton",
    ()=>useCopyButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
'use client';
;
;
function useCopyButton(onCopy) {
    const [checked, setChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "useCopyButton.useEffectEvent[onClick]": ()=>{
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
            const res = Promise.resolve(onCopy());
            void res.then({
                "useCopyButton.useEffectEvent[onClick]": ()=>{
                    setChecked(true);
                    timeoutRef.current = window.setTimeout({
                        "useCopyButton.useEffectEvent[onClick]": ()=>{
                            setChecked(false);
                        }
                    }["useCopyButton.useEffectEvent[onClick]"], 1500);
                }
            }["useCopyButton.useEffectEvent[onClick]"]);
        }
    }["useCopyButton.useEffectEvent[onClick]"]);
    // Avoid updates after being unmounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCopyButton.useEffect": ()=>{
            return ({
                "useCopyButton.useEffect": ()=>{
                    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
                }
            })["useCopyButton.useEffect"];
        }
    }["useCopyButton.useEffect"], []);
    return [
        checked,
        onClick
    ];
}
}),
"[project]/node_modules/fumadocs-ui/dist/components/codeblock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "CodeBlockTab",
    ()=>CodeBlockTab,
    "CodeBlockTabs",
    ()=>CodeBlockTabs,
    "CodeBlockTabsList",
    ()=>CodeBlockTabsList,
    "CodeBlockTabsTrigger",
    ()=>CodeBlockTabsTrigger,
    "Pre",
    ()=>Pre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$use$2d$copy$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/utils/use-copy-button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/ui/button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$unstyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/tabs.unstyled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/utils/merge-refs.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const TabsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function Pre(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("pre", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('min-w-full w-max *:flex *:flex-col', props.className),
        children: props.children
    });
}
function CodeBlock(param) {
    let { ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ...props,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('empty:hidden', props.className)
        }), ...props } = param;
    const inTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext) !== null;
    const areaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _props_datalinenumbersstart;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("figure", {
        ref: ref,
        dir: "ltr",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(inTab ? 'bg-fd-secondary -mx-px -mb-px last:rounded-b-xl' : 'my-4 bg-fd-card rounded-xl', keepBackground && 'bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)', 'shiki relative border shadow-sm outline-none not-prose overflow-hidden text-sm', props.className),
        children: [
            title ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
                children: [
                    typeof icon === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: "[&_svg]:size-3.5",
                        dangerouslySetInnerHTML: {
                            __html: icon
                        }
                    }) : icon,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("figcaption", {
                        className: "flex-1 truncate",
                        children: title
                    }),
                    Actions({
                        className: '-me-2',
                        children: allowCopy && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                            containerRef: areaRef
                        })
                    })
                ]
            }) : Actions({
                className: 'absolute top-2 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground',
                children: allowCopy && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CopyButton, {
                    containerRef: areaRef
                })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: areaRef,
                ...viewportProps,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('text-[13px] py-3.5 overflow-auto max-h-[600px] fd-scroll-container', viewportProps.className),
                style: {
                    // space for toolbar
                    '--padding-right': !title ? 'calc(var(--spacing) * 8)' : undefined,
                    counterSet: props['data-line-numbers'] ? "line ".concat(Number((_props_datalinenumbersstart = props['data-line-numbers-start']) !== null && _props_datalinenumbersstart !== void 0 ? _props_datalinenumbersstart : 1) - 1) : undefined,
                    ...viewportProps.style
                },
                children: children
            })
        ]
    });
}
function CopyButton(param) {
    let { className, containerRef, ...props } = param;
    const [checked, onClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$use$2d$copy$2d$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCopyButton"])({
        "CopyButton.useCopyButton": ()=>{
            var _containerRef_current;
            const pre = (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.getElementsByTagName('pre').item(0);
            if (!pre) return;
            const clone = pre.cloneNode(true);
            clone.querySelectorAll('.nd-copy-ignore').forEach({
                "CopyButton.useCopyButton": (node)=>{
                    node.replaceWith('\n');
                }
            }["CopyButton.useCopyButton"]);
            var _clone_textContent;
            void navigator.clipboard.writeText((_clone_textContent = clone.textContent) !== null && _clone_textContent !== void 0 ? _clone_textContent : '');
        }
    }["CopyButton.useCopyButton"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        "data-checked": checked || undefined,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            className: 'hover:text-fd-accent-foreground data-[checked]:text-fd-accent-foreground',
            size: 'icon-xs'
        }), className),
        "aria-label": checked ? 'Copied Text' : 'Copy Text',
        onClick: onClick,
        ...props,
        children: checked ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Check"], {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clipboard"], {})
    });
}
function CodeBlockTabs(param) {
    let { ref, ...props } = param;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nested = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext) !== null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$unstyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(containerRef, ref),
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('bg-fd-card rounded-xl border', !nested && 'my-4', props.className),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TabsContext.Provider, {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
                "CodeBlockTabs.useMemo": ()=>({
                        containerRef,
                        nested
                    })
            }["CodeBlockTabs.useMemo"], [
                nested
            ]),
            children: props.children
        })
    });
}
function CodeBlockTabsList(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$unstyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-row px-2 overflow-x-auto text-fd-muted-foreground', props.className),
        children: props.children
    });
}
function CodeBlockTabsTrigger(param) {
    let { children, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$unstyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 hover:text-fd-accent-foreground data-[state=active]:text-fd-primary [&_svg]:size-3.5', props.className),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute inset-x-2 bottom-0 h-px group-data-[state=active]:bg-fd-primary"
            }),
            children
        ]
    });
}
function CodeBlockTab(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$unstyled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
        ...props
    });
}
}),
"[project]/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compute",
    ()=>r
]);
const t = (t)=>"object" == typeof t && null != t && 1 === t.nodeType, e = (t, e)=>(!e || "hidden" !== t) && "visible" !== t && "clip" !== t, n = (t, n)=>{
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
        const o = getComputedStyle(t, null);
        return e(o.overflowY, n) || e(o.overflowX, n) || ((t)=>{
            const e = ((t)=>{
                if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
                try {
                    return t.ownerDocument.defaultView.frameElement;
                } catch (t) {
                    return null;
                }
            })(t);
            return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
        })(t);
    }
    return !1;
}, o = (t, e, n, o, l, r, i, s)=>r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0, l = (t)=>{
    const e = t.parentElement;
    return null == e ? t.getRootNode().host || null : e;
}, r = (e, r)=>{
    var i, s, d, h;
    if ("undefined" == typeof document) return [];
    const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t)=>t !== a;
    if (!t(e)) throw new TypeError("Invalid target");
    const m = document.scrollingElement || document.documentElement, w = [];
    let W = e;
    for(; t(W) && p(W);){
        if (W = l(W), W === m) {
            w.push(W);
            break;
        }
        null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
    }
    const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t)=>{
        const e = window.getComputedStyle(t);
        return {
            top: parseFloat(e.scrollMarginTop) || 0,
            right: parseFloat(e.scrollMarginRight) || 0,
            bottom: parseFloat(e.scrollMarginBottom) || 0,
            left: parseFloat(e.scrollMarginLeft) || 0
        };
    })(e);
    let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
    const L = [];
    for(let t = 0; t < w.length; t++){
        const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
        if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
        const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
        let B = 0, F = 0;
        const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
        if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
        else {
            B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
            const { scrollLeft: t, scrollTop: n } = e;
            B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
        }
        L.push({
            el: e,
            top: B,
            left: F
        });
    }
    return L;
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/compute-scroll-into-view/dist/index.js [app-client] (ecmascript)");
;
const o = (t)=>!1 === t ? {
        block: "end",
        inline: "nearest"
    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
        block: "start",
        inline: "nearest"
    };
function e(e, r) {
    if (!e.isConnected || !((t)=>{
        let o = t;
        for(; o && o.parentNode;){
            if (o.parentNode === document) return !0;
            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
        }
        return !1;
    })(e)) return;
    const n = ((t)=>{
        const o = window.getComputedStyle(t);
        return {
            top: parseFloat(o.scrollMarginTop) || 0,
            right: parseFloat(o.scrollMarginRight) || 0,
            bottom: parseFloat(o.scrollMarginBottom) || 0,
            left: parseFloat(o.scrollMarginLeft) || 0
        };
    })(e);
    if (((t)=>"object" == typeof t && "function" == typeof t.behavior)(r)) return r.behavior((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, r));
    const l = "boolean" == typeof r || null == r ? void 0 : r.behavior;
    for (const { el: a, top: i, left: s } of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$compute$2d$scroll$2d$into$2d$view$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compute"])(e, o(r))){
        const t = i - n.top + n.bottom, o = s - n.left + n.right;
        a.scroll({
            top: t,
            left: o,
            behavior: l
        });
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/fumadocs-core/dist/toc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorProvider",
    ()=>AnchorProvider,
    "ScrollProvider",
    ()=>ScrollProvider,
    "TOCItem",
    ()=>TOCItem,
    "useActiveAnchor",
    ()=>useActiveAnchor,
    "useActiveAnchors",
    ()=>useActiveAnchors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
// src/toc.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/scroll-into-view-if-needed/dist/index.js [app-client] (ecmascript)");
// src/toc.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
// src/utils/merge-refs.ts
function mergeRefs() {
    for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
        refs[_key] = arguments[_key];
    }
    return (value)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(value);
            } else if (ref !== null) {
                ref.current = value;
            }
        });
    };
}
;
function useAnchorObserver(watch, single) {
    const [activeAnchor, setActiveAnchor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnchorObserver.useEffect": ()=>{
            let visible = [];
            const observer = new IntersectionObserver({
                "useAnchorObserver.useEffect": (entries)=>{
                    for (const entry of entries){
                        if (entry.isIntersecting && !visible.includes(entry.target.id)) {
                            visible = [
                                ...visible,
                                entry.target.id
                            ];
                        } else if (!entry.isIntersecting && visible.includes(entry.target.id)) {
                            visible = visible.filter({
                                "useAnchorObserver.useEffect": (v)=>v !== entry.target.id
                            }["useAnchorObserver.useEffect"]);
                        }
                    }
                    if (visible.length > 0) setActiveAnchor(visible);
                }
            }["useAnchorObserver.useEffect"], {
                rootMargin: single ? "-80px 0% -70% 0%" : "-20px 0% -40% 0%",
                threshold: 1
            });
            function onScroll() {
                const element = document.scrollingElement;
                if (!element) return;
                const top = element.scrollTop;
                if (top <= 0 && single) setActiveAnchor(watch.slice(0, 1));
                else if (top + element.clientHeight >= element.scrollHeight - 6) {
                    setActiveAnchor({
                        "useAnchorObserver.useEffect.onScroll": (active)=>{
                            return active.length > 0 && !single ? watch.slice(watch.indexOf(active[0])) : watch.slice(-1);
                        }
                    }["useAnchorObserver.useEffect.onScroll"]);
                }
            }
            for (const heading of watch){
                const element = document.getElementById(heading);
                if (element) observer.observe(element);
            }
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "useAnchorObserver.useEffect": ()=>{
                    window.removeEventListener("scroll", onScroll);
                    observer.disconnect();
                }
            })["useAnchorObserver.useEffect"];
        }
    }["useAnchorObserver.useEffect"], [
        single,
        watch
    ]);
    return single ? activeAnchor.slice(0, 1) : activeAnchor;
}
;
var ActiveAnchorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])([]);
var ScrollContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    current: null
});
function useActiveAnchor() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ActiveAnchorContext).at(-1);
}
function useActiveAnchors() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ActiveAnchorContext);
}
function ScrollProvider(param) {
    let { containerRef, children } = param;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ScrollContext.Provider, {
        value: containerRef,
        children
    });
}
function AnchorProvider(param) {
    let { toc, single = true, children } = param;
    const headings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnchorProvider.useMemo[headings]": ()=>{
            return toc.map({
                "AnchorProvider.useMemo[headings]": (item)=>item.url.split("#")[1]
            }["AnchorProvider.useMemo[headings]"]);
        }
    }["AnchorProvider.useMemo[headings]"], [
        toc
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ActiveAnchorContext.Provider, {
        value: useAnchorObserver(headings, single),
        children
    });
}
var TOCItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((param, ref)=>{
    let { onActiveChange, ...props } = param;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ScrollContext);
    const anchors = useActiveAnchors();
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mergedRef = mergeRefs(anchorRef, ref);
    const isActive = anchors.includes(props.href.slice(1));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(isActive, {
        "TOCItem.useOnChange": (v)=>{
            const element = anchorRef.current;
            if (!element) return;
            if (v && containerRef.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$scroll$2d$into$2d$view$2d$if$2d$needed$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(element, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                    scrollMode: "always",
                    boundary: containerRef.current
                });
            }
            onActiveChange === null || onActiveChange === void 0 ? void 0 : onActiveChange(v);
        }
    }["TOCItem.useOnChange"]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
        ref: mergedRef,
        "data-active": isActive,
        ...props,
        children: props.children
    });
});
TOCItem.displayName = "TOCItem";
;
}),
"[project]/node_modules/fumadocs-ui/dist/components/layout/toc-thumb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TocThumb",
    ()=>TocThumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-EMWGTXSW.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
;
;
;
;
;
function calc(container, active) {
    if (active.length === 0 || container.clientHeight === 0) {
        return [
            0,
            0
        ];
    }
    let upper = Number.MAX_VALUE, lower = 0;
    for (const item of active){
        const element = container.querySelector('a[href="#'.concat(item, '"]'));
        if (!element) continue;
        const styles = getComputedStyle(element);
        upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
        lower = Math.max(lower, element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom));
    }
    return [
        upper,
        lower - upper
    ];
}
function update(element, info) {
    element.style.setProperty('--fd-top', "".concat(info[0], "px"));
    element.style.setProperty('--fd-height', "".concat(info[1], "px"));
}
function TocThumb(param) {
    let { containerRef, ...props } = param;
    const active = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAnchors"]();
    const thumbRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "TocThumb.useEffectEvent[onResize]": ()=>{
            if (!containerRef.current || !thumbRef.current) return;
            update(thumbRef.current, calc(containerRef.current, active));
        }
    }["TocThumb.useEffectEvent[onResize]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TocThumb.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            onResize();
            const observer = new ResizeObserver(onResize);
            observer.observe(container);
            return ({
                "TocThumb.useEffect": ()=>{
                    observer.disconnect();
                }
            })["TocThumb.useEffect"];
        }
    }["TocThumb.useEffect"], [
        containerRef,
        onResize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$EMWGTXSW$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOnChange"])(active, {
        "TocThumb.useOnChange": ()=>{
            if (!containerRef.current || !thumbRef.current) return;
            update(thumbRef.current, calc(containerRef.current, active));
        }
    }["TocThumb.useOnChange"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: thumbRef,
        role: "none",
        ...props
    });
}
}),
"[project]/node_modules/fumadocs-ui/dist/components/layout/toc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOCItems",
    ()=>TOCItems,
    "TOCProvider",
    ()=>TOCProvider,
    "TOCScrollArea",
    ()=>TOCScrollArea,
    "useTOCItems",
    ()=>useTOCItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2d$thumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/layout/toc-thumb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/utils/merge-refs.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const TOCContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])([]);
function useTOCItems() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TOCContext);
}
function TOCProvider(param) {
    let { toc, children, ...props } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TOCContext, {
        value: toc,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorProvider"], {
            toc: toc,
            ...props,
            children: children
        })
    });
}
function TOCScrollArea(param) {
    let { ref, className, ...props } = param;
    const viewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(viewRef, ref),
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3', className),
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollProvider"], {
            containerRef: viewRef,
            children: props.children
        })
    });
}
function TOCItems(param) {
    let { ref, className, ...props } = param;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const items = useTOCItems();
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    if (items.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
        children: text.tocNoHeadings
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2d$thumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TocThumb"], {
                containerRef: containerRef,
                className: "absolute top-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-all"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(ref, containerRef),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col border-s border-fd-foreground/10', className),
                ...props,
                children: items.map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TOCItem, {
                        item: item
                    }, item.url))
            })
        ]
    });
}
function TOCItem(param) {
    let { item } = param;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOCItem"], {
        href: item.url,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary', item.depth <= 2 && 'ps-3', item.depth === 3 && 'ps-6', item.depth >= 4 && 'ps-8'),
        children: item.title
    });
}
}),
"[project]/node_modules/fumadocs-ui/dist/layouts/docs/page-client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageBreadcrumb",
    ()=>PageBreadcrumb,
    "PageFooter",
    ()=>PageFooter,
    "PageLastUpdate",
    ()=>PageLastUpdate,
    "PageTOC",
    ()=>PageTOC,
    "PageTOCPopover",
    ()=>PageTOCPopover,
    "PageTOCPopoverContent",
    ()=>PageTOCPopoverContent,
    "PageTOCPopoverTrigger",
    ()=>PageTOCPopoverTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/icons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$H2GMUTQG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Link__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-H2GMUTQG.js [app-client] (ecmascript) <export Link as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/i18n.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/tree.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/chunk-BBP7MIO4.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$breadcrumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/breadcrumb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/layout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$is$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/utils/is-active.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/utils/use-effect-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/ui/collapsible.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/layout/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/toc.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const TocPopoverContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('TocPopoverContext');
function PageTOCPopoverTrigger(props) {
    var _items_selected;
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { open } = TocPopoverContext.use();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTOCItems"])();
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveAnchor"])();
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PageTOCPopoverTrigger.useMemo[selected]": ()=>items.findIndex({
                "PageTOCPopoverTrigger.useMemo[selected]": (item)=>active === item.url.slice(1)
            }["PageTOCPopoverTrigger.useMemo[selected]"])
    }["PageTOCPopoverTrigger.useMemo[selected]"], [
        items,
        active
    ]);
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreePath"])().at(-1);
    const showItem = selected !== -1 && !open;
    var _path_name;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex w-full h-(--fd-tocnav-height) items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6', props.className),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ProgressCircle, {
                value: (selected + 1) / Math.max(1, items.length),
                max: 1,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('shrink-0', open && 'text-fd-primary')
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('truncate transition-all', open && 'text-fd-foreground', showItem && 'opacity-0 -translate-y-full pointer-events-none'),
                        children: (_path_name = path === null || path === void 0 ? void 0 : path.name) !== null && _path_name !== void 0 ? _path_name : text.toc
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('truncate transition-all', !showItem && 'opacity-0 translate-y-full pointer-events-none'),
                        children: (_items_selected = items[selected]) === null || _items_selected === void 0 ? void 0 : _items_selected.title
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('shrink-0 transition-transform mx-0.5', open && 'rotate-180')
            })
        ]
    });
}
function clamp(input, min, max) {
    if (input < min) return min;
    if (input > max) return max;
    return input;
}
function ProgressCircle(param) {
    let { value, strokeWidth = 2, size = 24, min = 0, max = 100, ...restSvgProps } = param;
    const normalizedValue = clamp(value, min, max);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = normalizedValue / max * circumference;
    const circleProps = {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill: 'none',
        strokeWidth
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        role: "progressbar",
        viewBox: "0 0 ".concat(size, " ").concat(size),
        "aria-valuenow": normalizedValue,
        "aria-valuemin": min,
        "aria-valuemax": max,
        ...restSvgProps,
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                ...circleProps,
                className: "stroke-current/25"
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("circle", {
                ...circleProps,
                stroke: "currentColor",
                strokeDasharray: circumference,
                strokeDashoffset: circumference - progress,
                strokeLinecap: "round",
                transform: "rotate(-90 ".concat(size / 2, " ").concat(size / 2, ")"),
                className: "transition-all"
            })
        ]
    });
}
function PageTOCPopoverContent(props) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
        "data-toc-popover": "",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col px-4 max-h-[50vh] md:px-6', props.className),
        children: props.children
    });
}
function PageTOCPopover(props) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { collapsed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const { isTransparent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$layout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNav"])();
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$utils$2f$use$2d$effect$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])({
        "PageTOCPopover.useEffectEvent[onClick]": (e)=>{
            if (!open) return;
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
    }["PageTOCPopover.useEffectEvent[onClick]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTOCPopover.useEffect": ()=>{
            window.addEventListener('click', onClick);
            return ({
                "PageTOCPopover.useEffect": ()=>{
                    window.removeEventListener('click', onClick);
                }
            })["PageTOCPopover.useEffect"];
        }
    }["PageTOCPopover.useEffect"], [
        onClick
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TocPopoverContext.Provider, {
        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
            "PageTOCPopover.useMemo": ()=>({
                    open,
                    setOpen
                })
        }["PageTOCPopover.useMemo"], [
            setOpen,
            open
        ]),
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$ui$2f$collapsible$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Collapsible"], {
            open: open,
            onOpenChange: setOpen,
            asChild: true,
            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("header", {
                ref: ref,
                id: "nd-tocnav",
                ...props,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('fixed pr-(--removed-body-scroll-bar-size,0) z-10 border-b backdrop-blur-sm transition-colors xl:hidden max-xl:on-root:[--fd-tocnav-height:40px]', (!isTransparent || open) && 'bg-fd-background/80', open && 'shadow-lg', props.className),
                style: {
                    ...props.style,
                    top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))',
                    insetInlineStart: collapsed ? '0px' : 'calc(var(--fd-sidebar-width) + var(--fd-layout-offset))',
                    insetInlineEnd: 0
                },
                children: props.children
            })
        })
    });
}
function PageLastUpdate(param) {
    let { date: value, ...props } = param;
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageLastUpdate.useEffect": ()=>{
            // to the timezone of client
            setDate(new Date(value).toLocaleDateString());
        }
    }["PageLastUpdate.useEffect"], [
        value
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("p", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('text-sm text-fd-muted-foreground', props.className),
        children: [
            text.lastUpdate,
            " ",
            date
        ]
    });
}
function scanNavigationList(tree) {
    const list = [];
    tree.forEach((node)=>{
        if (node.type === 'folder') {
            if (node.index) {
                list.push(node.index);
            }
            list.push(...scanNavigationList(node.children));
            return;
        }
        if (node.type === 'page' && !node.external) {
            list.push(node);
        }
    });
    return list;
}
const listCache = new Map();
function PageFooter(param) {
    let { items, ...props } = param;
    const { root } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeContext"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$BBP7MIO4$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { previous, next } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PageFooter.useMemo": ()=>{
            if (items) return items;
            const cached = listCache.get(root.$id);
            const list = cached !== null && cached !== void 0 ? cached : scanNavigationList(root.children);
            listCache.set(root.$id, list);
            const idx = list.findIndex({
                "PageFooter.useMemo.idx": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$is$2d$active$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActive"])(item.url, pathname, false)
            }["PageFooter.useMemo.idx"]);
            if (idx === -1) return {};
            return {
                previous: list[idx - 1],
                next: list[idx + 1]
            };
        }
    }["PageFooter.useMemo"], [
        items,
        pathname,
        root
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('@container grid gap-4 pb-6', previous && next ? 'grid-cols-2' : 'grid-cols-1', props.className),
        children: [
            previous ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FooterItem, {
                item: previous,
                index: 0
            }) : null,
            next ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FooterItem, {
                item: next,
                index: 1
            }) : null
        ]
    });
}
function FooterItem(param) {
    let { item, index } = param;
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const Icon = index === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeft"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRight"];
    var _item_description;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$H2GMUTQG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Link__as__default$3e$__["default"], {
        href: item.url,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full', index === 1 && 'text-end'),
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('inline-flex items-center gap-1.5 font-medium', index === 1 && 'flex-row-reverse'),
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {
                        className: "-mx-1 size-4 shrink-0 rtl:rotate-180"
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        children: item.name
                    })
                ]
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: "text-fd-muted-foreground truncate",
                children: (_item_description = item.description) !== null && _item_description !== void 0 ? _item_description : index === 0 ? text.previousPage : text.nextPage
            })
        ]
    });
}
function PageBreadcrumb(param) {
    let { includeRoot, includeSeparator, includePage, ...props } = param;
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreePath"])();
    const { root } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTreeContext"])();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PageBreadcrumb.useMemo[items]": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$breadcrumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBreadcrumbItemsFromPath"])(root, path, {
                includePage,
                includeSeparator,
                includeRoot
            });
        }
    }["PageBreadcrumb.useMemo[items]"], [
        includePage,
        includeRoot,
        includeSeparator,
        path,
        root
    ]);
    if (items.length === 0) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex items-center gap-1.5 text-sm text-fd-muted-foreground', props.className),
        children: items.map((item, i)=>{
            const className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('truncate', i === items.length - 1 && 'text-fd-primary font-medium');
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    i !== 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$icons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRight"], {
                        className: "size-3.5 shrink-0"
                    }),
                    item.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$H2GMUTQG$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Link__as__default$3e$__["default"], {
                        href: item.url,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])(className, 'transition-opacity hover:opacity-80'),
                        children: item.name
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        className: className,
                        children: item.name
                    })
                ]
            }, i);
        })
    });
}
function PageTOC(props) {
    const { collapsed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const offset = collapsed ? '0px' : 'var(--fd-layout-offset)';
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        id: "nd-toc",
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('fixed bottom-0 pt-12 pb-2 pr-(--removed-body-scroll-bar-size,0) max-xl:hidden', props.className),
        style: {
            ...props.style,
            top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))',
            insetInlineEnd: "max(".concat(offset, ", calc(50vw - var(--fd-sidebar-width)/2 - var(--fd-page-width)/2))")
        },
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: "flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4",
            children: props.children
        })
    });
}
}),
"[project]/node_modules/fumadocs-ui/dist/components/layout/toc-clerk.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClerkTOCItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-core/dist/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript) <export twMerge as cn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2d$thumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/layout/toc-thumb.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/layout/toc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/utils/merge-refs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/contexts/i18n.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ClerkTOCItems(param) {
    let { ref, className, ...props } = param;
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTOCItems"])();
    const { text } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$contexts$2f$i18n$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const [svg, setSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClerkTOCItems.useEffect": ()=>{
            if (!containerRef.current) return;
            const container = containerRef.current;
            function onResize() {
                if (container.clientHeight === 0) return;
                let w = 0, h = 0;
                const d = [];
                for(let i = 0; i < items.length; i++){
                    const element = container.querySelector('a[href="#'.concat(items[i].url.slice(1), '"]'));
                    if (!element) continue;
                    const styles = getComputedStyle(element);
                    const offset = getLineOffset(items[i].depth) + 1, top = element.offsetTop + parseFloat(styles.paddingTop), bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
                    w = Math.max(offset, w);
                    h = Math.max(h, bottom);
                    d.push("".concat(i === 0 ? 'M' : 'L').concat(offset, " ").concat(top));
                    d.push("L".concat(offset, " ").concat(bottom));
                }
                setSvg({
                    path: d.join(' '),
                    width: w + 1,
                    height: h
                });
            }
            const observer = new ResizeObserver(onResize);
            onResize();
            observer.observe(container);
            return ({
                "ClerkTOCItems.useEffect": ()=>{
                    observer.disconnect();
                }
            })["ClerkTOCItems.useEffect"];
        }
    }["ClerkTOCItems.useEffect"], [
        items
    ]);
    if (items.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
        children: text.tocNoHeadings
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            svg ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "absolute start-0 top-0 rtl:-scale-x-100",
                style: {
                    width: svg.width,
                    height: svg.height,
                    maskImage: 'url("data:image/svg+xml,'.concat(// Inline SVG
                    encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(svg.width, " ").concat(svg.height, '"><path d="').concat(svg.path, '" stroke="black" stroke-width="1" fill="none" /></svg>')), '")')
                },
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$layout$2f$toc$2d$thumb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TocThumb"], {
                    containerRef: containerRef,
                    className: "mt-(--fd-top) h-(--fd-height) bg-fd-primary transition-all"
                })
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$utils$2f$merge$2d$refs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeRefs"])(containerRef, ref),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('flex flex-col', className),
                ...props,
                children: items.map((item, i)=>{
                    var _items_, _items_1;
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TOCItem, {
                        item: item,
                        upper: (_items_ = items[i - 1]) === null || _items_ === void 0 ? void 0 : _items_.depth,
                        lower: (_items_1 = items[i + 1]) === null || _items_1 === void 0 ? void 0 : _items_1.depth
                    }, item.url);
                })
            })
        ]
    });
}
function getItemOffset(depth) {
    if (depth <= 2) return 14;
    if (depth === 3) return 26;
    return 36;
}
function getLineOffset(depth) {
    return depth >= 3 ? 10 : 0;
}
function TOCItem(param) {
    let { item, upper = item.depth, lower = item.depth } = param;
    const offset = getLineOffset(item.depth), upperOffset = getLineOffset(upper), lowerOffset = getLineOffset(lower);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$toc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOCItem"], {
        href: item.url,
        style: {
            paddingInlineStart: getItemOffset(item.depth)
        },
        className: "prose relative py-1.5 text-sm text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
        children: [
            offset !== upperOffset ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16",
                className: "absolute -top-1.5 start-0 size-4 rtl:-scale-x-100",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("line", {
                    x1: upperOffset,
                    y1: "0",
                    x2: offset,
                    y2: "12",
                    className: "stroke-fd-foreground/10",
                    strokeWidth: "1"
                })
            }) : null,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__twMerge__as__cn$3e$__["cn"])('absolute inset-y-0 w-px bg-fd-foreground/10', offset !== upperOffset && 'top-1.5', offset !== lowerOffset && 'bottom-1.5'),
                style: {
                    insetInlineStart: offset
                }
            }),
            item.title
        ]
    });
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_31174976._.js.map