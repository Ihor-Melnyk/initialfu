/*EdocsApi.findElementByProperty(propertyName, propertyValue, collection)
propertyName - вид параметру для пошуку (поле для пошуку (строка 'name')
propertyValue - значення для параметру propertyName, 
collection - колекція елементів для пошуку.*/
var attr = EdocsApi.getInExtAttributes(CurrentDocument.id.toString()); //отримали колекцію атрибутів та таблиць
var HomeOrgEDRPOU = EdocsApi.findElementByProperty("code", "HomeOrgEDRPOU", attr.attributeValues)?.value; //отримали значення ЄДРПОУ домашньої організації
