const { whoIsAdmin } = require("../03-user-management");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

describe("whoIsAdmin", () => {
  if (subtest == 'a' || runAll)
    it("devrait retourner les noms des utilisateurs qui sont admin", () => {
      const users = [
        { nom: "Alice", age: 30, estAdmin: true },
        { nom: "Bob", age: 25, estAdmin: false },
        { nom: "Charlie", age: 35, estAdmin: true },
      ];
      expect(whoIsAdmin(users)).toEqual(["Alice", "Charlie"]);
    });

  if (subtest == 'b' || runAll)
    it("devrait retourner un tableau vide si aucun utilisateur n'est admin", () => {
      const users = [
        { nom: "Alice", age: 30, estAdmin: false },
        { nom: "Bob", age: 25, estAdmin: false },
      ];
      expect(whoIsAdmin(users)).toEqual([]);
    });

  if (subtest == 'c' || runAll)
    it("devrait gérer un tableau vide d'utilisateurs", () => {
      const users = [];
      expect(whoIsAdmin(users)).toEqual([]);
    });

  if (subtest == 'd' || runAll)
    it("devrait gérer un seul utilisateur qui est admin", () => {
      const users = [{ nom: "Alice", age: 30, estAdmin: true }];
      expect(whoIsAdmin(users)).toEqual(["Alice"]);
    });
});
