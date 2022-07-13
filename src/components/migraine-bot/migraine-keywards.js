// in MessageParser.js
class UtiKeywards {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  

   
  parse(message) {
    message=message.toLowerCase();
    const msg0=["my name", "doctor", "physician", "associate", "pharmacist","hey","hello","my name"]
    const msg1=["born", "dob", "birth", "your", "name", "date"]
    const msg2=["old", "age"]
    const msg3=["consent", "is that okay", "is that alright","are you okay with"]
    const msg4=["alright", "how are you", "how do you", "feeling"]
    const msg5=["help", "been happening", "here for"]
    const msg6=["location", "located", "where is", "where is the pain", "left side", "right side", "central", "centrally", "whole head", "forehead", "middle", "bilaterally", "unilaterally"]
    const msg7=["crushing", "tight", "dull", "sharp", "burn", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like", "burning", "look like"]
    const msg8=["touch", "press", "put pressure", "sore"]
    const msg9=["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration"]
    const msg10=["radiate", "spreads", "spread", "move", "moves", "anywhere else", "shooting", "radiate", "legs", "side"]
    const msg11=["relieves", "improves", "alleviates", "eases", "better", "dark"]
    const msg12=["harsher", "worse", "exacerbates", "aggravates", "triggers", "progressive", "gradual"]
    const msg13=["signs", "other symptoms", "vomiting", "nausea", "abdominal pain"]
    const msg14=["ten", "score", "out of 10", "how severe", "severity"]
    const msg15=["previous", "prior", "preceding", "earlier", "before", "aura", "episodes", "similar", "past"]
    const msg16=["throughout", "during"]
    const msg17=["following", "after"]
    const msg18=["underlying conditions", "known conditions", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "hospital"]
    const msg19=["immunised", "vaccines"]
    const msg20=["drugs", "recreational", "over the counter", "analgesia", "pain relief", "nsaid", "medications", "meds", "ointment", "cream"]
    const msg21=["reactions", "sensitivities", "allergies"]
    const msg22=["mum"," dad", "brother", "sister", "family history" ]
    const msg23=["job", "school", "education", "social", "work", "occuption"]
    const msg24=["smoke", "cigarettes", "smoked", "smoking"]
    const msg25=["spirit", "wine", "beer", "alcohol", "do you drink"]
    const msg26=["diet", "drink", "eat", "fluid", "eating", "drinking", "dry", "dehydration", "food", "appetite", "cholesterol"]
    const msg27=["home", "house", "living", "flat", "live", "support", "dependents"]
    const msg28=["routine", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle"]
    const msg29=["coffee", "energy drinks"," caffeine "]
    const msg30=["breath", "short of", "breathing", "sob", "shortness", "wheezing", "wheeze"]
    const msg31=["coughing", "phlegm", "sputum", "mucus", "cough", "dry cough", "bringing anything up"]
    const msg32=["hot", "feverish", "fever", "sweating", "sweat", "shivering", "rigors", "cold"]
    const msg33=["oedema", "swelling", "ankles", "inflammation", "calf", "calves", "swollen"]
    const msg34=["woke", "sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"]
    const msg35=["outside chest", "palpitations", "racing", "feel your heart"]
    const msg36=["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"]
    const msg37=["upset", "down", "sad", "unhappy", "miserable", "depressed", "stress", "stressed"]
    const msg38=["anxious", "anxiety"]
    const msg39=["mood", "behaviour", "attitude", "feelings"]
    const msg40=["adjustments", "new", "recent changes"]
    const msg41=["damage", "wound", "hard", "accident", "trauma", "injury" ]
    const msg42=["hay fever", "asthma", "eczema"]
    const msg43=["urinate", "wee", "poo", "faeces", "diarrhoea", "diarrhoeal", "incontinent", "incontinence", "urine", "bowel", "toilet", "constipated", "constipation", "water works", 'toileting', "dysuria", "stool", "colour"]
    const msg44=["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"]
    const msg45=["hear", "smelling", "sight", "vision", "sounds", "sound", "listen", "visual", "hear", "hearing", "smell", "smelling", "sensation", "headache", "dizzy", "dizziness"]
    const msg46=["menopause", "period", "pregnancy", "pregnant"]
    const msg47=["sexually active", "sex", "sexual" ]
    const msg48=["itch", "itchiness", "tickle"]
    const msg49=["tender", "tenderness"]
    const msg50=["faint", "syncope", "blackout", "collapse"]
    const msg51=["think", "thoughts", "your ideas"]
    const msg52=["worrying", "troubling you", "concerns"]
    const msg53=["expect", "out of", "you want to", "expectations"]
    const msg54=["holidays", "journey", "flight", "long haul", "travel", "exotic", "countries"]
    const msg55=["anything else"]
    const msg56=["night sweats"]
    const msg57=["anal tone", "anal sensation"]
    const msg58=["bone pain"]
    const msg59=["seizure"]
    const msg60=["neck stiffness"]
    const msg61=["blanching"," rash"]
    const msg62=["photophobia", "light sensitivity"]
    const msg63=["weight loss"," weight"]
    const msg64=["papilledema", "ear ringing" ]
    const msg65=["scalp"]
    const msg66=["swallow", "swallowing", "dysphagia"]
    const msg67=["anaemia"]
    const msg68=["steroid", "steroids"]
    const msg69=["pink urine", "red urine", "haematuria", "blood in urine"]
    const msg70=["haemoptysis", "coughing up blood"," blood"]
    const msg71=["bruising", "bruise" ]
    const msg72=["flank pain", "pain in side", "kidney pain", "side pain"]
    const msg73=["paralysis"]
    const msg74=["suicide", "suicidal"]
    const msg75=["confusion", "confused", "personality change"," behavioural changes"]
    const msg76=["clots", "clotting"]
    const msg77=["covid", "covid-19", "sars", "corona"]
    const msg78=["balance", "coordination", "ataxia", "walking"]
    const msg79=["belching", "burping", "bloated", "passing wind", "trump"]
    const msg80=["back pain", "pain in back", "joints"]
    const msg81=["lump", "growth", "abscess", "cancer", "tumour", "bumps"]
    const msg82=["pins and needles", "tingling", "numb"]
    const msg83=["face drooping", "loss of face" ]
    const msg84=["arm"]
    const msg85=["speech", "dysarthria"]
    const msg86=["motor", "strength", "weak", "weakness"]
    const msg87=["counselling", "council", "psychiatry", "shrink"] 
    const msg88=["thank you", "now finished", "complete the", "completed", "ended"] 





    if (msg0.some(el => message.includes(el)) ){
      this.actionProvider.handlemsg();
    }
    else 
      if (msg1.some(el => message.includes(el))) {
        this.actionProvider.handlemsg1();
      } 
      else
    if (msg2.some(el => message.includes(el))) {
      this.actionProvider.handlemsg2();
    } 
    else
    if (msg3.some(el => message.includes(el))) {
      this.actionProvider.handlemsg3();
    } 
    else
    if (msg4.some(el => message.includes(el))) {
      this.actionProvider.handlemsg4();
    } 
    else
    if (msg5.some(el => message.includes(el))) {
      this.actionProvider.handlemsg5();
    } 
    else
    if (msg6.some(el => message.includes(el))) {
      this.actionProvider.handlemsg6();
    } 
    else
    if (msg7.some(el => message.includes(el))) {
      this.actionProvider.handlemsg7();
    } 
    else
    if (msg8.some(el => message.includes(el))) {
      this.actionProvider.handlemsg8();
    } 
    else
    if (msg9.some(el => message.includes(el))) {
      this.actionProvider.handlemsg9();
    } 
    else
    if (msg10.some(el => message.includes(el))) {
      this.actionProvider.handlemsg10();
    } 
    else
    if (msg11.some(el => message.includes(el))) {
      this.actionProvider.handlemsg11();
    } 
    else
    if (msg12.some(el => message.includes(el))) {
      this.actionProvider.handlemsg12();
    }
    else
    if (msg13.some(el => message.includes(el))) {
      this.actionProvider.handlemsg13();
    } 
    else
    if (msg14.some(el => message.includes(el))) {
      this.actionProvider.handlemsg14();
    } 
   else
   if (msg15.some(el => message.includes(el))) {
    this.actionProvider.handlemsg15();
  }
  else
  if (msg16.some(el => message.includes(el))) {
    this.actionProvider.handlemsg16();
  }
  else
  if (msg17.some(el => message.includes(el))) {
    this.actionProvider.handlemsg17();
  }
  else
  if (msg18.some(el => message.includes(el))) {
    this.actionProvider.handlemsg18();
  }
  else
   if (msg19.some(el => message.includes(el))) {
    this.actionProvider.handlemsg19();
  }
  else
   if (msg20.some(el => message.includes(el))) {
    this.actionProvider.handlemsg20();
  }
  else
   if (msg21.some(el => message.includes(el))) {
    this.actionProvider.handlemsg21();
  }
  else
   if (msg22.some(el => message.includes(el))) {
    this.actionProvider.handlemsg22();
  }
  else
   if (msg23.some(el => message.includes(el))) {
    this.actionProvider.handlemsg23();
  }
  else
   if (msg24.some(el => message.includes(el))) {
    this.actionProvider.handlemsg24();
  }
  else
   if (msg25.some(el => message.includes(el))) {
    this.actionProvider.handlemsg25();
  }
  else
   if (msg26.some(el => message.includes(el))) {
    this.actionProvider.handlemsg26();
  }
  else
   if (msg27.some(el => message.includes(el))) {
    this.actionProvider.handlemsg27();
  }
  else
   if (msg28.some(el => message.includes(el))) {
    this.actionProvider.handlemsg28();
  }
  else
   if (msg29.some(el => message.includes(el))) {
    this.actionProvider.handlemsg29();
  }
  else
   if (msg30.some(el => message.includes(el))) {
    this.actionProvider.handlemsg30();
  }
  else
   if (msg31.some(el => message.includes(el))) {
    this.actionProvider.handlemsg31();
  }
  else
   if (msg32.some(el => message.includes(el))) {
    this.actionProvider.handlemsg32();
  }
  else
   if (msg33.some(el => message.includes(el))) {
    this.actionProvider.handlemsg33();
  }
  else
   if (msg34.some(el => message.includes(el))) {
    this.actionProvider.handlemsg34();
  }
  else
   if (msg35.some(el => message.includes(el))) {
    this.actionProvider.handlemsg35();
  }
  else
   if (msg36.some(el => message.includes(el))) {
    this.actionProvider.handlemsg36();
  }
  else
   if (msg37.some(el => message.includes(el))) {
    this.actionProvider.handlemsg37();
  }
  else
   if (msg38.some(el => message.includes(el))) {
    this.actionProvider.handlemsg38();
  }
  else
   if (msg39.some(el => message.includes(el))) {
    this.actionProvider.handlemsg39();
  }
  else
  if (msg40.some(el => message.includes(el))) {
    this.actionProvider.handlemsg40();
  }
  else
   if (msg41.some(el => message.includes(el))) {
    this.actionProvider.handlemsg41();
  }
  else
   if (msg42.some(el => message.includes(el))) {
    this.actionProvider.handlemsg42();
  }
  else
  if (msg43.some(el => message.includes(el))) {
    this.actionProvider.handlemsg43();
  }
  else
   if (msg44.some(el => message.includes(el))) {
    this.actionProvider.handlemsg44();
  }
  else
   if (msg45.some(el => message.includes(el))) {
    this.actionProvider.handlemsg45();
  }
  else
   if (msg46.some(el => message.includes(el))) {
    this.actionProvider.handlemsg46();
  }
  else
   if (msg47.some(el => message.includes(el))) {
    this.actionProvider.handlemsg47();
  }
  else
   if (msg48.some(el => message.includes(el))) {
    this.actionProvider.handlemsg48();
  }
  else
   if (msg49.some(el => message.includes(el))) {
    this.actionProvider.handlemsg49();
  }
  else
   if (msg50.some(el => message.includes(el))) {
    this.actionProvider.handlemsg50();
  }
  else
   if (msg51.some(el => message.includes(el))) {
    this.actionProvider.handlemsg51();
  }
  else
   if (msg52.some(el => message.includes(el))) {
    this.actionProvider.handlemsg52();
  }
  else
   if (msg53.some(el => message.includes(el))) {
    this.actionProvider.handlemsg53();
  }
  else
   if (msg54.some(el => message.includes(el))) {
    this.actionProvider.handlemsg54();
  }
  else
   if (msg55.some(el => message.includes(el))) {
    this.actionProvider.handlemsg55();
  }
  else
   if (msg56.some(el => message.includes(el))) {
    this.actionProvider.handlemsg56();
  }
  else
   if (msg57.some(el => message.includes(el))) {
    this.actionProvider.handlemsg57();
  }
  else
   if (msg58.some(el => message.includes(el))) {
    this.actionProvider.handlemsg58();
  }
  else
   if (msg59.some(el => message.includes(el))) {
    this.actionProvider.handlemsg59();
  }
  else
   if (msg60.some(el => message.includes(el))) {
    this.actionProvider.handlemsg60();
  }
  else
   if (msg61.some(el => message.includes(el))) {
    this.actionProvider.handlemsg61();
  }
  else
   if (msg62.some(el => message.includes(el))) {
    this.actionProvider.handlemsg62();
  }
  else
   if (msg63.some(el => message.includes(el))) {
    this.actionProvider.handlemsg63();
  }
  else
   if (msg64.some(el => message.includes(el))) {
    this.actionProvider.handlemsg64();
  }
  else
  if (msg65.some(el => message.includes(el))) {
  this.actionProvider.handlemsg65();
  }
  else
   if (msg66.some(el => message.includes(el))) {
    this.actionProvider.handlemsg66();
  }
  else
   if (msg67.some(el => message.includes(el))) {
    this.actionProvider.handlemsg67();
  }
  else
   if (msg68.some(el => message.includes(el))) {
    this.actionProvider.handlemsg68();
  }
  else
   if (msg69.some(el => message.includes(el))) {
    this.actionProvider.handlemsg69();
  }
  else
   if (msg70.some(el => message.includes(el))) {
    this.actionProvider.handlemsg70();
  }
  else
   if (msg71.some(el => message.includes(el))) {
    this.actionProvider.handlemsg71();
  }
  else
   if (msg72.some(el => message.includes(el))) {
    this.actionProvider.handlemsg72();
  }
  else
   if (msg73.some(el => message.includes(el))) {
    this.actionProvider.handlemsg73();
  }
  else
   if (msg74.some(el => message.includes(el))) {
    this.actionProvider.handlemsg74();
  }
  else
   if (msg75.some(el => message.includes(el))) {
    this.actionProvider.handlemsg75();
  }
  else
   if (msg76.some(el => message.includes(el))) {
    this.actionProvider.handlemsg76();
  }
  else
   if (msg77.some(el => message.includes(el))) {
    this.actionProvider.handlemsg77();
  }
  else
   if (msg78.some(el => message.includes(el))) {
    this.actionProvider.handlemsg78();
  }
  else
   if (msg79.some(el => message.includes(el))) {
    this.actionProvider.handlemsg79();
  }
  else
   if (msg80.some(el => message.includes(el))) {
    this.actionProvider.handlemsg80();
  }
  else
   if (msg81.some(el => message.includes(el))) {
    this.actionProvider.handlemsg81();
  }
  else
   if (msg82.some(el => message.includes(el))) {
    this.actionProvider.handlemsg82();
  }
  else
   if (msg83.some(el => message.includes(el))) {
    this.actionProvider.handlemsg83();
  }
  else
   if (msg84.some(el => message.includes(el))) {
    this.actionProvider.handlemsg84();
  }
  else
  if (msg85.some(el => message.includes(el))) {
    this.actionProvider.handlemsg85();
  }
  else
  if (msg86.some(el => message.includes(el))) {
    this.actionProvider.handlemsg86();
  }
  else
  if (msg87.some(el => message.includes(el))) {
    this.actionProvider.handlemsg87();
  }
  else
  if (msg88.some(el => message.includes(el))) {
    this.actionProvider.handlemsg88();
  }
  else
    this.actionProvider.bydefault();
  }
  
  
}


export default UtiKeywards;