// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// A category has many products.
Category.hasMany(Product,{
  foreignKey: 'category_id',
});
// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey: 'category_id',
});
// A product belongs to many tags through product tag
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id',
});
//A tag belongs to many products through product tag. 
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id',
});




// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
