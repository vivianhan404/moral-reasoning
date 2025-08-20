const SKIP_ALLOWED = true;
const BASE_DIR =
  "https://raw.githubusercontent.com/vivianhan404/moral-reasoning/refs/heads/main";
const jsPsych = initJsPsych();
// const jsPsych = initJsPsych({
//   extensions: [{ type: chsRecord.TrialRecordExtension }],
// });

let timeline = [];

// ===== HELPER FUNCTIONS ================================================================

function makeVideoTrial(trial_name) {
  return {
    type: jsPsychVideoButtonResponse,
    stimulus: [`${BASE_DIR}/mp4/${trial_name}.mp4`],
    width: 1024,
    height: 576,
    choices: ["NEXT"],
    response_allowed_while_playing: SKIP_ALLOWED,
    // extensions: [{ type: chsRecord.TrialRecordExtension }],
  };
}

// ===== SETUP ========================================================================

// const videoConfig = {
//   type: chsRecord.VideoConfigPlugin,
// };
// timeline.push(videoConfig);

// const videoConsent = {
//   type: chsRecord.VideoConsentPlugin,
//   PIName: "Laura Schulz",
//   institution: "Massachussetts Institute of Technology",
//   PIContact: "Laura Schulz (contact: vivhan@mit.edu)",
//   payment:
//     "After you finish the study, we will email you a $5 Amazon.com gift card within approximately a week from completing the study. To be eligible for the gift card your child must be in the age range for this study, you need to submit a valid consent statement, and we need to see that there is a child with you. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
//   procedures:
//     "In this study, you and your child will go through a narrated story book with eight short stories. For each story, your child will see groups of seeds in an alien garden, and try to predict what flowers the seeds will become. Please note that this study requires your child to point to their answer (if they cannot yet click the answer), otherwise you can click for them. There are no right or wrong answers -- we just want to know how children of this age think!", // TODO
//   purpose:
//     "Children have an amazing ability to learn about why and how things happen. Understanding the relationships between causes and effects sets the foundation for much of this learning. Previous research suggests that children use features like color, shape, or number to categorize objects and learn conceptual boundaries. Here we explore if children use similar features in combination with their background knowledge to identify the underlying structure of causes and effects. For instance, in this study we want to know if children use the underlying structure of a plot of flowers to infer the seeds the flowers grew from.", // TODO
//   research_rights_statement:
//     "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)",
// };
// timeline.push(videoConsent);

// const instructions = [
//   {
//     type: jsPsychHtmlButtonResponse,
//     stimulus:
//       "This study requires your browser to be in Full Screen. Please put your browser in Full Screen mode now.",
//     choices: ["Next"],
//   },
//   {
//     type: jsPsychHtmlButtonResponse,
//     stimulus:
//       "In this study, you and your child will go through a narrated story book with eight short stories. For each story, your child will see groups of seeds in an alien garden, and try to predict what flowers the seeds will become. Please note that this study requires your child to point to their answer (if they cannot yet click the answer), otherwise you can click for them. There are no right or wrong answers -- we just want to know how children of this age think!",
//     choices: ["Next"],
//   },
// ];
// timeline = timeline.concat(instructions);

// const startRec = {
//   type: chsRecord.StartRecordPlugin,
// };
// timeline.push(startRec);

// ===== STIMULI ===============================================================================
const intro = [
  {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<h1>Moral Reasoning Demo</h1>",
    choices: ['NEXT'],
    prompt: "<p>a work in progress...</p>"
  }
];
timeline = timeline.concat(intro);

const warmup = [
  // makeVideoTrial('warmup_intro'),
  makeVideoTrial('warmup_1'),
  makeVideoTrial('warmup_2'),
  makeVideoTrial('warmup_3')
];
timeline = timeline.concat(warmup);

const categories_a = [
  // insert harm by hand
  ['reckless', 'protect'],
  ['careless', 'thoughtful'],
  ['ungrateful', 'grateful'],
  ['universalization', 'universalization'],
  ['unfair', 'fair'],
  ['rule', 'rule'],
  ['manners', 'manners']
];

let a1 = ['harm_phys_wrong_1', 'care_psych_good_1'];
let a2 = ['care_phys_good_1', 'harm_psych_wrong_1'];
for (let i = 0; i < 7; i++) {
  a1.append(categories_a[i][0] + '_wrong_1');
  a1.append(categories_a[i][1] + '_good_2');

  a2.append(categories_a[i][1] + '_good_1');
  a2.append(categories_a[i][0] + '_wrong_2');
}

// let stories = [];
// for (const trial_name of trial_names) {
//   stories = stories.concat(makeVideoTrial(trial_name));
// };
// timeline = timeline.concat(stories);

// const order = jsPsych.randomization.shuffleNoRepeats(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   (a, b) => (a >> 1) === (b >>> 1)
// );

// ===== WRAP UP ===============================================================================

// const exitSurvey = { type: chsSurvey.ExitSurveyPlugin };
// timeline.push(exitSurvey);

// const site = '<a href="https://eccl.mit.edu">https://www.eccl.mit.edu</a>';
// const debrief_string = // TODO
//   "debrief TODO";
//   // "The goal of this study is to understand what visual features children use in combination with their background knowledge to identify the underlying structure of causes and effects. During the game you and your child played, we asked children about their intuitions about multiple different features: we asked whether they thought gardens that grew from different seeds might depend on the number of each type of seed in proportion to the number of other types of seeds, whether features of the seed like spots or shape might determine the shape or size of the flowers that they grew from, or whether the variety of seeds might have been sampled from one or multiple different populations of seeds. <br><br>None of the features have been tested before on children of this age, so we are interested in what your child's intuitions tell them about how these different stories are linked, rather than whether or not they chose what you might have considered to be the correct answer. By understanding which features are useful and intuitive to children, we can understand more about how they can use these rich features to draw connections between objects as a way to make sense of their world. <br><br>Thank you so much for participating! You will be emailed a $5 Amazon gift card within a week of participation, assuming you meet all eligibility requirements. <br><br>If you want to learn more about studies similar to this one, please visit our lab website at " +
//   site +
//   "<br><br>The experiment is complete. Please close this window.";
// const debrief = {
//   type: jsPsychHtmlButtonResponse,
//   stimulus: debrief_string,
//   choices: ["End"],
// };
// timeline.push(debrief);

// const stop = {
//   type: chsRecord.StopRecordPlugin,
// };
// timeline.push(stop);

console.log(timeline); // TODO: turn off after debugging 
jsPsych.run(timeline);