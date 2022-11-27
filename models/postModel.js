const mongoose = require('mongoose');
const slugify = require('slugify');
// const validator = require('validator');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A post must have a name'],
      unique: true,
      trim: true
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A post must have a summary']
    },
    imageCover: {
      type: String,
      required: [true, 'A post must have a cover image']
    },
    description: {
      type: String,
      required: [true, 'A post must have a description']
    },
    dates: [Date],
     user: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);



// // DOCUMENT MIDDLEWARE: runs before .save() and .create()
// tourSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });


// // tourSchema.post('save', function(doc, next) {
// //   console.log(doc);
// //   next();
// // });

// // QUERY MIDDLEWARE
// // tourSchema.pre('find', function(next) {
// tourSchema.pre(/^find/, function(next) {
//   this.find({ secretTour: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// tourSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// tourSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
