import * as Scrivito from "scrivito";

const MailchimpSignUpWidget = Scrivito.provideWidgetClass("MailchimpSignUpWidget", {
  attributes: {
    buttonText: "string",
    successMessage: "string",
  },
});

export default MailchimpSignUpWidget;
