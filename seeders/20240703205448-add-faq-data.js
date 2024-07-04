"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const faqs = [
      {
        categoryId: 1,
        question: "Can I choose the location of a room in a hotel?",
        answer: "",
      },
      {
        categoryId: 1,
        question: "What if we want to switch pack members?",
        answer: "",
      },
      { categoryId: 1, question: "What if a pack member cancels?", answer: "" },
      {
        categoryId: 1,
        question: "Will each pack member have their own bed?",
        answer: "",
      },
      {
        categoryId: 1,
        question: "Do pack members have to have the same schedule?",
        answer: "",
      },
      {
        categoryId: 1,
        question: "Will all pack members be on the same flights?",
        answer: "",
      },
      {
        categoryId: 1,
        question: "Can separate packs be combined for a discount?",
        answer: "",
      },
      {
        categoryId: 1,
        question: "What if a pack member decides to leave mid-tour?",
        answer: "",
      },
    ];

    await queryInterface.bulkInsert("faqs", [...faqs], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
