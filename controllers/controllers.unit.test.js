const Recipe = require("../../client/src/components/Recipe/Recipe");
const { createRecipe } = require("./controllers");

describe("Creating Recipes", () => {
  it.only("Should not create a recipe", async () => {
    Recipe.findOne = jest.fn().mockReturnValueOnce({ title: "cookie" });
    Recipe.prototype.save = jest.fn().mockImplementation(() => {});
    await expect(createRecipe("sadsd", "asdd", "sdsd")).rejects.toThrowError();
  });
});
