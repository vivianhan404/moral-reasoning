import os

name = {
  'reckless': '2_danger',
  'protect': '2_danger',
  'careless': '3_care',
  'thoughtful': '3_care',
  'ungrateful': '4_gratitude',
  'grateful': '4_gratitude',
  'universalization': '5_universal',
  'unfair': '6_fairness',
  'fair': '6_fairness',
  'rule': '7_rule',
  'role': '8_role',
  'property': '9_property',
  'consideration': '10_consideration',
  'authority': '11_authority',
  'loyalty': '12_loyalty',
  'utility': '13_utility',
  'purity': '14_disgust'
}

folder = 'mp3'
ignore = ['harm', 'care_', 'transition', 'intro', 'manners']
for filename in os.listdir(folder):
  skip = False
  for fn in ignore:
    if filename.startswith(fn):
      skip = True
      break
  if skip:
    continue

  parts = filename.split('_')
  if len(parts) != 3:
    print(filename)
    continue
  parts[0] = name[parts[0]]
  new_name = '_'.join(parts)
  os.rename(folder + '/' + filename, folder + '/' + new_name)
# for i in range(1, 18):
#   os.rename('img/' + str(i) + '.png',  'img/transition_' + str(i) + '.png')