// in MessageParser.js
class UtiKeywards {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }



  parse(message) {
      message = message.toLowerCase();
      const pack = ["my name", "doctor", "physician", "associate", "pharmacist", "hey", "hello",]
      const pack1 =  ["born", "dob", "birth", "your name", "date"]
      const pack2 = ["old", "age"]
      const pack3 = ["consent", "is that okay", "is that alright", "are you okay with"]
      const pack4 = ["alright", "how are you", "how do you", "feeling"]
      const pack5 = ["help", "been happening", "here for", "short of breath", "breathe"]
      const pack6 = ["location", "located", "where is", "where is the pain", "central, centrally, middle", "vagina", "penis", "bladder", "side", "bilaterally", "unilaterally"]
      const pack7 = ["crushing", "tight", "dull", "sharp", "describe the pain", "feel like", "indigestion", "throbbing", "pounding", "feel like", "burning, look like"]
      const pack8 = ["touch", "press", "put pressure", "sore"]
      const pack9 = ["onset", "started", "begun", "began", "start", "quickly", "sudden", "duration"]
      const pack10 = ["radiate", "spreads", "spread", "move", "moves", "anywhere else", "shooting, radiate", "moves"]
      const pack11 = ["relieves", "improves", "alleviates", "eases", "better"]
      const pack12 = ["harsher", "worse", "exacerbates", "aggravates", "triggers", "progressive", "gradual"]
      const pack13 = ["signs", "other symptoms", "vomiting", "nausea", "abdominal pain"]
      const pack14 = ["10","score", "out of 10", "how severe", "severity"]
      const pack15 = ["Previous", "prior", "preceding", "earlier", "before", "episodes", "similar", "past", "aura"]
      const pack16 = ["throughout", "during"]
      const pack17 = ["following", "after"]
      const pack18 = ["underlying conditions", "known conditions", "diagnosed", "medical history", "recently unwell", "cold", "strep", "obesity", "surgery", "surgeries", "diabetes", "admission", "hospital"]
      const pack19 = ["immunised", "vaccines"]
      const pack20 = ["drugs", "recreational", "over the counter", "analgesia", "pain relief", "nsaid", "medications", "meds", "ointment", "cream"]
      const pack21 = ["reactions", "sensitivities", "allergies"]
      const pack22 = ["mum", "dad", "brother", "sister", "family history"]
      const pack23 = ["job", "school", "education", "social", "work", "occupation"]
      const pack24 = ["smoke", "cigarettes", "smoked", "smoking"]
      const pack25 = ["spirit", "wine", "beer", "alcohol", "do you drink"]
      const pack26 = ["diet", "drink", "eat ", "fluid", "eating ", "drinking", "dry", "dehydration", "food", "appetite", "cholesterol"]
      const pack27 = ["home", "house", "living", "flat", "live", "support", "dependents"]
      const pack28 = ["routine", "daily life", "way of life", "walk", "exercise", "fitness", "workout", "lifestyle"]
      const pack29 = ["coffee", "energy drinks", "caffeine"]
      const pack30 = ["breath", "short of", "breathing", "sob", "shortness", "wheezing", "wheeze"]
      const pack31 = ["coughing", "phlegm", "sputum", "mucus", "cough", "dry cough", "bringing anything up"]
      const pack32 = ["hot", "feverish", "fever", "sweating", "sweat", "shivering", "rigors", "cold"]
      const pack33 = ["oedema", "swelling", "ankles", "inflammation", "calf", "calves", "swollen"]
      const pack34 = ["woke", "sleeping", "pillow", "sat up", "nap", "sleep", "upright", "bed"]
      const pack35 = ["outside chest", "palpitations", "racing", "feel your heart"]
      const pack36 = ["tiredness", "lethargy", "muscle", "ache", "tired", "fatigue", "exhausted", "drowsiness", "drowsy"]
      const pack37 = ["upset", "down", "sad", "unhappy", "miserable", "depressed", "stress, stressed"]
      const pack38 = ["anxious", "anxiety"]
      const pack39 = ["mood", "behaviour", "attitude", "feelings"]
      const pack40 = ["adjustments", "new", "recent changes"]
      const pack41 = ["damage", "wound", "hard", "accident", "trauma", "injury"]
      const pack42 = ["hay fever", "asthma", "eczema"];
      const pack43 = ["urinate", "wee", "poo", "faeces", "diarrhoea", "diarrhoeal", "incontinent", "incontinence", "urine", "bowel", "toilet", "constipated", "constipation", "water works", "toileting", "dysuria", "stool", "colour"]
      const pack44 = ["lesions", "pimples", "spots", "hives", "rash", "rashes", "skin", "irritation"]
      const pack45 = ["hear", "smelling", "sight", "vision", "sounds", "sound", "listen", "visual", "hear", "hearing", "smell", "smelling", "sensation", "headache", "dizzy", "dizziness"]
      const pack46 = ["menopause", "period", "pregnancy", "pregnant"]
      const pack47 = ["sexually active", "sex", "sexual"]
      const pack48 = ["itch", "itchiness", "tickle"]
      const pack49 = ["tender", "tenderness"]
      const pack50 = ["faint", "syncope", "blackout", "collapse"]
      const pack51 = ["think", "thoughts", "your ideas"]
      const pack52 = ["worrying", "troubling you", "concerns"]
      const pack53 = ["expect", "out of", "you want to", "expectations"]
      const pack54 = ["holidays", "journey", "flight", "long haul", "travel", "exotic", "countries"]
      const pack55 = ["anything else"]
      const pack56 = ["night sweats"]
      const pack57 = ["anal tone", "anal sensation"]
      const pack58 = ["bone pain"]
      const pack59 = ["seizure"]
      const pack60 = ["neck stiffness"]
      const pack61 = ["blanching", "rash"]
      const pack62 = ["photophobia", "light sensitivity"]
      const pack63 = ["weight loss", "weight"]
      const pack64 = ["papilledema", "ear ringing"]
      const pack65 = ["scalp"]
      const pack66 = ["swallow", "swallowing", "dysphagia"]
      const pack67 = ["anaemia"]
      const pack68 = ["steroid", "steroids"]
      const pack69 = ["pink urine", "red urine", "haematuria", "blood in urine"]
      const pack70 = ["bruising", "bruise"]
      const pack71 = ["flank pain", "pain in side", "kidney pain", "side pain"]
      const pack72 = ["haemoptysis", "coughing up blood", "blood"]
      const pack73 = ["paralysis"]
      const pack74 = ["suicide", "suicidal"]
      const pack75 = ["confusion", "confused", "personality change", "behavioural changes"]
      const pack76 = ["clots", "clotting"]
      const pack77 = ["covid", "covid-19", "SARS", "corona"]
      const pack78 = ["balance", "coordination", "ataxia", "walking"]
      const pack79 = ["belching", "burping", "bloated", "passing wind", "trump"]
      const pack80 = ["back pain", "pain in back", "joints"]
      const pack81 = ["lump", "growth", "abscess", "cancer", "tumour", "bumps"]
      const pack82 = ["pins and needles", "tingling", "numb"]
      const pack83 = ["face drooping", "loss of face"]
      const pack84 = ["arm"]
      const pack85 = ["speech", "dysarthria"]
      const pack86 = ["motor", "strength", "weak", "weakness"]
      const pack87 = ["counselling", "council", "psychiatry", "shrink"]
      const pack88 = ["thank you", "now finished", "complete the", "completed", "ended"]
          if (pack.some(el => message.includes(el))) {
                    this.actionProvider.Pack();
          }
          else
           if (pack1.some(el => message.includes(el))) {
                          this.actionProvider.Pack1();
           }
          else
           if (pack2.some(el => message.includes(el))) {
                          this.actionProvider.Pack2();
           }
           else
           if (pack3.some(el => message.includes(el))) {
                          this.actionProvider.Pack3();
           }
           else
           if (pack4.some(el => message.includes(el))) {
                          this.actionProvider.Pack4();
           }
           else
           if (pack5.some(el => message.includes(el))) {
                          this.actionProvider.Pack5();
           }
           else
           if (pack6.some(el => message.includes(el))) {
                          this.actionProvider.Pack6();
           }
           else
           if (pack7.some(el => message.includes(el))) {
                          this.actionProvider.Pack7();
           }
           else
           if (pack8.some(el => message.includes(el))) {
                          this.actionProvider.Pack8();
           }
           else
           if (pack9.some(el => message.includes(el))) {
                          this.actionProvider.Pack9();
           }
           else
           if (pack10.some(el => message.includes(el))) {
                          this.actionProvider.Pack10();
           }
           else
           if (pack11.some(el => message.includes(el))) {
                          this.actionProvider.Pack11();
           }
           else
           if (pack12.some(el => message.includes(el))) {
                          this.actionProvider.Pack12();
           }
           else
           if (pack13.some(el => message.includes(el))) {
                          this.actionProvider.Pack13();
           }
           else
           if (pack14.some(el => message.includes(el))) {
                          this.actionProvider.Pack14();
           }
           else
           if (pack15.some(el => message.includes(el))) {
                          this.actionProvider.Pack15();
           }
           else
           if (pack16.some(el => message.includes(el))) {
                          this.actionProvider.Pack16();
           }
           else
           if (pack17.some(el => message.includes(el))) {
                          this.actionProvider.Pack17();
           }
           else
           if (pack18.some(el => message.includes(el))) {
                          this.actionProvider.Pack18();
           }
           else
           if (pack19.some(el => message.includes(el))) {
                          this.actionProvider.Pack19();
           }
           else
           if (pack20.some(el => message.includes(el))) {
                          this.actionProvider.Pack20();
           }
           else
           if (pack21.some(el => message.includes(el))) {
                          this.actionProvider.Pack21();
           }
           else
           if (pack22.some(el => message.includes(el))) {
                          this.actionProvider.Pack22();
           }
           else
           if (pack23.some(el => message.includes(el))) {
                          this.actionProvider.Pack23();
           }
           else
           if (pack24.some(el => message.includes(el))) {
                          this.actionProvider.Pack24();
           }
           else
           if (pack25.some(el => message.includes(el))) {
                          this.actionProvider.Pack25();
           }
           else
           if (pack26.some(el => message.includes(el))) {
                          this.actionProvider.Pack26();
           }
           else
           if (pack27.some(el => message.includes(el))) {
                          this.actionProvider.Pack27();
           }
           else
           if (pack28.some(el => message.includes(el))) {
                          this.actionProvider.Pack28();
           }
           else
           if (pack29.some(el => message.includes(el))) {
                          this.actionProvider.Pack29();
           }
           else
           if (pack30.some(el => message.includes(el))) {
                          this.actionProvider.Pack30();
           }
           else
           if (pack31.some(el => message.includes(el))) {
                          this.actionProvider.Pack31();
           }
           else
           if (pack32.some(el => message.includes(el))) {
                          this.actionProvider.Pack32();
           }
           else
           if (pack33.some(el => message.includes(el))) {
                          this.actionProvider.Pack33();
           }
           else
           if (pack34.some(el => message.includes(el))) {
                          this.actionProvider.Pack34();
           }
           else
           if (pack35.some(el => message.includes(el))) {
                          this.actionProvider.Pack35();
           }
           else
           if (pack36.some(el => message.includes(el))) {
                          this.actionProvider.Pack36();
           }
           else
           if (pack37.some(el => message.includes(el))) {
                          this.actionProvider.Pack37();
           }
           else
           if (pack38.some(el => message.includes(el))) {
                          this.actionProvider.Pack38();
           }
           else
           if (pack39.some(el => message.includes(el))) {
                          this.actionProvider.Pack39();
           }
           else
           if (pack40.some(el => message.includes(el))) {
                          this.actionProvider.Pack40();
           }
           else
           if (pack41.some(el => message.includes(el))) {
                          this.actionProvider.Pack41();
           }
           else
           if (pack42.some(el => message.includes(el))) {
                          this.actionProvider.Pack42();
           }
           else
           if (pack43.some(el => message.includes(el))) {
                          this.actionProvider.Pack43();
           }
           else
           if (pack44.some(el => message.includes(el))) {
                          this.actionProvider.Pack44();
           }
           else
           if (pack45.some(el => message.includes(el))) {
                          this.actionProvider.Pack45();
           }
           else
           if (pack46.some(el => message.includes(el))) {
                          this.actionProvider.Pack46();
           }
           else
           if (pack47.some(el => message.includes(el))) {
                          this.actionProvider.Pack47();
           }
           else
           if (pack48.some(el => message.includes(el))) {
                          this.actionProvider.Pack48();
           }
           else
           if (pack49.some(el => message.includes(el))) {
                          this.actionProvider.Pack49();
           }
           else
           if (pack50.some(el => message.includes(el))) {
                          this.actionProvider.Pack50();
           }
           else
           if (pack51.some(el => message.includes(el))) {
                          this.actionProvider.Pack51();
           }
           else
           if (pack52.some(el => message.includes(el))) {
                          this.actionProvider.Pack52();
           }
           else
           if (pack53.some(el => message.includes(el))) {
                          this.actionProvider.Pack53();
           }
           else
           if (pack54.some(el => message.includes(el))) {
                          this.actionProvider.Pack54();
           }
           else
           if (pack55.some(el => message.includes(el))) {
                          this.actionProvider.Pack55();
           }
           else
           if (pack56.some(el => message.includes(el))) {
                          this.actionProvider.Pack56();
           }
           else
           if (pack57.some(el => message.includes(el))) {
                          this.actionProvider.Pack57();
           }
           else
           if (pack58.some(el => message.includes(el))) {
                          this.actionProvider.Pack58();
           }
           else
           if (pack59.some(el => message.includes(el))) {
                          this.actionProvider.Pack59();
           }
           else
           if (pack60.some(el => message.includes(el))) {
                          this.actionProvider.Pack60();
           }
           else
           if (pack61.some(el => message.includes(el))) {
                          this.actionProvider.Pack61();
           }
           else
           if (pack62.some(el => message.includes(el))) {
                          this.actionProvider.Pack62();
           }
           else
           if (pack63.some(el => message.includes(el))) {
                          this.actionProvider.Pack63();
           }
           else
           if (pack64.some(el => message.includes(el))) {
                          this.actionProvider.Pack64();
           }
           else
           if (pack65.some(el => message.includes(el))) {
                          this.actionProvider.Pack65();
           }
           else
           if (pack66.some(el => message.includes(el))) {
                          this.actionProvider.Pack66();
           }
           else
           if (pack67.some(el => message.includes(el))) {
                          this.actionProvider.Pack67();
           }
           else
           if (pack68.some(el => message.includes(el))) {
                          this.actionProvider.Pack68();
           }
           else
           if (pack69.some(el => message.includes(el))) {
                          this.actionProvider.Pack69();
           }
           else
           if (pack70.some(el => message.includes(el))) {
                          this.actionProvider.Pack70();
           }
           else
           if (pack71.some(el => message.includes(el))) {
                          this.actionProvider.Pack71();
           }
           else
           if (pack72.some(el => message.includes(el))) {
                          this.actionProvider.Pack72();
           }
           else
           if (pack73.some(el => message.includes(el))) {
                          this.actionProvider.Pack73();
           }
           else
           if (pack74.some(el => message.includes(el))) {
                          this.actionProvider.Pack74();
           }
           else
           if (pack75.some(el => message.includes(el))) {
                          this.actionProvider.Pack75();
           }
           else
           if (pack76.some(el => message.includes(el))) {
                          this.actionProvider.Pack76();
           }
           else
           if (pack77.some(el => message.includes(el))) {
                          this.actionProvider.Pack77();
           }
           else
           if (pack78.some(el => message.includes(el))) {
                          this.actionProvider.Pack78();
           }
           else
           if (pack79.some(el => message.includes(el))) {
                          this.actionProvider.Pack79();
           }
           else
           if (pack80.some(el => message.includes(el))) {
                          this.actionProvider.Pack80();
           }
           else
           if (pack81.some(el => message.includes(el))) {
                          this.actionProvider.Pack81();
           }
           else
           if (pack82.some(el => message.includes(el))) {
                          this.actionProvider.Pack82();
           }
           
           else
           if (pack83.some(el => message.includes(el))) {
                          this.actionProvider.Pack83();
           }
           else
           if (pack84.some(el => message.includes(el))) {
                          this.actionProvider.Pack84();
           }
           else
           if (pack85.some(el => message.includes(el))) {
                          this.actionProvider.Pack85();
           }
           else
           if (pack86.some(el => message.includes(el))) {
                          this.actionProvider.Pack86();
           }
           else
           if (pack87.some(el => message.includes(el))) {
                          this.actionProvider.Pack87();
           }
           else
           if (pack88.some(el => message.includes(el))) {
                          this.actionProvider.Pack88();
           }
           else
    this.actionProvider.bydefault();

          }
        }
         
        export default UtiKeywards;