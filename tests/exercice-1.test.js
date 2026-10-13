const { createUser } = require("../01-create-user");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

describe("createUser", () => {
  if (subtest == 'a' || runAll)
    it("devrait créer un objet utilisateur avec les bonnes propriétés", () => {
      const user = createUser("John", 30, true);
      expect(user).toEqual({
        nom: "John",
        age: 30,
        estConnecté: true,
      });
    });

  if (subtest == 'b' || runAll)
    it("devrait gérer les chaînes vides et les valeurs zéro", () => {
      const user = createUser("", 0, false);
      expect(user).toEqual({
        nom: "",
        age: 0,
        estConnecté: false,
      });
    });

  if (subtest == 'c' || runAll)
    it("devrait gérer différents types de données pour les propriétés", () => {
      const user = createUser("Alice", "25", "true");
      expect(user).toEqual({
        nom: "Alice",
        age: "25",
        estConnecté: "true",
      });
    });
});
