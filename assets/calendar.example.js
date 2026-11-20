window.CAL = {
 "period": "2026-11-23 to 2026-12-20",
 "tz": "US Eastern",
 "sides": {
  "subject": "The app",
  "around": "Stories around it"
 },
 "page": {
  "title": "Tidy Content Calendar",
  "kicker": "Example studio · Tidy · content calendar proposal",
  "headline": "4 weeks of *Tidy*, ready to post",
  "accent": "#f2c230",
  "sub": "Example plan for a made-up to-do app. Replace every field for the real subject.",
  "start": {
   "text": "<b>Start here:</b> 2026-11-23, 9:00. Post the first feature clip.",
   "key": "2026-11-23",
   "label": "Open the first post"
  },
  "quote": "Half the posts show the app, half tell the stories around it.",
  "strategyCards": [
   {
    "h": "Who it is for",
    "html": "<ul><li>People with long lists.</li></ul>"
   }
  ],
  "platforms": [
   {
    "name": "X",
    "role": "Primary",
    "why": "Where the audience talks.",
    "cadence": "3 per week"
   }
  ],
  "platformNote": "Limits checked by validate.mjs.",
  "trendIntro": "One trend scan, run when the plan was built.",
  "trendCards": [
   {
    "h": "Meme rules",
    "html": "<p>One template per post, never reused.</p>"
   }
  ],
  "batching": [
   {
    "h": "Weekly rhythm",
    "html": "<ul><li>Mon: clip. Wed: dev log.</li></ul>"
   }
  ],
  "decisions": [
   {
    "h": "1. Which account posts",
    "html": "<p>OPEN.</p>"
   }
  ],
  "made": [
   {
    "h": "Footage",
    "html": "<p>Screen recordings of the app.</p>"
   }
  ]
 },
 "pillars": [
  {
   "id": "product",
   "side": "subject",
   "name": "Product",
   "angle": "One feature per clip.",
   "formats": "Shorts",
   "color": "#2f6fd6",
   "dark": "#6c9cf0"
  },
  {
   "id": "build",
   "side": "around",
   "name": "Dev Log",
   "angle": "How and why we built it.",
   "formats": "Threads",
   "color": "#6b4fc4",
   "dark": "#a08cf0"
  },
  {
   "id": "memes",
   "side": "around",
   "name": "Memes",
   "angle": "One template per post, joke on us.",
   "formats": "Meme image",
   "color": "#c2368a",
   "dark": "#f06bb8"
  },
  {
   "id": "tales",
   "side": "around",
   "name": "Task Tales",
   "angle": "Labelled fiction from inside the app.",
   "formats": "Image card",
   "color": "#1f9a6b",
   "dark": "#4cc795",
   "fiction": true
  },
  {
   "id": "launch",
   "side": "subject",
   "name": "Launch",
   "angle": "The ask.",
   "formats": "Image post",
   "color": "#b8860b",
   "dark": "#e0b03c",
   "promo": true
  }
 ],
 "weeks": [
  {
   "n": 1,
   "theme": "Meet Tidy",
   "days": [
    {
     "date": "2026-11-23",
     "dow": "Mon",
     "pillar": "product",
     "title": "Feature clip #1",
     "format": "Short, 15 s",
     "platforms": [
      "X",
      "YouTube Shorts",
      "TikTok"
     ],
     "time": "X 9:00 ET",
     "media": [
      {
       "type": "video",
       "src": "shorts/f1/renders/f1.mp4",
       "cap": "Short",
       "vertical": true,
       "thumb": 1
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Tidy deletes your oldest task every night."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Tidy deletes your oldest task every night.\n\nIf it mattered, you will add it back."
      },
      {
       "k": "Shorts caption",
       "t": "The to-do app that deletes tasks on purpose #shorts"
      },
      {
       "k": "TikTok caption",
       "t": "A to-do app that fights back #productivity #todo #apps"
      },
      {
       "k": "YouTube Shorts title",
       "t": "The to-do app that deletes your tasks"
      }
     ]
    },
    {
     "date": "2026-11-24",
     "dow": "Tue",
     "off": "No post"
    },
    {
     "date": "2026-11-25",
     "dow": "Wed",
     "pillar": "build",
     "title": "Dev log #1",
     "format": "Thread, 3 posts, 1 image",
     "platforms": [
      "X",
      "Bluesky"
     ],
     "time": "X 12:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/devlog-1.png",
       "cap": "Thread image"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "We removed the settings page."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X thread",
       "t": "1/ We removed the settings page.\n\n2/ 80% of users never opened it.\n\n3/ The 20% who did changed one thing: the reset time."
      },
      {
       "k": "Bluesky post",
       "t": "We removed the settings page. Most people never opened it."
      },
      {
       "k": "Alt text",
       "t": "A chart of settings page visits per week."
      }
     ]
    },
    {
     "date": "2026-11-27",
     "dow": "Fri",
     "flex": "Flexible: reply to the week's best comment"
    },
    {
     "date": "2026-11-28",
     "dow": "Sat",
     "off": "Weekend off"
    }
   ]
  },
  {
   "n": 2,
   "theme": "How it works",
   "days": [
    {
     "date": "2026-11-30",
     "dow": "Mon",
     "pillar": "product",
     "title": "Feature clip #2",
     "format": "Short, 15 s",
     "platforms": [
      "X",
      "YouTube Shorts",
      "TikTok"
     ],
     "time": "X 9:00 ET",
     "media": [
      {
       "type": "video",
       "src": "shorts/f2/renders/f2.mp4",
       "cap": "Short",
       "vertical": true,
       "thumb": 1
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Tidy deletes your oldest task every night."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Tidy deletes your oldest task every night.\n\nIf it mattered, you will add it back."
      },
      {
       "k": "Shorts caption",
       "t": "The to-do app that deletes tasks on purpose #shorts"
      },
      {
       "k": "TikTok caption",
       "t": "A to-do app that fights back #productivity #todo #apps"
      },
      {
       "k": "YouTube Shorts title",
       "t": "The to-do app that deletes your tasks"
      }
     ]
    },
    {
     "date": "2026-12-01",
     "dow": "Tue",
     "off": "No post"
    },
    {
     "date": "2026-12-02",
     "dow": "Wed",
     "pillar": "build",
     "title": "Dev log #2",
     "format": "Thread, 3 posts, 1 image",
     "platforms": [
      "X",
      "Bluesky"
     ],
     "time": "X 12:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/devlog-2.png",
       "cap": "Thread image"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "We removed the settings page."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X thread",
       "t": "1/ We removed the settings page.\n\n2/ 80% of users never opened it.\n\n3/ The 20% who did changed one thing: the reset time."
      },
      {
       "k": "Bluesky post",
       "t": "We removed the settings page. Most people never opened it."
      },
      {
       "k": "Alt text",
       "t": "A chart of settings page visits per week."
      }
     ]
    },
    {
     "date": "2026-12-04",
     "dow": "Fri",
     "flex": "Flexible: reply to the week's best comment"
    },
    {
     "date": "2026-12-05",
     "dow": "Sat",
     "pillar": "memes",
     "trend": true,
     "meme": "Drake Hotline Bling",
     "title": "Meme: Drake",
     "format": "Meme image",
     "platforms": [
      "X"
     ],
     "time": "X 18:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/meme-drake.jpg",
       "cap": "Drake"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Us vs every other to-do app."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Every to-do app: add more\nUs: add less"
      },
      {
       "k": "Alt text",
       "t": "Drake meme: rejecting more tasks, approving fewer tasks."
      }
     ]
    }
   ]
  },
  {
   "n": 3,
   "theme": "Behind the build",
   "days": [
    {
     "date": "2026-12-07",
     "dow": "Mon",
     "pillar": "product",
     "title": "Feature clip #3",
     "format": "Short, 15 s",
     "platforms": [
      "X",
      "YouTube Shorts",
      "TikTok"
     ],
     "time": "X 9:00 ET",
     "media": [
      {
       "type": "video",
       "src": "shorts/f3/renders/f3.mp4",
       "cap": "Short",
       "vertical": true,
       "thumb": 1
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Tidy deletes your oldest task every night."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Tidy deletes your oldest task every night.\n\nIf it mattered, you will add it back."
      },
      {
       "k": "Shorts caption",
       "t": "The to-do app that deletes tasks on purpose #shorts"
      },
      {
       "k": "TikTok caption",
       "t": "A to-do app that fights back #productivity #todo #apps"
      },
      {
       "k": "YouTube Shorts title",
       "t": "The to-do app that deletes your tasks"
      }
     ]
    },
    {
     "date": "2026-12-08",
     "dow": "Tue",
     "off": "No post",
     "also": {
      "pillar": "tales",
      "title": "Fiction: the task that refused to die",
      "format": "Image card + short post",
      "platforms": [
       "X"
      ],
      "time": "X 20:00 ET",
      "media": [
       {
        "type": "img",
        "src": "assets/tale-1.png",
        "cap": "Fiction card"
       }
      ],
      "hooks": {
       "platform": "X",
       "list": [
        [
         "Bold claim",
         "Task #4,112 has survived 300 nights."
        ],
        [
         "Question",
         "What did you forget today?"
        ],
        [
         "Big number",
         "3 taps to add a task."
        ],
        [
         "POV",
         "your list is longer than your day."
        ],
        [
         "Contrarian",
         "Most to-do apps want more tasks. Ours wants fewer."
        ]
       ],
       "pick": 0,
       "why": "The claim is short and checkable in the clip."
      },
      "copy": [
       {
        "k": "X post",
        "t": "Fiction: a note found in the trash folder.\n\nTask #4,112 has survived 300 nights. Nobody knows how."
       },
       {
        "k": "Alt text",
        "t": "A card styled as a note, labelled Fiction."
       }
      ]
     }
    },
    {
     "date": "2026-12-09",
     "dow": "Wed",
     "pillar": "build",
     "title": "Dev log #3",
     "format": "Thread, 3 posts, 1 image",
     "platforms": [
      "X",
      "Bluesky"
     ],
     "time": "X 12:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/devlog-3.png",
       "cap": "Thread image"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "We removed the settings page."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X thread",
       "t": "1/ We removed the settings page.\n\n2/ 80% of users never opened it.\n\n3/ The 20% who did changed one thing: the reset time."
      },
      {
       "k": "Bluesky post",
       "t": "We removed the settings page. Most people never opened it."
      },
      {
       "k": "Alt text",
       "t": "A chart of settings page visits per week."
      }
     ]
    },
    {
     "date": "2026-12-11",
     "dow": "Fri",
     "flex": "Flexible: reply to the week's best comment"
    },
    {
     "date": "2026-12-12",
     "dow": "Sat",
     "off": "Weekend off"
    }
   ]
  },
  {
   "n": 4,
   "theme": "Launch week",
   "days": [
    {
     "date": "2026-12-14",
     "dow": "Mon",
     "pillar": "product",
     "title": "Feature clip #4",
     "format": "Short, 15 s",
     "platforms": [
      "X",
      "YouTube Shorts",
      "TikTok"
     ],
     "time": "X 9:00 ET",
     "media": [
      {
       "type": "video",
       "src": "shorts/f4/renders/f4.mp4",
       "cap": "Short",
       "vertical": true,
       "thumb": 1
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Tidy deletes your oldest task every night."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Tidy deletes your oldest task every night.\n\nIf it mattered, you will add it back."
      },
      {
       "k": "Shorts caption",
       "t": "The to-do app that deletes tasks on purpose #shorts"
      },
      {
       "k": "TikTok caption",
       "t": "A to-do app that fights back #productivity #todo #apps"
      },
      {
       "k": "YouTube Shorts title",
       "t": "The to-do app that deletes your tasks"
      }
     ]
    },
    {
     "date": "2026-12-15",
     "dow": "Tue",
     "off": "No post"
    },
    {
     "date": "2026-12-16",
     "dow": "Wed",
     "pillar": "build",
     "title": "Dev log #4",
     "format": "Thread, 3 posts, 1 image",
     "platforms": [
      "X",
      "Bluesky"
     ],
     "time": "X 12:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/devlog-4.png",
       "cap": "Thread image"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "We removed the settings page."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X thread",
       "t": "1/ We removed the settings page.\n\n2/ 80% of users never opened it.\n\n3/ The 20% who did changed one thing: the reset time."
      },
      {
       "k": "Bluesky post",
       "t": "We removed the settings page. Most people never opened it."
      },
      {
       "k": "Alt text",
       "t": "A chart of settings page visits per week."
      }
     ]
    },
    {
     "date": "2026-12-18",
     "dow": "Fri",
     "flex": "Flexible: reply to the week's best comment"
    },
    {
     "date": "2026-12-19",
     "dow": "Sat",
     "off": "Weekend off"
    },
    {
     "date": "2026-12-20",
     "dow": "Sun",
     "pillar": "launch",
     "title": "Out now",
     "format": "Image post",
     "platforms": [
      "X",
      "LinkedIn"
     ],
     "time": "X 10:00 ET",
     "media": [
      {
       "type": "img",
       "src": "assets/launch.png",
       "cap": "Launch card"
      }
     ],
     "hooks": {
      "platform": "X",
      "list": [
       [
        "Bold claim",
        "Tidy is out."
       ],
       [
        "Question",
        "What did you forget today?"
       ],
       [
        "Big number",
        "3 taps to add a task."
       ],
       [
        "POV",
        "your list is longer than your day."
       ],
       [
        "Contrarian",
        "Most to-do apps want more tasks. Ours wants fewer."
       ]
      ],
      "pick": 0,
      "why": "The claim is short and checkable in the clip."
     },
     "copy": [
      {
       "k": "X post",
       "t": "Tidy is out. It will delete one of your tasks tonight."
      },
      {
       "k": "LinkedIn post",
       "t": "Tidy is out today.\n\nWe built a to-do app that keeps your list short by removing the oldest task every night.\n\n#productivity #startup #apps"
      },
      {
       "k": "Alt text",
       "t": "The Tidy launch card."
      }
     ]
    }
   ]
  }
 ],
 "spares": [
  {
   "pillar": "build",
   "spare": true,
   "title": "Spare: the empty state",
   "format": "Single post",
   "platforms": [
    "X"
   ],
   "media": [
    {
     "type": "img",
     "src": "assets/devlog-1.png",
     "cap": "Empty state"
    }
   ],
   "hooks": {
    "platform": "X",
    "list": [
     [
      "Bold claim",
      "Our empty state has a joke in it."
     ],
     [
      "Question",
      "What did you forget today?"
     ],
     [
      "Big number",
      "3 taps to add a task."
     ],
     [
      "POV",
      "your list is longer than your day."
     ],
     [
      "Contrarian",
      "Most to-do apps want more tasks. Ours wants fewer."
     ]
    ],
    "pick": 0,
    "why": "The claim is short and checkable in the clip."
   },
   "copy": [
    {
     "k": "X post",
     "t": "Our empty state has a joke in it. 4% of users have seen it."
    },
    {
     "k": "Alt text",
     "t": "The empty list screen."
    }
   ],
   "hold": "Waiting for the number to be re-measured."
  }
 ],
 "trends": [
  {
   "date": "2026-11-30",
   "name": "Example event",
   "status": "verified",
   "use": "Week 2 meme",
   "src": "https://example.com/event"
  }
 ],
 "maxGap": 4
};
