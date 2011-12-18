from django.http import HttpResponse, Http404, HttpResponseForbidden, HttpResponseBadRequest
from django.template import RequestContext, loader
from mixsite.mixapp.models import Track
from mixsite import settings
from django.contrib import auth

# Views created here
def index(request):
    template = loader.get_template('mixapp/index.html')
    context = RequestContext(request, {})
    return HttpResponse(template.render(context))


def tracks(request):
    # get a list of tracks in the database
    tracks = Track.objects.all()
    
    # create the page
    template = loader.get_template('mixapp/tracks.html')
    context = RequestContext(request, {
                       'tracks': tracks,
                       })
    return HttpResponse(template.render(context))


def trackDetail(request, trackId):
    # see if we can find this track in the database
    try:
        track = Track.objects.get(pk=trackId)
    except Track.DoesNotExist:
        raise Http404
    
    # create the page
    template = loader.get_template('mixapp/track.html')
    context = RequestContext(request, {
                       'track': track,
                       })
    return HttpResponse(template.render(context))


def users(request):
    pass


# api views
def authenticate(request):
    # check if the required post values have not been provided
    if request.method != 'POST':
        # respond with a 401
        return HttpResponseForbidden()
    
    # get the username and password from POST
    username = request.POST['username']
    password = request.POST['password']
    
    # try and authenticate this user
    user = auth.authenticate(username=username, password=password)
    
    # check if the login failed
    if user is None or not user.is_active:
        # respond with a 401
        return HttpResponseForbidden()
    
    # at this point the login must have succeeded so login and return no error
    auth.login(request, user)
    return HttpResponse('Login succeeded')

def logout(request):
    # logout the current user
    auth.logout(request)
    return HttpResponse('User logged out')

def editTrack(request):
    # check if post values have not been provided
    if request.method != 'POST':
        # respond with a 400
        return HttpResponseBadRequest
    
