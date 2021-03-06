Prompts = new Mongo.Collection("prompts");

// TODO: Let's find a good place to put this kind of code
Prompts.allPromptIds = function() {
  return Prompts.find().map(function(prompt) {
    return prompt._id;
  })
}

Prompts.inOrder = function() {
  return Prompts.find({}, {sort: ['text']});
};

Submissions = new Mongo.Collection("responses");

Submissions.inTableFormat = function(promptsInOrder) {
  return Submissions.find().map(function(submission) {
    var responsesInOrder = promptsInOrder.map(function(prompt) {
      var responseForPrompt = _(submission.responses).find(function(response) {
        return response.promptId === prompt._id;
      });

      if (responseForPrompt === undefined) {
        return '';
      } else {
        return responseForPrompt.response;
      }
    });

    return responsesInOrder;
  });
}
