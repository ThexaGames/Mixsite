'''
Created on 2 Dec 2011

@author: Oscar Key
'''
from django.conf.urls.defaults import patterns, url

urlpatterns = patterns('mixapp.views',
    # Examples:
    # url(r'^$', 'mixsite.views.home', name='home'),
    # url(r'^mixsite/', include('mixsite.foo.urls')),

    # Urls for the mixapp
    url(r'^$', 'index'),
    url(r'^tracks', 'tracks'),
    url(r'^track/(?P<trackId>\d+)', 'trackDetail'),
    url(r'^users', 'users'),
    
    # api urls
    url(r'^api/authenticate', 'authenticate'),
    url(r'^api/editTrack', 'editTrack'),
)
