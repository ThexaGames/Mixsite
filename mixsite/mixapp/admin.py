'''
Created on 9 Dec 2011

@author: Oscar Key
'''

from mixsite.mixapp.models import Track, Profile
from django.contrib import admin

# create admin classes
class TrackAdmin(admin.ModelAdmin):
    list_display = ('title', 'artistName')

# register the track model with the admin interface
admin.site.register(Track, TrackAdmin)



class ProfileAdmin(admin.ModelAdmin):
    pass
    #list_display = list('user.username')

# register the track model with the admin interface
admin.site.register(Profile, ProfileAdmin)