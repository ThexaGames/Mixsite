from django.db import models
from django.contrib.auth.models import User

# Models created here
class Track(models.Model):
    title = models.CharField('Title', max_length=50)
    artistUser = models.ForeignKey(User, blank=True, null=True)
    artistName = models.CharField('Artist', max_length=50)
    uploadDate = models.DateTimeField(auto_now=True, auto_now_add=True)
    parentTrack = models.ForeignKey('Track', blank=True, null=True)
    length = models.IntegerField('Length seconds')
    fileUrl = models.FileField(upload_to='tracks')

class Profile(models.Model):
    user = models.ForeignKey(User)