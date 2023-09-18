//post
var methodData = { userId: CurrentUser.login, Id: attrEmployee.value, phone: attrPhoneNumber.value };
var methodRespons = EdocsApi.runExternalFunction("1С", "UpdatePeopleData", methodData);
if (methodRespons.data && methodRespons.status == 0) {
  throw methodRespons.data.errors.details;
}

//get
var methodRespons = EdocsApi.runExternalFunction("1С", "GetPeopleData", null, "get");
if (methodRespons.data && methodRespons.status == 0) {
  throw methodRespons.data.errors.details;
}
