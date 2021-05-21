(this["webpackJsonphw19-employee-directory"]=this["webpackJsonphw19-employee-directory"]||[]).push([[0],{42:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a(12),l=a.n(r),n=a(13),c=a(14),i=a(17),o=a(16),d=a(15),m=a.n(d),b=function(e){return m.a.get("https://randomuser.me/api/"+e)},j=a(0);var h=function(e){return Object(j.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var u=function(e){return Object(j.jsx)("form",{id:"filterForm",onSubmit:e.searchEmployee,children:Object(j.jsx)("div",{className:"modal fade",id:"filterModal",tabIndex:"-1","aria-labelledby":"filterModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"filterModalLabel",children:"Filter Search from API"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"filter-results",className:"col-form-label",children:"Quantity to Request:"}),Object(j.jsx)("input",{type:"number",className:"form-control",id:"filter-results",defaultValue:e.filter.quantity,name:"quantity"})]})}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success",children:"Refresh"})]})]})})})})};var f=function(){return Object(j.jsx)("h1",{className:"text-danger",children:Object(j.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Error, nobody with that name on this list!"})})};function p(e){var t=e;return 0===t.employee.length?Object(j.jsx)(f,{}):Object(j.jsx)("div",{children:Object(j.jsxs)("table",{className:"table table-striped table-hover align-middle table-bordered sortable my-3",children:[Object(j.jsx)("thead",{className:"table-success",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col"}),Object(j.jsxs)("th",{scope:"col",children:["First Name",Object(j.jsx)("label",{className:"pull-right",onClick:e.handleFormSubmit,children:Object(j.jsx)("i",{className:"fa fa-fw fa-sort",id:"First Name"})})]}),Object(j.jsxs)("th",{scope:"col",children:["Last Name",Object(j.jsx)("label",{className:"pull-right",onClick:e.handleFormSubmit,children:Object(j.jsx)("i",{className:"fa fa-fw fa-sort",id:"Last Name"})})]}),Object(j.jsxs)("th",{scope:"col",children:["Age",Object(j.jsx)("label",{className:"pull-right",onClick:e.handleFormSubmit,children:Object(j.jsx)("i",{className:"fa fa-fw fa-sort",id:"Age"})})]}),Object(j.jsxs)("th",{scope:"col",children:["Gender",Object(j.jsx)("label",{className:"pull-right",onClick:e.handleFormSubmit,children:Object(j.jsx)("i",{className:"fa fa-fw fa-sort",id:"Gender"})})]}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"Location"})]})}),Object(j.jsx)("tbody",{children:t.employee.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"text-center",children:Object(j.jsx)("img",{alt:e.name.first,src:e.picture.thumbnail})}),Object(j.jsx)("td",{children:e.name.first}),Object(j.jsx)("td",{children:e.name.last}),Object(j.jsx)("td",{children:e.dob.age}),Object(j.jsx)("td",{children:e.gender}),Object(j.jsx)("td",{children:e.email}),Object(j.jsxs)("td",{children:[e.location.city,", ",e.location.state]})]},e.email)}))})]})})}var y=function(e){return Object(j.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(j.jsx)("h5",{className:"text-white h4 px-3 align-middle",children:Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary mx-2","data-bs-toggle":"modal","data-bs-target":"#filterModal","data-bs-whatever":"filter",children:"\u2714"}),"Employee Directory"]})})})};function x(e){return Object(j.jsxs)("form",{className:"d-flex px-3 my-3",children:[Object(j.jsx)("input",{value:e.search,onChange:e.handleInputChange,name:"search",list:"employee",type:"text",className:"form-control px-1 mx-1",placeholder:"Search For an Employee",id:"search"}),Object(j.jsx)("datalist",{id:"employee"})]})}var O=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,r=new Array(s),l=0;l<s;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employee:[],employeeFilter:[],filter:{quantity:5,male:!0,female:!0,us:!0,gb:!1,au:!1},sortby:"First Name+"},e.searchEmployee=function(t){var a="?format=pretty&results="+t.target.quantity.value+"&nat=us&exc=login,registered,nat";e.setState.filter({quantity:t.target.quantity.value}),console.log(a),b(a).then((function(t){e.setState({employee:t.data.results,employeeFilter:t.data.results})})).catch((function(e){return console.log(e)}))},e.handleSortClick=function(t){switch(t.target.id){case"First Name":"First Name+"===e.state.sortby?e.setState({sortby:"First Name-"}):e.setState({sortby:"First Name+"});break;case"Last Name":"Last Name+"===e.state.sortby?e.setState({sortby:"Last Name-"}):e.setState({sortby:"Last Name+"});break;case"Age":"Age+"===e.state.sortby?e.setState({sortby:"Age-"}):e.setState({sortby:"Age+"});break;case"Gender":"Gender+"===e.state.sortby?e.setState({sortby:"Gender-"}):e.setState({sortby:"Gender+"})}e.handleSort()},e.handleSort=function(){switch(e.state.sortby){case"First Name+":e.state.employeeFilter.sort((function(e,t){return e.name.first>t.name.first?1:-1}));break;case"First Name-":e.state.employeeFilter.sort((function(e,t){return e.name.first<t.name.first?1:-1}));break;case"Last Name+":e.state.employeeFilter.sort((function(e,t){return e.name.last>t.name.last?1:-1}));break;case"Last Name-":e.state.employeeFilter.sort((function(e,t){return e.name.last<t.name.last?1:-1}));break;case"Age+":e.state.employeeFilter.sort((function(e,t){return parseInt(e.dob.age)>parseInt(t.dob.age)?1:-1}));break;case"Age-":e.state.employeeFilter.sort((function(e,t){return parseInt(e.dob.age)<parseInt(t.dob.age)?1:-1}));break;case"Gender+":e.state.employeeFilter.sort((function(e,t){return e.gender>t.gender?1:-1}));break;case"Gender-":e.state.employeeFilter.sort((function(e,t){return e.gender<t.gender?1:-1}))}return e.state.employeeFilter},e.handleInputChange=function(t){var a=t.target.value.toLowerCase();e.setState({employeeFilter:e.state.employee.filter((function(e){return e.name.first.toLowerCase().includes(a)||e.name.last.toLowerCase().includes(a)?e:void 0}))})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;b("?format=pretty&results=100&nat=us&exc=login,registered,nat").then((function(t){e.setState({employee:t.data.results,employeeFilter:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(y,{}),Object(j.jsx)(x,{handleInputChange:this.handleInputChange,employee:this.state.employeeFilter}),Object(j.jsxs)(h,{children:[Object(j.jsx)(p,{employee:this.handleSort(),handleFormSubmit:this.handleSortClick}),Object(j.jsx)(u,{searchEmployee:this.searchEmployee,filter:this.state.filter})]})]})}}]),a}(s.Component);var g=function(){return Object(j.jsx)(O,{})};a(41);l.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.60aef61c.chunk.js.map