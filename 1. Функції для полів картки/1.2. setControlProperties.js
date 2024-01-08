/*EdocsApi.setControlProperties(properties);
properties - обʼєкт із кодом атрибута та значеннями властивостей атрибуту картки*/
EdocsApi.setControlProperties({ code: "RegDate", hidden: true, disabled: true, required: false }); //робить атрибут RegDate не видимим, лише для читання, не обовʼязковим (зазвичай, в такому випадку, додатково очищують атрибут EdocsApi.setAttributeValue({code: 'RegDate', value: ''})).
EdocsApi.setControlProperties({ code: "RegDate", hidden: false, disabled: false, required: true }); //робить атрибут RegDate видимим, доступним до редагування, обовʼязковим.
EdocsApi.setControlProperties({ code: "RegDate", hidden: false, disabled: true, required: true }); //робить атрибут RegDate видимим, лише для читання, обовʼязковим.

function setPropertyRequired(attributeName, boolValue = true) {
  //обов"язкове
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.required = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyHidden(attributeName, boolValue = true) {
  //приховане
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.hidden = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

function setPropertyDisabled(attributeName, boolValue = true) {
  //недоступне
  var attributeProps = EdocsApi.getControlProperties(attributeName);
  attributeProps.disabled = boolValue;
  EdocsApi.setControlProperties(attributeProps);
}

setPropertyHidden("RegDate"); //робить атрибут RegDate не видимим
setPropertyHidden("RegDate", false); //робить атрибут RegDate видимим
