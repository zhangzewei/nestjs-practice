const express = require('express');
const mongoose = require('mongoose');

const connectMongoose = async () => {
  try {
    const uri =
      'mongodb+srv://lanamarkzzw:pass123@cluster0.zxzpzz8.mongodb.net/?retryWrites=true&w=majority';
    await mongoose.connect(uri);
    console.log('connect success');
  } catch (e) {
    console.dir(e);
  }
};

connectMongoose();
