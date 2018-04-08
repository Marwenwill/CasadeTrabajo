"""djangular URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token
from scrumboard.views import UserList, UserDetail
from scrumboard import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^scrumboard/', include('scrumboard.urls')),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
]


"""
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1MjMxMzg0MTgsInVzZXJuYW1lIjoicm9vdCIsImVtYWlsIjoibWFyd2Vub3BAZ21haWwuY29tIiwidXNlcl9pZCI6MX0.apG6lSddEsC-EjlADt0sCopUtPZqYOFm99QAMYjMgnY
"""