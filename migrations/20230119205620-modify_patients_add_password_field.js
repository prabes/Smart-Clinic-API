module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'patients',
      'password',
     Sequelize.STRING
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'patients',
      'password'
    );
  }
}