module.exports = ({ languageTemplates, admin }) => (user) => {
  const { uid, photoURL, displayName } = user;
  let updates = {};

  Object.keys(languageTemplates).forEach((language) => {
    let recordUid = admin.database().ref().child('projects').push().key;

    updates[`/projects/${recordUid}`] = {
      language,
      colorSchema:   'oceanicNext',
      currentEditor: uid,
      owner:         uid,
      editors:       [{ uid, photoURL, displayName }],
      title:         `Hello World! with ${language}`,
      data:          languageTemplates[language]
    };
  });

  return admin.database().ref().update(updates);
}
