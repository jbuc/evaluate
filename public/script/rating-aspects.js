// aspects.set(behaviors);
var behaviors = {
  "collaborates" : {
    "aspects" : [ "collnetwork", "collshare", "collrecognize", "collrespect" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Collaborates"
  },
  "collnetwork" : {
    "category" : "how",
    "parent" : "collaborates",
    "theme" : "core",
    "title" : "Develops effective internal partnerships & informal networks"
  },
  "collrecognize" : {
    "category" : "how",
    "parent" : "collaborates",
    "theme" : "core",
    "title" : "Recognizes teammates’ contributions/achievements"
  },
  "collrespect" : {
    "category" : "how",
    "parent" : "collaborates",
    "theme" : "core",
    "title" : "Models respect in all interactions"
  },
  "collshare" : {
    "category" : "how",
    "parent" : "collaborates",
    "theme" : "core",
    "title" : "Shares learnings, plans, information, and resources, taking or passing the ball as needed"
  },
  "commclear" : {
    "category" : "how",
    "parent" : "communicates",
    "theme" : "core",
    "title" : "Communicates in a timely & clear manner in all directions"
  },
  "commdirect" : {
    "category" : "how",
    "parent" : "communicates",
    "theme" : "core",
    "title" : "Shares the uncomfortable truths and deals with issues directly and candidly, maintaining audience receptivity"
  },
  "commercial" : {
    "aspects" : [ "compdrive", "comptrend", "compsolve", "comproi" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Acts Commercially"
  },
  "commlisten" : {
    "category" : "how",
    "parent" : "communicates",
    "theme" : "core",
    "title" : "Actively listens, staying receptive to good & bad news"
  },
  "communicates" : {
    "aspects" : [ "commlisten", "commclear", "commdirect", "commwhy" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Communicates Effectively"
  },
  "commwhy" : {
    "category" : "how",
    "parent" : "communicates",
    "theme" : "core",
    "title" : "Provides the why; explains the purpose behind decisions, activities, and assignments"
  },
  "compdrive" : {
    "category" : "how",
    "parent" : "commercial",
    "theme" : "core",
    "title" : "Uses an understanding of our financial drivers to make astute day-to-day business decisions"
  },
  "comproi" : {
    "category" : "how",
    "parent" : "commercial",
    "theme" : "core",
    "title" : "Makes decisions in context of ROI and impact on business objectives"
  },
  "compsolve" : {
    "category" : "how",
    "parent" : "commercial",
    "theme" : "core",
    "title" : "Works to turn ideas into solutions that add value for the company"
  },
  "comptrend" : {
    "category" : "how",
    "parent" : "commercial",
    "theme" : "core",
    "title" : "Stays current with industry & trends"
  },
  "conambiguity" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "connect",
    "theme" : "leader",
    "title" : "Make effective decisions when information is ambiguous and complex, probing beyond the obvious"
  },
  "condecide" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "connect",
    "theme" : "leader",
    "title" : "Find practical ways to figure things out, effectively evaluating risk and relying on Company values in decision making"
  },
  "coninsight" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "connect",
    "theme" : "leader",
    "title" : "Use insight & foresight looking beyond today to find potential opportunities for the business"
  },
  "connect" : {
    "aspects" : [ "conambiguity", "condecide", "coninsight" ],
    "category" : "how",
    "parent" : "leader",
    "theme" : "leader",
    "title" : "Connect the dots"
  },
  "consneed" : {
    "category" : "how",
    "parent" : "consumer",
    "theme" : "core",
    "title" : "Anticipates and addresses the consumer’s / customer’s perspective and needs"
  },
  "consrend" : {
    "category" : "how",
    "parent" : "consumer",
    "theme" : "core",
    "title" : "Stays current with consumer / customer, insights & trends"
  },
  "consumer" : {
    "aspects" : [ "consval", "consrend", "consneed" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Keeps the Consumer/Customer Close"
  },
  "consval" : {
    "category" : "how",
    "parent" : "consumer",
    "theme" : "core",
    "title" : "Finds and implements ways to create & add value for our consumer / customer"
  },
  "conunique" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "connect",
    "theme" : "leader",
    "title" : "Formulate own perspective while seeking to understand different/competing perspectives"
  },
  "core" : {
    "aspects" : [ "passion", "ownership", "integrity", "play", "commercial", "consumer", "collaborates", "communicates" ],
    "category" : "how",
    "theme" : "core",
    "title" : "Core Behaviors"
  },
  "devIIsolutions" : {
    "aspects" : [ "" ],
    "category" : "what",
    "key" : "devIIsolutions",
    "parent" : "devII",
    "theme" : "accountability",
    "title" : "Develop requested development assets, enhancements, and features."
  },
  "devI" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "dev",
    "title" : "Developer I"
  },
  "devII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "dev",
    "title" : "Developer II"
  },
  "devIII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "dev",
    "title" : "Developer III"
  },
  "devIIIsolutions" : {
    "aspects" : [ "" ],
    "category" : "what",
    "parent" : "devIII",
    "theme" : "accountability",
    "title" : "Develop requested development assets, enhancements, and features."
  },
  "devIIIsystems" : {
    "aspects" : [ "" ],
    "category" : "what",
    "parent" : "devIII",
    "theme" : "accountability",
    "title" : "Reviews, diagnoses, repairs, and maintains online experiences and ecommerce sites."
  },
  "devIIItalent" : {
    "aspects" : [ "" ],
    "category" : "what",
    "parent" : "devIII",
    "theme" : "accountability",
    "title" : "Explores, trains, and develops in understanding of HTML/CSS/Javascript knowledge for self and co workers"
  },
  "devIIsystems" : {
    "aspects" : [ "" ],
    "category" : "what",
    "parent" : "devII",
    "theme" : "accountability",
    "title" : "Reviews, diagnoses, repairs, and maintains online experiences and ecommerce sites."
  },
  "devIItalent" : {
    "aspects" : [ "" ],
    "category" : "what",
    "parent" : "devII",
    "theme" : "accountability",
    "title" : "Explores, trains, and develops in understanding of HTML/CSS/Javascript knowledge for self and co workers"
  },
  "devLead" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "dev",
    "title" : "Lead, Development"
  },
  "devMgr" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "dev",
    "title" : "Manager, Development "
  },
  "empclarify" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "empower",
    "theme" : "leader",
    "title" : "Clarify & assign roles and resources based on defined priorities"
  },
  "empdefine" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "empower",
    "theme" : "leader",
    "title" : "Define and provide strategy and priorities for the team"
  },
  "empfeedback" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "empower",
    "theme" : "leader",
    "title" : "Provide fair, timely & balanced feedback"
  },
  "empower" : {
    "aspects" : [ "empclarify", "empdefine", "empfeedback", "emptools" ],
    "category" : "how",
    "parent" : "leader",
    "theme" : "leader",
    "title" : "Empowers"
  },
  "emptools" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "empower",
    "theme" : "core",
    "title" : "Provide tools and remove obstacles to allow team to achieve success"
  },
  "engage" : {
    "aspects" : [ "engenvironment", "engmission", "engopportunity" ],
    "category" : "how",
    "parent" : "leader",
    "theme" : "leader",
    "title" : "Engages"
  },
  "engenvironment" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "engage",
    "theme" : "leader",
    "title" : "Create an environment where diversity thrives by recruiting, developing, respecting & relating well with people of varied experiences, ethnicities & opinions"
  },
  "engmission" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "engage",
    "theme" : "leader",
    "title" : "Connect team and its work with company’s shared mission and values"
  },
  "engopportunity" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "engage",
    "theme" : "leader",
    "title" : "Create opportunities for team members to provide input into direction and decisions"
  },
  "inspcelebrate" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "inspires",
    "theme" : "leader",
    "title" : "Celebrate team & individual wins"
  },
  "inspires" : {
    "aspects" : [ "inspcelebrate", "insppassion", "insppersuade", "inspteam" ],
    "category" : "how",
    "parent" : "leader",
    "theme" : "leader",
    "title" : "Inspires"
  },
  "insppassion" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "inspires",
    "theme" : "leader",
    "title" : "Demonstrate a contagious passion for our shared mission and values"
  },
  "insppersuade" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "inspires",
    "theme" : "leader",
    "title" : "Persuade others through genuine & confident presentation of information, adapting message to audience"
  },
  "inspteam" : {
    "aspects" : "",
    "category" : "how",
    "parent" : "inspires",
    "theme" : "leader",
    "title" : "Build a sense of community within the team"
  },
  "intconfronts" : {
    "category" : "how",
    "parent" : "integrity",
    "theme" : "core",
    "title" : "Confronts unethical actions"
  },
  "intdiffer" : {
    "category" : "how",
    "parent" : "integrity",
    "theme" : "core",
    "title" : "Voices views even when unpopular & encourages others to differ with him/her"
  },
  "integrity" : {
    "aspects" : [ "intwin", "intdiffer", "introle", "intconfronts" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Acts with Integrity"
  },
  "introle" : {
    "category" : "how",
    "parent" : "integrity",
    "theme" : "core",
    "title" : "Speaks and acts with the perspective of the role played in the company"
  },
  "intwin" : {
    "category" : "how",
    "parent" : "integrity",
    "theme" : "core",
    "title" : "Seeks the win/win, but does not prioritize (is not driven by) pleasing others; Willing to differ from others."
  },
  "leader" : {
    "aspects" : [ "inspires", "engage", "empower", "connect" ],
    "category" : "how",
    "theme" : "leader",
    "title" : "Leadership Behaviors"
  },
  "ownadmit" : {
    "category" : "how",
    "parent" : "ownership",
    "theme" : "core",
    "title" : "Takes accountability for personal performance; Admits mistakes"
  },
  "ownership" : {
    "aspects" : [ "ownmeet", "ownstep", "owngrow", "ownadmit" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Takes Ownership"
  },
  "owngrow" : {
    "category" : "how",
    "parent" : "ownership",
    "theme" : "core",
    "title" : "Seeks development & invites feedback, sharing personal strengths & opportunities"
  },
  "ownmeet" : {
    "category" : "how",
    "parent" : "ownership",
    "theme" : "core",
    "title" : "Meets set goals"
  },
  "ownstep" : {
    "category" : "how",
    "parent" : "ownership",
    "theme" : "core",
    "title" : "Takes initiative, stepping forward regardless of position"
  },
  "pasact" : {
    "category" : "how",
    "parent" : "passion",
    "theme" : "core",
    "title" : "Acts decisively with urgency & thought"
  },
  "pascalc" : {
    "category" : "how",
    "parent" : "passion",
    "theme" : "core",
    "title" : "Takes Calculated Risks to accomplish a remarkable result"
  },
  "pascommit" : {
    "category" : "how",
    "parent" : "passion",
    "theme" : "core",
    "title" : "Shows passionate commitment to meeting goals, tackling challenges with optimism"
  },
  "passet" : {
    "category" : "how",
    "parent" : "passion",
    "theme" : "core",
    "title" : "Sets challenging goals"
  },
  "passion" : {
    "aspects" : [ "passet", "pascommit", "pasact", "pascalc" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Drives with Passion"
  },
  "play" : {
    "aspects" : [ "playplan", "playexecute", "playpriority", "playmeasure" ],
    "category" : "how",
    "parent" : "core",
    "theme" : "core",
    "title" : "Play your Part"
  },
  "playexecute" : {
    "category" : "how",
    "parent" : "play",
    "theme" : "core",
    "title" : "Executes plans effectively & efficiently, adapting as needed"
  },
  "playmeasure" : {
    "category" : "how",
    "parent" : "play",
    "theme" : "core",
    "title" : "Tracks and measures performance"
  },
  "playplan" : {
    "category" : "how",
    "parent" : "play",
    "theme" : "core",
    "title" : "Develops action plans to deliver accountabilities"
  },
  "playpriority" : {
    "category" : "how",
    "parent" : "play",
    "theme" : "core",
    "title" : "Keeps focus on what matters while managing multiple demands"
  },
  "pmII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "pm",
    "title" : "Web PM II"
  },
  "pmIII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "pm",
    "title" : "Web PM III "
  },
  "uxI" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "design",
    "title" : "User Experience Designer I"
  },
  "uxII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "design",
    "title" : "User Experience Designer II"
  },
  "uxIII" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "design",
    "title" : "User Experience Designer III"
  },
  "uxMgr" : {
    "aspects" : [ "" ],
    "category" : "role",
    "parent" : "",
    "theme" : "design",
    "title" : "Manager, User Experience"
  }
};
