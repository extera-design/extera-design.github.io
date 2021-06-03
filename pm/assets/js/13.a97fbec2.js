(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{200:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[t._v("#")]),t._v(" Login")]),t._v(" "),a("h2",{attrs:{id:"api-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-information"}},[t._v("#")]),t._v(" API information")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("URL")]),t._v(" "),a("td",[t._v("localhost:3600/auth")])]),t._v(" "),a("tr",[a("td",[t._v("Method")]),t._v(" "),a("td",[t._v("POST")])]),t._v(" "),a("tr",[a("td",[t._v("Request body")]),t._v(" "),a("td",[a("div",{staticClass:"language-json extra-class"},[a("pre",{staticClass:"language-json"},[a("code",[a("span",{staticClass:"token punctuation"},[t._v("{"),a("br")]),t._v("  "),a("span",{staticClass:"token property"},[t._v('"email"')]),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"login@email.com"')]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("br"),a("span",{staticClass:"token property"},[t._v('  "password"')]),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"password"')]),a("span",{staticClass:"token punctuation"},[a("br"),t._v("}")])])])])])]),t._v(" "),a("tr",[a("td",[t._v("Response body")]),t._v(" "),a("td",[a("div",{staticClass:"language-json extra-class"},[a("pre",{staticClass:"language-json"},[a("code",[a("span",{staticClass:"token punctuation"},[t._v("{"),a("br")]),t._v("  "),a("span",{staticClass:"token property"},[t._v('"accessToken"')]),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"eyJhbG ... VlEZ5ew9I"')]),a("span",{staticClass:"token punctuation"},[t._v(",")]),a("br"),a("span",{staticClass:"token property"},[t._v('  "refreshToken"')]),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v('"VTBRKz ... M0E9PQ=="')]),a("span",{staticClass:"token punctuation"},[a("br"),t._v("}")])])])])])]),t._v(" "),a("tr",[a("td",[t._v("Response status code")]),t._v(" "),a("td",[t._v("201")])])])]),t._v(" "),a("h2",{attrs:{id:"request-body-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body-fields"}},[t._v("#")]),t._v(" Request body fields")]),t._v(" "),a("p",[a("code",[t._v("email")])]),a("dd",[t._v("The e-mail address that is the login for the user.")]),a("p"),t._v(" "),a("p",[a("code",[t._v("password")])]),a("dd",[t._v("The user's password")]),a("p"),t._v(" "),a("h2",{attrs:{id:"response-body-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-body-fields"}},[t._v("#")]),t._v(" Response body fields")]),t._v(" "),a("p",[a("code",[t._v("accessToken")])]),a("dd",[t._v("The access token for the logged in user. This token will have to be passed in to every other API in order for the API to execute.")]),a("p"),t._v(" "),a("p",[a("code",[t._v("refreshToken")])]),a("dd",[t._v("Not used for now. Future use will be to allow renewal of expired access tokens.")]),a("p"),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example usage")]),t._v(" "),a("Tabs",{attrs:{options:{useUrlFragment:!1}}},[a("Tab",{attrs:{name:"JavaScript"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///////////////////////////////////////////////////////////////////////////////")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The following code invokes the Login API and extracts the access token    //")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// from the API response. The token will be required for all other API calls //")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///////////////////////////////////////////////////////////////////////////////")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axios "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" accessToken "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\naxios"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:3600/auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john.doe@org.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authentication successful'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" accessToken "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authentication failed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),a("Tab",{attrs:{name:"Python"}},[a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################################")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The following code invokes the Login API and prints the access and refresh  #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tokens received in the API response. The access token is required for all   #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# other API calls, while the refresh token may be used in the future to renew #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# an expired access token                                                     #")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("###############################################################################")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# importing the requests library")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# setup the data to be passed to the API")]),t._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'email'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john.doe@org.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'password'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sending post request and saving response as response object")]),t._v("\nr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost/3600/auth'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# get the returned data")]),t._v("\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# print the returned data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Access token: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accessToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"Refresh token: ')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("refreshToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);