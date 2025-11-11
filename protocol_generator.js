function generateProtocol(child, pastSessions) {
  // == BOILERPLATE ===================================================
  const frames = {
    "video-config": {
      "kind": "exp-video-config",
      "troubleshootingIntro": "If you're having any trouble getting your webcam set up, please feel free to email Vivian Han at vivhan@mit.edu and we'd be glad to help you out!"
    },
    "video-consent": {
      "kind": "exp-lookit-video-consent",
      "template": "consent_005",
      "PIName": "Laura Schulz",
      "institution": "Massachusetts Institute of Technology",
      "PIContact": "the ECCL lab at vivhan@mit.edu",
      "purpose": "Our goal is to survey and categorize the different rules that children use to explain morally acceptable and unacceptable behavior. One possibility is that children are mainly sensitive to two types of moral violations, harm and unfairness. However, we believe that even young children can use a variety of other moral concepts. Seeing how explanations differ across age groups could help us understand how children develop moral reasoning skills.",
      "procedures": "In this study, you and your child will see short stories where a child does something right or wrong. After each story, your child will be asked to explain out loud why that action was good or why it was wrong. There are no right or wrong answers -- we just want to know how children of this age think!",
      "risk_statement": "There are no expected risks if you participate in the study.",
      "payment": "After you finish the study, we will email you a $5 Amazon.com gift card within approximately a week from completing the study. To be eligible for the gift card your child must be in the age range for this study and speak English, you need to submit a valid consent statement, and we need to see that there is a child with you. You will only be compensated for the first time you participate in this study. But we will send a gift card even if you do not finish the whole study or we are not able to use your child's data! There are no other direct benefits to you or your child from participating, but we hope you will enjoy the experience.",
      "include_databrary": true,
      "research_rights_statement": "You are not waiving any legal claims, rights or remedies because of your participation in this research study.  If you feel you have been treated unfairly, or you have questions regarding your rights as a research subject, you may contact the Committee On the Use of Humans as Experimental Subjects (COUHES), Massachusetts of Technology, 77 Massachusetts Avenue Cambridge, MA 02139 (contact: couhes@mit.edu)"
    },
    "video-quality": {
      "kind": "exp-video-config-quality",
      "title": "Webcam setup for the study",
      "introText": "Please check each of the following to ensure we're able to use your video:",
      "requireItemConfirmation": true,
      "completedItemText": "Did it!",
      "instructionBlocks": [
        {
          "text": "<strong>Make sure the webcam you're using is roughly centered</strong> relative to this monitor. This makes it much easier for us to tell whether your child is pointing to the left or right!",
          "image": {
            "src": "https://s3.amazonaws.com/lookitcontents/website/centering.png",
            "alt": "Example images of using centered external webcam on monitor or built-in webcam on laptop."
          }
        },
        {
          "text": "<strong>Turn off any other monitors</strong> connected to your computer, besides the one with the centered webcam. (If there's just one monitor, you're all set!)",
          "image": {
            "src": "https://s3.amazonaws.com/lookitcontents/website/monitors.png",
            "alt": "Example images showing laptop screen turned off if using external monitor and webcam, or external monitor turned off if using built-in webcam and laptop screen."
          }
        },
        {
          "text": "Check the lighting by making sure you can <strong>clearly see your own eyes</strong> on the webcam view to the right. You may need to either turn on a light or reduce light coming from behind you.",
          "image": {
            "src": "https://s3.amazonaws.com/lookitcontents/website/lighting.png",
            "alt": "Example images showing good lighting, room too dark, and backlit scene where eyes are not visible."
          }
        },
        {
          "text": "If it's practical, <strong>minimize exciting things</strong> that are visible behind or to the side of the screen--for instance, by facing a wall instead of the kitchen. (If this isn't practical for you, don't worry about it--just check the box!)",
          "image": {
            "src": "https://s3.amazonaws.com/lookitcontents/website/distractions.png",
            "alt": "Example images showing a child and puppy next to the computer, versus a computer just on its own."
          }
        }
      ],
      "requireTestVideo": false,
      "showRecordMenu": false,
      "recordingInstructionText": "You should be able to see your camera view above."
    },
    "instructions": {
      "kind": "exp-lookit-instructions",
      "blocks": [
        {
          "text": "Please try playing this sample audio to make sure you'll be able to hear the story.",
          "title": "Adjust your speakers",
          "mediaBlock": {
            "text": "You should hear 'Ready to go?'",
            "isVideo": false,
            "sources": [
              {
                "src": "https://s3.amazonaws.com/lookitcontents/exp-physics-final/audio/ready.mp3",
                "type": "audio/mp3"
              },
              {
                "src": "https://s3.amazonaws.com/lookitcontents/exp-physics-final/audio/ready.ogg",
                "type": "audio/ogg"
              }
            ],
            "mustPlay": true,
            "warningText": "Please try playing the sample audio."
          }
        },
        {
            "title": "Study Procedure",
            "listblocks": [
                {
                    "text": "In this study, we're going to show your child a series of stories."
                },
                {
                    "text": "For each one, we'll show a picture and tell a short story about a child, then ask your child a question about the character's behavior."
                },
                {
                    "text": "On the next page, we'll ask your child to answer the question out loud."
                },
                {
                    "text": "Encourage your child to respond to the question, but try not to answer for them. We are simply interested in what your child thinks."
                },
                {
                    "text": "When you're done, you can click next to advance to the next story."
                }
            ]
        }
      ],
      "showWebcam": true,
      "webcamBlocks": [
        {
          "title": "Make sure we can see you",
          "listblocks": [
            {
              "text": "Take a look at your webcam view above. Get comfy, and adjust your own position or the computer as needed so both you and your child are visible."
            },
            {
              "text": "This isn't a Skype call - no one in the lab can see you - but the recorded video of your participation will be sent to the lab to help with data analysis. It's helpful for us to be able to see if your child was pointing or looking confused, for example."
            }
          ]
        }
      ],
      "nextButtonText": "Next"
    },
    "exit-survey": {
      "kind": "exp-lookit-exit-survey",
      "debriefing": {
        "blocks": [
          {
            "text": "In this study, your child saw 15 stories in which a character did something good or bad. They were then asked to explainwhy that action was good or bad. Our goal was to prompt children to think about different concepts that justify moral decisions, including harm and fairness, but also considering categories like whether a behavior expressed gratitude, was dangerous, respected property rights, etc. For each story, there are many possible explanations that make sense, so there were no right or wrong responses. We are simply interested in what your child thinks."
          },
          {
            "text": "Studies like these help inform scientists and educators about the ways that children think about the world. In understanding how children explain morally acceptable and unacceptable behavior, we can better understand how to support children's socio-emotional development and ability to participate in social groups."
          },
          {
            "text": "Thank you again for participating in this study. Developmental research would be impossible without parental support. Please note that you have the right to withdraw your data from the study if you wish. We'll be emailing you a $5 Amazon gift card (please redeem this at amazon.com). This should arrive in your inbox within the next week after we confirm that a child is with you in the video recording and check that your child is in the age range for this study. If you don't hear from us by then, feel free to reach out! Please don't hesitate to contact us at vivhan@mit.edu if you have any additional questions or feedback!<br><br>The experiment is complete. Please close this window."
          }
        ]
      }
    }
  };
  const sequence = [
    "video-config",
    "video-quality",
    "video-consent",
    "instructions",
    "test-trials",
    "exit-survey"
  ];

  // == RANDOMIZATION ================================================
  const cat = Math.floor(2 * Math.random());
  const cond = Math.floor(2 * Math.random());
  
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const same_cat = (a, b) => (a >> 1) === (b >> 1);
  const swap = (a, b) => {
    const t = order[a];
    order[a] = order[b];
    order[b] = t;
  }
  
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(i * Math.random());
    swap(i,j);
  }

  for (let i = 1; i < order.length; i++) {
    if (!same_cat(order[i] !== order[i-1])) continue;

    let j = Math.floor((order.length - 2) * Math.random()) + 1;
    while (
      same_cat(order[i],   order[j-1]) || 
      same_cat(order[i],   order[j+1]) || 
      same_cat(order[i-1], order[j])   ||
      same_cat(order[i],   order[j])) {
      j = Math.floor((order.length - 2) * Math.random()) + 1;
    }
    swap(i,j);
  }

  // == STIMULI =======================================================
  const transition_audio = new Map([
    [2, "moral-intro"],
    [6, "star-1"],
    [11, "star-2"],
    [16, "star-3"],
  ]);

  const categories_a = [
    '1-harm',
    '2-danger',
    '3-care',
    '4-gratitude',
    '5-universal',
    '6-fairness',
    '7-rule'
  ];
  const categories_b = [
    '8-role',
    '9-property',
    '10-consideration',
    '11-authority',
    '12-loyalty',
    '13-utility',
    '14-disgust'
  ];
  const condition_1 = ['wrong-1', 'good-2'];
  const condition_2 = ['wrong-2', 'good-1'];
  const categories = (cat)? categories_a: categories_b;
  const condition = (cond)? condition_1: condition_2;

  const stories = [];
  for (const category of categories) {
    stories.push({
      name: category + "-" + condition[0],
      question: 'wrong'
    });
    stories.push({
      name: category + "-" + condition[1],
      question: 'good'
    });
  };

  const trial_audio = [
    {
      name: 'warmup-1',
      question: 'warmup-1-question',
    },
    {
      name: 'warmup-2',
      question: 'warmup-2-question'
    }
  ];
  for (let i = 0; i < 14; i++) {
    trial_audio.push(stories[order[i]]);
  }

  // == GENERATE STIMULI ==============================================
  
  const frame_list = trial_audio.map((trial, idx) => [
    {
      "id": trial.name + "-story",
      "audio": trial.name,
      "images": [{
        "src": trial.name + ".png",
        "position": "fill"
      }]
    },
    {
      "id": trial.name + "-response",
      "audio": trial.question,
      "images": [{
        "src": trial.name + ".png",
        "position": "fill"
      }],
      "showPreviousButton": true,
      "parentTextBlock": {
        "title": "For Caregivers",
        "text": "Encourage your kid to respond to the question! Press 'Next' to finish recording and continue to the next story."
      }
    },
    {
      "audio": (transition_audio.has(idx + 1))? transition_audio.get(idx + 1): "transition",
      "images": [{
        "src": "transition-" + (idx + 1) + ".png",
        "position": "fill"
      }],
      "showReplayButton": false,
      "doRecording": false
    }
  ]).flat();

  const intro = {
    "kind": "exp-lookit-video",
    "id": "intro",
    "video": {
      "position": "fill",
      "loop": false,
      "source": "intro"
    },
    "autoProceed": false,
    "doRecording": false,
    "videoTypes": ["mp4"]
  };
  frame_list.unshift(intro);

  frames["test-trials"] = {
    "kind": "group",
      "commonFrameProperties": {
        "kind": "exp-lookit-images-audio",
        "baseDir": "https://raw.githubusercontent.com/vivianhan404/moral-reasoning/refs/heads/main/",
        "audioTypes": ["mp3"],
        "autoProceed": false,
        "showPreviousButton": false,
        "doRecording": true
      },
      "frameList": frame_list
  };

  return {
    frames,
    sequence
  }
}