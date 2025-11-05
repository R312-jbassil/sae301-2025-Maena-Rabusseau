/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_czZW",
        "max": 0,
        "min": 0,
        "name": "Code_svg",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_VSpD",
        "max": 0,
        "min": 0,
        "name": "Verre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_o0ir",
        "max": 0,
        "min": 0,
        "name": "Monture",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_546988234",
    "indexes": [],
    "listRule": null,
    "name": "Listes_des_lunettes_personnalisees_et_non_commandees",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n   \n    L.id AS id,\n    L.Code_svg,\n    L.Verre,\n    L.Monture\nFROM\n    LUNETTE AS L\nWHERE\n    L.id NOT IN (\n        SELECT Lunette \n        FROM COMMANDE\n    );",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_546988234");

  return app.delete(collection);
})
