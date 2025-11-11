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

# folder = 'mp3'
# for filename in os.listdir(folder):
#   if not filename.startswith('trim_'):
#     continue
#   old_name = filename[5:]
#   os.rename(folder + '/' + filename, folder + '/' + old_name)


for i in range(1, 17):
  os.rename(f"t/{i}.png", f"img/transition-{i}.png")
