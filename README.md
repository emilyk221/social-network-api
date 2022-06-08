
  # Social-Network-API
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description
  This application is an example of how MongoDB, a noSQL database, can be used to create an API for a social network application. Users can share thoughts, share reactions to other user’s thoughts, and add friends to their friend list. Mongoose is used here to create models and validation for data that is stored with MongoDB. The models include users and thoughts, as well as schema for reactions and a parameter in the user model called friends, used to contain other users as friends. The API routes follow CRUD principles, allowing for creation of new users and thoughts, finding all users and thoughts, finding a user by their id, finding a thought by its id, updating users and thoughts, deleting users and thoughts. When a user is deleted, their associated thoughts are also deleted. The API routes also allow for the creation and deletion of reactions to thoughts and the creation and deletion of friends of an individual user. Using MongoDB and Mongoose together allow usable and consistent model data and associations without explicitly defining sometimes tricky associations as is needed when using a SQL database. These API routes are the basics of the server-side for a social network web application using Express.js, MongoDB, and Mongoose.

  ## Table of Contents
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Usage
  This code can be used as a start to the setup of a basic social network web application. This project only includes the models and API routes and does not include a front end.

  A walkthrough video of the API routes being testing using insomnia can be found at [https://drive.google.com/file/d/1_tlPXYh6tnw6Wtflm9nOvUTcvtyoCOMx/view](https://drive.google.com/file/d/1_tlPXYh6tnw6Wtflm9nOvUTcvtyoCOMx/view)

  ## License
  
    Copyright 2022 by emilyk221.

    Licensed under the MIT license.
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
  [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)

  ## Questions
  Please visit my GitHub profile [here](https://github.com/emilyk221) for more information about this and other projects.