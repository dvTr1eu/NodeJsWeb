module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tb_user", [
      {
        name: "Dao Van Trieu",
        date_of_birth: new Date("2003-12-3"),
        email: "admin@gmail.com",
        phone_number: "0348668754",
        avatar: "example@example.com",
        user_name: "dvtrieu03",
        password: "123456789",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tb_user", null, {});
  },
};
