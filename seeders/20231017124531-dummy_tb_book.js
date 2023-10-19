'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) 
  {
    const date = new Date();
    await queryInterface.bulkInsert('tb_books', [
      {
      title: 'book 1',
      author: 'john due',
      publish_year: '2023',
      description: 'book 1',
      genre: 'comics',
      createdAt: date,
      updatedAt: date
      },
      {
        title: 'book 2',
        author: 'hendar',
        publish_year: '2022',
        description: 'book 2',
        genre: 'novel',
        createdAt: date,
        updatedAt: date
        },
      {
          title: 'book 3',
          author: 'evan',
          publish_year: '2021',
          description: 'book 3',
          genre: 'horror',
          createdAt: date,
          updatedAt: date
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('tb_books', null, {});
  }
};
