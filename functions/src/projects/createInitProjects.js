module.exports = ({ languageTemplates, admin }) => (user) => {
  const { uid } = user;
  let updates = {};

  Object.keys(languageTemplates).forEach((language) => {
    let recordUid = admin.database().ref().child('projects').push().key;

    updates[`/projects/${recordUid}`] = {
      language,
      owner:         uid,
      participants:  [uid],
      currentEditor: uid,
      title:         `Hello World! with ${language}`,
      entry:         languageTemplates[language]
    };
  });

  return admin.database().ref().update(updates);
}
