'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const [user] = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE email='user@example.com';`
    );

    const userId = user[0].id;

    await queryInterface.bulkInsert('Posts', [
      {
        content: 'Hello world, this is my first post!',
        authorId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: 'Another day, another post.',
        authorId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Posts', null, {});
  }
};
