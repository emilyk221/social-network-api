const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema({
  // set id to avoid confusion with thought id
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: [280]
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    // add getter method here
  }
},
{
  toJSON: {
    getters: true
  }
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: [1],
    maxLength: [280]
  },
  createdAt: {
    type: Date,
    default: Date.now
    // getter method here
  },
  username: {
    type: String,
    required: true
  },
  reactions: [ReactionSchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;