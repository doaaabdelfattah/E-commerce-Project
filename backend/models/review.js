const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});


reviewSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

reviewSchema.set('toJSON', {
  virtuals: true,
});
module.exports = mongoose.model('Review', reviewSchema);
