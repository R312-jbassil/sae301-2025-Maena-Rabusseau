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
        "cascadeDelete": false,
        "collectionId": "pbc_722125785",
        "hidden": false,
        "id": "relation1713688232",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Lunette_ID",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_Mx6S",
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
        "id": "_clone_AmLh",
        "max": 0,
        "min": 0,
        "name": "Type_Verre",
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
        "id": "_clone_fIVS",
        "max": 0,
        "min": 0,
        "name": "Type_Monture",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_3902235176",
        "hidden": false,
        "id": "relation2862392809",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "Commande_ID",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_bsel",
        "max": "",
        "min": "",
        "name": "Date_Commande",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "_clone_YzE5",
        "max": null,
        "min": null,
        "name": "Total_prix",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_3077328167",
    "indexes": [],
    "listRule": null,
    "name": "Liste_des_Lunettes_Commandees",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n    (ROW_NUMBER() OVER(ORDER BY Co.Date, L.id)) AS id,\n    L.id AS Lunette_ID, \n    L.Code_svg,\n    L.Verre AS Type_Verre,\n    L.Monture AS Type_Monture,\n\n    Co.id AS Commande_ID,\n    Co.Date AS Date_Commande,\n    Co.Total_prix\nFROM\n    COMMANDE AS Co,\n    LUNETTE AS L\nWHERE\n    Co.Lunette = L.id;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3077328167");

  return app.delete(collection);
})
