# Generated by Django 4.2.16 on 2024-11-23 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('commentapp', '0002_alter_comment_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='created_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]