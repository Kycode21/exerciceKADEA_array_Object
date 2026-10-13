const {
  showStudentBulletin,
} = require("../04-show-student-bulletin");

let subtest = process.argv[3]?.split('=')[1];
let runAll = subtest == undefined;

describe("showStudentBulletin", () => {
  if (subtest == 'a' || runAll)
    it("doit retourner un tableau vide lorsqu'on lui donne un tableau vide", () => {
      expect(showStudentBulletin([])).toEqual([]);
    });

  if (subtest == 'b' || runAll)
    it("doit calculer la moyenne correcte et le commentaire pour un seul élève", () => {
      const eleves = [{ nom: "Alice", notes: [18, 16, 17] }];
      expect(showStudentBulletin(eleves)).toEqual([
        { nom: "Alice", moyenne: 17, commentaire: "Excellent" },
      ]);
    });

  if (subtest == 'c' || runAll)
    it("doit arrondir la moyenne à deux décimales", () => {
      const eleves = [{ nom: "Bob", notes: [12.333, 12.333, 12.333] }];
      expect(showStudentBulletin(eleves)).toEqual([
        { nom: "Bob", moyenne: 12.33, commentaire: "Bien" },
      ]);
    });

  if (subtest == 'd' || runAll)
    it("doit attribuer le bon commentaire pour chaque tranche de note", () => {
      const eleves = [
        { nom: "Claire", notes: [16, 16, 16] }, // 16
        { nom: "David", notes: [14, 14, 14] }, // 14
        { nom: "Eva", notes: [12, 12, 12] }, // 12
        { nom: "Fred", notes: [10, 10, 10] }, // 10
        { nom: "Gina", notes: [8, 9, 10] }, // 9
      ];
      expect(showStudentBulletin(eleves)).toEqual([
        { nom: "Claire", moyenne: 16, commentaire: "Excellent" },
        { nom: "David", moyenne: 14, commentaire: "Très Bien" },
        { nom: "Eva", moyenne: 12, commentaire: "Bien" },
        { nom: "Fred", moyenne: 10, commentaire: "Passable" },
        { nom: "Gina", moyenne: 9, commentaire: "À revoir" },
      ]);
    });

  if (subtest == 'e' || runAll)
    it("doit gérer les élèves sans notes (la moyenne doit être 0)", () => {
      const eleves = [{ nom: "Hugo", notes: [] }];
      expect(showStudentBulletin(eleves)).toEqual([
        { nom: "Hugo", moyenne: 0, commentaire: "À revoir" },
      ]);
    });

  if (subtest == 'f' || runAll)
    it("doit fonctionner avec des notes négatives et nulles", () => {
      const eleves = [
        { nom: "Isa", notes: [0, 0, 0] },
        { nom: "Jack", notes: [-2, 2, 0] },
      ];
      expect(showStudentBulletin(eleves)).toEqual([
        { nom: "Isa", moyenne: 0, commentaire: "À revoir" },
        { nom: "Jack", moyenne: 0, commentaire: "À revoir" },
      ]);
    });
});
