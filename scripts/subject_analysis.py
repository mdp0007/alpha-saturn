import spacy
nlp = spacy.load('en_core_web_sm')

pxPositive = ["UnitedHealth projects major revenue boost in 2020 on the back of continued Optum growth"]
pxNegative = ["Montgomery Chamber Projects Major Losses in Tourism Industry"]
cx = ["Court Partially Overturns Class-Action Lawsuit Against OrganiGram Holdings"]
ax = [
      "Alexion to Acquire Portola",
      "Cognizant to acquire Collaborative Solutions",
      "Supernus to Acquire CNS Portfolio from US WorldMeds",
      "Novartis to acquire digital therapeutics maker Amblyotech",
      ]

combined = pxPositive + pxNegative + cx + ax

for c in combined:
  doc=nlp(c)
  print([(w.text, w.pos_) for w in doc])
  print([(w.text, w.dep_) for w in doc])