(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||i;return r?o.a.createElement(m,a(a({ref:t},l),{},{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(113)),c={id:"key-components",title:"Key components"},a={unversionedId:"key-components",id:"key-components",isDocsHomePage:!1,title:"Key components",description:"Github",source:"@site/docs/key_components.md",slug:"/key-components",permalink:"/docs/key-components",editUrl:"https://github.com/wunderio/silta/docs/key_components.md",version:"current",sidebar:"someSidebar",previous:{title:"Helping with Silta development",permalink:"/docs/help-with-silta-dev"},next:{title:"Migrating an existing Drupal project",permalink:"/docs/migrating-an-existing-drupal-project"}},s=[{value:"Github",id:"github",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Helm",id:"helm",children:[]}],l={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"github"},"Github"),Object(i.b)("p",null,"All of our code is stored in Github within our organisation. All project-specific infrastructure\nconfiguration is versioned in Git. We provide a default template for\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/wunderio/drupal-project"},"Drupal projects"),", but any Docker-compatible application\nis supported."),Object(i.b)("h2",{id:"circleci"},"CircleCI"),Object(i.b)("p",null,"CircleCI is a cloud-based CI solution that integrates very nicely with Github.\nOne of the great features is the possibility to use your own Docker images,\nwe use our own called ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wunderio/circleci-builder"},"circleci-builder"),"."),Object(i.b)("p",null,"We use CircleCi to check the repository for errors, build the codebase, create custom docker\nimages, push them to the registry and deploy a release of our Helm chart. The build process is based\non a config file located under ",Object(i.b)("inlineCode",{parentName:"p"},".circleci/config.yml")," in the git repository."),Object(i.b)("p",null,"To perform its duties, CircleCI needs certain credentials, for example to push to the docker image\nregistry or to interact with the Kubernetes master. These credentials are stored in a\n",Object(i.b)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/contexts/"},"CircleCI Contexts")," and are available to any repository\nin our Github organisation."),Object(i.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," is an open source container orchestration platform supported by all major cloud hosting providers."),Object(i.b)("h2",{id:"helm"},"Helm"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://helm.sh/"},"Helm")," is a package manager for Kubernetes. We published our own chart repository: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/wunderio/charts"},"https://github.com/wunderio/charts"),". The chart is referenced from the CircleCI configuration, and each repository can also override the default values to adapt the configuration."))}u.isMDXComponent=!0}}]);