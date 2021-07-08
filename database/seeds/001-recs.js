exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recommendations")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recommendations").insert([
        {
          id: 1,
          name: "Blue Dream",
          description: "Helps with inflammation",
          tags: "arthritis",
          user_id: 16,
        },
        {
          id: 2,
          name: "Sativa",
          description: "Decreases pain and stimulates appetite",
          tags: "chemo",
          user_id: 9,
        },
      ]);
    });
};
