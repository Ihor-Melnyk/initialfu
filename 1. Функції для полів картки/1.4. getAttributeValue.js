/*EdocsApi.getAttributeValue('code');
code - код поля картки документа */

//атрибут
var attributevalue = EdocsApi.getAttributeValue("RegDate");
attributevalue = { code: "RegDate", value: "2024-01-07T22:00:00.000Z", text: null };

//таблиця
var tableValue = EdocsApi.getAttributeValue("FoodTable");
tableValue = {
  code: "FoodTable",
  type: "table",
  value: [
    [
      { code: "dataFood", value: "2024-01-07T22:00:00.000Z", text: null },
      { code: "FoodChoice", value: "Обід", text: null },
    ],
    [
      { code: "dataFood", value: "2024-01-08T22:00:00.000Z", text: null },
      { code: "FoodChoice", value: null, text: null },
    ],
  ],
};

//чекбокс -
var checkbox = EdocsApi.getAttributeValue("VATPurchase");
checkbox = { code: "VATPurchase", value: "true", text: null };

//довідник
var dictionary = EdocsApi.getAttributeValue("BranchTracks");
dictionary = { code: "BranchTracks", value: "1", text: 'ВАТ "Конотопський комбінат хлібопродуктів"', itemCode: "1", itemDictionary: "adjectiveSurName" };
