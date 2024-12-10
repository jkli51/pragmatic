from django.contrib.auth.models import User
from django.db import models

from articleapp.models import Article


# Create your models here.

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.SET_NULL, null=True, related_name='comment')
    writer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='comment')

    content = models.TextField(null=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_updated = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if self.pk:
            self.is_updated = True
        super().save(*args, **kwargs)
