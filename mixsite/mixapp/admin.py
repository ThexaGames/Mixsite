'''
Created on 9 Dec 2011

@author: Oscar Key
'''

from mixsite.mixapp.models import Track
from django.contrib import admin

# create admin classes
class TrackAdmin(admin.ModelAdmin):
    list_display = ('title', 'artistName')

# register the track model with the admin interface
admin.site.register(Track, TrackAdmin)