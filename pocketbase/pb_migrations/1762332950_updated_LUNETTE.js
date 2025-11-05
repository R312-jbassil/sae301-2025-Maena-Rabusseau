/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2716722970",
    "hidden": false,
    "id": "relation2720651861",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Materiau_verre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation2608917604",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Utilisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2716722970",
    "hidden": false,
    "id": "relation2564669907",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "Materiau_monture",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_722125785")

  // remove field
  collection.fields.removeById("relation2720651861")

  // remove field
  collection.fields.removeById("relation2608917604")

  // remove field
  collection.fields.removeById("relation2564669907")

  return app.save(collection)
})
