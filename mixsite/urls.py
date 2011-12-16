from django.conf.urls.defaults import patterns, include, url
from django.contrib import admin
import mixapp.urls
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'mixsite.views.home', name='home'),
    # url(r'^mixsite/', include('mixsite.foo.urls')),
    
    # The urls for the mix app
    url(r'^', include(mixapp.urls)),

    # The admin system urls
    url(r'^admin/', include(admin.site.urls)),
)  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += staticfiles_urlpatterns()