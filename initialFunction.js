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

function setAttrValue(attributeCode, attributeValue) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = attributeValue;
  EdocsApi.setAttributeValue(attribute);
}

function setAttrText(attributeCode, attributeText) {
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.text = attributeText;
  EdocsApi.setAttributeValue(attribute);
}

function clearAttribute(attributeCode, doNotClearOnInit, isDictionary) {
  //очищення
  if (doNotClearOnInit) {
    return;
  }
  var attribute = EdocsApi.getAttributeValue(attributeCode);
  attribute.value = null;
  attribute.text = null;
  if (isDictionary) {
    attribute.itemCode = null;
    attribute.itemDictionary = null;
  }
  EdocsApi.setAttributeValue(attribute);
}
