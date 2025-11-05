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
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation84848196",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "id_utilisateur",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_722125785",
        "hidden": false,
        "id": "_clone_OMXP",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "id_lunette",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_5Ca7",
        "max": "",
        "min": "",
        "name": "Date_Commande",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_X7h3",
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
        "id": "_clone_pMYV",
        "max": 0,
        "min": 0,
        "name": "Verre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_321201112",
    "indexes": [],
    "listRule": null,
    "name": "Lunettes_Commandees_par_Utilisateur",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n\n    (ROW_NUMBER() OVER(ORDER BY U.id, Co.Lunette)) AS id, \n    \n   \n    U.id AS id_utilisateur,\n    \n\n    Co.Lunette AS id_lunette,\n    \n  \n    Co.Date AS Date_Commande,\n    L.Code_svg,\n    L.Verre\nFROM\n    users AS U,         \n    COMMANDE AS Co,     \n    LUNETTE AS L        \nWHERE\n  \n    U.id = Co.Utilisateur\n    \n    AND Co.Lunette = L.id\nORDER BY\n    U.id, \n    Co.Date;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_321201112");

  return app.delete(collection);
})
