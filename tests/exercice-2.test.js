const { averageNote } = require('../02-array-average');

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

describe("averageNote", () => {
  if (subtest == 'a' || runAll)
    it("devrait retourner 'Réussi' pour une moyenne >= 10", () => {
      const notes = [12, 14, 10, 8, 16];
      expect(averageNote(notes)).toBe("Réussi");
    });

  if (subtest == 'b' || runAll)
    it("devrait retourner 'Échoué' pour une moyenne < 10", () => {
      const notes = [4, 6, 5, 7, 3];
      expect(averageNote(notes)).toBe("Échoué");
    });

  if (subtest == 'c' || runAll)
    it("devrait gérer un tableau vide", () => {
      const notes = [];
      expect(averageNote(notes)).toBe("Échoué");
    });

  if (subtest == 'd' || runAll)
    it("devrait gérer une seule note", () => {
      const notes = [15];
      expect(averageNote(notes)).toBe("Réussi");
    });
});
