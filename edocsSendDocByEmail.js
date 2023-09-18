const to = "igor.melnick85@gmail.com";
const letter = {
  subject: "тема листа",
  text: "текст листа",
  separateMessages: "false",
  recepients: to ? [{ type: "to", email: to }] : [],
};

EdocsApi.edocsSendDocByEmail(letter);
