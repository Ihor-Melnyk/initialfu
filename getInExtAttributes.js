var attr = EdocsApi.getInExtAttributes(CurrentDocument.id.toString());
var res = {
  attributeValues: [
    { code: "COMMENT", value: "Мені не подобається" },
    { code: "SUM", value: "7,9228" },
    { code: "LOGICALVALUE", value: "true" },
    { code: "SYSTEMURL", value: "https://qa.e-docs.ua/", text: "СИСТЕМА" },
    { code: "DOCTYPES", value: "9821", text: "Договір" },
    { code: "DOCtype", value: "9821", text: "Договір" },
    { code: "ContractorName", value: "123MiLL" },
    { code: "ContractorEDRPOU", value: "33614222" },
    { code: "HomeOrgName", value: 'ТОВ "ДЕМО СЕД"' },
    { code: "HomeOrgEDRPOU", value: "11111111" },
    { code: "edocsIncomeDocumentNumber", value: "1541144/2020-09" },
    { code: "edocsIncomeDocumentDate" },
    { code: "edocsDocSum" },
    { code: "edocsBasedOnDocNum", value: "405" },
    {
      code: "edocsBasedOnDocDate",
    },
  ],
  tableAttributes: [
    { tableCode: "table1", code: "price1", value: "7222,9228" },
    { tableCode: "table1", code: "kind", value: "9821", text: "Мандарини" },
    //row: 1 - homeOrg
    { tableCode: "table1", row: 1, code: "price1", value: "7222,9228" },
    { tableCode: "table1", row: 1, code: "count", value: "5" },
    { tableCode: "table1", row: 1, code: "kind", value: "9822", text: "Апельсини" },
    { tableCode: "Parties", row: 1, code: "LegalEntityCode", value: "33614222" },
  ],
};
