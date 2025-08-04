import moviepy
import os

def convert(filename):
  image = moviepy.ImageClip(f"img/{filename}.png")

  audio = moviepy.AudioFileClip(f"mp3/{filename}.mp3")

  video = moviepy.CompositeVideoClip([image.with_duration(audio.duration)])
  video = video.with_audio(audio)

  video.write_videofile(f"mp4/{filename}.mp4", fps=24)

done = ["reckless_wrong_1", "warmup_1", ".DS_S"]
for filename in os.listdir('img'):
  name = filename[:-4]
  if name == '.DS_S' or name + ".mp4" in os.listdir('mp4'):
    continue
  assert not name in done
  print(name)
  convert(name)