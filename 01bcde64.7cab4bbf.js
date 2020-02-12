(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{124:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(1),s=(a(0),a(164)),i=a(167);const o={id:"managingusers",title:"Managing Users",sidebar_label:"Managing Users"},r={id:"dataportal/managingusers",title:"Managing Users",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/dataportal/managingusers.md",permalink:"/informdocs/docs/dataportal/managingusers",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/dataportal/managingusers.md",sidebar_label:"Managing Users",sidebar:"someSidebar",previous:{title:"Frequently Asked Questions",permalink:"/informdocs/docs/dataportal/faq"},next:{title:"Introduction",permalink:"/informdocs/docs/irt/intro"}},c=[{value:"Roles and Permissions",id:"roles-and-permissions",children:[{value:"Anonymous User",id:"anonymous-user",children:[]},{value:"Content Creator",id:"content-creator",children:[]},{value:"Site Manager",id:"site-manager",children:[]},{value:"Administrator",id:"administrator",children:[]}]},{value:"Adding New Users",id:"adding-new-users",children:[]},{value:"Adding Users to a Group",id:"adding-users-to-a-group",children:[]},{value:"Managing Existing Users",id:"managing-existing-users",children:[]},{value:"Blocking a User or Cancelling an Account",id:"blocking-a-user-or-cancelling-an-account",children:[]}],l={rightToc:c};function u({components:e,...t}){return Object(s.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"What you can do on the portal depends on the permissions given to the role assigned to you. User roles and permissions maintain the security of your site."),Object(s.b)("h2",{id:"roles-and-permissions"},"Roles and Permissions"),Object(s.b)("p",null,"The following is a list of each role used in the data portal, with a description of its purpose and a general description of what the role is able to do. Multiple roles can be assigned to a user, but generally they are in a hierarchy where any higher level role has equal and greater permissions of a lower level role."),Object(s.b)("h3",{id:"anonymous-user"},"Anonymous User"),Object(s.b)("p",null,"This is any site visitor accessing the site who is not logged in. Anyone who is not authenticated is an anonymous user. It is sometimes useful to log out of your account to view pages as an anonymous user will see them."),Object(s.b)("h4",{id:"permissions"},"Permissions:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","View and search published content")),Object(s.b)("h3",{id:"content-creator"},"Content Creator"),Object(s.b)("p",null,"Content Creators are the most common users who will have access to login and provide datasets to be published on the environmental data portal. These users should also be members of a group, which would typically be the government agency they are employed by."),Object(s.b)("h4",{id:"permissions-1"},"Permissions:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create datasets and resources"),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Edit datasets and resources related to their group."),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create visualizations (charts)"),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Edit own visualizations")),Object(s.b)("h3",{id:"site-manager"},"Site Manager"),Object(s.b)("p",null,"This role is the highest level possible for non-technical users. A Site Manager performs administrative functions, and is a role best suited for a supervisor, manager, or other trusted upper-level employee. The Site Manager is provided with a sweeping overview of the site as well as its content and users. However, they do not deal with the technical back-end configuration or code."),Object(s.b)("h4",{id:"permissions-2"},"Permissions:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create, edit and delete datasets and resources associated with any group."),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create, edit and delete visualizations (charts)."),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create, edit and delete standard webpages, dashboards and stories."),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Create and manage groups"),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Change menu structure"),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Administer users"),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Configure Harvests")),Object(s.b)("h3",{id:"administrator"},"Administrator"),Object(s.b)("p",null,"Administrators hold the highest level of all roles and permissions and have no restrictions. Administrators are able to modify settings of the underlying Drupal platform, and can modify most things of the site to meet user needs. This role is for a web professional with high technical competency and a good understanding of how Drupal works."),Object(s.b)("h4",{id:"permissions-3"},"Permissions:"),Object(s.b)("ul",{className:"contains-task-list"},Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Modify themes and layouts, and enable or disable modules."),Object(s.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(s.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Modify Drupal settings")),Object(s.b)("h2",{id:"adding-new-users"},"Adding New Users"),Object(s.b)("p",null,"As a Site Manager, a core piece of your role involves adding users to the site. You can add new users by clicking on the People link and choosing the Create user menu item for quick access or the main People page."),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/adding-users.png")})," ",Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/user-details.png")}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Key information when adding a new user")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Username:")," Create a unique username to create a new user account. The user can change their username once they\u2019re logged in as long as it\u2019s still unique, but you\u2019ll have to choose a name to begin with for the user to first access the site."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Email address:")," This is how the user will be contacted with notifications about their account and how they can recover a lost password. Choose an email that they are likely to check on a regular basis."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Password:")," The user should change whatever you originally enter for the password, but you\u2019ll need to choose the initial password so that the user can login to their account and change the profile information."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Roles:")," As you\u2019re adding a new user you\u2019ll choose which role that person should have from the list of user types detailed in another section. Choosing a role might be obvious in some cases, but in other cases it may be less clear. The role you assign will depend on how much a person needs to do with the site. Higher-level access roles automatically have all the permissions of lower-access roles, but ingeneral we recommend erring on the side of lower-access. Once you click the Create new account button at the bottom the page, the account is created and can now be managed with other existing user accounts."),Object(s.b)("h2",{id:"adding-users-to-a-group"},"Adding Users to a Group"),Object(s.b)("p",null,"New and existing users must be manually added to a group(s) in order for them to add data to the portal. Site managers can add users to groups through the group section."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Navigate to the groups page and select the group that you would like to add the user to")),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/groups-page.png")}),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Click on Group -> Add people")),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/add-people.png")}),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},"Start typing a username and a matching list of existing user names will pop-up. Select the user you want to add. You can also add a message to be sent to group administrators (e.g. informing them of a new group member). When complete, click green Add users button below to add the user.")),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/find-user.png")}),Object(s.b)("h2",{id:"managing-existing-users"},"Managing Existing Users"),Object(s.b)("p",null,"Site managers can manage users by clicking \u2018People\u2019 in the Admin Menu. From this screen you can see all existing users, their roles, and details about their account, and by clicking on individual users you can additionally see all the content the user has created. You can also edit their account to change details, add or remove a role, add them to Groups or cancel an account."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Access the user management page under the ",Object(s.b)("strong",{parentName:"li"},"People")," link  ")),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/user-management-page.png")}),Object(s.b)("p",null,"List of Users"),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/user-list.png")}),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},"Editing an existing user\u2019s account  ")),Object(s.b)("p",null,"The displayed list of users on the User Management page can be filtered and sorted using the filters at the top of the page. Once you\u2019ve found the user you wish to edit in the user table, click the \u201cedit\u201d link at the end of that user\u2019s row. On the resulting \u201cedit user\u201d page, you can edit the user\u2019s username, email, or profile information. You can also set a new password for the user. Click the \u201cSave\u201d button at the bottom of the page to save your changes."),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/edit-user.png")}),Object(s.b)("h2",{id:"blocking-a-user-or-cancelling-an-account"},"Blocking a User or Cancelling an Account"),Object(s.b)("p",null,"At some point, a user account may need to be deleted or blocked. Typically this is for internal employees who move on from the organization, but there are occasions involving external users. There are a number of options for canceling an account or blocking a user to meet a number of scenarios."),Object(s.b)("h4",{id:"block-an-account"},"Block an account"),Object(s.b)("p",null,"Blocking an account is the most simple and straightforward way to suspend an account. Blocking a user account keeps a user from logging in, and accounts can easily be unblocked. A blocked account only means that a user cannot login to their account and access your DKAN site. All of their content and profile details will remain, so nothing is lost if you want to unblock an account and restore access. By blocking an account, you keep users from creating a new account with the same details and avoid repeating the blocking process."),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/block-account.png")}),Object(s.b)("h4",{id:"cancel-an-account"},"Cancel an account"),Object(s.b)("p",null,"Canceling an account can be a permanent action, and there are several options to choose from.\nSome of the actions cannot be reversed, so you should be careful when deciding which option to choose. Below are the options for canceling an account and the implications of selecting the option. While Site Managers can cancel the account of any user on the site, users may also cancel their own accounts."),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/cancel-account.png")}),Object(s.b)("img",{alt:"Dataset Overview",src:Object(i.a)("img/dataportal/cancel-options.png")}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Disable the account and keep its contents"),Object(s.b)("br",{parentName:"p"}),"\n","If you disable the account, the details of the profile remain in tact but the user is blocked from accessing the site with their user login. By keeping the contents, any content that the user published will remain on the live site. Because the account is only disabled (blocked) the user remains as the author of the content and the profile details may still be accessed. This option is similar to just blocking an account, and it\u2019s a good temporary measure in most cases."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Disable the account and unpublish its contents"),Object(s.b)("br",{parentName:"p"}),"\n","This option blocks the user from accessing the site and all the content that the user has published will be unpublished. This means that their content will not appear on the live site, but it will still exist behind the scenes. It can be managed out of public view and in the mean time, the user cannot do anything else on the site. This is a good option if you need to review the content a user has published and need it to be off the site but still need to access it."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Delete the account and make its contents belong to the Anonymous User"),Object(s.b)("br",{parentName:"p"}),"\n","This is a permanent action. Once you delete an account, you cannot recover any of the details that were associated with the user profile. With this option you can delete the entire account as well as keep its contents. Because the account associated with the user who was the original author no longer exists, the content must be assigned to a different author. This option quickly changes the author so that the content remains on the live site, and you can change the author at any time. Again, this is a permanent option so be careful before making this selection."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Delete the account and its contents"),Object(s.b)("br",{parentName:"p"}),"\n","This is a permanent action and the most severe choice when canceling an account. This options not only deletes the user account and all the profile details, it also deletes all the content the user added. Neither the account nor the content can be recovered with this selection. As a general best practice, we recommend never deleting content if it can be edited or simply unpublished."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Require email confirmation"),Object(s.b)("br",{parentName:"p"}),"\n","For any option you choose when canceling an account, you can make sure the user is aware by requiring email confirmation. An email will be sent to the email address provided in the user\u2019s profile details. When you check the Require email confirmation box, the account won\u2019t be canceled until the user confirms through the email."))}u.isMDXComponent=!0},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),u=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},b=function(e){var t=u(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(a),h=n,p=b["".concat(o,".").concat(h)]||b[h]||d[h]||i;return a?s.a.createElement(p,r({ref:t},l,{components:a})):s.a.createElement(p,r({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var l=2;l<i;l++)o[l]=a[l];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},165:function(e,t,a){"use strict";var n=a(0),s=a(48);t.a=function(){return Object(n.useContext)(s.a)}},167:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(172);var n=a(165);function s(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},170:function(e,t,a){var n=a(66),s=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(s(e))}},171:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(s){}}return!0}},172:function(e,t,a){"use strict";var n=a(17),s=a(34),i=a(170),o="".startsWith;n(n.P+n.F*a(171)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=s(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return o?o.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);