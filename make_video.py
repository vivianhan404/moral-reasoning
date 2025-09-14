import moviepy
import os

def convert2(filename):
  # shortcut
  convert(filename, filename, filename)

def convert(img, mp3, mp4):
  image = moviepy.ImageClip(f"img/{img}.png")

  audio = moviepy.AudioFileClip(f"mp3/{mp3}.mp3")

  video = moviepy.CompositeVideoClip([image.with_duration(audio.duration)])
  video = video.with_audio(audio)

  video.write_videofile(f"mp4/{mp4}.mp4", fps=30)

# ignore = ['transition']
# for filename in os.listdir('img'):
#   name = filename[:-4]
#   if name == '.DS_S' or name + ".mp4" in os.listdir('mp4'):
#     continue
#   if name.startswith('transition'):
#     continue
#   print(name)
#   convert(name)

# stars = {
#   6: "star_1",
#   12: "star_2",
#   17: "star_3",
# }

# for i in range(1, 18, 1):
#   if i in stars.keys():
#     convert(str(i), stars[i], 'transition_' + str(i))
#   else:
#     convert(str(i), 'transition', 'transition_' + str(i))
convert('intro', 'moral_intro', 'transition_3')
# convert2('harm_phys_wrong_1')
# convert2('harm_psych_wrong_1')
# convert2('care_phys_good_1')
# convert2('care_psych_good_1')