(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),a=(r(0),r(113)),o={id:"docker-images",title:"Docker images"},s={unversionedId:"docker-images",id:"docker-images",isDocsHomePage:!1,title:"Docker images",description:"Here is a list of all the docker images used in the context of the Silta project.",source:"@site/docs/docker_images.md",slug:"/docker-images",permalink:"/docs/docker-images",editUrl:"https://github.com/wunderio/silta/docs/docker_images.md",version:"current",sidebar:"someSidebar",previous:{title:"Deployment workflow",permalink:"/docs/deployment-workflow"},next:{title:"Encrypting sensitive configuration",permalink:"/docs/encrypting-sensitive-configuration"}},l=[{value:"Base images",id:"base-images",children:[{value:"Drupal PHP-FPM",id:"drupal-php-fpm",children:[]},{value:"Drupal Nginx",id:"drupal-nginx",children:[]}]},{value:"Drupal Shell",id:"drupal-shell",children:[]},{value:"Cluster tools",id:"cluster-tools",children:[{value:"sshd Gitauth",id:"sshd-gitauth",children:[]},{value:"Silta-Splash",id:"silta-splash",children:[]},{value:"Silta-deployment-remover",id:"silta-deployment-remover",children:[]}]},{value:"Tools",id:"tools",children:[{value:"Silta-CircleCI",id:"silta-circleci",children:[]},{value:"test images",id:"test-images",children:[]}]}],c={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here is a list of all the docker images used in the context of the Silta project.\nEach of these images has a dedicated repository on Github and is built and published\nautomatically on DockerHub."),Object(a.b)("h2",{id:"base-images"},"Base images"),Object(a.b)("p",null,"These images are referenced in the project-specific files."),Object(a.b)("h3",{id:"drupal-php-fpm"},"Drupal PHP-FPM"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/drupal-php-fpm"},"https://github.com/wunderio/drupal-php-fpm")),Object(a.b)("p",null,"This image provides a container running php-fpm with a configuration\noptimised for Drupal projects. The image doesn't contain any PHP code,\nthis will be added by the project-specific Dockerfiles that extend this\nimage."),Object(a.b)("h3",{id:"drupal-nginx"},"Drupal Nginx"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/drupal-nginx"},"https://github.com/wunderio/drupal-nginx")),Object(a.b)("p",null,"This nginx image serves as a base for the project-specific nginx Dockerfile,\nand is configured to serve static content and proxy requests to PHP-FPM."),Object(a.b)("h2",{id:"drupal-shell"},"Drupal Shell"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/drupal-shell"},"https://github.com/wunderio/drupal-shell")),Object(a.b)("p",null,"This image extends the Drupal PHP-FPM image and adds an ssh server configured\nto allow access based on Github repository access."),Object(a.b)("h2",{id:"cluster-tools"},"Cluster tools"),Object(a.b)("h3",{id:"sshd-gitauth"},"sshd Gitauth"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/sshd-gitauth"},"https://github.com/wunderio/sshd-gitauth")),Object(a.b)("p",null,"This image provides an SSH jumphost, a single point to log into the individual\nDrupal shell containers."),Object(a.b)("h3",{id:"silta-splash"},"Silta-Splash"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/silta-splash"},"https://github.com/wunderio/silta-splash")),Object(a.b)("p",null,'A minimal image with general web assets served by nginx, used to serve simple\nresponses such as a protective default robots.txt and a default "project not found"\npage for Silta.'),Object(a.b)("h3",{id:"silta-deployment-remover"},"Silta-deployment-remover"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/silta-deployment-remover"},"https://github.com/wunderio/silta-deployment-remover")),Object(a.b)("p",null,"This image provides a web server that can be configured to respond to certain requests\nfrom Github webhooks, so that silta environments are deleted automatically when the\nrelated branch is removed."),Object(a.b)("h2",{id:"tools"},"Tools"),Object(a.b)("h3",{id:"silta-circleci"},"Silta-CircleCI"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/silta-circleci"},"https://github.com/wunderio/silta-circleci")),Object(a.b)("p",null,"An extension of the default PHP+Node.js CircleCI image, with added support for commonly\nused Drupal tools (drush, phpcs), as well as the Helm, Kubernetes and Google Cloud\ntools required to interact with our cluster."),Object(a.b)("h3",{id:"test-images"},"test images"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/wunderio/silta-test-codebase"},"https://github.com/wunderio/silta-test-codebase")),Object(a.b)("p",null,"This set of images are used when running automated test in place of the built\nimages from specific projects."))}u.isMDXComponent=!0},113:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,b=p["".concat(o,".").concat(h)]||p[h]||d[h]||a;return r?i.a.createElement(b,s(s({ref:t},c),{},{components:r})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);