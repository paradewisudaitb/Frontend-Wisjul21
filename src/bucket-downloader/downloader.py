'''
Author: Jeremia Axel
'''

import os
import boto3

from icecream import ic
import settings


def download_files(resource, bucket, local='/tmp', num=None):
    if not os.path.exists(local):
        os.makedirs(local)

    bucket = resource.Bucket(settings.BUCKET_NAME)
    ic(bucket)

    if num is None:
        object_list = bucket.objects.all()
    else:
        object_list = bucket.objects.limit(num)

    for object in object_list:
        if not object.key.endswith('/'):
            path, filename = os.path.split(object.key)
            dest_path = os.path.join(local, object.key)
            if not os.path.exists(os.path.dirname(dest_path)):
                os.makedirs(os.path.dirname(dest_path))

            ic(object.key, dest_path)
            bucket.download_file(object.key, dest_path)


ic.enable()
# ic.disable()

config = {
    "region_name": settings.OBJECT_STORAGE_REGION,
    "endpoint_url": f'https://{settings.OBJECT_STORAGE_REGION}.digitaloceanspaces.com',
    "aws_access_key_id": settings.AWS_ACCESS_KEY_ID,
    "aws_secret_access_key": settings.AWS_SECRET_ACCESS_KEY,
}

try:
    s3resource = boto3.resource('s3', **config)
    # s3client = boto3.client('s3', **config)
except Exception as e:
    ic(e)

dir_path = os.path.dirname(os.path.realpath(__file__))
print("Downloading in : " + dir_path)

download_files(s3resource, settings.BUCKET_NAME,
               local=os.path.join(dir_path, 'assets'))
