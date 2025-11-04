/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716722970")

  // update collection data
  unmarshal({
    "name": "MATERIAU"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716722970")

  // update collection data
  unmarshal({
    "name": "Materiau"
  }, collection)

  return app.save(collection)
})
