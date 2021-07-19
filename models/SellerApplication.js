module.exports = (sequelize, DataTypes) => {
  const SellerApplication = sequelize.define("SellerApplication", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shopCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    portfolioLink: {
      type: DataTypes.STRING,
    },
    onlineStores: {
      type: DataTypes.JSON
    },
    perspectiveOnQuality: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sellerExperienceLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    businessMarketingUnderstanding: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return SellerApplication;
}