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
        "hidden": false,
        "id": "json214144435",
        "maxSize": 1,
        "name": "montant_total_commandes",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      }
    ],
    "id": "pbc_982950519",
    "indexes": [],
    "listRule": null,
    "name": "Montant_Total_des_Commandes_par_Utilisateur",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT\n   \n    (ROW_NUMBER() OVER(ORDER BY U.id)) AS id, \n    \n   \n    U.id AS id_utilisateur,\n    \n  \n    SUM(Co.Total_prix) AS montant_total_commandes\nFROM\n    users AS U,         \n    COMMANDE AS Co      \nWHERE\n   \n    U.id = Co.Utilisateur\nGROUP BY\n    U.id\nORDER BY\n    U.id;",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_982950519");

  return app.delete(collection);
})
