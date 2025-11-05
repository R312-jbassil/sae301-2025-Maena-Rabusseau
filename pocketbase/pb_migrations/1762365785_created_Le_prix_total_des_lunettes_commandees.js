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
        "hidden": false,
        "id": "json1444416679",
        "maxSize": 1,
        "name": "total_prix_lunettes_commandees",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_831388358",
    "indexes": [],
    "listRule": null,
    "name": "Le_prix_total_des_lunettes_commandees",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n   \n    (ROW_NUMBER() OVER()) AS id,\n    SUM(Co.Total_prix) AS total_prix_lunettes_commandees\nFROM\n    COMMANDE AS Co;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_831388358");

  return app.delete(collection);
})
