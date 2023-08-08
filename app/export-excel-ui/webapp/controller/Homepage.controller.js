sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("exportexcelui.controller.Homepage", {
            onInit: function () {

            },
            onExport: function(oEvent){
                debugger;
                MessageBox.show(
                   "deneme", {
                    icon: MessageBox.Icon.CONFIRMATION,
                    title: "confirmationTitle",
                    actions: [MessageBox.Action.OK, MessageBox.Action.CANCEL],
                    emphasizedAction: MessageBox.Action.OK,
                    onClose: (oAction) => {
                        if (oAction === "OK") {
                            this._exportTable();
                        }
                        if (oAction === "CANCEL") {
                            return
                        }
                    }
                });
            }
        });
    });
