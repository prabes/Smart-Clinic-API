module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'lab_assistants',
      'password',
     Sequelize.STRING
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'lab_assistants',
      'password'
    );
  }
}