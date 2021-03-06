MochaWeb.testOnly(function() {

  describe("prompts", function() {

    it("should let us get all prompt ids", function() {
      // Given
      Prompts.remove({});
      var id = Prompts.insert({text: 'What is your favorite color?'});

      // When
      var promptIds = Prompts.allPromptIds();

      // Then
      chai.expect(promptIds).to.have.members([id]);
    });
  });
});
